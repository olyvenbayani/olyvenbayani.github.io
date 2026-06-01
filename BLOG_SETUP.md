# 📝 Blog Management Guide

Your portfolio now uses a **dynamic blog system** powered by `blogs-config.json`. No more editing HTML files!

## **How to Add a New Blog**

### **Step 1: Create Blog in Notion**
1. Go to [notion.so](https://notion.so)
2. Create a new page with your blog content
3. Click **Share** → Toggle **Public** → Copy the public link

### **Step 2: Add to blogs-config.json**
Open `blogs-config.json` and add a new blog entry:

```json
{
  "id": 4,
  "title": "Your Blog Title Here",
  "excerpt": "A brief summary of your blog post (1-2 sentences)",
  "date": "June 15, 2026",
  "notionLink": "https://notion.so/paste-your-public-link-here",
  "slug": "blog-short-name"
}
```

### **Step 3: Save & Done!**
That's it! Refresh your portfolio and the new blog will appear automatically.

---

## **Current Blogs (Update these with your Notion links)**

### Blog 1: SRE Bootcamp Reflections
```
"notionLink": "https://notion.so/YOUR-NOTION-LINK-HERE"
```
👉 **Get your Notion link:** Create blog in Notion → Share → Copy public link

### Blog 2: Kubernetes Guide  
```
"notionLink": "https://notion.so/YOUR-NOTION-LINK-HERE"
```

### Blog 3: Prometheus Monitoring
```
"notionLink": "https://notion.so/YOUR-NOTION-LINK-HERE"
```

---

## **Best Practices**

✅ **Do this:**
- Write beautifully in Notion (formatting, images, code blocks)
- Use descriptive titles
- Write a clear excerpt (shows up on portfolio)
- Keep dates up to date
- Make page public before sharing link

❌ **Don't do this:**
- Don't break the JSON structure (invalid JSON = blogs won't load)
- Don't forget to make Notion pages public
- Don't use your private Notion link (won't work)

---

## **Notion Link Format**

Your Notion links should look like:
```
https://notion.so/Your-Page-Name-a1b2c3d4e5f6
```

Or with your workspace:
```
https://notion.so/workspace/Your-Page-Name-a1b2c3d4e5f6
```

---

## **Troubleshooting**

**Blogs not showing?**
- Check browser console (F12) for errors
- Make sure JSON is valid (use [jsonlint.com](https://jsonlint.com))
- Verify Notion link is public (try opening in private/incognito window)

**JSON won't validate?**
- Make sure all commas are correct
- No trailing commas after last item
- All quotes are straight quotes `"` not curly quotes

---

## **Example: Complete Entry**

```json
{
  "id": 4,
  "title": "Docker Best Practices for Production",
  "excerpt": "Essential strategies for optimizing Docker images, reducing build times, and securing container registries in production environments.",
  "date": "May 20, 2026",
  "notionLink": "https://notion.so/Docker-Best-Practices-ab12cd34ef56",
  "slug": "blog-docker"
}
```

---

## **Need Help?**

All blogs are loaded dynamically from `blogs-config.json` via JavaScript. No build step needed! Just edit the JSON file and refresh.
