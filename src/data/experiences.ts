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
    day: 1,
    art: 'city',
    color: 'blue',
    sessionIds: ['d1-s1', 'd1-s4']
  },
  {
    id: 'disc-2',
    title: 'A day by Lake Balaton',
    desc: 'Tihany abbey, Balatonfüred promenade and a panoramic view from the lake water.',
    day: 2,
    art: 'lake',
    color: 'teal',
    sessionIds: ['d2-s1', 'd2-s2', 'd2-s3']
  },
  {
    id: 'disc-3',
    title: 'The art of Herend',
    desc: 'Porcelain masterworks, world-famous craftsmanship and cultural heritage connections.',
    day: 6,
    art: 'porcelain',
    color: 'blue',
    sessionIds: ['d6-s1']
  },
  {
    id: 'disc-4',
    title: 'Local flavours, shared tables',
    desc: 'An evening of regional gastronomic culture and local wines, with an alcohol-free discovery option.',
    day: 6,
    art: 'wine',
    color: 'teal',
    sessionIds: ['d6-s4']
  },
  {
    id: 'disc-5',
    title: 'A morning in nature',
    desc: 'Explore Veszprém Zoo and the scenic valley at your group’s comfortable rhythm.',
    day: 7,
    art: 'nature',
    color: 'blue',
    sessionIds: ['d7-s1']
  },
  {
    id: 'disc-6',
    title: 'Below ground. Above the lake.',
    desc: 'Tapolca Lake Cave underground boat tour, Szigliget Castle ruins and sweeping Balaton views.',
    day: 11,
    art: 'cave',
    color: 'teal',
    sessionIds: ['d11-s1', 'd11-s3']
  },
  {
    id: 'disc-7',
    title: 'A day in Budapest',
    desc: 'Discover the historic Hungarian capital, iconic landmarks and an unforgettable evening by the Danube.',
    day: 13,
    art: 'city',
    color: 'blue',
    sessionIds: ['d13-s1', 'd13-s3', 'd13-s4']
  }
];

export const optionalActivities: DiscoveryItem[] = [
  {
    id: 'opt-1',
    title: 'Rozé–Rizling Cultural Evening',
    desc: 'Relaxed evening celebration of regional culture, gastronomy and casual English-Hungarian-Chinese language exchange.',
    day: 4,
    art: 'wine',
    color: 'gold',
    sessionIds: ['d4-s4']
  },
  {
    id: 'opt-2',
    title: 'VeszprémFest & Music Night',
    desc: 'World-class open-air music festival in the castle district paired with international student activities.',
    day: 5,
    art: 'music',
    color: 'gold',
    sessionIds: ['d5-s4']
  },
  {
    id: 'opt-3',
    title: 'Hungarian–Chinese Student & Food Evening',
    desc: 'Cooking together, cultural sharing, traditional teas, and authentic intercultural friendships.',
    day: 8,
    art: 'people',
    color: 'gold',
    sessionIds: ['d8-s4']
  },
  {
    id: 'opt-4',
    title: 'Balaton Uplands Panoramic Walk',
    desc: 'A gentle sunset stroll through volcanic hills, vineyards, and peaceful panoramic viewpoints.',
    day: 9,
    art: 'nature',
    color: 'gold',
    sessionIds: ['d9-s4']
  },
  {
    id: 'opt-5',
    title: 'Street Music Festival Evening',
    desc: 'Dozens of acoustic acts filling the cobblestone squares of Veszprém with lively summer energy.',
    day: 10,
    art: 'music',
    color: 'gold',
    sessionIds: ['d10-s4']
  },
  {
    id: 'opt-6',
    title: 'Closing Gala & Certificate Celebration',
    desc: 'Formal presentation of university certificates, celebratory banquet, and memorable farewell toasts.',
    day: 12,
    art: 'people',
    color: 'gold',
    sessionIds: ['d12-s4']
  },
  {
    id: 'opt-7',
    title: 'Farewell Sunset Walk & Dinner',
    desc: 'Final photo opportunities along the Séd Valley and shared memories before departure.',
    day: 14,
    art: 'city',
    color: 'gold',
    sessionIds: ['d14-s4']
  }
];
