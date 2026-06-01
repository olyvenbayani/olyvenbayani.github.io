# 📁 Portfolio Repository Structure

A clean, organized repo structure for your portfolio.

```
portfolio/
├── index.html                 ← Main portfolio page
├── style.css                  ← All styles
├── script.js                  ← All interactivity
├── blogs-config.json          ← Blog metadata
├── admin.html                 ← Admin panel (private)
├── resume.pdf                 ← Downloadable resume
│
├── assets/                    ← All images and media
│   ├── about/
│   │   ├── era0.jpg          ← SRE Architect photo
│   │   ├── era1.jpeg         ← Cloud Lead photo
│   │   └── era2.jpeg         ← Network Instructor photo
│   ├── blog/                 ← Blog cover images
│   │   ├── blog-sre.jpg
│   │   ├── blog-kubernetes.jpg
│   │   └── blog-prometheus.jpg
│   └── icons/
│       └── about_architecture.png
│
├── docs/                      ← Documentation
│   ├── CLAUDE.md
│   ├── BLOG_SETUP.md
│   └── REPO_STRUCTURE.md
│
├── .gitignore                 ← Git ignore rules
└── README.md                  ← Project readme (optional)
```

## **How to Add Blog Images**

### **Step 1: Find/Create Blog Image**
- Take a screenshot or use a design tool
- Recommended size: 600×400px or 800×400px
- Format: JPG or PNG

### **Step 2: Save to assets/blog/**
```bash
# Save your blog cover image here:
assets/blog/blog-YOUR-TOPIC.jpg
```

### **Step 3: Update blogs-config.json**
```json
{
  "id": 4,
  "title": "Your Blog Title",
  "excerpt": "Brief description",
  "date": "June 20, 2026",
  "notionLink": "https://notion.so/your-link",
  "blogImage": "assets/blog/blog-YOUR-TOPIC.jpg",
  "slug": "blog-topic"
}
```

### **Step 4: Update JavaScript (Optional)**
If you want blog images to show on your portfolio, update `script.js` to include:
```javascript
<img src="${blog.blogImage}" alt="${blog.title}">
```

---

## **Clean Repo Checklist**

✅ Images organized in `assets/` folder  
✅ `.gitignore` excludes unnecessary files  
✅ `admin.html` is private (in .gitignore)  
✅ All documentation in organized structure  
✅ Single `style.css` and `script.js`  
✅ Blog config centralized in JSON  

---

## **Push to GitHub**

```bash
git add .
git commit -m "Organize repo structure with assets folder"
git push
```

Your portfolio is now clean and professional! 🚀
