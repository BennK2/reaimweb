export const newsArticles = [
  {
    slug: 'kenya-announced-as-2027-host',
    title: 'Kenya Announced as Host for REAIM 2027 Summit',
    date: 'June 2026',
    excerpt: 'During the UN-affiliated AI, Security and Ethics Conference in Geneva, Kenya was officially selected to host the fourth REAIM summit in Nairobi.',
    content: `
In a landmark announcement, the Republic of Kenya has been officially selected as the host nation for the 2027 Summit on Responsible Artificial Intelligence in the Military Domain (REAIM). The announcement was made in June 2026 by Ambassador Philip Thigo, Kenya's Special Envoy on Technology, during the UN-affiliated AI, Security and Ethics Conference in Geneva.

This marks a historic milestone as it will be the very first time the REAIM summit is held on the African continent. The decision underscores Kenya's growing influence as a regional technology hub, often referred to as the "Silicon Savannah," and its commitment to shaping global governance frameworks.

The Nairobi summit, scheduled for April 2027, is expected to pivot towards the practical implementation of responsible AI. Key focus areas will include capacity building, institutional readiness, and fostering equitable engagement among governments, defense institutions, industry leaders, and academia from both the Global North and the Global South.

"Hosting REAIM 2027 in Nairobi ensures that the vital perspectives of developing nations and emerging economies are actively integrated into the global discourse on military AI," the Ministry of Defence noted.
    `,
    image: '/news-geneva.webp',
  },
  {
    slug: 'third-reaim-summit-a-coruna',
    title: 'Third REAIM Summit Concludes in A Coruña, Spain',
    date: 'February 2026',
    excerpt: 'The third global REAIM summit wrapped up in A Coruña, Spain, focusing on the "Pathways to Action" framework for military AI governance.',
    content: `
The third global Summit on Responsible Artificial Intelligence in the Military Domain (REAIM) successfully concluded in A Coruña, Spain, in February 2026. Building on the foundational dialogues established in The Hague and Seoul, the Spanish summit aimed to translate principles into actionable international standards.

A major focus of the discussions in A Coruña was the "Pathways to Action" framework. While the summit saw robust participation from states, researchers, and technology companies, it also highlighted the ongoing complexities of achieving universal consensus on military AI norms, particularly regarding the governance of autonomous weapons systems and machine learning in combat operations.

The dialogues in Spain set a critical baseline for the upcoming 2027 summit in Nairobi, where the international community will be tasked with moving beyond declarations and towards verifiable, capacity-building frameworks.
    `,
    image: '/news-spain.webp',
  },
  {
    slug: 'seoul-blueprint-for-action',
    title: 'Seoul Summit Establishes the "Blueprint for Action"',
    date: 'September 2024',
    excerpt: 'The second REAIM summit in Seoul, South Korea, culminated in the establishment of the Blueprint for Action, setting early norms for AI in defense.',
    content: `
The second REAIM summit, co-hosted by the Republic of Korea, the Netherlands, Singapore, Kenya, and the United Kingdom in Seoul, marked a definitive step forward in the international governance of military AI. 

The summit culminated in the "Blueprint for Action," a document supported by a wide coalition of participating nations that established a baseline for the ethical and responsible use of AI in military contexts. The Blueprint emphasized the necessity of maintaining meaningful human control over autonomous systems and ensuring that all military AI deployments comply strictly with International Humanitarian Law (IHL).

Seoul's summit also expanded the multi-stakeholder approach pioneered at the inaugural 2023 summit in The Hague. By bringing together defense ministers, tech industry innovators, and civil society, the Seoul summit solidified REAIM as the premier global platform for addressing the dual-use nature of emerging artificial intelligence technologies.

The progress made in Seoul continues to guide the agenda for the upcoming summit in Nairobi, Kenya.
    `,
    image: '/news-seoul.webp',
  }
];

export function getNewsBySlug(slug: string) {
  return newsArticles.find(article => article.slug === slug);
}


