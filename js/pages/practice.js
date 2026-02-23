// Practice Question Browser with Skill Progression
window.PracticePage = (function() {
  var el = Utils.el;
  var currentQuestions = [];
  var currentIndex = 0;
  var filters = { section: 'all', domain: 'all', difficulty: 'all', status: 'all' };
  var viewMode = 'practice'; // 'practice' or 'progression'

  function render(container, params) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    // Header
    wrap.appendChild(el('div', { className: 'flex justify-between items-center mb-6' }, [
      el('div', {}, [
        el('h1', { className: 'text-3xl font-bold mb-1', textContent: 'Practice Questions' }),
        el('p', { className: 'text-secondary', textContent: 'Master each skill level to progress from Foundation to Expert.' })
      ]),
      el('div', { className: 'flex gap-2' }, [
        el('button', {
          className: 'btn ' + (viewMode === 'progression' ? 'btn-primary' : 'btn-secondary'),
          textContent: 'Skill Levels',
          onClick: function() {
            viewMode = 'progression';
            container.innerHTML = '';
            render(container, params);
          }
        }),
        el('button', {
          className: 'btn ' + (viewMode === 'practice' ? 'btn-primary' : 'btn-secondary'),
          textContent: 'Browse All',
          onClick: function() {
            viewMode = 'practice';
            container.innerHTML = '';
            render(container, params);
          }
        })
      ])
    ]));

    if (viewMode === 'progression') {
      renderProgression(wrap);
    } else {
      renderBrowse(wrap, params);
    }

    page.appendChild(wrap);
    container.appendChild(page);
  }

  // ===== Skill Progression View =====
  function renderProgression(wrap) {
    var domains = [
      { key: 'craft', section: 'rw' }, { key: 'info', section: 'rw' },
      { key: 'conventions', section: 'rw' }, { key: 'expression', section: 'rw' },
      { key: 'algebra', section: 'math' }, { key: 'advanced', section: 'math' },
      { key: 'data', section: 'math' }, { key: 'geometry', section: 'math' }
    ];

    // Section tabs
    var sectionFilter = 'all';
    var tabs = el('div', { className: 'tabs mb-6' });
    [{ key: 'all', label: 'All Domains' }, { key: 'rw', label: 'Reading & Writing' }, { key: 'math', label: 'Math' }].forEach(function(t) {
      tabs.appendChild(el('button', {
        className: 'tab' + (t.key === sectionFilter ? ' active' : ''),
        textContent: t.label,
        onClick: function() {
          sectionFilter = t.key;
          tabs.querySelectorAll('.tab').forEach(function(tab) { tab.classList.remove('active'); });
          this.classList.add('active');
          renderDomainCards(grid, domains, sectionFilter);
        }
      }));
    });
    wrap.appendChild(tabs);

    var grid = el('div', { className: 'domain-progress-grid' });
    renderDomainCards(grid, domains, sectionFilter);
    wrap.appendChild(grid);
  }

  function renderDomainCards(grid, domains, sectionFilter) {
    grid.innerHTML = '';
    var levels = ['level1', 'level2', 'level3', 'level4', 'level5'];

    domains.forEach(function(d) {
      if (sectionFilter !== 'all' && d.section !== sectionFilter) return;

      var mastery = QuestionBank.getDomainMastery(d.key);
      var recommended = QuestionBank.getRecommendedLevel(d.key);

      var card = el('div', { className: 'domain-progress-card' });

      // Header
      card.appendChild(el('div', { className: 'flex justify-between items-center mb-3' }, [
        el('div', {}, [
          el('div', { className: 'domain-name', textContent: Utils.getDomainName(d.key) }),
          el('div', { className: 'text-xs text-secondary', textContent: Utils.getSectionName(d.section) })
        ]),
        el('span', {
          className: 'badge badge-' + recommended,
          textContent: Utils.getSkillLevel(recommended).name
        })
      ]));

      // Level dots
      var dots = el('div', { className: 'level-dots mb-3' });
      levels.forEach(function(level) {
        var m = mastery[level];
        var cls = 'level-dot';
        if (m.mastered) cls += ' filled';
        else if (m.answered > 0) cls += ' partial';
        dots.appendChild(el('div', { className: cls, title: Utils.getSkillLevel(level).name + ': ' + m.accuracy + '%' }));
      });
      card.appendChild(dots);

      // Level breakdown
      levels.forEach(function(level) {
        var m = mastery[level];
        var sl = Utils.getSkillLevel(level);
        var isRecommended = level === recommended;
        var isLocked = levels.indexOf(level) > levels.indexOf(recommended) + 1;

        if (m.total === 0 && !isRecommended) return; // skip empty levels

        var levelRow = el('div', {
          className: 'skill-level-card mb-2' + (isRecommended ? ' current' : '') + (m.mastered ? ' mastered' : '') + (isLocked ? ' locked' : ''),
          style: { padding: 'var(--space-2) var(--space-3)', cursor: isLocked ? 'default' : 'pointer' },
          onClick: isLocked ? null : function() {
            viewMode = 'practice';
            filters.domain = d.key;
            filters.section = d.section;
            filters.difficulty = level;
            filters.status = 'all';

            // Re-render entire page in browse mode at this level
            var container = document.getElementById('app-content');
            container.innerHTML = '';
            PracticePage.render(container, { section: d.section, domain: d.key, difficulty: level });
          }
        }, [
          el('div', {
            className: 'skill-level-num',
            style: { background: sl.color + '22', color: sl.color, width: '28px', height: '28px', fontSize: 'var(--text-xs)' },
            textContent: level.slice(-1)
          }),
          el('div', { className: 'skill-level-info', style: { minWidth: '0' } }, [
            el('div', { className: 'level-name', textContent: sl.name }),
            el('div', { className: 'level-range', textContent: m.total > 0 ? m.correct + '/' + m.total + ' correct' : 'No questions yet' })
          ]),
          m.total > 0 ? el('div', { className: 'skill-level-mastery' }, [
            el('span', {
              className: 'text-sm font-bold ' + (m.mastered ? 'text-success' : m.accuracy >= 50 ? 'text-warning' : 'text-secondary'),
              textContent: m.answered > 0 ? m.accuracy + '%' : '—'
            })
          ]) : null
        ]);

        card.appendChild(levelRow);
      });

      // Practice button
      card.appendChild(el('button', {
        className: 'btn btn-primary btn-sm btn-block mt-3',
        textContent: 'Practice ' + Utils.getSkillLevel(recommended).name,
        onClick: function() {
          viewMode = 'practice';
          filters.domain = d.key;
          filters.section = d.section;
          filters.difficulty = recommended;
          filters.status = 'all';
          var container = document.getElementById('app-content');
          container.innerHTML = '';
          PracticePage.render(container, { section: d.section, domain: d.key, difficulty: recommended });
        }
      }));

      grid.appendChild(card);
    });
  }

  // ===== Browse / Practice View =====
  function renderBrowse(wrap, params) {
    // Filter bar
    var filterBar = el('div', { className: 'filter-bar' });

    filterBar.appendChild(makeSelect('Section', 'section', [
      { value: 'all', label: 'All Sections' },
      { value: 'rw', label: 'Reading & Writing' },
      { value: 'math', label: 'Math' }
    ]));

    filterBar.appendChild(makeSelect('Domain', 'domain', getDomainOptions()));

    filterBar.appendChild(makeSelect('Skill Level', 'difficulty', [
      { value: 'all', label: 'All Levels' },
      { value: 'level1', label: 'Level 1 — Foundation' },
      { value: 'level2', label: 'Level 2 — Developing' },
      { value: 'level3', label: 'Level 3 — Proficient' },
      { value: 'level4', label: 'Level 4 — Advanced' },
      { value: 'level5', label: 'Level 5 — Expert' }
    ]));

    filterBar.appendChild(makeSelect('Status', 'status', [
      { value: 'all', label: 'All Questions' },
      { value: 'unanswered', label: 'Unanswered' },
      { value: 'correct', label: 'Correct' },
      { value: 'incorrect', label: 'Incorrect' },
      { value: 'bookmarked', label: 'Bookmarked' }
    ]));

    wrap.appendChild(filterBar);

    // Question display area
    var questionArea = el('div', { id: 'practice-question-area' });
    wrap.appendChild(questionArea);

    // Apply params from URL
    if (params.section) filters.section = params.section;
    if (params.domain) filters.domain = params.domain;
    if (params.difficulty) filters.difficulty = params.difficulty;

    // Set select values from filters
    var selects = filterBar.querySelectorAll('select');
    selects.forEach(function(s) {
      var name = s.dataset.filter;
      if (filters[name]) s.value = filters[name];
    });

    applyFilters();
    showQuestion();
  }

  function makeSelect(label, filterKey, options) {
    var select = el('select', {
      className: 'form-select',
      'aria-label': label,
      dataset: { filter: filterKey },
      onChange: function() {
        filters[filterKey] = this.value;
        if (filterKey === 'section') {
          var domainSelect = document.querySelector('[data-filter="domain"]');
          if (domainSelect) {
            domainSelect.innerHTML = '';
            getDomainOptions().forEach(function(opt) {
              domainSelect.appendChild(el('option', { value: opt.value, textContent: opt.label }));
            });
            filters.domain = 'all';
          }
        }
        currentIndex = 0;
        applyFilters();
        showQuestion();
      }
    });

    options.forEach(function(opt) {
      select.appendChild(el('option', { value: opt.value, textContent: opt.label }));
    });

    return select;
  }

  function getDomainOptions() {
    var opts = [{ value: 'all', label: 'All Domains' }];
    var sec = filters.section;

    if (sec === 'all' || sec === 'rw') {
      opts.push({ value: 'craft', label: 'Craft & Structure' });
      opts.push({ value: 'info', label: 'Information & Ideas' });
      opts.push({ value: 'conventions', label: 'Standard English Conventions' });
      opts.push({ value: 'expression', label: 'Expression of Ideas' });
    }
    if (sec === 'all' || sec === 'math') {
      opts.push({ value: 'algebra', label: 'Algebra' });
      opts.push({ value: 'advanced', label: 'Advanced Math' });
      opts.push({ value: 'data', label: 'Problem-Solving & Data Analysis' });
      opts.push({ value: 'geometry', label: 'Geometry & Trigonometry' });
    }

    return opts;
  }

  function applyFilters() {
    if (!window.QuestionBank) {
      currentQuestions = [];
      return;
    }

    currentQuestions = QuestionBank.query({
      section: filters.section !== 'all' ? filters.section : null,
      domain: filters.domain !== 'all' ? filters.domain : null,
      difficulty: filters.difficulty !== 'all' ? filters.difficulty : null
    });

    // Status filter
    if (filters.status !== 'all') {
      var results = Storage.getResults();
      var bookmarks = Storage.getBookmarks();

      currentQuestions = currentQuestions.filter(function(q) {
        var r = results[q.id];
        switch (filters.status) {
          case 'unanswered': return !r;
          case 'correct': return r && r.correct;
          case 'incorrect': return r && !r.correct;
          case 'bookmarked': return bookmarks.indexOf(q.id) >= 0;
          default: return true;
        }
      });
    }

    // Sort by difficulty level
    var levelOrder = { level1: 1, level2: 2, level3: 3, level4: 4, level5: 5 };
    currentQuestions.sort(function(a, b) {
      return (levelOrder[a.difficulty] || 3) - (levelOrder[b.difficulty] || 3);
    });
  }

  function showQuestion() {
    var area = document.getElementById('practice-question-area');
    if (!area) return;
    area.innerHTML = '';

    if (currentQuestions.length === 0) {
      area.appendChild(el('div', { className: 'empty-state' }, [
        el('div', { style: { fontSize: '48px', marginBottom: 'var(--space-4)' }, textContent: '?' }),
        el('h3', { textContent: 'No questions found' }),
        el('p', { textContent: 'Try adjusting your filters to find questions.' }),
        el('button', {
          className: 'btn btn-primary mt-4',
          textContent: 'View Skill Levels',
          onClick: function() {
            viewMode = 'progression';
            var container = document.getElementById('app-content');
            container.innerHTML = '';
            PracticePage.render(container, {});
          }
        })
      ]));
      return;
    }

    // Counter with level indicator
    var q = currentQuestions[currentIndex];
    var sl = Utils.getSkillLevel(q.difficulty);

    area.appendChild(el('div', { className: 'flex justify-between items-center mb-4' }, [
      el('div', { className: 'flex items-center gap-3' }, [
        el('span', { className: 'text-sm text-secondary', textContent: 'Question ' + (currentIndex + 1) + ' of ' + currentQuestions.length }),
        el('span', {
          className: 'badge badge-' + q.difficulty,
          textContent: sl.name + ' (Score ' + sl.scoreRange + ')'
        })
      ]),
      el('div', { style: { width: '200px' } }, [
        ProgressBar.bar(currentIndex + 1, currentQuestions.length)
      ])
    ]));

    var card = QuestionCard.render({
      question: q,
      mode: 'practice',
      onAnswer: function() {
        showQuestion();
      },
      onNext: currentIndex < currentQuestions.length - 1 ? function() {
        currentIndex++;
        showQuestion();
      } : null,
      onPrev: currentIndex > 0 ? function() {
        currentIndex--;
        showQuestion();
      } : null,
      onBookmark: function() {}
    });

    area.appendChild(card);
  }

  return { render: render };
})();
