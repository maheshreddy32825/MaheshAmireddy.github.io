# 🚀 Quick Start Guide (5 Minutes)

Get your portfolio running locally in 5 minutes!

---

## ⚡ Prerequisites

- **Node.js** 18+ (check: `node --version`)
- **Git** (check: `git --version`)
- A terminal/command line

---

## Step 1: Clone the Repository (1 minute)

```bash
git clone https://github.com/maheshreddy32825/mahesh-portfolio.git
cd mahesh-portfolio
```

---

## Step 2: Install Dependencies (2 minutes)

```bash
npm install
```

**Troubleshooting:**
```bash
# If install fails:
npm install --legacy-peer-deps
```

---

## Step 3: Run Locally (1 minute)

```bash
npm run dev
```

**Output:**
```
  🚀 Astro v5.16.6 started in 234ms
  
  ▶ Local:    http://localhost:3000/
  ▶ Network:  [your IP]:3000/
```

**Open in browser**: http://localhost:3000

---

## Step 4: Explore Your Portfolio

### 🏠 Home Page
- See your hero section, terminal, and metrics
- Try typing commands in the terminal:
  - `help` - See all commands
  - `skills` - See your tech stack
  - `projects` - List your projects
  - `social` - Your social links

### 📄 About Page
- Click "About" in header
- See your journey, specializations, timeline, certifications

### 🚀 Projects Page
- Click "Projects" in header
- See GitHub pinned repos (auto-fetched)
- See case studies with metrics

### 📚 Blog Page
- Click "Blog" in header
- See auto-synced Medium articles
- Topics and writing motivation

### 🌙 Dark Mode
- Click sun/moon icon in header
- Theme toggle works everywhere

### 🎨 Responsive Design
- Open DevTools: F12 or Cmd+Option+I
- Click Toggle Device Toolbar (Cmd+Shift+M)
- Test on mobile, tablet, desktop

---

## Stop the Server

```bash
# Press Ctrl+C in terminal
```

---

## Next Steps

### 🚀 Ready to Deploy?
→ See [DEPLOYMENT.md](DEPLOYMENT.md)

### ✏️ Want to Update Content?
→ See [CONTENT_UPDATE.md](CONTENT_UPDATE.md)

### 🆘 Something Broken?
→ See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

### 🏗️ Need Technical Details?
→ See [IMPLEMENTATION.md](IMPLEMENTATION.md)

---

## Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npx tsc --noEmit

# Stop server
Ctrl+C
```

---

## File Structure Quick Guide

```
mahesh-portfolio/
├── src/pages/          # Home, About, Blog, Projects pages
├── src/components/     # Reusable components
├── src/data/           # Your content (experience, skills, projects)
├── src/layouts/        # Header, footer, base layout
├── public/             # Static files (favicon, resume.pdf, etc.)
└── README.md           # Full documentation
```

---

## Environment Setup (Optional but Recommended)

Create `.env.local` for Google Analytics and GitHub integration:

```bash
# Create file
touch .env.local

# Edit and add:
PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
GITHUB_TOKEN=[Your GitHub Personal Access Token]
GITHUB_USERNAME=maheshreddy32825
```

**Get GitHub Token:**
1. Go: https://github.com/settings/tokens
2. Create new personal access token
3. Scopes needed: `public_repo`
4. Copy and paste into `.env.local`

---

## Make Your First Change (Optional)

Try editing something to see live reload:

1. Open: `src/pages/index.astro`
2. Find the hero section text
3. Change something (e.g., the title)
4. Save (Cmd+S)
5. Watch your browser update instantly! 🎉

---

## Checklist ✅

- [ ] Cloned repository
- [ ] Ran `npm install`
- [ ] Started dev server with `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Explored all 4 pages
- [ ] Tested dark mode
- [ ] Tested responsive design (mobile view)
- [ ] Tested terminal commands
- [ ] Stopped server with Ctrl+C

**Done!** You're ready to deploy or customize. See next steps above 👆

---

## Troubleshooting Quick Fixes

**Port 3000 in use:**
```bash
npm run dev -- --port 3001
```

**Dependencies error:**
```bash
rm -rf node_modules
npm install --legacy-peer-deps
npm run dev
```

**Weird spacing/styling:**
```bash
npm run build
npm run preview
```

---

**Next**: [DEPLOYMENT.md](DEPLOYMENT.md) for deploying to Vercel  
**Or**: [CONTENT_UPDATE.md](CONTENT_UPDATE.md) for updating your content

Last Updated: December 26, 2025


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
