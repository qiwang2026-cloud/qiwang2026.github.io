document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Configuration
  const themeToggle = document.getElementById('theme-toggle');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (systemPrefersDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  // Theme toggle click handler
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const themeIcon = themeToggle.querySelector('svg');
    if (theme === 'light') {
      themeIcon.innerHTML = `
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    } else {
      themeIcon.innerHTML = `
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    }
  }

  // 2. Data Injection
  function renderResume() {
    if (typeof resumeData === 'undefined') {
      console.error('resumeData is not loaded. Ensure data.js is linked properly.');
      return;
    }

    // A. Profile Injection
    document.getElementById('profile-avatar').src = resumeData.profile.avatar || '';
    document.getElementById('profile-avatar').alt = `${resumeData.profile.name}'s Avatar`;
    
    const pName = document.getElementById('profile-name');
    pName.innerText = resumeData.profile.name;
    pName.setAttribute('data-field', 'profile.name');

    const pNickname = document.getElementById('profile-nickname');
    pNickname.innerText = resumeData.profile.nickname;
    pNickname.setAttribute('data-field', 'profile.nickname');

    const pTitle = document.getElementById('profile-title');
    pTitle.innerText = resumeData.profile.title;
    pTitle.setAttribute('data-field', 'profile.title');

    const pBio = document.getElementById('profile-bio');
    pBio.innerText = resumeData.profile.bio;
    pBio.setAttribute('data-field', 'profile.bio');

    const aboutText = document.getElementById('about-text');
    aboutText.innerText = resumeData.profile.bio;
    aboutText.setAttribute('data-field', 'profile.bio');

    // B. Contact Injection
    const contactKeys = ['email', 'phone', 'location', 'github', 'linkedin', 'website'];
    contactKeys.forEach(key => {
      const element = document.getElementById(`contact-${key}`);
      if (element && resumeData.profile.contact[key]) {
        element.innerText = resumeData.profile.contact[key];
        element.setAttribute('data-field', `profile.contact.${key}`);
        if (element.tagName === 'A') {
          if (key === 'email') {
            element.href = `mailto:${resumeData.profile.contact[key]}`;
          } else if (key === 'phone') {
            element.href = `tel:${resumeData.profile.contact[key]}`;
          } else {
            element.href = resumeData.profile.contact[key];
          }
        }
      }
    });

    // C. Experience Injection
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = '';
    resumeData.experience.forEach((exp, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      
      const highlightsHTML = exp.highlights.map((highlight, hIndex) => `
        <li data-field="experience.${index}.highlights.${hIndex}">${highlight}</li>
      `).join('');

      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role" data-field="experience.${index}.role">${exp.role}</h3>
            <span class="timeline-company" data-field="experience.${index}.company">${exp.company}</span>
          </div>
          <div class="timeline-meta">
            <span data-field="experience.${index}.duration">${exp.duration}</span>
            <span data-field="experience.${index}.location">${exp.location}</span>
          </div>
        </div>
        <p class="timeline-desc" data-field="experience.${index}.description">${exp.description}</p>
        <ul class="timeline-highlights">
          ${highlightsHTML}
        </ul>
      `;
      experienceTimeline.appendChild(item);
    });

    // D. Education Injection
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = '';
    resumeData.education.forEach((edu, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role" data-field="education.${index}.degree">${edu.degree}</h3>
            <span class="timeline-company" data-field="education.${index}.institution">${edu.institution}</span>
          </div>
          <div class="timeline-meta">
            <span data-field="education.${index}.duration">${edu.duration}</span>
          </div>
        </div>
        <p class="timeline-desc" data-field="education.${index}.description">${edu.description}</p>
      `;
      educationTimeline.appendChild(item);
    });

    // E. Skills Injection
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';
    
    const skillCategories = {
      frontend: { title: 'Frontend Technologies', icon: '🎨' },
      backend: { title: 'Backend & APIs', icon: '⚙️' },
      tools: { title: 'Tools & DevOps', icon: '🔧' }
    };

    Object.entries(skillCategories).forEach(([categoryKey, catInfo]) => {
      const categoryCard = document.createElement('div');
      categoryCard.className = 'glass-card';
      
      const skillsHTML = resumeData.skills[categoryKey].map((skill, index) => `
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name" data-field="skills.${categoryKey}.${index}.name">${skill.name}</span>
            <span class="skill-percentage" data-field="skills.${categoryKey}.${index}.level">${skill.level}%</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" data-percentage="${skill.level}"></div>
          </div>
        </div>
      `).join('');

      categoryCard.innerHTML = `
        <h3 class="skill-category-title">
          <span>${catInfo.icon}</span>
          <span>${catInfo.title}</span>
        </h3>
        <div class="skills-list">
          ${skillsHTML}
        </div>
      `;
      skillsGrid.appendChild(categoryCard);
    });

    // Animate skill bars
    setTimeout(animateSkillBars, 300);

    // F. Projects Injection
    renderProjects('all');
  }

  function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    resumeData.projects.forEach((proj, index) => {
      if (filter !== 'all' && proj.category !== filter) return;

      const card = document.createElement('div');
      card.className = 'glass-card project-card';
      
      const tagsHTML = proj.tags.map((tag, tIndex) => `
        <span class="tag" data-field="projects.${index}.tags.${tIndex}">${tag}</span>
      `).join('');

      let linksHTML = '';
      if (proj.link && proj.link !== '#') {
        linksHTML += `
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
            Code
          </a>
        `;
      }
      if (proj.live && proj.live !== '#') {
        linksHTML += `
          <a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Demo
          </a>
        `;
      }

      card.innerHTML = `
        <div class="project-body">
          <h3 class="project-title" data-field="projects.${index}.title">${proj.title}</h3>
          <p class="project-desc" data-field="projects.${index}.description">${proj.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
        ${linksHTML ? `<div class="project-links">${linksHTML}</div>` : ''}
      `;
      
      projectsGrid.appendChild(card);
    });

    // Make newly added project content editable if edit mode is active
    if (isEditModeActive) {
      makeElementsEditable(true);
    }
  }

  function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = `${percentage}%`;
    });
  }

  // 3. Project Filter Listeners
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const filter = e.currentTarget.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // 4. Print Event
  const printBtn = document.getElementById('print-resume');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 5. Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      // Simulate API submit
      setTimeout(() => {
        submitBtn.innerText = 'Message Sent! ✨';
        submitBtn.style.background = 'var(--success)';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // 6. Inline "Live Edit" Engine
  const editToggle = document.getElementById('edit-toggle');
  const editPanel = document.getElementById('edit-panel');
  const copyDataBtn = document.getElementById('copy-data');
  const downloadDataBtn = document.getElementById('download-data');
  const resetChangesBtn = document.getElementById('reset-changes');
  
  let isEditModeActive = false;

  editToggle.addEventListener('click', () => {
    isEditModeActive = !isEditModeActive;
    
    if (isEditModeActive) {
      editToggle.classList.add('active');
      editPanel.classList.add('visible');
      makeElementsEditable(true);
      showTemporaryToast("Edit Mode Active! You can now click and edit any text directly on the page.", "info");
    } else {
      editToggle.classList.remove('active');
      editPanel.classList.remove('visible');
      makeElementsEditable(false);
      showTemporaryToast("Edit Mode Deactivated.", "success");
    }
  });

  function makeElementsEditable(active) {
    const editableElements = document.querySelectorAll('[data-field]');
    editableElements.forEach(el => {
      if (active) {
        el.setAttribute('contenteditable', 'true');
        // Prevent clicking links during edit mode
        if (el.tagName === 'A') {
          el.addEventListener('click', preventLinkDefault);
        }
      } else {
        el.removeAttribute('contenteditable');
        if (el.tagName === 'A') {
          el.removeEventListener('click', preventLinkDefault);
        }
      }
    });
  }

  function preventLinkDefault(e) {
    e.preventDefault();
  }

  // Helper function to update object nested fields from a path (e.g. 'profile.contact.email')
  function updateObjectPath(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      const nextKey = keys[i+1];
      
      // Re-initialize nested objects/arrays if missing
      if (!current[key]) {
        current[key] = !isNaN(nextKey) ? [] : {};
      }
      current = current[key];
    }
    
    const lastKey = keys[keys.length - 1];
    
    // Check if skill level or numbers are being parsed
    if (lastKey === 'level') {
      let numericVal = parseInt(value.replace(/[^0-9]/g, ''), 10);
      if (isNaN(numericVal)) numericVal = 0;
      current[lastKey] = Math.min(100, Math.max(0, numericVal));
    } else if (!isNaN(lastKey)) {
      current[Number(lastKey)] = value.trim();
    } else {
      current[lastKey] = value.trim();
    }
  }

  // Scan current screen content and synchronize into resumeData object
  function gatherUpdatedData() {
    const editableElements = document.querySelectorAll('[data-field]');
    
    // Deep clone the original object to modify it
    const updatedData = JSON.parse(JSON.stringify(resumeData));
    
    editableElements.forEach(el => {
      const path = el.getAttribute('data-field');
      let val = el.innerText.trim();
      
      // If it's a contact or link, sometimes we only want text content
      if (path) {
        updateObjectPath(updatedData, path, val);
      }
    });
    
    return updatedData;
  }

  function generateFileContent(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    return `/**
 * Resume & Portfolio Data Configuration
 * Edit this file to update the content displayed on your resume website.
 */

const resumeData = ${jsonStr};

// Export data for global browser script accessibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeData;
}
`;
  }

  // Copy updated data.js content to clipboard
  copyDataBtn.addEventListener('click', () => {
    const updated = gatherUpdatedData();
    const formattedCode = generateFileContent(updated);
    
    navigator.clipboard.writeText(formattedCode).then(() => {
      showTemporaryToast("Copied updated data.js code to clipboard! You can paste it into data.js", "success");
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
      showTemporaryToast("Failed to copy automatically. Please view console.", "error");
    });
  });

  // Download updated data.js file directly
  downloadDataBtn.addEventListener('click', () => {
    const updated = gatherUpdatedData();
    const fileContent = generateFileContent(updated);
    
    const blob = new Blob([fileContent], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.js';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showTemporaryToast("Downloaded updated data.js! Replace your existing data.js with this file.", "success");
  });

  // Reset changes (Reloads page)
  resetChangesBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to discard all live edits? This will reload the page.")) {
      window.location.reload();
    }
  });

  // Simple temporary toast notification system
  function showTemporaryToast(message, type = "success") {
    // Remove existing toast
    const existing = document.getElementById('app-toast');
    if (existing) document.body.removeChild(existing);
    
    const toast = document.createElement('div');
    toast.id = 'app-toast';
    
    // Style toast in JS dynamically for convenience
    toast.style.position = 'fixed';
    toast.style.top = '2rem';
    toast.style.right = '2rem';
    toast.style.padding = '0.9rem 1.5rem';
    toast.style.borderRadius = '10px';
    toast.style.color = '#ffffff';
    toast.style.fontWeight = '500';
    toast.style.fontSize = '0.9rem';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
    toast.style.transition = 'all 0.3s ease';
    toast.style.transform = 'translateY(-20px)';
    toast.style.opacity = '0';
    
    if (type === 'success') {
      toast.style.background = '#10b981';
      toast.style.border = '1px solid #047857';
    } else if (type === 'error') {
      toast.style.background = '#ef4444';
      toast.style.border = '1px solid #b91c1c';
    } else {
      toast.style.background = '#6366f1';
      toast.style.border = '1px solid #4f46e5';
    }
    
    toast.innerText = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 50);
    
    // Hide toast
    setTimeout(() => {
      toast.style.transform = 'translateY(-20px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 4500);
  }

  // 7. Initial render execution
  renderResume();
});
