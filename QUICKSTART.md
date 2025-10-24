# 🚀 Quick Start Guide

## Get Your AI-Powered Website Running in 5 Minutes

### Prerequisites
- Node.js installed (v14 or higher)
- An Anthropic API key (free tier available)

### Step 1: Get API Key (2 minutes)
1. Go to https://console.anthropic.com/
2. Sign up/login
3. Create an API key
4. Copy the key (starts with `sk-ant-`)

### Step 2: Configure (1 minute)
1. Open the `.env` file in the root directory
2. Replace `sk-ant-your-api-key-here` with your actual API key:
```
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

### Step 3: Start Server (1 minute)
```bash
cd server
npm start
```

You should see: `Server running on http://localhost:3000`

### Step 4: Test Website (1 minute)
1. Open `ZAPTOROAI.html` in your browser
2. Click the floating robot icon in the bottom-right
3. Type "What is ZapToro AI?" and press Enter
4. Get an instant AI-powered response!

## ✅ That's It!

Your website now has:
- ✨ AI-powered chat widget
- 🤖 Anthropic Claude 3.5 Sonnet integration
- 💬 Intelligent conversation handling
- 🎨 Modern, cutting-edge design
- ⚡ Lightning-fast responses

## 🎯 What to Do Next

1. **Customize the AI** - Edit system prompt in `server/index.js`
2. **Add your branding** - Update images and colors
3. **Configure emails** - Set SMTP settings in `.env` for notifications
4. **Deploy live** - Use Vercel, Netlify, or your hosting provider

## 💡 Pro Tips

- **Test different questions** to see how the AI responds
- **Check the browser console** (F12) for any errors
- **Monitor API usage** at https://console.anthropic.com/
- **Read README_AI_SETUP.md** for detailed documentation

## 🆘 Need Help?

**Chat not working?**
- Is the server running? Check terminal for errors
- Is your API key correct in `.env`?
- Check browser console for JavaScript errors

**Server won't start?**
- Run `npm install` in the server directory
- Make sure port 3000 is not in use

---

Ready to dominate your market? Let's go! 🚀
