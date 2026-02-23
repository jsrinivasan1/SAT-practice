// SAT Problem-Solving & Data Analysis Questions
// Domain: Data Analysis | 20 Questions | IDs: math-data-001 to math-data-020
// Distribution: 7 easy, 7 medium, 6 hard
// Subdomains: ratios-proportions, percentages, unit-conversion, scatterplots,
//             probability, statistics, linear-growth, exponential-growth
// Includes: 3 student-produced, 6 with tableData, 3 with passage

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['math-data'] = [

  // ===== QUESTION 001 ===== [easy | ratios-proportions | multiple-choice]
  {
    id: "math-data-001",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A recipe calls for 3 cups of flour to make 24 cookies. At this rate, how many cups of flour are needed to make 80 cookies?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "10" },
      { label: "C", text: "12" },
      { label: "D", text: "15" }
    ],
    correctAnswer: "B",
    explanation: "Set up a proportion: 3 cups / 24 cookies = x cups / 80 cookies. Cross-multiply: 24x = 3 * 80 = 240. Divide both sides by 24: x = 240 / 24 = 10. Therefore, 10 cups of flour are needed.",
    tags: ["ratios", "proportions", "cross-multiplication"],
    estimatedTime: 30
  },

  // ===== QUESTION 002 ===== [easy | percentages | multiple-choice]
  {
    id: "math-data-002",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A store marks up the wholesale price of a jacket by 60%. If the wholesale price is $45, what is the retail price of the jacket?",
    choices: [
      { label: "A", text: "$63.00" },
      { label: "B", text: "$67.50" },
      { label: "C", text: "$72.00" },
      { label: "D", text: "$105.00" }
    ],
    correctAnswer: "C",
    explanation: "A 60% markup on $45 means the markup amount is 0.60 * $45 = $27. The retail price is the wholesale price plus the markup: $45 + $27 = $72.00.",
    tags: ["percentages", "markup", "retail"],
    estimatedTime: 30
  },

  // ===== QUESTION 003 ===== [easy | unit-conversion | multiple-choice]
  {
    id: "math-data-003",
    section: "math",
    domain: "data",
    subdomain: "unit-conversion",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A car travels at a constant speed of 65 miles per hour. What is the car's speed in feet per second? (1 mile = 5,280 feet)",
    choices: [
      { label: "A", text: "88.0" },
      { label: "B", text: "91.7" },
      { label: "C", text: "95.3" },
      { label: "D", text: "100.8" }
    ],
    correctAnswer: "C",
    explanation: "Convert 65 miles per hour to feet per second. First, convert miles to feet: 65 * 5,280 = 343,200 feet per hour. Then convert hours to seconds (1 hour = 3,600 seconds): 343,200 / 3,600 = 95.33 feet per second, which rounds to 95.3.",
    tags: ["unit-conversion", "rate", "dimensional-analysis"],
    estimatedTime: 45
  },

  // ===== QUESTION 004 ===== [easy | statistics | multiple-choice | tableData]
  {
    id: "math-data-004",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Score", "Frequency"],
      rows: [
        ["70", "3"],
        ["75", "5"],
        ["80", "8"],
        ["85", "6"],
        ["90", "3"]
      ]
    },
    stem: "The table above shows the distribution of test scores for 25 students. What is the median test score?",
    choices: [
      { label: "A", text: "75" },
      { label: "B", text: "80" },
      { label: "C", text: "82.5" },
      { label: "D", text: "85" }
    ],
    correctAnswer: "B",
    explanation: "There are 25 scores total, so the median is the 13th value when the scores are listed in order from least to greatest. Counting by cumulative frequency: scores of 70 occupy positions 1 through 3, scores of 75 occupy positions 4 through 8, and scores of 80 occupy positions 9 through 16. Since the 13th value falls in the group with a score of 80, the median is 80.",
    tags: ["statistics", "median", "frequency-table"],
    estimatedTime: 45
  },

  // ===== QUESTION 005 ===== [easy | probability | multiple-choice | tableData]
  {
    id: "math-data-005",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["", "Vanilla", "Chocolate", "Strawberry", "Total"],
      rows: [
        ["Cone", "15", "22", "8", "45"],
        ["Cup", "20", "18", "12", "50"],
        ["Total", "35", "40", "20", "95"]
      ]
    },
    stem: "The table above shows the ice cream orders at a shop on a given day. If one order is selected at random, what is the probability that the order is for chocolate ice cream in a cone?",
    choices: [
      { label: "A", text: "22/95" },
      { label: "B", text: "22/45" },
      { label: "C", text: "22/40" },
      { label: "D", text: "40/95" }
    ],
    correctAnswer: "A",
    explanation: "The number of orders for chocolate ice cream in a cone is 22 (the cell at the intersection of the Cone row and Chocolate column). The total number of orders is 95. The probability is the number of favorable outcomes divided by the total: 22/95.",
    tags: ["probability", "two-way-table"],
    estimatedTime: 30
  },

  // ===== QUESTION 006 ===== [easy | ratios-proportions | multiple-choice]
  {
    id: "math-data-006",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "On a map, 2 centimeters represent 35 kilometers. Two cities are 9.5 centimeters apart on the map. What is the actual distance, in kilometers, between the two cities?",
    choices: [
      { label: "A", text: "142.50" },
      { label: "B", text: "155.75" },
      { label: "C", text: "166.25" },
      { label: "D", text: "171.00" }
    ],
    correctAnswer: "C",
    explanation: "Set up a proportion: 2 cm / 35 km = 9.5 cm / x km. Cross-multiply: 2x = 35 * 9.5 = 332.5. Divide both sides by 2: x = 332.5 / 2 = 166.25 kilometers.",
    tags: ["ratios", "proportions", "scale"],
    estimatedTime: 35
  },

  // ===== QUESTION 007 ===== [easy | linear-growth | multiple-choice]
  {
    id: "math-data-007",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "easy",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A gym membership costs a one-time enrollment fee of $50 plus $30 per month. Which function f gives the total cost, in dollars, of a gym membership for m months?",
    choices: [
      { label: "A", text: "f(m) = 50m + 30" },
      { label: "B", text: "f(m) = 30m + 50" },
      { label: "C", text: "f(m) = 80m" },
      { label: "D", text: "f(m) = 50m + 30m" }
    ],
    correctAnswer: "B",
    explanation: "The total cost consists of a fixed one-time enrollment fee of $50 and a variable monthly cost of $30 per month. For m months, the monthly cost is 30m. Adding the enrollment fee gives the total cost function: f(m) = 30m + 50.",
    tags: ["linear-growth", "linear-function", "modeling"],
    estimatedTime: 30
  },

  // ===== QUESTION 008 ===== [medium | percentages | multiple-choice | passage]
  {
    id: "math-data-008",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A survey of 800 adults in a city found that 68% supported a new public park proposal. The margin of error for the survey was plus or minus 4 percentage points.",
    tableData: null,
    stem: "Based on the survey results described above, which of the following is the best estimate of the number of adults in the city who support the new public park proposal, if the city has 25,000 adults?",
    choices: [
      { label: "A", text: "Between 13,600 and 17,000" },
      { label: "B", text: "Between 16,000 and 18,000" },
      { label: "C", text: "Between 13,200 and 14,400" },
      { label: "D", text: "Between 17,000 and 20,000" }
    ],
    correctAnswer: "B",
    explanation: "The survey found 68% support with a margin of error of plus or minus 4 percentage points. This gives a confidence interval of 64% to 72%. Applying these percentages to the city population of 25,000 adults: the lower bound is 0.64 * 25,000 = 16,000 and the upper bound is 0.72 * 25,000 = 18,000. The best estimate is between 16,000 and 18,000.",
    tags: ["percentages", "margin-of-error", "survey", "estimation"],
    estimatedTime: 60
  },

  // ===== QUESTION 009 ===== [hard | scatterplots | multiple-choice | tableData]
  {
    id: "math-data-009",
    section: "math",
    domain: "data",
    subdomain: "scatterplots",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Hours of Study (x)", "Exam Score (y)"],
      rows: [
        ["1", "55"],
        ["2", "61"],
        ["3", "70"],
        ["4", "71"],
        ["5", "80"],
        ["6", "86"],
        ["7", "91"],
        ["8", "95"]
      ]
    },
    stem: "The table above shows data collected from 8 students comparing hours of study to exam scores. A line of best fit for the data can be modeled by y = 5x + 53, where x is the number of hours studied and y is the predicted exam score. For how many of the 8 data points does the line of best fit predict a score that is greater than the actual score?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "5" }
    ],
    correctAnswer: "B",
    explanation: "Calculate the predicted score for each x value using y = 5x + 53, then compare to the actual score:\nx = 1: predicted = 5(1) + 53 = 58, actual = 55. 58 > 55, so predicted > actual.\nx = 2: predicted = 5(2) + 53 = 63, actual = 61. 63 > 61, so predicted > actual.\nx = 3: predicted = 5(3) + 53 = 68, actual = 70. 68 < 70, so predicted < actual.\nx = 4: predicted = 5(4) + 53 = 73, actual = 71. 73 > 71, so predicted > actual.\nx = 5: predicted = 5(5) + 53 = 78, actual = 80. 78 < 80, so predicted < actual.\nx = 6: predicted = 5(6) + 53 = 83, actual = 86. 83 < 86, so predicted < actual.\nx = 7: predicted = 5(7) + 53 = 88, actual = 91. 88 < 91, so predicted < actual.\nx = 8: predicted = 5(8) + 53 = 93, actual = 95. 93 < 95, so predicted < actual.\nThe predicted score is greater than the actual score for x = 1, x = 2, and x = 4. That is 3 data points.",
    tags: ["scatterplots", "line-of-best-fit", "residuals"],
    estimatedTime: 90
  },

  // ===== QUESTION 010 ===== [medium | statistics | student-produced | tableData]
  {
    id: "math-data-010",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: {
      headers: ["Employee", "Sales (units)"],
      rows: [
        ["A", "34"],
        ["B", "41"],
        ["C", "27"],
        ["D", "38"],
        ["E", "45"],
        ["F", "31"],
        ["G", "29"],
        ["H", "52"]
      ]
    },
    stem: "The table above shows the number of units sold by each of 8 employees last month. What is the range of the data?",
    choices: null,
    correctAnswer: "25",
    explanation: "The range is the difference between the maximum and minimum values in the data set. The maximum value is 52 (Employee H) and the minimum value is 27 (Employee C). Range = 52 - 27 = 25.",
    tags: ["statistics", "range", "data-analysis"],
    estimatedTime: 60
  },

  // ===== QUESTION 011 ===== [medium | exponential-growth | multiple-choice]
  {
    id: "math-data-011",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A population of bacteria doubles every 3 hours. If there are initially 500 bacteria, which expression gives the number of bacteria after t hours?",
    choices: [
      { label: "A", text: "500(2)^(t/3)" },
      { label: "B", text: "500(2)^(3t)" },
      { label: "C", text: "500(3)^(t/2)" },
      { label: "D", text: "1000(2)^t" }
    ],
    correctAnswer: "A",
    explanation: "The general form for exponential growth is P(t) = P_0 * r^(t/d), where P_0 is the initial amount, r is the growth factor per period, and d is the length of each period. The bacteria double (r = 2) every 3 hours (d = 3), starting with P_0 = 500. This gives P(t) = 500(2)^(t/3). You can verify: at t = 3, P(3) = 500(2)^1 = 1,000, which is double the initial amount.",
    tags: ["exponential-growth", "modeling", "bacteria"],
    estimatedTime: 60
  },

  // ===== QUESTION 012 ===== [medium | unit-conversion | multiple-choice]
  {
    id: "math-data-012",
    section: "math",
    domain: "data",
    subdomain: "unit-conversion",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A factory produces 1,200 widgets per 8-hour shift. Each widget requires 0.15 kilograms of raw material. How many metric tons of raw material does the factory use in 5 days if it operates two 8-hour shifts per day? (1 metric ton = 1,000 kilograms)",
    choices: [
      { label: "A", text: "0.90" },
      { label: "B", text: "1.80" },
      { label: "C", text: "9.00" },
      { label: "D", text: "18.00" }
    ],
    correctAnswer: "B",
    explanation: "Step 1: Total shifts in 5 days = 2 shifts/day * 5 days = 10 shifts. Step 2: Total widgets produced = 1,200 widgets/shift * 10 shifts = 12,000 widgets. Step 3: Total raw material in kilograms = 12,000 widgets * 0.15 kg/widget = 1,800 kg. Step 4: Convert to metric tons = 1,800 kg / 1,000 kg per metric ton = 1.80 metric tons.",
    tags: ["unit-conversion", "multi-step", "dimensional-analysis"],
    estimatedTime: 75
  },

  // ===== QUESTION 013 ===== [medium | probability | multiple-choice | passage]
  {
    id: "math-data-013",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A school counselor surveyed 200 students about their preferred extracurricular activities. Of the students surveyed, 85 preferred sports, 60 preferred music, 35 preferred art, and 20 preferred debate. Of the students who preferred sports, 40% were juniors. Of the students who preferred music, 25% were juniors.",
    tableData: null,
    stem: "Based on the passage above, if a student is selected at random from those who preferred either sports or music, what is the probability that the student is a junior?",
    choices: [
      { label: "A", text: "49/145" },
      { label: "B", text: "34/145" },
      { label: "C", text: "49/200" },
      { label: "D", text: "15/145" }
    ],
    correctAnswer: "A",
    explanation: "First, find the number of juniors in each relevant group. Juniors who preferred sports: 40% of 85 = 0.40 * 85 = 34. Juniors who preferred music: 25% of 60 = 0.25 * 60 = 15. Total juniors who preferred sports or music: 34 + 15 = 49. Total students who preferred sports or music: 85 + 60 = 145. The probability = 49/145.",
    tags: ["probability", "conditional", "survey"],
    estimatedTime: 75
  },

  // ===== QUESTION 014 ===== [medium | percentages | student-produced]
  {
    id: "math-data-014",
    section: "math",
    domain: "data",
    subdomain: "percentages",
    difficulty: "medium",
    type: "student-produced",
    passage: null,
    tableData: null,
    stem: "The price of a laptop was $1,200. The price decreased by 15% for a sale, and then an additional 10% discount was applied to the sale price. What is the final price, in dollars, of the laptop?",
    choices: null,
    correctAnswer: "918",
    explanation: "Apply each discount sequentially (they are not additive). First discount: 15% off $1,200 gives a sale price of $1,200 * (1 - 0.15) = $1,200 * 0.85 = $1,020. Second discount: 10% off $1,020 gives a final price of $1,020 * (1 - 0.10) = $1,020 * 0.90 = $918. Note that successive discounts of 15% and 10% are not the same as a single 25% discount.",
    tags: ["percentages", "successive-discounts", "percent-decrease"],
    estimatedTime: 60
  },

  // ===== QUESTION 015 ===== [medium | linear-growth | multiple-choice | tableData]
  {
    id: "math-data-015",
    section: "math",
    domain: "data",
    subdomain: "linear-growth",
    difficulty: "medium",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["Year", "Number of Subscribers (thousands)"],
      rows: [
        ["2018", "12"],
        ["2019", "17"],
        ["2020", "22"],
        ["2021", "27"],
        ["2022", "32"]
      ]
    },
    stem: "The table above shows the number of subscribers, in thousands, for a streaming service from 2018 to 2022. If the trend shown continues, what is the predicted number of subscribers, in thousands, in 2025?",
    choices: [
      { label: "A", text: "42" },
      { label: "B", text: "45" },
      { label: "C", text: "47" },
      { label: "D", text: "50" }
    ],
    correctAnswer: "C",
    explanation: "The data shows a constant linear increase of 5 thousand subscribers per year: 17 - 12 = 5, 22 - 17 = 5, 27 - 22 = 5, 32 - 27 = 5. From 2022 to 2025 is 3 additional years. Predicted subscribers in 2025: 32 + 5(3) = 32 + 15 = 47 thousand.",
    tags: ["linear-growth", "prediction", "trend"],
    estimatedTime: 60
  },

  // ===== QUESTION 016 ===== [hard | statistics | multiple-choice]
  {
    id: "math-data-016",
    section: "math",
    domain: "data",
    subdomain: "statistics",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A researcher collected data on the commute times, in minutes, of 30 employees at a company. The mean commute time was 35 minutes with a standard deviation of 8 minutes. One employee with a commute time of 35 minutes left the company. Which of the following statements about the remaining 29 employees is true?",
    choices: [
      { label: "A", text: "The mean increases and the standard deviation increases." },
      { label: "B", text: "The mean stays the same and the standard deviation increases." },
      { label: "C", text: "The mean stays the same and the standard deviation stays the same." },
      { label: "D", text: "The mean stays the same and the standard deviation decreases." }
    ],
    correctAnswer: "B",
    explanation: "The departing employee's commute time (35 minutes) equals the mean. For the mean: the new sum is 30(35) - 35 = 1,050 - 35 = 1,015, and the new count is 29, so the new mean = 1,015 / 29 = 35. The mean stays the same. For the standard deviation: the removed value was exactly at the mean, contributing 0 to the sum of squared deviations. The total sum of squared deviations remains unchanged, but we now divide by a smaller number (29 instead of 30 for population SD, or 28 instead of 29 for sample SD). Dividing the same sum of squared deviations by a smaller number produces a larger variance, so the standard deviation increases.",
    tags: ["statistics", "mean", "standard-deviation", "data-removal"],
    estimatedTime: 90
  },

  // ===== QUESTION 017 ===== [hard | exponential-growth | multiple-choice]
  {
    id: "math-data-017",
    section: "math",
    domain: "data",
    subdomain: "exponential-growth",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "The value of a certain investment account is modeled by V(t) = 5,000(1.06)^t, where t is the number of years after the initial investment. Which of the following is closest to the number of years it will take for the value of the account to double?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "12" },
      { label: "C", text: "14" },
      { label: "D", text: "17" }
    ],
    correctAnswer: "B",
    explanation: "The account doubles when V(t) = 10,000. Set up the equation: 5,000(1.06)^t = 10,000. Divide both sides by 5,000: (1.06)^t = 2. Take the logarithm of both sides: t * log(1.06) = log(2). Solve for t: t = log(2) / log(1.06) = 0.30103 / 0.02531 = 11.90. This is closest to 12 years. This can also be estimated using the Rule of 72: 72 / 6 = 12 years.",
    tags: ["exponential-growth", "doubling-time", "logarithms", "compound-interest"],
    estimatedTime: 90
  },

  // ===== QUESTION 018 ===== [hard | scatterplots | multiple-choice]
  {
    id: "math-data-018",
    section: "math",
    domain: "data",
    subdomain: "scatterplots",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: null,
    stem: "A biologist measured the height (in centimeters) and weight (in grams) of 10 plants of the same species grown under identical conditions. The equation of the line of best fit is w = 12.4h - 28.6, where w is the predicted weight in grams and h is the height in centimeters. The coefficient of determination (r-squared) is 0.87. Which of the following is the best interpretation of the coefficient of determination in this context?",
    choices: [
      { label: "A", text: "For each additional centimeter in height, the weight increases by 87%." },
      { label: "B", text: "Approximately 87% of the variation in weight can be explained by the linear relationship with height." },
      { label: "C", text: "Approximately 87% of the plants have weights predicted exactly by the model." },
      { label: "D", text: "The correlation between height and weight is 0.87." }
    ],
    correctAnswer: "B",
    explanation: "The coefficient of determination (r-squared) represents the proportion of the variance in the dependent variable (weight) that is predictable from the independent variable (height). An r-squared of 0.87 means that approximately 87% of the variation in plant weight can be explained by the linear relationship with height. Choice A incorrectly describes the slope as a percentage. Choice C misinterprets r-squared as a count of exact predictions. Choice D confuses r-squared with r; the correlation coefficient r would be sqrt(0.87), which is approximately 0.933.",
    tags: ["scatterplots", "r-squared", "coefficient-of-determination", "interpretation"],
    estimatedTime: 75
  },

  // ===== QUESTION 019 ===== [hard | probability | multiple-choice | tableData]
  {
    id: "math-data-019",
    section: "math",
    domain: "data",
    subdomain: "probability",
    difficulty: "hard",
    type: "multiple-choice",
    passage: null,
    tableData: {
      headers: ["", "Pass", "Fail", "Total"],
      rows: [
        ["Studied", "42", "8", "50"],
        ["Did Not Study", "18", "32", "50"],
        ["Total", "60", "40", "100"]
      ]
    },
    stem: "The table above shows the results of 100 students who took an exam, classified by whether they studied and whether they passed. What is the probability that a randomly selected student who passed the exam had studied for it?",
    choices: [
      { label: "A", text: "42/100" },
      { label: "B", text: "42/50" },
      { label: "C", text: "42/60" },
      { label: "D", text: "60/100" }
    ],
    correctAnswer: "C",
    explanation: "This is a conditional probability question asking for P(Studied | Passed). The condition is that the student passed, so we restrict our sample space to the 60 students who passed (the Total in the Pass column). Of those 60 students who passed, 42 had studied. Therefore, P(Studied | Passed) = 42/60 = 7/10. Choice A (42/100) would be the unconditional probability of both studying and passing. Choice B (42/50) would be P(Passed | Studied), which reverses the condition.",
    tags: ["probability", "conditional-probability", "two-way-table"],
    estimatedTime: 75
  },

  // ===== QUESTION 020 ===== [hard | ratios-proportions | student-produced | passage]
  {
    id: "math-data-020",
    section: "math",
    domain: "data",
    subdomain: "ratios-proportions",
    difficulty: "hard",
    type: "student-produced",
    passage: "A pharmacist needs to prepare 600 milliliters of a saline solution with a concentration of 5% salt by mass. The pharmacist has two stock solutions available: Solution X with a 2% salt concentration and Solution Y with an 8% salt concentration.",
    tableData: null,
    stem: "How many milliliters of Solution Y must the pharmacist use to prepare the required 600 milliliters of 5% saline solution?",
    choices: null,
    correctAnswer: "300",
    explanation: "Let x = milliliters of Solution X (2% salt) and y = milliliters of Solution Y (8% salt). The two equations are: (1) x + y = 600 (total volume), and (2) 0.02x + 0.08y = 0.05(600) (total salt). From equation (2): 0.02x + 0.08y = 30. From equation (1): x = 600 - y. Substitute into equation (2): 0.02(600 - y) + 0.08y = 30. This gives 12 - 0.02y + 0.08y = 30, so 0.06y = 18, and y = 18 / 0.06 = 300. The pharmacist needs 300 milliliters of Solution Y.",
    tags: ["ratios", "proportions", "mixture", "systems-of-equations"],
    estimatedTime: 105
  }

];
