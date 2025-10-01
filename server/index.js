const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Optional: serve parent folder static files so you can open /ZAPTORO%20AI.html via same origin
app.use(express.static(path.join(__dirname, '..')));

// Configure transporter if SMTP env vars provided
let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: (process.env.SMTP_SECURE === 'true'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

// POST /api/book-audit
app.post('/api/book-audit', async (req, res) => {
  const { name, email, website, message } = req.body || {};
  if (!name || !email) return res.status(400).json({ ok: false, error: 'missing name/email' });

  try {
    let emailed = false;
    if (transporter && process.env.EMAIL_TO) {
      const mail = {
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: `Audit request: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website || ''}\n\nMessage:\n${message || ''}`
      };
      await transporter.sendMail(mail);
      emailed = true;
    }
    // echo back for client
    res.json({ ok: true, emailed });
  } catch (err) {
    console.error('Mail error', err);
    res.status(500).json({ ok: false, error: 'failed_to_send' });
  }
});

// POST /api/ai-reply (stub) — proxy to LLM provider server-side in production
app.post('/api/ai-reply', async (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ ok: false, error: 'missing message' });

  // Simple canned logic / echo — replace with real LLM call (server keeps API keys)
  const lower = String(message).toLowerCase();
  if (/book|audit|call/.test(lower)) {
    return res.json({ ok: true, reply: 'I can help schedule a free AI audit — would you like to share your name and email?' });
  }
  if (/price|pricing|cost/.test(lower)) {
    return res.json({ ok: true, reply: 'Typical engagements start around $3k/month. We tailor pricing to volume and goals.' });
  }

  // fallback echo
  return res.json({ ok: true, reply: `ZapToro Assistant (dev): I received "${message}". Ask me to "book a call" or "pricing".` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));