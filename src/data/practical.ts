export interface FAQItem {
  question: string;
  answer: string;
  actionLabel?: string;
  actionType?: 'accommodation';
}

export interface ScheduleSlot {
  time: string;
  label: string;
  desc: string;
}

export interface HungarianDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  prepTime: string;
  servings: string;
  ingredients: string[];
  steps: string[];
}

export interface AccommodationOption {
  name: string;
  location: string;
  category: string;
  description: string;
  url?: string;
  approxPrice?: string;
}

export const dailyRhythm: ScheduleSlot[] = [
  {
    time: '08:45 – 12:00',
    label: 'Morning Academic or Excursion',
    desc: 'Interactive lectures at faculty facilities or guided morning excursions across historic cultural sites.'
  },
  {
    time: '12:00 – 13:00',
    label: 'Shared Lunch Break',
    desc: 'Campus restaurant dining or arranged local meals during day trips.'
  },
  {
    time: '13:00 – 15:30',
    label: 'Afternoon Academic or Practical',
    desc: 'Case studies, lab demonstrations, workshops, and European cultural perspective sessions.'
  },
  {
    time: '17:00 onwards',
    label: 'Evening & Community Experience',
    desc: 'Shared dinners, cultural festivals, language practice, and free discovery time in Veszprém.'
  }
];

export const faqList: FAQItem[] = [
  {
    question: 'What does a teaching day look like?',
    answer: 'Academic lectures typically run from 08:45–12:00 and 13:00–15:30, with a shared lunch break between them. Evening cultural activities and student gatherings are listed separately in the daily programme.'
  },
  {
    question: 'Which activities are optional?',
    answer: 'Optional activities are clearly marked in turquoise badges. They include intercultural language activities, evening festival visits, a gentle Balaton Uplands walk, and farewell events. Festival visits depend on confirmed 2027 event schedules and ticket availability.'
  },
  {
    question: 'Are the dates and arrangements final?',
    answer: 'The 2027 Summer University takes place from 19 July to 1 August 2027. Accommodation details, transfers, and group bookings will be confirmed in collaboration with partner universities. The wine dinner also features a premium alcohol-free pairing.'
  },
  {
    question: 'What language is used during the summer university?',
    answer: 'The primary language of instruction and all official excursions is English. In addition, interactive language exchanges provide introductory exposure to Hungarian language and Central European cultural context.'
  },
  {
    question: 'Where will students be accommodated?',
    answer: 'Students can stay at the University of Pannonia’s modern campus residence (Hotel Magister) or at our recommended partner hotels in Veszprém and around Lake Balaton, all conveniently connected to campus and programme venues.',
    actionLabel: 'View Recommended Accommodation & Rates',
    actionType: 'accommodation'
  }
];

export const hungarianDishes: HungarianDish[] = [
  {
    id: 'gulyas',
    name: 'Gulyásleves',
    subtitle: 'Traditional Hungarian Goulash',
    description: 'Slow-simmered beef soup seasoned with sweet Hungarian paprika, caraway, root vegetables, and potatoes.',
    image: '/images/experiences/disc-4.webp',
    prepTime: '90 mins',
    servings: '4 servings',
    ingredients: [
      '600 g beef chuck, cut into 2 cm cubes',
      '2 large onions, finely diced',
      '2 tbsp sweet Hungarian paprika',
      '2 carrots & 1 parsnip, sliced',
      '3 medium potatoes, cubed',
      '1 tsp caraway seeds, 2 cloves garlic, salt & pepper',
      '2 tbsp sunflower oil or lard, 1.8 L water or beef stock'
    ],
    steps: [
      'Sauté the diced onions in oil until translucent, then remove from heat and stir in the sweet paprika so it does not burn.',
      'Return to medium heat, add the beef cubes, garlic, caraway seeds, and salt, and sear until browned.',
      'Pour in water or stock, cover, and simmer gently for 50–60 minutes until the beef is nearly tender.',
      'Add the carrots, parsnip, and potatoes, and cook for another 20–25 minutes until all vegetables are soft. Serve hot with crusty bread.'
    ]
  },
  {
    id: 'langos',
    name: 'Lángos',
    subtitle: 'Crispy Balaton Street Flatbread',
    description: 'Golden, airy deep-fried yeast dough brushed with garlic oil and topped with sour cream and grated cheese.',
    image: '/images/dishes/langos.webp',
    prepTime: '55 mins',
    servings: '4–6 pieces',
    ingredients: [
      '500 g all-purpose flour',
      '25 g fresh yeast (or 7 g instant dry yeast)',
      '150 ml lukewarm milk + 150 ml lukewarm water',
      '1 tsp sugar, 1.5 tsp salt',
      'Oil for deep frying',
      'Toppings: 2 cloves crushed garlic in 2 tbsp oil, sour cream (tejföl), grated Edam or Trappista cheese'
    ],
    steps: [
      'Dissolve the yeast and sugar in lukewarm milk, then knead with flour, water, and salt into a soft, slightly sticky dough.',
      'Cover and let the dough rise in a warm place for 35–40 minutes until doubled in size.',
      'Divide into oiled balls, gently stretch each into a thin disc (thinner in the centre, thicker at the rim), and fry in hot oil (180 °C) for 1–2 minutes per side until golden.',
      'Drain on paper towels, brush lightly with garlic oil, spread generously with sour cream, and finish with grated cheese.'
    ]
  },
  {
    id: 'paprikas',
    name: 'Paprikás Csirke',
    subtitle: 'Chicken Paprikash with Nokedli',
    description: 'Tender chicken braised in a velvety sweet paprika and sour cream sauce, traditionally paired with egg dumplings.',
    image: '/images/dishes/paprikash.webp',
    prepTime: '50 mins',
    servings: '4 servings',
    ingredients: [
      '800 g bone-in chicken thighs or drumsticks',
      '2 onions, finely chopped & 1 yellow pepper, diced',
      '2 tbsp sweet Hungarian paprika',
      '200 g sour cream (tejföl) + 1 tbsp flour',
      '250 ml chicken stock, 2 tbsp oil, salt',
      'Side: 300 g flour, 2 eggs, 150 ml water for nokedli dumplings'
    ],
    steps: [
      'Sweat the chopped onions in oil until golden, remove from heat, and stir in the sweet paprika.',
      'Add the chicken pieces, diced pepper, salt, and stock. Cover and simmer on low heat for 30–35 minutes until tender.',
      'Whisk the sour cream with 1 tbsp flour and a ladle of hot sauce, then stir it back into the pan and simmer for 3 minutes until glossy.',
      'Meanwhile, whisk flour, eggs, water, and a pinch of salt into a thick batter, drop small spoonfuls into boiling salted water, and serve the dumplings alongside the chicken.'
    ]
  },
  {
    id: 'kurtoskalacs',
    name: 'Kürtőskalács',
    subtitle: 'Caramelized Chimney Cake',
    description: 'Sweet yeast dough ribbon spiralled around a wooden cylinder, roasted over embers until crisp and glazed with cinnamon sugar.',
    image: '/images/dishes/kurtoskalacs.webp',
    prepTime: '75 mins',
    servings: '4 cakes',
    ingredients: [
      '500 g all-purpose flour',
      '20 g fresh yeast, 250 ml lukewarm milk',
      '60 g melted butter, 50 g sugar, 1 egg + 1 egg yolk',
      'Pinch of salt, grated zest of 1/2 lemon',
      'Coating: melted butter, 100 g granulated sugar mixed with 2 tsp ground cinnamon'
    ],
    steps: [
      'Activate the yeast in warm milk with a pinch of sugar, then knead with flour, egg, yolk, butter, sugar, salt, and lemon zest into a smooth dough. Let rise for 45 minutes.',
      'Roll the dough out and cut into 2 cm wide strips, then wrap them in an overlapping spiral around oiled baking cylinders or rolling pins.',
      'Brush the wrapped dough with melted butter and roll in cinnamon sugar.',
      'Bake at 200 °C (turning every 4–5 minutes) for 15–18 minutes until the sugar caramelizes into a crisp golden shell.'
    ]
  },
  {
    id: 'lecso',
    name: 'Lecsó',
    subtitle: 'Hungarian Pepper & Tomato Stew',
    description: 'A classic summer stew of sweet Hungarian wax peppers, ripe tomatoes, onions, and ground paprika—light, fragrant, and versatile.',
    image: '/images/dishes/lecso.webp',
    prepTime: '40 mins',
    servings: '4 servings',
    ingredients: [
      '800 g Hungarian yellow wax peppers (TV paprika), seeded and sliced into rings',
      '400 g ripe tomatoes, peeled and coarsely chopped',
      '2 large onions, thinly sliced',
      '1 tbsp sweet Hungarian paprika',
      '3 tbsp sunflower oil (or 80 g diced smoked bacon for a traditional base)',
      '1 tsp salt, freshly ground black pepper',
      'Optional: 150 g sliced smoked sausage (kolbász) or 2–3 beaten eggs stirred in at the end'
    ],
    steps: [
      'Heat the oil (or render the diced smoked bacon) in a wide skillet over medium heat and sauté the sliced onions until soft and lightly golden.',
      'Remove the pan briefly from the heat, stir in the sweet Hungarian paprika so it stays vibrant and never turns bitter, then immediately add the sliced peppers.',
      'Cook for 8–10 minutes until the peppers start to soften, then stir in the chopped tomatoes, salt, and pepper (plus sliced sausage if using).',
      'Simmer uncovered for 15–20 minutes until the sauce thickens and the vegetables are tender. Serve warm with fresh crusty bread, or fold in beaten eggs just before serving.'
    ]
  },
  {
    id: 'toltott-kaposzta',
    name: 'Töltött Káposzta',
    subtitle: 'Hungarian Stuffed Cabbage Rolls',
    description: 'Savory pork and rice rolls wrapped in pickled cabbage leaves, slow-simmered with sauerkraut, sweet paprika, and served with sour cream.',
    image: '/images/dishes/toltott-kaposzta.webp',
    prepTime: '110 mins',
    servings: '6 servings',
    ingredients: [
      '12 large pickled cabbage leaves (savanyú káposzta) + 500 g shredded sauerkraut',
      '500 g ground pork (or mixed pork & beef)',
      '100 g short-grain rice, rinsed',
      '1 medium onion, finely diced & 2 cloves garlic, minced',
      '1 tbsp sweet Hungarian paprika + 1 tsp ground caraway, salt & black pepper',
      '1 egg, 150 g smoked sausage or smoked pork ribs (optional)',
      '1 L water or stock, fresh sour cream (tejföl) and crusty bread to serve'
    ],
    steps: [
      'Sauté the diced onion lightly in a splash of oil, stir in half the paprika off the heat, then combine with the ground meat, rinsed rice, minced garlic, egg, caraway, salt, and pepper.',
      'Trim any thick ribs from the pickled cabbage leaves, place a spoonful of filling at the base of each leaf, fold in the sides, and roll tightly.',
      'Line a wide pot with half the shredded sauerkraut (and smoked meat if using), arrange the cabbage rolls snugly on top, cover with the remaining sauerkraut, sprinkle with the rest of the paprika, and pour in enough water to just cover.',
      'Cover and simmer gently on low heat for 75–90 minutes until the rice and cabbage are tender. Serve hot topped with a generous spoonful of sour cream and fresh white bread.'
    ]
  }
];

export const recommendedAccommodations: AccommodationOption[] = [
  {
    name: 'Akadémia Hotel Balatonfüred',
    location: 'Balatonfüred · Lake Balaton',
    category: 'Sport & Conference',
    description: 'Four-star sport hotel in Balatonfüred offering twin-bedded double rooms (shared occupancy), buffet breakfast, and complimentary conference room access for group stays.',
    url: 'https://akademiahotel.hu',
    approxPrice: 'Approx. HUF 24,000 / person / night'
  },
  {
    name: 'Hotel História',
    location: 'Veszprém · City Centre',
    category: 'Historic Boutique',
    description: 'Four-star boutique hotel and renowned Historante restaurant nestled directly beneath the Veszprém Castle walls.',
    url: 'https://hotelhistoria.hu',
    approxPrice: 'Approx. HUF 50,000 / person / night'
  },
  {
    name: 'Hotel Magister',
    location: 'Veszprém · University Campus',
    category: 'University Residence',
    description: 'The University of Pannonia’s modern campus residence and hotel (József Attila u. 34/2.), within easy walking distance of lecture halls.',
    url: 'https://uni-pannon.hu',
    approxPrice: 'Approx. HUF 14,000 / person / night'
  },
  {
    name: 'Hotel Marina-Port',
    location: 'Balatonkenese · Lake Balaton',
    category: 'Lakeside Resort',
    description: 'Waterfront hotel directly on the northeastern shore of Lake Balaton, featuring private lakeside gardens and wellness facilities.',
    url: 'https://www.hotelmarinaport.hu',
    approxPrice: 'Approx. HUF 50,000 / person / night'
  }
];
