// Timed Test Engine
window.TestPage = (function() {
  var el = Utils.el;

  // Test state
  var state = null;
  var timer = null;
  var autoSaveInterval = null;

  function render(container, params) {
    // Check for active test to resume
    var activeTest = Storage.getActiveTest();
    if (activeTest && !params.type) {
      showResumePrompt(container, activeTest);
      return;
    }

    if (params.type) {
      startNewTest(container, params.type);
      return;
    }

    showTestSelection(container);
  }

  // ===== Test Selection Screen =====
  function showTestSelection(container) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    wrap.appendChild(el('div', { className: 'mb-8' }, [
      el('h1', { className: 'text-3xl font-bold mb-2', textContent: 'Practice Tests' }),
      el('p', { className: 'text-secondary text-lg', textContent: 'Choose a test type to begin a timed practice session.' })
    ]));

    var grid = el('div', { className: 'grid grid-cols-2 gap-4' });

    TestConfigs.forEach(function(config) {
      var card = el('div', { className: 'card', style: { cursor: 'pointer' } }, [
        el('h3', { className: 'card-title mb-2', textContent: config.name }),
        el('p', { className: 'text-sm text-secondary mb-4', textContent: config.description }),
        el('div', { className: 'flex gap-3' }, [
          el('span', { className: 'badge badge-primary', textContent: config.totalQuestions + ' questions' }),
          el('span', { className: 'badge badge-gray', textContent: Math.round(config.totalTime / 60) + ' min' })
        ]),
        el('button', {
          className: 'btn btn-primary btn-block mt-4',
          onClick: function(e) {
            e.stopPropagation();
            Router.navigate('/test?type=' + config.id);
          }
        }, [Utils.icon('play', 16), 'Start Test'])
      ]);

      card.addEventListener('click', function() {
        Router.navigate('/test?type=' + config.id);
      });

      grid.appendChild(card);
    });

    wrap.appendChild(grid);
    page.appendChild(wrap);
    container.appendChild(page);
  }

  // ===== Resume Prompt =====
  function showResumePrompt(container, activeTest) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    wrap.appendChild(el('div', { className: 'card', style: { maxWidth: '500px', margin: '0 auto', textAlign: 'center' } }, [
      el('div', { style: { marginBottom: 'var(--space-4)' } }, [Utils.icon('alertTriangle', 48)]),
      el('h2', { className: 'text-xl font-bold mb-2', textContent: 'Test In Progress' }),
      el('p', { className: 'text-secondary mb-6', textContent: 'You have an unfinished test. Would you like to resume or start fresh?' }),
      el('div', { className: 'flex gap-3 justify-center' }, [
        el('button', {
          className: 'btn btn-primary',
          textContent: 'Resume Test',
          onClick: function() {
            state = activeTest;
            container.innerHTML = '';
            showActiveTest(container);
          }
        }),
        el('button', {
          className: 'btn btn-secondary',
          textContent: 'Discard & Choose New',
          onClick: function() {
            Storage.clearActiveTest();
            container.innerHTML = '';
            showTestSelection(container);
          }
        })
      ])
    ]));

    page.appendChild(wrap);
    container.appendChild(page);
  }

  // ===== Start New Test =====
  function startNewTest(container, configId) {
    var config = TestConfigs.find(function(c) { return c.id === configId; });
    if (!config) {
      showTestSelection(container);
      return;
    }

    var test = QuestionBank.assembleTest(config);

    state = {
      id: Utils.uid(),
      configId: config.id,
      configName: config.name,
      modules: test.modules.map(function(mod, i) {
        return {
          name: mod.name,
          section: mod.section,
          count: mod.count,
          time: mod.time,
          adaptive: mod.adaptive,
          difficulties: mod.difficulties,
          questions: mod.questions.map(function(q) { return q.id; }),
          answers: {},
          flagged: [],
          timeRemaining: mod.time,
          completed: false
        };
      }),
      usedIds: test.usedIds,
      currentModule: 0,
      currentQuestion: 0,
      startTime: Date.now(),
      date: new Date().toISOString()
    };

    Storage.saveActiveTest(state);
    showActiveTest(container);
  }

  // ===== Active Test UI =====
  function showActiveTest(container) {
    container.innerHTML = '';

    var mod = state.modules[state.currentModule];

    // If module has no questions yet (adaptive), assemble them
    if (mod.questions.length === 0) {
      if (mod.adaptive && state.currentModule > 0) {
        // Calculate Module 1 score for this section
        var prevMod = null;
        for (var i = state.currentModule - 1; i >= 0; i--) {
          if (state.modules[i].section === mod.section) {
            prevMod = state.modules[i];
            break;
          }
        }
        var score = 0;
        if (prevMod) {
          var answered = Object.keys(prevMod.answers).length;
          var correct = 0;
          Object.keys(prevMod.answers).forEach(function(qid) {
            var q = QuestionBank.getById(qid);
            if (q && prevMod.answers[qid] === q.correctAnswer) correct++;
          });
          score = answered > 0 ? correct / answered : 0;
        }

        var adaptiveQs = QuestionBank.assembleAdaptiveModule(mod.section, mod.count, score);
        adaptiveQs = adaptiveQs.filter(function(q) { return state.usedIds.indexOf(q.id) < 0; });
        mod.questions = adaptiveQs.slice(0, mod.count).map(function(q) { return q.id; });
        mod.questions.forEach(function(id) { state.usedIds.push(id); });
      } else {
        var qs = QuestionBank.assembleModule(mod.section, mod.count, mod.difficulties || ['easy', 'medium', 'hard']);
        qs = qs.filter(function(q) { return state.usedIds.indexOf(q.id) < 0; });
        mod.questions = qs.slice(0, mod.count).map(function(q) { return q.id; });
        mod.questions.forEach(function(id) { state.usedIds.push(id); });
      }
      Storage.saveActiveTest(state);
    }

    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    var testLayout = el('div', { className: 'test-layout' });

    // Main question area
    var mainArea = el('div', { id: 'test-question-area' });
    testLayout.appendChild(mainArea);

    // Sidebar
    var sidebar = el('div', { className: 'test-sidebar' });

    // Timer
    if (timer) timer.destroy();
    timer = Timer.create({
      seconds: mod.timeRemaining,
      onTick: function(remaining) {
        mod.timeRemaining = remaining;
      },
      onComplete: function() {
        Toast.warning('Time is up!');
        completeModule();
      }
    });
    sidebar.appendChild(el('div', { className: 'card mb-4' }, [
      el('div', { className: 'text-sm font-semibold text-center mb-2', textContent: mod.name }),
      timer.el,
      el('div', { className: 'flex gap-2 mt-3 justify-center' }, [
        el('button', {
          className: 'btn btn-sm btn-ghost',
          onClick: function() {
            timer.pause();
            Modal.show({
              title: 'Test Paused',
              body: '<p>Your timer is paused. Click Resume to continue.</p>',
              confirmText: 'Resume',
              showCancel: false,
              onConfirm: function() { timer.resume(); }
            });
          }
        }, [Utils.icon('pause', 14), 'Pause'])
      ])
    ]));
    timer.start();

    // Question navigator
    var navCard = el('div', { className: 'card' }, [
      el('div', { className: 'text-sm font-semibold mb-3', textContent: 'Questions' }),
      el('div', { className: 'question-nav-grid', id: 'q-nav-grid' })
    ]);
    sidebar.appendChild(navCard);

    // Submit button
    sidebar.appendChild(el('button', {
      className: 'btn btn-success btn-block mt-4',
      onClick: function() {
        var unanswered = mod.questions.length - Object.keys(mod.answers).length;
        if (unanswered > 0) {
          Modal.confirm(
            'Submit Module?',
            'You have ' + unanswered + ' unanswered question' + (unanswered > 1 ? 's' : '') + '. Are you sure you want to submit?',
            function() { completeModule(); }
          );
        } else {
          completeModule();
        }
      }
    }, ['Submit Module']));

    testLayout.appendChild(sidebar);
    wrap.appendChild(testLayout);
    page.appendChild(wrap);
    container.appendChild(page);

    renderTestQuestion();
    renderQuestionNav();

    // Auto-save
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    autoSaveInterval = setInterval(function() {
      Storage.saveActiveTest(state);
    }, 10000);
  }

  function renderTestQuestion() {
    var area = document.getElementById('test-question-area');
    if (!area) return;
    area.innerHTML = '';

    var mod = state.modules[state.currentModule];
    var qId = mod.questions[state.currentQuestion];
    var q = QuestionBank.getById(qId);

    if (!q) {
      area.appendChild(el('div', { className: 'empty-state', textContent: 'Question not found' }));
      return;
    }

    var card = QuestionCard.render({
      question: q,
      mode: 'test',
      selectedAnswer: mod.answers[qId] || null,
      isFlagged: mod.flagged.indexOf(qId) >= 0,
      onAnswer: function(answer) {
        mod.answers[qId] = answer;
        Storage.saveActiveTest(state);
        renderQuestionNav();

        // Auto-advance if not flagged
        if (state.currentQuestion < mod.questions.length - 1) {
          setTimeout(function() {
            state.currentQuestion++;
            renderTestQuestion();
            renderQuestionNav();
          }, 300);
        }
      },
      onNext: state.currentQuestion < mod.questions.length - 1 ? function() {
        state.currentQuestion++;
        renderTestQuestion();
        renderQuestionNav();
      } : null,
      onPrev: state.currentQuestion > 0 ? function() {
        state.currentQuestion--;
        renderTestQuestion();
        renderQuestionNav();
      } : null,
      onFlag: function() {
        var idx = mod.flagged.indexOf(qId);
        if (idx >= 0) mod.flagged.splice(idx, 1);
        else mod.flagged.push(qId);
        renderTestQuestion();
        renderQuestionNav();
      }
    });

    area.appendChild(card);
  }

  function renderQuestionNav() {
    var grid = document.getElementById('q-nav-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var mod = state.modules[state.currentModule];

    mod.questions.forEach(function(qId, i) {
      var classes = 'q-nav-btn';
      if (i === state.currentQuestion) classes += ' current';
      if (mod.answers[qId]) classes += ' answered';
      if (mod.flagged.indexOf(qId) >= 0) classes += ' flagged';

      grid.appendChild(el('button', {
        className: classes,
        textContent: String(i + 1),
        'aria-label': 'Question ' + (i + 1),
        onClick: function() {
          state.currentQuestion = i;
          renderTestQuestion();
          renderQuestionNav();
        }
      }));
    });
  }

  function completeModule() {
    if (timer) timer.stop();
    if (autoSaveInterval) clearInterval(autoSaveInterval);

    var mod = state.modules[state.currentModule];
    mod.completed = true;

    // Save individual question results
    mod.questions.forEach(function(qId) {
      var q = QuestionBank.getById(qId);
      if (q && mod.answers[qId]) {
        var isCorrect = false;
        if (q.type === 'student-produced') {
          isCorrect = Math.abs(parseFloat(mod.answers[qId]) - parseFloat(q.correctAnswer)) < 0.001 ||
                      String(mod.answers[qId]).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
        } else {
          isCorrect = mod.answers[qId] === q.correctAnswer;
        }
        Storage.saveResult(qId, {
          correct: isCorrect,
          selectedAnswer: mod.answers[qId],
          timeSpent: 0
        });
      }
    });

    // Check if there's another module
    var nextModule = state.currentModule + 1;
    if (nextModule < state.modules.length) {
      state.currentModule = nextModule;
      state.currentQuestion = 0;
      Storage.saveActiveTest(state);

      // Show module transition
      var container = document.getElementById('app-content');
      container.innerHTML = '';
      showModuleTransition(container);
    } else {
      finishTest();
    }
  }

  function showModuleTransition(container) {
    var prevMod = state.modules[state.currentModule - 1];
    var nextMod = state.modules[state.currentModule];

    // Calculate prev module score
    var correct = 0;
    var total = prevMod.questions.length;
    prevMod.questions.forEach(function(qId) {
      var q = QuestionBank.getById(qId);
      if (q && prevMod.answers[qId] === q.correctAnswer) correct++;
    });

    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container', style: { maxWidth: '600px' } });

    wrap.appendChild(el('div', { className: 'card text-center' }, [
      el('h2', { className: 'text-2xl font-bold mb-4', textContent: 'Module Complete!' }),
      el('p', { className: 'text-secondary mb-6', textContent: prevMod.name + ' finished. You answered ' + correct + ' of ' + total + ' correctly.' }),
      el('div', { className: 'mb-6' }, [
        ProgressBar.bar(correct, total, correct / total >= 0.67 ? 'success' : 'warning')
      ]),
      el('div', { className: 'p-4', style: { background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)' } }, [
        el('p', { className: 'font-semibold mb-1', textContent: 'Up Next: ' + nextMod.name }),
        el('p', { className: 'text-sm text-secondary', textContent: nextMod.questions.length > 0 ? nextMod.questions.length + ' questions' : nextMod.count + ' questions' + ' | ' + Math.round(nextMod.time / 60) + ' minutes' })
      ]),
      el('button', {
        className: 'btn btn-primary btn-lg mt-6',
        onClick: function() {
          container.innerHTML = '';
          showActiveTest(container);
        }
      }, ['Continue to Next Module', Utils.icon('arrowRight', 18)])
    ]));

    page.appendChild(wrap);
    container.appendChild(page);
  }

  function finishTest() {
    if (timer) timer.destroy();
    if (autoSaveInterval) clearInterval(autoSaveInterval);

    // Calculate overall results
    var totalCorrect = 0;
    var totalQuestions = 0;

    state.modules.forEach(function(mod) {
      mod.questions.forEach(function(qId) {
        totalQuestions++;
        var q = QuestionBank.getById(qId);
        if (q && mod.answers[qId] === q.correctAnswer) totalCorrect++;
      });
    });

    // Save session
    var session = {
      id: state.id,
      configId: state.configId,
      configName: state.configName,
      date: state.date,
      correct: totalCorrect,
      total: totalQuestions,
      timeUsed: Math.round((Date.now() - state.startTime) / 1000),
      modules: state.modules
    };

    Storage.saveTestSession(session);
    Storage.clearActiveTest();

    // Navigate to review
    Router.navigate('/review?session=' + state.id);
  }

  return { render: render };
})();
