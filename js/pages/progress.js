// Analytics / Progress Dashboard
window.ProgressPage = (function() {
  var el = Utils.el;

  function render(container) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    wrap.appendChild(el('div', { className: 'mb-8' }, [
      el('h1', { className: 'text-3xl font-bold mb-2', textContent: 'Progress & Analytics' }),
      el('p', { className: 'text-secondary text-lg', textContent: 'Track your SAT preparation progress.' })
    ]));

    var stats = Storage.getStats();

    if (stats.total === 0) {
      wrap.appendChild(el('div', { className: 'empty-state' }, [
        el('div', { style: { fontSize: '48px', marginBottom: 'var(--space-4)' } }, [Utils.icon('progress', 48)]),
        el('h3', { textContent: 'No Data Yet' }),
        el('p', { textContent: 'Start answering questions to see your analytics here.' }),
        el('a', { className: 'btn btn-primary mt-4', href: '#/practice' }, ['Start Practicing'])
      ]));
      page.appendChild(wrap);
      container.appendChild(page);
      return;
    }

    // Top row: Accuracy donut + key stats
    var topRow = el('div', { className: 'grid grid-cols-3 gap-6 mb-8' });

    // Accuracy donut
    var donutCard = el('div', { className: 'card flex flex-col items-center justify-center' }, [
      el('h3', { className: 'card-title mb-4', textContent: 'Overall Accuracy' }),
      ProgressBar.ring({
        value: stats.accuracy,
        size: 140,
        thickness: 14,
        color: stats.accuracy >= 70 ? '#059669' : stats.accuracy >= 50 ? '#d97706' : '#dc2626',
        label: 'accuracy'
      })
    ]);
    topRow.appendChild(donutCard);

    // Section bars
    var sectionCard = el('div', { className: 'card' }, [
      el('h3', { className: 'card-title mb-4', textContent: 'Section Accuracy' })
    ]);

    ['rw', 'math'].forEach(function(sec) {
      var s = stats.bySection[sec];
      if (s.total > 0) {
        var pct = Utils.pct(s.correct, s.total);
        sectionCard.appendChild(el('div', { className: 'mb-4' }, [
          el('div', { className: 'flex justify-between mb-1' }, [
            el('span', { className: 'text-sm font-medium', textContent: Utils.getSectionName(sec) }),
            el('span', { className: 'text-sm text-secondary', textContent: pct + '% (' + s.correct + '/' + s.total + ')' })
          ]),
          ProgressBar.bar(s.correct, s.total, pct >= 70 ? 'success' : pct >= 50 ? 'warning' : 'danger')
        ]));
      }
    });
    topRow.appendChild(sectionCard);

    // Key stats
    var keyStats = el('div', { className: 'card' }, [
      el('h3', { className: 'card-title mb-4', textContent: 'Summary' }),
      statRow('Questions Answered', String(stats.total)),
      statRow('Correct Answers', String(stats.correct)),
      statRow('Avg Time/Question', stats.avgTime + 's'),
      statRow('Tests Completed', String(stats.testSessions.length)),
      statRow('Study Streak', stats.streak.current + ' day' + (stats.streak.current !== 1 ? 's' : '')),
      statRow('Best Streak', stats.streak.best + ' day' + (stats.streak.best !== 1 ? 's' : ''))
    ]);
    topRow.appendChild(keyStats);
    wrap.appendChild(topRow);

    // Domain heatmap
    var domainCard = el('div', { className: 'card mb-8' }, [
      el('h3', { className: 'card-title mb-4', textContent: 'Domain Strengths' })
    ]);

    var heatmap = el('div', { className: 'heatmap-grid', style: { gridTemplateColumns: 'repeat(4, 1fr)' } });
    var weakDomains = [];

    var domains = ['craft', 'info', 'conventions', 'expression', 'algebra', 'advanced', 'data', 'geometry'];
    domains.forEach(function(domain) {
      var d = stats.byDomain[domain];
      var pct = d ? Utils.pct(d.correct, d.total) : -1;
      var strengthClass = pct < 0 ? 'no-data' : pct >= 70 ? 'strong' : pct >= 50 ? 'moderate' : 'weak';
      var label = pct < 0 ? 'No data' : pct + '% (' + d.correct + '/' + d.total + ')';

      if (d && pct < 70) {
        weakDomains.push({ domain: domain, pct: pct, total: d.total });
      }

      heatmap.appendChild(el('div', { className: 'heatmap-cell ' + strengthClass }, [
        el('div', { className: 'text-xs mb-1', textContent: Utils.getDomainName(domain) }),
        el('div', { className: 'font-bold', textContent: pct < 0 ? '—' : pct + '%' }),
        d ? el('div', { className: 'text-xs', textContent: d.correct + '/' + d.total }) : null
      ]));
    });

    domainCard.appendChild(heatmap);
    wrap.appendChild(domainCard);

    // Skill level breakdown
    var diffCard = el('div', { className: 'card mb-8' }, [
      el('h3', { className: 'card-title mb-4', textContent: 'Performance by Skill Level' })
    ]);

    ['level1', 'level2', 'level3', 'level4', 'level5'].forEach(function(level) {
      var d = stats.byDifficulty[level];
      if (d && d.total > 0) {
        var pct = Utils.pct(d.correct, d.total);
        var sl = Utils.getSkillLevel(level);

        diffCard.appendChild(el('div', { className: 'mb-4' }, [
          el('div', { className: 'flex justify-between mb-1' }, [
            el('span', { className: 'text-sm font-medium' }, [
              el('span', { className: 'badge badge-' + level, textContent: sl.name + ' (' + sl.scoreRange + ')' })
            ]),
            el('span', { className: 'text-sm text-secondary', textContent: pct + '% (' + d.correct + '/' + d.total + ')' })
          ]),
          ProgressBar.bar(d.correct, d.total, pct >= 70 ? 'success' : pct >= 50 ? 'warning' : 'danger')
        ]));
      }
    });

    wrap.appendChild(diffCard);

    // Trend chart (from test sessions)
    if (stats.testSessions.length > 1) {
      var trendCard = el('div', { className: 'card mb-8' }, [
        el('h3', { className: 'card-title mb-4', textContent: 'Accuracy Trend (Tests)' })
      ]);

      var labels = [];
      var data = [];
      stats.testSessions.forEach(function(s, i) {
        labels.push('Test ' + (i + 1));
        data.push(Utils.pct(s.correct, s.total));
      });

      trendCard.appendChild(Chart.line({
        datasets: [{ label: 'Accuracy', data: data, color: '#1a56db' }],
        labels: labels,
        width: Math.min(800, window.innerWidth - 80),
        height: 250,
        maxValue: 100
      }));

      wrap.appendChild(trendCard);
    }

    // Weakest areas with practice links
    if (weakDomains.length > 0) {
      weakDomains.sort(function(a, b) { return a.pct - b.pct; });

      var weakCard = el('div', { className: 'card mb-8' }, [
        el('h3', { className: 'card-title mb-4', textContent: 'Areas to Improve' }),
        el('p', { className: 'text-sm text-secondary mb-4', textContent: 'Focus on these domains to improve your score.' })
      ]);

      weakDomains.forEach(function(wd) {
        var section = ['craft', 'info', 'conventions', 'expression'].indexOf(wd.domain) >= 0 ? 'rw' : 'math';
        weakCard.appendChild(el('div', {
          className: 'flex items-center justify-between p-3 mb-2',
          style: { background: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)' }
        }, [
          el('div', {}, [
            el('span', { className: 'font-medium', textContent: Utils.getDomainName(wd.domain) }),
            el('span', { className: 'text-sm text-secondary ml-2', textContent: wd.pct + '% accuracy' })
          ]),
          el('a', {
            className: 'btn btn-sm btn-outline',
            href: '#/practice?section=' + section + '&domain=' + wd.domain
          }, ['Practice'])
        ]));
      });

      wrap.appendChild(weakCard);
    }

    // Reset data option
    wrap.appendChild(el('div', { className: 'text-center mt-8 mb-4' }, [
      el('button', {
        className: 'btn btn-ghost text-sm text-danger',
        onClick: function() {
          Modal.confirm(
            'Reset All Progress?',
            'This will permanently delete all your practice history, test results, and streaks. This cannot be undone.',
            function() {
              Storage.clearResults();
              Storage.set('test_sessions', []);
              Storage.set('streak', { current: 0, best: 0, lastDate: null });
              Storage.set('bookmarks', []);
              Toast.success('Progress reset successfully');
              Router.navigate('/progress');
            }
          );
        }
      }, ['Reset All Progress'])
    ]));

    page.appendChild(wrap);
    container.appendChild(page);
  }

  function statRow(label, value) {
    return el('div', { className: 'flex justify-between py-2', style: { borderBottom: '1px solid var(--border-color)' } }, [
      el('span', { className: 'text-sm text-secondary', textContent: label }),
      el('span', { className: 'text-sm font-semibold', textContent: value })
    ]);
  }

  return { render: render };
})();
