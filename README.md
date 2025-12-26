# 🚀 Mahesh Amireddy - DevOps & Cloud Engineering Portfolio

A **modern, interactive personal portfolio** showcasing 8+ years of expertise in DevOps, Cloud Infrastructure, Kubernetes, and SRE Engineering. Built with **Astro 5**, **Tailwind CSS**, **React**, and **TypeScript**.

**Live Site**: https://maheshamireddy-portfolio.vercel.app

---

## ✨ Features & Capabilities

### 🎨 Interactive Components
- **Hero Section** - Animated gradient text and cloud architecture
- **Interactive Terminal** - Type commands (`help`, `skills`, `projects`, `social`, etc.)
- **Command Palette** - Press Cmd+K (like VS Code) for instant navigation
- **Career Timeline** - Visual timeline of professional journey (2017-2025)
- **Dark/Light Theme** - Seamless theme toggle with localStorage persistence
- **Responsive Design** - 100% mobile-first, works on all devices

### 📄 Content Pages
- **Home** - Hero, terminal, metrics, and quick navigation
- **About** - Professional background, 5 specializations, personality, timeline, certifications
- **Projects** - Dynamic GitHub pinned repos + case studies with impact metrics
- **Blog** - Auto-synced Medium articles via RSS feed + writing motivation

### 🔧 Technical Excellence
- **Astro 5.16.6** - Static site generation for blazing-fast performance
- **Tailwind CSS 3.4** - Modern utility-first styling with dark mode
- **TypeScript** - Full type safety throughout codebase
- **React Components** - Interactive elements (Terminal, Command Palette)
- **Google Analytics 4** - Real-time visitor tracking, outbound clicks, scroll depth
- **GitHub API Integration** - Dynamic pinned repos display
- **RSS Feed** - Auto-synced blog articles from Medium
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **SEO Ready** - Meta tags, Open Graph, structured data, sitemaps

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Astro 5.16.6 |
| **Styling** | Tailwind CSS 3.4 |
| **Components** | React 18 |
| **Language** | TypeScript |
| **Analytics** | Google Analytics 4 |
| **Deployment** | Vercel |
| **Icons** | SVG + Unicode emoji |
| **Animations** | CSS + Keyframes |

## 📋 Prerequisites

- **Node.js** 18+ (check: `node --version`)
- **npm** or **yarn**
- **Git**
- GitHub account (for pushing code)

## 📚 Documentation

| Guide | Purpose |
|-------|---------|
| [QUICKSTART.md](QUICKSTART.md) | Get running locally in 5 minutes |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deploy to Vercel, GitHub Pages, or custom domain |
| [CONTENT_UPDATE.md](CONTENT_UPDATE.md) | Update resume, experience, skills, projects, blog |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Fix common issues |
| [IMPLEMENTATION.md](IMPLEMENTATION.md) | Technical architecture & component details |

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/maheshreddy32825/mahesh-portfolio.git
cd mahesh-portfolio
npm install
# or
yarn install
```

### 2. Configure Google Analytics (Optional)

1. Create a Google Analytics 4 property at https://analytics.google.com/
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Create a `.env.local` file:

```env
PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
```

### 3. Update Your Information

Edit the data files in `src/data/`:

- **skills.ts** - Add your technical skills
- **certifications.ts** - Your certifications and badges
- **experience.ts** - Work experience and timeline events
- **projects.ts** - GitHub projects and client work
- **blog.ts** - Medium blog settings

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## 🌐 Deployment

### Option 1: Vercel (Recommended)

**Advantages:**
- Fastest edge deployment globally
- Auto-preview for PRs
- Serverless functions support
- Built-in analytics
- Free tier: unlimited deployments

**Steps:**

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Select "Other" → Import Git Repository
4. Connect your GitHub account and select your portfolio repo
5. Click "Deploy"
6. (Optional) Add your custom domain in Vercel settings

**Environment Variables:**
- Add `PUBLIC_ANALYTICS_ID` in Vercel Dashboard → Settings → Environment Variables

### Option 2: GitHub Pages

**Advantages:**
- Simplest setup (builds automatically on push)
- No external account needed
- Free tier included

**Disadvantages:**
- No serverless functions
- Builds are slower
- Limited regional edge caching

**Steps:**

1. Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  // ... rest of config
});
```

2. Push to GitHub
3. Go to Repository → Settings → Pages
4. Select `Deploy from a branch`
5. Select `main` branch and `/root` directory
6. Your site will be available at https://YOUR_USERNAME.github.io

### Option 3: Netlify

**Advantages:**
- Similar to Vercel
- Great DX
- CMS integration available

**Steps:**

1. Sign up at https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 📝 Content Updates

### Adding Resume
- Replace `/public/resume.pdf` with your resume
- The file will be downloadable from the "About" and "Projects" pages

### Updating Medium Blog
- Set your Medium profile URL in `src/data/blog.ts`
- RSS feed auto-updates when you publish articles
- No manual blog post updates needed!

### Terminal CLI Commands

The terminal supports these commands:
- `help` - Show available commands
- `about` - About me section
- `skills` - Technical skills
- `experience` - Experience summary
- `projects` - Featured projects
- `certifications` - Certifications
- `contact` - Contact info
- `social` - Social media links
- `clear` - Clear terminal

Add more commands in `src/components/TerminalCLI.tsx`

## 🎨 Customization

### Colors
Update the Tailwind config in `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#14b8a6', // teal
      accent: '#06b6d4',  // cyan
    }
  }
}
```

### Fonts
Modify Google Fonts import in `src/layouts/BaseLayout.astro`

### Logo/Branding
- Hero section logo: Edit "MR" in header
- Update social links in all components
- Change favicon in `public/`

## 📊 Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Code Splitting**: Astro automatically code-splits
3. **Lazy Loading**: Interactive components load on-demand
4. **Caching**: Vercel auto-caches static assets

## 🔍 Analytics

After deploying with your Google Analytics ID:

1. Visit Google Analytics Dashboard
2. Check **Realtime** to see live visitors
3. Monitor **Engagement** for blog redirects to Medium
4. Track **Pages** to see popular sections

## 🐛 Troubleshooting

**Build Errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Dark mode not working:**
- Check if browser supports CSS variables
- Ensure `dark` class is applied to `<html>` tag

**Resume PDF not showing:**
- Verify file exists at `/public/resume.pdf`
- Check file size (under 5MB recommended)

**Analytics not tracking:**
- Verify Measurement ID is correct
- Check Google Analytics property exists
- Clear browser cache

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Google Analytics 4](https://support.google.com/analytics/answer/10089681)

## 🎯 Next Steps

1. ✅ Update data files with your information
2. ✅ Add your resume PDF
3. ✅ Setup Google Analytics (optional)
4. ✅ Deploy to Vercel or GitHub Pages
5. ✅ Add custom domain (optional)
6. ✅ Share your portfolio!

## 📞 Support

For issues with Astro: https://github.com/withastro/astro/issues
For Vercel: https://vercel.com/support
For Tailwind: https://tailwindcss.com/docs

---

**Built with ♥ using Astro**

Happy coding! 🚀
