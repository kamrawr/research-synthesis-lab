# 🧠 Research Synthesis Lab

An interactive repository for organizing, exploring, and sharing literature reviews, meta-analyses, and AI-assisted research syntheses.

## 🌐 Live Site

**[Launch Research Lab →](https://kamrawr.github.io/research-synthesis-lab/)**

## 📚 What This Is

A structured workspace for housing multiple research projects with:
- **Interactive HTML explorers** for each literature review
- **Structured data extraction** (JSON, CSV, BibTeX)
- **Visual summaries** and insights
- **GitHub Pages deployment** for easy sharing

## 🗂️ Structure

```
research-synthesis-lab/
├── index.html              # Main project hub
├── assets/                 # Shared styles and resources
├── scripts/                # Reusable JavaScript modules
└── projects/               # Each research project
    ├── collaboration-nonprofits/
    │   ├── explore.html    # Interactive viewer
    │   ├── summary.md      # Full report
    │   ├── data/           # Extracted findings
    │   └── visuals/        # Charts, diagrams
    └── [next-project]/
```

## 🔬 Current Projects

### 1. **Measuring Collaboration's Impact on Nonprofit Efficiency**
*October 2025*

Quantitative synthesis of 40 empirical studies examining how inter-organizational collaboration affects operational efficiency and community impact in nonprofit organizations.

**Key Findings:**
- Limited direct measurement of operational efficiency
- Mixed but generally positive community outcomes
- Success heavily dependent on trust, autonomy, and voluntary participation

**[Explore Interactive →](projects/collaboration-nonprofits/explore.html)**

---

## ➕ Adding New Projects

1. **Create project folder:**
   ```bash
   mkdir -p projects/your-project-name/{data,visuals}
   ```

2. **Add required files:**
   - `explore.html` - Interactive viewer (copy from existing project)
   - `summary.md` - Full literature review
   - `data/findings.json` - Structured extracted data

3. **Update project registry:**
   Add your project to `scripts/projects.js`

4. **Upload your PDF:**
   Place in `projects/your-project-name/` for reference

## 🛠️ Tech Stack

- **Pure HTML/CSS/JS** - No build process required
- **Chart.js** - Data visualization
- **Marked.js** - Markdown rendering
- **GitHub Pages** - Static hosting

## 📊 Data Format

Each project includes structured JSON:

```json
{
  "question": "Research question",
  "summary": {
    "key_finding_1": "Description",
    "key_finding_2": "Description"
  },
  "stats": {
    "studies_reviewed": 40,
    "positive_effects": 9,
    "negative_effects": 4
  },
  "studies": [
    {
      "title": "Study title",
      "authors": ["Author 1", "Author 2"],
      "year": 2024,
      "findings": "Key results"
    }
  ]
}
```

## 🎯 Use Cases

- **Research aggregation** - Synthesize AI-generated lit reviews (Elicit, Consensus, etc.)
- **Meta-analysis documentation** - Track findings across studies
- **Knowledge management** - Organize research by topic
- **Collaboration** - Share interactive findings with colleagues
- **Teaching** - Demonstrate research synthesis methods

## 🚀 Publishing

This repo is designed for GitHub Pages:

1. Push to GitHub
2. Enable Pages in repository settings
3. Select `main` branch, `/` (root)
4. Site will be live at `https://[username].github.io/research-synthesis-lab/`

## 📝 License

Open for research and educational use. Data sources and original studies retain their respective licenses.

## 🤝 Contributing

This is a personal research workspace, but the structure and tools are freely reusable. Fork and adapt for your own research projects!

---

**Built with curiosity** 🔬 **Powered by open research tools** 📚