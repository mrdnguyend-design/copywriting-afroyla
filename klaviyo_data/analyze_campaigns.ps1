# Analyze Klaviyo Campaigns
# Extracts text from HTML, categorizes, and generates analysis

$csvPath = 'd:\Copywriting Afroyla\klaviyo_data\campaigns_export.csv'
$campaignsDir = 'd:\Copywriting Afroyla\klaviyo_data\campaigns'
$outputDir = 'd:\Copywriting Afroyla\klaviyo_data'

# Read CSV
$csv = Import-Csv $csvPath

# Initialize
$typeCount = @{}
$monthlyCount = @{}
$campaignSeriesMap = @{}
$allEmails = @()

foreach ($row in $csv) {
    $date = $row.Date
    $name = $row.Name
    $subject = $row.Subject
    $preview = $row.PreviewText
    
    # Extract type
    $type = 'OTHER'
    if ($name -match '(?i)^(DAILY|STORY|Story|6Story)') { $type = 'STORY/DAILY' }
    elseif ($name -match '(?i)^(SALE)') { $type = 'SALE' }
    elseif ($name -match '(?i)^(TEASER)') { $type = 'TEASER' }
    elseif ($name -match '(?i)^(Clone)') { $type = 'CLONE/RESEND' }
    
    # Extract campaign series
    $series = 'Standalone'
    if ($name -match '(?i)(BFCM|Black Friday)') { $series = 'BFCM (Black Friday/Cyber Monday)' }
    elseif ($name -match '(?i)(SECRET SANTA)') { $series = 'Secret Santa Week' }
    elseif ($name -match '(?i)(XMAS|Christmas)') { $series = 'Christmas/Free Shipping' }
    elseif ($name -match '(?i)(KWANZAA)') { $series = 'Kwanzaa' }
    elseif ($name -match '(?i)(AMAZON|AMZ)') { $series = 'Amazon' }
    elseif ($name -match '(?i)(CYBER MONDAY)') { $series = 'Cyber Monday' }
    elseif ($name -match '(?i)(Best Before BF)') { $series = 'Best Before Black Friday' }
    elseif ($name -match '(?i)(BLS|Black Love)') { $series = 'Black Love Sale' }
    elseif ($name -match '(?i)(Clearance)') { $series = 'Clearance Sale' }
    elseif ($name -match '(?i)(200 Project)') { $series = 'The 200 Project' }
    elseif ($name -match '(?i)(Legacy Collection)') { $series = 'Legacy Collection' }
    elseif ($name -match '(?i)(Weekend Special)') { $series = 'Weekend Specials' }
    elseif ($name -match '(?i)(Survey)') { $series = 'Community Survey' }
    elseif ($name -match '(?i)(Locessa)') { $series = 'Locessa Collection' }
    elseif ($name -match '(?i)(BHM|Black History)') { $series = 'Black History Month' }
    
    # Count
    if (-not $typeCount.ContainsKey($type)) { $typeCount[$type] = 0 }
    $typeCount[$type]++
    
    $month = $date.Substring(0, 7)
    if (-not $monthlyCount.ContainsKey($month)) { $monthlyCount[$month] = 0 }
    $monthlyCount[$month]++
    
    if (-not $campaignSeriesMap.ContainsKey($series)) { $campaignSeriesMap[$series] = 0 }
    $campaignSeriesMap[$series]++
    
    $allEmails += [PSCustomObject]@{
        Date = $date
        Type = $type
        Series = $series
        Name = $name
        Subject = $subject
        PreviewText = $preview
    }
}

# Extract text content from an HTML file
function Get-EmailText {
    param([string]$htmlPath)
    
    if (-not (Test-Path $htmlPath)) { return "" }
    
    $content = Get-Content $htmlPath -Raw -Encoding UTF8
    
    # Get the main text content div (kl-text)
    # Extract text between <p> tags in the main body area
    $text = ""
    
    # Remove everything before the body text starts (after logo image)
    if ($content -match '(?s)class="kl-text"[^>]*>.*?<div[^>]*>(.*?)</div>\s*</td>') {
        $mainContent = $matches[1]
    } else {
        $mainContent = $content
    }
    
    # Extract all text from <p> tags
    $paragraphs = [regex]::Matches($mainContent, '(?s)<p[^>]*>(.*?)</p>')
    $textParts = @()
    foreach ($p in $paragraphs) {
        $pText = $p.Groups[1].Value
        # Strip HTML tags
        $pText = $pText -replace '<br\s*/?>', "`n"
        $pText = $pText -replace '<[^>]+>', ''
        # Decode HTML entities
        $pText = $pText -replace '&amp;', '&'
        $pText = $pText -replace '&lt;', '<'
        $pText = $pText -replace '&gt;', '>'
        $pText = $pText -replace '&quot;', '"'
        $pText = $pText -replace '&#39;', "'"
        $pText = $pText -replace '&nbsp;', ' '
        $pText = $pText -replace '\u00e2\u0080\u009c', '"'
        $pText = $pText -replace '\u00e2\u0080\u009d', '"'
        $pText = $pText.Trim()
        if ($pText -and $pText -ne '---' -and $pText -notmatch '^POST-EMAIL MENU' -and $pText -notmatch '^Leather Handbags' -and $pText -notmatch '^Leather Tote' -and $pText -notmatch '^Wallets' -and $pText -notmatch 'Help.*cs@afroyla' -and $pText -notmatch 'No longer want to receive') {
            $textParts += $pText
        }
    }
    
    # Also extract list items
    $listItems = [regex]::Matches($mainContent, '(?s)<li[^>]*>(.*?)</li>')
    foreach ($li in $listItems) {
        $liText = $li.Groups[1].Value -replace '<[^>]+>', ''
        $liText = $liText.Trim()
        if ($liText) {
            $textParts += "• $liText"
        }
    }
    
    return ($textParts -join "`n")
}

# Find matching HTML file for each CSV row
function Find-HtmlFile {
    param([string]$date, [string]$name)
    
    $files = Get-ChildItem $campaignsDir -Filter "*.html" | Sort-Object Name
    
    # Try to match by date
    $dateFormatted = $date -replace '-', ''
    foreach ($file in $files) {
        if ($file.Name -match $date -or $file.Name -match $dateFormatted) {
            # Check if name keywords match
            $nameWords = ($name -replace '[|]', '' -split '\s+' | Where-Object { $_.Length -gt 3 }) -join '.*'
            if ($file.Name -match $nameWords -or $true) {
                return $file.FullName
            }
        }
    }
    return $null
}

Write-Host "=== CAMPAIGN TYPE BREAKDOWN ==="
$typeCount.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object {
    Write-Host ("  {0}: {1}" -f $_.Key, $_.Value)
}

Write-Host ""
Write-Host "=== MONTHLY BREAKDOWN ==="
$monthlyCount.GetEnumerator() | Sort-Object Key | ForEach-Object {
    Write-Host ("  {0}: {1}" -f $_.Key, $_.Value)
}

Write-Host ""
Write-Host "=== CAMPAIGN SERIES ==="
$campaignSeriesMap.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object {
    Write-Host ("  {0}: {1}" -f $_.Key, $_.Value)
}

Write-Host ""
Write-Host ("Total campaigns: {0}" -f $csv.Count)

# Now extract text from a sample of emails for analysis
Write-Host ""
Write-Host "=== EXTRACTING TEXT FROM HTML FILES ==="

$files = Get-ChildItem $campaignsDir -Filter "*.html" | Sort-Object Name
$extractedCount = 0

$allExtracted = @()
foreach ($file in $files) {
    $text = Get-EmailText -htmlPath $file.FullName
    if ($text) {
        $extractedCount++
        $wordCount = ($text -split '\s+').Count
        $allExtracted += [PSCustomObject]@{
            FileName = $file.Name
            WordCount = $wordCount
            TextPreview = if ($text.Length -gt 100) { $text.Substring(0, 100) + "..." } else { $text }
            FullText = $text
        }
    }
}

Write-Host ("Successfully extracted text from {0}/{1} files" -f $extractedCount, $files.Count)

# Find top 10 longest emails (likely best storytelling)
Write-Host ""
Write-Host "=== TOP 10 LONGEST EMAILS (Best Storytelling Candidates) ==="
$allExtracted | Sort-Object WordCount -Descending | Select-Object -First 10 | ForEach-Object {
    Write-Host ("  {0} words - {1}" -f $_.WordCount, $_.FileName)
}

# Save extracted text summaries
$allExtracted | Select-Object FileName, WordCount, TextPreview | Export-Csv "$outputDir\extracted_text_summary.csv" -NoTypeInformation -Encoding UTF8

Write-Host ""
Write-Host "Saved extraction summary to extracted_text_summary.csv"
Write-Host "Done!"
