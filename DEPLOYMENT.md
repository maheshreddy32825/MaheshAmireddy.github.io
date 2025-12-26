# 🚀 Deployment Guide

Complete guide to deploy your portfolio to Vercel, GitHub Pages, or custom domain.

---

## Table of Contents
1. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Environment Variables](#environment-variables)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Monitoring & Analytics](#monitoring--analytics)

---

## Vercel Deployment (Recommended)

Vercel is the easiest and most recommended option. It auto-deploys when you push to GitHub.

### Prerequisites
- GitHub account with your portfolio repository pushed
- Vercel account (free)

### Step 1: Connect to Vercel

1. Go to: https://vercel.com
2. Click **"Continue with GitHub"**
3. Grant permission to access your repositories
4. Find and select: `mahesh-portfolio` (or your repo name)
5. Click **"Import"**

### Step 2: Configure Project Settings

Vercel shows import dialog:

```
Framework: Astro ✓
Build & Development Settings:
  Build Command: npm run build ✓
  Output Directory: dist ✓
  Development Command: npm run dev ✓
```

Everything should be correct by default. Click **"Deploy"**

### Step 3: Wait for Initial Deploy

- Vercel builds your project
- Takes 2-5 minutes
- You'll see: **"Congratulations! Your project has been successfully deployed"**
- **Live URL**: https://mahesh-portfolio-xxxxx.vercel.app

### Step 4: Set Environment Variables

1. **Still in Vercel Dashboard**, click **"Settings"**
2. Click **"Environment Variables"** in left sidebar
3. Add each variable:

   **Variable 1: Google Analytics**
   - Name: `PUBLIC_ANALYTICS_ID`
   - Value: `G-YOUR_MEASUREMENT_ID` (your actual GA ID)
   - Environments: Production, Preview, Development
   - Click **"Add"**

   **Variable 2: GitHub Token**
   - Name: `GITHUB_TOKEN`
   - Value: `[Your GitHub Personal Access Token]` (get from GitHub settings)
   - Environments: All
   - Click **"Add"**

   **Variable 3: GitHub Username**
   - Name: `GITHUB_USERNAME`
   - Value: `maheshreddy32825`
   - Environments: All
   - Click **"Add"**

4. Click **"Save"**
5. Click **"Redeploy"** button to rebuild with new variables

### Step 5: Wait for Redeploy

- Takes 2-5 minutes
- Once done, your site is fully live with analytics and GitHub integration

### Auto-Deploy on Every Push

**From now on, when you push to GitHub:**
```bash
git add .
git commit -m "Your message"
git push origin main
```

**Vercel automatically:**
1. Detects the push
2. Rebuilds your site
3. Deploys changes
4. Live within 2-5 minutes

---

## GitHub Pages Deployment

Alternative option if you prefer GitHub Pages.

### Step 1: Update astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://maheshreddy32825.github.io',  // Change this
  output: 'static',
  // ... rest of config
});
```

### Step 2: Build

```bash
npm run build
```

### Step 3: Create gh-pages Branch

```bash
git checkout -b gh-pages
git add dist/ -f
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 4: Configure GitHub

1. Go to: https://github.com/maheshreddy32825/mahesh-portfolio
2. Click **"Settings"**
3. Scroll to **"Pages"**
4. Source: Select **"Deploy from a branch"**
5. Branch: Select **"gh-pages"**
6. Click **"Save"**

### Step 5: Wait for Deploy

- GitHub deploys within 1-2 minutes
- Your site is live at: https://maheshreddy32825.github.io

**Note**: GitHub Pages doesn't support environment variables, so GitHub integration and analytics won't work.

---

## Custom Domain Setup

### With Vercel (Recommended)

1. **Buy domain** from:
   - Namecheap, GoDaddy, Route 53, Cloudflare, etc.

2. **In Vercel Dashboard:**
   - Click your project
   - Go to **"Settings"** → **"Domains"**
   - Enter your domain: `yourdomain.com`
   - Click **"Add"**

3. **Vercel shows nameserver instructions**
   - Go to your domain registrar
   - Update nameservers to Vercel's
   - Wait 24-48 hours for DNS to propagate

4. **Verify in Vercel**
   - DNS status should show **"Valid Configuration"**
   - Site accessible at: https://yourdomain.com

---

## Environment Variables

### What They Do

```env
PUBLIC_ANALYTICS_ID     # Google Analytics tracking
GITHUB_TOKEN           # Authenticate with GitHub API
GITHUB_USERNAME        # Your GitHub username for pinned repos
```

### Local Development (.env.local)

```bash
# Create file at project root
touch .env.local

# Add:
PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
GITHUB_TOKEN=[Your GitHub Personal Access Token]
GITHUB_USERNAME=maheshreddy32825
```

**Important**: `.env.local` is in `.gitignore` (never committed to GitHub)

### Production (Vercel)

Same variables configured in Vercel Dashboard → Environment Variables → Production

### Getting GitHub Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"**
3. Select scopes: `public_repo`
4. Click **"Generate token"**
5. **Copy immediately** (can't view again)
6. Add to `.env.local` and Vercel Environment Variables

---

## Post-Deployment Checklist

### ✅ Immediately After Deploy

- [ ] Visit live site in browser
- [ ] Click through all 4 pages (Home, About, Projects, Blog)
- [ ] Test terminal commands
- [ ] Test dark mode toggle
- [ ] Check mobile responsiveness (DevTools toggle)
- [ ] Verify links work (GitHub, Medium, project links)
- [ ] Check console for errors (DevTools → Console)

### ✅ Wait 24 Hours

- [ ] Google Analytics starts showing data (Real-time section)
- [ ] Medium blog articles appear
- [ ] GitHub pinned repos display

### ✅ Weekly Checks

- [ ] Monitor Google Analytics dashboard
- [ ] Check for any errors in browser console
- [ ] Verify all links still work
- [ ] Update content as needed

---

## Monitoring & Analytics

### Google Analytics Dashboard

1. Go to: https://analytics.google.com
2. Select your property: Mahesh Portfolio
3. View:
   - **Real-time**: Live visitor activity
   - **Acquisition**: Where visitors come from
   - **Behavior**: Pages visited, actions taken
   - **Conversions**: Goals/events tracked

### Vercel Analytics

1. Vercel Dashboard → Your project
2. Click **"Analytics"** tab
3. View:
   - **Requests**: Traffic to your site
   - **Performance**: Core Web Vitals
   - **Errors**: Build and runtime errors

### GitHub Insights

1. Go to: https://github.com/maheshreddy32825/mahesh-portfolio
2. Click **"Insights"**
3. View:
   - Commits over time
   - Contributors
   - Traffic (popular pages, referrers)

---

## Troubleshooting Deployment

### Site shows old version after deploy
```bash
# Hard refresh in browser
Cmd+Shift+R (macOS)
Ctrl+Shift+R (Windows/Linux)

# Or clear cache in Vercel:
# Vercel Dashboard → Settings → Advanced → Clear cache
```

### Build fails on Vercel
1. Check Vercel build logs (Deployments tab)
2. Check all environment variables are set
3. Ensure `.env.local` values match Vercel vars
4. Try local build: `npm run build`

### GitHub repos not showing
1. Verify `GITHUB_TOKEN` is in Vercel environment variables
2. Check token hasn't expired
3. Verify token has `public_repo` scope
4. Verify 6 repos are pinned on GitHub profile
5. Trigger redeploy in Vercel

### Analytics showing no data
1. Wait 24-48 hours for GA to initialize
2. Check `PUBLIC_ANALYTICS_ID` is set in Vercel
3. Verify ID starts with `G-` not `UA-`
4. Check GA Real-time tab shows visits
5. Hard refresh browser with Cmd+Shift+R

---

## Performance Optimization

### Lighthouse Audit (Free)

```bash
# Run locally
npm run build
npm run preview
```

Then in browser:
1. DevTools → F12
2. Click "Lighthouse" tab
3. Click "Generate report"
4. Target: 90+ on all metrics

### Vercel Analytics

Check your site's Core Web Vitals:
- Largest Contentful Paint (LCP) - Target: < 2.5s
- Cumulative Layout Shift (CLS) - Target: < 0.1
- First Input Delay (FID) - Target: < 100ms

### Tips to Improve

- Minimize large images
- Remove unused CSS
- Lazy load below-the-fold content
- Use CSS minification
- Enable compression in Vercel

---

## Security Best Practices

### 🔒 Protect Your Secrets

- ✅ Never commit `.env.local`
- ✅ Never paste tokens in code
- ✅ Use Vercel Environment Variables
- ✅ Regenerate tokens if exposed
- ✅ Review GitHub token permissions quarterly

### 🔐 Keep Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update safely
npm update
npm run build  # Test after update
```

### 🛡️ Enable GitHub Security Features

1. Go to GitHub repo Settings → Security
2. Enable:
   - Dependabot alerts
   - Secret scanning
   - Branch protection rules
   - Require status checks before merge

---

## Next Deployments (After First Deploy)

**Every time you update content:**

```bash
# 1. Make changes
# (Edit files in src/ or src/data/)

# 2. Test locally (optional)
npm run dev
# Check changes look good

# 3. Commit and push
git add .
git commit -m "Update: [what changed]"
git push origin main

# 4. Vercel auto-deploys
# - Detects GitHub push
# - Rebuilds site
# - Live in 2-5 minutes

# Done! No manual deploy needed.
```

---

## Deployment Summary

| Step | Time | What Happens |
|------|------|-------------|
| Connect Vercel | 2 min | Vercel clones repo |
| First Deploy | 5 min | Builds & deploys |
| Add Env Vars | 1 min | Config analytics, GitHub |
| Redeploy | 5 min | Rebuilds with vars |
| **Total First Time** | **13 min** | **Live with all features!** |

---

Last Updated: December 26, 2025

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
