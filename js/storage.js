// localStorage Abstraction
window.Storage = (function() {
  var PREFIX = 'sat_';

  function _key(k) { return PREFIX + k; }

  function get(key, fallback) {
    try {
      var raw = localStorage.getItem(_key(key));
      if (raw === null) return fallback !== undefined ? fallback : null;
      return JSON.parse(raw);
    } catch (e) {
      return fallback !== undefined ? fallback : null;
    }
  }

  function set(key, value) {
    try {
      localStorage.setItem(_key(key), JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
  }

  function remove(key) {
    localStorage.removeItem(_key(key));
  }

  // ===== Question Results =====
  // Stored as { [questionId]: { correct, selectedAnswer, timestamp, timeSpent } }
  function getResults() {
    return get('results', {});
  }

  function saveResult(questionId, data) {
    var results = getResults();
    results[questionId] = {
      correct: data.correct,
      selectedAnswer: data.selectedAnswer,
      timestamp: Date.now(),
      timeSpent: data.timeSpent || 0
    };
    set('results', results);
    updateStreak();
  }

  function getResultForQuestion(questionId) {
    var results = getResults();
    return results[questionId] || null;
  }

  function clearResults() {
    set('results', {});
  }

  // ===== Bookmarks =====
  function getBookmarks() {
    return get('bookmarks', []);
  }

  function toggleBookmark(questionId) {
    var bookmarks = getBookmarks();
    var idx = bookmarks.indexOf(questionId);
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
    } else {
      bookmarks.push(questionId);
    }
    set('bookmarks', bookmarks);
    return idx < 0; // return true if added
  }

  function isBookmarked(questionId) {
    return getBookmarks().indexOf(questionId) >= 0;
  }

  // ===== Test Sessions =====
  function getTestSessions() {
    return get('test_sessions', []);
  }

  function saveTestSession(session) {
    var sessions = getTestSessions();
    sessions.push(session);
    set('test_sessions', sessions);
  }

  // Active (in-progress) test
  function getActiveTest() {
    return get('active_test', null);
  }

  function saveActiveTest(testState) {
    set('active_test', testState);
  }

  function clearActiveTest() {
    remove('active_test');
  }

  // ===== Streak Tracking =====
  function getStreak() {
    return get('streak', { current: 0, best: 0, lastDate: null });
  }

  function updateStreak() {
    var streak = getStreak();
    var today = new Date().toISOString().split('T')[0];

    if (streak.lastDate === today) return streak;

    var yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (streak.lastDate === yesterday) {
      streak.current += 1;
    } else {
      streak.current = 1;
    }

    if (streak.current > streak.best) {
      streak.best = streak.current;
    }

    streak.lastDate = today;
    set('streak', streak);
    return streak;
  }

  // ===== Stats Methods =====
  function getStats() {
    var results = getResults();
    var ids = Object.keys(results);
    var total = ids.length;
    var correct = 0;
    var totalTime = 0;
    var bySection = { rw: { total: 0, correct: 0 }, math: { total: 0, correct: 0 } };
    var byDomain = {};
    var byDifficulty = {
      level1: { total: 0, correct: 0 }, level2: { total: 0, correct: 0 },
      level3: { total: 0, correct: 0 }, level4: { total: 0, correct: 0 },
      level5: { total: 0, correct: 0 }
    };

    ids.forEach(function(id) {
      var r = results[id];
      if (r.correct) correct++;
      totalTime += r.timeSpent || 0;

      // Parse question metadata from ID or look up from bank
      var q = window.QuestionBank ? window.QuestionBank.getById(id) : null;
      if (q) {
        var sec = q.section;
        if (bySection[sec]) {
          bySection[sec].total++;
          if (r.correct) bySection[sec].correct++;
        }

        if (!byDomain[q.domain]) byDomain[q.domain] = { total: 0, correct: 0 };
        byDomain[q.domain].total++;
        if (r.correct) byDomain[q.domain].correct++;

        if (byDifficulty[q.difficulty]) {
          byDifficulty[q.difficulty].total++;
          if (r.correct) byDifficulty[q.difficulty].correct++;
        }
      }
    });

    return {
      total: total,
      correct: correct,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
      avgTime: total > 0 ? Math.round(totalTime / total) : 0,
      bySection: bySection,
      byDomain: byDomain,
      byDifficulty: byDifficulty,
      streak: getStreak(),
      testSessions: getTestSessions()
    };
  }

  return {
    get: get,
    set: set,
    remove: remove,
    getResults: getResults,
    saveResult: saveResult,
    getResultForQuestion: getResultForQuestion,
    clearResults: clearResults,
    getBookmarks: getBookmarks,
    toggleBookmark: toggleBookmark,
    isBookmarked: isBookmarked,
    getTestSessions: getTestSessions,
    saveTestSession: saveTestSession,
    getActiveTest: getActiveTest,
    saveActiveTest: saveActiveTest,
    clearActiveTest: clearActiveTest,
    getStreak: getStreak,
    updateStreak: updateStreak,
    getStats: getStats
  };
})();
