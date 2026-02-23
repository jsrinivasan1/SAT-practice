// SAT Math - Advanced Math Questions
// Covers: quadratic-equations, polynomial-functions, exponential-functions,
//         radical-equations, rational-expressions, nonlinear-systems
// 30 questions: 10 easy, 10 medium, 10 hard
// Includes 4 student-produced response questions

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-advanced'] = [

  // ===== EASY (001-010) =====

  {
    id: "math-advanced-001",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What are the solutions to the equation x^2 - 5x + 6 = 0?",
    choices: [
      { label: "A", text: "x = 1 and x = 6" },
      { label: "B", text: "x = 2 and x = 3" },
      { label: "C", text: "x = -2 and x = -3" },
      { label: "D", text: "x = -1 and x = -6" }
    ],
    correctAnswer: "B",
    explanation: "Factor the quadratic: x^2 - 5x + 6 = (x - 2)(x - 3) = 0. Setting each factor equal to zero gives x - 2 = 0 or x - 3 = 0, so x = 2 or x = 3.",
    tags: ["quadratics", "factoring"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-002",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = 3 * 2^x, what is the value of f(4)?",
    choices: [
      { label: "A", text: "24" },
      { label: "B", text: "48" },
      { label: "C", text: "64" },
      { label: "D", text: "96" }
    ],
    correctAnswer: "B",
    explanation: "Substitute x = 4 into the function: f(4) = 3 * 2^4 = 3 * 16 = 48.",
    tags: ["exponential", "function-evaluation"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-003",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is equivalent to (x + 3)(x^2 - 2x + 1)?",
    choices: [
      { label: "A", text: "x^3 + x^2 - 5x + 3" },
      { label: "B", text: "x^3 - 2x^2 + x + 3" },
      { label: "C", text: "x^3 + x^2 + 5x + 3" },
      { label: "D", text: "x^3 + x^2 - 5x - 3" }
    ],
    correctAnswer: "A",
    explanation: "Distribute (x + 3) across (x^2 - 2x + 1): x(x^2 - 2x + 1) + 3(x^2 - 2x + 1) = x^3 - 2x^2 + x + 3x^2 - 6x + 3 = x^3 + x^2 - 5x + 3.",
    tags: ["polynomials", "expanding"],
    estimatedTime: 45
  },

  {
    id: "math-advanced-004",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The equation x^2 + 8x + 16 = 0 has how many distinct real solutions?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "B",
    explanation: "Factor the equation: x^2 + 8x + 16 = (x + 4)^2 = 0. This gives x = -4 as a repeated root. Alternatively, the discriminant is b^2 - 4ac = 64 - 64 = 0, which means there is exactly 1 distinct real solution.",
    tags: ["quadratics", "discriminant"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-005",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution to the equation sqrt(x + 9) = 5?",
    choices: [
      { label: "A", text: "x = 4" },
      { label: "B", text: "x = 14" },
      { label: "C", text: "x = 16" },
      { label: "D", text: "x = 34" }
    ],
    correctAnswer: "C",
    explanation: "Square both sides: (sqrt(x + 9))^2 = 5^2, so x + 9 = 25. Subtract 9 from both sides: x = 16. Check: sqrt(16 + 9) = sqrt(25) = 5. The solution is valid.",
    tags: ["radicals", "solving-equations"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-006",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which expression is equivalent to (x^2 - 9) / (x + 3) for x != -3?",
    choices: [
      { label: "A", text: "x - 3" },
      { label: "B", text: "x + 3" },
      { label: "C", text: "x^2 - 3" },
      { label: "D", text: "x - 9" }
    ],
    correctAnswer: "A",
    explanation: "Factor the numerator as a difference of squares: x^2 - 9 = (x + 3)(x - 3). Then (x + 3)(x - 3) / (x + 3) = x - 3, provided x != -3.",
    tags: ["rational-expressions", "factoring"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-007",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A population of bacteria doubles every 3 hours. If there are initially 500 bacteria, which function models the population P after t hours?",
    choices: [
      { label: "A", text: "P(t) = 500(2)^(t/3)" },
      { label: "B", text: "P(t) = 500(2)^(3t)" },
      { label: "C", text: "P(t) = 500(3)^(t/2)" },
      { label: "D", text: "P(t) = 1000(2)^t" }
    ],
    correctAnswer: "A",
    explanation: "The general exponential growth model is P(t) = P_0 * b^(t/d), where P_0 is the initial amount, b is the growth factor, and d is the doubling time. Here P_0 = 500, b = 2, and d = 3, so P(t) = 500(2)^(t/3).",
    tags: ["exponential", "modeling"],
    estimatedTime: 45
  },

  {
    id: "math-advanced-008",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If p(x) = x^3 - 4x, what is p(-2)?",
    choices: [
      { label: "A", text: "-16" },
      { label: "B", text: "-8" },
      { label: "C", text: "0" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "C",
    explanation: "Substitute x = -2: p(-2) = (-2)^3 - 4(-2) = -8 + 8 = 0.",
    tags: ["polynomials", "function-evaluation"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-009",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the vertex of the parabola defined by y = (x - 3)^2 + 7?",
    choices: [
      { label: "A", text: "(3, 7)" },
      { label: "B", text: "(-3, 7)" },
      { label: "C", text: "(3, -7)" },
      { label: "D", text: "(-3, -7)" }
    ],
    correctAnswer: "A",
    explanation: "The equation is in vertex form y = a(x - h)^2 + k, where the vertex is (h, k). Here h = 3 and k = 7, so the vertex is (3, 7).",
    tags: ["quadratics", "vertex-form"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-010",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the value of x that makes the expression (x + 5) / (x - 2) undefined?",
    choices: [
      { label: "A", text: "-5" },
      { label: "B", text: "-2" },
      { label: "C", text: "2" },
      { label: "D", text: "5" }
    ],
    correctAnswer: "C",
    explanation: "A rational expression is undefined when its denominator equals zero. Setting x - 2 = 0 gives x = 2. At x = 2 the denominator is zero, so the expression is undefined.",
    tags: ["rational-expressions", "domain"],
    estimatedTime: 30
  },

  // ===== MEDIUM (011-020) =====

  {
    id: "math-advanced-011",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2x^2 - 7x - 15 = 0, what is the positive solution for x?",
    choices: [
      { label: "A", text: "3/2" },
      { label: "B", text: "5" },
      { label: "C", text: "3" },
      { label: "D", text: "5/2" }
    ],
    correctAnswer: "B",
    explanation: "Factor the quadratic: 2x^2 - 7x - 15 = (2x + 3)(x - 5) = 0. Setting each factor to zero: 2x + 3 = 0 gives x = -3/2, and x - 5 = 0 gives x = 5. The positive solution is x = 5.",
    tags: ["quadratics", "factoring"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-012",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The system of equations y = x^2 and y = 4x - 4 has how many solutions?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "3" }
    ],
    correctAnswer: "B",
    explanation: "Substitute y = x^2 into y = 4x - 4: x^2 = 4x - 4, so x^2 - 4x + 4 = 0, which factors as (x - 2)^2 = 0. This gives x = 2 as a repeated root, so there is exactly 1 solution: (2, 4).",
    tags: ["nonlinear-systems", "quadratics"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-013",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The value of a certain investment account is modeled by V(t) = 2000(1.06)^t, where t is the number of years after the initial deposit. By what percent does the account value increase each year?",
    choices: [
      { label: "A", text: "0.6%" },
      { label: "B", text: "1.06%" },
      { label: "C", text: "6%" },
      { label: "D", text: "60%" }
    ],
    correctAnswer: "C",
    explanation: "In the model V(t) = 2000(1.06)^t, the base 1.06 represents a growth factor of 1 + r, where r is the rate of increase. Since 1.06 = 1 + 0.06, the rate r = 0.06 = 6%.",
    tags: ["exponential", "growth-rate"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-014",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If x - 3 is a factor of x^3 - 7x^2 + 14x - 6, what is the remainder when x^3 - 7x^2 + 14x - 6 is divided by x - 3?",
    choices: [
      { label: "A", text: "-6" },
      { label: "B", text: "0" },
      { label: "C", text: "3" },
      { label: "D", text: "6" }
    ],
    correctAnswer: "B",
    explanation: "By the Factor Theorem, if (x - 3) is a factor of a polynomial, then the remainder when dividing by (x - 3) is 0. We can verify: p(3) = 27 - 63 + 42 - 6 = 0.",
    tags: ["polynomials", "factor-theorem"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-015",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "What is the solution to the equation sqrt(3x + 1) = x - 1?",
    choices: null,
    correctAnswer: "5",
    explanation: "Square both sides: 3x + 1 = (x - 1)^2 = x^2 - 2x + 1. Rearrange: x^2 - 2x + 1 - 3x - 1 = 0, so x^2 - 5x = 0, which factors as x(x - 5) = 0. This gives x = 0 or x = 5. Check x = 0: sqrt(1) = 1, but 0 - 1 = -1, and 1 != -1, so x = 0 is extraneous. Check x = 5: sqrt(16) = 4, and 5 - 1 = 4, which is true. The only valid solution is x = 5.",
    tags: ["radicals", "extraneous-solutions"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-016",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which expression is equivalent to 1/(x - 1) + 1/(x + 1)?",
    choices: [
      { label: "A", text: "2/(x^2 - 1)" },
      { label: "B", text: "2x/(x^2 - 1)" },
      { label: "C", text: "2/(2x)" },
      { label: "D", text: "(x^2 + 1)/(x^2 - 1)" }
    ],
    correctAnswer: "B",
    explanation: "Find a common denominator of (x - 1)(x + 1) = x^2 - 1. Then 1/(x - 1) + 1/(x + 1) = (x + 1)/((x - 1)(x + 1)) + (x - 1)/((x - 1)(x + 1)) = (x + 1 + x - 1)/(x^2 - 1) = 2x/(x^2 - 1).",
    tags: ["rational-expressions", "adding-fractions"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-017",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A ball is launched upward from the ground with an initial velocity of 64 feet per second. Its height h, in feet, after t seconds is given by h(t) = -16t^2 + 64t. At what time does the ball reach its maximum height?",
    choices: [
      { label: "A", text: "1 second" },
      { label: "B", text: "2 seconds" },
      { label: "C", text: "3 seconds" },
      { label: "D", text: "4 seconds" }
    ],
    correctAnswer: "B",
    explanation: "The maximum height of a quadratic h(t) = at^2 + bt + c (with a < 0) occurs at t = -b/(2a). Here a = -16 and b = 64, so t = -64/(2 * -16) = -64/(-32) = 2 seconds.",
    tags: ["quadratics", "vertex", "modeling"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-018",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is equivalent to (5^(2x))(5^3)?",
    choices: [
      { label: "A", text: "25^(2x+3)" },
      { label: "B", text: "5^(6x)" },
      { label: "C", text: "5^(2x+3)" },
      { label: "D", text: "5^(5x)" }
    ],
    correctAnswer: "C",
    explanation: "Using the exponent rule a^m * a^n = a^(m+n), we get (5^(2x))(5^3) = 5^(2x+3). Choice A is incorrect because 25^(2x+3) = (5^2)^(2x+3) = 5^(4x+6), which is too large. Choice B is incorrect because 5^(6x) would require the exponents to multiply rather than add. Choice D is incorrect because 2x + 3 does not equal 5x.",
    tags: ["exponential", "exponent-rules"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-019",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If p(x) = x^3 - 6x^2 + 11x - 6, and p(1) = 0, what is the sum of the other two zeros of p?",
    choices: null,
    correctAnswer: "5",
    explanation: "Since p(1) = 0, (x - 1) is a factor. Perform polynomial division: x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3). The three zeros are 1, 2, and 3. The other two zeros (besides 1) are 2 and 3, and their sum is 2 + 3 = 5. Alternatively, by Vieta's formulas, the sum of all three roots equals 6, so the sum of the other two is 6 - 1 = 5.",
    tags: ["polynomials", "zeros", "vietas-formulas"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-020",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If y = x^2 - 4 and y = 2x - 1, what are the x-coordinates of the points of intersection?",
    choices: [
      { label: "A", text: "x = -1 and x = 3" },
      { label: "B", text: "x = 1 and x = -3" },
      { label: "C", text: "x = 1 and x = 3" },
      { label: "D", text: "x = -1 and x = -3" }
    ],
    correctAnswer: "A",
    explanation: "Set the equations equal: x^2 - 4 = 2x - 1, so x^2 - 2x - 3 = 0. Factor: (x - 3)(x + 1) = 0. Therefore x = 3 or x = -1.",
    tags: ["nonlinear-systems", "quadratics"],
    estimatedTime: 75
  },

  // ===== HARD (021-030) =====

  {
    id: "math-advanced-021",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what value of k does the equation 3x^2 + kx + 12 = 0 have exactly one real solution?",
    choices: [
      { label: "A", text: "6 only" },
      { label: "B", text: "-12 only" },
      { label: "C", text: "12 or -12" },
      { label: "D", text: "6 or -6" }
    ],
    correctAnswer: "C",
    explanation: "A quadratic has exactly one real solution when the discriminant equals zero. The discriminant is b^2 - 4ac = k^2 - 4(3)(12) = k^2 - 144. Setting k^2 - 144 = 0 gives k^2 = 144, so k = 12 or k = -12.",
    tags: ["quadratics", "discriminant"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-022",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The polynomial function f is defined by f(x) = x^4 - 5x^2 + 4. How many distinct real zeros does f have?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "D",
    explanation: "Let u = x^2. Then f(x) = u^2 - 5u + 4 = (u - 1)(u - 4). Substituting back: (x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2). The four distinct real zeros are x = -2, -1, 1, and 2.",
    tags: ["polynomials", "substitution", "factoring"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-023",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A radioactive substance has a half-life of 8 years. If a sample initially contains 200 grams, after how many years will approximately 25 grams remain?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "24" },
      { label: "C", text: "32" },
      { label: "D", text: "48" }
    ],
    correctAnswer: "B",
    explanation: "The decay model is A(t) = 200(1/2)^(t/8). Set 25 = 200(1/2)^(t/8). Divide both sides by 200: 25/200 = 1/8 = (1/2)^(t/8). Since 1/8 = (1/2)^3, we have (1/2)^3 = (1/2)^(t/8), so t/8 = 3 and t = 24 years.",
    tags: ["exponential", "half-life", "decay"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-024",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What are the solutions to the equation (x + 3)/(x - 1) = (2x + 1)/(x + 2)?",
    choices: [
      { label: "A", text: "x = -1 and x = 7" },
      { label: "B", text: "x = 1 and x = -7" },
      { label: "C", text: "x = -2 and x = 7" },
      { label: "D", text: "x = 1 and x = 7" }
    ],
    correctAnswer: "A",
    explanation: "Cross-multiply: (x + 3)(x + 2) = (2x + 1)(x - 1). Expand the left side: x^2 + 5x + 6. Expand the right side: 2x^2 - x - 1. Set equal: x^2 + 5x + 6 = 2x^2 - x - 1. Rearrange: 0 = x^2 - 6x - 7. Factor: (x - 7)(x + 1) = 0, so x = 7 or x = -1. Check that neither value makes any denominator zero: for x = 7, denominators are 6 and 9 (valid); for x = -1, denominators are -2 and 1 (valid). Both solutions are valid.",
    tags: ["rational-expressions", "cross-multiplication"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-025",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution set of the equation sqrt(2x + 3) - sqrt(x + 1) = 1?",
    choices: [
      { label: "A", text: "{-1}" },
      { label: "B", text: "{3}" },
      { label: "C", text: "{-1, 3}" },
      { label: "D", text: "{1}" }
    ],
    correctAnswer: "C",
    explanation: "Isolate one radical: sqrt(2x + 3) = 1 + sqrt(x + 1). Square both sides: 2x + 3 = 1 + 2*sqrt(x + 1) + (x + 1). Simplify: 2x + 3 = x + 2 + 2*sqrt(x + 1), so x + 1 = 2*sqrt(x + 1). Square both sides again: (x + 1)^2 = 4(x + 1). This gives (x + 1)^2 - 4(x + 1) = 0, so (x + 1)(x + 1 - 4) = (x + 1)(x - 3) = 0. Therefore x = -1 or x = 3. Check x = -1: sqrt(1) - sqrt(0) = 1 - 0 = 1, which is true. Check x = 3: sqrt(9) - sqrt(4) = 3 - 2 = 1, which is true. Both solutions are valid, so the solution set is {-1, 3}.",
    tags: ["radicals", "solving-equations"],
    estimatedTime: 105
  },

  {
    id: "math-advanced-026",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If x^2 + y^2 = 25 and y = x + 1, what is the sum of all possible values of x?",
    choices: null,
    correctAnswer: "-1",
    explanation: "Substitute y = x + 1 into x^2 + y^2 = 25: x^2 + (x + 1)^2 = 25. Expand: x^2 + x^2 + 2x + 1 = 25, so 2x^2 + 2x - 24 = 0. Divide by 2: x^2 + x - 12 = 0. Factor: (x + 4)(x - 3) = 0, so x = -4 or x = 3. The sum of all possible values of x is -4 + 3 = -1.",
    tags: ["nonlinear-systems", "circle-line"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-027",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 9^x = 27, what is the value of 3^(x + 2)?",
    choices: [
      { label: "A", text: "27" },
      { label: "B", text: "81" },
      { label: "C", text: "27*sqrt(3)" },
      { label: "D", text: "9*sqrt(27)" }
    ],
    correctAnswer: "C",
    explanation: "Rewrite 9^x = 27 as (3^2)^x = 3^3, so 3^(2x) = 3^3, which gives 2x = 3 and x = 3/2. Then 3^(x + 2) = 3^(3/2 + 2) = 3^(7/2). Rewrite as 3^(7/2) = 3^3 * 3^(1/2) = 27 * sqrt(3).",
    tags: ["exponential", "exponent-rules"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-028",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The function g is defined by g(x) = (x^2 - x - 6)(x^2 + 2x - 8). Which of the following lists all the zeros of g?",
    choices: [
      { label: "A", text: "-3, -2, 2, 4" },
      { label: "B", text: "-4, -3, 2, 3" },
      { label: "C", text: "-4, -2, 2, 3" },
      { label: "D", text: "-4, 2, 3, 6" }
    ],
    correctAnswer: "C",
    explanation: "Factor each quadratic separately. For x^2 - x - 6: we need two numbers that multiply to -6 and add to -1, which are -3 and 2. So x^2 - x - 6 = (x - 3)(x + 2). For x^2 + 2x - 8: we need two numbers that multiply to -8 and add to 2, which are 4 and -2. So x^2 + 2x - 8 = (x + 4)(x - 2). Therefore g(x) = (x - 3)(x + 2)(x + 4)(x - 2), and the zeros are x = -4, -2, 2, and 3.",
    tags: ["polynomials", "zeros", "factoring"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-029",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If (x^2 + 3x - 10) / (x^2 - 4) can be simplified to (x + 5) / (x + 2) for all x where both expressions are defined, what value of x makes the original expression undefined but does NOT make the simplified expression undefined?",
    choices: null,
    correctAnswer: "2",
    explanation: "Factor the original expression. The numerator: x^2 + 3x - 10 = (x + 5)(x - 2). The denominator: x^2 - 4 = (x + 2)(x - 2). So the original expression is (x + 5)(x - 2) / ((x + 2)(x - 2)). The original expression is undefined when x + 2 = 0 or x - 2 = 0, that is, at x = -2 and x = 2. The simplified expression (x + 5)/(x + 2) is undefined only when x + 2 = 0, that is, at x = -2. Therefore x = 2 makes the original undefined but not the simplified form.",
    tags: ["rational-expressions", "domain", "factoring"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-030",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The system of equations x^2 + y^2 = 20 and xy = 8 has solutions (x, y) with x > 0 and y > 0. What is the value of x + y for the solution where x > y?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "6" },
      { label: "C", text: "2*sqrt(5)" },
      { label: "D", text: "4*sqrt(2)" }
    ],
    correctAnswer: "B",
    explanation: "Use the algebraic identity (x + y)^2 = x^2 + 2xy + y^2. Substituting the given values: (x + y)^2 = 20 + 2(8) = 36. Since x > 0 and y > 0, we have x + y > 0, so x + y = 6. To verify, note that (x - y)^2 = x^2 - 2xy + y^2 = 20 - 16 = 4, so x - y = 2 (since x > y). Solving: x = (6 + 2)/2 = 4 and y = (6 - 2)/2 = 2. Check: 16 + 4 = 20 and 4 * 2 = 8. Both equations are satisfied.",
    tags: ["nonlinear-systems", "algebraic-identities"],
    estimatedTime: 105
  }

];
