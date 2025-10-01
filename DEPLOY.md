# Deploy to Hostinger (GitHub + GitHub Actions)

Short: push repo to GitHub, set secrets, Actions uploads files to Hostinger public_html.

1) Prepare repo
- git init
- git add .
- git commit -m "initial"
- create a GitHub repo and push (main branch)

2) Add GitHub secrets (Repository Settings → Secrets & variables → Actions)
- HOSTINGER_HOST = your host (ftp.hostinger.com or SFTP host)
- HOSTINGER_USER = FTP/SFTP username (hosting account)
- HOSTINGER_PASSWORD = FTP/SFTP password
- HOSTINGER_PORT = 21 (FTP) or 22 (SFTP) — default 21
- HOSTINGER_TARGET = /public_html/ (or target folder)
- OPTIONAL: NODE_APP = yes if deploying server/ for Node (see notes)

3) What the workflow does
- On push to main: checks out repo and uploads site files to HOSTINGER_TARGET.
- You can exclude server/ if you host Node separately or upload server/ to a different folder.

4) Hostinger Node app (if using Node)
- Upload server/ to hosting root (e.g., /server)
- In hPanel → Node.js App, set App root to /server, set PORT env var and other env vars, then start app.
- If you cannot run Node, host static site only and use Hostinger Email Marketing or a webhook.

5) Notes & security
- Do NOT commit .env with secrets.
- Test with local server before deploying.
- If your plan supports SFTP prefer SFTP (safer than FTP).

6) Troubleshooting
- Use passive FTP if connection fails.
- Check Action logs for upload path and permission errors.

Deploying ZapToro AI site to Hostinger

1) Upload files
- Upload all files from this folder to Hostinger's public_html (or the appropriate site root) using the File Manager or FTP.
- Ensure the `index.html` file is present (it redirects to the main page).
- Put the logo file at `assets/logo.png` before testing so the favicon and navbar logo load.

2) Test
- Visit your domain and verify the page loads; test the booking form and AI assistant locally first using a static server.

3) Optional: Booking form backend
- If you want the booking form to actually store bookings or send emails, deploy a small Node app (example included in /server).
- Hostinger supports Node on some plans; alternatively, host the server elsewhere (Heroku, Fly, Vercel Serverless function, or a small VPS) and set window.AI_ENDPOINT or form POST target accordingly.

4) AI Assistant
- To enable real AI replies, host an endpoint that accepts POST {message} and returns {reply}. Set window.AI_ENDPOINT to that URL.

Need me to generate a serverless function or to wire the form to a specific provider (Zapier, Make, Postmark)? Tell me which and I will scaffold it.