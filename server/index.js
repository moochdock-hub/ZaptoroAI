const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const nodemailer = require('nodemailer');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

// POST /api/ai-reply — Real AI powered by Anthropic Claude
app.post('/api/ai-reply', async (req, res) => {
  const { message, conversationHistory = [] } = req.body || {};
  if (!message) return res.status(400).json({ ok: false, error: 'missing message' });

  try {
    // Build conversation messages
    const messages = [
      ...conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: `You are ZapToro AI's intelligent assistant. You help potential clients understand how our AI-powered lead generation system can transform their business. 

Key offerings:
- 24/7 automated lead capture and response (under 60 seconds)
- AI-powered chatbots that qualify leads
- Integration with CRM systems (Google Calendar, Outlook, Jobber, ServiceTitan)
- 40%+ conversion rate improvement
- Founding Partner Program: 50% off lifetime for first 20 clients

Be enthusiastic, professional, and focus on the value of speed, automation, and AI technology. Guide users to book a free AI audit. Keep responses concise and actionable.`,
      messages: messages
    });

    const aiReply = response.content[0].text;
    
    return res.json({ 
      ok: true, 
      reply: aiReply,
      conversationId: response.id
    });
  } catch (error) {
    console.error('Anthropic API error:', error);
    
    // Fallback to rule-based responses
    const lower = String(message).toLowerCase();
    if (/book|audit|call|schedule/.test(lower)) {
      return res.json({ ok: true, reply: 'I can help schedule a free AI audit! Share your name and email, and we\'ll get you on the calendar within 24 hours.' });
    }
    if (/price|pricing|cost|fee/.test(lower)) {
      return res.json({ ok: true, reply: 'Our Founding Partner Program offers 50% off lifetime - typically starting at $1,500/month. We customize based on your lead volume and goals. Want to discuss specifics?' });
    }
    
    return res.json({ 
      ok: true, 
      reply: 'I\'m here to help you discover how ZapToro AI can transform your lead generation. What would you like to know about our AI automation platform?' 
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
