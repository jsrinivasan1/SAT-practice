// SAT Math - Geometry & Trigonometry Questions
// 20 questions: 7 easy, 7 medium, 6 hard
// Subdomains: area-volume, angles-triangles, right-triangles, circles, coordinate-geometry, trigonometry

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-geometry'] = [

  // ── EASY (7 questions) ──────────────────────────────────────────────

  {
    id: "math-geometry-001",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A rectangle has a length of 12 inches and a width of 5 inches. What is the area of the rectangle, in square inches?",
    choices: [
      { label: "A", text: "17" },
      { label: "B", text: "34" },
      { label: "C", text: "60" },
      { label: "D", text: "120" }
    ],
    correctAnswer: "C",
    explanation: "The area of a rectangle is length times width. Area = 12 × 5 = 60 square inches. Choice A (17) is the result of adding 12 + 5. Choice B (34) is the perimeter, 2(12 + 5). Choice D (120) is double the correct area.",
    tags: ["area", "rectangle"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-002",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In triangle ABC, the measure of angle A is 50° and the measure of angle B is 65°. What is the measure of angle C?",
    choices: [
      { label: "A", text: "55°" },
      { label: "B", text: "65°" },
      { label: "C", text: "75°" },
      { label: "D", text: "115°" }
    ],
    correctAnswer: "B",
    explanation: "The sum of the interior angles of a triangle is 180°. Angle C = 180° − 50° − 65° = 65°. Therefore, the measure of angle C is 65°.",
    tags: ["angles", "triangle", "interior-angles"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-003",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A circle has a radius of 6 centimeters. What is the circumference of the circle?",
    choices: [
      { label: "A", text: "6π cm" },
      { label: "B", text: "12π cm" },
      { label: "C", text: "36π cm" },
      { label: "D", text: "144π cm" }
    ],
    correctAnswer: "B",
    explanation: "The circumference of a circle is C = 2πr. Substituting r = 6: C = 2π(6) = 12π centimeters. Choice A uses πr instead of 2πr. Choice C (36π) is the area, πr². Choice D uses π(2r)².",
    tags: ["circumference", "circle"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-004",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A right triangle has legs of length 3 and 4. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "7" },
      { label: "D", text: "12" }
    ],
    correctAnswer: "A",
    explanation: "By the Pythagorean theorem, c² = a² + b². So c² = 3² + 4² = 9 + 16 = 25. Therefore c = √25 = 5. This is the well-known 3-4-5 right triangle.",
    tags: ["pythagorean-theorem", "right-triangle"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-005",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A cube has an edge length of 4 inches. What is the volume of the cube, in cubic inches?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "48" },
      { label: "C", text: "64" },
      { label: "D", text: "96" }
    ],
    correctAnswer: "C",
    explanation: "The volume of a cube is V = s³, where s is the edge length. V = 4³ = 64 cubic inches. Choice A (16) is 4². Choice B (48) is the surface area divided by 2. Choice D (96) is the surface area, 6 × 4² = 96.",
    tags: ["volume", "cube"],
    estimatedTime: 30
  },

  {
    id: "math-geometry-006",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the distance between the points (1, 2) and (4, 6) in the coordinate plane?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "7" }
    ],
    correctAnswer: "C",
    explanation: "Use the distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²]. d = √[(4 − 1)² + (6 − 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.",
    tags: ["distance-formula", "coordinate-plane"],
    estimatedTime: 45
  },

  {
    id: "math-geometry-007",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Two parallel lines are cut by a transversal. One of the angles formed measures 130°. What is the measure of the alternate interior angle?",
    choices: [
      { label: "A", text: "40°" },
      { label: "B", text: "50°" },
      { label: "C", text: "130°" },
      { label: "D", text: "180°" }
    ],
    correctAnswer: "C",
    explanation: "When two parallel lines are cut by a transversal, alternate interior angles are congruent. Therefore, the alternate interior angle also measures 130°.",
    tags: ["parallel-lines", "transversal", "alternate-interior-angles"],
    estimatedTime: 30
  },

  // ── MEDIUM (7 questions) ────────────────────────────────────────────

  {
    id: "math-geometry-008",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A circle has an area of 49π square meters. A sector of this circle has a central angle of 90°. What is the area of the sector, in square meters?",
    choices: [
      { label: "A", text: "7π/2" },
      { label: "B", text: "49π/4" },
      { label: "C", text: "49π/2" },
      { label: "D", text: "7π" }
    ],
    correctAnswer: "B",
    explanation: "The area of the circle is 49π, so πr² = 49π, giving r = 7. A sector with a central angle of 90° is 90/360 = 1/4 of the full circle. Sector area = (1/4)(49π) = 49π/4 square meters.",
    tags: ["sector", "circle", "area"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-009",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A right circular cylinder has a radius of 3 inches and a height of 10 inches. What is the volume of the cylinder, in cubic inches?",
    choices: [
      { label: "A", text: "30π" },
      { label: "B", text: "60π" },
      { label: "C", text: "90π" },
      { label: "D", text: "100π" }
    ],
    correctAnswer: "C",
    explanation: "The volume of a cylinder is V = πr²h. Substituting r = 3 and h = 10: V = π(3²)(10) = π(9)(10) = 90π cubic inches.",
    tags: ["volume", "cylinder"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-010",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a right triangle, one of the acute angles measures 30°. If the side opposite this angle has a length of 8, what is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "8√2" },
      { label: "C", text: "8√3" },
      { label: "D", text: "16" }
    ],
    correctAnswer: "D",
    explanation: "In a right triangle, sin(θ) = opposite/hypotenuse. So sin(30°) = 8/hypotenuse. Since sin(30°) = 1/2, we get 1/2 = 8/hypotenuse, which gives hypotenuse = 16. Alternatively, in a 30-60-90 triangle the side opposite 30° is half the hypotenuse, so hypotenuse = 2 × 8 = 16.",
    tags: ["trigonometry", "30-60-90", "sine"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-011",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "What is the midpoint of the line segment with endpoints (−2, 7) and (6, 3)?",
    choices: [
      { label: "A", text: "(2, 5)" },
      { label: "B", text: "(4, 10)" },
      { label: "C", text: "(4, 5)" },
      { label: "D", text: "(2, 2)" }
    ],
    correctAnswer: "A",
    explanation: "The midpoint formula is ((x₁ + x₂)/2, (y₁ + y₂)/2). Midpoint = ((−2 + 6)/2, (7 + 3)/2) = (4/2, 10/2) = (2, 5).",
    tags: ["midpoint", "coordinate-plane"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-012",
    section: "math",
    domain: "geometry",
    subdomain: "right-triangles",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "In a 45-45-90 right triangle, the hypotenuse has a length of 10. What is the length of each leg? (Give your answer in simplified form as a decimal rounded to the nearest tenth.)",
    choices: null,
    correctAnswer: "7.1",
    explanation: "In a 45-45-90 triangle, the ratio of the sides is 1 : 1 : √2. If the hypotenuse is 10, then each leg = 10/√2 = 10√2/2 = 5√2. Calculating: 5√2 ≈ 5 × 1.4142 ≈ 7.071, which rounds to 7.1.",
    tags: ["45-45-90", "special-right-triangle"],
    estimatedTime: 75
  },

  {
    id: "math-geometry-013",
    section: "math",
    domain: "geometry",
    subdomain: "angles-triangles",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In triangle PQR, the exterior angle at vertex R measures 140°. If the measure of angle P is 55°, what is the measure of angle Q?",
    choices: [
      { label: "A", text: "40°" },
      { label: "B", text: "85°" },
      { label: "C", text: "95°" },
      { label: "D", text: "125°" }
    ],
    correctAnswer: "B",
    explanation: "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles. The exterior angle at R is 140°, so angle P + angle Q = 140°. Since angle P = 55°, angle Q = 140° − 55° = 85°. (We can verify: interior angle R = 180° − 140° = 40°, and 55° + 85° + 40° = 180°.)",
    tags: ["exterior-angle", "triangle"],
    estimatedTime: 60
  },

  {
    id: "math-geometry-014",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a right triangle, the side adjacent to an acute angle θ has length 5 and the hypotenuse has length 13. What is the value of tan(θ)?",
    choices: [
      { label: "A", text: "5/13" },
      { label: "B", text: "5/12" },
      { label: "C", text: "12/13" },
      { label: "D", text: "12/5" }
    ],
    correctAnswer: "D",
    explanation: "First, find the side opposite angle θ using the Pythagorean theorem: opposite = √(13² − 5²) = √(169 − 25) = √144 = 12. Then tan(θ) = opposite/adjacent = 12/5. This is a 5-12-13 right triangle.",
    tags: ["trigonometry", "tangent", "pythagorean-theorem"],
    estimatedTime: 75
  },

  // ── HARD (6 questions) ──────────────────────────────────────────────

  {
    id: "math-geometry-015",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A right circular cone has a slant height of 10 cm and a base radius of 6 cm. What is the volume of the cone, in cubic centimeters?",
    choices: [
      { label: "A", text: "48π" },
      { label: "B", text: "96π" },
      { label: "C", text: "120π" },
      { label: "D", text: "288π" }
    ],
    correctAnswer: "B",
    explanation: "First, find the height using the Pythagorean theorem with the slant height and radius: h = √(10² − 6²) = √(100 − 36) = √64 = 8 cm. The volume of a cone is V = (1/3)πr²h = (1/3)π(6²)(8) = (1/3)π(36)(8) = (1/3)(288π) = 96π cubic centimeters.",
    tags: ["volume", "cone", "pythagorean-theorem"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-016",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In the xy-plane, a circle has center (3, −2) and passes through the point (7, 1). What is the equation of this circle?",
    choices: [
      { label: "A", text: "(x − 3)² + (y + 2)² = 5" },
      { label: "B", text: "(x − 3)² + (y + 2)² = 25" },
      { label: "C", text: "(x + 3)² + (y − 2)² = 25" },
      { label: "D", text: "(x − 3)² + (y + 2)² = 7" }
    ],
    correctAnswer: "B",
    explanation: "The standard equation of a circle with center (h, k) and radius r is (x − h)² + (y − k)² = r². The center is (3, −2), so we need to find r. The radius equals the distance from the center to the point (7, 1): r = √[(7 − 3)² + (1 − (−2))²] = √[4² + 3²] = √[16 + 9] = √25 = 5. Therefore r² = 25, and the equation is (x − 3)² + (y + 2)² = 25.",
    tags: ["circle-equation", "coordinate-plane", "distance-formula"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-017",
    section: "math",
    domain: "geometry",
    subdomain: "trigonometry",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A ladder leans against a vertical wall, forming a 60° angle with the ground. If the foot of the ladder is 4 meters from the base of the wall, what is the length of the ladder, in meters?",
    choices: null,
    correctAnswer: "8",
    explanation: "Let L be the length of the ladder (the hypotenuse). The distance from the wall to the foot of the ladder is the side adjacent to the 60° angle. Using cosine: cos(60°) = adjacent/hypotenuse = 4/L. Since cos(60°) = 1/2, we get 1/2 = 4/L, so L = 8 meters.",
    tags: ["trigonometry", "cosine", "right-triangle"],
    estimatedTime: 75
  },

  {
    id: "math-geometry-018",
    section: "math",
    domain: "geometry",
    subdomain: "circles",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In a circle with radius 10, a chord is 8 units from the center of the circle. What is the length of the chord?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "12" },
      { label: "C", text: "6√2" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "B",
    explanation: "Draw a radius to each end of the chord and a perpendicular from the center to the chord. This perpendicular bisects the chord and creates a right triangle with the radius as hypotenuse (10), the perpendicular distance as one leg (8), and half the chord as the other leg. Half-chord = √(10² − 8²) = √(100 − 64) = √36 = 6. The full chord length = 2 × 6 = 12.",
    tags: ["chord", "circle", "pythagorean-theorem"],
    estimatedTime: 90
  },

  {
    id: "math-geometry-019",
    section: "math",
    domain: "geometry",
    subdomain: "area-volume",
    difficulty: "hard",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A sphere is inscribed in a cube with edge length 6. What is the volume of the space inside the cube but outside the sphere? (Use π ≈ 3.14 and round your answer to the nearest whole number.)",
    choices: null,
    correctAnswer: "103",
    explanation: "The sphere inscribed in a cube of edge length 6 has a diameter equal to the edge length, so the sphere's radius is 3. Volume of the cube = 6³ = 216. Volume of the sphere = (4/3)πr³ = (4/3)π(3³) = (4/3)π(27) = 36π. The space inside the cube but outside the sphere = 216 − 36π ≈ 216 − 36(3.14) = 216 − 113.04 = 102.96, which rounds to 103.",
    tags: ["volume", "sphere", "cube", "composite-solid"],
    estimatedTime: 105
  },

  {
    id: "math-geometry-020",
    section: "math",
    domain: "geometry",
    subdomain: "coordinate-geometry",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Triangle DEF has vertices D(0, 0), E(8, 0), and F(2, 6). What is the area of triangle DEF?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "24" },
      { label: "C", text: "30" },
      { label: "D", text: "48" }
    ],
    correctAnswer: "B",
    explanation: "Using the coordinate geometry area formula: Area = (1/2)|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|. Substituting D(0,0), E(8,0), F(2,6): Area = (1/2)|0(0 − 6) + 8(6 − 0) + 2(0 − 0)| = (1/2)|0 + 48 + 0| = (1/2)(48) = 24. Alternatively, using DE as the base: base = 8, height = 6 (the y-coordinate of F, since DE lies on the x-axis). Area = (1/2)(8)(6) = 24.",
    tags: ["area", "triangle", "coordinate-plane", "shoelace-formula"],
    estimatedTime: 90
  }

];
