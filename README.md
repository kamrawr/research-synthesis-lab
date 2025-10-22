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
│   └── style.css          # Global styling
├── scripts/                # Reusable JavaScript modules
│   └── projects.js        # Project registry
└── projects/               # Each research project
    ├── collaboration-nonprofits/
    │   ├── explore.html    # Interactive viewer
    │   ├── summary.md      # Full report
    │   ├── data/           # Extracted findings (JSON)
    │   └── docs/           # Additional documentation
    ├── college-underemployment/
    │   ├── explore.html    # Interactive D3.js visualizations
    │   ├── summary.md      # 554-line comprehensive report
    │   ├── data/           # 7,703 institutions analyzed
    │   ├── docs/           # Project README and methodology
    │   └── visualizations/ # Future: static charts
    ├── energy-equity/
    │   └── [project files]
    └── gig-economy-credentialing/
        └── [project files]
```

## 🔬 Current Projects

### 1. **College Underemployment & Long-Term Career Trajectories**
*October 2025 | PhD Research*

Analysis of 7,703 U.S. higher education institutions examining whether initial underemployment creates persistent "scarring" effects or temporary mismatch that graduates recover from over time.

**Key Findings:**
- **30x variation** in underemployment risk across fields (Philosophy/Religion 30% → Architecture 0%)
- **$13,400 earnings gap** between highest and lowest completion quartiles
- **55.7% of institutions** show high-risk characteristics for long-term career scarring
- **For-profit institutions** deliver 38% lower earnings than private nonprofits
- **$20,550 SES gap** between low-Pell and very high-Pell institutions

**Evidence:** Strong support for scarring hypothesis—initial underemployment creates lasting disadvantages through skill atrophy, credential devaluation, employer signaling, and debt accumulation.

**[Explore Interactive →](projects/college-underemployment/explore.html)** | **[Read Full Report →](projects/college-underemployment/summary.md)**

---

### 2. **Measuring Collaboration's Impact on Nonprofit Efficiency**
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
- **D3.js v7** - Interactive data visualizations
- **Chart.js** - Data visualization (legacy projects)
- **Marked.js** - Markdown rendering
- **PicoCSS** - Minimal styling framework
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