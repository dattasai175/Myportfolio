# Deploy to Netlify - Step by Step Guide

This guide will walk you through deploying your Next.js portfolio to Netlify.

## Prerequisites
- GitHub account
- Git installed on your computer
- Your code pushed to a GitHub repository

---

## Step 1: Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Netlify deployment"

# Create a new repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Sign Up / Login to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"** or **"Log in"**
3. Choose **"Sign up with GitHub"** (recommended for easy integration)

---

## Step 3: Deploy Your Site

### Option A: Deploy via Netlify Dashboard (Recommended)

1. Once logged in, click **"Add new site"** → **"Import an existing project"**

2. **Connect to Git provider:**
   - Click **"GitHub"** or **"GitLab"** or **"Bitbucket"**
   - Authorize Netlify to access your repositories
   - Select your portfolio repository

3. **Configure build settings:**
   - **Branch to deploy:** `main` (or your default branch)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   
   ⚠️ **Important:** Netlify should auto-detect Next.js, but if not, use these settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment variables (if needed):**
   - Click **"Show advanced"** if you have any environment variables
   - Add them here (e.g., API keys, secrets)

5. Click **"Deploy site"**

6. **Wait for deployment** (usually 2-5 minutes)

7. Your site will be live at: `https://random-name-12345.netlify.app`

---

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize Netlify:**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Choose your team
   - Give your site a name (or press Enter for random name)
   - Build command: `npm run build`
   - Directory to deploy: `.next`

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

---

## Step 4: Configure Next.js for Netlify

The `netlify.toml` file has been created in your project root with the correct settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

This ensures:
- ✅ Next.js plugin is installed automatically
- ✅ Correct build command
- ✅ Correct publish directory
- ✅ Node.js version specified

---

## Step 5: Install Netlify Next.js Plugin (Automatic)

Netlify will automatically install `@netlify/plugin-nextjs` during deployment. This plugin:
- Handles Next.js routing correctly
- Optimizes serverless functions
- Enables ISR (Incremental Static Regeneration)
- Handles API routes

---

## Step 6: Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `dattakatikaneni.com`)
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

---

## Step 7: Automatic Deployments

Once connected to GitHub:
- ✅ Every push to `main` branch = automatic deployment
- ✅ Pull requests = preview deployments
- ✅ Deploy logs available in dashboard

---

## Troubleshooting

### Build Fails?

1. **Check build logs** in Netlify dashboard
2. **Common issues:**
   - Missing dependencies → Ensure `package.json` has all dependencies
   - Build command wrong → Should be `npm run build`
   - Node version → Netlify uses Node 18 by default (configured in `netlify.toml`)

### Images Not Loading?

- External images need to be in `next.config.js`:
  ```js
  images: {
    domains: ['cdn.simpleicons.org', 'images.unsplash.com'],
  }
  ```

### 404 Errors?

- Make sure `@netlify/plugin-nextjs` is installed
- Check that `netlify.toml` has the plugin configuration

### Performance Issues?

- Enable **"Next.js Runtime"** in Site settings → Build & deploy → Environment
- This uses Netlify's optimized Next.js runtime

---

## Quick Commands Reference

```bash
# Deploy to production
netlify deploy --prod

# Deploy preview (for testing)
netlify deploy

# View site logs
netlify logs

# Open site in browser
netlify open:site
```

---

## Your Site URL

After deployment, your site will be available at:
- **Production:** `https://your-site-name.netlify.app`
- **Preview:** `https://deploy-preview-X--your-site-name.netlify.app` (for PRs)

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect to Netlify
3. ✅ Deploy
4. ✅ Share your portfolio link! 🎉

Your portfolio is now live and will automatically update on every git push!


