# 🚀 Deployment & Setup Guide

Complete step-by-step guide to get your portfolio live!

## Table of Contents
1. [Local Setup](#local-setup)
2. [Google Analytics Setup](#google-analytics-setup)
3. [Vercel Deployment (Recommended)](#vercel-deployment)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [Custom Domain](#custom-domain)
6. [Post-Launch Checklist](#post-launch-checklist)

---

## Local Setup

### Step 1: Install Node.js

**macOS:**
```bash
# Using Homebrew
brew install node

# Or using nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**
- Download from https://nodejs.org/ (LTS version)
- Run the installer

### Step 2: Verify Installation

```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show v9.x.x or higher
```

### Step 3: Install Project Dependencies

```bash
cd /path/to/maheshreddy32825.github.io
npm install
```

### Step 4: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000 in your browser

### Step 5: Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

---

## Google Analytics Setup

### Create a Google Analytics 4 Property

1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Enter your property name (e.g., "My Portfolio")
4. Setup details:
   - **Reporting timezone**: Your timezone
   - **Currency**: USD (or your preference)
5. Create a data stream for your website:
   - **Platform**: Web
   - **Website URL**: https://maheshreddy32825.vercel.app (or your domain)
   - **Stream name**: "Portfolio Website"
6. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### Add to Your Portfolio

Create `.env.local` in your project root:

```env
PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
```

Replace `G-YOUR_MEASUREMENT_ID` with your actual ID from step 6.

### Verify It's Working

1. Deploy your site (see below)
2. Visit your portfolio website
3. In Google Analytics → Realtime, you should see yourself as an active user

---

## Vercel Deployment (Recommended)

**Why Vercel?**
- ⚡ Fastest edge deployment globally
- 🔄 Auto-deploys on git push
- 📊 Built-in analytics
- 🆓 Free tier with unlimited deployments
- 🌍 Supports custom domains
- 🚀 Superior performance

### Step 1: Create Vercel Account

1. Go to https://vercel.com/
2. Click "Sign up"
3. Sign up with GitHub (recommended)
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. In Vercel dashboard, click "Add new..." → "Project"
2. Select "Import an existing project"
3. Paste your GitHub repository URL or select from list
4. Click "Import"

### Step 3: Configure Environment Variables

1. In the import screen, you'll see "Environment Variables"
2. Add your Google Analytics ID:
   - **Name**: `PUBLIC_ANALYTICS_ID`
   - **Value**: `G-YOUR_MEASUREMENT_ID`
3. Click "Deploy"

### Step 4: Wait for Deployment

- Vercel will automatically build and deploy your site
- You'll see a "Build Successful" message
- Visit the provided URL (something like `maheshreddy32825.vercel.app`)

### Step 5: Connect Your GitHub Repository

For automatic deploys on every push:

1. Your repository is already connected
2. Every time you push to `main`, Vercel auto-deploys
3. Check deployment status: https://vercel.com/dashboard

---

## GitHub Pages Deployment

**When to use GitHub Pages:**
- You prefer everything in one place
- You don't need advanced features
- You want the simplest setup

### Step 1: Update Astro Config

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  output: 'static',
  // ... rest stays the same
});
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 2: Create GitHub Pages Branch

```bash
cd your-repo
git checkout -b gh-pages
git push origin gh-pages
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" → "Pages"
3. Under "Source", select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
4. Click "Save"

### Step 4: Wait for Deployment

- GitHub will automatically build your site
- Check "Actions" tab for build status
- Site will be available at: https://YOUR_GITHUB_USERNAME.github.io

**Note:** First deploy takes 5-10 minutes. Subsequent deploys are faster.

---

## Custom Domain

After deploying to Vercel or GitHub Pages, connect your custom domain.

### Option A: With Vercel

1. Go to Vercel Dashboard → Project settings
2. Click "Domains"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Update nameservers at your domain registrar

### Option B: With GitHub Pages

1. Go to Repository Settings → Pages
2. Under "Custom domain", enter your domain
3. GitHub will create a `CNAME` file
4. Update your domain registrar's DNS:
   - **CNAME**: `YOUR_USERNAME.github.io`

### Popular Domain Registrars
- Namecheap
- GoDaddy
- Google Domains
- Route 53 (AWS)

---

## Post-Launch Checklist

### Verify Everything Works

- [ ] Visit your site in browser
- [ ] Test dark mode toggle
- [ ] Try Terminal CLI (type "help")
- [ ] Press Cmd+K for Command Palette
- [ ] Click social links (open in new tab)
- [ ] Download resume PDF
- [ ] Check Mobile responsiveness (use DevTools)

### Google Analytics

- [ ] Verify GA Measurement ID is set
- [ ] Check Real-time analytics shows your visit
- [ ] Enable/disable enhanced measurement as needed

### SEO & Meta Tags

- [ ] Check Open Graph tags (right-click → View page source)
- [ ] Test with https://www.opengraph.xyz/
- [ ] Verify favicon appears in browser tab
- [ ] Check robots.txt is accessible

### Performance

- [ ] Run Lighthouse audit (DevTools → Lighthouse)
- [ ] Target scores: 90+
- [ ] Check Core Web Vitals

### Security

- [ ] HTTPS is enabled (should be automatic)
- [ ] No console errors (check DevTools)
- [ ] Test all forms and links

### Social Sharing

- [ ] Test Twitter/LinkedIn share cards
- [ ] Verify link preview looks good
- [ ] Check mobile preview

### Final Steps

- [ ] Announce your portfolio on social media!
- [ ] Submit to Google Search Console
- [ ] Add to your email signature
- [ ] Share with recruiters/contacts

---

## Updating Your Site

### After Deploy, to Make Changes:

```bash
# Make your changes to files
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel/GitHub Pages will automatically redeploy!

### To Update Medium Blog Links

1. Publish new article on Medium
2. Your RSS feed auto-updates
3. Portfolio automatically shows your latest article
4. No manual updates needed!

---

## Troubleshooting

### Build Failing?

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Can't see Google Analytics?

- Verify `PUBLIC_ANALYTICS_ID` is set in environment
- Check GA property is created and active
- Allow 24-48 hours for data to appear
- Disable ad blockers (they block GA)

### Site not updating?

- Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)
- Check deployment status in Vercel/GitHub
- Verify code was pushed to correct branch

### Custom domain not resolving?

- Check DNS propagation: https://www.whatsmydns.net/
- DNS changes can take up to 48 hours
- Verify CNAME/A records are correct

---

## Getting Help

### Official Documentation
- **Astro**: https://docs.astro.build/
- **Vercel**: https://vercel.com/docs
- **GitHub Pages**: https://pages.github.com/
- **Tailwind CSS**: https://tailwindcss.com/docs

### Community Support
- **Astro Discord**: https://astro.build/chat
- **Stack Overflow**: Tag your question with `astro`
- **GitHub Issues**: Report bugs/request features

---

## Performance Optimization Tips

1. **Images**: Convert to WebP format for smaller file sizes
2. **Code**: Vercel auto-minifies and optimizes
3. **Caching**: Browser caches static assets automatically
4. **CDN**: Vercel distributes content globally via CDN

## Security Best Practices

- ✅ Always use HTTPS (automatic with Vercel/GitHub Pages)
- ✅ Keep dependencies updated: `npm update`
- ✅ Never commit `.env.local` (it's in `.gitignore`)
- ✅ Review GitHub permissions for Vercel
- ✅ Use strong passwords for your accounts

---

**You're all set! Your portfolio is now live! 🎉**

Share it with the world and happy networking! 🚀
