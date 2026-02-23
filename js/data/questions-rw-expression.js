// SAT Reading & Writing – Expression of Ideas Questions
// Covers: rhetorical-synthesis, transitions, sentence-combining, concision, style-tone
// 24 questions: 8 easy, 8 medium, 8 hard

window.SAT_QUESTIONS = window.SAT_QUESTIONS || {};
window.SAT_QUESTIONS['rw-expression'] = [

  // ===== EASY (8 questions) =====

  {
    id: "rw-expression-001",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "A student is writing a brief report about honeybees for a biology class. The student wants to begin the report by emphasizing how essential honeybees are to agriculture. The student has noted that honeybees pollinate roughly one-third of all food crops grown in the United States and that many fruits and vegetables depend entirely on bee pollination.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Honeybees are small flying insects that live in large colonies and produce honey, which people have harvested for thousands of years." },
      { label: "B", text: "Honeybees are interesting creatures that have complex social structures and communicate through a series of movements known as the waggle dance." },
      { label: "C", text: "There are over 20,000 known species of bees worldwide, and honeybees are just one of the many species that scientists study." },
      { label: "D", text: "Without honeybees, roughly one-third of the food crops grown in the United States—including many fruits and vegetables that depend entirely on bee pollination—could not be produced." }
    ],
    correctAnswer: "D",
    explanation: "Choice D directly emphasizes honeybees' essential role in agriculture by quantifying their contribution (one-third of food crops) and noting that many fruits and vegetables depend entirely on their pollination. Choices A, B, and C introduce information about honey production, social behavior, or bee species diversity—none of which stress the agricultural importance the student wants to highlight.",
    tags: ["synthesis"],
    estimatedTime: 35
  },

  {
    id: "rw-expression-002",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "Sea otters play a vital ecological role in kelp forest ecosystems. By feeding on sea urchins, otters prevent the urchins from overgrazing the kelp. ______ when otter populations decline, sea urchin numbers explode and the kelp forests are rapidly destroyed.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "Similarly," },
      { label: "B", text: "Accordingly," },
      { label: "C", text: "For instance," },
      { label: "D", text: "Nevertheless," }
    ],
    correctAnswer: "B",
    explanation: "The sentence that follows the blank describes a logical consequence: because otters keep urchin populations in check, when otters decline, urchins overpopulate and destroy kelp. 'Accordingly' signals this cause-and-effect relationship. 'Similarly' would indicate a parallel idea, 'For instance' would introduce an example of the same point, and 'Nevertheless' would signal a contrast—none of which fit the logical structure here.",
    tags: ["transitions"],
    estimatedTime: 30
  },

  {
    id: "rw-expression-003",
    section: "rw",
    domain: "expression",
    subdomain: "sentence-combining",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "The Great Wall of China stretches over 13,000 miles. It was built over many centuries by several different dynasties. The wall was originally constructed to protect Chinese states from invasions by northern nomadic groups.",
    tableData: null,
    stem: "Which choice most effectively combines the underlined sentences?",
    choices: [
      { label: "A", text: "Stretching over 13,000 miles, the Great Wall of China was built over many centuries by several dynasties to protect Chinese states from invasions by northern nomadic groups." },
      { label: "B", text: "The Great Wall of China stretches over 13,000 miles and it was built over many centuries by several different dynasties and the wall was originally constructed to protect Chinese states from invasions by northern nomadic groups." },
      { label: "C", text: "The Great Wall of China, which stretches over 13,000 miles, was built over many centuries, and it was originally constructed to protect Chinese states from invasions." },
      { label: "D", text: "Built over many centuries, the Great Wall of China stretches over 13,000 miles; the wall was originally constructed to protect Chinese states from invasions by northern nomadic groups." }
    ],
    correctAnswer: "A",
    explanation: "Choice A smoothly integrates all three pieces of information—the wall's length, its construction across multiple dynasties, and its defensive purpose—into a single clear sentence without redundancy. Choice B is a run-on sentence joined by repeated 'and.' Choice C is grammatically acceptable but still somewhat wordy and slightly redundant ('was built' and 'was originally constructed'). Choice D uses a semicolon that creates an awkward separation between related ideas.",
    tags: ["sentence-combining"],
    estimatedTime: 40
  },

  {
    id: "rw-expression-004",
    section: "rw",
    domain: "expression",
    subdomain: "concision",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "A student is revising an essay about the benefits of public libraries. One sentence in the draft reads: 'Public libraries provide and offer a wide variety of many different resources and materials to members of the community who live in the local area.'",
    tableData: null,
    stem: "Which choice is the most concise revision of the underlined sentence while retaining its meaning?",
    choices: [
      { label: "A", text: "Public libraries offer a wide variety of resources to community members." },
      { label: "B", text: "Public libraries provide and offer a wide variety of resources to people who live in the community." },
      { label: "C", text: "Public libraries provide and offer many different resources and materials to members of the community." },
      { label: "D", text: "A wide variety of many different resources are provided by public libraries to local community members who live in the area." }
    ],
    correctAnswer: "A",
    explanation: "Choice A eliminates all redundancy: 'provide and offer' is reduced to 'offer,' 'a wide variety of many different resources and materials' becomes 'a wide variety of resources,' and 'members of the community who live in the local area' becomes simply 'community members.' The meaning is fully preserved. Choices B and C retain some redundancies, and Choice D adds passive voice and remains wordy.",
    tags: ["concision"],
    estimatedTime: 30
  },

  {
    id: "rw-expression-005",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "A student is writing a persuasive letter to the school board requesting additional funding for the arts program. The student wants to open the letter by establishing that the arts program is currently under-resourced compared to other programs at the school.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Art is a wonderful form of self-expression that has been part of human culture for thousands of years." },
      { label: "B", text: "Many students enjoy participating in the arts program, and they would benefit from having more opportunities to explore their creativity." },
      { label: "C", text: "While the school's athletics department received a 15% budget increase last year, the arts program's funding has been cut by 10% over the same period, leaving students without basic supplies." },
      { label: "D", text: "The school board should consider the many advantages of investing in the arts, as studies have shown that arts education improves student achievement." }
    ],
    correctAnswer: "C",
    explanation: "Choice C directly establishes that the arts program is under-resourced compared to other programs by contrasting the athletics department's budget increase with the arts program's budget cut, and it notes the tangible consequence (students lacking basic supplies). The other choices discuss the value of art in general (A), student enjoyment (B), or research on arts education (D), but none specifically compare the arts program's funding to other programs.",
    tags: ["synthesis"],
    estimatedTime: 35
  },

  {
    id: "rw-expression-006",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "Many people assume that deserts are always hot. ______ some deserts, such as the Gobi Desert in Mongolia, experience bitterly cold winters with temperatures plunging well below freezing.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "In addition," },
      { label: "B", text: "As a result," },
      { label: "C", text: "However," },
      { label: "D", text: "Specifically," }
    ],
    correctAnswer: "C",
    explanation: "The second sentence contradicts the common assumption stated in the first sentence—that deserts are always hot—by providing an example of a desert with extremely cold winters. 'However' correctly signals this contrast. 'In addition' would add a supporting detail, 'As a result' would indicate a consequence, and 'Specifically' would elaborate on the same point rather than introduce a contrasting one.",
    tags: ["transitions"],
    estimatedTime: 30
  },

  {
    id: "rw-expression-007",
    section: "rw",
    domain: "expression",
    subdomain: "style-tone",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "A student is writing a formal research paper on the decline of monarch butterfly populations for an environmental science course. The student needs to describe the situation facing monarch butterflies in a tone appropriate for an academic audience.",
    tableData: null,
    stem: "Which choice best maintains the formal, academic tone of the paper?",
    choices: [
      { label: "A", text: "Monarch butterfly populations have totally tanked in recent years, and it's super sad because they're such cool creatures." },
      { label: "B", text: "Monarchs are dying off left and right, which is a huge bummer for anyone who cares about nature and stuff." },
      { label: "C", text: "It is a real shame that the beautiful monarch butterflies are disappearing, and somebody should really do something about it soon." },
      { label: "D", text: "Over the past two decades, monarch butterfly populations have declined by approximately 80%, a trend that researchers attribute primarily to habitat loss and pesticide exposure." }
    ],
    correctAnswer: "D",
    explanation: "Choice D uses precise, objective language appropriate for an academic paper: it quantifies the decline ('approximately 80%'), specifies the timeframe ('past two decades'), and cites attributed causes ('habitat loss and pesticide exposure'). Choices A and B use informal slang ('totally tanked,' 'super sad,' 'left and right,' 'huge bummer'). Choice C is subjective and vague ('real shame,' 'somebody should really do something'), which is unsuitable for a formal research paper.",
    tags: ["style-tone"],
    estimatedTime: 35
  },

  {
    id: "rw-expression-008",
    section: "rw",
    domain: "expression",
    subdomain: "sentence-combining",
    difficulty: "easy",
    type: "multiple-choice",
    passage: "Marie Curie was born in Warsaw, Poland, in 1867. She later moved to Paris to study at the Sorbonne. She became the first woman to win a Nobel Prize.",
    tableData: null,
    stem: "Which choice most effectively combines the underlined sentences?",
    choices: [
      { label: "A", text: "Marie Curie was born in Warsaw, Poland, in 1867, and she later moved to Paris to study at the Sorbonne, and she became the first woman to win a Nobel Prize." },
      { label: "B", text: "Born in Warsaw, Poland, in 1867, Marie Curie moved to Paris to study at the Sorbonne and went on to become the first woman to win a Nobel Prize." },
      { label: "C", text: "Marie Curie was born in Warsaw, Poland, in 1867; she later moved to Paris to study at the Sorbonne; she became the first woman to win a Nobel Prize." },
      { label: "D", text: "In 1867, being born in Warsaw, Poland, Marie Curie later moved to Paris to study at the Sorbonne, becoming the first woman who won a Nobel Prize." }
    ],
    correctAnswer: "B",
    explanation: "Choice B uses a participial phrase ('Born in Warsaw, Poland, in 1867') and a compound predicate ('moved...and went on to become') to combine all three ideas smoothly and concisely. Choice A is a run-on with repeated 'and.' Choice C merely strings the sentences together with semicolons without truly combining them. Choice D is awkward because 'being born' suggests an ongoing action rather than a completed event.",
    tags: ["sentence-combining"],
    estimatedTime: 40
  },

  // ===== MEDIUM (8 questions) =====

  {
    id: "rw-expression-009",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A student is writing an article for the school newspaper about a new community garden project. The student wants to conclude the article by emphasizing the garden's potential to strengthen neighborhood connections while also acknowledging the challenges the project still faces.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Although the project still needs additional funding and volunteer commitments to reach its full potential, the garden has already begun to bring neighbors together in ways that organizers say have exceeded their expectations." },
      { label: "B", text: "The community garden project is expected to be completed by next spring, and volunteers are needed for planting and maintenance." },
      { label: "C", text: "Community gardens have been shown in studies to increase property values, reduce crime rates, and improve mental health outcomes for residents." },
      { label: "D", text: "The garden project is one of several new initiatives the neighborhood association has undertaken this year, alongside a street cleanup campaign and a book drive." }
    ],
    correctAnswer: "A",
    explanation: "Choice A achieves both stated goals: it acknowledges challenges ('still needs additional funding and volunteer commitments') while emphasizing the garden's success in strengthening neighborhood connections ('bring neighbors together in ways that...exceeded their expectations'). Choice B mentions a timeline and volunteer needs but does not address community connection. Choice C cites general research rather than discussing this specific garden's impact. Choice D places the garden among other initiatives without addressing either the connections or the challenges.",
    tags: ["synthesis"],
    estimatedTime: 50
  },

  {
    id: "rw-expression-010",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "Researchers at the University of Michigan found that students who studied in multiple different locations performed better on memory tests than those who always studied in the same place. The researchers hypothesized that varying environments creates more contextual associations in the brain, which strengthens memory retrieval. ______ a follow-up study conducted at Stanford confirmed these findings and demonstrated that the effect was especially pronounced for complex material.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "In contrast," },
      { label: "B", text: "Moreover," },
      { label: "C", text: "On the other hand," },
      { label: "D", text: "Instead," }
    ],
    correctAnswer: "B",
    explanation: "The follow-up study at Stanford adds supporting evidence to the University of Michigan findings—it confirmed the results and extended them by showing the effect was especially strong for complex material. 'Moreover' signals this additive, reinforcing relationship. 'In contrast' and 'On the other hand' would signal opposing information, and 'Instead' would suggest the follow-up replaced the original finding, none of which matches the relationship here.",
    tags: ["transitions"],
    estimatedTime: 45
  },

  {
    id: "rw-expression-011",
    section: "rw",
    domain: "expression",
    subdomain: "concision",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A student is revising an essay about volcanic eruptions for a geology class. One sentence reads: 'The reason that volcanic eruptions are difficult to predict is due to the fact that the underground magma chambers that feed volcanoes are located deep beneath the surface of the earth where they cannot be directly observed or seen by scientists and researchers.'",
    tableData: null,
    stem: "Which choice is the most concise revision that retains the original meaning?",
    choices: [
      { label: "A", text: "Volcanic eruptions are difficult to predict because the underground magma chambers that feed volcanoes are located deep beneath the earth's surface where they cannot be directly observed by scientists." },
      { label: "B", text: "The reason volcanic eruptions are difficult to predict is that the underground magma chambers feeding volcanoes are deep beneath the surface and cannot be seen." },
      { label: "C", text: "It is difficult to predict volcanic eruptions due to the fact that scientists and researchers cannot directly observe the deep underground magma chambers beneath the earth's surface." },
      { label: "D", text: "Volcanic eruptions are difficult to predict because the magma chambers that feed them lie too deep beneath the earth's surface to be directly observed." }
    ],
    correctAnswer: "D",
    explanation: "Choice D is the most concise while fully preserving the meaning. It eliminates redundancies: 'underground' is dropped because 'beneath the earth's surface' already implies it; 'observed or seen' is reduced to 'observed'; 'scientists and researchers' is removed since the passive construction conveys the idea; and the wordy 'the reason...is due to the fact that' is replaced with 'because.' Choices A and B are improvements over the original but still contain unnecessary words. Choice C retains the wordy 'due to the fact that.'",
    tags: ["concision"],
    estimatedTime: 55
  },

  {
    id: "rw-expression-012",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A researcher is writing a grant proposal for a study on the effects of urban noise pollution on bird communication. The researcher wants to introduce the proposal by connecting the well-established phenomenon of noise pollution's effects on human health to the less-studied question of how noise affects wildlife, thereby justifying the need for the proposed research.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Urban noise pollution is a growing problem in cities around the world, and many city residents complain about the constant noise from traffic, construction, and nightlife." },
      { label: "B", text: "Birds use vocalizations for mate attraction, territory defense, and predator warnings, making their communication systems essential for survival." },
      { label: "C", text: "While extensive research has documented the harmful effects of urban noise on human health—including increased stress, hearing loss, and cardiovascular disease—far less is known about how persistent noise pollution disrupts communication among urban bird populations, a gap this study aims to address." },
      { label: "D", text: "Noise pollution affects many species of animals, including birds, mammals, amphibians, and insects, all of which rely on sound for communication." }
    ],
    correctAnswer: "C",
    explanation: "Choice C bridges the well-studied topic (noise pollution's effects on human health, with specific examples) to the less-studied area (effects on bird communication), and it explicitly states that the proposed study aims to fill this gap. This structure effectively justifies the research. Choice A discusses noise as a nuisance for humans but does not connect to wildlife. Choice B describes bird communication but does not mention noise pollution or establish a research gap. Choice D is too general and does not create the specific bridge the researcher needs.",
    tags: ["synthesis"],
    estimatedTime: 55
  },

  {
    id: "rw-expression-013",
    section: "rw",
    domain: "expression",
    subdomain: "style-tone",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A historian is writing a textbook chapter about the economic causes of the French Revolution. The chapter is intended for undergraduate students and should maintain a scholarly yet accessible tone. The historian is describing how tax policies burdened the common people while the nobility remained exempt.",
    tableData: null,
    stem: "Which choice best maintains the appropriate tone for the textbook?",
    choices: [
      { label: "A", text: "The tax system in pre-revolutionary France was ridiculously unfair—the rich nobles basically got off scot-free while regular people were stuck paying for everything." },
      { label: "B", text: "The common people of France were so fed up with paying all the taxes that they eventually snapped and decided to overthrow the whole system." },
      { label: "C", text: "France's ancien régime tax structure placed a disproportionate burden on the Third Estate: while the nobility and clergy enjoyed broad exemptions, peasants and the urban working class bore the brunt of direct taxation, fueling widespread resentment." },
      { label: "D", text: "The socioeconomic ramifications of the asymmetrical distribution of fiscal obligations across stratified societal hierarchies precipitated the coalescence of revolutionary sentiment among the subaltern classes." }
    ],
    correctAnswer: "C",
    explanation: "Choice C strikes the right balance for an undergraduate textbook: it uses precise historical terminology ('ancien régime,' 'Third Estate') and presents the information objectively while remaining clear and accessible. Choice A is too informal ('ridiculously unfair,' 'got off scot-free'). Choice B is colloquial and oversimplified ('snapped and decided to overthrow'). Choice D is excessively dense with jargon and would alienate rather than engage undergraduate readers.",
    tags: ["style-tone"],
    estimatedTime: 50
  },

  {
    id: "rw-expression-014",
    section: "rw",
    domain: "expression",
    subdomain: "sentence-combining",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "The James Webb Space Telescope was launched in December 2021. It is the most powerful space telescope ever built. Scientists designed it primarily to observe the earliest galaxies that formed after the Big Bang.",
    tableData: null,
    stem: "Which choice most effectively combines the underlined sentences?",
    choices: [
      { label: "A", text: "The James Webb Space Telescope was launched in December 2021, and it is the most powerful space telescope ever built, and scientists designed it primarily to observe the earliest galaxies that formed after the Big Bang." },
      { label: "B", text: "Launched in December 2021, the James Webb Space Telescope—the most powerful space telescope ever built—was designed primarily to observe the earliest galaxies that formed after the Big Bang." },
      { label: "C", text: "Scientists designed the James Webb Space Telescope, launched in December 2021, to observe the earliest galaxies, and it is the most powerful space telescope ever built." },
      { label: "D", text: "In December 2021, the James Webb Space Telescope was launched, being the most powerful space telescope ever built and designed primarily to observe the earliest galaxies that formed after the Big Bang." }
    ],
    correctAnswer: "B",
    explanation: "Choice B elegantly integrates all three pieces of information: the launch date is placed in an introductory participial phrase, the telescope's status as the most powerful ever built is set off as an appositive, and its primary purpose anchors the main clause. The result is a clear, well-structured sentence. Choice A is a run-on. Choice C awkwardly places the most important descriptor ('most powerful') at the end as an afterthought. Choice D uses the weak participial 'being,' which creates an awkward construction.",
    tags: ["sentence-combining"],
    estimatedTime: 55
  },

  {
    id: "rw-expression-015",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "Electric vehicles produce zero direct emissions, which makes them appealing as a solution to urban air pollution. ______ the environmental benefits of electric vehicles depend heavily on how the electricity used to charge them is generated—in regions that rely on coal-fired power plants, the overall carbon footprint of an electric vehicle may not be significantly lower than that of a conventional car.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "Furthermore," },
      { label: "B", text: "Similarly," },
      { label: "C", text: "In other words," },
      { label: "D", text: "That said," }
    ],
    correctAnswer: "D",
    explanation: "The second sentence introduces a qualification or caveat to the positive claim in the first sentence: while EVs produce zero direct emissions, their overall environmental benefit depends on the energy source. 'That said' effectively signals this concessive relationship—it acknowledges the previous point while introducing a complicating factor. 'Furthermore' would add a supporting point, 'Similarly' would draw a parallel, and 'In other words' would rephrase the same idea.",
    tags: ["transitions"],
    estimatedTime: 50
  },

  {
    id: "rw-expression-016",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "medium",
    type: "multiple-choice",
    passage: "A student is writing an essay about the history of jazz music for a music appreciation class. The student wants to describe how jazz evolved from its origins in New Orleans by emphasizing the role that migration played in spreading the genre to other American cities.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Jazz music has many subgenres, including bebop, cool jazz, free jazz, and fusion, each of which developed its own distinctive sound and attracted devoted audiences." },
      { label: "B", text: "Jazz originated in New Orleans in the early twentieth century, blending African American musical traditions with blues, ragtime, and brass band marches." },
      { label: "C", text: "As tens of thousands of African Americans migrated northward during the Great Migration, they carried jazz from its birthplace in New Orleans to cities like Chicago, Kansas City, and New York, where the music absorbed local influences and evolved into new styles." },
      { label: "D", text: "Many of the greatest jazz musicians, such as Louis Armstrong and Duke Ellington, became international celebrities who performed to sold-out audiences around the world." }
    ],
    correctAnswer: "C",
    explanation: "Choice C directly addresses both elements the student wants to emphasize: jazz's New Orleans origins and the specific role of migration (the Great Migration) in spreading the genre to other cities. It also notes that jazz evolved as it reached new locations, connecting migration to musical development. Choice A discusses subgenres without mentioning migration. Choice B describes jazz's origins but not its spread. Choice D focuses on individual musicians' fame rather than the migration-driven spread of the genre.",
    tags: ["synthesis"],
    estimatedTime: 50
  },

  // ===== HARD (8 questions) =====

  {
    id: "rw-expression-017",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "A student is writing a research paper about the ethical implications of artificial intelligence in criminal sentencing. The student wants to craft a thesis statement that acknowledges AI's potential to reduce human bias in sentencing while also arguing that reliance on algorithmic tools introduces new forms of inequity that must be addressed before widespread adoption.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "Although AI-driven sentencing tools hold promise for mitigating the subjective biases that have long plagued judicial decision-making, these systems risk encoding and amplifying existing societal inequities—particularly those embedded in historical crime data—making rigorous auditing and regulatory oversight essential prerequisites for their adoption." },
      { label: "B", text: "Artificial intelligence is increasingly being used in criminal sentencing, and while some experts support this trend, others have raised concerns about whether the technology is ready for such a consequential application." },
      { label: "C", text: "The use of artificial intelligence in criminal sentencing is a controversial topic that raises important questions about fairness, transparency, and accountability in the justice system." },
      { label: "D", text: "AI sentencing tools should not be used in the criminal justice system because they are trained on biased data and cannot account for the unique circumstances of individual defendants." }
    ],
    correctAnswer: "A",
    explanation: "Choice A fulfills both requirements of the thesis: it acknowledges AI's potential benefit (mitigating subjective biases in judicial decision-making) and argues that algorithmic tools introduce new forms of inequity (encoding and amplifying societal inequities from historical crime data), while specifying that auditing and oversight must precede adoption. Choice B merely notes that opinions differ without taking a position. Choice C identifies the topic as controversial without presenting an argument. Choice D takes a one-sided stance against AI sentencing without acknowledging any potential benefits.",
    tags: ["synthesis"],
    estimatedTime: 70
  },

  {
    id: "rw-expression-018",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "The prevailing theory in the 1990s held that the primary cause of colony collapse disorder in honeybees was the varroa mite, a parasite that feeds on bee larvae. Subsequent research revealed, however, that colonies treated for varroa mites still experienced collapse at alarming rates. ______ scientists began investigating a more complex model in which pesticide exposure, nutritional stress, and pathogen load interact synergistically to weaken colonies beyond any single factor's individual effect.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "Consequently," },
      { label: "B", text: "Regardless," },
      { label: "C", text: "Coincidentally," },
      { label: "D", text: "Alternatively," }
    ],
    correctAnswer: "A",
    explanation: "The passage presents a logical chain: the initial theory was that varroa mites caused colony collapse, but treated colonies still collapsed, so scientists pursued a more complex explanation. 'Consequently' correctly signals that the investigation of a new model was a direct result of the failure of the single-cause theory. 'Regardless' would dismiss the prior information rather than build on it. 'Coincidentally' would suggest the shift was unrelated. 'Alternatively' would present the new model as a competing option rather than a response to evidence.",
    tags: ["transitions"],
    estimatedTime: 60
  },

  {
    id: "rw-expression-019",
    section: "rw",
    domain: "expression",
    subdomain: "style-tone",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "A literary critic is writing a review of a newly published novel for an academic journal. The critic wants to praise the author's use of an unreliable narrator while also noting that the technique occasionally undermines the emotional impact of key scenes. The review should reflect the nuanced, measured tone expected in academic literary criticism.",
    tableData: null,
    stem: "Which choice best maintains the appropriate tone for the review?",
    choices: [
      { label: "A", text: "The author's unreliable narrator is brilliant and makes the whole book a thrilling puzzle, though a few emotional scenes fall flat because you can't trust anything the narrator says." },
      { label: "B", text: "The deployment of an unreliable narrator represents the novel's most sophisticated formal achievement, lending an epistemological complexity to the narrative that rewards attentive rereading; however, this very instability of perspective occasionally attenuates the affective force of pivotal scenes, as the reader's hermeneutic vigilance competes with emotional immersion." },
      { label: "C", text: "The narrator is unreliable, which is interesting but also problematic because it makes some parts of the book less emotionally powerful than they could have been." },
      { label: "D", text: "By employing an unreliable narrator, the author crafts a richly layered reading experience that invites sustained interpretive engagement; at certain pivotal moments, however, the narrative uncertainty that elsewhere energizes the text risks distancing readers from the emotional stakes of the scene." }
    ],
    correctAnswer: "D",
    explanation: "Choice D achieves the nuanced, measured tone of academic literary criticism: it praises the technique with precise critical language ('richly layered reading experience,' 'sustained interpretive engagement') and offers a calibrated critique ('risks distancing readers from the emotional stakes') without being either dismissive or effusive. Choice A is too informal ('brilliant,' 'thrilling puzzle,' 'fall flat'). Choice B, while scholarly, is overwrought with jargon ('epistemological complexity,' 'hermeneutic vigilance,' 'affective force') to the point of inaccessibility. Choice C is too casual and underdeveloped for an academic journal.",
    tags: ["style-tone"],
    estimatedTime: 70
  },

  {
    id: "rw-expression-020",
    section: "rw",
    domain: "expression",
    subdomain: "sentence-combining",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "The coelacanth is a deep-sea fish once believed to have gone extinct 66 million years ago. A living specimen was discovered off the coast of South Africa in 1938. This discovery stunned the scientific community. It fundamentally altered scientists' understanding of evolutionary timelines.",
    tableData: null,
    stem: "Which choice most effectively combines the underlined sentences?",
    choices: [
      { label: "A", text: "A living specimen of the coelacanth, a deep-sea fish once believed to have gone extinct 66 million years ago, was discovered off the coast of South Africa in 1938, a finding that stunned the scientific community and fundamentally altered scientists' understanding of evolutionary timelines." },
      { label: "B", text: "The coelacanth is a deep-sea fish once believed to have gone extinct 66 million years ago, but a living specimen was discovered off the coast of South Africa in 1938, and this discovery stunned the scientific community and fundamentally altered scientists' understanding of evolutionary timelines." },
      { label: "C", text: "Once believed to have gone extinct 66 million years ago, the coelacanth stunned the scientific community and fundamentally altered understanding of evolutionary timelines when a living specimen was discovered off the coast of South Africa in 1938." },
      { label: "D", text: "The coelacanth was once believed to have gone extinct 66 million years ago; however, a living specimen was discovered in 1938 off the coast of South Africa, and the scientific community was stunned, and their understanding of evolutionary timelines was fundamentally altered." }
    ],
    correctAnswer: "A",
    explanation: "Choice A integrates all four sentences into a cohesive whole with clear subordination: the coelacanth's identity and presumed extinction are placed in an appositive ('a deep-sea fish once believed to have gone extinct 66 million years ago'), the discovery forms the main clause, and the impact is conveyed through a relative clause ('a finding that stunned...and fundamentally altered...'). Choice C loses the detail that the coelacanth is a deep-sea fish. Choice B chains clauses with 'but' and 'and,' creating a run-on feel. Choice D uses multiple 'and' connectors and passive voice, resulting in a sprawling, unfocused sentence.",
    tags: ["sentence-combining"],
    estimatedTime: 65
  },

  {
    id: "rw-expression-021",
    section: "rw",
    domain: "expression",
    subdomain: "concision",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "A student is revising a research paper on renewable energy policy. One passage reads: 'It is important to note that the implementation of solar energy tax incentives has, in many cases and in a number of different situations, been shown to be an effective method by which to encourage and promote the adoption and installation of residential solar panel systems by homeowners who own their own homes.'",
    tableData: null,
    stem: "Which choice is the most concise revision that retains the original meaning?",
    choices: [
      { label: "A", text: "It is important to note that solar energy tax incentives have often been shown to effectively encourage homeowners to adopt and install residential solar panel systems." },
      { label: "B", text: "The implementation of solar energy tax incentives has, in many cases, been an effective method for promoting the adoption of residential solar panels by homeowners." },
      { label: "C", text: "Solar energy tax incentives have frequently proven effective at encouraging homeowners to install residential solar panels." },
      { label: "D", text: "Tax incentives for solar energy have been shown to be effective in many situations at encouraging and promoting the installation of solar panel systems on residential homes owned by homeowners." }
    ],
    correctAnswer: "C",
    explanation: "Choice C is the most concise while fully preserving the original meaning. It eliminates the empty opening phrase ('It is important to note that'), removes redundant pairs ('encourage and promote,' 'adoption and installation'), cuts the wordy construction 'has been shown to be an effective method by which to,' and drops 'homeowners who own their own homes' in favor of simply 'homeowners.' Choice A still opens with the unnecessary 'It is important to note that' and includes the redundant 'adopt and install.' Choice B retains wordy phrasing ('the implementation of,' 'an effective method for promoting'). Choice D keeps several redundancies ('encouraging and promoting,' 'residential homes owned by homeowners').",
    tags: ["concision"],
    estimatedTime: 60
  },

  {
    id: "rw-expression-022",
    section: "rw",
    domain: "expression",
    subdomain: "rhetorical-synthesis",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "A student is writing a comparative analysis of two approaches to urban planning for a sociology seminar. The student wants to craft a sentence that introduces both the \"New Urbanism\" movement, which advocates for walkable mixed-use neighborhoods, and the \"Landscape Urbanism\" movement, which prioritizes ecological infrastructure and green networks. The sentence should present the two approaches as complementary rather than competing frameworks.",
    tableData: null,
    stem: "Which choice most effectively accomplishes this goal?",
    choices: [
      { label: "A", text: "New Urbanism focuses on walkable neighborhoods while Landscape Urbanism emphasizes green infrastructure, and each approach has its own strengths and weaknesses that urban planners must consider." },
      { label: "B", text: "Rather than viewing New Urbanism's emphasis on walkable mixed-use neighborhoods and Landscape Urbanism's prioritization of ecological infrastructure as opposing visions, planners increasingly recognize that integrating both frameworks yields more resilient, livable cities than either approach achieves alone." },
      { label: "C", text: "New Urbanism and Landscape Urbanism are two of the most influential movements in contemporary urban planning, and they have shaped the way cities around the world think about development and sustainability." },
      { label: "D", text: "New Urbanism is better than Landscape Urbanism in some respects because it creates more vibrant street life, but Landscape Urbanism offers important environmental benefits that New Urbanism sometimes overlooks." }
    ],
    correctAnswer: "B",
    explanation: "Choice B explicitly frames the two movements as complementary ('integrating both frameworks yields more resilient, livable cities than either approach achieves alone') while accurately describing each movement's focus. It also directly counters the assumption that they are competing ('Rather than viewing...as opposing visions'). Choice A presents them neutrally but with a vague 'strengths and weaknesses' conclusion that does not establish complementarity. Choice C merely identifies them as influential without comparing them. Choice D sets up a competitive comparison ('better than...in some respects'), which contradicts the goal of presenting the approaches as complementary.",
    tags: ["synthesis"],
    estimatedTime: 75
  },

  {
    id: "rw-expression-023",
    section: "rw",
    domain: "expression",
    subdomain: "transitions",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "Archaeologists have long relied on radiocarbon dating to determine the age of organic artifacts, and the technique has proven remarkably accurate for specimens up to about 50,000 years old. For older specimens, however, radiocarbon dating is unreliable because the remaining carbon-14 is too scarce to measure precisely. ______ researchers studying artifacts from the Early Stone Age—which began roughly 2.6 million years ago—must turn to alternative methods such as potassium-argon dating, which measures the decay of potassium-40 in volcanic rock layers surrounding the artifacts.",
    tableData: null,
    stem: "Which choice most effectively signals the relationship between these ideas?",
    choices: [
      { label: "A", text: "In any case," },
      { label: "B", text: "For this reason," },
      { label: "C", text: "Meanwhile," },
      { label: "D", text: "By comparison," }
    ],
    correctAnswer: "B",
    explanation: "The passage establishes that radiocarbon dating fails for very old specimens (the cause), and the final sentence explains that researchers studying Early Stone Age artifacts must therefore use alternative dating methods (the effect). 'For this reason' precisely signals this causal relationship. 'In any case' would dismiss the preceding discussion. 'Meanwhile' would suggest simultaneous but unrelated events. 'By comparison' would introduce a contrast between two parallel items rather than a cause-and-effect sequence.",
    tags: ["transitions"],
    estimatedTime: 65
  },

  {
    id: "rw-expression-024",
    section: "rw",
    domain: "expression",
    subdomain: "style-tone",
    difficulty: "hard",
    type: "multiple-choice",
    passage: "A marine biologist is writing a public-facing article for a science magazine aimed at general adult readers. The biologist wants to explain the concept of ocean acidification—the process by which increased atmospheric carbon dioxide lowers the pH of seawater—in a way that is scientifically accurate but also vivid and accessible to a non-specialist audience.",
    tableData: null,
    stem: "Which choice best achieves this goal?",
    choices: [
      { label: "A", text: "The ocean's pH levels are decreasing as a consequence of elevated anthropogenic CO2 emissions, resulting in the undersaturation of calcium carbonate minerals, which compromises the biocalcification processes of marine calcifiers such as pteropods and scleractinian corals." },
      { label: "B", text: "Carbon dioxide pollution is making the oceans super acidic, basically melting the shells right off of sea creatures, which is pretty terrifying if you think about it." },
      { label: "C", text: "As the ocean absorbs excess carbon dioxide from the atmosphere, its chemistry shifts: the water becomes more acidic, gradually corroding the calcium carbonate shells and skeletons that creatures like corals and oysters depend on for survival—a process scientists call ocean acidification." },
      { label: "D", text: "Ocean acidification is a problem that scientists are studying because it affects marine life in various ways, including making it harder for some organisms to build their shells." }
    ],
    correctAnswer: "C",
    explanation: "Choice C balances scientific accuracy and accessibility perfectly for a general adult audience. It explains the mechanism clearly (ocean absorbs CO2, water becomes more acidic, shells corrode), uses vivid language that non-specialists can visualize ('corroding the calcium carbonate shells and skeletons'), names specific affected organisms ('corals and oysters'), and defines the term at the end. Choice A is laden with technical jargon ('undersaturation of calcium carbonate minerals,' 'biocalcification processes,' 'pteropods and scleractinian corals') that would alienate a general audience. Choice B is scientifically inaccurate ('super acidic,' 'melting the shells') and too casual. Choice D is accurate but vague and lacks the vivid, engaging quality expected of a science magazine article.",
    tags: ["style-tone"],
    estimatedTime: 80
  }

];
