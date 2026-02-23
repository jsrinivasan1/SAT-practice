// SAT Math - Geometry & Trigonometry Expanded Questions
// 40 questions: 8 per level (level1 through level5)
// IDs: math-geometry-021 to math-geometry-060
// Subdomains: area-volume, angles-triangles, right-triangles, circles, coordinate-geometry, trigonometry
// Includes 4 student-produced response questions (choices: null)

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-geometry-expanded'] = [

  // ── LEVEL 1 — Foundation (~400–500) — 8 questions ─────────────────────

  {
    id: "math-geometry-021",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the area, in square centimeters, of a rectangle with a length of 8 centimeters and a width of 5 centimeters?",
    choices: [
      { label: "A", text: "13" },
      { label: "B", text: "26" },
      { label: "C", text: "40" },
      { label: "D", text: "80" }
    ],
    correctAnswer: "C",
    explanation: "The area of a rectangle is length times width. Area = 8 × 5 = 40 square centimeters. Choice A (13) is 8 + 5. Choice B (26) is the perimeter, 2(8 + 5). Choice D (80) is double the correct area.",
    tags: ["area", "rectangle"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-022",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "How many degrees are in the sum of the interior angles of a triangle?",
    choices: [
      { label: "A", text: "90°" },
      { label: "B", text: "180°" },
      { label: "C", text: "270°" },
      { label: "D", text: "360°" }
    ],
    correctAnswer: "B",
    explanation: "The sum of the interior angles of any triangle is always 180°. This is a fundamental property of triangles in Euclidean geometry. Choice A (90°) is the measure of a right angle. Choice D (360°) is the sum of the interior angles of a quadrilateral.",
    tags: ["angles", "triangle", "interior-angles"],
    estimatedTime: 15
  },

  {
    id: "math-geometry-023",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A square has a side length of 9 inches. What is the perimeter of the square, in inches?",
    choices: [
      { label: "A", text: "18" },
      { label: "B", text: "27" },
      { label: "C", text: "36" },
      { label: "D", text: "81" }
    ],
    correctAnswer: "C",
    explanation: "The perimeter of a square is 4 times the side length. Perimeter = 4 × 9 = 36 inches. Choice A (18) is 2 × 9. Choice B (27) is 3 × 9. Choice D (81) is the area, 9² = 81.",
    tags: ["perimeter", "square"],
    estimatedTime: 20
  },

  {
    id: "math-geometry-024",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A circle has a diameter of 10 centimeters. What is the radius of the circle, in centimeters?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "10" },
      { label: "D", text: "20" }
    ],
    correctAnswer: "B",
    explanation: "The radius of a circle is half the diameter. Radius = 10 / 2 = 5 centimeters. Choice C (10) is the diameter itself, and Choice D (20) is double the diameter.",
    tags: ["circle", "radius", "diameter"],
    estimatedTime: 15
  },

  {
    id: "math-geometry-025",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the area, in square meters, of a triangle with a base of 10 meters and a height of 6 meters?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "30" },
      { label: "C", text: "60" },
      { label: "D", text: "120" }
    ],
    correctAnswer: "B",
    explanation: "The area of a triangle is (1/2) × base × height. Area = (1/2) × 10 × 6 = 30 square meters. Choice A (16) is 10 + 6. Choice C (60) is base × height without the 1/2 factor. Choice D (120) is double base × height.",
    tags: ["area", "triangle"],
    estimatedTime: 25
  },

  {
    id: "math-geometry-026",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Two angles are supplementary. If one angle measures 110°, what is the measure of the other angle?",
    choices: [
      { label: "A", text: "60°" },
      { label: "B", text: "70°" },
      { label: "C", text: "80°" },
      { label: "D", text: "110°" }
    ],
    correctAnswer: "B",
    explanation: "Supplementary angles sum to 180°. The other angle = 180° − 110° = 70°. Choice A (60°) comes from subtracting from some other value. Choice D (110°) would make the angles equal, which is only true for 90° supplementary pairs.",
    tags: ["supplementary-angles"],
    estimatedTime: 20
  },

  {
    id: "math-geometry-027",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Point P is located at (3, 7) in the coordinate plane. If point P is translated 4 units to the left, what are the new coordinates of point P?",
    choices: [
      { label: "A", text: "(−1, 7)" },
      { label: "B", text: "(7, 7)" },
      { label: "C", text: "(3, 3)" },
      { label: "D", text: "(3, 11)" }
    ],
    correctAnswer: "A",
    explanation: "Translating a point 4 units to the left means subtracting 4 from the x-coordinate. The y-coordinate does not change. New coordinates = (3 − 4, 7) = (−1, 7). Choice B adds 4 to x instead. Choices C and D incorrectly modify the y-coordinate.",
    tags: ["coordinate-plane", "translation"],
    estimatedTime: 25
  },

  {
    id: "math-geometry-028",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Which of the following is the longest side of a right triangle?",
    choices: [
      { label: "A", text: "The side opposite the smallest angle" },
      { label: "B", text: "The side adjacent to the right angle" },
      { label: "C", text: "The hypotenuse" },
      { label: "D", text: "The two legs are always longer than the hypotenuse" }
    ],
    correctAnswer: "C",
    explanation: "In a right triangle, the hypotenuse is always the longest side. It is the side opposite the right angle (the largest angle in the triangle). By the Pythagorean theorem, c² = a² + b², which guarantees that c is greater than either a or b individually.",
    tags: ["right-triangle", "hypotenuse"],
    estimatedTime: 15
  },

  // ── LEVEL 2 — Developing (~500–580) — 8 questions ────────────────────

  {
    id: "math-geometry-029",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In triangle XYZ, the measure of angle X is 42° and the measure of angle Y is 73°. What is the measure of angle Z?",
    choices: [
      { label: "A", text: "55°" },
      { label: "B", text: "65°" },
      { label: "C", text: "75°" },
      { label: "D", text: "115°" }
    ],
    correctAnswer: "B",
    explanation: "The sum of the interior angles of a triangle is 180°. Angle Z = 180° − 42° − 73° = 65°. Choice A (55°) results from a subtraction error. Choice D (115°) is the supplement of 65°.",
    tags: ["angles", "triangle", "interior-angles"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-030",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A circle has a radius of 7 centimeters. What is the area of the circle?",
    choices: [
      { label: "A", text: "14π cm²" },
      { label: "B", text: "49π cm²" },
      { label: "C", text: "7π cm²" },
      { label: "D", text: "196π cm²" }
    ],
    correctAnswer: "B",
    explanation: "The area of a circle is A = πr². Substituting r = 7: A = π(7²) = 49π square centimeters. Choice A (14π) is the circumference, 2πr. Choice C (7π) is πr. Choice D (196π) is π(2r)² = π(14²).",
    tags: ["area", "circle"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-031",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "7" },
      { label: "B", text: "10" },
      { label: "C", text: "12" },
      { label: "D", text: "14" }
    ],
    correctAnswer: "B",
    explanation: "By the Pythagorean theorem, c² = a² + b². So c² = 6² + 8² = 36 + 64 = 100. Therefore c = √100 = 10. This is the well-known 6-8-10 right triangle (a multiple of the 3-4-5 triangle).",
    tags: ["pythagorean-theorem", "right-triangle"],
    estimatedTime: 35
  },

  {
    id: "math-geometry-032",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A rectangular prism has a length of 5, a width of 3, and a height of 4. What is its volume?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "47" },
      { label: "C", text: "60" },
      { label: "D", text: "94" }
    ],
    correctAnswer: "C",
    explanation: "The volume of a rectangular prism is V = length × width × height. V = 5 × 3 × 4 = 60 cubic units. Choice A (12) is 3 × 4. Choice B (47) is the sum of all face areas divided by some factor. Choice D (94) is the surface area, 2(5×3 + 5×4 + 3×4) = 2(15 + 20 + 12) = 94.",
    tags: ["volume", "rectangular-prism"],
    estimatedTime: 35
  },

  {
    id: "math-geometry-033",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the slope of the line that passes through the points (2, 3) and (6, 11)?",
    choices: [
      { label: "A", text: "1/2" },
      { label: "B", text: "2" },
      { label: "C", text: "4" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "B",
    explanation: "The slope formula is m = (y₂ − y₁) / (x₂ − x₁). Substituting: m = (11 − 3) / (6 − 2) = 8 / 4 = 2. Choice A (1/2) is the reciprocal. Choice C (4) is just the difference in x-values. Choice D (8) is just the difference in y-values.",
    tags: ["slope", "coordinate-plane"],
    estimatedTime: 35
  },

  {
    id: "math-geometry-034",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Two parallel lines are cut by a transversal. If one of the corresponding angles measures 52°, what is the measure of the co-interior (same-side interior) angle on the same side of the transversal?",
    choices: [
      { label: "A", text: "52°" },
      { label: "B", text: "128°" },
      { label: "C", text: "38°" },
      { label: "D", text: "142°" }
    ],
    correctAnswer: "B",
    explanation: "When two parallel lines are cut by a transversal, co-interior angles (also called same-side interior angles or consecutive interior angles) are supplementary, meaning they add up to 180°. The corresponding angle is 52°, so the interior angle on the same side as the corresponding angle is also 52° (alternate interior to the corresponding angle's partner) — but the co-interior angle is supplementary to it: 180° − 52° = 128°.",
    tags: ["parallel-lines", "transversal", "co-interior-angles"],
    estimatedTime: 45
  },

  {
    id: "math-geometry-035",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a right triangle, one acute angle is 45°. If one leg has a length of 9, what is the length of the other leg?",
    choices: [
      { label: "A", text: "4.5" },
      { label: "B", text: "9" },
      { label: "C", text: "9√2" },
      { label: "D", text: "18" }
    ],
    correctAnswer: "B",
    explanation: "In a 45-45-90 triangle, the two legs are equal in length. Since one leg is 9, the other leg is also 9. The hypotenuse would be 9√2. Choice C (9√2) is the hypotenuse, not the other leg. Choice D (18) would be the hypotenuse doubled.",
    tags: ["45-45-90", "special-right-triangle"],
    estimatedTime: 35
  },

  {
    id: "math-geometry-036",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level2",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A trapezoid has parallel bases of length 6 and 10, and a height of 4. What is the area of the trapezoid?",
    choices: null,
    correctAnswer: "32",
    explanation: "The area of a trapezoid is A = (1/2)(b₁ + b₂)(h), where b₁ and b₂ are the parallel bases and h is the height. A = (1/2)(6 + 10)(4) = (1/2)(16)(4) = (1/2)(64) = 32 square units.",
    tags: ["area", "trapezoid"],
    estimatedTime: 40
  },

  // ── LEVEL 3 — Proficient (~580–660) — 8 questions ────────────────────

  {
    id: "math-geometry-037",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A swimming pool is shaped like a rectangular prism with a length of 25 meters, a width of 10 meters, and a depth of 2 meters. A semicircular hot tub with a diameter of 4 meters and the same depth of 2 meters is attached to one end. What is the total volume of the pool and hot tub combined, in cubic meters?",
    choices: [
      { label: "A", text: "500 + 4π" },
      { label: "B", text: "500 + 8π" },
      { label: "C", text: "500 + 16π" },
      { label: "D", text: "750 + 4π" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Volume of the rectangular pool = 25 × 10 × 2 = 500 cubic meters. Step 2: The semicircular hot tub has a diameter of 4 m, so its radius is 2 m. The cross-sectional area of the semicircle = (1/2)π(2²) = 2π square meters. The volume of the hot tub = 2π × 2 (depth) = 4π cubic meters. Step 3: Total volume = 500 + 4π cubic meters.",
    tags: ["volume", "composite-shape", "rectangular-prism", "semicircle"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-038",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the distance between the points (−3, 4) and (5, −2) in the coordinate plane?",
    choices: [
      { label: "A", text: "2√5" },
      { label: "B", text: "6" },
      { label: "C", text: "10" },
      { label: "D", text: "14" }
    ],
    correctAnswer: "C",
    explanation: "Using the distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²]. d = √[(5 − (−3))² + (−2 − 4)²] = √[(8)² + (−6)²] = √[64 + 36] = √100 = 10. Choice A (2√5) ≈ 4.47. Choice B (6) is just |−2 − 4|. Choice D (14) is |8| + |−6|.",
    tags: ["distance-formula", "coordinate-plane"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-039",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Triangles ABC and DEF are similar. In triangle ABC, AB = 6, BC = 8, and AC = 10. If DE = 9, what is the length of EF?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "12" },
      { label: "C", text: "13.5" },
      { label: "D", text: "15" }
    ],
    correctAnswer: "B",
    explanation: "Since the triangles are similar, corresponding sides are proportional. AB corresponds to DE, so the scale factor is DE/AB = 9/6 = 3/2. BC corresponds to EF, so EF = BC × (3/2) = 8 × (3/2) = 12. We can verify: DF = AC × (3/2) = 10 × (3/2) = 15, and the triangle 9-12-15 is a multiple of 3-4-5, which is consistent.",
    tags: ["similar-triangles", "proportions", "scale-factor"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-040",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A circle has a circumference of 20π centimeters. What is the area of the circle, in square centimeters?",
    choices: [
      { label: "A", text: "10π" },
      { label: "B", text: "20π" },
      { label: "C", text: "100π" },
      { label: "D", text: "400π" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Find the radius from the circumference. C = 2πr, so 20π = 2πr, which gives r = 10 cm. Step 2: Find the area. A = πr² = π(10²) = 100π square centimeters. Choice A (10π) is πr. Choice D (400π) is π(2r)².",
    tags: ["circle", "circumference", "area"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-041",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a 30-60-90 right triangle, the side opposite the 60° angle has a length of 6√3. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "12" },
      { label: "C", text: "6√2" },
      { label: "D", text: "12√3" }
    ],
    correctAnswer: "B",
    explanation: "In a 30-60-90 triangle, the sides are in the ratio 1 : √3 : 2. The side opposite 60° corresponds to √3, so if this side is 6√3, the multiplier is 6. The side opposite 30° = 6 × 1 = 6. The hypotenuse = 6 × 2 = 12. Choice A (6) is the shortest side. Choice D (12√3) incorrectly multiplies the hypotenuse by √3.",
    tags: ["30-60-90", "special-right-triangle"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-042",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a right triangle, sin(θ) = 3/5. What is the value of cos(θ)?",
    choices: [
      { label: "A", text: "2/5" },
      { label: "B", text: "3/4" },
      { label: "C", text: "4/5" },
      { label: "D", text: "5/3" }
    ],
    correctAnswer: "C",
    explanation: "Since sin(θ) = 3/5, the side opposite θ is 3 and the hypotenuse is 5. Using the Pythagorean theorem, the adjacent side = √(5² − 3²) = √(25 − 9) = √16 = 4. Therefore cos(θ) = adjacent/hypotenuse = 4/5. This is a 3-4-5 right triangle. Alternatively, use the identity sin²(θ) + cos²(θ) = 1: cos²(θ) = 1 − 9/25 = 16/25, so cos(θ) = 4/5.",
    tags: ["trigonometry", "sine", "cosine", "pythagorean-identity"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-043",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level3",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A right circular cylinder has a volume of 250π cubic centimeters and a height of 10 centimeters. What is the radius of the cylinder, in centimeters?",
    choices: null,
    correctAnswer: "5",
    explanation: "The volume of a cylinder is V = πr²h. Substituting the known values: 250π = πr²(10). Dividing both sides by π: 250 = 10r². Dividing both sides by 10: r² = 25. Taking the square root: r = 5 centimeters.",
    tags: ["volume", "cylinder", "solve-for-variable"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-044",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Line segment AB has endpoints A(1, 2) and B(7, 10). What are the coordinates of the point that divides AB into two equal parts?",
    choices: [
      { label: "A", text: "(3, 5)" },
      { label: "B", text: "(4, 6)" },
      { label: "C", text: "(4, 8)" },
      { label: "D", text: "(6, 8)" }
    ],
    correctAnswer: "B",
    explanation: "The point that divides a segment into two equal parts is the midpoint. Using the midpoint formula: M = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((1 + 7)/2, (2 + 10)/2) = (8/2, 12/2) = (4, 6).",
    tags: ["midpoint", "coordinate-plane"],
    estimatedTime: 45
  },

  // ── LEVEL 4 — Advanced (~660–730) — 8 questions ──────────────────────

  {
    id: "math-geometry-045",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a circle with radius 8, a central angle measures 135°. What is the length of the arc intercepted by this central angle?",
    choices: [
      { label: "A", text: "3π" },
      { label: "B", text: "6π" },
      { label: "C", text: "8π" },
      { label: "D", text: "12π" }
    ],
    correctAnswer: "B",
    explanation: "Arc length = (θ/360°) × 2πr, where θ is the central angle and r is the radius. Arc length = (135/360) × 2π(8) = (3/8) × 16π = 48π/8 = 6π. Alternatively, convert to radians: 135° = 3π/4 radians, and arc length = rθ = 8 × (3π/4) = 6π.",
    tags: ["arc-length", "circle", "central-angle"],
    estimatedTime: 75
  },

  {
    id: "math-geometry-046",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "An inscribed angle in a circle intercepts an arc of 124°. What is the measure of the inscribed angle?",
    choices: [
      { label: "A", text: "56°" },
      { label: "B", text: "62°" },
      { label: "C", text: "124°" },
      { label: "D", text: "248°" }
    ],
    correctAnswer: "B",
    explanation: "An inscribed angle is half the measure of its intercepted arc. Inscribed angle = 124° / 2 = 62°. Choice A (56°) may come from subtracting from 180°. Choice C (124°) is the arc itself, not the angle. Choice D (248°) is double the arc.",
    tags: ["inscribed-angle", "circle", "arc"],
    estimatedTime: 45
  },

  {
    id: "math-geometry-047",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A right circular cone has a base radius of 5 cm and a height of 12 cm. What is the lateral (slant) surface area of the cone?",
    choices: [
      { label: "A", text: "25π cm²" },
      { label: "B", text: "60π cm²" },
      { label: "C", text: "65π cm²" },
      { label: "D", text: "90π cm²" }
    ],
    correctAnswer: "C",
    explanation: "Step 1: Find the slant height using the Pythagorean theorem. l = √(r² + h²) = √(5² + 12²) = √(25 + 144) = √169 = 13 cm. Step 2: The lateral surface area of a cone is A = πrl = π(5)(13) = 65π cm². Choice A (25π) is πr². Choice B (60π) is πrh. Choice D (90π) is the total surface area minus something.",
    tags: ["surface-area", "cone", "pythagorean-theorem"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-048",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "From the top of a building that is 80 meters tall, the angle of depression to a car parked on the ground is 35°. What is the horizontal distance from the base of the building to the car, to the nearest meter? (Use tan 35° ≈ 0.700.)",
    choices: [
      { label: "A", text: "56 meters" },
      { label: "B", text: "98 meters" },
      { label: "C", text: "114 meters" },
      { label: "D", text: "138 meters" }
    ],
    correctAnswer: "C",
    explanation: "The angle of depression from the top of the building equals the angle of elevation from the car to the top (alternate interior angles). In the right triangle formed, the building height (80 m) is opposite the 35° angle, and the horizontal distance d is adjacent. tan(35°) = 80/d, so d = 80/tan(35°) = 80/0.700 ≈ 114.3 meters, which rounds to 114 meters.",
    tags: ["trigonometry", "angle-of-depression", "tangent"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-049",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In the xy-plane, a circle is defined by the equation x² + y² − 6x + 8y − 11 = 0. What is the radius of the circle?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "6" },
      { label: "C", text: "√11" },
      { label: "D", text: "√36" }
    ],
    correctAnswer: "B",
    explanation: "Complete the square for both x and y. Group terms: (x² − 6x) + (y² + 8y) = 11. Complete the square: (x² − 6x + 9) + (y² + 8y + 16) = 11 + 9 + 16. This gives (x − 3)² + (y + 4)² = 36. The equation is in standard form (x − h)² + (y − k)² = r², so r² = 36 and r = 6. The center is (3, −4).",
    tags: ["circle-equation", "completing-the-square", "coordinate-plane"],
    estimatedTime: 105
  },

  {
    id: "math-geometry-050",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level4",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A sphere has a surface area of 144π square inches. What is the volume of the sphere, in terms of π? (Enter the coefficient of π.)",
    choices: null,
    correctAnswer: "288",
    explanation: "Step 1: Find the radius from the surface area. Surface area of a sphere = 4πr². So 4πr² = 144π. Dividing both sides by 4π: r² = 36, so r = 6 inches. Step 2: Find the volume. V = (4/3)πr³ = (4/3)π(6³) = (4/3)π(216) = (4 × 216/3)π = (864/3)π = 288π. The coefficient of π is 288.",
    tags: ["volume", "sphere", "surface-area"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-051",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a right triangle, one leg has length 7 and the hypotenuse has length 25. A square is constructed on each side of the triangle. What is the area of the square constructed on the other leg?",
    choices: [
      { label: "A", text: "256" },
      { label: "B", text: "576" },
      { label: "C", text: "625" },
      { label: "D", text: "674" }
    ],
    correctAnswer: "B",
    explanation: "By the Pythagorean theorem, a² + b² = c². Here a = 7 and c = 25, so 7² + b² = 25², which gives 49 + b² = 625, so b² = 576. The area of the square on the other leg is b² = 576. (Note: we don't need to find b itself; b² is the area.) For reference, b = 24, forming a 7-24-25 right triangle.",
    tags: ["pythagorean-theorem", "right-triangle", "area", "square"],
    estimatedTime: 75
  },

  {
    id: "math-geometry-052",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "If sin(x) = cos(32°), which of the following could be the value of x, in degrees?",
    choices: [
      { label: "A", text: "32°" },
      { label: "B", text: "48°" },
      { label: "C", text: "58°" },
      { label: "D", text: "148°" }
    ],
    correctAnswer: "C",
    explanation: "The cofunction identity states that sin(x) = cos(90° − x). Therefore, if sin(x) = cos(32°), then 32° = 90° − x, giving x = 90° − 32° = 58°. We can verify: sin(58°) = cos(32°) is true because 58° + 32° = 90°.",
    tags: ["trigonometry", "cofunction-identity", "sine", "cosine"],
    estimatedTime: 60
  },

  // ── LEVEL 5 — Expert (~730–800) — 8 questions ────────────────────────

  {
    id: "math-geometry-053",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In the xy-plane, a circle has center (2, −3) and radius 5. The line y = x + k is tangent to this circle. If k > 0, what is the value of k?",
    choices: [
      { label: "A", text: "5√2 − 5" },
      { label: "B", text: "(5√2 − 10)/2" },
      { label: "C", text: "(5√2)/2 − 5" },
      { label: "D", text: "5√2/2 − 5/2" }
    ],
    correctAnswer: "A",
    explanation: "A line y = x + k can be written as x − y + k = 0. The distance from the center (2, −3) to this line must equal the radius 5 for tangency. Using the point-to-line distance formula: d = |1(2) + (−1)(−3) + k| / √(1² + (−1)²) = |2 + 3 + k| / √2 = |5 + k| / √2. Setting this equal to 5: |5 + k| / √2 = 5, so |5 + k| = 5√2. This gives 5 + k = 5√2 or 5 + k = −5√2. From the first equation: k = 5√2 − 5 ≈ 2.07. From the second: k = −5√2 − 5 ≈ −12.07. Since k > 0, k = 5√2 − 5.",
    tags: ["circle", "tangent-line", "distance-formula", "coordinate-geometry"],
    estimatedTime: 120
  },

  {
    id: "math-geometry-054",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In triangle PQR, angle Q is a right angle, PQ = 8, and QR = 15. Point S lies on segment PR such that QS is perpendicular to PR. What is the length of QS?",
    choices: [
      { label: "A", text: "120/17" },
      { label: "B", text: "60/17" },
      { label: "C", text: "8√15/17" },
      { label: "D", text: "15√8/17" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find PR using the Pythagorean theorem. PR = √(PQ² + QR²) = √(64 + 225) = √289 = 17. Step 2: The area of triangle PQR can be computed two ways. Using legs: Area = (1/2)(8)(15) = 60. Using hypotenuse and altitude: Area = (1/2)(PR)(QS) = (1/2)(17)(QS). Step 3: Setting these equal: 60 = (1/2)(17)(QS), so QS = 120/17. This is approximately 7.06.",
    tags: ["right-triangle", "altitude", "area", "pythagorean-theorem"],
    estimatedTime: 105
  },

  {
    id: "math-geometry-055",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A hemisphere with radius 6 sits on top of a right circular cylinder with the same radius and a height of 10. The entire solid is then submerged in a rectangular tank that is 20 units long, 15 units wide, and 25 units tall, which is initially filled with water to a height of 18 units. By how many units does the water level rise? (Use π ≈ 3.14 and round to the nearest hundredth.)",
    choices: [
      { label: "A", text: "4.15" },
      { label: "B", text: "5.28" },
      { label: "C", text: "4.90" },
      { label: "D", text: "5.03" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the volume of the hemisphere. V_hemisphere = (2/3)πr³ = (2/3)π(6³) = (2/3)π(216) = 144π. Step 2: Find the volume of the cylinder. V_cylinder = πr²h = π(6²)(10) = 360π. Step 3: Total volume of the solid = 144π + 360π = 504π. Step 4: The base area of the rectangular tank = 20 × 15 = 300 square units. Step 5: Rise in water level = Volume of solid / Base area of tank = 504π / 300 = 1.68π ≈ 1.68 × 3.14 ≈ 5.28 units. We verify the water doesn't overflow: 18 + 5.28 = 23.28, which is less than the tank height of 25.",
    tags: ["volume", "hemisphere", "cylinder", "composite-solid", "displacement"],
    estimatedTime: 150
  },

  {
    id: "math-geometry-056",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In the xy-plane, triangle ABC has vertices A(0, 0), B(10, 0), and C(4, 6). What is the length of the median from vertex C to the midpoint of side AB?",
    choices: [
      { label: "A", text: "√29" },
      { label: "B", text: "√37" },
      { label: "C", text: "√35" },
      { label: "D", text: "√61" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Find the midpoint M of AB. M = ((0 + 10)/2, (0 + 0)/2) = (5, 0). Step 2: Find the distance from C(4, 6) to M(5, 0). d = √[(5 − 4)² + (0 − 6)²] = √[1² + (−6)²] = √[1 + 36] = √37. The length of the median from C to the midpoint of AB is √37 ≈ 6.08.",
    tags: ["median", "triangle", "coordinate-geometry", "distance-formula"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-057",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "level5",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "Two concentric circles have radii 5 and 13. A chord of the larger circle is tangent to the smaller circle. What is the length of this chord?",
    choices: null,
    correctAnswer: "24",
    explanation: "Step 1: Draw the chord of the larger circle that is tangent to the smaller circle. The point of tangency is where the smaller circle touches the chord. A radius drawn to the point of tangency is perpendicular to the chord. Step 2: This creates a right triangle where the hypotenuse is the radius of the larger circle (13), one leg is the radius of the smaller circle (5), and the other leg is half the chord length. Step 3: By the Pythagorean theorem: half-chord = √(13² − 5²) = √(169 − 25) = √144 = 12. Step 4: The full chord length = 2 × 12 = 24.",
    tags: ["concentric-circles", "chord", "tangent", "pythagorean-theorem"],
    estimatedTime: 105
  },

  {
    id: "math-geometry-058",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In triangle ABC, angle C = 90°, AC = 5, and BC = 12. Point D lies on segment AB such that CD bisects angle ACB. What is the length of AD?",
    choices: [
      { label: "A", text: "65/17" },
      { label: "B", text: "60/17" },
      { label: "C", text: "5√2/2" },
      { label: "D", text: "25/17" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: Find AB using the Pythagorean theorem. AB = √(5² + 12²) = √(25 + 144) = √169 = 13. Step 2: By the angle bisector theorem, the bisector of angle C divides the opposite side AB in the ratio of the adjacent sides: AD/DB = AC/BC = 5/12. Step 3: Let AD = 5t and DB = 12t. Then AD + DB = AB gives 5t + 12t = 13, so 17t = 13, and t = 13/17. Step 4: AD = 5t = 5(13/17) = 65/17.",
    tags: ["angle-bisector-theorem", "right-triangle", "pythagorean-theorem"],
    estimatedTime: 120
  },

  {
    id: "math-geometry-059",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A regular hexagon has a side length of 6. What is the area of the hexagon?",
    choices: [
      { label: "A", text: "36√3" },
      { label: "B", text: "54√3" },
      { label: "C", text: "72√3" },
      { label: "D", text: "108√3" }
    ],
    correctAnswer: "B",
    explanation: "A regular hexagon can be divided into 6 equilateral triangles, each with side length equal to the hexagon's side length (6). The area of one equilateral triangle with side s is (√3/4)s². For s = 6: Area of one triangle = (√3/4)(36) = 9√3. Total area = 6 × 9√3 = 54√3. Alternatively, the formula for the area of a regular hexagon is A = (3√3/2)s² = (3√3/2)(36) = 54√3.",
    tags: ["area", "regular-hexagon", "equilateral-triangle"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-060",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In the xy-plane, the circle (x − 3)² + (y − 4)² = 25 intersects the x-axis at two points. What is the distance between these two x-intercepts?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "8" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "A",
    explanation: "Step 1: To find the x-intercepts, set y = 0 in the circle equation: (x − 3)² + (0 − 4)² = 25. Step 2: Simplify: (x − 3)² + 16 = 25, so (x − 3)² = 9. Step 3: Take the square root: x − 3 = ±3, giving x = 6 or x = 0. Step 4: The two x-intercepts are (0, 0) and (6, 0). The distance between them is |6 − 0| = 6.",
    tags: ["circle-equation", "x-intercepts", "coordinate-geometry"],
    estimatedTime: 90
  }

];
