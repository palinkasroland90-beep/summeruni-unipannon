import { DiscoveryItem } from '../types';

export const experienceArtSvg: Record<string, string> = {
  city: '<path d="M10 103h190M30 103V45h42v58M42 45V24h18v21M84 103V61h45v42M143 103V34h40v69M140 34l20-13 23 13"/>',
  lake: '<path d="M0 94q16-8 32 0t32 0t32 0t32 0t32 0t32 0M0 106q16-8 32 0t32 0t32 0t32 0t32 0t32 0M34 85l36-54 18 27M138 85l30-44 14 22"/>',
  porcelain: '<path d="M57 30h75m-63 0v17c0 12-20 17-20 34 0 16 17 23 45 23s45-7 45-23c0-17-20-22-20-34V30M53 48q-23 0-23 18t23 18m83-36q23 0 23 18t-23 18"/>',
  castle: '<path d="M10 112q45-25 97-17 53-10 94 0M47 97V46h20v-9h12v9h20v50M43 46V24h9v8h10v-8h10v22M118 97V33h46v64M112 33V12h11v9h12v-9h11v21"/>',
  wine: '<path d="M46 15h48v27a24 24 0 0 1-48 0V15Zm24 51v38m-20 0h40M47 34h46m-39 6 4 13M138 23h28v77m-28 0h28m-14-63a14 14 0 0 0-14 14v49h28V51a14 14 0 0 0-14-14Z"/>',
  nature: '<path d="M0 107h204M14 106l43-75 40 75M34 70h45M102 105l42-92 45 92M124 53h41m-20 52v-8M55 106v-8"/>',
  music: '<path d="M25 103V51m0 4h5m8 48V33m13 70V65m13 38V42m13 61V19m13 84V63m14 40V49m14 54V25m13 78V58m13 45V39m13 64V54m14 49V28m14 75V69"/>',
  people: '<circle cx="71" cy="36" r="14"/><circle cx="137" cy="36" r="14"/><path d="M46 101V71a25 25 0 0 1 50 0v30m-16 0V75a25 25 0 0 1 50 0v26"/>',
  cave: '<path d="M6 109 30 34l35-16 33 9 29-17 47 20 25 79M43 109V66l20-15 32 4 25-17 31 22 16 49M65 109V77l24-11 26 12 18 31"/>'
};

export const cultureDiscoveries: DiscoveryItem[] = [
  {
    id: 'disc-1',
    title: 'Find your Veszprém',
    desc: 'City discoveries, an immersive CODE experience and new connections across historic quarters.',
    longDesc: 'Begin your Summer University journey by getting to know Veszprém, the historic City of Queens and European Capital of Culture 2023. During a guided morning walk through the baroque Castle District, the vibrant town centre, and the green Séd Valley, small international teams complete playful photo and discovery challenges designed to break the ice. Later in the afternoon, visit the state-of-the-art CODE Digital Experience Centre for an immersive audiovisual screening that brings local art and innovation together, followed by a relaxed welcome dinner where you can connect with fellow participants and mentors.',
    day: 1,
    art: 'city',
    color: 'blue',
    sessionIds: ['d1-s1', 'd1-s4'],
    image: '/images/experiences/disc-1.webp',
    imageCredit: {
      author: 'Csendesmark',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Veszpr%C3%A9m_panorama.jpg'
    }
  },
  {
    id: 'disc-2',
    title: 'A day by Lake Balaton',
    desc: 'Tihany abbey, Balatonfüred promenade and a panoramic view from the lake water.',
    longDesc: 'Spend a full summer day exploring the northern shore of Lake Balaton, Central Europe’s largest freshwater lake. Start the morning on the scenic Tihany Peninsula, walking through the traditional village streets, admiring the iconic Benedictine Abbey from its panoramic hilltop terrace, and enjoying sweeping views across the turquoise water. After a shared lakeside lunch, travel onward to Balatonfüred for a leisurely walk along the historic Tagore Promenade, followed by a one-hour sightseeing boat cruise across the lake. Free time along the waterfront lets you soak up the summer atmosphere before returning to Veszprém for dinner.',
    day: 2,
    art: 'lake',
    color: 'teal',
    sessionIds: ['d2-s1', 'd2-s2', 'd2-s3'],
    image: '/images/experiences/disc-2.webp'
  },
  {
    id: 'disc-3',
    title: 'The art of Herend',
    desc: 'Porcelain masterworks, world-famous craftsmanship and cultural heritage connections.',
    longDesc: 'Take a morning cultural excursion just outside Veszprém to Herend, home to one of the world’s most celebrated porcelain manufactories since 1826. On an English-language guided tour through the Minimanufactory and Porcelain Museum, watch master artisans shape, sculpt, and hand-paint delicate porcelain pieces using techniques passed down through generations. The visit also highlights fascinating historical and artistic dialogues between Chinese and European porcelain traditions, offering a deeper appreciation of craftsmanship, heritage branding, and enduring design before returning to Veszprém for lunch.',
    day: 6,
    art: 'porcelain',
    color: 'blue',
    sessionIds: ['d6-s1'],
    image: '/images/experiences/disc-3.webp'
  },
  {
    id: 'disc-4',
    title: 'Local flavours, shared tables',
    desc: 'An evening of regional gastronomic culture and local wines, with an alcohol-free discovery option.',
    longDesc: 'After a relaxing afternoon in Veszprém, gather together for a memorable three-course dinner celebrating the culinary traditions of the Bakony and Lake Balaton region. Each course is thoughtfully paired with local wines introduced by regional hosts, while guests who prefer an alcohol-free experience can enjoy a curated non-alcoholic beverage pairing. Beyond tasting classic Hungarian flavours, the evening is designed around unhurried conversation, cultural storytelling, and warm hospitality, giving Hungarian and international participants plenty of time to share impressions from their first week together.',
    day: 6,
    art: 'wine',
    color: 'teal',
    sessionIds: ['d6-s4'],
    image: '/images/experiences/disc-4.webp'
  },
  {
    id: 'disc-5',
    title: 'A morning in nature',
    desc: 'Explore Veszprém Zoo and the scenic valley at your group’s comfortable rhythm.',
    longDesc: 'Enjoy a refreshing Sunday morning outdoors at the Veszprém Zoo, set across the picturesque Fejes Valley and the surrounding wooded hillsides. Known for its spacious habitats, elevated walkways, and scenic views over the valley, the zoo offers a relaxed pace with plenty of shaded rest stops and small-team exploration challenges. Following the morning visit, return to the city for a shared Sunday lunch and an unhurried afternoon to recharge, stroll through town, or prepare informally for the second week of academic lectures and cultural exchanges.',
    day: 7,
    art: 'nature',
    color: 'blue',
    sessionIds: ['d7-s1'],
    image: '/images/experiences/disc-5.webp',
    imageCredit: {
      author: 'Emőke Dénes',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Em_-_Giraffa_camelopardalis_rothschildi_-_5.jpg'
    }
  },
  {
    id: 'disc-6',
    title: 'Below ground. Above the lake.',
    desc: 'Tapolca Lake Cave underground boat tour, Szigliget Castle ruins and sweeping Balaton views.',
    longDesc: 'Embark on one of the most distinctive geological and historical day trips of the programme. In the morning, travel to Tapolca to glide by small boat through the illuminated subterranean passages of the Tapolca Lake Cave, a rare karst cave system hidden beneath the town streets. After a shared lunch in Tapolca, continue south to the volcanic hilltop of Szigliget Castle. Climb the stone paths of the medieval fortress ruins for breathtaking panoramic views across the western basin of Lake Balaton and the surrounding volcanic hills before heading back to Veszprém for dinner.',
    day: 11,
    art: 'cave',
    color: 'teal',
    sessionIds: ['d11-s1', 'd11-s3'],
    image: '/images/experiences/disc-6.webp',
    imageCredit: {
      author: 'Shaambo.ghosh',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lake_Cave,Tapolca_1.jpg'
    }
  },
  {
    id: 'disc-7',
    title: 'A day in Budapest',
    desc: 'Discover the historic Hungarian capital, iconic landmarks and an unforgettable evening by the Danube.',
    longDesc: 'Spend a full Saturday experiencing the architectural grandeur and lively energy of Budapest, the Hungarian capital. Travelling from Veszprém in the morning, explore iconic sights along the Danube—from historic boulevards and grand squares to panoramic viewpoints overlooking the Parliament and Buda Castle. Enjoy a shared lunch in the city followed by guided sightseeing and free time for museums, cafés, or souvenir shopping. As evening falls, gather for dinner and an atmospheric twilight walk along the illuminated Danube embankment before returning together to Veszprém.',
    day: 13,
    art: 'city',
    color: 'blue',
    sessionIds: ['d13-s1', 'd13-s3', 'd13-s4'],
    image: '/images/experiences/disc-7.webp',
    imageCredit: {
      author: 'Shahzeb.ali55',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hungarian_parliament_light_trails.jpg'
    }
  }
];

export const optionalActivities: DiscoveryItem[] = [
  {
    id: 'opt-1',
    title: 'Street Music Festival Evening',
    desc: 'Dozens of acoustic acts filling the cobblestone squares of Veszprém with lively summer energy.',
    longDesc: 'Discover Veszprém at its most vibrant during an optional Thursday evening visit to the famous Veszprém Street Music Festival atmosphere. Cobblestone squares, shaded courtyards, and historic alleys come alive with acoustic bands, solo performers, and spontaneous street performances spanning jazz, folk, indie, and world music. Participants explore the stages alongside playful intercultural language challenges and Culture Bingo prompts practised earlier in the afternoon. Exact 2027 festival schedules and performance timings are subject to final confirmation.',
    day: 4,
    art: 'music',
    color: 'gold',
    sessionIds: ['d4-s5'],
    image: '/images/experiences/opt-5.webp'
  },
  {
    id: 'opt-2',
    title: 'Cistercian Abbey of Zirc Excursion',
    desc: 'An afternoon bus trip into the Bakony Hills to explore the historic Cistercian Abbey and gardens.',
    longDesc: 'Head north into the cool green hills of the Bakony Mountains on an optional Friday afternoon bus excursion to Zirc, Hungary’s highest town. Visit the monumental Cistercian Abbey of Zirc—founded in the 12th century and renowned for its baroque basilica, historic library heritage, and tranquil English-style arboretum. Paired with interactive English language missions prepared during the afternoon Humanities workshop, the trip blends Central European monastic history with scenic mountain air before returning to Veszprém in time for a shared dinner.',
    day: 5,
    art: 'castle',
    color: 'gold',
    sessionIds: ['d5-s4'],
    image: '/images/experiences/opt-zirc.webp',
    imageCredit: {
      author: 'Rlevente',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abbey_of_Zirc_001.JPG'
    }
  },
  {
    id: 'opt-3',
    title: 'Hungarian–Chinese Student & Food Evening',
    desc: 'Cooking together, cultural sharing, traditional teas, and authentic intercultural friendships.',
    longDesc: 'Join Hungarian and Chinese students for one of the warmest, most interactive evenings of the entire two-week programme. Working side by side in small mixed groups, participants prepare simple signature dishes and traditional snacks from both culinary cultures, brew tea, and share stories about student life, campus traditions, and everyday customs. Paired with playful bilingual language-exchange activities and a shared dinner, this evening turns classmates into genuine friends and creates lasting memories around a lively communal table.',
    day: 8,
    art: 'people',
    color: 'gold',
    sessionIds: ['d8-s4'],
    image: '/images/experiences/opt-3.webp',
    imageCredit: {
      author: 'Emcc83',
      license: 'CC BY-SA 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jiaozi_GS_CN.jpg'
    }
  },
  {
    id: 'opt-4',
    title: 'Balaton Uplands Panoramic Walk',
    desc: 'A gentle sunset stroll through volcanic hills, vineyards, and peaceful panoramic viewpoints.',
    longDesc: 'Step away from the lecture halls for a gentle late-afternoon excursion into the scenic Balaton Uplands. Walking at an easy, conversational pace along vineyard lanes and volcanic hillsides, take in sweeping golden-hour views stretching over the terraced slopes and shimmering waters of Lake Balaton. Along the route, interactive language prompts and cultural trivia spark conversation among participants before everyone sits down together for a welcoming regional dinner and returns comfortably to Veszprém under the summer evening sky.',
    day: 9,
    art: 'nature',
    color: 'gold',
    sessionIds: ['d9-s4'],
    image: '/images/experiences/opt-4.webp',
    imageCredit: {
      author: 'Ramessos',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:BadacsonyPanorama01.jpg'
    }
  },
  {
    id: 'opt-5',
    title: 'Downtown Community & Board Game Evening',
    desc: 'Relaxed mid-week gathering in Veszprém’s city centre with board games, shared dinner, and language fun.',
    longDesc: 'Wrap up Wednesday’s academic milestones with a cheerful, low-pressure community and board game evening in downtown Veszprém. International participants and local student hosts gather over a shared dinner to play classic strategy, party, and communication games—making it effortless to practise everyday English in a playful social setting. Whether you team up for quick word challenges or unwind over a longer tabletop match, the evening offers genuine camaraderie and a welcoming mid-week pause in the heart of town.',
    day: 10,
    art: 'people',
    color: 'gold',
    sessionIds: ['d10-s4'],
    image: '/images/experiences/opt-boardgame.webp'
  },
  {
    id: 'opt-6',
    title: 'Closing Gala & Certificate Celebration',
    desc: 'Formal presentation of university certificates, celebratory banquet, and memorable farewell toasts.',
    longDesc: 'Celebrate two weeks of academic discovery, intercultural collaboration, and shared adventures at the Summer University Closing Gala. The evening begins with the formal presentation of University of Pannonia participation certificates, recognizing each student’s engagement across lectures, workshops, and cultural modules. Afterwards, enjoy a festive shared dinner, student reflections, light-hearted language awards, and a lively farewell gathering with new friends and faculty hosts before the final weekend.',
    day: 12,
    art: 'people',
    color: 'gold',
    sessionIds: ['d12-s4'],
    image: '/images/experiences/opt-6.webp'
  },
  {
    id: 'opt-7',
    title: 'Farewell Sunset Walk & Dinner',
    desc: 'Final photo opportunities along the Séd Valley and shared memories before departure.',
    longDesc: 'For participants with later departure schedules on the final Sunday, close the Summer University with a peaceful farewell walk through the scenic Séd Valley below Veszprém Castle. Revisit favourite viewpoints for group photos, reflect on two unforgettable weeks of learning and travel, and share a relaxed farewell dinner accompanied by informal language activities. Airport and train transfers are coordinated individually according to each participant’s travel itinerary, ensuring a smooth and warm send-off home.',
    day: 14,
    art: 'city',
    color: 'gold',
    sessionIds: ['d14-s4'],
    image: '/images/experiences/opt-7.webp'
  }
];
