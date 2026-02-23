// Post-Test Review Page
window.ReviewPage = (function() {
  var el = Utils.el;

  function render(container, params) {
    var sessionId = params.session;
    if (!sessionId) {
      Router.navigate('/');
      return;
    }

    var sessions = Storage.getTestSessions();
    var session = sessions.find(function(s) { return s.id === sessionId; });

    if (!session) {
      container.appendChild(el('div', { className: 'page' }, [
        el('div', { className: 'container' }, [
          el('div', { className: 'empty-state' }, [
            el('h3', { textContent: 'Session not found' }),
            el('p', { textContent: 'This test session could not be found.' }),
            el('a', { className: 'btn btn-primary mt-4', href: '#/' }, ['Back to Dashboard'])
          ])
        ])
      ]));
      return;
    }

    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    // Results header
    var pct = Utils.pct(session.correct, session.total);
    var header = el('div', { className: 'results-header' }, [
      el('h1', { className: 'text-3xl font-bold mb-2', textContent: 'Test Results' }),
      el('p', { className: 'text-secondary mb-4', textContent: session.configName + ' — ' + Utils.formatDate(session.date) }),
      el('div', { className: 'results-score', textContent: pct + '%' }),
      el('p', { className: 'text-secondary mt-2', textContent: session.correct + ' correct out of ' + session.total + ' questions' })
    ]);
    wrap.appendChild(header);

    // Stats grid
    var statsGrid = el('div', { className: 'results-grid' }, [
      resultStat('Score', pct + '%', pct >= 70 ? 'text-success' : pct >= 50 ? 'text-warning' : 'text-danger'),
      resultStat('Time Used', Utils.formatTime(session.timeUsed || 0), ''),
      resultStat('Questions', session.correct + '/' + session.total, '')
    ]);
    wrap.appendChild(statsGrid);

    // Module breakdown
    if (session.modules && session.modules.length > 0) {
      var moduleSection = el('div', { className: 'mb-8' }, [
        el('h2', { className: 'text-xl font-bold mb-4', textContent: 'Module Breakdown' })
      ]);

      session.modules.forEach(function(mod) {
        var modCorrect = 0;
        var modTotal = mod.questions.length;

        mod.questions.forEach(function(qId) {
          var q = QuestionBank.getById(qId);
          if (q && mod.answers[qId] === q.correctAnswer) modCorrect++;
        });

        var modPct = Utils.pct(modCorrect, modTotal);

        moduleSection.appendChild(el('div', { className: 'card mb-4' }, [
          el('div', { className: 'flex justify-between items-center mb-3' }, [
            el('h3', { className: 'font-semibold', textContent: mod.name }),
            el('span', {
              className: 'font-bold ' + (modPct >= 70 ? 'text-success' : modPct >= 50 ? 'text-warning' : 'text-danger'),
              textContent: modPct + '% (' + modCorrect + '/' + modTotal + ')'
            })
          ]),
          ProgressBar.bar(modCorrect, modTotal, modPct >= 70 ? 'success' : modPct >= 50 ? 'warning' : 'danger')
        ]));
      });

      wrap.appendChild(moduleSection);
    }

    // Question review
    var reviewSection = el('div', { className: 'mb-8' }, [
      el('h2', { className: 'text-xl font-bold mb-4', textContent: 'Question Review' })
    ]);

    var tabsContainer = el('div', { className: 'tabs mb-4' });
    var reviewContent = el('div', { id: 'review-questions' });
    var activeFilter = 'all';

    var tabFilters = [
      { key: 'all', label: 'All Questions' },
      { key: 'incorrect', label: 'Incorrect' },
      { key: 'correct', label: 'Correct' },
      { key: 'unanswered', label: 'Unanswered' }
    ];

    tabFilters.forEach(function(t) {
      var tab = el('button', {
        className: 'tab' + (t.key === activeFilter ? ' active' : ''),
        textContent: t.label,
        onClick: function() {
          activeFilter = t.key;
          tabsContainer.querySelectorAll('.tab').forEach(function(tt) { tt.classList.remove('active'); });
          this.classList.add('active');
          renderReviewQuestions(reviewContent, session, activeFilter);
        }
      });
      tabsContainer.appendChild(tab);
    });

    reviewSection.appendChild(tabsContainer);
    reviewSection.appendChild(reviewContent);
    wrap.appendChild(reviewSection);

    // Actions
    wrap.appendChild(el('div', { className: 'flex gap-3 justify-center mb-8' }, [
      el('a', { className: 'btn btn-primary', href: '#/test' }, ['Take Another Test']),
      el('a', { className: 'btn btn-secondary', href: '#/' }, ['Back to Dashboard'])
    ]));

    page.appendChild(wrap);
    container.appendChild(page);

    renderReviewQuestions(reviewContent, session, activeFilter);
  }

  function renderReviewQuestions(container, session, filter) {
    container.innerHTML = '';

    var allQs = [];
    session.modules.forEach(function(mod) {
      mod.questions.forEach(function(qId) {
        var q = QuestionBank.getById(qId);
        if (!q) return;

        var userAnswer = mod.answers[qId] || null;
        var isCorrect = userAnswer === q.correctAnswer;
        var status = !userAnswer ? 'unanswered' : isCorrect ? 'correct' : 'incorrect';

        if (filter !== 'all' && status !== filter) return;

        allQs.push({ question: q, userAnswer: userAnswer, isCorrect: isCorrect, status: status });
      });
    });

    if (allQs.length === 0) {
      container.appendChild(el('div', { className: 'empty-state p-8' }, [
        el('p', { className: 'text-secondary', textContent: 'No questions match this filter.' })
      ]));
      return;
    }

    allQs.forEach(function(item, idx) {
      var q = item.question;
      var card = el('div', { className: 'card mb-4' }, [
        el('div', { className: 'flex items-center gap-3 mb-3' }, [
          el('span', {
            className: 'badge ' + (item.status === 'correct' ? 'badge-success' : item.status === 'incorrect' ? 'badge-danger' : 'badge-gray'),
            textContent: Utils.capitalize(item.status)
          }),
          el('span', { className: 'badge badge-primary', textContent: Utils.getDomainName(q.domain) }),
          el('span', { className: 'badge ' + Utils.getDifficultyClass(q.difficulty), textContent: Utils.capitalize(q.difficulty) })
        ]),
        el('p', { className: 'font-medium mb-3', textContent: q.stem })
      ]);

      // Show choices with correct/incorrect highlighting
      if (q.choices) {
        var choices = el('div', { className: 'choices-list' });
        q.choices.forEach(function(choice) {
          var classes = 'choice-btn disabled';
          if (choice.label === q.correctAnswer) classes += ' correct';
          else if (choice.label === item.userAnswer && !item.isCorrect) classes += ' incorrect';

          choices.appendChild(el('div', { className: classes }, [
            el('span', { className: 'choice-label', textContent: choice.label }),
            el('span', { className: 'choice-text', textContent: choice.text })
          ]));
        });
        card.appendChild(choices);
      } else if (q.type === 'student-produced') {
        card.appendChild(el('div', { className: 'flex gap-4 text-sm' }, [
          el('span', {}, ['Your answer: ', el('strong', { textContent: item.userAnswer || '(no answer)' })]),
          el('span', {}, ['Correct answer: ', el('strong', { className: 'text-success', textContent: q.correctAnswer })])
        ]));
      }

      // Explanation
      card.appendChild(el('div', { className: 'explanation-box mt-4' }, [
        el('h4', { textContent: 'Explanation' }),
        el('p', { textContent: q.explanation })
      ]));

      container.appendChild(card);
    });
  }

  function resultStat(label, value, colorClass) {
    return el('div', { className: 'card text-center' }, [
      el('div', { className: 'text-sm text-secondary mb-1', textContent: label }),
      el('div', { className: 'text-2xl font-bold ' + colorClass, textContent: value })
    ]);
  }

  return { render: render };
})();
