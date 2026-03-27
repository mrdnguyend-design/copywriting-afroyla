import re, html

files = [
    ("025 - Feb 03 - Not_Valentine_Sale", "d:/Copywriting Afroyla/klaviyo_data/campaigns/025_2026-02-03_TEASER_030226_Not_Valentine_Sale.html"),
    ("022 - Feb 04 - SHE_GETS_IT", "d:/Copywriting Afroyla/klaviyo_data/campaigns/022_2026-02-04_TEASER_040226_SHE_GETS_IT.html"),
    ("021 - Feb 05 - Claw_Machines", "d:/Copywriting Afroyla/klaviyo_data/campaigns/021_2026-02-05_TEASER_050226_Claw_Machines.html"),
    ("020 - Feb 06 - Math_Problem", "d:/Copywriting Afroyla/klaviyo_data/campaigns/020_2026-02-06_TEASER_060226_Math_Problem.html"),
    ("018 - Feb 07 - Two_Strategy", "d:/Copywriting Afroyla/klaviyo_data/campaigns/018_2026-02-07_TEASER_070226_Two_Strategy.html"),
    ("016 - Feb 08 - LAST_CALL", "d:/Copywriting Afroyla/klaviyo_data/campaigns/016_2026-02-08_TEASER_080226_LAST_CALL.html"),
    ("014 - Feb 09 - BLS_IS_LIVE", "d:/Copywriting Afroyla/klaviyo_data/campaigns/014_2026-02-09_TEASER_090226_BLS_IS_LIVE.html"),
]

for label, path in files:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    texts = re.findall(r'class="kl-text"[^>]*>\s*<div[^>]*>(.*?)</div>', content, re.DOTALL)
    print(f"\n{'='*60}")
    print(f"  {label}")
    print(f"{'='*60}")
    for t in texts[:1]:
        clean = re.sub(r'<[^>]+>', '\n', t)
        clean = html.unescape(clean)
        lines = [line.strip() for line in clean.split('\n') if line.strip()]
        print('\n'.join(lines[:80]))
    print()
