# 📝 Research Notes System Guide

The Research Synthesis Lab now includes a **toggleable notes system** for adding insights, updates, and commentary to your research without cluttering the main content.

## 🎯 Features

- **Toggleable visibility** - Notes hidden by default, shown with floating button
- **Multiple note types** - Different colors/icons for different purposes
- **Tab-specific notes** - Add notes to specific sections (Summary, Findings, Studies)
- **Date tracking** - Optional timestamps for updates
- **Clean integration** - Works with existing HTML structure

## 🚀 Quick Start

### 1. Add to Your HTML

Include the notes CSS and JS in your explore.html:

```html
<link rel="stylesheet" href="../../assets/notes.css">
<script src="../../scripts/notes.js"></script>
```

### 2. Add Notes to Your JSON Data

Add a `notes` object to your `findings.json`:

```json
{
  "question": "Your research question...",
  "executiveSummary": "Your summary...",
  "notes": {
    "summary": [
      {
        "type": "update",
        "date": "Oct 25, 2025",
        "content": "Recent update about the research..."
      }
    ],
    "findings": [
      {
        "type": "insight",
        "content": "Important insight about the findings..."
      }
    ]
  }
}
```

### 3. Render Notes in JavaScript

Add this to your `renderAll()` function:

```javascript
if (researchData.notes) {
    if (researchData.notes.summary) {
        notesManager.renderNotes(researchData.notes.summary, document.getElementById('summary'));
    }
    
    // Set note count badge
    const totalNotes = Object.values(researchData.notes).flat().length;
    notesManager.toggleButton.setAttribute('data-count', totalNotes);
}
```

## 📋 Note Types

Each note can have a `type` that determines its appearance:

| Type | Icon | Color | Use Case |
|------|------|-------|----------|
| `insight` | 💡 | Blue | Key observations or takeaways |
| `update` | 📌 | Green | Recent changes or additions |
| `caution` | ⚠️ | Red | Limitations or warnings |
| `methodology` | 🔬 | Purple | Methods or technical notes |
| `context` | 📝 | Yellow | Background information |
| `question` | ❓ | Pink | Open questions for future research |

## ✍️ Note Format

### Basic Note
```json
{
  "type": "insight",
  "content": "Your note content here..."
}
```

### Note with Date
```json
{
  "type": "update",
  "date": "Oct 25, 2025",
  "content": "Recent update with timestamp..."
}
```

### Note with HTML Formatting
```json
{
  "type": "caution",
  "content": "Use <strong>bold</strong>, <em>italic</em>, and <a href='#'>links</a> in your notes."
}
```

## 🎨 Examples

### Research Update
```json
{
  "type": "update",
  "date": "Oct 25, 2025",
  "content": "<strong>New Data Added:</strong> Integrated 5 studies from 2024 focusing on digital collaboration tools."
}
```

### Methodological Caveat
```json
{
  "type": "methodology",
  "content": "Sample size of n=87 nonprofits. Generalization requires caution given geographic concentration in urban areas."
}
```

### Open Question
```json
{
  "type": "question",
  "content": "<strong>For future research:</strong> Does the relationship between network size and efficiency vary by nonprofit subsector (education vs. health vs. social services)?"
}
```

### Critical Insight
```json
{
  "type": "insight",
  "content": "The measurement gap is significant—most studies track collaboration <em>activity</em> rather than <em>outcomes</em>. This limits practical application."
}
```

## 🔧 Advanced Usage

### Add Notes Programmatically

```javascript
// Add a note to a specific element
notesManager.addNote({
    type: 'insight',
    content: 'Dynamic note added via JavaScript'
}, '#target-element');
```

### Attach to Specific Elements

In your JSON, use `attachTo` to place notes near specific content:

```json
{
  "type": "insight",
  "attachTo": "#execSummary",
  "content": "Note attached directly below the executive summary"
}
```

## 📱 User Experience

1. **Toggle Button** appears in bottom-right corner
2. **Badge** shows total note count
3. **Click toggle** to show/hide all notes
4. **Smooth animations** fade notes in/out
5. **Color coding** helps distinguish note types

## 🎯 Best Practices

### ✅ Good Uses for Notes
- Recent updates to the research
- Methodological limitations or caveats
- Contextual information for specific findings
- Open questions for future investigation
- Researcher commentary/interpretation
- Links to related resources

### ❌ Avoid
- Core research findings (these belong in main content)
- Excessively long notes (keep them concise)
- Too many notes on one section (can overwhelm)
- Duplicate information already in main text

## 📊 Example Structure

```json
{
  "notes": {
    "summary": [
      {
        "type": "update",
        "date": "Oct 25, 2025",
        "content": "Updates about data collection..."
      }
    ],
    "findings": [
      {
        "type": "caution",
        "content": "Important caveat about interpretation..."
      },
      {
        "type": "question",
        "content": "Open question for future research..."
      }
    ],
    "studies": [
      {
        "type": "context",
        "content": "Background on study selection..."
      }
    ]
  }
}
```

## 🚀 Next Steps

1. Add notes to your existing projects
2. Use different note types to organize commentary
3. Keep notes updated as research evolves
4. Use notes to engage visitors with your thought process

---

**Questions or ideas?** The notes system is designed to be flexible—adapt it to your research workflow!
