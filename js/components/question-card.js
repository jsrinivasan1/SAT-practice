// Question Card Renderer (Multiple Choice + Grid-In)
window.QuestionCard = (function() {
  var el = Utils.el;

  // Render a question card
  // options: { question, mode: 'practice'|'test', onAnswer, onNext, onPrev, onBookmark, onFlag, showNav }
  function render(options) {
    var q = options.question;
    var mode = options.mode || 'practice';
    var onAnswer = options.onAnswer || function() {};
    var onNext = options.onNext || null;
    var onPrev = options.onPrev || null;
    var onBookmark = options.onBookmark || null;
    var onFlag = options.onFlag || null;

    var existingResult = Storage.getResultForQuestion(q.id);
    var answered = mode === 'practice' && existingResult !== null;
    var selectedAnswer = answered ? existingResult.selectedAnswer : null;
    var testAnswer = mode === 'test' ? options.selectedAnswer : null;

    var container = el('div', { className: 'question-container' });

    // Meta info
    var sl = Utils.getSkillLevel(q.difficulty);
    var meta = el('div', { className: 'question-meta' }, [
      el('span', { className: 'badge badge-primary', textContent: Utils.getSectionName(q.section) }),
      el('span', { className: 'badge ' + Utils.getDifficultyClass(q.difficulty), textContent: sl.name }),
      el('span', { className: 'badge badge-gray', textContent: Utils.getDomainName(q.domain) })
    ]);
    container.appendChild(meta);

    // Check if question has passage — use split panel if so
    var hasPassage = q.passage && q.passage.trim().length > 0;
    var hasTable = q.tableData && q.tableData.headers;

    if (hasPassage || hasTable) {
      var splitPanel = el('div', { className: 'split-panel' });
      var leftPanel = el('div');

      if (hasPassage) {
        var passageEl = el('div', { className: 'question-passage' });
        // Support multi-paragraph passages
        q.passage.split('\n\n').forEach(function(para) {
          if (para.trim()) {
            passageEl.appendChild(el('p', { textContent: para.trim() }));
          }
        });
        leftPanel.appendChild(passageEl);
      }

      if (hasTable) {
        leftPanel.appendChild(renderTable(q.tableData));
      }

      var rightPanel = el('div');
      rightPanel.appendChild(renderStem(q));
      rightPanel.appendChild(renderAnswerArea(q, mode, answered, selectedAnswer, testAnswer, onAnswer));

      splitPanel.appendChild(leftPanel);
      splitPanel.appendChild(rightPanel);
      container.appendChild(splitPanel);
    } else {
      container.appendChild(renderStem(q));
      container.appendChild(renderAnswerArea(q, mode, answered, selectedAnswer, testAnswer, onAnswer));
    }

    // Explanation (practice mode, after answer)
    if (mode === 'practice' && answered) {
      container.appendChild(renderExplanation(q, existingResult.correct));
    }

    // Actions bar
    var actions = el('div', { className: 'question-actions' });

    var leftActions = el('div', { className: 'flex gap-2' });
    if (onPrev) {
      leftActions.appendChild(el('button', {
        className: 'btn btn-secondary',
        onClick: onPrev
      }, [Utils.icon('chevronLeft', 16), 'Previous']));
    }

    var rightActions = el('div', { className: 'flex gap-2' });

    if (onBookmark) {
      var isBookmarked = Storage.isBookmarked(q.id);
      rightActions.appendChild(el('button', {
        className: 'btn btn-ghost bookmark-btn' + (isBookmarked ? ' active' : ''),
        'aria-label': isBookmarked ? 'Remove bookmark' : 'Bookmark',
        onClick: function() {
          var added = Storage.toggleBookmark(q.id);
          this.classList.toggle('active', added);
          if (added) Toast.success('Bookmarked!');
          else Toast.show('Bookmark removed');
        }
      }, [
        Utils.icon(isBookmarked ? 'bookmarkFilled' : 'bookmark', 18),
        isBookmarked ? 'Bookmarked' : 'Bookmark'
      ]));
    }

    if (onFlag) {
      var isFlagged = options.isFlagged || false;
      rightActions.appendChild(el('button', {
        className: 'btn btn-ghost' + (isFlagged ? ' text-warning' : ''),
        onClick: onFlag
      }, [Utils.icon('flag', 16), isFlagged ? 'Flagged' : 'Flag']));
    }

    if (onNext) {
      rightActions.appendChild(el('button', {
        className: 'btn btn-primary',
        onClick: onNext
      }, ['Next', Utils.icon('chevronRight', 16)]));
    }

    actions.appendChild(leftActions);
    actions.appendChild(rightActions);
    container.appendChild(actions);

    return container;
  }

  function renderStem(q) {
    return el('div', { className: 'question-stem', textContent: q.stem });
  }

  function renderTable(tableData) {
    var wrapper = el('div', { className: 'question-table' });
    var table = el('table');
    if (tableData.headers) {
      var thead = el('thead');
      var tr = el('tr');
      tableData.headers.forEach(function(h) {
        tr.appendChild(el('th', { textContent: h }));
      });
      thead.appendChild(tr);
      table.appendChild(thead);
    }
    if (tableData.rows) {
      var tbody = el('tbody');
      tableData.rows.forEach(function(row) {
        var tr = el('tr');
        row.forEach(function(cell) {
          tr.appendChild(el('td', { textContent: cell }));
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
    }
    wrapper.appendChild(table);
    return wrapper;
  }

  function renderAnswerArea(q, mode, answered, selectedAnswer, testAnswer, onAnswer) {
    if (q.type === 'student-produced') {
      return renderGridIn(q, mode, answered, selectedAnswer, testAnswer, onAnswer);
    }
    return renderMultipleChoice(q, mode, answered, selectedAnswer, testAnswer, onAnswer);
  }

  function renderMultipleChoice(q, mode, answered, selectedAnswer, testAnswer, onAnswer) {
    var list = el('div', { className: 'choices-list', role: 'radiogroup', 'aria-label': 'Answer choices' });

    q.choices.forEach(function(choice) {
      var classes = 'choice-btn';
      var disabled = false;

      if (mode === 'practice' && answered) {
        disabled = true;
        classes += ' disabled';
        if (choice.label === q.correctAnswer) {
          classes += ' correct';
        } else if (choice.label === selectedAnswer) {
          classes += ' incorrect';
        }
      } else if (mode === 'test' && testAnswer === choice.label) {
        classes += ' selected';
      }

      var btn = el('button', {
        className: classes,
        role: 'radio',
        'aria-checked': String((mode === 'test' ? testAnswer : selectedAnswer) === choice.label),
        onClick: function() {
          if (disabled) return;
          if (mode === 'practice') {
            var correct = choice.label === q.correctAnswer;
            Storage.saveResult(q.id, {
              correct: correct,
              selectedAnswer: choice.label,
              timeSpent: 0
            });
            onAnswer(choice.label, correct);
          } else {
            // Test mode — just select, don't reveal
            onAnswer(choice.label);
          }
        }
      }, [
        el('span', { className: 'choice-label', textContent: choice.label }),
        el('span', { className: 'choice-text', textContent: choice.text })
      ]);

      list.appendChild(btn);
    });

    return list;
  }

  function renderGridIn(q, mode, answered, selectedAnswer, testAnswer, onAnswer) {
    var wrapper = el('div', { className: 'grid-in-input' });
    var input = el('input', {
      type: 'text',
      placeholder: 'Type your answer',
      'aria-label': 'Your answer',
      className: 'form-input'
    });

    if (mode === 'practice' && answered) {
      input.value = selectedAnswer || '';
      input.disabled = true;
      var isCorrect = checkGridInAnswer(selectedAnswer, q.correctAnswer);
      input.style.borderColor = isCorrect ? 'var(--color-success)' : 'var(--color-danger)';
    } else if (mode === 'test' && testAnswer) {
      input.value = testAnswer;
    }

    var submitBtn = el('button', {
      className: 'btn btn-primary',
      textContent: 'Submit',
      onClick: function() {
        var val = input.value.trim();
        if (!val) return;
        if (mode === 'practice') {
          var correct = checkGridInAnswer(val, q.correctAnswer);
          Storage.saveResult(q.id, {
            correct: correct,
            selectedAnswer: val,
            timeSpent: 0
          });
          onAnswer(val, correct);
        } else {
          onAnswer(val);
        }
      }
    });

    if (mode === 'practice' && answered) {
      submitBtn.style.display = 'none';
    }

    // Enter key submits
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') submitBtn.click();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(submitBtn);
    return wrapper;
  }

  function checkGridInAnswer(userAnswer, correctAnswer) {
    // Normalize: trim, lowercase, handle fractions/decimals
    var ua = String(userAnswer).trim().toLowerCase();
    var ca = String(correctAnswer).trim().toLowerCase();

    if (ua === ca) return true;

    // Try numeric comparison
    var uaNum = parseFloat(ua);
    var caNum = parseFloat(ca);
    if (!isNaN(uaNum) && !isNaN(caNum)) {
      return Math.abs(uaNum - caNum) < 0.001;
    }

    // Handle fractions like "3/4"
    if (ua.indexOf('/') >= 0 && ca.indexOf('/') >= 0) {
      var uaParts = ua.split('/').map(Number);
      var caParts = ca.split('/').map(Number);
      if (uaParts.length === 2 && caParts.length === 2 && uaParts[1] !== 0 && caParts[1] !== 0) {
        return Math.abs(uaParts[0] / uaParts[1] - caParts[0] / caParts[1]) < 0.001;
      }
    }

    // Handle user fraction vs correct decimal
    if (ua.indexOf('/') >= 0) {
      var parts = ua.split('/').map(Number);
      if (parts.length === 2 && parts[1] !== 0 && !isNaN(caNum)) {
        return Math.abs(parts[0] / parts[1] - caNum) < 0.001;
      }
    }

    return false;
  }

  function renderExplanation(q, wasCorrect) {
    return el('div', { className: 'explanation-box' }, [
      el('h4', {}, [
        wasCorrect ? 'Correct!' : 'Incorrect — The answer is ' + q.correctAnswer
      ]),
      el('p', { textContent: q.explanation })
    ]);
  }

  return { render: render };
})();
