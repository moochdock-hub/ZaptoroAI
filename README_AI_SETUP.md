# ZapToro AI - Setup Guide

## 🚀 What's New

Your website now features **cutting-edge AI capabilities** powered by Anthropic's Claude 3.5 Sonnet:

### ✨ New Features

1. **AI Chat Widget** - A floating chat button that allows visitors to:
   - Ask questions about your services 24/7
   - Get instant, intelligent responses
   - Learn about pricing and features
   - Book free AI audits

2. **Anthropic API Integration** - Backend server that:
   - Processes chat messages through Claude AI
   - Maintains conversation context
   - Provides fallback responses if API is unavailable
   - Handles form submissions and email notifications

## 🔧 Setup Instructions

### Step 1: Get Your Anthropic API Key

1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to "API Keys" section
4. Click "Create Key" and copy your API key
5. The key will start with `sk-ant-`

### Step 2: Configure Environment Variables

1. In the root directory, create a `.env` file (already created, just needs your key)
2. Open `.env` and add your Anthropic API key:

```env
ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
```

**Optional: Configure Email Notifications**

If you want to receive email notifications when users book audits:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
```

### Step 3: Start the Server

```bash
# Navigate to server directory
cd server

# Start the server
npm start

# Or for development with auto-restart
npm run dev
```

The server will start on `http://localhost:3000`

### Step 4: Open Your Website

1. Open `ZAPTOROAI.html` in your browser
2. You should see a floating AI chat button in the bottom-right corner
3. Click it to test the AI chat functionality

## 🎨 Website Enhancements

### Modern Design Updates

- **Premium gradient backgrounds** with advanced animations
- **Hi-tech logo** with circuit patterns and hologram effects
- **Interactive elements** with smooth hover effects
- **Cutting-edge typography** using Poppins and Rajdhani fonts
- **Energy flow animations** and neon glow effects
- **AI-themed imagery** showcasing neural networks and automation

### Improved Copy

- **Aggressive, conversion-focused headlines** that demand attention
- **Benefits-driven content** highlighting speed, automation, and ROI
- **Social proof sections** with case studies and metrics
- **Urgency messaging** with Founding Partner program
- **Clear CTAs** throughout the page

## 💡 Using the AI Chat

### For Visitors

1. Click the pulsing robot icon in bottom-right corner
2. Type questions about:
   - Lead generation services
   - Pricing and packages
   - How the AI system works
   - Booking a free audit
3. Get instant, intelligent responses powered by Claude AI

### Conversation Features

- **Context awareness** - AI remembers previous messages
- **Natural language** - Understands various ways of asking questions
- **Professional tone** - Enthusiastic yet business-appropriate
- **Action-oriented** - Guides users toward booking audits

## 🔒 Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Keep API keys secret** - Don't share them publicly
3. **Monitor API usage** - Check your Anthropic dashboard regularly
4. **Set rate limits** - Consider implementing rate limiting in production

## 📊 Monitoring & Analytics

### Check API Usage

Visit [https://console.anthropic.com/](https://console.anthropic.com/) to monitor:
- Number of API calls
- Token usage
- Response times
- Error rates

### Chat Analytics

To track chat interactions, you can:
1. Add analytics to `assets/js/ai-chat.js`
2. Log conversations to your database
3. Use the conversation history for training

## 🛠️ Customization

### Modify AI Personality

Edit the system prompt in `server/index.js`:

```javascript
system: `You are ZapToro AI's intelligent assistant...`
```

### Adjust Chat Widget Styling

Edit styles in `assets/js/ai-chat.js` or add CSS to your main stylesheet.

### Change API Model

In `server/index.js`, modify the model parameter:

```javascript
model: 'claude-3-5-sonnet-20241022', // Current model
// or
model: 'claude-3-opus-20240229', // More powerful, more expensive
```

## 🚨 Troubleshooting

### Chat Widget Not Appearing

1. Check browser console for errors (F12)
2. Ensure `ai-chat.js` is loading correctly
3. Verify the server is running

### AI Not Responding

1. Check `.env` file has correct API key
2. Verify server is running on port 3000
3. Check server console for errors
4. Test API key in Anthropic dashboard

### CORS Issues

If testing locally with `file://` protocol, use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

## 📈 Next Steps

### Production Deployment

1. **Use environment variables** - Set ANTHROPIC_API_KEY on your hosting platform
2. **Add rate limiting** - Prevent abuse of the AI endpoint
3. **Implement caching** - Cache common responses to reduce API calls
4. **Add analytics** - Track chat usage and conversion rates
5. **Set up monitoring** - Alert when API errors occur

### Enhancements

1. **Lead capture** - Collect email before chat or after valuable responses
2. **CRM integration** - Send chat transcripts to your CRM
3. **Multi-language** - Support multiple languages automatically
4. **Voice input** - Add speech-to-text for chat
5. **File uploads** - Allow users to share documents

## 💰 Cost Management

### Anthropic Pricing (as of 2024)

- **Claude 3.5 Sonnet**: $3 per million input tokens, $15 per million output tokens
- **Claude 3 Opus**: $15 per million input tokens, $75 per million output tokens

### Estimated Costs

For a typical chat conversation (5 messages):
- Input: ~500 tokens = $0.0015
- Output: ~300 tokens = $0.0045
- **Total per conversation: ~$0.006**

For 1000 monthly conversations: **~$6/month**

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review server logs for errors
3. Test API key in Anthropic console
4. Check browser console for client-side errors

## 📝 License & Credits

- **Anthropic Claude** - AI capabilities
- **TailwindCSS** - Styling framework
- **Font Awesome** - Icons
- **Unsplash** - Stock imagery

---

**Built with ❤️ using Anthropic Claude AI**

Now go dominate your market! 🚀⚡
