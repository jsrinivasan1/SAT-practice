// Test Type Definitions
window.TestConfigs = [
  {
    id: 'full-sat',
    name: 'Full SAT Practice Test',
    description: '98 questions across Reading & Writing and Math, with adaptive Module 2',
    sections: [
      {
        section: 'rw',
        modules: [
          { name: 'RW Module 1', count: 27, time: 32 * 60, difficulties: ['easy', 'medium', 'hard'] },
          { name: 'RW Module 2', count: 27, time: 32 * 60, adaptive: true }
        ]
      },
      {
        section: 'math',
        modules: [
          { name: 'Math Module 1', count: 22, time: 35 * 60, difficulties: ['easy', 'medium', 'hard'] },
          { name: 'Math Module 2', count: 22, time: 35 * 60, adaptive: true }
        ]
      }
    ],
    totalQuestions: 98,
    totalTime: 134 * 60
  },
  {
    id: 'full-rw',
    name: 'Full Reading & Writing',
    description: '54 questions in 2 adaptive modules (64 minutes)',
    sections: [
      {
        section: 'rw',
        modules: [
          { name: 'RW Module 1', count: 27, time: 32 * 60, difficulties: ['easy', 'medium', 'hard'] },
          { name: 'RW Module 2', count: 27, time: 32 * 60, adaptive: true }
        ]
      }
    ],
    totalQuestions: 54,
    totalTime: 64 * 60
  },
  {
    id: 'full-math',
    name: 'Full Math Section',
    description: '44 questions in 2 adaptive modules (70 minutes)',
    sections: [
      {
        section: 'math',
        modules: [
          { name: 'Math Module 1', count: 22, time: 35 * 60, difficulties: ['easy', 'medium', 'hard'] },
          { name: 'Math Module 2', count: 22, time: 35 * 60, adaptive: true }
        ]
      }
    ],
    totalQuestions: 44,
    totalTime: 70 * 60
  },
  {
    id: 'rw-module',
    name: 'RW Single Module',
    description: '27 questions in 32 minutes',
    sections: [
      {
        section: 'rw',
        modules: [
          { name: 'RW Module', count: 27, time: 32 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      }
    ],
    totalQuestions: 27,
    totalTime: 32 * 60
  },
  {
    id: 'math-module',
    name: 'Math Single Module',
    description: '22 questions in 35 minutes',
    sections: [
      {
        section: 'math',
        modules: [
          { name: 'Math Module', count: 22, time: 35 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      }
    ],
    totalQuestions: 22,
    totalTime: 35 * 60
  },
  {
    id: 'quick-rw',
    name: 'Quick RW Practice',
    description: '10 Reading & Writing questions in 12 minutes',
    sections: [
      {
        section: 'rw',
        modules: [
          { name: 'Quick RW', count: 10, time: 12 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      }
    ],
    totalQuestions: 10,
    totalTime: 12 * 60
  },
  {
    id: 'quick-math',
    name: 'Quick Math Practice',
    description: '10 Math questions in 15 minutes',
    sections: [
      {
        section: 'math',
        modules: [
          { name: 'Quick Math', count: 10, time: 15 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      }
    ],
    totalQuestions: 10,
    totalTime: 15 * 60
  },
  {
    id: 'quick-mixed',
    name: 'Quick Mixed Practice',
    description: '10 mixed questions in 13 minutes',
    sections: [
      {
        section: 'rw',
        modules: [
          { name: 'Quick Mix RW', count: 5, time: 6.5 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      },
      {
        section: 'math',
        modules: [
          { name: 'Quick Mix Math', count: 5, time: 6.5 * 60, difficulties: ['easy', 'medium', 'hard'] }
        ]
      }
    ],
    totalQuestions: 10,
    totalTime: 13 * 60
  }
];
