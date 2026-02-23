// SAT Problem-Solving & Data Analysis Questions (Expanded)
// Domain: Data Analysis | 40 Questions | IDs: math-data-021 to math-data-060
// Distribution: 8 level1, 8 level2, 8 level3, 8 level4, 8 level5
// Subdomains: ratios-proportions, percentages, unit-conversion, scatterplots,
//             probability, statistics, linear-growth, exponential-growth
// Includes: 4 student-produced, 10 with tableData, 5 with passage

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-data-expanded'] = [

  // =============================================================================
  // LEVEL 1 — Foundation (~400-500) — 8 Questions
  // =============================================================================

  // ===== QUESTION 021 ===== [level1 | ratios-proportions | multiple-choice]
  {
    id: "math-data-021",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A bag contains 3 red marbles and 7 blue marbles. What fraction of the marbles are red?",
    choices: [
      { label: "A", text: "3/10" },
      { label: "B", text: "3/7" },
      { label: "C", text: "7/10" },
      { label: "D", text: "7/3" }
    ],
    correctAnswer: "A",
    explanation: "The total number of marbles is 3 + 7 = 10. The fraction that are red is the number of red marbles divided by the total: 3/10.",
    tags: ["ratios", "fractions", "basic"],
    estimatedTime: 20
  },

  // ===== QUESTION 022 ===== [level1 | percentages | multiple-choice]
  {
    id: "math-data-022",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A class has 40 students. If 60% of the students are girls, how many girls are in the class?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "20" },
      { label: "C", text: "24" },
      { label: "D", text: "30" }
    ],
    correctAnswer: "C",
    explanation: "To find 60% of 40, multiply: 0.60 * 40 = 24. There are 24 girls in the class.",
    tags: ["percentages", "basic"],
    estimatedTime: 20
  },

  // ===== QUESTION 023 ===== [level1 | statistics | multiple-choice | tableData]
  {
    id: "math-data-023",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Day", "Number of Books Sold"],
      rows: [
        ["Monday", "12"],
        ["Tuesday", "8"],
        ["Wednesday", "15"],
        ["Thursday", "10"],
        ["Friday", "20"]
      ]
    },
    stem: "The table above shows the number of books sold at a bookstore each day during one week. On which day were the most books sold?",
    choices: [
      { label: "A", text: "Monday" },
      { label: "B", text: "Wednesday" },
      { label: "C", text: "Thursday" },
      { label: "D", text: "Friday" }
    ],
    correctAnswer: "D",
    explanation: "Comparing the values in the table: Monday = 12, Tuesday = 8, Wednesday = 15, Thursday = 10, Friday = 20. The greatest value is 20, which occurred on Friday.",
    tags: ["statistics", "reading-table", "basic"],
    estimatedTime: 15
  },

  // ===== QUESTION 024 ===== [level1 | unit-conversion | multiple-choice]
  {
    id: "math-data-024",
    section: "math",
    domain: "data",
    subdomain: "unit-conversion",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "There are 12 inches in 1 foot. How many inches are in 5 feet?",
    choices: [
      { label: "A", text: "17" },
      { label: "B", text: "48" },
      { label: "C", text: "60" },
      { label: "D", text: "72" }
    ],
    correctAnswer: "C",
    explanation: "Since there are 12 inches in 1 foot, the number of inches in 5 feet is 12 * 5 = 60 inches.",
    tags: ["unit-conversion", "basic"],
    estimatedTime: 15
  },

  // ===== QUESTION 025 ===== [level1 | probability | multiple-choice]
  {
    id: "math-data-025",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A standard number cube has faces labeled 1 through 6. If the cube is rolled once, what is the probability of rolling an even number?",
    choices: [
      { label: "A", text: "1/6" },
      { label: "B", text: "1/3" },
      { label: "C", text: "1/2" },
      { label: "D", text: "2/3" }
    ],
    correctAnswer: "C",
    explanation: "The even numbers on a standard number cube are 2, 4, and 6. That is 3 favorable outcomes out of 6 total outcomes. The probability is 3/6 = 1/2.",
    tags: ["probability", "basic"],
    estimatedTime: 15
  },

  // ===== QUESTION 026 ===== [level1 | ratios-proportions | multiple-choice]
  {
    id: "math-data-026",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A fruit punch recipe uses 2 cups of orange juice for every 3 cups of cranberry juice. If you use 6 cups of orange juice, how many cups of cranberry juice do you need?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "7" },
      { label: "C", text: "9" },
      { label: "D", text: "12" }
    ],
    correctAnswer: "C",
    explanation: "The ratio of orange juice to cranberry juice is 2:3. If you use 6 cups of orange juice, you multiplied by 3 (since 6 / 2 = 3). So multiply the cranberry juice amount by the same factor: 3 * 3 = 9 cups.",
    tags: ["ratios", "proportions", "basic"],
    estimatedTime: 20
  },

  // ===== QUESTION 027 ===== [level1 | linear-growth | multiple-choice]
  {
    id: "math-data-027",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A taxi ride costs $3 plus $2 for each mile driven. What is the total cost, in dollars, of a 4-mile taxi ride?",
    choices: [
      { label: "A", text: "$8" },
      { label: "B", text: "$9" },
      { label: "C", text: "$10" },
      { label: "D", text: "$11" }
    ],
    correctAnswer: "D",
    explanation: "The total cost is the base fare plus the per-mile charge: $3 + $2(4) = $3 + $8 = $11.",
    tags: ["linear-growth", "basic", "modeling"],
    estimatedTime: 15
  },

  // ===== QUESTION 028 ===== [level1 | statistics | multiple-choice | tableData]
  {
    id: "math-data-028",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level1",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Student", "Test Score"],
      rows: [
        ["Anna", "85"],
        ["Ben", "90"],
        ["Cara", "78"],
        ["Dan", "92"],
        ["Eva", "80"]
      ]
    },
    stem: "The table above shows the test scores of 5 students. What is the mean (average) test score?",
    choices: [
      { label: "A", text: "83" },
      { label: "B", text: "85" },
      { label: "C", text: "86" },
      { label: "D", text: "88" }
    ],
    correctAnswer: "B",
    explanation: "The mean is the sum of all scores divided by the number of scores. Sum = 85 + 90 + 78 + 92 + 80 = 425. Mean = 425 / 5 = 85.",
    tags: ["statistics", "mean", "basic"],
    estimatedTime: 25
  },

  // =============================================================================
  // LEVEL 2 — Developing (~500-580) — 8 Questions
  // =============================================================================

  // ===== QUESTION 029 ===== [level2 | percentages | multiple-choice]
  {
    id: "math-data-029",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A shirt originally costs $40 and is on sale for 25% off. What is the sale price of the shirt?",
    choices: [
      { label: "A", text: "$10" },
      { label: "B", text: "$15" },
      { label: "C", text: "$30" },
      { label: "D", text: "$35" }
    ],
    correctAnswer: "C",
    explanation: "A 25% discount on $40 means the discount amount is 0.25 * $40 = $10. The sale price is $40 - $10 = $30.",
    tags: ["percentages", "discount", "percent-decrease"],
    estimatedTime: 25
  },

  // ===== QUESTION 030 ===== [level2 | ratios-proportions | multiple-choice]
  {
    id: "math-data-030",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A car uses 4 gallons of gasoline to travel 120 miles. At this rate, how many gallons of gasoline would the car use to travel 450 miles?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "15" },
      { label: "C", text: "16" },
      { label: "D", text: "18" }
    ],
    correctAnswer: "B",
    explanation: "Set up a proportion: 4 gallons / 120 miles = x gallons / 450 miles. Cross-multiply: 120x = 4 * 450 = 1,800. Divide both sides by 120: x = 1,800 / 120 = 15 gallons.",
    tags: ["ratios", "proportions", "rate"],
    estimatedTime: 30
  },

  // ===== QUESTION 031 ===== [level2 | probability | multiple-choice | tableData]
  {
    id: "math-data-031",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Color", "Number of Shirts"],
      rows: [
        ["Red", "5"],
        ["Blue", "8"],
        ["Green", "3"],
        ["White", "4"]
      ]
    },
    stem: "The table above shows the number of shirts of each color in a drawer. If one shirt is selected at random, what is the probability that it is blue?",
    choices: [
      { label: "A", text: "8/20" },
      { label: "B", text: "8/12" },
      { label: "C", text: "5/20" },
      { label: "D", text: "3/20" }
    ],
    correctAnswer: "A",
    explanation: "The total number of shirts is 5 + 8 + 3 + 4 = 20. The number of blue shirts is 8. The probability of selecting a blue shirt is 8/20, which simplifies to 2/5.",
    tags: ["probability", "basic-probability", "table"],
    estimatedTime: 25
  },

  // ===== QUESTION 032 ===== [level2 | percentages | multiple-choice]
  {
    id: "math-data-032",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The population of a town increased from 8,000 to 9,200 over one year. What was the percent increase in the population?",
    choices: [
      { label: "A", text: "12%" },
      { label: "B", text: "13%" },
      { label: "C", text: "15%" },
      { label: "D", text: "17%" }
    ],
    correctAnswer: "C",
    explanation: "The increase in population is 9,200 - 8,000 = 1,200. The percent increase is (increase / original) * 100 = (1,200 / 8,000) * 100 = 0.15 * 100 = 15%.",
    tags: ["percentages", "percent-increase"],
    estimatedTime: 30
  },

  // ===== QUESTION 033 ===== [level2 | unit-conversion | multiple-choice]
  {
    id: "math-data-033",
    section: "math",
    domain: "data",
    subdomain: "unit-conversion",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A recipe calls for 2.5 liters of milk. If 1 liter is approximately 4.23 cups, approximately how many cups of milk does the recipe require?",
    choices: [
      { label: "A", text: "8.5" },
      { label: "B", text: "9.2" },
      { label: "C", text: "10.6" },
      { label: "D", text: "11.8" }
    ],
    correctAnswer: "C",
    explanation: "Multiply the number of liters by the conversion factor: 2.5 liters * 4.23 cups/liter = 10.575 cups, which is approximately 10.6 cups.",
    tags: ["unit-conversion", "multiplication"],
    estimatedTime: 25
  },

  // ===== QUESTION 034 ===== [level2 | statistics | student-produced | tableData]
  {
    id: "math-data-034",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level2",
    type: "student-produced",
    passage: null,
    tableData: {
      headers: ["Value", "Frequency"],
      rows: [
        ["2", "3"],
        ["4", "5"],
        ["6", "2"],
        ["8", "4"],
        ["10", "1"]
      ]
    },
    stem: "The table above shows a frequency distribution. What is the median of this data set?",
    choices: null,
    correctAnswer: "4",
    explanation: "The total number of data points is 3 + 5 + 2 + 4 + 1 = 15. Since 15 is odd, the median is the value in position (15 + 1) / 2 = 8th position. Counting cumulatively: values of 2 occupy positions 1-3, values of 4 occupy positions 4-8. The 8th value falls in the group with value 4. Therefore, the median is 4.",
    tags: ["statistics", "median", "frequency-table"],
    estimatedTime: 40
  },

  // ===== QUESTION 035 ===== [level2 | linear-growth | multiple-choice]
  {
    id: "math-data-035",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A swimming pool is being filled at a constant rate. At 10:00 AM, the pool contains 200 gallons of water. At 10:30 AM, the pool contains 350 gallons. At what rate, in gallons per hour, is the pool being filled?",
    choices: [
      { label: "A", text: "150" },
      { label: "B", text: "200" },
      { label: "C", text: "300" },
      { label: "D", text: "350" }
    ],
    correctAnswer: "C",
    explanation: "In 30 minutes, the pool gained 350 - 200 = 150 gallons. Since 30 minutes is half an hour, the rate per hour is 150 * 2 = 300 gallons per hour.",
    tags: ["linear-growth", "rate", "modeling"],
    estimatedTime: 30
  },

  // ===== QUESTION 036 ===== [level2 | exponential-growth | multiple-choice]
  {
    id: "math-data-036",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "level2",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A colony of 100 bacteria triples in number every hour. How many bacteria are in the colony after 3 hours?",
    choices: [
      { label: "A", text: "300" },
      { label: "B", text: "900" },
      { label: "C", text: "2,700" },
      { label: "D", text: "8,100" }
    ],
    correctAnswer: "C",
    explanation: "The number of bacteria after t hours is given by 100 * 3^t. After 3 hours: 100 * 3^3 = 100 * 27 = 2,700 bacteria.",
    tags: ["exponential-growth", "bacteria", "basic"],
    estimatedTime: 30
  },

  // =============================================================================
  // LEVEL 3 — Proficient (~580-660) — 8 Questions
  // =============================================================================

  // ===== QUESTION 037 ===== [level3 | statistics | multiple-choice | tableData]
  {
    id: "math-data-037",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Age Group", "Number of Participants", "Mean Score"],
      rows: [
        ["18-25", "40", "72"],
        ["26-35", "60", "78"],
        ["36-45", "50", "83"]
      ]
    },
    stem: "The table above shows data from a survey. What is the overall mean score for all 150 participants combined?",
    choices: [
      { label: "A", text: "77.0" },
      { label: "B", text: "77.7" },
      { label: "C", text: "78.1" },
      { label: "D", text: "78.5" }
    ],
    correctAnswer: "C",
    explanation: "To find the overall mean, compute the weighted average. Total score sum = (40 * 72) + (60 * 78) + (50 * 83) = 2,880 + 4,680 + 4,150 = 11,710. Total participants = 40 + 60 + 50 = 150. Overall mean = 11,710 / 150 = 78.0667, which rounds to 78.1.",
    tags: ["statistics", "weighted-mean", "multi-step"],
    estimatedTime: 60
  },

  // ===== QUESTION 038 ===== [level3 | probability | multiple-choice | tableData]
  {
    id: "math-data-038",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["", "Male", "Female", "Total"],
      rows: [
        ["Prefers Tea", "18", "27", "45"],
        ["Prefers Coffee", "32", "23", "55"],
        ["Total", "50", "50", "100"]
      ]
    },
    stem: "The table above shows the beverage preferences of 100 people surveyed. Given that a randomly selected person is female, what is the probability that the person prefers tea?",
    choices: [
      { label: "A", text: "27/100" },
      { label: "B", text: "27/45" },
      { label: "C", text: "27/50" },
      { label: "D", text: "45/100" }
    ],
    correctAnswer: "C",
    explanation: "This is a conditional probability question: P(Prefers Tea | Female). The condition restricts the sample space to the 50 females. Of these 50 females, 27 prefer tea. So P(Prefers Tea | Female) = 27/50.",
    tags: ["probability", "conditional-probability", "two-way-table"],
    estimatedTime: 45
  },

  // ===== QUESTION 039 ===== [level3 | scatterplots | multiple-choice]
  {
    id: "math-data-039",
    section: "math",
    domain: "data",
    subdomain: "scatterplots",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A line of best fit for a scatterplot is given by y = -0.8x + 50, where x represents the temperature in degrees Celsius and y represents the number of hot chocolate cups sold per day. According to this model, what is the predicted decrease in the number of cups sold for each 5-degree increase in temperature?",
    choices: [
      { label: "A", text: "0.8" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "8" }
    ],
    correctAnswer: "B",
    explanation: "The slope of the line is -0.8, which means for each 1-degree increase in temperature, the number of cups sold decreases by 0.8. For a 5-degree increase, the decrease is 0.8 * 5 = 4 cups.",
    tags: ["scatterplots", "slope", "line-of-best-fit", "interpretation"],
    estimatedTime: 40
  },

  // ===== QUESTION 040 ===== [level3 | percentages | multiple-choice]
  {
    id: "math-data-040",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "In 2022, a company had revenue of $450,000. In 2023, revenue increased by 20%. In 2024, revenue decreased by 10% from the 2023 amount. What was the company's revenue in 2024?",
    choices: [
      { label: "A", text: "$445,500" },
      { label: "B", text: "$486,000" },
      { label: "C", text: "$495,000" },
      { label: "D", text: "$504,000" }
    ],
    correctAnswer: "B",
    explanation: "Revenue in 2023: $450,000 * 1.20 = $540,000. Revenue in 2024: $540,000 * 0.90 = $486,000. Note that a 20% increase followed by a 10% decrease is not the same as a net 10% increase. The net change factor is 1.20 * 0.90 = 1.08, which represents an 8% increase overall.",
    tags: ["percentages", "successive-changes", "multi-step"],
    estimatedTime: 50
  },

  // ===== QUESTION 041 ===== [level3 | ratios-proportions | multiple-choice | passage]
  {
    id: "math-data-041",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "level3",
    type: "multiple-choice",
    passage: "A researcher measures the concentration of a chemical solution by dissolving a solute in a solvent. In Solution A, 15 grams of solute are dissolved in 500 milliliters of solvent. In Solution B, 24 grams of the same solute are dissolved in 750 milliliters of solvent.",
    tableData: null,
    stem: "Which solution has the greater concentration, and by how much more solute per 100 milliliters does it contain?",
    choices: [
      { label: "A", text: "Solution A, by 0.20 grams per 100 mL" },
      { label: "B", text: "Solution B, by 0.20 grams per 100 mL" },
      { label: "C", text: "Solution A, by 0.80 grams per 100 mL" },
      { label: "D", text: "Solution B, by 0.80 grams per 100 mL" }
    ],
    correctAnswer: "B",
    explanation: "Concentration of Solution A: 15 g / 500 mL = 0.03 g/mL, or 3.00 g per 100 mL. Concentration of Solution B: 24 g / 750 mL = 0.032 g/mL, or 3.20 g per 100 mL. Solution B has the greater concentration. The difference is 3.20 - 3.00 = 0.20 grams per 100 mL.",
    tags: ["ratios", "proportions", "concentration", "rates"],
    estimatedTime: 55
  },

  // ===== QUESTION 042 ===== [level3 | exponential-growth | multiple-choice]
  {
    id: "math-data-042",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The value of a car depreciates by 15% each year. If the car is worth $20,000 today, which expression represents the value of the car, in dollars, after n years?",
    choices: [
      { label: "A", text: "20,000(0.15)^n" },
      { label: "B", text: "20,000(0.85)^n" },
      { label: "C", text: "20,000(1.15)^n" },
      { label: "D", text: "20,000 - 0.15n" }
    ],
    correctAnswer: "B",
    explanation: "When a value depreciates by 15% each year, it retains 100% - 15% = 85% of its value each year. The decay factor is 0.85. The value after n years is 20,000(0.85)^n. Choice A uses only the rate of decrease as the base. Choice C would represent 15% growth. Choice D represents linear decrease, not exponential depreciation.",
    tags: ["exponential-growth", "depreciation", "decay", "modeling"],
    estimatedTime: 45
  },

  // ===== QUESTION 043 ===== [level3 | unit-conversion | student-produced]
  {
    id: "math-data-043",
    section: "math",
    domain: "data",
    subdomain: "unit-conversion",
    difficulty: "level3",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A runner completes a 10-kilometer race in 48 minutes. What was the runner's average speed, in miles per hour, to the nearest tenth? (1 mile = 1.609 kilometers)",
    choices: null,
    correctAnswer: "7.8",
    explanation: "First, convert 10 kilometers to miles: 10 / 1.609 = 6.214 miles. Next, convert 48 minutes to hours: 48 / 60 = 0.8 hours. Average speed = distance / time = 6.214 / 0.8 = 7.768 miles per hour, which rounds to 7.8 miles per hour.",
    tags: ["unit-conversion", "rate", "dimensional-analysis"],
    estimatedTime: 55
  },

  // ===== QUESTION 044 ===== [level3 | linear-growth | multiple-choice | tableData]
  {
    id: "math-data-044",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "level3",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Month", "Total Sales (units)"],
      rows: [
        ["1", "140"],
        ["2", "185"],
        ["3", "230"],
        ["4", "275"],
        ["5", "320"]
      ]
    },
    stem: "The table above shows the total number of units sold by a company during each of its first 5 months in business. If this linear trend continues, during which month will total sales first exceed 500 units?",
    choices: [
      { label: "A", text: "Month 8" },
      { label: "B", text: "Month 9" },
      { label: "C", text: "Month 10" },
      { label: "D", text: "Month 11" }
    ],
    correctAnswer: "C",
    explanation: "The data increases by 45 units each month (185 - 140 = 45, 230 - 185 = 45, etc.). Continuing the pattern: Month 6 = 365, Month 7 = 410, Month 8 = 455, Month 9 = 500, Month 10 = 545. The question asks when sales first exceed (are strictly greater than) 500. Month 9 gives exactly 500, which does not exceed 500. Month 10 = 545, which is the first month where sales exceed 500.",
    tags: ["linear-growth", "prediction", "trend", "table"],
    estimatedTime: 55
  },

  // =============================================================================
  // LEVEL 4 — Advanced (~660-730) — 8 Questions
  // =============================================================================

  // ===== QUESTION 045 ===== [level4 | statistics | multiple-choice | passage]
  {
    id: "math-data-045",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level4",
    type: "multiple-choice",
    passage: "A researcher surveyed a random sample of 500 registered voters in a city with 40,000 registered voters. The survey found that 56% of respondents supported a new bond measure, with a margin of error of plus or minus 3.5 percentage points at the 95% confidence level.",
    tableData: null,
    stem: "Which of the following is the best interpretation of the survey results?",
    choices: [
      { label: "A", text: "Exactly 56% of all registered voters in the city support the bond measure." },
      { label: "B", text: "Between 52.5% and 59.5% of the sample surveyed support the bond measure." },
      { label: "C", text: "It is plausible that between 52.5% and 59.5% of all registered voters in the city support the bond measure." },
      { label: "D", text: "If the survey were repeated, 95% of respondents would say they support the bond measure." }
    ],
    correctAnswer: "C",
    explanation: "The margin of error creates a confidence interval: 56% plus or minus 3.5% gives a range of 52.5% to 59.5%. At the 95% confidence level, this means we can be reasonably confident that the true proportion of all registered voters who support the bond measure lies within this interval. Choice A is too definitive. Choice B applies the interval to the sample rather than the population. Choice D misinterprets the confidence level.",
    tags: ["statistics", "margin-of-error", "confidence-interval", "interpretation"],
    estimatedTime: 60
  },

  // ===== QUESTION 046 ===== [level4 | scatterplots | multiple-choice]
  {
    id: "math-data-046",
    section: "math",
    domain: "data",
    subdomain: "scatterplots",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A researcher collects data on the relationship between hours of sunlight and crop yield. The line of best fit is y = 3.2x + 18, where x is the daily hours of sunlight and y is the yield in bushels per acre. For one data point where x = 10, the actual yield was 54 bushels per acre. What is the residual for this data point?",
    choices: [
      { label: "A", text: "-4" },
      { label: "B", text: "-2" },
      { label: "C", text: "2" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "D",
    explanation: "The residual is defined as actual value minus predicted value. The predicted value when x = 10 is y = 3.2(10) + 18 = 32 + 18 = 50 bushels per acre. The actual value is 54 bushels per acre. Residual = 54 - 50 = 4. A positive residual means the actual value is above the line of best fit.",
    tags: ["scatterplots", "residual", "line-of-best-fit"],
    estimatedTime: 45
  },

  // ===== QUESTION 047 ===== [level4 | statistics | multiple-choice | passage]
  {
    id: "math-data-047",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level4",
    type: "multiple-choice",
    passage: "A pharmaceutical company tested a new drug on two groups. Group A (100 participants) received the drug, and Group B (100 participants) received a placebo. The participants were assigned to groups based on which clinic they visited. In Group A, 68 participants showed improvement. In Group B, 52 participants showed improvement.",
    tableData: null,
    stem: "Which of the following is a valid concern about the design of this study?",
    choices: [
      { label: "A", text: "The sample size is too small to detect any difference." },
      { label: "B", text: "The study was not double-blind, so participants may have known which treatment they received." },
      { label: "C", text: "Because participants were assigned based on which clinic they visited rather than randomly, there may be confounding variables." },
      { label: "D", text: "The study should have included a third group that received no treatment at all." }
    ],
    correctAnswer: "C",
    explanation: "The key issue is that participants were not randomly assigned to groups. Instead, assignment was based on which clinic they visited, which means the groups may systematically differ in ways other than the treatment (for example, demographics, health status, or socioeconomic factors). These confounding variables could explain the difference in outcomes rather than the drug itself. Random assignment is essential for establishing a causal relationship.",
    tags: ["statistics", "experimental-design", "confounding-variables", "random-assignment"],
    estimatedTime: 60
  },

  // ===== QUESTION 048 ===== [level4 | probability | multiple-choice | tableData]
  {
    id: "math-data-048",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["", "Graduated", "Did Not Graduate", "Total"],
      rows: [
        ["Received Tutoring", "45", "5", "50"],
        ["No Tutoring", "110", "40", "150"],
        ["Total", "155", "45", "200"]
      ]
    },
    stem: "The table above shows data on 200 students at a university. A student is selected at random. If the student graduated, what is the probability that the student received tutoring? Is this probability greater or less than the overall probability of receiving tutoring?",
    choices: [
      { label: "A", text: "45/155, which is greater than 50/200" },
      { label: "B", text: "45/155, which is less than 50/200" },
      { label: "C", text: "45/50, which is greater than 155/200" },
      { label: "D", text: "45/200, which is less than 50/200" }
    ],
    correctAnswer: "A",
    explanation: "P(Received Tutoring | Graduated) = 45/155. The overall P(Received Tutoring) = 50/200 = 1/4 = 0.25. Now compare: 45/155 = 0.2903, which is greater than 0.25. This means that among graduates, a higher proportion received tutoring than in the overall population, suggesting a positive association between tutoring and graduation.",
    tags: ["probability", "conditional-probability", "association", "two-way-table"],
    estimatedTime: 70
  },

  // ===== QUESTION 049 ===== [level4 | exponential-growth | student-produced]
  {
    id: "math-data-049",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "level4",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "A radioactive substance has a half-life of 4 years. If a sample initially contains 240 grams of the substance, how many grams remain after 12 years?",
    choices: null,
    correctAnswer: "30",
    explanation: "The half-life is 4 years, so in 12 years there are 12 / 4 = 3 half-life periods. After each half-life, the amount is halved. After 1 half-life (4 years): 240 / 2 = 120 grams. After 2 half-lives (8 years): 120 / 2 = 60 grams. After 3 half-lives (12 years): 60 / 2 = 30 grams. Alternatively, 240 * (1/2)^3 = 240 * (1/8) = 30 grams.",
    tags: ["exponential-growth", "half-life", "decay"],
    estimatedTime: 50
  },

  // ===== QUESTION 050 ===== [level4 | statistics | multiple-choice]
  {
    id: "math-data-050",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Data set X has a mean of 50 and a standard deviation of 5. Data set Y has a mean of 50 and a standard deviation of 12. Which of the following must be true?",
    choices: [
      { label: "A", text: "Data set X and data set Y have the same median." },
      { label: "B", text: "Data set X has more data points closer to the mean than data set Y." },
      { label: "C", text: "Data set Y has a larger range than data set X." },
      { label: "D", text: "Data set Y has more variability in its values than data set X." }
    ],
    correctAnswer: "D",
    explanation: "Standard deviation measures the spread or variability of data around the mean. Since data set Y has a standard deviation of 12 compared to data set X's standard deviation of 5, data set Y has greater variability. Choice A is not necessarily true because equal means do not guarantee equal medians. Choice B is likely but not guaranteed in all cases. Choice C is not necessarily true because range and standard deviation are different measures and a larger standard deviation does not guarantee a larger range in every case. Choice D must be true by definition of standard deviation.",
    tags: ["statistics", "standard-deviation", "variability", "comparison"],
    estimatedTime: 55
  },

  // ===== QUESTION 051 ===== [level4 | ratios-proportions | multiple-choice]
  {
    id: "math-data-051",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A scale model of a building is built at a ratio of 1:150. In the model, the building is 8 inches tall and a window is 0.12 inches wide. What is the actual width of the window, in feet? (12 inches = 1 foot)",
    choices: [
      { label: "A", text: "1.25" },
      { label: "B", text: "1.50" },
      { label: "C", text: "1.75" },
      { label: "D", text: "2.00" }
    ],
    correctAnswer: "B",
    explanation: "The scale ratio is 1:150, so actual dimensions are 150 times the model dimensions. The actual window width in inches is 0.12 * 150 = 18 inches. Convert to feet: 18 / 12 = 1.50 feet.",
    tags: ["ratios", "proportions", "scale-model", "unit-conversion"],
    estimatedTime: 45
  },

  // ===== QUESTION 052 ===== [level4 | linear-growth | multiple-choice]
  {
    id: "math-data-052",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "level4",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "Company A charges a monthly fee of $120 plus $0.05 per text message. Company B charges a monthly fee of $80 plus $0.10 per text message. For what number of text messages in a month would the total cost be the same for both companies?",
    choices: [
      { label: "A", text: "400" },
      { label: "B", text: "600" },
      { label: "C", text: "800" },
      { label: "D", text: "1,000" }
    ],
    correctAnswer: "C",
    explanation: "Let t be the number of text messages. Company A's cost: 120 + 0.05t. Company B's cost: 80 + 0.10t. Set them equal: 120 + 0.05t = 80 + 0.10t. Subtract 0.05t from both sides: 120 = 80 + 0.05t. Subtract 80: 40 = 0.05t. Divide by 0.05: t = 800 text messages.",
    tags: ["linear-growth", "systems-of-equations", "break-even"],
    estimatedTime: 50
  },

  // =============================================================================
  // LEVEL 5 — Expert (~730-800) — 8 Questions
  // =============================================================================

  // ===== QUESTION 053 ===== [level5 | statistics | multiple-choice | passage]
  {
    id: "math-data-053",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level5",
    type: "multiple-choice",
    passage: "A medical researcher conducted a study with 400 participants to test a new treatment for migraines. The participants were randomly assigned to either the treatment group (200 people) or the control group (200 people). In the treatment group, 130 participants reported fewer migraines. In the control group, 90 participants reported fewer migraines. The 95% confidence interval for the difference in proportions (treatment minus control) was (0.10, 0.30).",
    tableData: null,
    stem: "Based on the study results, which of the following conclusions is best supported?",
    choices: [
      { label: "A", text: "The treatment causes a reduction in migraines for exactly 20% more people compared to the control." },
      { label: "B", text: "There is convincing evidence that the treatment is associated with a higher proportion of participants reporting fewer migraines than the control." },
      { label: "C", text: "If the study were repeated, exactly 65% of the treatment group would report fewer migraines." },
      { label: "D", text: "The treatment is effective for all migraine sufferers in the general population." }
    ],
    correctAnswer: "B",
    explanation: "The 95% confidence interval for the difference in proportions is (0.10, 0.30), which does not contain 0. This means we can be reasonably confident that the treatment group had a genuinely higher proportion of improvement than the control group. Because participants were randomly assigned, we can support a causal claim within the study population. Choice A is too specific (20% is the point estimate, not an exact value). Choice C misinterprets the results as fixed. Choice D overgeneralizes to all migraine sufferers.",
    tags: ["statistics", "confidence-interval", "experimental-design", "inference"],
    estimatedTime: 80
  },

  // ===== QUESTION 054 ===== [level5 | probability | multiple-choice | tableData]
  {
    id: "math-data-054",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["", "Tests Positive", "Tests Negative", "Total"],
      rows: [
        ["Has Disease", "95", "5", "100"],
        ["No Disease", "45", "855", "900"],
        ["Total", "140", "860", "1000"]
      ]
    },
    stem: "The table above shows the results of a diagnostic test for 1,000 patients. If a patient tests positive, what is the probability that the patient actually has the disease?",
    choices: [
      { label: "A", text: "95/100" },
      { label: "B", text: "95/140" },
      { label: "C", text: "95/1000" },
      { label: "D", text: "140/1000" }
    ],
    correctAnswer: "B",
    explanation: "This is a conditional probability question asking for P(Has Disease | Tests Positive). The condition restricts the sample space to the 140 patients who tested positive. Of those 140, only 95 actually have the disease. Therefore P(Has Disease | Tests Positive) = 95/140 = 19/28, which is approximately 0.679 or 67.9%. This is the positive predictive value of the test. Note that although the test is highly sensitive (95/100 = 95%), the positive predictive value is only about 68% because there are many false positives among the larger disease-free population.",
    tags: ["probability", "conditional-probability", "false-positive", "positive-predictive-value"],
    estimatedTime: 75
  },

  // ===== QUESTION 055 ===== [level5 | statistics | multiple-choice]
  {
    id: "math-data-055",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A data set of 20 values has a mean of 60 and a median of 55. One additional value of 120 is added to the data set. Which of the following correctly describes the effect on the mean and median?",
    choices: [
      { label: "A", text: "Both the mean and median increase." },
      { label: "B", text: "The mean increases but the median stays the same or increases by a small amount." },
      { label: "C", text: "The mean stays the same but the median increases." },
      { label: "D", text: "Both the mean and median stay the same." }
    ],
    correctAnswer: "B",
    explanation: "For the mean: The original sum is 20 * 60 = 1,200. The new sum is 1,200 + 120 = 1,320. The new mean is 1,320 / 21 = 62.86, which is greater than 60. So the mean increases. For the median: The original median is the average of the 10th and 11th values (since n = 20). With 21 values, the new median is the 11th value. Since 120 is added at the high end of the data, the positions of the lower values shift slightly: the original 11th value becomes the new 11th value (or the original 10th value shifts to 11th position, depending on the data). In either case, the median either stays the same or increases by a small amount, but it does not decrease. The median changes far less dramatically than the mean because 120 is an extreme value.",
    tags: ["statistics", "mean", "median", "outlier", "effect-of-adding-data"],
    estimatedTime: 75
  },

  // ===== QUESTION 056 ===== [level5 | scatterplots | multiple-choice]
  {
    id: "math-data-056",
    section: "math",
    domain: "data",
    subdomain: "scatterplots",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A researcher fits both a linear model (y = 2.1x + 15) and an exponential model (y = 16.2 * 1.08^x) to a set of data, where x represents years since 2010 and y represents revenue in thousands of dollars. For x = 5, the linear model predicts y = 25.5 and the exponential model predicts y = 23.8. The actual value is y = 24. For x = 15, the linear model predicts y = 46.5 and the exponential model predicts y = 51.4. The actual value is y = 50. Which model is more appropriate for predicting revenue at x = 20, and what is the predicted revenue?",
    choices: [
      { label: "A", text: "Linear model; $57,000" },
      { label: "B", text: "Exponential model; $75,500" },
      { label: "C", text: "Linear model; $75,500" },
      { label: "D", text: "Exponential model; $57,000" }
    ],
    correctAnswer: "B",
    explanation: "At x = 5: Linear residual = |25.5 - 24| = 1.5; Exponential residual = |23.8 - 24| = 0.2. At x = 15: Linear residual = |46.5 - 50| = 3.5; Exponential residual = |51.4 - 50| = 1.4. The exponential model has smaller residuals at both data points and the linear model's residuals are growing, suggesting the data is curving upward. The exponential model is more appropriate. At x = 20: y = 16.2 * 1.08^20. Calculate 1.08^20: 1.08^10 = 2.1589, so 1.08^20 = (2.1589)^2 = 4.6609. Thus y = 16.2 * 4.6609 = 75.5 (thousands), or approximately $75,500.",
    tags: ["scatterplots", "model-comparison", "exponential-vs-linear", "residuals"],
    estimatedTime: 100
  },

  // ===== QUESTION 057 ===== [level5 | probability | multiple-choice]
  {
    id: "math-data-057",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A jar contains 5 red, 4 blue, and 3 green marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are the same color?",
    choices: [
      { label: "A", text: "19/66" },
      { label: "B", text: "25/72" },
      { label: "C", text: "50/144" },
      { label: "D", text: "19/72" }
    ],
    correctAnswer: "A",
    explanation: "Total marbles = 5 + 4 + 3 = 12. P(both red) = (5/12)(4/11) = 20/132. P(both blue) = (4/12)(3/11) = 12/132. P(both green) = (3/12)(2/11) = 6/132. P(both same color) = 20/132 + 12/132 + 6/132 = 38/132 = 19/66.",
    tags: ["probability", "without-replacement", "compound-events"],
    estimatedTime: 75
  },

  // ===== QUESTION 058 ===== [level5 | statistics | student-produced | passage]
  {
    id: "math-data-058",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "level5",
    type: "student-produced",
    passage: "A quality control inspector tests a random sample of 80 light bulbs from a production run of 5,000 bulbs. In the sample, 6 bulbs are found to be defective.",
    tableData: null,
    stem: "Based on these results, what is the best estimate of the total number of defective bulbs in the entire production run of 5,000?",
    choices: null,
    correctAnswer: "375",
    explanation: "The sample defect rate is 6/80 = 0.075, or 7.5%. Applying this proportion to the full production run: 0.075 * 5,000 = 375 defective bulbs.",
    tags: ["statistics", "proportion", "estimation", "sampling"],
    estimatedTime: 50
  },

  // ===== QUESTION 059 ===== [level5 | exponential-growth | multiple-choice]
  {
    id: "math-data-059",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The population of City A is 200,000 and is growing at 3% per year. The population of City B is 350,000 and is declining at 2% per year. Which of the following expressions, when set equal to each other, can be used to find the number of years t until both cities have the same population?",
    choices: [
      { label: "A", text: "200,000(1.03)^t = 350,000(0.98)^t" },
      { label: "B", text: "200,000(0.03)^t = 350,000(0.02)^t" },
      { label: "C", text: "200,000 + 0.03t = 350,000 - 0.02t" },
      { label: "D", text: "200,000(1.3)^t = 350,000(0.8)^t" }
    ],
    correctAnswer: "A",
    explanation: "City A grows at 3% per year, so its population after t years is 200,000(1.03)^t. City B declines at 2% per year, so its population after t years is 350,000(1 - 0.02)^t = 350,000(0.98)^t. Setting them equal gives 200,000(1.03)^t = 350,000(0.98)^t. Choice B uses only the growth rates as bases instead of the growth factors. Choice C models linear growth/decline instead of exponential. Choice D uses incorrect growth factors (1.3 and 0.8 instead of 1.03 and 0.98).",
    tags: ["exponential-growth", "exponential-decay", "modeling", "population"],
    estimatedTime: 70
  },

  // ===== QUESTION 060 ===== [level5 | percentages | multiple-choice | tableData]
  {
    id: "math-data-060",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "level5",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Year", "Product A Revenue ($)", "Product B Revenue ($)", "Total Revenue ($)"],
      rows: [
        ["2021", "300,000", "200,000", "500,000"],
        ["2022", "330,000", "250,000", "580,000"],
        ["2023", "360,000", "320,000", "680,000"]
      ]
    },
    stem: "The table above shows revenue data for a company's two products over three years. Although Product A's revenue increased each year, its percentage of total revenue decreased. By approximately how many percentage points did Product A's share of total revenue decrease from 2021 to 2023?",
    choices: [
      { label: "A", text: "5.1" },
      { label: "B", text: "7.1" },
      { label: "C", text: "10.0" },
      { label: "D", text: "12.9" }
    ],
    correctAnswer: "B",
    explanation: "In 2021, Product A's share of total revenue was 300,000 / 500,000 = 0.600, or 60.0%. In 2023, Product A's share was 360,000 / 680,000 = 0.5294, or approximately 52.9%. The decrease is 60.0% - 52.9% = 7.1 percentage points. This illustrates that a product's revenue can grow in absolute terms while its relative share of the total decreases if other products grow faster.",
    tags: ["percentages", "relative-vs-absolute", "data-interpretation", "misleading-data"],
    estimatedTime: 70
  }

];
