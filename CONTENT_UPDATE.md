# 📝 Content Update Guide

Learn how to update your portfolio content without touching code.

---

## 🎯 Update Your Resume

### Option 1: Replace the PDF (Easiest)
1. Create your updated resume as PDF
2. Save as: `resume.pdf`
3. Place it in folder: `/public/resume.pdf`
4. Replace the old file
5. Push to GitHub (Vercel auto-deploys in 2-5 minutes)

### Option 2: Change Resume Link
If you host your resume elsewhere (Google Drive, Dropbox, etc.):
1. Get the public/shareable link
2. Edit: `src/pages/about.astro` (around line 50)
3. Find the "Resume" section
4. Update the href link to your hosted resume
5. Save and push

### Where Resume Appears
- About page (bottom section) - Download button
- Header navigation (optional) - Can add link there too

---

## 👤 Update Your Profile Info

### Edit Your Name/Title
1. Open: `src/layouts/BaseLayout.astro`
2. Find: Footer section (around line 110)
3. Update: "Mahesh Amireddy" to your name
4. Find: Title/description meta tags (around line 10)
5. Update: Profile descriptions

### Edit Your Email
1. Open: `src/data/experience.ts`
2. Find: `contact` object
3. Update: `email` field
4. Push changes

### Edit Your Social Links
1. Open: `src/data/experience.ts`
2. Find: `social` object
3. Update:
   - `github`: Your GitHub profile URL
   - `medium`: Your Medium profile URL
   - `linkedin`: Your LinkedIn profile URL
4. Push changes

---

## 💼 Update Your Experience

### Add or Modify a Job
1. Open: `src/data/experience.ts`
2. Find: `experience` array
3. Add new job or modify existing:
   ```typescript
   {
     company: "Company Name",
     position: "Your Role Title",
     duration: "Start Date - End Date",
     startDate: "Jan 2024",
     endDate: "Present",
     description: "What you did here",
     keyAchievements: ["Achievement 1", "Achievement 2"],
     technologies: ["Tech 1", "Tech 2", "Tech 3"],
     focus: "Main area of work",
     impact: "Business impact",
     location: "City, Country"
   }
   ```
4. Save and push

### Update Career Timeline
1. Open: `src/data/experience.ts`
2. Find: `timeline` array
3. Modify existing events or add new:
   ```typescript
   {
     year: 2025,
     title: "Event Title",
     description: "What happened"
   }
   ```
4. Save and push

---

## 🛠️ Update Your Skills

### Add or Remove a Skill
1. Open: `src/data/skills.ts`
2. Find the category (DevOps & CI/CD, Kubernetes, Cloud, etc.)
3. Add or remove from the array:
   ```typescript
   "DevOps & CI/CD": ["Git", "Jenkins", "GitLab CI", "GitHub Actions"],
   ```
4. Save and push

### Create a New Skill Category
1. Open: `src/data/skills.ts`
2. Add to the `skills` object:
   ```typescript
   "Category Name": ["Skill 1", "Skill 2", "Skill 3"],
   ```
3. Save and push

### Where Skills Display
- About page (Skills section)
- Terminal CLI (type `skills`)
- Experience cards

---

## 🏆 Update Your Certifications

### Add a New Certification
1. Open: `src/data/experience.ts`
2. Find: `certifications` array
3. Add:
   ```typescript
   {
     title: "Certification Name",
     issuer: "Issuing Organization",
     date: "Month Year",
     credentialUrl: "https://your-cert-url",
     status: "Completed" // or "In Progress"
   }
   ```
4. Save and push

### Change Certification Status
1. Open: `src/data/experience.ts`
2. Find: `certifications` array
3. Change `status` from "In Progress" to "Completed"
4. Update date if applicable
5. Save and push

---

## 📚 Update Your Education

### Edit Education Section
1. Open: `src/data/experience.ts`
2. Find: `education` array
3. Update:
   ```typescript
   {
     school: "University Name",
     degree: "Degree Type",
     field: "Field of Study",
     year: "Graduation Year",
     gpa: "GPA (optional)"
   }
   ```
4. Save and push

---

## 📊 Update About Page Specializations

### Edit Your 5 Specializations
1. Open: `src/pages/about.astro`
2. Find: "Specializations" section (around line 30)
3. Update each card:
   - Icon (emoji)
   - Title
   - Description
4. Save and push

### Edit About Page Narrative
1. Open: `src/pages/about.astro`
2. Find: Journey section (around line 10)
3. Update: "My career began in..." paragraph
4. Edit: Personality section (hobbies, interests)
5. Save and push

---

## 📖 Update Your Blog

### Auto-Sync from Medium (No Code Needed!)
1. Write articles on Medium: https://medium.com/@mahesh.r0608
2. Wait up to 24 hours
3. Articles appear automatically on your blog page
4. **No code changes required!**

### Add Blog Topics (If Needed)
1. Open: `src/pages/blog.astro`
2. Find: "Topics I Write About" section
3. Modify the topics array with new topics
4. Save and push

### Update "Why I Write" Cards
1. Open: `src/pages/blog.astro`
2. Find: "Why I Write" section
3. Update the 4 motivation cards
4. Change icons, titles, descriptions
5. Save and push

---

## 🚀 Update Your Projects

### Option 1: Dynamic GitHub Repos (Automatic)
Your portfolio **automatically displays your pinned GitHub repos**:
1. Go to: https://github.com/maheshreddy32825
2. Pin up to 6 repositories
3. Your portfolio updates automatically within 5 minutes
4. **No code changes needed!**

### Option 2: Manual Project Update
1. Open: `src/data/projects.ts`
2. Add or edit projects:
   ```typescript
   {
     title: "Project Name",
     description: "What it does",
     image: "/path/to/image.jpg",
     tags: ["Tag1", "Tag2"],
     link: "https://link-to-project",
     github: "https://github-link",
     metrics: ["Metric 1", "Metric 2"]
   }
   ```
3. Save and push

---

## 🎨 Customize Site Colors (Optional)

### Change Brand Colors
1. Open: `tailwind.config.cjs`
2. Modify color scheme (currently using teal/cyan)
3. Update in `src/styles/global.css` if needed
4. Save and push

### Change Homepage Metrics
1. Open: `src/components/Hero.astro`
2. Find: stats array
3. Update values:
   ```typescript
   { label: "Years", value: "8+" },
   { label: "Certifications", value: "2" },
   { label: "Projects", value: "8" }
   ```

---

## ✅ After Every Update

### Local Testing (Optional)
```bash
npm run dev
# Opens http://localhost:3000
# Check your changes
```

### Deploy
```bash
git add .
git commit -m "Update: [what you changed]"
git push origin main
```

**Vercel automatically:**
1. Detects your push
2. Rebuilds the site
3. Deploys changes (2-5 minutes)
4. Live on production

---

## 📊 Common Content Updates

| What | Where | How |
|------|-------|-----|
| **Resume** | `/public/resume.pdf` | Replace file |
| **Experience** | `src/data/experience.ts` | Edit data object |
| **Skills** | `src/data/skills.ts` | Edit arrays |
| **Certifications** | `src/data/experience.ts` | Edit certifications array |
| **Blog Posts** | Medium profile | Write article → Auto-sync |
| **GitHub Projects** | GitHub profile | Pin repos → Auto-display |
| **Page Text** | `src/pages/*.astro` | Edit HTML/text |
| **Colors** | `tailwind.config.cjs` | Edit theme config |

---

## 🔄 Content Update Workflow

```
1. Edit file (data or page)
   ↓
2. Save changes
   ↓
3. Test locally (optional): npm run dev
   ↓
4. Commit: git add . && git commit -m "Update: ..."
   ↓
5. Push: git push origin main
   ↓
6. Vercel auto-deploys (2-5 minutes)
   ↓
7. Live on production!
```

---

## 💡 Tips

- **Save often** - Prevents losing work
- **Test locally** - Run `npm run dev` to preview before pushing
- **Use descriptive commit messages** - Makes git history readable
- **Update one section at a time** - Easier to debug if something breaks
- **Blog on Medium** - No code changes needed, auto-syncs to your site
- **Pin repos on GitHub** - Portfolio auto-displays them

---

Last Updated: December 26, 2025
