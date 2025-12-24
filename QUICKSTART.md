# 🚀 Quick Start Guide

Get your portfolio live in **5 minutes**!

## Step 1: Install Node.js (if not already installed)

**macOS:**
```bash
brew install node
```

**Windows/Linux:** Download from https://nodejs.org (LTS version)

Verify: `node --version` (should be 18+)

## Step 2: Install Dependencies

```bash
cd /path/to/maheshreddy32825.github.io
npm install
```

## Step 3: Test Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser ✨

### Try These:
- Click on "About", "Projects", "Blog" pages
- Type in the Terminal: "help" → press Enter
- Press Cmd+K (or Ctrl+K) to open Command Palette
- Click dark mode toggle in header
- Test on mobile (Dev Tools → Toggle Device Toolbar)

## Step 4: Add Google Analytics (Optional but Recommended)

1. Go to https://analytics.google.com
2. Create new GA4 property
3. Copy your **Measurement ID** (format: G-XXXXXXXXXX)
4. Create `.env.local` file in project root:
```
PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
```

## Step 5: Deploy to Vercel (2 minutes)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Add `PUBLIC_ANALYTICS_ID` environment variable
5. Click **Deploy**

**That's it!** Your site is now live! 🎉

Visit your Vercel URL (something like `maheshreddy32825.vercel.app`)

---

## Alternative: Deploy to GitHub Pages

1. Update `astro.config.mjs` line 2 to:
```javascript
site: 'https://YOUR_GITHUB_USERNAME.github.io',
```

2. Push to GitHub
3. Go to Repository → Settings → Pages
4. Select branch: `main`, folder: `/ (root)`
5. Your site is live at https://YOUR_GITHUB_USERNAME.github.io

---

## What You Got

✅ **Beautiful Portfolio** with modern design  
✅ **Dark Mode** toggle  
✅ **Interactive Terminal** (type commands!)  
✅ **Command Palette** (Cmd+K)  
✅ **Career Timeline** (2017-2025)  
✅ **Skills & Certs** showcase  
✅ **Projects** with GitHub links  
✅ **Blog** auto-synced from Medium  
✅ **Google Analytics** ready  
✅ **Mobile Responsive** & accessible  

---

## Quick Customizations

**Update Your Info:**
- Edit `src/data/experience.ts` - Your work history
- Edit `src/data/skills.ts` - Your technical skills
- Edit `src/data/certifications.ts` - Your certs
- Edit `src/data/projects.ts` - Your GitHub projects
- Edit `src/data/blog.ts` - Your Medium blog URL
- Replace `/public/resume.pdf` - Your actual resume

**Change Colors:**
- Edit `tailwind.config.cjs` - Modify color theme

**Update Profile:**
- Edit social links in all components (grep for "github.com/maheshreddy32825")
- Update email in components
- Change Medium profile URL

---

## Helpful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format
```

---

## Need Help?

- **Setup issues?** → See `DEPLOYMENT.md`
- **Customization?** → Check `README.md`
- **Full details?** → Read `IMPLEMENTATION.md`
- **Astro questions?** → https://docs.astro.build

---

## You're Ready! 🎯

Go live and start networking! 🚀

Questions? Check the documentation files in your project root.
