// SAT Math - Advanced Math Questions (Expanded Set)
// Covers: quadratic-equations, polynomial-functions, exponential-functions,
//         radical-equations, rational-expressions, nonlinear-systems
// 45 questions: 9 per level (level1 through level5)
// Includes 5 student-produced response questions
// IDs: math-advanced-031 to math-advanced-075

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-advanced-expanded'] = [

  // =============================================================
  // LEVEL 1 — Foundation (~400-500) — 9 Questions (031-039)
  // Basic concept recognition, single-step problems
  // =============================================================

  {
    id: "math-advanced-031",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is a quadratic equation?",
    choices: [
      { label: "A", text: "3x + 7 = 0" },
      { label: "B", text: "x^2 + 5x - 2 = 0" },
      { label: "C", text: "x^3 - x = 0" },
      { label: "D", text: "2/x + 1 = 0" }
    ],
    correctAnswer: "B",
    explanation: "A quadratic equation is a polynomial equation of degree 2, meaning the highest power of the variable is 2. Choice A is linear (degree 1). Choice B has x^2 as its highest-degree term, making it quadratic. Choice C is cubic (degree 3). Choice D is a rational equation, not a polynomial. Therefore, the answer is B.",
    tags: ["quadratics", "identification"],
    estimatedTime: 20
  },

  {
    id: "math-advanced-032",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the value of 3^4?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "27" },
      { label: "C", text: "64" },
      { label: "D", text: "81" }
    ],
    correctAnswer: "D",
    explanation: "3^4 means 3 multiplied by itself 4 times: 3 * 3 * 3 * 3. Step by step: 3 * 3 = 9, then 9 * 3 = 27, then 27 * 3 = 81. Therefore 3^4 = 81.",
    tags: ["exponential", "evaluation"],
    estimatedTime: 15
  },

  {
    id: "math-advanced-033",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the degree of the polynomial 4x^3 - 2x + 7?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "C",
    explanation: "The degree of a polynomial is the highest power of the variable that appears. In 4x^3 - 2x + 7, the terms have degrees 3, 1, and 0 respectively. The highest is 3, so the degree of the polynomial is 3.",
    tags: ["polynomials", "identification"],
    estimatedTime: 15
  },

  {
    id: "math-advanced-034",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Factor the expression x^2 - 16.",
    choices: [
      { label: "A", text: "(x - 4)(x - 4)" },
      { label: "B", text: "(x + 4)(x + 4)" },
      { label: "C", text: "(x - 4)(x + 4)" },
      { label: "D", text: "(x - 8)(x + 2)" }
    ],
    correctAnswer: "C",
    explanation: "x^2 - 16 is a difference of two squares: x^2 - 4^2. The difference of squares formula states a^2 - b^2 = (a - b)(a + b). Applying this with a = x and b = 4 gives x^2 - 16 = (x - 4)(x + 4).",
    tags: ["quadratics", "factoring", "difference-of-squares"],
    estimatedTime: 20
  },

  {
    id: "math-advanced-035",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the value of sqrt(49)?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "7" },
      { label: "C", text: "8" },
      { label: "D", text: "24.5" }
    ],
    correctAnswer: "B",
    explanation: "The square root of 49 is the positive number that, when multiplied by itself, gives 49. Since 7 * 7 = 49, sqrt(49) = 7.",
    tags: ["radicals", "evaluation"],
    estimatedTime: 10
  },

  {
    id: "math-advanced-036",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For which value of x is the expression 5 / (x + 3) undefined?",
    choices: [
      { label: "A", text: "x = -5" },
      { label: "B", text: "x = -3" },
      { label: "C", text: "x = 0" },
      { label: "D", text: "x = 3" }
    ],
    correctAnswer: "B",
    explanation: "A fraction is undefined when its denominator equals zero. Setting the denominator equal to zero: x + 3 = 0, so x = -3. When x = -3, the denominator is 0, making the expression undefined.",
    tags: ["rational-expressions", "domain"],
    estimatedTime: 15
  },

  {
    id: "math-advanced-037",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = 2^x, what is f(0)?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "undefined" }
    ],
    correctAnswer: "B",
    explanation: "Substitute x = 0 into f(x) = 2^x: f(0) = 2^0. Any nonzero number raised to the power of 0 equals 1. Therefore f(0) = 2^0 = 1.",
    tags: ["exponential", "zero-exponent"],
    estimatedTime: 15
  },

  {
    id: "math-advanced-038",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If p(x) = x^2 + 3x, what is p(2)?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "8" },
      { label: "C", text: "10" },
      { label: "D", text: "14" }
    ],
    correctAnswer: "C",
    explanation: "Substitute x = 2 into p(x) = x^2 + 3x: p(2) = (2)^2 + 3(2) = 4 + 6 = 10.",
    tags: ["polynomials", "function-evaluation"],
    estimatedTime: 15
  },

  {
    id: "math-advanced-039",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The graphs of y = x^2 and y = 9 intersect at how many points?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "3" }
    ],
    correctAnswer: "C",
    explanation: "Set x^2 = 9. This gives x = 3 or x = -3. Each value of x gives a point of intersection: (-3, 9) and (3, 9). So the graphs intersect at 2 points.",
    tags: ["nonlinear-systems", "graphing"],
    estimatedTime: 20
  },

  // =============================================================
  // LEVEL 2 — Developing (~500-580) — 9 Questions (040-048)
  // Standard application, straightforward use of formulas
  // =============================================================

  {
    id: "math-advanced-040",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What are the solutions to x^2 - 7x + 10 = 0?",
    choices: [
      { label: "A", text: "x = 1 and x = 10" },
      { label: "B", text: "x = 2 and x = 5" },
      { label: "C", text: "x = -2 and x = -5" },
      { label: "D", text: "x = -1 and x = -10" }
    ],
    correctAnswer: "B",
    explanation: "Factor the quadratic: we need two numbers that multiply to 10 and add to -7. Those numbers are -2 and -5. So x^2 - 7x + 10 = (x - 2)(x - 5) = 0. Setting each factor to zero: x = 2 and x = 5.",
    tags: ["quadratics", "factoring"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-041",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A savings account starts with $1,000 and earns 5% interest compounded annually. Which expression represents the account balance after t years?",
    choices: [
      { label: "A", text: "1000 + 50t" },
      { label: "B", text: "1000(0.05)^t" },
      { label: "C", text: "1000(1.05)^t" },
      { label: "D", text: "1000(1.5)^t" }
    ],
    correctAnswer: "C",
    explanation: "Compound interest is modeled by A = P(1 + r)^t, where P is the principal ($1,000) and r is the annual rate (0.05). Substituting: A = 1000(1 + 0.05)^t = 1000(1.05)^t. Choice A represents simple (linear) interest. Choices B and D use incorrect bases.",
    tags: ["exponential", "compound-interest"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-042",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = 2x^3 - x^2 + 4x - 3, what is f(-1)?",
    choices: [
      { label: "A", text: "-10" },
      { label: "B", text: "-8" },
      { label: "C", text: "-6" },
      { label: "D", text: "0" }
    ],
    correctAnswer: "A",
    explanation: "Substitute x = -1: f(-1) = 2(-1)^3 - (-1)^2 + 4(-1) - 3 = 2(-1) - 1 + (-4) - 3 = -2 - 1 - 4 - 3 = -10.",
    tags: ["polynomials", "function-evaluation"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-043",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution to sqrt(2x + 5) = 7?",
    choices: [
      { label: "A", text: "x = 1" },
      { label: "B", text: "x = 6" },
      { label: "C", text: "x = 22" },
      { label: "D", text: "x = 44" }
    ],
    correctAnswer: "C",
    explanation: "Square both sides: (sqrt(2x + 5))^2 = 7^2, so 2x + 5 = 49. Subtract 5: 2x = 44. Divide by 2: x = 22. Check: sqrt(2(22) + 5) = sqrt(49) = 7, confirming the solution.",
    tags: ["radicals", "solving-equations"],
    estimatedTime: 30
  },

  {
    id: "math-advanced-044",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Simplify: (x^2 - 4x) / x for x != 0.",
    choices: [
      { label: "A", text: "x - 4" },
      { label: "B", text: "x + 4" },
      { label: "C", text: "x^2 - 4" },
      { label: "D", text: "-4" }
    ],
    correctAnswer: "A",
    explanation: "Factor the numerator: x^2 - 4x = x(x - 4). Then x(x - 4) / x = x - 4, provided x != 0.",
    tags: ["rational-expressions", "simplifying"],
    estimatedTime: 25
  },

  {
    id: "math-advanced-045",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level2",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "What is the value of x^2 + 4x + 4 when x = 3?",
    choices: null,
    correctAnswer: "25",
    explanation: "Substitute x = 3 into x^2 + 4x + 4: (3)^2 + 4(3) + 4 = 9 + 12 + 4 = 25. Alternatively, x^2 + 4x + 4 = (x + 2)^2, so at x = 3 we get (3 + 2)^2 = 5^2 = 25.",
    tags: ["quadratics", "evaluation"],
    estimatedTime: 25
  },

  {
    id: "math-advanced-046",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is equivalent to (2^3)(2^5)?",
    choices: [
      { label: "A", text: "2^8" },
      { label: "B", text: "2^15" },
      { label: "C", text: "4^8" },
      { label: "D", text: "4^15" }
    ],
    correctAnswer: "A",
    explanation: "When multiplying expressions with the same base, add the exponents: 2^3 * 2^5 = 2^(3+5) = 2^8. This equals 256. Choice B incorrectly multiplies the exponents. Choices C and D use the wrong base.",
    tags: ["exponential", "exponent-rules"],
    estimatedTime: 20
  },

  {
    id: "math-advanced-047",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the product (x + 4)(x - 3)?",
    choices: [
      { label: "A", text: "x^2 + x - 12" },
      { label: "B", text: "x^2 - x - 12" },
      { label: "C", text: "x^2 + 7x - 12" },
      { label: "D", text: "x^2 + x + 12" }
    ],
    correctAnswer: "A",
    explanation: "Use FOIL: (x + 4)(x - 3) = x*x + x*(-3) + 4*x + 4*(-3) = x^2 - 3x + 4x - 12 = x^2 + x - 12.",
    tags: ["polynomials", "expanding"],
    estimatedTime: 25
  },

  {
    id: "math-advanced-048",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "At what point(s) does the line y = 5 intersect the parabola y = x^2 + 1?",
    choices: [
      { label: "A", text: "(2, 5) only" },
      { label: "B", text: "(-2, 5) only" },
      { label: "C", text: "(2, 5) and (-2, 5)" },
      { label: "D", text: "No points of intersection" }
    ],
    correctAnswer: "C",
    explanation: "Set x^2 + 1 = 5, so x^2 = 4, giving x = 2 or x = -2. The intersection points are (2, 5) and (-2, 5).",
    tags: ["nonlinear-systems", "parabola-line"],
    estimatedTime: 30
  },

  // =============================================================
  // LEVEL 3 — Proficient (~580-660) — 9 Questions (049-057)
  // Multi-step problems, completing the square, factoring trinomials
  // =============================================================

  {
    id: "math-advanced-049",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the vertex form of the quadratic y = x^2 - 6x + 5?",
    choices: [
      { label: "A", text: "y = (x - 3)^2 - 4" },
      { label: "B", text: "y = (x - 3)^2 + 5" },
      { label: "C", text: "y = (x + 3)^2 - 4" },
      { label: "D", text: "y = (x - 6)^2 - 31" }
    ],
    correctAnswer: "A",
    explanation: "Complete the square: y = x^2 - 6x + 5. Take half the coefficient of x: -6/2 = -3. Square it: (-3)^2 = 9. Rewrite: y = (x^2 - 6x + 9) - 9 + 5 = (x - 3)^2 - 4.",
    tags: ["quadratics", "completing-the-square", "vertex-form"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-050",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Solve for x: 4^x = 64.",
    choices: [
      { label: "A", text: "x = 2" },
      { label: "B", text: "x = 3" },
      { label: "C", text: "x = 4" },
      { label: "D", text: "x = 16" }
    ],
    correctAnswer: "B",
    explanation: "Rewrite both sides with base 2: (2^2)^x = 2^6, so 2^(2x) = 2^6. Since the bases are equal, 2x = 6, giving x = 3. Alternatively, check directly: 4^3 = 64.",
    tags: ["exponential", "solving-equations"],
    estimatedTime: 45
  },

  {
    id: "math-advanced-051",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Factor completely: 2x^3 - 8x.",
    choices: [
      { label: "A", text: "2x(x^2 - 4)" },
      { label: "B", text: "2x(x - 2)(x + 2)" },
      { label: "C", text: "2(x^3 - 4x)" },
      { label: "D", text: "x(2x - 8)" }
    ],
    correctAnswer: "B",
    explanation: "First factor out the GCF: 2x^3 - 8x = 2x(x^2 - 4). Then recognize x^2 - 4 as a difference of squares: x^2 - 4 = (x - 2)(x + 2). The fully factored form is 2x(x - 2)(x + 2). Choice A is partially factored but not complete.",
    tags: ["polynomials", "factoring"],
    estimatedTime: 45
  },

  {
    id: "math-advanced-052",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the solution to the equation sqrt(x + 7) = x - 5?",
    choices: [
      { label: "A", text: "x = 2 only" },
      { label: "B", text: "x = 9 only" },
      { label: "C", text: "x = 2 and x = 9" },
      { label: "D", text: "No solution" }
    ],
    correctAnswer: "B",
    explanation: "Square both sides: x + 7 = (x - 5)^2 = x^2 - 10x + 25. Rearrange: 0 = x^2 - 11x + 18 = (x - 2)(x - 9). So x = 2 or x = 9. Check x = 2: sqrt(9) = 3, but 2 - 5 = -3. Since 3 != -3, x = 2 is extraneous. Check x = 9: sqrt(16) = 4, and 9 - 5 = 4. Valid. The only solution is x = 9.",
    tags: ["radicals", "extraneous-solutions"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-053",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which expression is equivalent to 3/(x + 2) - 2/(x - 1)?",
    choices: [
      { label: "A", text: "(x - 7) / ((x + 2)(x - 1))" },
      { label: "B", text: "(5x - 1) / ((x + 2)(x - 1))" },
      { label: "C", text: "1 / ((x + 2)(x - 1))" },
      { label: "D", text: "(x + 7) / ((x + 2)(x - 1))" }
    ],
    correctAnswer: "A",
    explanation: "Use the common denominator (x + 2)(x - 1). Rewrite: 3(x - 1)/((x + 2)(x - 1)) - 2(x + 2)/((x + 2)(x - 1)). The numerator becomes 3(x - 1) - 2(x + 2) = 3x - 3 - 2x - 4 = x - 7. The result is (x - 7)/((x + 2)(x - 1)).",
    tags: ["rational-expressions", "combining-fractions"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-054",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level3",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "Using the quadratic formula, find the positive solution to 2x^2 - 3x - 5 = 0. Enter your answer as a fraction or decimal.",
    choices: null,
    correctAnswer: "5/2",
    explanation: "Apply the quadratic formula with a = 2, b = -3, c = -5: x = (3 +/- sqrt(9 + 40)) / 4 = (3 +/- sqrt(49)) / 4 = (3 +/- 7) / 4. The two solutions are x = (3 + 7)/4 = 10/4 = 5/2, and x = (3 - 7)/4 = -4/4 = -1. The positive solution is x = 5/2 = 2.5.",
    tags: ["quadratics", "quadratic-formula"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-055",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A car depreciates in value by 15% each year. If the car is worth $20,000 now, which expression gives its value after n years?",
    choices: [
      { label: "A", text: "20000 - 3000n" },
      { label: "B", text: "20000(0.15)^n" },
      { label: "C", text: "20000(0.85)^n" },
      { label: "D", text: "20000(1.15)^n" }
    ],
    correctAnswer: "C",
    explanation: "Each year the car retains 100% - 15% = 85% of its value, so the value after n years is 20000(0.85)^n. Choice A models linear depreciation. Choice B uses 0.15 as the base (retaining only 15% per year, far too much loss). Choice D models 15% growth, not depreciation.",
    tags: ["exponential", "depreciation", "modeling"],
    estimatedTime: 45
  },

  {
    id: "math-advanced-056",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = x^3 - 2x^2 - 5x + 6 and f(1) = 0, which of the following is a complete factorization of f(x)?",
    choices: [
      { label: "A", text: "(x - 1)(x^2 - x - 6)" },
      { label: "B", text: "(x - 1)(x - 3)(x + 2)" },
      { label: "C", text: "(x - 1)(x + 3)(x - 2)" },
      { label: "D", text: "(x + 1)(x - 3)(x + 2)" }
    ],
    correctAnswer: "B",
    explanation: "Since f(1) = 0, (x - 1) is a factor. Dividing gives x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6). Factor the remaining quadratic: x^2 - x - 6 = (x - 3)(x + 2), since -3 and 2 multiply to -6 and add to -1. The complete factorization is (x - 1)(x - 3)(x + 2).",
    tags: ["polynomials", "factoring", "synthetic-division"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-057",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "How many solutions does the system y = x^2 - 3 and y = 2x + 1 have?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "Infinitely many" }
    ],
    correctAnswer: "C",
    explanation: "Set x^2 - 3 = 2x + 1, so x^2 - 2x - 4 = 0. Compute the discriminant: b^2 - 4ac = (-2)^2 - 4(1)(-4) = 4 + 16 = 20. Since the discriminant is positive, there are two distinct real solutions, meaning the system has 2 intersection points.",
    tags: ["nonlinear-systems", "discriminant"],
    estimatedTime: 60
  },

  // =============================================================
  // LEVEL 4 — Advanced (~660-730) — 9 Questions (058-066)
  // Complex multi-step, discriminant analysis, remainder theorem,
  // composition of functions
  // =============================================================

  {
    id: "math-advanced-058",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "For what values of k does the equation x^2 + kx + 9 = 0 have no real solutions?",
    choices: [
      { label: "A", text: "-6 < k < 6" },
      { label: "B", text: "k < -6 or k > 6" },
      { label: "C", text: "k = 6 or k = -6" },
      { label: "D", text: "-3 < k < 3" }
    ],
    correctAnswer: "A",
    explanation: "For no real solutions, the discriminant must be negative: b^2 - 4ac < 0. Here a = 1, b = k, c = 9, so k^2 - 36 < 0, giving k^2 < 36. This means -6 < k < 6.",
    tags: ["quadratics", "discriminant", "inequalities"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-059",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "When the polynomial p(x) = 2x^3 - 5x^2 + 3x - 7 is divided by (x - 2), what is the remainder?",
    choices: [
      { label: "A", text: "-5" },
      { label: "B", text: "-1" },
      { label: "C", text: "1" },
      { label: "D", text: "3" }
    ],
    correctAnswer: "A",
    explanation: "By the Remainder Theorem, the remainder when p(x) is divided by (x - c) equals p(c). Evaluate p(2): p(2) = 2(2)^3 - 5(2)^2 + 3(2) - 7 = 2(8) - 5(4) + 6 - 7 = 16 - 20 + 6 - 7 = -5. The remainder is -5.",
    tags: ["polynomials", "remainder-theorem"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-060",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 2^(3x-1) = 8^(x+2), what is the value of x?",
    choices: [
      { label: "A", text: "x = 7/3" },
      { label: "B", text: "x = 7" },
      { label: "C", text: "There is no solution" },
      { label: "D", text: "All real numbers are solutions" }
    ],
    correctAnswer: "C",
    explanation: "Rewrite 8 as 2^3: 2^(3x-1) = (2^3)^(x+2) = 2^(3x+6). Since the bases are equal, set exponents equal: 3x - 1 = 3x + 6. Subtracting 3x from both sides gives -1 = 6, which is a contradiction. Therefore there is no solution.",
    tags: ["exponential", "no-solution"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-061",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What are all the solutions to the equation 4/(x + 1) + 1/(x - 2) = 1?",
    choices: [
      { label: "A", text: "x = 1 and x = 5" },
      { label: "B", text: "x = -1 and x = 2" },
      { label: "C", text: "x = 1 only" },
      { label: "D", text: "x = 5 only" }
    ],
    correctAnswer: "A",
    explanation: "Multiply both sides by (x + 1)(x - 2), noting x != -1 and x != 2: 4(x - 2) + 1(x + 1) = (x + 1)(x - 2). Expand the left side: 4x - 8 + x + 1 = 5x - 7. Expand the right side: x^2 - x - 2. Set equal: 5x - 7 = x^2 - x - 2, so 0 = x^2 - 6x + 5 = (x - 1)(x - 5). Thus x = 1 or x = 5. Check x = 1: 4/2 + 1/(-1) = 2 - 1 = 1. Valid. Check x = 5: 4/6 + 1/3 = 2/3 + 1/3 = 1. Valid. Neither value makes a denominator zero, so both solutions are valid.",
    tags: ["rational-expressions", "solving-equations"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-062",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If the sum of the roots of 3x^2 + bx - 12 = 0 is 4, what is the value of b?",
    choices: [
      { label: "A", text: "-12" },
      { label: "B", text: "-4" },
      { label: "C", text: "4" },
      { label: "D", text: "12" }
    ],
    correctAnswer: "A",
    explanation: "By Vieta's formulas, for ax^2 + bx + c = 0, the sum of the roots is -b/a. Here a = 3, so the sum of the roots is -b/3. Setting -b/3 = 4 gives b = -12.",
    tags: ["quadratics", "vietas-formulas"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-063",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "level4",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "If sqrt(x + 5) + sqrt(x) = 5, what is the value of x?",
    choices: null,
    correctAnswer: "4",
    explanation: "Isolate one radical: sqrt(x + 5) = 5 - sqrt(x). Square both sides: x + 5 = 25 - 10*sqrt(x) + x. Simplify: 5 = 25 - 10*sqrt(x), so 10*sqrt(x) = 20, giving sqrt(x) = 2, thus x = 4. Check: sqrt(4 + 5) + sqrt(4) = sqrt(9) + 2 = 3 + 2 = 5. The solution is valid.",
    tags: ["radicals", "solving-equations"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-064",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = x^2 + 1 and g(x) = 2x - 3, what is f(g(x))?",
    choices: [
      { label: "A", text: "4x^2 - 12x + 10" },
      { label: "B", text: "2x^2 - 1" },
      { label: "C", text: "4x^2 - 12x + 8" },
      { label: "D", text: "2x^2 + 2x - 3" }
    ],
    correctAnswer: "A",
    explanation: "f(g(x)) means substitute g(x) into f: f(g(x)) = f(2x - 3) = (2x - 3)^2 + 1. Expand (2x - 3)^2 = 4x^2 - 12x + 9. Adding 1 gives 4x^2 - 12x + 10.",
    tags: ["polynomials", "composition"],
    estimatedTime: 60
  },

  {
    id: "math-advanced-065",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The population of a town is modeled by P(t) = 5000 * e^(0.03t), where t is in years. After approximately how many years will the population reach 10,000? (Use ln(2) = 0.693.)",
    choices: [
      { label: "A", text: "About 17 years" },
      { label: "B", text: "About 23 years" },
      { label: "C", text: "About 33 years" },
      { label: "D", text: "About 67 years" }
    ],
    correctAnswer: "B",
    explanation: "Set 10000 = 5000 * e^(0.03t). Divide both sides by 5000: 2 = e^(0.03t). Take the natural logarithm of both sides: ln(2) = 0.03t. So t = ln(2) / 0.03 = 0.693 / 0.03 = 23.1 years, which is approximately 23 years.",
    tags: ["exponential", "natural-log", "modeling"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-066",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The system y = x^2 and y = mx - 4 has exactly one solution. Which of the following could be the value of m?",
    choices: [
      { label: "A", text: "m = 2 or m = -2" },
      { label: "B", text: "m = 4 or m = -4" },
      { label: "C", text: "m = 8 or m = -8" },
      { label: "D", text: "m = 16 or m = -16" }
    ],
    correctAnswer: "B",
    explanation: "Substitute: x^2 = mx - 4, so x^2 - mx + 4 = 0. For exactly one solution, the discriminant must equal zero: m^2 - 4(1)(4) = 0, giving m^2 = 16, so m = 4 or m = -4.",
    tags: ["nonlinear-systems", "discriminant", "tangent-line"],
    estimatedTime: 90
  },

  // =============================================================
  // LEVEL 5 — Expert (~730-800) — 9 Questions (067-075)
  // Hardest problems requiring multiple insights, abstract analysis
  // =============================================================

  {
    id: "math-advanced-067",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Let p(x) = x^4 - 4x^3 + 6x^2 - 4x + 1. Which of the following is equivalent to p(x)?",
    choices: [
      { label: "A", text: "(x - 1)^4" },
      { label: "B", text: "(x^2 - 2x + 1)^2" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "Neither A nor B" }
    ],
    correctAnswer: "C",
    explanation: "Expand (x - 1)^4 using the binomial theorem: C(4,0)x^4 - C(4,1)x^3 + C(4,2)x^2 - C(4,3)x + C(4,4) = x^4 - 4x^3 + 6x^2 - 4x + 1, which matches p(x). For choice B, note that x^2 - 2x + 1 = (x - 1)^2, so (x^2 - 2x + 1)^2 = ((x - 1)^2)^2 = (x - 1)^4, which is the same expression. Both A and B are equivalent to p(x).",
    tags: ["polynomials", "binomial-theorem", "perfect-power"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-068",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level5",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "The system of equations x^2 + y^2 = 25 and x^2 - y = 5 has solutions with y >= 0. What is the sum of all distinct y-values among these solutions?",
    choices: null,
    correctAnswer: "4",
    explanation: "From x^2 - y = 5, we get x^2 = y + 5. Substitute into x^2 + y^2 = 25: (y + 5) + y^2 = 25, so y^2 + y - 20 = 0. Factor: (y + 5)(y - 4) = 0, giving y = -5 or y = 4. Since we need y >= 0, only y = 4 is valid. When y = 4, x^2 = 9, giving the points (3, 4) and (-3, 4). The only distinct y-value with y >= 0 is 4, so the sum is 4.",
    tags: ["nonlinear-systems", "substitution", "circle-parabola"],
    estimatedTime: 105
  },

  {
    id: "math-advanced-069",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 3^a = 5 and 3^b = 7, what is the value of 3^(2a + b)?",
    choices: [
      { label: "A", text: "35" },
      { label: "B", text: "85" },
      { label: "C", text: "175" },
      { label: "D", text: "245" }
    ],
    correctAnswer: "C",
    explanation: "Using exponent rules: 3^(2a + b) = 3^(2a) * 3^b = (3^a)^2 * 3^b. Since 3^a = 5 and 3^b = 7, this becomes 5^2 * 7 = 25 * 7 = 175.",
    tags: ["exponential", "exponent-rules", "abstract"],
    estimatedTime: 75
  },

  {
    id: "math-advanced-070",
    section: "math",
    domain: "advanced",
    subdomain: "quadratic-equations",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The quadratic equation ax^2 + bx + c = 0 has roots r and s. If r + s = 5 and r^2 + s^2 = 17, what is the value of b^2 - 2ac?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "17" },
      { label: "C", text: "17a^2" },
      { label: "D", text: "25a^2" }
    ],
    correctAnswer: "C",
    explanation: "By Vieta's formulas, r + s = -b/a and rs = c/a. From r + s = 5: b = -5a. From r^2 + s^2 = (r + s)^2 - 2rs = 25 - 2rs = 17: rs = 4, so c = 4a. Now compute b^2 - 2ac = (-5a)^2 - 2(a)(4a) = 25a^2 - 8a^2 = 17a^2.",
    tags: ["quadratics", "vietas-formulas", "algebraic-manipulation"],
    estimatedTime: 105
  },

  {
    id: "math-advanced-071",
    section: "math",
    domain: "advanced",
    subdomain: "rational-expressions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If f(x) = (x^2 + 2x - 15) / (x^2 - 9) and g(x) = (x + 5) / (x + 3), for what value of x does f(x) exist but f(x) != g(x)?",
    choices: [
      { label: "A", text: "x = -5" },
      { label: "B", text: "x = -3" },
      { label: "C", text: "x = 3" },
      { label: "D", text: "There is no such value" }
    ],
    correctAnswer: "D",
    explanation: "Factor f(x): numerator x^2 + 2x - 15 = (x + 5)(x - 3); denominator x^2 - 9 = (x + 3)(x - 3). So f(x) = (x + 5)(x - 3) / ((x + 3)(x - 3)). For x != 3 and x != -3, this simplifies to (x + 5)/(x + 3) = g(x). At x = 3 and x = -3, f(x) is undefined (denominators are zero). So wherever f(x) exists, it equals g(x). There is no value of x where f(x) exists but differs from g(x).",
    tags: ["rational-expressions", "domain", "simplification"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-072",
    section: "math",
    domain: "advanced",
    subdomain: "polynomial-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The polynomial p(x) = x^3 + ax^2 + bx + 6 has (x - 1) as a factor and leaves a remainder of 8 when divided by (x + 1). What is the value of a + b?",
    choices: [
      { label: "A", text: "-7" },
      { label: "B", text: "-3" },
      { label: "C", text: "1" },
      { label: "D", text: "3" }
    ],
    correctAnswer: "A",
    explanation: "Since (x - 1) is a factor, p(1) = 0: 1 + a + b + 6 = 0, so a + b = -7. We can verify with the second condition: p(-1) = 8 gives -1 + a - b + 6 = 8, so a - b = 3. Solving the system a + b = -7 and a - b = 3: adding the equations gives 2a = -4, so a = -2; then b = -5. Check: p(x) = x^3 - 2x^2 - 5x + 6; p(1) = 1 - 2 - 5 + 6 = 0; p(-1) = -1 - 2 + 5 + 6 = 8. Both conditions hold. a + b = -2 + (-5) = -7.",
    tags: ["polynomials", "factor-theorem", "remainder-theorem", "system"],
    estimatedTime: 105
  },

  {
    id: "math-advanced-073",
    section: "math",
    domain: "advanced",
    subdomain: "radical-equations",
    difficulty: "level5",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "What is the solution to the equation sqrt(5x + 1) = x + 1? If there are multiple solutions, enter their sum.",
    choices: null,
    correctAnswer: "3",
    explanation: "Square both sides: 5x + 1 = (x + 1)^2 = x^2 + 2x + 1. Rearrange: x^2 - 3x = 0, so x(x - 3) = 0, giving x = 0 or x = 3. Check x = 0: sqrt(1) = 1, and 0 + 1 = 1. Valid. Check x = 3: sqrt(16) = 4, and 3 + 1 = 4. Valid. Both solutions are valid, and their sum is 0 + 3 = 3.",
    tags: ["radicals", "multi-step"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-074",
    section: "math",
    domain: "advanced",
    subdomain: "exponential-functions",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If 4^x - 2^(x+1) - 8 = 0, what is the value of x?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "B",
    explanation: "Let u = 2^x. Then 4^x = (2^2)^x = (2^x)^2 = u^2, and 2^(x+1) = 2 * 2^x = 2u. The equation becomes u^2 - 2u - 8 = 0. Factor: (u - 4)(u + 2) = 0, so u = 4 or u = -2. Since u = 2^x must be positive, u = -2 is rejected. Thus 2^x = 4 = 2^2, so x = 2.",
    tags: ["exponential", "substitution", "quadratic-in-disguise"],
    estimatedTime: 90
  },

  {
    id: "math-advanced-075",
    section: "math",
    domain: "advanced",
    subdomain: "nonlinear-systems",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The system of equations y = x^2 - 4x + k and y = 2x - 5 has exactly one solution. What is the y-coordinate of that solution?",
    choices: [
      { label: "A", text: "-1" },
      { label: "B", text: "1" },
      { label: "C", text: "3" },
      { label: "D", text: "5" }
    ],
    correctAnswer: "B",
    explanation: "Set x^2 - 4x + k = 2x - 5, giving x^2 - 6x + (k + 5) = 0. For exactly one solution, the discriminant equals zero: 36 - 4(k + 5) = 0, so 36 - 4k - 20 = 0, giving 4k = 16, thus k = 4. The equation becomes x^2 - 6x + 9 = 0, which factors as (x - 3)^2 = 0, giving x = 3. Substitute into y = 2x - 5: y = 2(3) - 5 = 1.",
    tags: ["nonlinear-systems", "discriminant", "tangent-line"],
    estimatedTime: 105
  }

];
