// Dashboard / Home Page
window.HomePage = (function() {
  var el = Utils.el;

  function render(container) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    // Welcome header
    var header = el('div', { className: 'mb-8' }, [
      el('h1', { className: 'text-3xl font-bold mb-2', textContent: 'SAT Study Dashboard' }),
      el('p', { className: 'text-secondary text-lg', textContent: 'Track your progress, practice questions, and prepare for test day.' })
    ]);
    wrap.appendChild(header);

    // Stats cards
    var stats = Storage.getStats();
    var streak = stats.streak;
    var totalQuestions = window.QuestionBank ? QuestionBank.getAll().length : 0;

    var statGrid = el('div', { className: 'stat-grid' }, [
      statCard('blue', 'target', stats.total, 'Questions Answered'),
      statCard('green', 'check', stats.accuracy + '%', 'Accuracy'),
      statCard('purple', 'trophy', stats.testSessions.length, 'Tests Completed'),
      statCard('yellow', 'flame', streak.current + ' day' + (streak.current !== 1 ? 's' : ''), 'Study Streak')
    ]);
    wrap.appendChild(statGrid);

    // Main content grid
    var mainGrid = el('div', { className: 'grid grid-cols-2 gap-6 mb-8' });

    // Quick actions card
    var quickCard = el('div', { className: 'card' }, [
      el('div', { className: 'card-header' }, [
        el('h2', { className: 'card-title', textContent: 'Quick Start' })
      ]),
      el('div', { className: 'card-body flex flex-col gap-3' }, [
        actionButton('Practice Questions', 'Start practicing across all sections', '#/practice', 'practice'),
        actionButton('Quick Test', 'Take a timed 10-question quiz', '#/test?type=quick-mixed', 'test'),
        actionButton('Full SAT', 'Simulate a full-length practice test', '#/test?type=full-sat', 'test'),
        actionButton('Study Resources', 'Review formulas, vocab, and strategies', '#/resources', 'resources')
      ])
    ]);
    mainGrid.appendChild(quickCard);

    // Progress overview card
    var progressCard = el('div', { className: 'card' }, [
      el('div', { className: 'card-header' }, [
        el('h2', { className: 'card-title', textContent: 'Progress Overview' })
      ]),
      el('div', { className: 'card-body' })
    ]);

    var progressBody = progressCard.querySelector('.card-body');

    if (stats.total === 0) {
      progressBody.appendChild(el('div', { className: 'empty-state' }, [
        el('p', { className: 'text-secondary', textContent: 'No questions answered yet. Start practicing to see your progress!' }),
        el('a', { className: 'btn btn-primary mt-4', href: '#/practice' }, ['Start Practicing'])
      ]));
    } else {
      // Section breakdown
      progressBody.appendChild(el('h4', { className: 'font-semibold mb-3', textContent: 'Section Accuracy' }));

      ['rw', 'math'].forEach(function(sec) {
        var s = stats.bySection[sec];
        if (s.total > 0) {
          var pct = Utils.pct(s.correct, s.total);
          progressBody.appendChild(el('div', { className: 'mb-4' }, [
            el('div', { className: 'flex justify-between mb-1' }, [
              el('span', { className: 'text-sm font-medium', textContent: Utils.getSectionName(sec) }),
              el('span', { className: 'text-sm text-secondary', textContent: pct + '% (' + s.correct + '/' + s.total + ')' })
            ]),
            ProgressBar.bar(s.correct, s.total, pct >= 70 ? 'success' : pct >= 50 ? 'warning' : 'danger')
          ]));
        }
      });

      progressBody.appendChild(el('a', {
        className: 'btn btn-outline btn-sm mt-2',
        href: '#/progress'
      }, ['View Full Analytics', Utils.icon('arrowRight', 14)]));
    }

    mainGrid.appendChild(progressCard);
    wrap.appendChild(mainGrid);

    // Domain skill level overview
    if (stats.total > 0) {
      var domainCard = el('div', { className: 'card mb-8' }, [
        el('div', { className: 'card-header' }, [
          el('h2', { className: 'card-title', textContent: 'Skill Level Progress' }),
          el('a', { className: 'btn btn-sm btn-outline', href: '#/practice' }, ['Practice'])
        ]),
        el('div', { className: 'card-body' })
      ]);

      var domainBody = domainCard.querySelector('.card-body');
      var grid = el('div', { className: 'domain-progress-grid' });
      var levels = ['level1', 'level2', 'level3', 'level4', 'level5'];

      var domains = ['craft', 'info', 'conventions', 'expression', 'algebra', 'advanced', 'data', 'geometry'];
      domains.forEach(function(domain) {
        var mastery = QuestionBank.getDomainMastery(domain);
        var recommended = QuestionBank.getRecommendedLevel(domain);
        var sl = Utils.getSkillLevel(recommended);

        var miniCard = el('div', { className: 'domain-progress-card' });
        miniCard.appendChild(el('div', { className: 'flex justify-between items-center mb-2' }, [
          el('div', { className: 'domain-name', textContent: Utils.getDomainName(domain) }),
          el('span', { className: 'badge badge-' + recommended, textContent: sl.name })
        ]));

        var dots = el('div', { className: 'level-dots' });
        levels.forEach(function(level) {
          var m = mastery[level];
          var cls = 'level-dot';
          if (m.mastered) cls += ' filled';
          else if (m.answered > 0) cls += ' partial';
          dots.appendChild(el('div', { className: cls }));
        });
        miniCard.appendChild(dots);

        grid.appendChild(miniCard);
      });

      domainBody.appendChild(grid);
      wrap.appendChild(domainCard);
    }

    // Recent test sessions
    if (stats.testSessions.length > 0) {
      var recentCard = el('div', { className: 'card' }, [
        el('div', { className: 'card-header' }, [
          el('h2', { className: 'card-title', textContent: 'Recent Tests' })
        ])
      ]);

      var tableWrap = el('div', { className: 'table-container' });
      var table = el('table', { className: 'data-table' });
      table.appendChild(el('thead', {}, [
        el('tr', {}, [
          el('th', { textContent: 'Date' }),
          el('th', { textContent: 'Type' }),
          el('th', { textContent: 'Score' }),
          el('th', { textContent: 'Time' }),
          el('th', { textContent: '' })
        ])
      ]));

      var tbody = el('tbody');
      var recentSessions = stats.testSessions.slice(-5).reverse();
      recentSessions.forEach(function(s) {
        var pct = Utils.pct(s.correct, s.total);
        tbody.appendChild(el('tr', {}, [
          el('td', { textContent: Utils.formatDate(s.date) }),
          el('td', { textContent: s.configName || 'Practice Test' }),
          el('td', {}, [
            el('span', {
              className: 'font-semibold ' + (pct >= 70 ? 'text-success' : pct >= 50 ? 'text-warning' : 'text-danger'),
              textContent: pct + '% (' + s.correct + '/' + s.total + ')'
            })
          ]),
          el('td', { textContent: Utils.formatTime(s.timeUsed || 0) }),
          el('td', {}, [
            el('a', { className: 'btn btn-sm btn-ghost', href: '#/review?session=' + s.id }, ['Review'])
          ])
        ]));
      });
      table.appendChild(tbody);
      tableWrap.appendChild(table);
      recentCard.appendChild(tableWrap);
      wrap.appendChild(recentCard);
    }

    page.appendChild(wrap);
    container.appendChild(page);
  }

  function statCard(colorClass, iconName, value, label) {
    return el('div', { className: 'stat-card' }, [
      el('div', { className: 'stat-icon ' + colorClass }, [
        Utils.icon(iconName, 24)
      ]),
      el('div', { className: 'stat-info' }, [
        el('div', { className: 'stat-value', textContent: String(value) }),
        el('div', { className: 'stat-label', textContent: label })
      ])
    ]);
  }

  function actionButton(title, desc, href, iconName) {
    return el('a', {
      className: 'flex items-center gap-4 p-3',
      href: href,
      style: {
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'background var(--transition-fast)'
      },
      onMouseenter: function() { this.style.background = 'var(--color-gray-50)'; },
      onMouseleave: function() { this.style.background = ''; }
    }, [
      el('div', { className: 'stat-icon blue', style: { width: '40px', height: '40px' } }, [
        Utils.icon(iconName, 20)
      ]),
      el('div', { className: 'flex-1' }, [
        el('div', { className: 'font-medium', textContent: title }),
        el('div', { className: 'text-sm text-secondary', textContent: desc })
      ]),
      Utils.icon('chevronRight', 18)
    ]);
  }

  return { render: render };
})();
