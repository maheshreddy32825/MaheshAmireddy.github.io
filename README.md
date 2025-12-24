# Mahesh Reddy - Portfolio Site

A modern, interactive personal portfolio showcasing my expertise in DevOps, Cloud & SRE Engineering. Built with Astro, Tailwind CSS, and featuring interactive components.

## 🚀 Features

### Interactive Components
- **Hero Section** with animated cloud architecture visualization
- **Terminal CLI** - Type commands like `help`, `skills`, `projects`, etc.
- **Command Palette** - Press Cmd+K to quickly navigate (like VS Code)
- **Career Timeline** - Visual timeline of your professional journey
- **Skills & Certifications** - Proficiency ratings and credential display
- **Dark Mode Toggle** - Seamless theme switching

### Content Sections
- **About** - Comprehensive background, experience, and education
- **Projects** - Showcase of GitHub repos and client projects
- **Blog** - Auto-synced from Medium via RSS feed
- **Resume** - Downloadable PDF with embedded viewer

### Technical Excellence
- **100% Responsive** - Mobile-first design
- **Dark Mode Support** - Built-in light/dark theme toggle
- **Lighthouse Optimized** - Performance score: 95+
- **SEO Ready** - Meta tags, Open Graph, structured data
- **Fast Loading** - Astro static site generation
- **Analytics Ready** - Google Analytics integration

## 🛠️ Tech Stack

- **Framework**: Astro 4.0+
- **Styling**: Tailwind CSS + CSS-in-JS
- **Interactive Components**: React (via Astro integration)
- **Animations**: Framer Motion, CSS animations
- **Icons**: SVG + Unicode emoji
- **Deployment**: Vercel (recommended) or GitHub Pages

## 📋 Prerequisites

- Node.js 18+ (with npm or yarn)
- Git
- A GitHub account (for deployment)
- Google Analytics account (optional, for analytics)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
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
