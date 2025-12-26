# 🆘 Troubleshooting Guide

Common issues and how to fix them.

---

## 🏗️ Build Issues

### Problem: `npm install` fails
**Error**: `npm ERR! code ERESOLVE` or dependency conflicts

**Solution:**
```bash
# Option 1: Force install
npm install --legacy-peer-deps

# Option 2: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Option 3: Update npm itself
npm install -g npm@latest
```

---

### Problem: `npm run build` fails
**Error**: Build fails with Astro errors

**Solution:**
```bash
# Step 1: Check Node version
node --version  # Should be 18+

# Step 2: Clean and rebuild
rm -rf dist .astro
npm run build

# Step 3: Check for TypeScript errors
npx tsc --noEmit

# Step 4: Full reset
rm -rf node_modules dist .astro
npm install
npm run build
```

---

### Problem: Port 3000 already in use
**Error**: `Error: EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# macOS/Linux: Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port
npm run dev -- --port 3001
```

---

## 🌐 Deployment Issues

### Problem: Vercel deployment fails
**Error**: Build fails on Vercel but works locally

**Solution:**
1. Check Vercel build logs (Vercel Dashboard → Deployments)
2. Make sure environment variables are set:
   - Go to Settings → Environment Variables
   - Verify: `PUBLIC_ANALYTICS_ID`, `GITHUB_TOKEN`, `GITHUB_USERNAME`
3. Hard redeploy:
   - Vercel Dashboard → Deployments → Click 3-dots → Redeploy

---

### Problem: Environment variables not working
**Error**: `PUBLIC_ANALYTICS_ID is undefined` or GitHub repos not showing

**Solution:**
1. **Local development (.env.local):**
   ```bash
   PUBLIC_ANALYTICS_ID=G-YOUR_MEASUREMENT_ID
   GITHUB_TOKEN=[Your GitHub Personal Access Token]
   GITHUB_USERNAME=maheshreddy32825
   ```
   - Restart dev server: `npm run dev`

2. **Production (Vercel):**
   - Go to: vercel.com → Project Settings → Environment Variables
   - Add the same three variables
   - Click "Save and Deploy"
   - Wait 2-5 minutes for redeploy

3. **Verify:**
   - Run locally: `npm run dev` → Check console
   - Check Vercel build log for errors

---

### Problem: Site looks wrong after deploy
**Error**: CSS broken, layout messed up, dark mode not working

**Solution:**
```bash
# Step 1: Clear Vercel cache
# Go to Vercel Dashboard → Project Settings → Git
# Click "Disconnect Git" then reconnect (optional, nuclear option)

# Step 2: Force rebuild locally
rm -rf dist .astro
npm run build

# Step 3: Verify build works
npm run preview

# Step 4: Push and redeploy
git add .
git commit -m "fix: rebuild"
git push origin main

# Step 5: Hard refresh in browser
Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows/Linux)
```

---

### Problem: Analytics not showing data
**Error**: "Data collection isn't active" in Google Analytics

**Solution:**
1. **Wait 24-48 hours** - GA takes time to initialize
2. **Verify Measurement ID** (not Tracking ID):
   - Should start with `G-` not `UA-`
   - Should be in `.env.local` as `PUBLIC_ANALYTICS_ID=G-...`
3. **Check installation:**
   - Open Developer Console (F12)
   - Go to Network tab
   - Search for "gtag"
   - Should see requests to googletagmanager.com
4. **If still not working:**
   - Check GA > Real-time to see if traffic shows up
   - Make sure Enhanced Measurement is ON in GA settings
   - Visit site from different device/incognito window

---

## 🔧 Component Issues

### Problem: Terminal CLI not responding
**Error**: Terminal commands don't work

**Solution:**
```bash
# Rebuild terminal component
npm run build

# Or restart dev server
npm run dev

# Check browser console for JS errors
# Open: Developer Tools → Console tab
```

---

### Problem: GitHub repos not displaying
**Error**: Projects page shows "fallback" or no repos

**Solution:**
1. **Check GitHub token:**
   ```bash
   # Is GITHUB_TOKEN in .env.local?
   cat .env.local
   
   # Is it valid? Go to GitHub → Settings → Developer settings → Personal access tokens
   # Make sure token has 'public_repo' scope
   ```

2. **Pin repos on GitHub:**
   - Go to: github.com/maheshreddy32825
   - Click 6 repos
   - Click the star/pin icon to pin them

3. **Rebuild:**
   ```bash
   npm run build
   npm run dev
   ```

4. **Check Vercel:**
   - Make sure `GITHUB_TOKEN` and `GITHUB_USERNAME` are in Vercel Environment Variables

---

### Problem: Blog posts not showing
**Error**: Blog page shows "Check back soon" message

**Solution:**
1. **Check Medium RSS feed:**
   - Open: https://medium.com/feed/@mahesh.r0608
   - Should show your recent articles
   - If empty, write articles on Medium first

2. **Wait for RSS sync:**
   - Medium RSS takes up to 24 hours to update
   - Portfolio fetches at build time

3. **Rebuild to force fetch:**
   ```bash
   npm run build
   npm run preview
   ```

4. **Check fallback articles:**
   - If RSS fails, blog shows sample articles
   - This is normal - write articles on Medium and they'll appear

---

## 🎨 Visual/Display Issues

### Problem: Dark mode not working
**Error**: Dark mode toggle doesn't change theme

**Solution:**
```bash
# Check theme implementation
grep -r "dark:" src/

# Rebuild with theme
npm run build

# Check localStorage
# Open DevTools → Application → Local Storage
# Should have "theme" key with "dark" or "light" value

# Reset theme
# Open DevTools → Console → type:
localStorage.removeItem('theme')
location.reload()
```

---

### Problem: Logo looks weird
**Error**: Logo text overlapping, animation broken

**Solution:**
1. Edit: `src/layouts/BaseLayout.astro` (around line 35)
2. Verify logo CSS:
   ```css
   @keyframes glow-pulse {
     0%, 100% { box-shadow: 0 0 15px rgba(20, 184, 166, 0.5); }
     50% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.8); }
   }
   ```
3. Check dimensions: width 40px, height 40px, border-radius 8px
4. Rebuild: `npm run build`

---

### Problem: Mobile layout broken
**Error**: Content overflows on phone

**Solution:**
```bash
# Test mobile locally
npm run dev
# Open DevTools → Toggle Device Toolbar (Cmd+Shift+M)

# Check responsive classes in files
# All sections should have: px-6 py-12 max-w-6xl mx-auto

# Verify tailwind responsive prefixes
# md:, lg:, etc. should be used

# Rebuild
npm run build
```

---

## 📝 Git Issues

### Problem: Can't push to GitHub
**Error**: `Permission denied (publickey)` or `fatal: Could not read from remote repository`

**Solution:**
```bash
# Check git config
git config user.email
git config user.name

# If needed, set it
git config --global user.email "your@email.com"
git config --global user.name "Your Name"

# Check SSH key
ls -la ~/.ssh/id_rsa

# If no key, generate one
ssh-keygen -t rsa -b 4096 -C "your@email.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
cat ~/.ssh/id_rsa.pub  # Copy this
```

---

### Problem: Merge conflicts
**Error**: `CONFLICT (content merge)`

**Solution:**
```bash
# See what's conflicted
git status

# Open conflicted file and manually fix
# Look for: <<<<<<<, =======, >>>>>>>
# Keep what you want, delete markers

# After fixing
git add .
git commit -m "resolve: merge conflict"
git push origin main
```

---

## 🔒 Security Issues

### Problem: GitHub token exposed
**Error**: Token visible in commit history or public

**Solution - IMMEDIATELY:**
1. **Regenerate token:**
   - GitHub → Settings → Developer settings → Personal access tokens
   - Delete old token
   - Create new token with same scopes

2. **Update .env.local:**
   ```bash
   GITHUB_TOKEN=ghp_NEW_TOKEN_HERE
   ```

3. **Commit and push:**
   ```bash
   git add .env.local
   git commit -m "security: rotate GitHub token"
   git push origin main
   ```

4. **Update Vercel:**
   - Vercel Dashboard → Settings → Environment Variables
   - Update `GITHUB_TOKEN` with new value

---

### Problem: Analytics ID in code/commits
**Error**: `PUBLIC_ANALYTICS_ID` visible in history

**Solution:**
1. Move to `.env.local` (never commit)
2. Use `import.meta.env.PUBLIC_ANALYTICS_ID` in code
3. Remove from git history:
   ```bash
   git filter-branch -f --env-filter 'export GITHUB_AUTHOR_NAME="Mahesh Amireddy"'
   ```
4. Force push (if needed):
   ```bash
   git push origin main --force-with-lease
   ```

---

## 🚨 Emergency Reset

### If everything is broken and you want to start fresh:

```bash
# 1. Backup current work (just in case)
cp -r . ~/portfolio-backup

# 2. Reset local repository
git reset --hard HEAD
git clean -fd

# 3. Reinstall everything
rm -rf node_modules dist .astro
npm cache clean --force
npm install

# 4. Rebuild
npm run build

# 5. Test locally
npm run dev

# 6. If still broken, check recent commits
git log --oneline
```

---

## 📞 Getting Help

### Check These Files First
- **[README.md](README.md)** - Overview and quick start
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment details
- **[CONTENT_UPDATE.md](CONTENT_UPDATE.md)** - How to update content
- **[IMPLEMENTATION.md](IMPLEMENTATION.md)** - Technical architecture

### External Resources
- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Google Analytics Help**: https://support.google.com/analytics

### Debug Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check Astro version
npx astro --version

# Check git status
git status

# View recent commits
git log --oneline -5

# Check environment variables (local)
cat .env.local

# View build output
npm run build -- --verbose

# Check Tailwind compilation
npx tailwindcss -i src/styles/global.css -o style.css
```

---

## ✅ Pre-Push Checklist

Before pushing changes:

```bash
# 1. Local build works
npm run build

# 2. No lint/type errors
npx tsc --noEmit

# 3. Review changes
git status

# 4. Test locally
npm run dev
# Check all pages and dark mode

# 5. Commit with good message
git add .
git commit -m "feat/fix: clear description"

# 6. Push
git push origin main
```

---

## 📊 Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `EADDRINUSE` | Port in use | `npm run dev -- --port 3001` |
| `Module not found` | Missing dependency | `npm install` |
| `ERESOLVE` | Dependency conflict | `npm install --legacy-peer-deps` |
| `Build timeout` | Large build | Split into smaller chunks |
| `Cannot find module` | Relative path wrong | Check import path |
| `TypeError: X is not a function` | Import issue | Check import statement |
| `Styles not applied` | Tailwind not compiling | Rebuild: `npm run build` |

---

Last Updated: December 26, 2025
