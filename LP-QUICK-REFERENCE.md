# LP Variation Build Quick Reference

## 🎯 Copy-Paste Code Snippets

### Hero Section - Copy These Exact Patterns

#### Badge (Doesn't Wrap)
```jsx
<div className="inline-flex mb-6 px-4 py-2 border border-white/40 rounded-full whitespace-nowrap">
  <span className="text-xs font-medium tracking-widest uppercase flex items-center gap-2 flex-nowrap">
    <span style={{ color: '#C4622D' }}>★</span>
    <span>48 Google Reviews</span>
  </span>
</div>
```

#### Main Headline (ALL WHITE)
```jsx
<h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight mb-6 text-white">
  Move into your dream home in 35 days.
</h1>
```

#### Metrics (Numbers in WHITE)
```jsx
<div className="flex gap-8 mb-10">
  <div>
    <p className="text-4xl font-serif font-medium text-white">500+</p>
    <p className="text-sm text-gray-300 mt-1">Projects Completed</p>
  </div>
  <div>
    <p className="text-4xl font-serif font-medium text-white">35</p>
    <p className="text-sm text-gray-300 mt-1">Days Average</p>
  </div>
</div>
```

#### Form Card (With Proper Padding)
```jsx
<div className="flex-1 flex justify-end pt-20 pb-20">
  <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden">
    <div className="px-6 pt-8 pb-4">
      <h2 className="font-serif text-xl font-medium mb-1" style={{ color: '#1A1A18' }}>
        Free Consultation
      </h2>
      <p className="text-xs text-gray-500">35-day transformation</p>
    </div>
    <div className="px-6 pb-16">
      <LeadForm dark={false} />
    </div>
  </div>
</div>
```

#### Mobile Sticky Button
```jsx
<div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 md:hidden" style={{ background: '#fff', borderTop: '1px solid #E8E2DC' }}>
  <a href="#lead-form" className="w-full flex items-center justify-center h-12 text-sm font-medium tracking-wide text-white" style={{ background: '#C4622D', borderRadius: '2px' }}>
    Get Free Consultation
  </a>
</div>
```

---

## 🚨 Most Common Fixes

### Problem: Text Wraps When It Shouldn't
```jsx
// WRONG
<span className="text-xs">★ 48 Google Reviews</span>

// RIGHT
<span className="text-xs whitespace-nowrap">★ 48 Google Reviews</span>

// ALSO WORKS
<div className="inline-flex flex-nowrap whitespace-nowrap">
  <span>★</span>
  <span>48 Google Reviews</span>
</div>
```

### Problem: Text Is Wrong Color
```jsx
// Find the issue
<p style={{ color: '#C4622D' }}>Should be white</p>

// Fix it
<p className="text-white">Should be white</p>

// Or with inline style
<p style={{ color: '#FFFFFF' }}>Should be white</p>
```

### Problem: Form Card Looks Cramped
```jsx
// WRONG (no padding)
<div className="px-6 pb-6">
  <LeadForm />
</div>

// RIGHT (breathing room)
<div className="px-6 pb-16">
  <LeadForm />
</div>
```

### Problem: White Gap Appears
```jsx
// WRONG
<div className="pb-20 md:pb-0">
  <CTA />
</div>

// RIGHT
<div className="pb-0">
  <CTA />
</div>
```

### Problem: Section Looks Different on Mobile vs Desktop
```jsx
// Test Both
agent-browser set viewport 375 667
agent-browser screenshot /tmp/mobile.png

agent-browser set viewport 1920 1080
agent-browser screenshot /tmp/desktop.png

# Compare in browser before/after
```

---

## ✅ Pre-Commit Checklist

```bash
# 1. Remove debug statements
grep -r "console.log\|debugger" components/ app/

# 2. Build succeeds
pnpm exec next build

# 3. Take screenshots
# Mobile 375px - screenshot
# Desktop 1920px - screenshot

# 4. Test interactive elements
agent-browser open "http://localhost:3000"
# Click buttons, scroll, check nothing breaks

# 5. Check console
# F12 → Console tab → no errors

# 6. Commit
git add .
git commit -m "feat: add LP-2 landing page"
git push
```

---

## 🎨 Color Codes (Copy These)

```javascript
// Primary brand color
#C4622D   // Terracotta orange (accents, icons, buttons only)

// Text colors
#FFFFFF   // Pure white (headings, hero text)
#1A1A18   // Near black (form labels, dark text)
#6B6B6B   // Gray (secondary text, description)

// UI colors
#E8E2DC   // Light beige (borders)
#2A2A2A   // Dark gray (footer background)
```

---

## 📱 Responsive Breakpoints

```
Mobile:   375px (use md: prefix for desktop)
Tablet:   768px (not often tested, but exists)
Desktop:  1920px (1024px+ with md: prefix)
```

**Rule:** Always test at 375px and 1920px. Don't assume middle breakpoints work.

---

## 🔍 Inspection Tips

### Chrome DevTools (F12)
```
1. Press F12
2. Click Elements tab
3. Right-click element → Inspect
4. Check:
   - Padding (space inside)
   - Margin (space outside)
   - Color values
   - Font sizes
5. Console tab → check for errors
```

### Common DevTools Checks
- Element has `display: none` → hidden, not removed
- Text is `color: #C4622D` → change to white
- Padding shows as `16px 24px` → sufficient breathing room
- Margin shows large bottom → might be creating gap

---

## ⚡ Speed Hacks for LP Variants

### If Only Colors Change
1. Define new color in code
2. Find-replace old color code
3. Test mobile + desktop
4. Done (5 minutes)

### If Only Text Changes
1. Update headline
2. Update copy
3. Update button text
4. Test mobile + desktop
5. Done (3 minutes)

### If Layout Slightly Different
1. Adjust flex direction (row vs column)
2. Adjust padding values
3. Test mobile + desktop
4. Done (10 minutes)

---

## 🐛 Debugging Checklist

When something looks wrong:

1. **Take screenshot** (what does it look like?)
2. **Check DevTools** (F12 → Elements)
   - Is element visible? (not `display: none`)
   - What's the padding/margin?
   - What color is it showing?
3. **Check the code** 
   - Does it match what DevTools shows?
   - Is there conflicting CSS?
4. **Restart dev server** (if changes not showing)
5. **Clear browser cache** (Cmd+Shift+R on Mac)
6. **Take screenshot again** (confirm fix)

---

## 📋 Required for Each LP Variation

✅ Hero section with proper spacing
✅ Form card with breathing room (pb-16)
✅ Mobile sticky bar (one button)
✅ All text colors correct (white for headlines)
✅ No wrapping badges
✅ No white gaps between sections
✅ Footer at bottom
✅ No console errors
✅ Works on 375px AND 1920px

---

## 🎯 Time Budget

- Hero: 10 min (test: 5 min)
- Form: 5 min (test: 2 min)
- Sections: 20 min (test: 5 min)
- Final QA: 10 min
- **Total: 50-60 minutes**

If taking longer → you're overthinking or fixing same bug repeatedly. Step back, take a screenshot, consult this guide.

---

## 📞 When to Delete vs Fix

| Issue | Fix? | Delete? |
|-------|------|---------|
| Text color wrong | ✅ 2 min | ❌ |
| Text wrapping | ✅ 3 min | ❌ |
| Padding/margin off | ✅ 3 min | ❌ |
| Component breaks on 2+ viewports after 3 fixes | ❌ | ✅ Delete |
| White gaps appearing | ✅ 2 min | ❌ |
| Badge showing incorrectly | ✅ 3 min | ❌ |

**Rule:** If something fails on multiple viewports and breaks after multiple fix attempts → delete it.

---

## 🚀 Ready to Build?

1. ✅ Read this guide (5 min)
2. ✅ Create new branch: `git checkout -b lp-2-landing-page`
3. ✅ Copy Hero from LP-1
4. ✅ Customize text/colors
5. ✅ Test mobile + desktop
6. ✅ Add remaining sections
7. ✅ Final QA sweep
8. ✅ Commit & push

**Go build LP-2. Expected time: 50 minutes. You've got this.**
