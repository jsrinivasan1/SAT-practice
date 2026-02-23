// Shared Utilities
window.Utils = (function() {

  // Create an element with attributes and children
  function el(tag, attrs, children) {
    const element = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(key) {
        if (key === 'className') {
          element.className = attrs[key];
        } else if (key === 'innerHTML') {
          element.innerHTML = attrs[key];
        } else if (key === 'textContent') {
          element.textContent = attrs[key];
        } else if (key.startsWith('on')) {
          element.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
        } else if (key === 'style' && typeof attrs[key] === 'object') {
          Object.assign(element.style, attrs[key]);
        } else if (key === 'dataset') {
          Object.keys(attrs[key]).forEach(function(dk) {
            element.dataset[dk] = attrs[key][dk];
          });
        } else {
          element.setAttribute(key, attrs[key]);
        }
      });
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function(child) {
        if (child == null) return;
        if (typeof child === 'string' || typeof child === 'number') {
          element.appendChild(document.createTextNode(String(child)));
        } else {
          element.appendChild(child);
        }
      });
    }
    return element;
  }

  // Format time in MM:SS
  function formatTime(seconds) {
    if (seconds < 0) seconds = 0;
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  // Format date nicely
  function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  // Capitalize first letter
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Shuffle array (Fisher-Yates)
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  // Pick n random items from array
  function pickRandom(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  // Percentage (safe division)
  function pct(part, total) {
    if (total === 0) return 0;
    return Math.round((part / total) * 100);
  }

  // Debounce
  function debounce(fn, delay) {
    var timer;
    return function() {
      var ctx = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(ctx, args); }, delay);
    };
  }

  // Generate unique ID
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // Domain display names
  var domainNames = {
    'craft': 'Craft & Structure',
    'info': 'Information & Ideas',
    'conventions': 'Standard English Conventions',
    'expression': 'Expression of Ideas',
    'algebra': 'Algebra',
    'advanced': 'Advanced Math',
    'data': 'Problem-Solving & Data Analysis',
    'geometry': 'Geometry & Trigonometry'
  };

  function getDomainName(domain) {
    return domainNames[domain] || capitalize(domain);
  }

  // Section display names
  function getSectionName(section) {
    if (section === 'rw') return 'Reading & Writing';
    if (section === 'math') return 'Math';
    return capitalize(section);
  }

  // Normalize difficulty to 5-level system
  // Maps old 3-tier labels to new 5-level system
  function normalizeDifficulty(diff) {
    var map = { 'easy': 'level2', 'medium': 'level3', 'hard': 'level4' };
    return map[diff] || diff;
  }

  // Skill level metadata
  var skillLevels = {
    level1: { name: 'Foundation', scoreRange: '400-500', color: '#60a5fa', description: 'Basic concept recognition, single-step problems' },
    level2: { name: 'Developing', scoreRange: '500-580', color: '#34d399', description: 'Standard application, 1-2 step problems' },
    level3: { name: 'Proficient', scoreRange: '580-660', color: '#fbbf24', description: 'Multi-step problems, moderate complexity' },
    level4: { name: 'Advanced', scoreRange: '660-730', color: '#f97316', description: 'Complex problems, non-obvious approaches' },
    level5: { name: 'Expert', scoreRange: '730-800', color: '#ef4444', description: 'Hardest problems, combined concepts' }
  };

  function getSkillLevel(diff) {
    var normalized = normalizeDifficulty(diff);
    return skillLevels[normalized] || skillLevels.level3;
  }

  // Difficulty color class
  function getDifficultyClass(diff) {
    var normalized = normalizeDifficulty(diff);
    return 'badge-' + normalized;
  }

  function getDifficultyLabel(diff) {
    var sl = getSkillLevel(diff);
    return sl.name;
  }

  // SVG Icons (inline)
  var icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    practice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    progress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    resources: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
    bookmarkFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
  };

  function icon(name, size) {
    size = size || 18;
    var span = document.createElement('span');
    span.className = 'icon';
    span.style.display = 'inline-flex';
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.innerHTML = icons[name] || '';
    return span;
  }

  return {
    el: el,
    formatTime: formatTime,
    formatDate: formatDate,
    capitalize: capitalize,
    shuffle: shuffle,
    pickRandom: pickRandom,
    pct: pct,
    debounce: debounce,
    uid: uid,
    domainNames: domainNames,
    getDomainName: getDomainName,
    getSectionName: getSectionName,
    getDifficultyClass: getDifficultyClass,
    getDifficultyLabel: getDifficultyLabel,
    normalizeDifficulty: normalizeDifficulty,
    getSkillLevel: getSkillLevel,
    skillLevels: skillLevels,
    icons: icons,
    icon: icon
  };
})();
