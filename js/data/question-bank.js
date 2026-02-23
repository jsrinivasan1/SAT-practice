// Question Bank Aggregator + Query Engine
window.QuestionBank = (function() {
  var allQuestions = [];
  var indexed = {};

  // Map old 3-tier difficulties to 5-level system
  var diffMap = { 'easy': 'level2', 'medium': 'level3', 'hard': 'level4' };

  function init() {
    allQuestions = [];
    // Gather from all data sources on window.SAT_QUESTIONS
    if (window.SAT_QUESTIONS) {
      Object.keys(window.SAT_QUESTIONS).forEach(function(key) {
        var qs = window.SAT_QUESTIONS[key];
        if (Array.isArray(qs)) {
          allQuestions = allQuestions.concat(qs);
        }
      });
    }

    // Normalize all difficulties to 5-level system
    allQuestions.forEach(function(q) {
      if (diffMap[q.difficulty]) {
        q.difficulty = diffMap[q.difficulty];
      }
    });

    // Build index
    indexed = {};
    allQuestions.forEach(function(q) {
      indexed[q.id] = q;
    });
  }

  function getAll() {
    return allQuestions;
  }

  function getById(id) {
    return indexed[id] || null;
  }

  function query(filters) {
    var result = allQuestions;

    if (filters.section) {
      result = result.filter(function(q) { return q.section === filters.section; });
    }
    if (filters.domain) {
      result = result.filter(function(q) { return q.domain === filters.domain; });
    }
    if (filters.difficulty) {
      // Normalize filter value too
      var d = diffMap[filters.difficulty] || filters.difficulty;
      result = result.filter(function(q) { return q.difficulty === d; });
    }
    if (filters.type) {
      result = result.filter(function(q) { return q.type === filters.type; });
    }
    if (filters.ids) {
      result = result.filter(function(q) { return filters.ids.indexOf(q.id) >= 0; });
    }
    if (filters.exclude) {
      result = result.filter(function(q) { return filters.exclude.indexOf(q.id) < 0; });
    }
    if (filters.difficulties) {
      // Normalize all values
      var normalized = filters.difficulties.map(function(d) { return diffMap[d] || d; });
      result = result.filter(function(q) { return normalized.indexOf(q.difficulty) >= 0; });
    }
    if (filters.maxLevel) {
      var levels = ['level1', 'level2', 'level3', 'level4', 'level5'];
      var maxIdx = levels.indexOf(filters.maxLevel);
      if (maxIdx >= 0) {
        result = result.filter(function(q) { return levels.indexOf(q.difficulty) <= maxIdx; });
      }
    }

    return result;
  }

  // Get mastery stats per domain per level
  function getDomainMastery(domain) {
    var levels = ['level1', 'level2', 'level3', 'level4', 'level5'];
    var results = Storage.getResults();
    var mastery = {};

    levels.forEach(function(level) {
      var qs = query({ domain: domain, difficulty: level });
      var answered = 0;
      var correct = 0;
      qs.forEach(function(q) {
        var r = results[q.id];
        if (r) {
          answered++;
          if (r.correct) correct++;
        }
      });
      mastery[level] = {
        total: qs.length,
        answered: answered,
        correct: correct,
        accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
        mastered: answered >= 3 && (correct / answered) >= 0.75  // 75%+ with at least 3 answered
      };
    });

    return mastery;
  }

  // Get the recommended skill level for a domain based on mastery
  function getRecommendedLevel(domain) {
    var mastery = getDomainMastery(domain);
    var levels = ['level1', 'level2', 'level3', 'level4', 'level5'];

    for (var i = 0; i < levels.length; i++) {
      var m = mastery[levels[i]];
      if (!m.mastered) {
        return levels[i];
      }
    }
    return 'level5'; // All mastered, keep practicing at top
  }

  // Assemble questions for a test module
  function assembleModule(section, count, difficulties) {
    // Normalize difficulty names
    if (difficulties) {
      difficulties = difficulties.map(function(d) { return diffMap[d] || d; });
    }
    var pool = query({ section: section, difficulties: difficulties });
    return Utils.pickRandom(pool, Math.min(count, pool.length));
  }

  // Assemble adaptive Module 2
  function assembleAdaptiveModule(section, count, module1Score) {
    var threshold = 0.67;
    var harder = module1Score >= threshold;
    var difficulties;

    if (harder) {
      difficulties = ['level3', 'level4', 'level5'];
    } else {
      difficulties = ['level1', 'level2', 'level3'];
    }

    return assembleModule(section, count, difficulties);
  }

  // Assemble full test from config
  function assembleTest(config) {
    var modules = [];

    config.sections.forEach(function(sectionConfig) {
      sectionConfig.modules.forEach(function(modConfig, modIndex) {
        modules.push({
          name: modConfig.name,
          section: sectionConfig.section,
          count: modConfig.count,
          time: modConfig.time,
          adaptive: modConfig.adaptive || false,
          difficulties: modConfig.difficulties || ['level1', 'level2', 'level3', 'level4', 'level5'],
          moduleIndex: modIndex,
          questions: [] // filled at runtime
        });
      });
    });

    // Pre-fill non-adaptive modules
    var usedIds = [];
    modules.forEach(function(mod) {
      if (!mod.adaptive) {
        var qs = assembleModule(mod.section, mod.count, mod.difficulties);
        qs = qs.filter(function(q) { return usedIds.indexOf(q.id) < 0; });
        mod.questions = qs.slice(0, mod.count);
        mod.questions.forEach(function(q) { usedIds.push(q.id); });
      }
    });

    return { config: config, modules: modules, usedIds: usedIds };
  }

  return {
    init: init,
    getAll: getAll,
    getById: getById,
    query: query,
    getDomainMastery: getDomainMastery,
    getRecommendedLevel: getRecommendedLevel,
    assembleModule: assembleModule,
    assembleAdaptiveModule: assembleAdaptiveModule,
    assembleTest: assembleTest
  };
})();
