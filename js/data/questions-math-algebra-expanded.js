window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-algebra-expanded'] = [

  // ============================================================
  // LEVEL 1 — Foundation (score ~400-500): 9 questions
  // Single-step, basic concept recognition
  // ============================================================

  {
    id: "math-algebra-031",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Solve for x: x + 9 = 15",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "24" },
      { label: "D", text: "-6" }
    ],
    correctAnswer: "B",
    explanation: "Subtract 9 from both sides: x + 9 - 9 = 15 - 9, so x = 6.",
    tags: ["linear-equations", "one-step"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-032",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the slope of the line y = 4x - 3?",
    choices: [
      { label: "A", text: "-3" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "-4" }
    ],
    correctAnswer: "C",
    explanation: "The equation is in slope-intercept form y = mx + b, where m is the slope. Here m = 4.",
    tags: ["slope-intercept", "slope"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-033",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Solve for y: 2y = 18",
    choices: [
      { label: "A", text: "36" },
      { label: "B", text: "16" },
      { label: "C", text: "9" },
      { label: "D", text: "20" }
    ],
    correctAnswer: "C",
    explanation: "Divide both sides by 2: 2y / 2 = 18 / 2, so y = 9.",
    tags: ["linear-equations", "one-step"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-034",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the y-intercept of the line y = -2x + 7?",
    choices: [
      { label: "A", text: "-2" },
      { label: "B", text: "2" },
      { label: "C", text: "7" },
      { label: "D", text: "-7" }
    ],
    correctAnswer: "C",
    explanation: "In slope-intercept form y = mx + b, the y-intercept is b. Here b = 7, so the y-intercept is 7 (the point (0, 7)).",
    tags: ["slope-intercept", "y-intercept"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-035",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following values of x satisfies the inequality x > 5?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "4" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "D",
    explanation: "The inequality x > 5 means x must be strictly greater than 5. Of the choices, only 8 is greater than 5.",
    tags: ["linear-inequalities", "basic"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-036",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If x - 4 = 10, what is the value of x?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "14" },
      { label: "C", text: "-14" },
      { label: "D", text: "40" }
    ],
    correctAnswer: "B",
    explanation: "Add 4 to both sides: x - 4 + 4 = 10 + 4, so x = 14.",
    tags: ["linear-equations", "one-step"],
    estimatedTime: 15
  },

  {
    id: "math-algebra-037",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level1",
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
    stem: "The table above shows several values of x and their corresponding values of y. What is the value of y when x = 4?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "11" },
      { label: "C", text: "12" },
      { label: "D", text: "13" }
    ],
    correctAnswer: "B",
    explanation: "Each time x increases by 1, y increases by 2. The pattern is y = 2x + 3. When x = 4: y = 2(4) + 3 = 11.",
    tags: ["linear-functions", "tables", "patterns"],
    estimatedTime: 30
  },

  {
    id: "math-algebra-038",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the value of |-6|?",
    choices: [
      { label: "A", text: "-6" },
      { label: "B", text: "6" },
      { label: "C", text: "0" },
      { label: "D", text: "1/6" }
    ],
    correctAnswer: "B",
    explanation: "The absolute value of a number is its distance from zero, which is always non-negative. |-6| = 6.",
    tags: ["absolute-value", "basic"],
    estimatedTime: 10
  },

  {
    id: "math-algebra-039",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level1",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If 5x = 35, what is the value of x?",
    choices: null,
    correctAnswer: "7",
    explanation: "Divide both sides by 5: 5x / 5 = 35 / 5, so x = 7.",
    tags: ["linear-equations", "one-step"],
    estimatedTime: 15
  },

  // ============================================================
  // LEVEL 2 — Developing (score ~500-580): 9 questions
  // Standard 1-2 step problems
  // ============================================================

  {
    id: "math-algebra-040",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Solve for x: 3x - 7 = 20",
    choices: [
      { label: "A", text: "7" },
      { label: "B", text: "9" },
      { label: "C", text: "4" },
      { label: "D", text: "27" }
    ],
    correctAnswer: "B",
    explanation: "Add 7 to both sides: 3x = 27. Divide both sides by 3: x = 9.",
    tags: ["linear-equations", "two-step"],
    estimatedTime: 25
  },

  {
    id: "math-algebra-041",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 4(x + 2) = 28, what is the value of x?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "7" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "A",
    explanation: "Divide both sides by 4: x + 2 = 7. Subtract 2: x = 5.",
    tags: ["linear-equations", "distributive"],
    estimatedTime: 25
  },

  {
    id: "math-algebra-042",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A line passes through the points (0, 4) and (3, 10). What is the slope of this line?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "2" },
      { label: "C", text: "6" },
      { label: "D", text: "14/3" }
    ],
    correctAnswer: "B",
    explanation: "Slope = (y2 - y1) / (x2 - x1) = (10 - 4) / (3 - 0) = 6 / 3 = 2.",
    tags: ["slope", "linear-functions"],
    estimatedTime: 25
  },

  {
    id: "math-algebra-043",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Solve for x: 2x + 5 < 17",
    choices: [
      { label: "A", text: "x < 6" },
      { label: "B", text: "x < 11" },
      { label: "C", text: "x < 12" },
      { label: "D", text: "x > 6" }
    ],
    correctAnswer: "A",
    explanation: "Subtract 5 from both sides: 2x < 12. Divide both sides by 2: x < 6.",
    tags: ["linear-inequalities", "two-step"],
    estimatedTime: 25
  },

  {
    id: "math-algebra-044",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If x + y = 10 and x = 3, what is the value of y?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "10" },
      { label: "C", text: "7" },
      { label: "D", text: "13" }
    ],
    correctAnswer: "C",
    explanation: "Substitute x = 3 into x + y = 10: 3 + y = 10, so y = 7.",
    tags: ["systems-of-equations", "substitution"],
    estimatedTime: 20
  },

  {
    id: "math-algebra-045",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A parking garage charges a flat fee of $5 plus $2 per hour. Which equation represents the total cost C, in dollars, for h hours of parking?",
    choices: [
      { label: "A", text: "C = 5h + 2" },
      { label: "B", text: "C = 2h + 5" },
      { label: "C", text: "C = 7h" },
      { label: "D", text: "C = 2h - 5" }
    ],
    correctAnswer: "B",
    explanation: "The total cost is the flat fee of $5 plus $2 per hour: C = 2h + 5.",
    tags: ["linear-equations", "modeling"],
    estimatedTime: 25
  },

  {
    id: "math-algebra-046",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution set of |x| = 9?",
    choices: [
      { label: "A", text: "x = 9 only" },
      { label: "B", text: "x = -9 only" },
      { label: "C", text: "x = 9 or x = -9" },
      { label: "D", text: "No solution" }
    ],
    correctAnswer: "C",
    explanation: "If |x| = 9, then x = 9 or x = -9, since both values are a distance of 9 from zero.",
    tags: ["absolute-value", "equations"],
    estimatedTime: 20
  },

  {
    id: "math-algebra-047",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level2",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A line has a slope of 3 and passes through the point (2, 11). What is the y-intercept of this line?",
    choices: null,
    correctAnswer: "5",
    explanation: "Using point-slope form: y - 11 = 3(x - 2). Simplify: y = 3x - 6 + 11 = 3x + 5. The y-intercept is 5.",
    tags: ["linear-functions", "point-slope"],
    estimatedTime: 35
  },

  {
    id: "math-algebra-048",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If (x/3) + 4 = 10, what is the value of x?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "18" },
      { label: "C", text: "42" },
      { label: "D", text: "6" }
    ],
    correctAnswer: "B",
    explanation: "Subtract 4 from both sides: x/3 = 6. Multiply both sides by 3: x = 18.",
    tags: ["linear-equations", "fractions"],
    estimatedTime: 25
  },

  // ============================================================
  // LEVEL 3 — Proficient (score ~580-660): 9 questions
  // Multi-step moderate problems
  // ============================================================

  {
    id: "math-algebra-049",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2x + y = 13 and x - y = 2, what is the value of x?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "11" }
    ],
    correctAnswer: "B",
    explanation: "Add the two equations: (2x + y) + (x - y) = 13 + 2, which gives 3x = 15, so x = 5.",
    tags: ["systems-of-equations", "elimination"],
    estimatedTime: 45
  },

  {
    id: "math-algebra-050",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A gym membership costs $25 per month plus a one-time enrollment fee of $50. A second gym charges $35 per month with no enrollment fee. After how many months will the total cost be the same at both gyms?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "10" }
    ],
    correctAnswer: "B",
    explanation: "Set the costs equal: 25m + 50 = 35m. Subtract 25m from both sides: 50 = 10m. Divide by 10: m = 5 months.",
    tags: ["linear-equations", "word-problem", "modeling"],
    estimatedTime: 50
  },

  {
    id: "math-algebra-051",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["x", "f(x)"],
      rows: [
        ["-1", "8"],
        ["1", "2"],
        ["3", "-4"],
        ["5", "-10"]
      ]
    },
    stem: "The table above shows selected values for the linear function f. What is f(7)?",
    choices: [
      { label: "A", text: "-14" },
      { label: "B", text: "-16" },
      { label: "C", text: "-12" },
      { label: "D", text: "-18" }
    ],
    correctAnswer: "B",
    explanation: "Find the slope using two points: (2 - 8) / (1 - (-1)) = -6 / 2 = -3. Using point (1, 2): f(x) = -3(x - 1) + 2 = -3x + 3 + 2 = -3x + 5. So f(7) = -3(7) + 5 = -21 + 5 = -16.",
    tags: ["linear-functions", "tables", "slope"],
    estimatedTime: 50
  },

  {
    id: "math-algebra-052",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A student's course grade is computed as (2t + 40)/3, where t is the score on the final exam. If the student needs a course grade of at least 80 to earn a B, what is the minimum final exam score the student needs?",
    choices: [
      { label: "A", text: "80" },
      { label: "B", text: "90" },
      { label: "C", text: "100" },
      { label: "D", text: "110" }
    ],
    correctAnswer: "C",
    explanation: "Set up the inequality: (2t + 40)/3 >= 80. Multiply both sides by 3: 2t + 40 >= 240. Subtract 40: 2t >= 200. Divide by 2: t >= 100. The minimum score is 100.",
    tags: ["linear-inequalities", "word-problem"],
    estimatedTime: 50
  },

  {
    id: "math-algebra-053",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 3(2x - 5) + 4 = 5x + 6, what is the value of x?",
    choices: [
      { label: "A", text: "17" },
      { label: "B", text: "7" },
      { label: "C", text: "3" },
      { label: "D", text: "21" }
    ],
    correctAnswer: "A",
    explanation: "Distribute: 6x - 15 + 4 = 5x + 6. Combine like terms on the left: 6x - 11 = 5x + 6. Subtract 5x from both sides: x - 11 = 6. Add 11 to both sides: x = 17.",
    tags: ["linear-equations", "multi-step", "distributive"],
    estimatedTime: 45
  },

  {
    id: "math-algebra-054",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level3",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A store sells notebooks for $3 each and pens for $1 each. Maria bought a total of 14 items and spent $30. How many notebooks did Maria buy?",
    choices: null,
    correctAnswer: "8",
    explanation: "Let n = notebooks and p = pens. Then n + p = 14 and 3n + p = 30. Subtract the first equation from the second: (3n + p) - (n + p) = 30 - 14, so 2n = 16, and n = 8.",
    tags: ["systems-of-equations", "word-problem"],
    estimatedTime: 55
  },

  {
    id: "math-algebra-055",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: "A water tank is being drained at a constant rate. At time t = 0 hours, the tank contains 200 gallons. After 4 hours, the tank contains 120 gallons.",
    tableData: null,
    stem: "Based on the information above, which function models the amount of water W, in gallons, remaining in the tank after t hours?",
    choices: [
      { label: "A", text: "W(t) = 200 - 20t" },
      { label: "B", text: "W(t) = 200 - 80t" },
      { label: "C", text: "W(t) = 200 + 20t" },
      { label: "D", text: "W(t) = 120 - 20t" }
    ],
    correctAnswer: "A",
    explanation: "The rate of draining is (200 - 120) / 4 = 80 / 4 = 20 gallons per hour. Starting at 200 gallons and decreasing by 20 gallons per hour: W(t) = 200 - 20t.",
    tags: ["linear-functions", "modeling", "rate-of-change"],
    estimatedTime: 50
  },

  {
    id: "math-algebra-056",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "How many solutions does the equation |2x - 6| = 10 have?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "Infinitely many" }
    ],
    correctAnswer: "C",
    explanation: "Since 10 > 0, the equation |2x - 6| = 10 produces two cases. Case 1: 2x - 6 = 10, so 2x = 16, and x = 8. Case 2: 2x - 6 = -10, so 2x = -4, and x = -2. There are exactly 2 solutions.",
    tags: ["absolute-value", "equations"],
    estimatedTime: 40
  },

  {
    id: "math-algebra-057",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If -3x + 6 > 15, which of the following is the solution?",
    choices: [
      { label: "A", text: "x > -3" },
      { label: "B", text: "x < -3" },
      { label: "C", text: "x > 3" },
      { label: "D", text: "x < 3" }
    ],
    correctAnswer: "B",
    explanation: "Subtract 6 from both sides: -3x > 9. Divide both sides by -3 and reverse the inequality sign: x < -3.",
    tags: ["linear-inequalities", "negative-coefficient"],
    estimatedTime: 35
  },

  // ============================================================
  // LEVEL 4 — Advanced (score ~660-730): 9 questions
  // Complex, non-obvious problems
  // ============================================================

  {
    id: "math-algebra-058",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what value of k does the system of equations below have no solution?\n\n3x + 6y = 12\nkx + 2y = 5",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "3" },
      { label: "C", text: "6" },
      { label: "D", text: "9" }
    ],
    correctAnswer: "A",
    explanation: "For no solution, the lines must be parallel (same slope, different y-intercepts). Rewrite the first equation in slope-intercept form: 6y = -3x + 12, so y = -(1/2)x + 2. The slope is -1/2. Rewrite the second equation: 2y = -kx + 5, so y = -(k/2)x + 5/2. The slope is -k/2. For parallel lines: -k/2 = -1/2, giving k = 1. When k = 1, the y-intercepts are 2 and 5/2, which are different, confirming no solution.",
    tags: ["systems-of-equations", "no-solution", "parallel-lines"],
    estimatedTime: 70
  },

  {
    id: "math-algebra-059",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: "A company's monthly profit P, in thousands of dollars, can be modeled by the function P(n) = 8n - 120, where n is the number of units sold. The company plans to increase the price per unit, which will change the profit model to P(n) = 10n - 150.",
    tableData: null,
    stem: "At what number of units sold will both profit models yield the same profit?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "15" },
      { label: "C", text: "18" },
      { label: "D", text: "30" }
    ],
    correctAnswer: "B",
    explanation: "Set the two models equal: 8n - 120 = 10n - 150. Subtract 8n from both sides: -120 = 2n - 150. Add 150 to both sides: 30 = 2n. Divide by 2: n = 15.",
    tags: ["linear-functions", "modeling", "intersection"],
    estimatedTime: 55
  },

  {
    id: "math-algebra-060",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If (2x + 3)/5 - (x - 4)/3 = 4, what is the value of x?",
    choices: [
      { label: "A", text: "29" },
      { label: "B", text: "31" },
      { label: "C", text: "39" },
      { label: "D", text: "41" }
    ],
    correctAnswer: "B",
    explanation: "Multiply every term by 15 (the LCD of 5 and 3): 3(2x + 3) - 5(x - 4) = 60. Distribute: 6x + 9 - 5x + 20 = 60. Combine like terms: x + 29 = 60. Subtract 29: x = 31. Verify: (2(31) + 3)/5 - (31 - 4)/3 = 65/5 - 27/3 = 13 - 9 = 4.",
    tags: ["linear-equations", "fractions", "LCD"],
    estimatedTime: 65
  },

  {
    id: "math-algebra-061",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A shipping company charges a base fee of $15 plus $0.50 per pound for packages. A customer has a budget of at most $40 and needs to ship at least 20 pounds. If the customer also has to pay a $3 insurance fee per shipment, which inequality represents all possible weights w (in pounds) the customer can ship?",
    choices: [
      { label: "A", text: "20 <= w <= 44" },
      { label: "B", text: "20 <= w <= 50" },
      { label: "C", text: "20 <= w <= 47" },
      { label: "D", text: "w >= 20" }
    ],
    correctAnswer: "A",
    explanation: "Total cost = base fee + per-pound charge + insurance = 15 + 0.50w + 3 = 18 + 0.50w. The budget constraint gives: 18 + 0.50w <= 40, so 0.50w <= 22, meaning w <= 44. Combined with the minimum weight requirement w >= 20, we get 20 <= w <= 44.",
    tags: ["linear-inequalities", "compound-inequality", "word-problem"],
    estimatedTime: 65
  },

  {
    id: "math-algebra-062",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level4",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "In the system of equations below, what is the value of 3x + 2y?\n\n5x + 3y = 29\nx + y = 7",
    choices: null,
    correctAnswer: "18",
    explanation: "From the second equation: x = 7 - y. Substitute into the first: 5(7 - y) + 3y = 29, so 35 - 5y + 3y = 29, which gives 35 - 2y = 29, so -2y = -6, and y = 3. Then x = 7 - 3 = 4. Therefore 3x + 2y = 3(4) + 2(3) = 12 + 6 = 18.",
    tags: ["systems-of-equations", "substitution", "expression-evaluation"],
    estimatedTime: 60
  },

  {
    id: "math-algebra-063",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Hours worked (h)", "Pay in dollars (P)"],
      rows: [
        ["0", "50"],
        ["5", "100"],
        ["10", "150"],
        ["20", "300"]
      ]
    },
    stem: "The table above shows the pay P a freelancer receives based on the number of hours h worked on a project. The freelancer charges a flat project fee plus an hourly rate. If the freelancer works 35 hours, but any hours beyond 30 are paid at 1.5 times the normal hourly rate, what is the total pay?",
    choices: [
      { label: "A", text: "$387.50" },
      { label: "B", text: "$400.00" },
      { label: "C", text: "$412.50" },
      { label: "D", text: "$425.00" }
    ],
    correctAnswer: "D",
    explanation: "From the table, when h = 0 the pay is $50, so the flat fee is $50. The hourly rate is (100 - 50) / (5 - 0) = $10/hour. For 30 regular hours: 50 + 10(30) = $350. For the remaining 5 hours at 1.5 times the rate: 5 * 10 * 1.5 = $75. Total pay: 350 + 75 = $425.",
    tags: ["linear-functions", "tables", "piecewise", "word-problem"],
    estimatedTime: 70
  },

  {
    id: "math-algebra-064",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is equivalent to the inequality |x - 3| <= 7?",
    choices: [
      { label: "A", text: "x <= 10" },
      { label: "B", text: "-4 <= x <= 10" },
      { label: "C", text: "x <= -4 or x >= 10" },
      { label: "D", text: "-10 <= x <= 4" }
    ],
    correctAnswer: "B",
    explanation: "The inequality |x - 3| <= 7 means -7 <= x - 3 <= 7. Add 3 to all three parts: -7 + 3 <= x <= 7 + 3, which gives -4 <= x <= 10.",
    tags: ["absolute-value", "inequalities", "compound-inequality"],
    estimatedTime: 50
  },

  {
    id: "math-algebra-065",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If ax + b = cx + d, where a is not equal to c, what is x in terms of a, b, c, and d?",
    choices: [
      { label: "A", text: "(d - b) / (a - c)" },
      { label: "B", text: "(b - d) / (a - c)" },
      { label: "C", text: "(a - c) / (d - b)" },
      { label: "D", text: "(d + b) / (a + c)" }
    ],
    correctAnswer: "A",
    explanation: "Subtract cx from both sides: (a - c)x + b = d. Subtract b from both sides: (a - c)x = d - b. Divide by (a - c): x = (d - b) / (a - c).",
    tags: ["linear-equations", "literal-equations", "abstract"],
    estimatedTime: 55
  },

  {
    id: "math-algebra-066",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what value of a does the system below have infinitely many solutions?\n\n2x - 4y = 10\n-3x + 6y = a",
    choices: [
      { label: "A", text: "-15" },
      { label: "B", text: "-10" },
      { label: "C", text: "10" },
      { label: "D", text: "15" }
    ],
    correctAnswer: "A",
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Multiply the first equation by -3/2: (-3/2)(2x) + (-3/2)(-4y) = (-3/2)(10), which gives -3x + 6y = -15. For the second equation to be identical, a = -15.",
    tags: ["systems-of-equations", "infinite-solutions"],
    estimatedTime: 60
  },

  // ============================================================
  // LEVEL 5 — Expert (score ~730-800): 9 questions
  // Hardest SAT problems, require insight and combining concepts
  // ============================================================

  {
    id: "math-algebra-067",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The system of equations below has exactly one solution (x, y).\n\n(1/2)x + (1/3)y = 7\n(1/3)x + (1/2)y = 8\n\nWhat is the value of x + y?",
    choices: [
      { label: "A", text: "14" },
      { label: "B", text: "15" },
      { label: "C", text: "16" },
      { label: "D", text: "18" }
    ],
    correctAnswer: "D",
    explanation: "Multiply the first equation by 6: 3x + 2y = 42. Multiply the second equation by 6: 2x + 3y = 48. Add these two equations: 5x + 5y = 90, so x + y = 18. (To verify: subtract the first from the second to get -x + y = 6, so y = x + 6. Substituting into 3x + 2(x + 6) = 42 gives 5x + 12 = 42, so x = 6 and y = 12. Check: (1/2)(6) + (1/3)(12) = 3 + 4 = 7 and (1/3)(6) + (1/2)(12) = 2 + 6 = 8. Both check out, and x + y = 18.)",
    tags: ["systems-of-equations", "fractions", "clever-addition"],
    estimatedTime: 90
  },

  {
    id: "math-algebra-068",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: "A researcher models the temperature T, in degrees Celsius, inside a greenhouse using the function T(h) = -2h + 40 for 0 <= h <= 12, where h represents the number of hours after noon. A second function models the outside temperature as T_out(h) = -3h + 38 for the same time period.",
    tableData: null,
    stem: "For how many hours during the given time period is the greenhouse temperature at least 6 degrees warmer than the outside temperature?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "6" },
      { label: "C", text: "8" },
      { label: "D", text: "10" }
    ],
    correctAnswer: "C",
    explanation: "We need T(h) - T_out(h) >= 6. Compute the difference: (-2h + 40) - (-3h + 38) = -2h + 40 + 3h - 38 = h + 2. Set up the inequality: h + 2 >= 6, so h >= 4. Combined with the domain constraint 0 <= h <= 12, the solution is 4 <= h <= 12. This represents 12 - 4 = 8 hours.",
    tags: ["linear-functions", "inequalities", "modeling", "multi-concept"],
    estimatedTime: 80
  },

  {
    id: "math-algebra-069",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level5",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If 3|2x - 4| + 5 = 23, what is the positive difference between the two solutions for x?",
    choices: null,
    correctAnswer: "6",
    explanation: "Isolate the absolute value: 3|2x - 4| = 18, so |2x - 4| = 6. Case 1: 2x - 4 = 6, giving 2x = 10 and x = 5. Case 2: 2x - 4 = -6, giving 2x = -2 and x = -1. The positive difference between the two solutions is 5 - (-1) = 6.",
    tags: ["absolute-value", "equations", "multi-step"],
    estimatedTime: 70
  },

  {
    id: "math-algebra-070",
    section: "math",
    domain: "algebra",
    subdomain: "systems-of-equations",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2x + 3y = 12 and 4x + 6y = k, for how many values of k does the system have exactly one solution?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "Notice that 4x + 6y = 2(2x + 3y), so the left side of the second equation is exactly twice the left side of the first. If k = 24, then 4x + 6y = 24 is equivalent to 2x + 3y = 12, giving infinitely many solutions. If k is any other value, the system is inconsistent and has no solution. In neither case does the system have exactly one solution, so the answer is 0.",
    tags: ["systems-of-equations", "dependent-inconsistent", "conceptual"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-071",
    section: "math",
    domain: "algebra",
    subdomain: "linear-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Week", "Amount saved ($)"],
      rows: [
        ["1", "85"],
        ["3", "145"],
        ["6", "235"],
        ["10", "355"]
      ]
    },
    stem: "The table shows the cumulative amount a student has saved over several weeks. If the student continues saving at this constant rate, during which week will the student's total savings first exceed $600?",
    choices: [
      { label: "A", text: "Week 18" },
      { label: "B", text: "Week 19" },
      { label: "C", text: "Week 20" },
      { label: "D", text: "Week 21" }
    ],
    correctAnswer: "B",
    explanation: "Find the weekly savings rate: from week 1 to week 3, the increase is 145 - 85 = $60 over 2 weeks, so $30/week. Verify with other intervals: (235 - 145)/(6 - 3) = 90/3 = 30, and (355 - 235)/(10 - 6) = 120/4 = 30. The linear model is S(w) = 30w + b. Using (1, 85): 85 = 30(1) + b, so b = 55. Thus S(w) = 30w + 55. Solve 30w + 55 > 600: 30w > 545, w > 18.17. The first whole week where savings exceed $600 is week 19.",
    tags: ["linear-functions", "tables", "modeling", "word-problem"],
    estimatedTime: 80
  },

  {
    id: "math-algebra-072",
    section: "math",
    domain: "algebra",
    subdomain: "linear-inequalities",
    difficulty: "level5",
    type: "multiple-choice",
    passage: "A factory produces two products, A and B. Each unit of A requires 2 hours of labor and 3 pounds of material. Each unit of B requires 4 hours of labor and 1 pound of material. The factory has at most 80 hours of labor and at most 45 pounds of material available per day.",
    tableData: null,
    stem: "If a represents the number of units of product A and b represents the number of units of product B produced per day, which system of inequalities represents these constraints?",
    choices: [
      { label: "A", text: "2a + 4b <= 80; 3a + b <= 45; a >= 0; b >= 0" },
      { label: "B", text: "3a + b <= 80; 2a + 4b <= 45; a >= 0; b >= 0" },
      { label: "C", text: "2a + 4b <= 45; 3a + b <= 80; a >= 0; b >= 0" },
      { label: "D", text: "2a + 3b <= 80; 4a + b <= 45; a >= 0; b >= 0" }
    ],
    correctAnswer: "A",
    explanation: "Labor constraint: each unit of A uses 2 hours and each unit of B uses 4 hours, with at most 80 hours available, so 2a + 4b <= 80. Material constraint: each unit of A uses 3 pounds and each unit of B uses 1 pound, with at most 45 pounds available, so 3a + b <= 45. Both quantities must be non-negative: a >= 0 and b >= 0.",
    tags: ["linear-inequalities", "systems", "modeling", "word-problem"],
    estimatedTime: 75
  },

  {
    id: "math-algebra-073",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Let f(x) = ax + b and g(x) = cx + d, where a, b, c, and d are constants. If f(g(x)) = 6x + 11 and g(f(x)) = 6x + 13, which of the following could be the value of b + d?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "7" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "C",
    explanation: "Compute f(g(x)) = a(cx + d) + b = acx + (ad + b) = 6x + 11, so ac = 6 and ad + b = 11. Compute g(f(x)) = c(ax + b) + d = acx + (cb + d) = 6x + 13, so ac = 6 and cb + d = 13. Try a = 2, c = 3 (since ac = 6). Then ad + b = 2d + b = 11 and cb + d = 3b + d = 13. From the first equation: b = 11 - 2d. Substitute: 3(11 - 2d) + d = 13, so 33 - 6d + d = 13, giving -5d = -20, and d = 4. Then b = 11 - 8 = 3. So b + d = 3 + 4 = 7. Verify: f(x) = 2x + 3, g(x) = 3x + 4. f(g(x)) = 2(3x + 4) + 3 = 6x + 11. g(f(x)) = 3(2x + 3) + 4 = 6x + 13. Both confirmed.",
    tags: ["linear-functions", "composition", "system-solving"],
    estimatedTime: 90
  },

  {
    id: "math-algebra-074",
    section: "math",
    domain: "algebra",
    subdomain: "absolute-value",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "How many integer values of x satisfy the equation |x - 2| + |x - 8| = 6?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "Infinitely many" }
    ],
    correctAnswer: "C",
    explanation: "The expression |x - 2| + |x - 8| represents the sum of distances from x to 2 and from x to 8 on the number line. The distance between 2 and 8 is 6. For any x between 2 and 8 (inclusive), the sum of distances equals exactly 6. For x < 2 or x > 8, the sum exceeds 6. So the equation holds for all x with 2 <= x <= 8. The integer values in this range are {2, 3, 4, 5, 6, 7, 8}, which gives 7 integer solutions.",
    tags: ["absolute-value", "piecewise", "critical-thinking"],
    estimatedTime: 90
  },

  {
    id: "math-algebra-075",
    section: "math",
    domain: "algebra",
    subdomain: "linear-equations",
    difficulty: "level5",
    type: "student-produced",
    passage: "A chemist has two solutions. Solution X is 20% acid and Solution Y is 50% acid. She mixes them to create 300 mL of a solution that is 30% acid. After creating this mixture, she decides she needs the concentration to be 35% instead. She can only add more of Solution Y to the existing 300 mL mixture.",
    tableData: null,
    stem: "How many additional milliliters of Solution Y must she add to the 300 mL mixture to achieve a 35% acid concentration?",
    choices: null,
    correctAnswer: "100",
    explanation: "First, find the original mixture composition. Let x = mL of Solution X and y = mL of Solution Y. Then x + y = 300 and 0.20x + 0.50y = 0.30(300) = 90. From the first equation: x = 300 - y. Substituting: 0.20(300 - y) + 0.50y = 90, so 60 - 0.20y + 0.50y = 90, giving 0.30y = 30 and y = 100. The mixture contains 200 mL of X and 100 mL of Y, with 90 mL of acid total. Now she adds z mL of Solution Y (50% acid). The new total acid is 90 + 0.50z in a total volume of 300 + z. Setting the concentration to 35%: (90 + 0.50z)/(300 + z) = 0.35. Cross-multiply: 90 + 0.50z = 105 + 0.35z. So 0.15z = 15, giving z = 100. Verify: (90 + 50)/(300 + 100) = 140/400 = 0.35 = 35%.",
    tags: ["linear-equations", "mixture-problem", "multi-step", "word-problem"],
    estimatedTime: 120
  }
];
