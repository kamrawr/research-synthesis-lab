/**
 * Notes/Comments System for Research Synthesis Lab
 * Toggleable insights and commentary for research content
 */

class NotesManager {
    constructor() {
        this.notesVisible = false;
        this.initToggleButton();
    }

    initToggleButton() {
        // Create floating toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'notes-toggle';
        toggleBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
            <span>Notes</span>
        `;
        toggleBtn.className = 'notes-toggle-btn';
        toggleBtn.setAttribute('title', 'Toggle research notes');
        toggleBtn.onclick = () => this.toggleNotes();
        
        document.body.appendChild(toggleBtn);
        this.toggleButton = toggleBtn;
    }

    toggleNotes() {
        this.notesVisible = !this.notesVisible;
        const notes = document.querySelectorAll('.research-note');
        
        notes.forEach(note => {
            if (this.notesVisible) {
                note.style.display = 'block';
                setTimeout(() => note.classList.add('visible'), 10);
            } else {
                note.classList.remove('visible');
                setTimeout(() => note.style.display = 'none', 300);
            }
        });

        this.toggleButton.classList.toggle('active', this.notesVisible);
    }

    renderNotes(notes, container) {
        if (!notes || notes.length === 0) return;

        notes.forEach((note, index) => {
            const noteEl = this.createNoteElement(note, index);
            
            if (note.attachTo) {
                // Attach to specific element
                const target = document.querySelector(note.attachTo);
                if (target) {
                    target.style.position = 'relative';
                    target.appendChild(noteEl);
                }
            } else {
                // Append to container
                container.appendChild(noteEl);
            }
        });
    }

    createNoteElement(note, index) {
        const noteEl = document.createElement('div');
        noteEl.className = `research-note ${note.type || 'insight'}`;
        noteEl.style.display = 'none';
        
        const icon = this.getIconForType(note.type);
        
        noteEl.innerHTML = `
            <div class="note-header">
                <span class="note-icon">${icon}</span>
                <span class="note-label">${note.label || this.getLabelForType(note.type)}</span>
                ${note.date ? `<span class="note-date">${note.date}</span>` : ''}
            </div>
            <div class="note-content">
                ${note.content}
            </div>
        `;
        
        return noteEl;
    }

    getIconForType(type) {
        const icons = {
            'insight': '💡',
            'update': '📌',
            'caution': '⚠️',
            'methodology': '🔬',
            'context': '📝',
            'question': '❓'
        };
        return icons[type] || '💭';
    }

    getLabelForType(type) {
        const labels = {
            'insight': 'Research Insight',
            'update': 'Update',
            'caution': 'Important Note',
            'methodology': 'Methodological Note',
            'context': 'Context',
            'question': 'Open Question'
        };
        return labels[type] || 'Note';
    }

    // Add note programmatically (for dynamic content)
    addNote(noteData, targetSelector = null) {
        const note = this.createNoteElement(noteData, Date.now());
        
        if (targetSelector) {
            const target = document.querySelector(targetSelector);
            if (target) {
                target.style.position = 'relative';
                target.appendChild(note);
            }
        }
        
        return note;
    }
}

// Initialize notes manager
const notesManager = new NotesManager();
