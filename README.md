# SAT Study Tool

A comprehensive, browser-based SAT preparation app designed to take students from a PSAT score of **1000 to an SAT score of 1500**. Covers the full Digital SAT (2024+ format) with adaptive skill progression, timed practice tests, detailed analytics, and study resources.

**No server required** — just open `index.html` in any browser.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Features

### 530-Question Bank with 5-Level Skill Progression

Every question is mapped to a skill level tied to SAT score ranges:

| Level | Name | Score Range | Description |
|-------|------|-------------|-------------|
| 1 | Foundation | 400–500 | Basic concept recognition, single-step |
| 2 | Developing | 500–580 | Standard application, 1–2 steps |
| 3 | Proficient | 580–660 | Multi-step, moderate complexity |
| 4 | Advanced | 660–730 | Complex, non-obvious approaches |
| 5 | Expert | 730–800 | Hardest problems, combined concepts |

Questions span **8 domains** across both SAT sections:

| Section | Domain | Questions |
|---------|--------|-----------|
| Reading & Writing | Craft & Structure | 70 |
| Reading & Writing | Information & Ideas | 65 |
| Reading & Writing | Standard English Conventions | 65 |
| Reading & Writing | Expression of Ideas | 60 |
| Math | Algebra | 75 |
| Math | Advanced Math | 75 |
| Math | Problem-Solving & Data Analysis | 60 |
| Math | Geometry & Trigonometry | 60 |
| **Total** | | **530** |

### Adaptive Practice

- **Skill Levels view** shows mastery per domain per level
- Unlock harder levels by achieving 75%+ accuracy with at least 3 questions answered
- Recommended level auto-detected based on your performance
- Filter by section, domain, skill level, or completion status
- Bookmark questions for later review

### Timed Practice Tests

8 test configurations matching the real Digital SAT format:

- **Full SAT** — 98 questions, 134 minutes, adaptive Module 2
- **Full Reading & Writing** — 54 questions, 64 minutes
- **Full Math** — 44 questions, 70 minutes
- **Single Module** — RW (27 Qs / 32 min) or Math (22 Qs / 35 min)
- **Quick Practice** — 10 questions in 12–15 minutes (RW, Math, or Mixed)

Features:
- Adaptive Module 2 (harder or easier based on Module 1 performance)
- Question navigator with answered/unanswered/flagged indicators
- Timer with color warnings (yellow < 5 min, red < 1 min)
- Auto-save every 10 seconds for crash recovery
- Pause/resume support
- Post-test review with question-by-question explanations

### Progress Analytics

- Overall accuracy donut chart
- Section breakdown (RW vs Math)
- Performance by skill level (all 5 levels)
- Domain strength heatmap (green/yellow/red)
- Accuracy trend line across test sessions
- Weakest areas with direct practice links
- Study streak counter
- Reset option for fresh start

### Study Resources

- SAT test-taking strategies (time management, elimination, guessing)
- Grammar rules reference (8 categories with examples)
- Math concept guides (algebra, advanced math, data analysis, geometry/trig)
- Official formula sheet reference
- 60 high-frequency SAT vocabulary words
- Test day tips and anxiety management

---

## Getting Started

### Option 1: Open directly
```
Double-click index.html
```
Works in Chrome, Firefox, Edge, Safari — no server needed.

### Option 2: Local server (optional)
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```
Then visit `http://localhost:8000`.

### Option 3: GitHub Pages
Fork this repo, enable GitHub Pages in Settings (source: main branch, root), and access at `https://<username>.github.io/<repo-name>`.

---

## Project Structure

```
├── index.html                              # SPA shell
├── css/
│   ├── main.css                            # Design tokens, reset, layout
│   ├── components.css                      # UI component styles
│   └── responsive.css                      # Mobile/tablet breakpoints
├── js/
│   ├── app.js                              # Initialization
│   ├── router.js                           # Hash-based SPA router
│   ├── storage.js                          # localStorage abstraction
│   ├── utils.js                            # Shared utilities
│   ├── components/
│   │   ├── navbar.js                       # Navigation bar
│   │   ├── question-card.js                # Question renderer (MC + grid-in)
│   │   ├── timer.js                        # Countdown timer
│   │   ├── progress-bar.js                 # Progress bar & ring chart
│   │   ├── chart.js                        # Canvas-based charts
│   │   ├── modal.js                        # Modal dialogs
│   │   └── toast.js                        # Toast notifications
│   ├── pages/
│   │   ├── home.js                         # Dashboard
│   │   ├── practice.js                     # Practice with skill progression
│   │   ├── test.js                         # Timed test engine
│   │   ├── review.js                       # Post-test review
│   │   ├── progress.js                     # Analytics dashboard
│   │   └── resources.js                    # Study materials
│   └── data/
│       ├── questions-math-algebra.js       # Algebra (30 Qs)
│       ├── questions-math-algebra-expanded.js   # +45 Qs, levels 1-5
│       ├── questions-math-advanced.js      # Advanced Math (30 Qs)
│       ├── questions-math-advanced-expanded.js  # +45 Qs, levels 1-5
│       ├── questions-math-data.js          # Data Analysis (20 Qs)
│       ├── questions-math-data-expanded.js      # +40 Qs, levels 1-5
│       ├── questions-math-geometry.js      # Geometry & Trig (20 Qs)
│       ├── questions-math-geometry-expanded.js  # +40 Qs, levels 1-5
│       ├── questions-rw-craft.js           # Craft & Structure (30 Qs)
│       ├── questions-rw-craft-expanded.js       # +40 Qs, levels 1-5
│       ├── questions-rw-info.js            # Information & Ideas (28 Qs)
│       ├── questions-rw-info-expanded.js        # +37 Qs, levels 1-5
│       ├── questions-rw-conventions.js     # English Conventions (26 Qs)
│       ├── questions-rw-conventions-expanded.js # +39 Qs, levels 1-5
│       ├── questions-rw-expression.js      # Expression of Ideas (24 Qs)
│       ├── questions-rw-expression-expanded.js  # +36 Qs, levels 1-5
│       ├── question-bank.js                # Aggregator + query engine
│       ├── test-configs.js                 # Test type definitions
│       └── resources-data.js               # Study resource content
```

---

## Architecture

- **Vanilla HTML/CSS/JS** — zero dependencies, no build step
- **Hash-based routing** (`#/practice`, `#/test`, etc.) — works with `file://` protocol
- **Global namespace** (`window.SAT_QUESTIONS`) — `<script>` loading avoids CORS issues
- **localStorage** — all progress, results, streaks, and active test state persist across sessions
- **Canvas-based charts** — lightweight line, bar, and donut charts without libraries
- **Responsive design** — works on desktop, tablet, and mobile

---

## How the Skill Progression Works

1. **Start at your level.** If you're scoring around 1000 on the PSAT, begin with Level 1–2 questions to solidify fundamentals.

2. **Master each level.** Answer at least 3 questions per domain per level with 75%+ accuracy to mark it as mastered.

3. **Progress upward.** The app recommends which level to practice next for each domain. Levels unlock progressively.

4. **Target weaknesses.** The analytics dashboard highlights your weakest domains with direct practice links.

5. **Take timed tests.** Once comfortable, take full-length timed tests. The adaptive Module 2 adjusts difficulty based on your Module 1 performance, just like the real SAT.

6. **Review mistakes.** Every test has a full review page showing each question, your answer, the correct answer, and a detailed explanation.

---

## Recommended Study Plan

| Week | Focus | Goal |
|------|-------|------|
| 1–2 | Levels 1–2 across all domains | Build foundations, reach 75%+ |
| 3–4 | Level 3, take Quick Practice tests | Consistent multi-step problem solving |
| 5–6 | Level 4, take Full Section tests | Handle complex problems under time pressure |
| 7–8 | Level 5, take Full SAT practice tests | Refine timing, target 1500 |

---

## Data Persistence

All data is stored in `localStorage` under the `sat_` prefix:

| Key | Contents |
|-----|----------|
| `sat_results` | Per-question results (correct, answer, time) |
| `sat_bookmarks` | Bookmarked question IDs |
| `sat_test_sessions` | Completed test history |
| `sat_active_test` | In-progress test state (crash recovery) |
| `sat_streak` | Study streak (current, best, last date) |

Clear your browser's localStorage to reset all progress, or use the reset button on the Progress page.

---

## Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 80+ | Yes |
| Firefox 78+ | Yes |
| Edge 80+ | Yes |
| Safari 14+ | Yes |
| Mobile Chrome/Safari | Yes |

---

## Contributing

To add questions, create a new `.js` file in `js/data/` following this pattern:

```js
window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['your-key'] = [
  {
    id: "unique-id-001",
    section: "math",           // "math" or "rw"
    domain: "algebra",         // one of 8 domains
    subdomain: "linear-equations",
    difficulty: "level3",      // "level1" through "level5"
    type: "multiple-choice",   // or "student-produced"
    passage: null,             // text for RW questions
    tableData: null,           // { headers: [...], rows: [[...]] }
    stem: "Question text here?",
    choices: [
      { label: "A", text: "Option 1" },
      { label: "B", text: "Option 2" },
      { label: "C", text: "Option 3" },
      { label: "D", text: "Option 4" }
    ],
    correctAnswer: "B",
    explanation: "Step-by-step explanation.",
    tags: ["topic-tag"],
    estimatedTime: 60
  }
];
```

Then add a `<script>` tag in `index.html` before the `question-bank.js` line. The question bank automatically aggregates all arrays on `window.SAT_QUESTIONS`.

---

## License

This project is for educational purposes. SAT is a registered trademark of the College Board, which is not affiliated with this project.
