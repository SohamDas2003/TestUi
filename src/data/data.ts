export type TestQuestion =
  | {
      id: number;
      question: string;
      type?: 'mcq';
      options: {
        id: string;
        text: string;
      }[];
      correctAnswer: string;
      passage?: string; // Optional passage for reading questions
    }
  | {
      id: number;
      question: string;
      type: 'input';
      correctAnswer: string;
      passage?: string; // Optional passage
    };

export interface ModuleData {
  title: string;
  section: string;
  module: string;
  timeLimit: string;
  totalQuestions: number;
  hasPassage: boolean; // New field to determine if left panel should show
  questions: TestQuestion[];
}

export interface SATTestData {
  testName: string;
  modules: ModuleData[];
  currentModuleIndex: number;
}

// Real SAT structure with authentic timing and question counts
export const satTestData: SATTestData = {
  testName: "SAT Practice Test",
  currentModuleIndex: 0,
  modules: [
    // Section 1: Reading and Writing Module 1
    {
      title: "Reading and Writing",
      section: "Section 1",
      module: "Module 1",
      timeLimit: "32:00",
      totalQuestions: 27,
      hasPassage: true,
      questions: [
        // Reading Comprehension Questions (1-13)
        {
          id: 1,
          passage: "The following text is from Virginia Woolf's 1925 novel \"Mrs. Dalloway.\"\n\nFor it was the middle of June. The War was over, except for some one like Mrs. Foxcroft at the Embassy last night eating her heart out because that nice boy was killed and now the old Manor House must go to a cousin; or Lady Bexborough who opened a bazaar, they said, with the telegram in her hand, John, her favourite, killed; but it was over; thank Heaven—over. It was June. The King and Queen were at the Palace. And everywhere, though it was still so early, there was a beating, a stirring of galloping ponies, tapping of cricket bats; Lords, Ascot, Ranelagh and all the rest of it; wrapped in the soft mesh of the grey-blue morning air, which, as the day wore on, would unwind them, and set down on their lawns and pitches the bouncing ponies, whose forefeet just struck the ground and up they sprung, the whirling young men, and laughing girls in their transparent muslins who, even now, after dancing all night, were taking hold of the railings, mounting the omnibuses.",
          question: "Which choice best describes the overall structure of the text?",
          type: 'mcq',
          options: [
            { id: "A", text: "It presents a problem and then describes various attempts to solve it." },
            { id: "B", text: "It establishes a contrast between wartime loss and peacetime celebration." },
            { id: "C", text: "It introduces a character and then chronicles that character's thoughts." },
            { id: "D", text: "It makes a claim and then presents evidence to support that claim." }
          ],
          correctAnswer: "B"
        },
        {
          id: 2,
          passage: "Archaeologist Sophia Perdikaris and her team studied artifacts from the Faroe Islands to learn about the diet of people who lived there between 800 and 1200 CE. By analyzing animal bones found in the garbage heaps of four locations, they concluded that these early inhabitants relied heavily on marine mammals and fish for sustenance.",
          question: "Which finding, if true, would most directly support the conclusion reached by Perdikaris and her team?",
          type: 'mcq',
          options: [
            { id: "A", text: "The bones show evidence of being shaped into tools and other implements." },
            { id: "B", text: "The bones were found alongside evidence of cooking fires and food preparation areas." },
            { id: "C", text: "Most of the bones found were from seals, whales, fish, and other sea creatures." },
            { id: "D", text: "The bones date to the same time period across all four locations studied." }
          ],
          correctAnswer: "C"
        },
        {
          id: 3,
          passage: "While studying the history of scientific innovation, Donovan McCann noticed that many breakthrough discoveries were initially met with resistance from the established scientific community. For instance, when Alfred Wegener proposed continental drift theory in 1912, most geologists rejected it. It wasn't until the 1960s, when new evidence about seafloor spreading emerged, that Wegener's ideas gained widespread acceptance.",
          question: "Which choice best states the main idea of the text?",
          type: 'mcq',
          options: [
            { id: "A", text: "Scientific breakthroughs often face initial skepticism before being accepted." },
            { id: "B", text: "Continental drift theory was ahead of its time when first proposed." },
            { id: "C", text: "The scientific community is generally resistant to new ideas." },
            { id: "D", text: "Seafloor spreading provided crucial evidence for continental drift." }
          ],
          correctAnswer: "A"
        },
        {
          id: 4,
          passage: "Text 1\nHistorian Maria Santos argues that the development of trade routes in medieval Europe was primarily driven by the search for luxury goods like spices and silk. These high-value, low-weight items could generate enormous profits for merchants willing to undertake long and dangerous journeys.\n\nText 2\nEconomist David Chen contends that medieval European trade was fundamentally about basic necessities. Salt for food preservation, iron for tools and weapons, and grain for sustenance were the real drivers of commerce, with luxury goods representing only a small fraction of total trade volume.",
          question: "Based on the texts, how would Chen most likely respond to Santos's argument?",
          type: 'mcq',
          options: [
            { id: "A", text: "By agreeing that luxury goods motivated trade but arguing they were not the primary driver." },
            { id: "B", text: "By questioning whether medieval merchants actually made substantial profits from luxury goods." },
            { id: "C", text: "By emphasizing that everyday necessities, not luxury items, were the foundation of medieval trade." },
            { id: "D", text: "By suggesting that both luxury goods and necessities played equally important roles in trade." }
          ],
          correctAnswer: "C"
        },
        {
          id: 5,
          passage: "The ability of certain plants to thrive in extremely saline environments has long fascinated botanists. Halophytes, as these salt-tolerant plants are known, have evolved various mechanisms to cope with high salinity levels that would kill most other plants. Some halophytes accumulate salt in specialized structures called salt bladders, while others actively pump salt out of their tissues.",
          question: "According to the text, what distinguishes halophytes from most other plants?",
          type: 'mcq',
          options: [
            { id: "A", text: "Their ability to survive in environments with high salt concentrations" },
            { id: "B", text: "Their specialized structures called salt bladders" },
            { id: "C", text: "Their capacity to pump salt out of their tissues" },
            { id: "D", text: "Their evolutionary adaptation to marine environments" }
          ],
          correctAnswer: "A"
        },

        // Writing and Language Questions (6-27)
        {
          id: 6,
          question: "During the 1960s, NASA engineers _____ ambitious plans to send humans to Mars within a decade, but budget constraints and technical challenges ultimately delayed these missions indefinitely.",
          type: 'mcq',
          options: [
            { id: "A", text: "develops" },
            { id: "B", text: "developed" },
            { id: "C", text: "will develop" },
            { id: "D", text: "had been developing" }
          ],
          correctAnswer: "B"
        },
        {
          id: 7,
          question: "The artist's latest exhibition features sculptures made from recycled materials, _____ viewers to consider the environmental impact of consumer culture.",
          type: 'mcq',
          options: [
            { id: "A", text: "prompted" },
            { id: "B", text: "prompting" },
            { id: "C", text: "prompts" },
            { id: "D", text: "having prompted" }
          ],
          correctAnswer: "B"
        },
        {
          id: 8,
          question: "The research team's findings suggest that regular exercise not only improves physical health _____ enhances cognitive function in older adults.",
          type: 'mcq',
          options: [
            { id: "A", text: "but also" },
            { id: "B", text: "and also" },
            { id: "C", text: "but" },
            { id: "D", text: "as well as" }
          ],
          correctAnswer: "A"
        },
        {
          id: 9,
          passage: "Climate scientists have been studying the effects of rising global temperatures on polar ice sheets. Their research indicates that ice loss has accelerated dramatically over the past two decades. This acceleration is particularly pronounced in Greenland and Antarctica, where massive ice sheets contain enough water to raise global sea levels by several meters if they were to melt completely.",
          question: "The writer wants to add a sentence that emphasizes the urgency of the climate situation. Which choice most effectively accomplishes this goal?",
          type: 'mcq',
          options: [
            { id: "A", text: "Scientists use various methods to measure ice sheet thickness and movement." },
            { id: "B", text: "The consequences of continued ice loss could be catastrophic for coastal communities worldwide." },
            { id: "C", text: "Ice sheets have existed for millions of years and contain valuable climate data." },
            { id: "D", text: "Researchers publish their findings in peer-reviewed scientific journals." }
          ],
          correctAnswer: "B"
        },
        {
          id: 10,
          question: "Neither the students nor the teacher _____ prepared for the unexpected fire drill that interrupted the chemistry experiment.",
          type: 'mcq',
          options: [
            { id: "A", text: "was" },
            { id: "B", text: "were" },
            { id: "C", text: "are" },
            { id: "D", text: "have been" }
          ],
          correctAnswer: "A"
        },
        {
          id: 11,
          question: "The museum's new interactive exhibit allows visitors to experience historical events through virtual reality technology, _____ them in ancient civilizations and significant moments in history.",
          type: 'mcq',
          options: [
            { id: "A", text: "immersing" },
            { id: "B", text: "to immerse" },
            { id: "C", text: "immersed" },
            { id: "D", text: "immerse" }
          ],
          correctAnswer: "A"
        },
        {
          id: 12,
          passage: "Marie Curie's groundbreaking research on radioactivity opened new frontiers in physics and chemistry. She was the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different scientific fields, and remains the only person to achieve this distinction in the sciences.",
          question: "Which choice provides the most specific information about Curie's achievements?",
          type: 'mcq',
          options: [
            { id: "A", text: "NO CHANGE" },
            { id: "B", text: "She won Nobel Prizes in Physics (1903) and Chemistry (1911)" },
            { id: "C", text: "Her Nobel Prizes recognized her important scientific contributions" },
            { id: "D", text: "She received international recognition for her scientific work" }
          ],
          correctAnswer: "B"
        },
        {
          id: 13,
          question: "The company's new policy requires employees _____ their electronic devices during important meetings to minimize distractions and improve focus.",
          type: 'mcq',
          options: [
            { id: "A", text: "turning off" },
            { id: "B", text: "to turn off" },
            { id: "C", text: "turn off" },
            { id: "D", text: "turned off" }
          ],
          correctAnswer: "B"
        },
        {
          id: 14,
          passage: "The ancient city of Petra in Jordan is famous for its stunning architecture carved directly into rose-colored sandstone cliffs. Built by the Nabataeans around the 4th century BCE, the city served as a crucial trading hub connecting Arabia, Egypt, and the Mediterranean world. Today, Petra attracts millions of visitors annually and has been designated a UNESCO World Heritage Site.",
          question: "The writer is considering deleting the underlined sentence. Should the writer make this deletion?",
          type: 'mcq',
          options: [
            { id: "A", text: "Yes, because it shifts focus away from Petra's architectural features." },
            { id: "B", text: "Yes, because it provides information that is not directly relevant to the main topic." },
            { id: "C", text: "No, because it provides important historical context about Petra's significance." },
            { id: "D", text: "No, because it explains why Petra was built in its particular location." }
          ],
          correctAnswer: "C"
        },
        {
          id: 15,
          question: "The rapid development of artificial intelligence has raised important questions about _____ impact on employment, privacy, and decision-making in various sectors of society.",
          type: 'mcq',
          options: [
            { id: "A", text: "its" },
            { id: "B", text: "it's" },
            { id: "C", text: "their" },
            { id: "D", text: "there" }
          ],
          correctAnswer: "A"
        },
        {
          id: 16,
          question: "While most people think of bats as nocturnal creatures, some species are active during the day and _____ on fruit and nectar rather than insects.",
          type: 'mcq',
          options: [
            { id: "A", text: "feeds" },
            { id: "B", text: "feeding" },
            { id: "C", text: "feed" },
            { id: "D", text: "to feed" }
          ],
          correctAnswer: "C"
        },
        {
          id: 17,
          passage: "Urban beekeeping has gained popularity in recent years as cities around the world recognize the importance of pollinators for food security and biodiversity. Many urban beekeepers are motivated by environmental concerns and the desire to support declining bee populations. However, critics argue that urban beekeeping may actually harm wild bee species by creating competition for resources and potentially spreading diseases.",
          question: "Which choice most effectively combines the sentences at the underlined portion?",
          type: 'mcq',
          options: [
            { id: "A", text: "populations, but critics" },
            { id: "B", text: "populations; however, critics" },
            { id: "C", text: "populations. Critics" },
            { id: "D", text: "populations, critics" }
          ],
          correctAnswer: "A"
        },
        {
          id: 18,
          question: "The research team discovered that the ancient manuscript contained _____ previously unknown poems attributed to a medieval poet.",
          type: 'mcq',
          options: [
            { id: "A", text: "several" },
            { id: "B", text: "much" },
            { id: "C", text: "a great deal of" },
            { id: "D", text: "plenty" }
          ],
          correctAnswer: "A"
        },
        {
          id: 19,
          passage: "Renewable energy technologies have become increasingly cost-effective over the past decade. Solar panel prices have dropped by more than 80% since 2010, making solar power competitive with fossil fuels in many markets. Wind energy costs have also declined significantly, with some wind farms now producing electricity at lower costs than traditional power plants.",
          question: "The writer wants to conclude the passage with a sentence that reinforces the main idea. Which choice best accomplishes this goal?",
          type: 'mcq',
          options: [
            { id: "A", text: "These price reductions have made renewable energy an attractive option for both consumers and investors." },
            { id: "B", text: "Solar and wind technologies continue to improve in efficiency and reliability." },
            { id: "C", text: "Government subsidies have played a role in supporting renewable energy development." },
            { id: "D", text: "Fossil fuel prices have remained relatively stable during the same time period." }
          ],
          correctAnswer: "A"
        },
        {
          id: 20,
          question: "The chef's innovative approach to traditional cuisine involves _____ classic recipes with modern techniques and unexpected flavor combinations.",
          type: 'mcq',
          options: [
            { id: "A", text: "reinventing" },
            { id: "B", text: "to reinvent" },
            { id: "C", text: "reinvents" },
            { id: "D", text: "reinvented" }
          ],
          correctAnswer: "A"
        },
        {
          id: 21,
          question: "Students in the advanced mathematics course must complete _____ homework assignments and pass three comprehensive examinations to earn credit.",
          type: 'mcq',
          options: [
            { id: "A", text: "daily" },
            { id: "B", text: "each day" },
            { id: "C", text: "every day" },
            { id: "D", text: "all the daily" }
          ],
          correctAnswer: "A"
        },
        {
          id: 22,
          passage: "The international space station orbits Earth at an altitude of approximately 400 kilometers, completing one orbit every 90 minutes. This allows astronauts aboard the station to witness 16 sunrises and sunsets each day. The station serves as a platform for scientific research and international cooperation in space exploration.",
          question: "Which choice provides the most effective transition to the information that follows?",
          type: 'mcq',
          options: [
            { id: "A", text: "This rapid orbital period creates a unique experience for the crew:" },
            { id: "B", text: "The station's orbit is carefully maintained:" },
            { id: "C", text: "Despite these challenging conditions," },
            { id: "D", text: "In addition to its orbital characteristics," }
          ],
          correctAnswer: "A"
        },
        {
          id: 23,
          question: "The documentary filmmaker spent three years _____ the migration patterns of Arctic terns, which travel roughly 44,000 miles annually from Arctic to Antarctic and back.",
          type: 'mcq',
          options: [
            { id: "A", text: "documenting" },
            { id: "B", text: "to document" },
            { id: "C", text: "document" },
            { id: "D", text: "documented" }
          ],
          correctAnswer: "A"
        },
        {
          id: 24,
          question: "Despite the team's _____ preparation for the championship, they were unable to overcome their opponents' superior experience and strategy.",
          type: 'mcq',
          options: [
            { id: "A", text: "intensive" },
            { id: "B", text: "intense" },
            { id: "C", text: "intensely" },
            { id: "D", text: "intensified" }
          ],
          correctAnswer: "A"
        },
        {
          id: 25,
          passage: "Marine biologists studying coral reef ecosystems have documented alarming rates of coral bleaching in recent years. Rising ocean temperatures cause corals to expel the symbiotic algae that give them their vibrant colors and provide essential nutrients. Without these algae, corals appear white or \"bleached\" and become more susceptible to disease and death.",
          question: "The writer is considering adding the following sentence after the last sentence of the passage: \"This process threatens the survival of entire reef ecosystems that support thousands of marine species.\" Should the writer make this addition?",
          type: 'mcq',
          options: [
            { id: "A", text: "Yes, because it emphasizes the broader ecological impact of coral bleaching." },
            { id: "B", text: "Yes, because it provides specific data about marine biodiversity." },
            { id: "C", text: "No, because it introduces information not directly related to coral bleaching." },
            { id: "D", text: "No, because it contradicts information provided earlier in the passage." }
          ],
          correctAnswer: "A"
        },
        {
          id: 26,
          question: "The architect's design for the new library incorporates sustainable features _____ green roofs, solar panels, and energy-efficient lighting systems.",
          type: 'mcq',
          options: [
            { id: "A", text: "such as" },
            { id: "B", text: "including" },
            { id: "C", text: "like" },
            { id: "D", text: "for example" }
          ],
          correctAnswer: "A"
        },
        {
          id: 27,
          question: "Recent studies suggest that people who regularly practice mindfulness meditation experience _____ levels of stress and improved emotional regulation compared to non-meditators.",
          type: 'mcq',
          options: [
            { id: "A", text: "fewer" },
            { id: "B", text: "less" },
            { id: "C", text: "lower" },
            { id: "D", text: "reduced" }
          ],
          correctAnswer: "C"
        }
      ]
    },

    // Section 1: Reading and Writing Module 2
    {
      title: "Reading and Writing",
      section: "Section 1", 
      module: "Module 2",
      timeLimit: "32:00",
      totalQuestions: 27,
      hasPassage: true,
      questions: [
        // Reading Comprehension Questions (1-13)
        {
          id: 1,
          passage: "The following text is from Zora Neale Hurston's 1937 novel \"Their Eyes Were Watching God.\"\n\nJanie saw her life like a great tree in leaf with the things suffered, things enjoyed, things done and undone. Dawn and doom was in the branches. She had been to the horizon and back and now she could sit upon her porch and live through her memories. The wind came back with triple force. This time she was not afraid. She let it come as it would. She could handle it now because she had been down in the dark hole of sorrow and climbed out.",
          question: "Which choice best describes the function of the first sentence in the overall structure of the text?",
          type: 'mcq',
          options: [
            { id: "A", text: "It introduces a conflict that the remainder of the text will resolve." },
            { id: "B", text: "It establishes a metaphor that helps convey the character's perspective on her life." },
            { id: "C", text: "It presents a question that the rest of the passage will answer." },
            { id: "D", text: "It makes a claim that the following sentences will support with evidence." }
          ],
          correctAnswer: "B"
        },
        {
          id: 2,
          passage: "Biologist Sarah Chen conducted research on urban bird populations in metropolitan areas. She discovered that certain songbird species have altered their singing patterns in response to city noise pollution. These birds now sing at higher frequencies and longer durations to communicate effectively over the background noise of traffic and construction.",
          question: "Which finding, if true, would most directly support Chen's conclusion about urban songbirds?",
          type: 'mcq',
          options: [
            { id: "A", text: "Urban birds have larger territories than their rural counterparts." },
            { id: "B", text: "City birds begin singing earlier in the morning than rural birds." },
            { id: "C", text: "Recordings show urban bird songs have measurably higher pitch than rural bird songs of the same species." },
            { id: "D", text: "Urban bird populations have increased over the past decade." }
          ],
          correctAnswer: "C"
        },
        {
          id: 3,
          passage: "Text 1\nArt historian Elena Rodriguez argues that the Renaissance was primarily driven by the rediscovery of classical Greek and Roman texts. She contends that these ancient works provided the intellectual foundation that sparked innovation in art, science, and philosophy during the 14th-16th centuries.\n\nText 2\nHowever, historian Marcus Thompson suggests that economic factors were more crucial to the Renaissance. He points to the rise of merchant banking, increased trade routes, and urban prosperity as the real catalysts that allowed artistic and intellectual pursuits to flourish.",
          question: "Based on the texts, how would Thompson most likely respond to Rodriguez's argument?",
          type: 'mcq',
          options: [
            { id: "A", text: "By agreeing that classical texts were important but arguing they were not the primary cause." },
            { id: "B", text: "By questioning whether Renaissance thinkers actually had access to many classical works." },
            { id: "C", text: "By emphasizing that economic conditions, not intellectual influences, created the foundation for Renaissance achievements." },
            { id: "D", text: "By suggesting that both classical texts and economic factors were equally important." }
          ],
          correctAnswer: "C"
        },
        {
          id: 4,
          passage: "Marine biologist Dr. James Liu has been studying the behavior of octopuses in laboratory settings. His research reveals that these cephalopods demonstrate remarkable problem-solving abilities, including the capacity to open jars, navigate mazes, and use tools. Some octopuses have even been observed exhibiting what appears to be playful behavior when presented with novel objects.",
          question: "According to the text, Dr. Liu's research suggests that octopuses possess which of the following characteristics?",
          type: 'mcq',
          options: [
            { id: "A", text: "Advanced cognitive abilities typically associated with more complex animals" },
            { id: "B", text: "The ability to communicate with other octopuses through color changes" },
            { id: "C", text: "Skills that are primarily instinctual rather than learned" },
            { id: "D", text: "Behaviors that are identical to those observed in wild octopuses" }
          ],
          correctAnswer: "A"
        },
        {
          id: 5,
          passage: "Astronomer Dr. Rebecca Park recently discovered a new exoplanet located approximately 40 light-years from Earth. Initial observations suggest that this planet, designated Kepler-442c, orbits within its star's habitable zone—the region where liquid water could potentially exist on the planet's surface. While promising, Dr. Park cautions that many factors beyond distance from the star determine a planet's actual habitability.",
          question: "Which choice best describes the main idea of the text?",
          type: 'mcq',
          options: [
            { id: "A", text: "Dr. Park has definitively identified a planet that could support life." },
            { id: "B", text: "The discovery of Kepler-442c represents a significant breakthrough in the search for habitable worlds." },
            { id: "C", text: "A newly discovered exoplanet shows promise for habitability, but more research is needed." },
            { id: "D", text: "Kepler-442c is the closest potentially habitable planet ever discovered." }
          ],
          correctAnswer: "C"
        },

        // Writing and Language Questions (6-27)
        {
          id: 6,
          question: "The research team _____ data from over 10,000 participants across five different countries to ensure their findings would be statistically significant.",
          type: 'mcq',
          options: [
            { id: "A", text: "collected" },
            { id: "B", text: "collecting" },
            { id: "C", text: "collects" },
            { id: "D", text: "will collect" }
          ],
          correctAnswer: "A"
        },
        {
          id: 7,
          question: "The new public transportation system promises to reduce commute times, _____ pollution levels, and improve the overall quality of life for city residents.",
          type: 'mcq',
          options: [
            { id: "A", text: "lowered" },
            { id: "B", text: "lowering" },
            { id: "C", text: "lower" },
            { id: "D", text: "will lower" }
          ],
          correctAnswer: "C"
        },
        {
          id: 8,
          question: "Neither the coach nor the players _____ satisfied with the team's performance during the championship game.",
          type: 'mcq',
          options: [
            { id: "A", text: "was" },
            { id: "B", text: "were" },
            { id: "C", text: "is" },
            { id: "D", text: "are" }
          ],
          correctAnswer: "B"
        },
        {
          id: 9,
          passage: "Social media platforms have revolutionized how people communicate and share information. These digital networks enable instant global communication and have become essential tools for businesses, activists, and individuals alike. However, concerns about privacy, misinformation, and mental health impacts have led to increased scrutiny of these platforms.",
          question: "The writer wants to add a sentence that acknowledges both the benefits and drawbacks of social media. Which choice most effectively accomplishes this goal?",
          type: 'mcq',
          options: [
            { id: "A", text: "While social media offers unprecedented connectivity, it also presents significant challenges that society must address." },
            { id: "B", text: "Social media companies have invested billions of dollars in developing their platforms." },
            { id: "C", text: "The future of social media will likely involve new technologies and features." },
            { id: "D", text: "Most people spend several hours each day using social media platforms." }
          ],
          correctAnswer: "A"
        },
        {
          id: 10,
          question: "The museum's latest exhibition features artifacts _____ ancient civilizations that flourished thousands of years ago.",
          type: 'mcq',
          options: [
            { id: "A", text: "from" },
            { id: "B", text: "of" },
            { id: "C", text: "by" },
            { id: "D", text: "through" }
          ],
          correctAnswer: "A"
        },
        {
          id: 11,
          question: "The company's innovative approach to employee wellness includes _____ flexible work schedules, comprehensive health benefits, and on-site fitness facilities.",
          type: 'mcq',
          options: [
            { id: "A", text: "providing" },
            { id: "B", text: "to provide" },
            { id: "C", text: "provides" },
            { id: "D", text: "provided" }
          ],
          correctAnswer: "A"
        },
        {
          id: 12,
          passage: "Renewable energy sources such as solar and wind power have become increasingly economical alternatives to fossil fuels. As technology improves and costs continue to decline, many countries are investing heavily in these clean energy solutions. This shift represents not only an environmental imperative but also a significant economic opportunity.",
          question: "Which choice provides the most specific support for the claim about renewable energy becoming economical?",
          type: 'mcq',
          options: [
            { id: "A", text: "NO CHANGE" },
            { id: "B", text: "Solar panel costs have dropped by 70% over the past decade, while wind energy prices have fallen by 40%." },
            { id: "C", text: "Many environmental groups support the transition to renewable energy." },
            { id: "D", text: "Renewable energy technology continues to advance rapidly." }
          ],
          correctAnswer: "B"
        },
        {
          id: 13,
          question: "The university requires all students _____ at least one course in critical thinking and logical reasoning before graduation.",
          type: 'mcq',
          options: [
            { id: "A", text: "completing" },
            { id: "B", text: "to complete" },
            { id: "C", text: "complete" },
            { id: "D", text: "completed" }
          ],
          correctAnswer: "B"
        },
        {
          id: 14,
          passage: "The Great Wall of China, originally built as a defensive fortification, stretches over 13,000 miles across northern China. Construction began in the 7th century BCE and continued for centuries under various dynasties. Today, it stands as one of the most recognizable symbols of Chinese culture and attracts millions of tourists annually.",
          question: "The writer is considering deleting the underlined portion. Should the writer make this deletion?",
          type: 'mcq',
          options: [
            { id: "A", text: "Yes, because it contradicts information provided earlier in the passage." },
            { id: "B", text: "Yes, because it shifts focus away from the wall's historical significance." },
            { id: "C", text: "No, because it provides important context about the wall's original purpose." },
            { id: "D", text: "No, because it explains why the wall was built in northern China specifically." }
          ],
          correctAnswer: "C"
        },
        {
          id: 15,
          question: "The scientist's groundbreaking research has led to _____ understanding of how memories are formed and stored in the human brain.",
          type: 'mcq',
          options: [
            { id: "A", text: "a new" },
            { id: "B", text: "an new" },
            { id: "C", text: "the new" },
            { id: "D", text: "new" }
          ],
          correctAnswer: "A"
        },
        {
          id: 16,
          question: "While many people assume that creativity is an innate talent, research suggests that creative skills _____ through practice and deliberate effort.",
          type: 'mcq',
          options: [
            { id: "A", text: "can develop" },
            { id: "B", text: "can be developed" },
            { id: "C", text: "can be developing" },
            { id: "D", text: "can developed" }
          ],
          correctAnswer: "B"
        },
        {
          id: 17,
          passage: "Electric vehicles (EVs) are gaining popularity as consumers become more environmentally conscious. Government incentives and declining battery costs have made EVs more accessible to average buyers. However, challenges remain, including limited charging infrastructure and concerns about battery range, particularly for long-distance travel.",
          question: "Which choice most effectively combines the underlined sentences?",
          type: 'mcq',
          options: [
            { id: "A", text: "buyers, but challenges remain" },
            { id: "B", text: "buyers; however, challenges remain" },
            { id: "C", text: "buyers. Challenges remain" },
            { id: "D", text: "buyers, challenges remain" }
          ],
          correctAnswer: "A"
        },
        {
          id: 18,
          question: "The archaeological team uncovered _____ pottery fragments that provided valuable insights into the daily life of ancient inhabitants.",
          type: 'mcq',
          options: [
            { id: "A", text: "numerous" },
            { id: "B", text: "much" },
            { id: "C", text: "a great deal of" },
            { id: "D", text: "plenty" }
          ],
          correctAnswer: "A"
        },
        {
          id: 19,
          passage: "Artificial intelligence is transforming industries from healthcare to transportation. Machine learning algorithms can now diagnose diseases, predict equipment failures, and optimize supply chains with unprecedented accuracy. As AI technology continues to advance, its applications seem virtually limitless.",
          question: "The writer wants to conclude the passage with a sentence that emphasizes the future potential of AI. Which choice best accomplishes this goal?",
          type: 'mcq',
          options: [
            { id: "A", text: "AI development requires significant investment in research and infrastructure." },
            { id: "B", text: "The next decade will likely bring even more revolutionary applications of artificial intelligence." },
            { id: "C", text: "Many companies are hiring AI specialists to develop new products." },
            { id: "D", text: "AI technology has evolved rapidly since the 1950s." }
          ],
          correctAnswer: "B"
        },
        {
          id: 20,
          question: "The author's latest novel explores themes of identity and belonging through _____ the experiences of three generations of immigrants.",
          type: 'mcq',
          options: [
            { id: "A", text: "examining" },
            { id: "B", text: "to examine" },
            { id: "C", text: "examines" },
            { id: "D", text: "examined" }
          ],
          correctAnswer: "A"
        },
        {
          id: 21,
          question: "The conference participants will need to submit _____ research proposals by the deadline to be considered for presentation slots.",
          type: 'mcq',
          options: [
            { id: "A", text: "their" },
            { id: "B", text: "there" },
            { id: "C", text: "they're" },
            { id: "D", text: "theirs" }
          ],
          correctAnswer: "A"
        },
        {
          id: 22,
          passage: "The human genome contains approximately 3 billion base pairs of DNA, which carry the genetic instructions for all biological functions. Scientists have spent decades mapping this complex code, and their work has led to breakthrough treatments for genetic diseases. This research continues to unlock new possibilities for personalized medicine.",
          question: "Which choice provides the most effective transition between the second and third sentences?",
          type: 'mcq',
          options: [
            { id: "A", text: "In addition to this mapping effort," },
            { id: "B", text: "As a result of this extensive research," },
            { id: "C", text: "Despite these scientific advances," },
            { id: "D", text: "Before beginning this research," }
          ],
          correctAnswer: "B"
        },
        {
          id: 23,
          question: "The documentary filmmaker spent two years _____ the effects of climate change on Arctic communities.",
          type: 'mcq',
          options: [
            { id: "A", text: "documenting" },
            { id: "B", text: "to document" },
            { id: "C", text: "documents" },
            { id: "D", text: "documented" }
          ],
          correctAnswer: "A"
        },
        {
          id: 24,
          question: "Although the team faced _____ setbacks during development, they ultimately delivered the project on schedule.",
          type: 'mcq',
          options: [
            { id: "A", text: "significant" },
            { id: "B", text: "significantly" },
            { id: "C", text: "significance" },
            { id: "D", text: "signify" }
          ],
          correctAnswer: "A"
        },
        {
          id: 25,
          passage: "Urban gardens are becoming increasingly popular in cities worldwide as people seek to grow their own food and connect with nature. These green spaces provide fresh produce, improve air quality, and create community gathering places. Local governments are beginning to recognize the multiple benefits of urban agriculture and are providing support through grants and policy changes.",
          question: "The writer is considering adding the following sentence after the last sentence: \"Some cities have even incorporated urban farming into their long-term sustainability plans.\" Should the writer make this addition?",
          type: 'mcq',
          options: [
            { id: "A", text: "Yes, because it provides a specific example of government support for urban agriculture." },
            { id: "B", text: "Yes, because it introduces new information about sustainability planning." },
            { id: "C", text: "No, because it contradicts the information about government support mentioned earlier." },
            { id: "D", text: "No, because it shifts focus away from the benefits of urban gardens." }
          ],
          correctAnswer: "A"
        },
        {
          id: 26,
          question: "The new smartphone features several improvements _____ longer battery life, enhanced camera quality, and faster processing speeds.",
          type: 'mcq',
          options: [
            { id: "A", text: "such as" },
            { id: "B", text: "including" },
            { id: "C", text: "like" },
            { id: "D", text: "for instance" }
          ],
          correctAnswer: "B"
        },
        {
          id: 27,
          question: "Studies indicate that students who participate in regular physical activity demonstrate _____ academic performance and improved mental health compared to their sedentary peers.",
          type: 'mcq',
          options: [
            { id: "A", text: "better" },
            { id: "B", text: "more good" },
            { id: "C", text: "best" },
            { id: "D", text: "more better" }
          ],
          correctAnswer: "A"
        }
      ]
    },

    // Section 2: Math Module 1
    {
      title: "Math",
      section: "Section 2",
      module: "Module 1", 
      timeLimit: "35:00",
      totalQuestions: 22,
      hasPassage: false,
      questions: [
        // Multiple Choice Questions (1-15)
        {
          id: 1,
          question: "If 3x + 7 = 22, what is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "15" },
            { id: "D", text: "22" }
          ],
          correctAnswer: "A"
        },
        {
          id: 2,
          question: "A rectangle has a length of 12 units and a width of 8 units. What is the area of the rectangle?",
          type: 'mcq',
          options: [
            { id: "A", text: "20 square units" },
            { id: "B", text: "40 square units" },
            { id: "C", text: "96 square units" },
            { id: "D", text: "144 square units" }
          ],
          correctAnswer: "C"
        },
        {
          id: 3,
          question: "If f(x) = 2x² - 5x + 3, what is f(4)?",
          type: 'mcq',
          options: [
            { id: "A", text: "15" },
            { id: "B", text: "11" },
            { id: "C", text: "7" },
            { id: "D", text: "3" }
          ],
          correctAnswer: "C"
        },
        {
          id: 4,
          question: "A circle has a radius of 6 centimeters. What is the circumference of the circle? (Use π ≈ 3.14)",
          type: 'mcq',
          options: [
            { id: "A", text: "18.84 cm" },
            { id: "B", text: "37.68 cm" },
            { id: "C", text: "113.04 cm" },
            { id: "D", text: "226.08 cm" }
          ],
          correctAnswer: "B"
        },
        {
          id: 5,
          question: "Which of the following is equivalent to (x + 3)(x - 2)?",
          type: 'mcq',
          options: [
            { id: "A", text: "x² + x - 6" },
            { id: "B", text: "x² - x + 6" },
            { id: "C", text: "x² + 5x - 6" },
            { id: "D", text: "x² - 5x + 6" }
          ],
          correctAnswer: "A"
        },
        {
          id: 6,
          question: "A line passes through the points (2, 5) and (6, 13). What is the slope of this line?",
          type: 'mcq',
          options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "18" }
          ],
          correctAnswer: "A"
        },
        {
          id: 7,
          question: "If 2^x = 32, what is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "16" }
          ],
          correctAnswer: "B"
        },
        {
          id: 8,
          question: "A basketball player makes 75% of her free throws. If she attempts 20 free throws, how many does she expect to make?",
          type: 'mcq',
          options: [
            { id: "A", text: "12" },
            { id: "B", text: "15" },
            { id: "C", text: "16" },
            { id: "D", text: "18" }
          ],
          correctAnswer: "B"
        },
        {
          id: 9,
          question: "What is the value of √(144)?",
          type: 'mcq',
          options: [
            { id: "A", text: "11" },
            { id: "B", text: "12" },
            { id: "C", text: "13" },
            { id: "D", text: "14" }
          ],
          correctAnswer: "B"
        },
        {
          id: 10,
          question: "If the equation y = 3x + 5 represents a line, what is the y-intercept?",
          type: 'mcq',
          options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "8" },
            { id: "D", text: "-5/3" }
          ],
          correctAnswer: "B"
        },
        {
          id: 11,
          question: "A triangle has angles measuring 45°, 60°, and x°. What is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "65°" },
            { id: "B", text: "70°" },
            { id: "C", text: "75°" },
            { id: "D", text: "80°" }
          ],
          correctAnswer: "C"
        },
        {
          id: 12,
          question: "Which of the following expressions is equivalent to 4(3x - 2) + 5x?",
          type: 'mcq',
          options: [
            { id: "A", text: "12x - 3" },
            { id: "B", text: "17x - 8" },
            { id: "C", text: "17x - 3" },
            { id: "D", text: "12x + 3x - 8" }
          ],
          correctAnswer: "B"
        },
        {
          id: 13,
          question: "A rectangular prism has dimensions 4 cm × 6 cm × 8 cm. What is its volume?",
          type: 'mcq',
          options: [
            { id: "A", text: "18 cm³" },
            { id: "B", text: "96 cm³" },
            { id: "C", text: "192 cm³" },
            { id: "D", text: "384 cm³" }
          ],
          correctAnswer: "C"
        },
        {
          id: 14,
          question: "If 5x - 3 = 2x + 12, what is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "3" },
            { id: "B", text: "5" },
            { id: "C", text: "9" },
            { id: "D", text: "15" }
          ],
          correctAnswer: "B"
        },
        {
          id: 15,
          question: "The ratio of boys to girls in a class is 3:4. If there are 21 students total, how many girls are in the class?",
          type: 'mcq',
          options: [
            { id: "A", text: "9" },
            { id: "B", text: "12" },
            { id: "C", text: "15" },
            { id: "D", text: "16" }
          ],
          correctAnswer: "B"
        },

        // Student-Produced Response Questions (16-22)
        {
          id: 16,
          question: "If x² - 9 = 0, what is one possible value of x?",
          type: 'input',
          correctAnswer: "3"
        },
        {
          id: 17,
          question: "A car travels 240 miles in 4 hours. What is the car's average speed in miles per hour?",
          type: 'input',
          correctAnswer: "60"
        },
        {
          id: 18,
          question: "If 3x + 2y = 14 and x = 2, what is the value of y?",
          type: 'input',
          correctAnswer: "4"
        },
        {
          id: 19,
          question: "What is the median of the following set of numbers: 3, 7, 12, 15, 18, 22, 25?",
          type: 'input',
          correctAnswer: "15"
        },
        {
          id: 20,
          question: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
          type: 'input',
          correctAnswer: "13"
        },
        {
          id: 21,
          question: "If a = 4 and b = 7, what is the value of 2a + 3b?",
          type: 'input',
          correctAnswer: "29"
        },
        {
          id: 22,
          question: "A circle has a diameter of 14 units. What is the radius of the circle?",
          type: 'input',
          correctAnswer: "7"
        }
      ]
    },

    {
      title: "Math", 
      section: "Section 2",
      module: "Module 2",
      timeLimit: "35:00", 
      totalQuestions: 22,
      hasPassage: false,
      questions: [
        // Multiple Choice Questions (1-15)
        {
          id: 1,
          question: "If 4x - 8 = 16, what is the value of x + 3?",
          type: 'mcq',
          options: [
            { id: "A", text: "6" },
            { id: "B", text: "9" },
            { id: "C", text: "12" },
            { id: "D", text: "15" }
          ],
          correctAnswer: "B"
        },
        {
          id: 2,
          question: "A regular hexagon has a perimeter of 48 units. What is the length of each side?",
          type: 'mcq',
          options: [
            { id: "A", text: "6 units" },
            { id: "B", text: "8 units" },
            { id: "C", text: "12 units" },
            { id: "D", text: "16 units" }
          ],
          correctAnswer: "B"
        },
        {
          id: 3,
          question: "If g(x) = 3x² + 2x - 1, what is g(-2)?",
          type: 'mcq',
          options: [
            { id: "A", text: "7" },
            { id: "B", text: "9" },
            { id: "C", text: "11" },
            { id: "D", text: "15" }
          ],
          correctAnswer: "A"
        },
        {
          id: 4,
          question: "A cylinder has a radius of 4 inches and a height of 10 inches. What is the volume of the cylinder? (Use π ≈ 3.14)",
          type: 'mcq',
          options: [
            { id: "A", text: "125.6 cubic inches" },
            { id: "B", text: "251.2 cubic inches" },
            { id: "C", text: "502.4 cubic inches" },
            { id: "D", text: "1004.8 cubic inches" }
          ],
          correctAnswer: "C"
        },
        {
          id: 5,
          question: "Which of the following is equivalent to (2x + 5)(3x - 4)?",
          type: 'mcq',
          options: [
            { id: "A", text: "6x² + 7x - 20" },
            { id: "B", text: "6x² - 7x + 20" },
            { id: "C", text: "6x² + 23x - 20" },
            { id: "D", text: "6x² - 23x - 20" }
          ],
          correctAnswer: "A"
        },
        {
          id: 6,
          question: "The equation of a line is y = -2x + 7. What is the y-coordinate when x = 3?",
          type: 'mcq',
          options: [
            { id: "A", text: "1" },
            { id: "B", text: "3" },
            { id: "C", text: "5" },
            { id: "D", text: "13" }
          ],
          correctAnswer: "A"
        },
        {
          id: 7,
          question: "If log₂(x) = 4, what is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "8" },
            { id: "B", text: "12" },
            { id: "C", text: "16" },
            { id: "D", text: "32" }
          ],
          correctAnswer: "C"
        },
        {
          id: 8,
          question: "In a survey of 150 students, 60% prefer math and 40% prefer science. How many more students prefer math than science?",
          type: 'mcq',
          options: [
            { id: "A", text: "20" },
            { id: "B", text: "30" },
            { id: "C", text: "40" },
            { id: "D", text: "50" }
          ],
          correctAnswer: "B"
        },
        {
          id: 9,
          question: "What is the value of ∛(216)?",
          type: 'mcq',
          options: [
            { id: "A", text: "6" },
            { id: "B", text: "8" },
            { id: "C", text: "9" },
            { id: "D", text: "12" }
          ],
          correctAnswer: "A"
        },
        {
          id: 10,
          question: "A parabola has the equation y = x² - 6x + 9. What is the x-coordinate of its vertex?",
          type: 'mcq',
          options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "4" },
            { id: "D", text: "6" }
          ],
          correctAnswer: "B"
        },
        {
          id: 11,
          question: "An isosceles triangle has two angles measuring 70° each. What is the measure of the third angle?",
          type: 'mcq',
          options: [
            { id: "A", text: "30°" },
            { id: "B", text: "40°" },
            { id: "C", text: "50°" },
            { id: "D", text: "60°" }
          ],
          correctAnswer: "B"
        },
        {
          id: 12,
          question: "Which of the following expressions is equivalent to 3(2x + 4) - 2(x - 1)?",
          type: 'mcq',
          options: [
            { id: "A", text: "4x + 10" },
            { id: "B", text: "4x + 14" },
            { id: "C", text: "6x + 10" },
            { id: "D", text: "6x + 14" }
          ],
          correctAnswer: "B"
        },
        {
          id: 13,
          question: "A sphere has a radius of 9 centimeters. What is the surface area of the sphere? (Use π ≈ 3.14)",
          type: 'mcq',
          options: [
            { id: "A", text: "254.34 cm²" },
            { id: "B", text: "508.68 cm²" },
            { id: "C", text: "1017.36 cm²" },
            { id: "D", text: "3052.08 cm²" }
          ],
          correctAnswer: "C"
        },
        {
          id: 14,
          question: "If 3x + 2y = 18 and x - y = 3, what is the value of x?",
          type: 'mcq',
          options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "8" }
          ],
          correctAnswer: "C"
        },
        {
          id: 15,
          question: "In a geometric sequence, the first term is 2 and the common ratio is 3. What is the fourth term?",
          type: 'mcq',
          options: [
            { id: "A", text: "18" },
            { id: "B", text: "24" },
            { id: "C", text: "54" },
            { id: "D", text: "162" }
          ],
          correctAnswer: "C"
        },

        // Student-Produced Response Questions (16-22)
        {
          id: 16,
          question: "If x² + 4x - 12 = 0, what is the positive value of x?",
          type: 'input',
          correctAnswer: "2"
        },
        {
          id: 17,
          question: "A train travels 420 miles in 7 hours. What is the train's average speed in miles per hour?",
          type: 'input',
          correctAnswer: "60"
        },
        {
          id: 18,
          question: "If 2x - 5y = 10 and y = 2, what is the value of x?",
          type: 'input',
          correctAnswer: "10"
        },
        {
          id: 19,
          question: "What is the mode of the following set of numbers: 4, 7, 9, 7, 12, 15, 7, 20?",
          type: 'input',
          correctAnswer: "7"
        },
        {
          id: 20,
          question: "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
          type: 'input',
          correctAnswer: "15"
        },
        {
          id: 21,
          question: "If p = 3 and q = 8, what is the value of p² + 2q?",
          type: 'input',
          correctAnswer: "25"
        },
        {
          id: 22,
          question: "A rectangle has an area of 96 square units and a width of 8 units. What is the length of the rectangle?",
          type: 'input',
          correctAnswer: "12"
        }
      ]
    }
  ]
};

// Keep the old interface for backward compatibility
export interface TestData {
  title: string;
  section: string;
  module: string;
  timeLimit: string;
  currentQuestion: number;
  totalQuestions: number;
  questions: TestQuestion[];
}

// Helper function to convert current module to old format for existing components
export const getCurrentModuleAsTestData = (satData: SATTestData): TestData => {
  const currentModule = satData.modules[satData.currentModuleIndex];
  return {
    title: currentModule.title,
    section: currentModule.section,
    module: currentModule.module,
    timeLimit: currentModule.timeLimit,
    currentQuestion: 1,
    totalQuestions: currentModule.totalQuestions,
    questions: currentModule.questions
  };
};

export const sampleTestData: TestData = getCurrentModuleAsTestData(satTestData);