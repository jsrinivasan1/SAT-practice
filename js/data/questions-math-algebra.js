// SAT Math - Algebra Questions
// Covers: linear-equations, systems-of-equations, linear-inequalities, linear-functions, absolute-value
// 30 questions: 10 easy, 10 medium, 10 hard
// Includes 4 student-produced and 3 questions with tableData

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-algebra'] = [

  // ===== EASY (001-010) =====

  {
    id: "math-algebra-001",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2x + 5 = 13, what is the value of x?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "9" }
    ],
    correctAnswer: "B",
    explanation: "Subtract 5 from both sides: 2x = 8. Divide both sides by 2: x = 4.",
    tags: ["solving-equations"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-002",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A store sells notebooks for $3 each. If Marcus spent $21 on notebooks, how many notebooks did he buy?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "7" },
      { label: "C", text: "8" },
      { label: "D", text: "9" }
    ],
    correctAnswer: "B",
    explanation: "Let n be the number of notebooks. Then 3n = 21, so n = 21 / 3 = 7.",
    tags: ["solving-equations", "word-problems"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-003",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following values of x satisfies the inequality 3x - 7 > 2?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "D",
    explanation: "Solve 3x - 7 > 2. Add 7 to both sides: 3x > 9. Divide by 3: x > 3. The only value greater than 3 among the choices is 4.",
    tags: ["linear-inequalities"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-004",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the slope of the line y = -3x + 7?",
    choices: [
      { label: "A", text: "-3" },
      { label: "B", text: "3" },
      { label: "C", text: "7" },
      { label: "D", text: "-7" }
    ],
    correctAnswer: "A",
    explanation: "The equation y = -3x + 7 is in slope-intercept form y = mx + b, where m is the slope and b is the y-intercept. The slope is -3.",
    tags: ["slope-intercept-form"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-005",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If x + y = 10 and x = 4, what is the value of y?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "6" },
      { label: "C", text: "10" },
      { label: "D", text: "14" }
    ],
    correctAnswer: "B",
    explanation: "Substitute x = 4 into x + y = 10: 4 + y = 10. Subtract 4 from both sides: y = 6.",
    tags: ["substitution"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-006",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the value of |(-8) + 3|?",
    choices: [
      { label: "A", text: "-5" },
      { label: "B", text: "5" },
      { label: "C", text: "11" },
      { label: "D", text: "-11" }
    ],
    correctAnswer: "B",
    explanation: "First evaluate the expression inside the absolute value: (-8) + 3 = -5. Then take the absolute value: |-5| = 5.",
    tags: ["absolute-value"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-007",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["x", "y"],
      rows: [
        ["0", "3"],
        ["1", "5"],
        ["2", "7"],
        ["3", "9"]
      ]
    },
    stem: "The table above shows several values of x and their corresponding values of y. Which of the following equations represents the relationship between x and y?",
    choices: [
      { label: "A", text: "y = x + 3" },
      { label: "B", text: "y = 2x + 3" },
      { label: "C", text: "y = 3x + 2" },
      { label: "D", text: "y = 2x + 1" }
    ],
    correctAnswer: "B",
    explanation: "When x = 0, y = 3, so the y-intercept is 3. The slope is the change in y over the change in x: (5 - 3) / (1 - 0) = 2. The equation is y = 2x + 3. Verify with x = 3: y = 2(3) + 3 = 9, which matches the table.",
    tags: ["linear-functions", "tables"],
    estimatedTime: 45
  },

  {
    id: "math-algebra-008",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "easy",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If 5(x - 2) = 15, what is the value of x?",
    choices: null,
    correctAnswer: "5",
    explanation: "Distribute: 5x - 10 = 15. Add 10 to both sides: 5x = 25. Divide both sides by 5: x = 5.",
    tags: ["solving-equations", "distributive-property"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-009",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A parking lot charges $5 per hour. If Tanya has no more than $30 to spend on parking, which inequality represents the number of hours h she can park?",
    choices: [
      { label: "A", text: "5h < 30" },
      { label: "B", text: "5h > 30" },
      { label: "C", text: "5h \u2264 30" },
      { label: "D", text: "5h \u2265 30" }
    ],
    correctAnswer: "C",
    explanation: "\"No more than $30\" means the total cost must be less than or equal to $30. The total cost is 5h dollars, so 5h \u2264 30.",
    tags: ["linear-inequalities", "word-problems"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-010",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A line passes through the points (0, 4) and (2, 10). What is the slope of the line?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "5" }
    ],
    correctAnswer: "B",
    explanation: "The slope formula is m = (y\u2082 - y\u2081) / (x\u2082 - x\u2081) = (10 - 4) / (2 - 0) = 6 / 2 = 3.",
    tags: ["slope"],
    estimatedTime: 30
  },

  // ===== MEDIUM (011-020) =====

  {
    id: "math-algebra-011",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2x + 3y = 12 and x - y = 1, what is the value of x?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "5" }
    ],
    correctAnswer: "B",
    explanation: "From the second equation, x = y + 1. Substitute into the first equation: 2(y + 1) + 3y = 12. Simplify: 2y + 2 + 3y = 12, so 5y + 2 = 12, giving 5y = 10 and y = 2. Then x = 2 + 1 = 3.",
    tags: ["systems-of-equations", "substitution"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-012",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If (3/4)x - 6 = (1/2)x + 2, what is the value of x?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "24" },
      { label: "C", text: "32" },
      { label: "D", text: "40" }
    ],
    correctAnswer: "C",
    explanation: "Subtract (1/2)x from both sides: (3/4)x - (1/2)x - 6 = 2. Since (3/4) - (2/4) = (1/4), this gives (1/4)x - 6 = 2. Add 6 to both sides: (1/4)x = 8. Multiply both sides by 4: x = 32.",
    tags: ["solving-equations", "fractions"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-013",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A cell phone plan charges a flat monthly fee of $25 plus $0.10 per text message sent. If the total monthly cost is represented by C and the number of text messages sent is t, which equation represents this relationship, and what is the cost for sending 150 text messages?",
    choices: [
      { label: "A", text: "C = 25t + 0.10; the cost is $37.60" },
      { label: "B", text: "C = 0.10t + 25; the cost is $40.00" },
      { label: "C", text: "C = 25t + 0.10; the cost is $3,750.10" },
      { label: "D", text: "C = 0.10t + 25; the cost is $42.50" }
    ],
    correctAnswer: "B",
    explanation: "The cost is a flat fee of $25 plus $0.10 per text, so C = 0.10t + 25. For 150 texts: C = 0.10(150) + 25 = 15 + 25 = $40.00.",
    tags: ["linear-functions", "word-problems"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-014",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution set of the equation |2x - 6| = 10?",
    choices: [
      { label: "A", text: "x = -2 or x = 8" },
      { label: "B", text: "x = 2 or x = -8" },
      { label: "C", text: "x = -2 or x = -8" },
      { label: "D", text: "x = 2 or x = 8" }
    ],
    correctAnswer: "A",
    explanation: "Set up two cases. Case 1: 2x - 6 = 10, so 2x = 16 and x = 8. Case 2: 2x - 6 = -10, so 2x = -4 and x = -2. The solution set is x = -2 or x = 8.",
    tags: ["absolute-value", "solving-equations"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-015",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A student needs at least 400 points total on 5 tests to earn an A in a course. On the first four tests, the student scored 78, 85, 72, and 90. What is the minimum score the student needs on the fifth test to earn an A?",
    choices: [
      { label: "A", text: "73" },
      { label: "B", text: "75" },
      { label: "C", text: "77" },
      { label: "D", text: "80" }
    ],
    correctAnswer: "B",
    explanation: "The sum of the first four scores is 78 + 85 + 72 + 90 = 325. Let s be the fifth test score. The student needs 325 + s \u2265 400, so s \u2265 75. The minimum score needed is 75.",
    tags: ["linear-inequalities", "word-problems"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-016",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "At a bakery, 3 muffins and 2 croissants cost $13.50, and 1 muffin and 4 croissants cost $14.50. What is the cost, in dollars, of one croissant?",
    choices: null,
    correctAnswer: "3",
    explanation: "Let m = price of a muffin and c = price of a croissant. The system is: 3m + 2c = 13.50 and m + 4c = 14.50. From the second equation, m = 14.50 - 4c. Substitute into the first: 3(14.50 - 4c) + 2c = 13.50. Simplify: 43.50 - 12c + 2c = 13.50, so -10c = -30 and c = 3. Check: m = 14.50 - 4(3) = 2.50. Verify: 3(2.50) + 2(3) = 7.50 + 6.00 = 13.50. Correct.",
    tags: ["systems-of-equations", "word-problems"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-017",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Line p passes through the points (-1, -3) and (5, 9). Line q is parallel to line p and passes through the point (0, -2). What is the equation of line q?",
    choices: [
      { label: "A", text: "y = 2x - 2" },
      { label: "B", text: "y = -2x - 2" },
      { label: "C", text: "y = 2x + 2" },
      { label: "D", text: "y = (1/2)x - 2" }
    ],
    correctAnswer: "A",
    explanation: "The slope of line p is (9 - (-3)) / (5 - (-1)) = 12 / 6 = 2. Since line q is parallel to line p, it has the same slope of 2. Line q passes through (0, -2), so the y-intercept is -2. The equation is y = 2x - 2.",
    tags: ["parallel-lines", "slope-intercept-form"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-018",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is equivalent to -3(x - 4) \u2265 2x + 7?",
    choices: [
      { label: "A", text: "x \u2264 1" },
      { label: "B", text: "x \u2265 1" },
      { label: "C", text: "x \u2264 -1" },
      { label: "D", text: "x \u2265 -1" }
    ],
    correctAnswer: "A",
    explanation: "Distribute: -3x + 12 \u2265 2x + 7. Subtract 2x from both sides: -5x + 12 \u2265 7. Subtract 12 from both sides: -5x \u2265 -5. Divide by -5 and reverse the inequality: x \u2264 1.",
    tags: ["linear-inequalities", "distributive-property"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-019",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Hours Worked (h)", "Total Pay ($)"],
      rows: [
        ["2", "41"],
        ["5", "71"],
        ["8", "101"],
        ["10", "121"]
      ]
    },
    stem: "The table above shows the total pay a freelance worker receives based on the number of hours worked. The relationship between total pay and hours worked is linear. What is the worker's hourly rate, and what flat fee does the worker charge per job?",
    choices: [
      { label: "A", text: "Hourly rate: $10, flat fee: $21" },
      { label: "B", text: "Hourly rate: $10, flat fee: $11" },
      { label: "C", text: "Hourly rate: $15, flat fee: $11" },
      { label: "D", text: "Hourly rate: $12, flat fee: $17" }
    ],
    correctAnswer: "A",
    explanation: "The hourly rate is the slope: (71 - 41) / (5 - 2) = 30 / 3 = $10 per hour. The flat fee is the y-intercept. Using the point (2, 41): 41 = 10(2) + b, so b = 41 - 20 = 21. The hourly rate is $10 and the flat fee is $21. Verify with (10, 121): 10(10) + 21 = 121. Correct.",
    tags: ["linear-functions", "tables", "word-problems"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-020",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A factory requires that each bolt it produces has a diameter of 12 millimeters, with a tolerance of no more than 0.3 millimeters. Which inequality represents the acceptable diameter d, in millimeters, of a bolt?",
    choices: [
      { label: "A", text: "|d - 12| < 0.3" },
      { label: "B", text: "|d - 12| \u2264 0.3" },
      { label: "C", text: "|d - 0.3| \u2264 12" },
      { label: "D", text: "|d + 12| \u2264 0.3" }
    ],
    correctAnswer: "B",
    explanation: "The diameter d must be within 0.3 mm of 12 mm. The distance between d and 12 is |d - 12|, and this distance must be no more than 0.3. \"No more than\" means less than or equal to, so |d - 12| \u2264 0.3.",
    tags: ["absolute-value", "word-problems"],
    estimatedTime: 45
  },

  // ===== HARD (021-030) =====

  {
    id: "math-algebra-021",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what value of the constant k does the system of equations 3x - 4y = 10 and 6x - 8y = k have infinitely many solutions?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "10" },
      { label: "C", text: "20" },
      { label: "D", text: "-20" }
    ],
    correctAnswer: "C",
    explanation: "For the system to have infinitely many solutions, the two equations must represent the same line. Multiply the first equation by 2: 6x - 8y = 20. For this to be identical to 6x - 8y = k, we need k = 20.",
    tags: ["systems-of-equations", "infinitely-many-solutions"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-022",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If (a/3) + (b/6) = 5 and a - b = 6, what is the value of a + b?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "14" },
      { label: "C", text: "18" },
      { label: "D", text: "22" }
    ],
    correctAnswer: "C",
    explanation: "Multiply the first equation by 6: 2a + b = 30. From the second equation, b = a - 6. Substitute: 2a + (a - 6) = 30, so 3a - 6 = 30, giving 3a = 36 and a = 12. Then b = 12 - 6 = 6. Therefore a + b = 12 + 6 = 18. Verify: (12/3) + (6/6) = 4 + 1 = 5. Correct.",
    tags: ["solving-equations", "fractions", "systems-of-equations"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-023",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The function f is defined by f(x) = 3x - 5. The function g is defined by g(x) = f(2x) + 4. What is the y-intercept of the graph of y = g(x)?",
    choices: [
      { label: "A", text: "-6" },
      { label: "B", text: "-1" },
      { label: "C", text: "4" },
      { label: "D", text: "9" }
    ],
    correctAnswer: "B",
    explanation: "First find f(2x): replace x with 2x in f(x) = 3x - 5 to get f(2x) = 3(2x) - 5 = 6x - 5. Then g(x) = f(2x) + 4 = 6x - 5 + 4 = 6x - 1. The y-intercept is the value when x = 0: g(0) = 6(0) - 1 = -1.",
    tags: ["function-composition", "linear-functions"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-024",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A movie theater sells adult tickets for $12 each and child tickets for $8 each. On a particular day, the theater sold a total of 200 tickets and collected $2,160 in revenue. How many adult tickets were sold?",
    choices: null,
    correctAnswer: "140",
    explanation: "Let a = number of adult tickets and c = number of child tickets. Then a + c = 200 and 12a + 8c = 2,160. From the first equation, c = 200 - a. Substitute: 12a + 8(200 - a) = 2,160. Simplify: 12a + 1,600 - 8a = 2,160, so 4a = 560 and a = 140. Verify: c = 60, and 12(140) + 8(60) = 1,680 + 480 = 2,160. Correct.",
    tags: ["systems-of-equations", "word-problems"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-025",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A company manufactures tables and chairs. Each table requires 4 hours of labor and each chair requires 2 hours of labor. The company has at most 120 hours of labor available per week. Each table also requires $50 in materials and each chair requires $20 in materials, and the company has a weekly materials budget of at most $1,500. If t represents the number of tables and c represents the number of chairs, which system of inequalities models these constraints?",
    choices: [
      { label: "A", text: "4t + 2c \u2264 120 and 50t + 20c \u2264 1,500" },
      { label: "B", text: "4t + 2c \u2265 120 and 50t + 20c \u2264 1,500" },
      { label: "C", text: "2t + 4c \u2264 120 and 20t + 50c \u2264 1,500" },
      { label: "D", text: "4t + 2c \u2264 120 and 50t + 20c \u2265 1,500" }
    ],
    correctAnswer: "A",
    explanation: "Each table requires 4 hours and each chair requires 2 hours, so the labor constraint is 4t + 2c \u2264 120 (at most 120 hours). Each table costs $50 and each chair costs $20 in materials, so the budget constraint is 50t + 20c \u2264 1,500 (at most $1,500). Both inequalities use \u2264 because they represent upper limits on resources.",
    tags: ["linear-inequalities", "systems-of-inequalities", "word-problems"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-026",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "How many integer solutions does the inequality |3x - 7| < 8 have?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "7" }
    ],
    correctAnswer: "B",
    explanation: "Solve |3x - 7| < 8. This gives -8 < 3x - 7 < 8. Add 7 to all parts: -1 < 3x < 15. Divide by 3: -1/3 < x < 5. The integers in this range are 0, 1, 2, 3, and 4, which gives 5 integer solutions.",
    tags: ["absolute-value", "inequalities"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-027",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what value of the constant c does the equation 3(2x - 5) = 6x + c have infinitely many solutions?",
    choices: [
      { label: "A", text: "-15" },
      { label: "B", text: "-5" },
      { label: "C", text: "5" },
      { label: "D", text: "15" }
    ],
    correctAnswer: "A",
    explanation: "Distribute the left side: 6x - 15 = 6x + c. For the equation to be true for all values of x, the constant terms must be equal. Since 6x appears on both sides, they cancel, leaving -15 = c. So c = -15.",
    tags: ["solving-equations", "special-cases"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-028",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Year", "Population"],
      rows: [
        ["2015", "12,400"],
        ["2017", "13,100"],
        ["2019", "13,800"],
        ["2021", "14,500"]
      ]
    },
    stem: "The table above shows the population of a small town for selected years. If the population growth is modeled by a linear function, what is the predicted population of the town in 2028?",
    choices: [
      { label: "A", text: "16,600" },
      { label: "B", text: "16,950" },
      { label: "C", text: "17,300" },
      { label: "D", text: "16,850" }
    ],
    correctAnswer: "B",
    explanation: "The population increases by 700 every 2 years, so the rate is 350 per year. Using the point (2015, 12,400), the linear model is P = 350(t - 2015) + 12,400. For t = 2028: P = 350(2028 - 2015) + 12,400 = 350(13) + 12,400 = 4,550 + 12,400 = 16,950.",
    tags: ["linear-functions", "tables", "word-problems"],
    estimatedTime: 90
  },

  {
    id: "math-algebra-029",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "In the system of equations below, what is the value of 3x + 3y?\n\n    5x + 2y = 31\n    x + 4y = 19",
    choices: null,
    correctAnswer: "25",
    explanation: "Add the two equations: (5x + 2y) + (x + 4y) = 31 + 19, which gives 6x + 6y = 50. Divide both sides by 2: 3x + 3y = 25.",
    tags: ["systems-of-equations", "combining-equations"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-030",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If -2 < (3 - x) / 2 < 5, which of the following represents all possible values of x?",
    choices: [
      { label: "A", text: "-7 < x < 7" },
      { label: "B", text: "-7 < x < 5" },
      { label: "C", text: "-3 < x < 7" },
      { label: "D", text: "-5 < x < 7" }
    ],
    correctAnswer: "A",
    explanation: "Multiply all three parts by 2: -4 < 3 - x < 10. Subtract 3 from all parts: -7 < -x < 7. Multiply all parts by -1 and reverse the inequality signs: -7 < x < 7.",
    tags: ["compound-inequalities"],
    estimatedTime: 75
  }

];
