# Deployment Guide

This guide will help you deploy your Next.js portfolio to the web so you can share it with others.

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the easiest deployment experience.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://your-project-name.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `dattakatikaneni.com`)

### Advantages:
- ✅ Free tier with generous limits
- ✅ Automatic deployments on git push
- ✅ Built-in SSL/HTTPS
- ✅ Global CDN
- ✅ Zero configuration needed

---

## Option 2: Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

---

## Option 3: Railway

### Steps:

1. **Push to GitHub**

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up/login with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Next.js
   - Your site will be live automatically

---

## Option 4: Render

### Steps:

1. **Push to GitHub**

2. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Sign up/login
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Settings:
     - Build Command: `npm install && npm run build`
     - Start Command: `npm start`
   - Click "Create Web Service"
   - Your site will be live at: `https://your-app.onrender.com`

---

## Quick Start (Vercel - Recommended)

### Prerequisites:
- GitHub account
- Git installed on your computer

### Commands:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Ready for deployment"

# 4. Create a new repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main

# 5. Go to vercel.com and import your repository
# 6. Click Deploy - Done! 🎉
```

---

## Important Notes:

1. **Environment Variables:** If you add any API keys or secrets later, add them in your hosting platform's dashboard under "Environment Variables"

2. **Build Errors:** If deployment fails, check:
   - All dependencies are in `package.json`
   - No hardcoded local paths
   - Build runs successfully locally (`npm run build`)

3. **Performance:** Vercel automatically optimizes Next.js apps for best performance

4. **Updates:** After deployment, every time you push to GitHub, your site will automatically update!

---

## Recommended: Vercel

For a Next.js portfolio, **Vercel is the best choice** because:
- Made by Next.js creators
- Zero configuration
- Free forever for personal projects
- Fastest deployment
- Best Next.js optimization

Your portfolio will be live in under 5 minutes! 🚀


