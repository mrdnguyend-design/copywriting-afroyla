/**
 * 📬 Afroyla Customer Email Fetcher
 * 
 * Kết nối Gmail via IMAP, fetch email chưa đọc,
 * lưu ra fetched-emails.json để AI xử lý.
 * 
 * Usage: node fetch-emails.js
 */

import 'dotenv/config';
import { ImapFlow } from 'imapflow';
import { simpleParser } from 'mailparser';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = join(__dirname, 'fetched-emails.json');
const LAST_FETCH_FILE = join(__dirname, '.last-fetch');

// Validate environment
if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD ||
    process.env.GMAIL_APP_PASSWORD === 'your-app-password-here') {
    console.error('❌ ERROR: Chưa cấu hình Gmail credentials!');
    console.error('   Mở file scripts/.env và điền GMAIL_USER + GMAIL_APP_PASSWORD');
    console.error('   Xem hướng dẫn tạo App Password trong file .env');
    process.exit(1);
}

const client = new ImapFlow({
    host: 'imap.gmail.com',
    port: 993,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
    logger: false, // Tắt debug logs
});

async function fetchEmails() {
    const emails = [];

    try {
        console.log(`📬 Kết nối ${process.env.GMAIL_USER}...`);
        await client.connect();
        console.log('✅ Kết nối thành công!');

        // Mở INBOX
        const lock = await client.getMailboxLock('INBOX');

        try {
            // Tìm email chưa đọc (UNSEEN)
            const messages = client.fetch(
                { seen: false },
                {
                    source: true,       // Raw email source để parse
                    envelope: true,     // Basic metadata
                    flags: true,        // Read/unread status
                }
            );

            let count = 0;
            for await (const message of messages) {
                try {
                    // Parse email content
                    const parsed = await simpleParser(message.source);

                    const emailData = {
                        id: message.uid,
                        date: parsed.date ? parsed.date.toISOString() : new Date().toISOString(),
                        from: {
                            name: parsed.from?.value?.[0]?.name || 'Unknown',
                            email: parsed.from?.value?.[0]?.address || 'unknown',
                        },
                        subject: parsed.subject || '(no subject)',
                        body: parsed.text || parsed.html?.replace(/<[^>]*>/g, ' ').trim() || '(empty)',
                        // Truncate very long emails
                        bodyPreview: (parsed.text || '').substring(0, 2000),
                    };

                    emails.push(emailData);
                    count++;
                    console.log(`  📧 ${count}. [${emailData.from.name}] ${emailData.subject}`);

                    // Mark as SEEN so we don't fetch again
                    await client.messageFlagsAdd(message.uid, ['\\Seen'], { uid: true });

                } catch (parseErr) {
                    console.error(`  ⚠️ Lỗi parse email UID ${message.uid}:`, parseErr.message);
                }
            }

            console.log(`\n📊 Tổng: ${count} email mới`);

        } finally {
            lock.release();
        }

    } catch (err) {
        if (err.authenticationFailed) {
            console.error('❌ Sai Gmail credentials! Kiểm tra lại .env file.');
            console.error('   Đảm bảo dùng App Password, không phải password thường.');
        } else {
            console.error('❌ Lỗi kết nối:', err.message);
        }
        process.exit(1);

    } finally {
        await client.logout().catch(() => { });
    }

    // Save results
    const result = {
        fetchedAt: new Date().toISOString(),
        count: emails.length,
        emails: emails,
    };

    writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`\n💾 Đã lưu ${emails.length} emails → fetched-emails.json`);

    // Save last fetch timestamp
    writeFileSync(LAST_FETCH_FILE, new Date().toISOString(), 'utf-8');

    if (emails.length === 0) {
        console.log('\n📭 Không có email mới.');
    }

    return result;
}

// Run
fetchEmails().catch(console.error);
