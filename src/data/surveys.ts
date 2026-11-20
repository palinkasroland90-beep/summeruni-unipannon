export interface SurveyOption {
  value: string;
  label: string;
  desc?: string;
}

export const programmeInterests: SurveyOption[] = [
  { value: 'veszprem', label: 'Veszprém Castle & CODE Immersive Experience' },
  { value: 'tihany', label: 'Tihany Abbey, Lake Cruise & Balatonfüred' },
  { value: 'herend', label: 'Herend Porcelain Manufactory & Master Heritage' },
  { value: 'gastronomy', label: 'Local Flavours, Wine & Food Pairing Dinner' },
  { value: 'zoo', label: 'Veszprém Zoo & Scenic Séd Valley Nature Walk' },
  { value: 'tapolca', label: 'Tapolca Lake Cave Boat Tour & Szigliget Castle' },
  { value: 'budapest', label: 'Budapest Full-Day Excursion & Danube Panorama' }
];

export const paceOptions: SurveyOption[] = [
  { value: 'balanced', label: 'Balanced Rhythm', desc: 'A well-rounded mix of group excursions and flexible personal discovery.' },
  { value: 'active', label: 'High Activity', desc: 'Active & energetic: see and experience as much as possible each day.' },
  { value: 'relaxed', label: 'Slower & Immersive', desc: 'Relaxed pacing: deeper intercultural conversations and leisure.' }
];

export const languageOptions: SurveyOption[] = [
  { value: 'yes', label: 'Conversational Practice', desc: 'Active introductory Hungarian and intercultural language exchange sessions.' },
  { value: 'culture', label: 'Culture-Focused', desc: 'Central European cultural focus first, informal language activities as secondary.' },
  { value: 'none', label: 'Pure Discovery', desc: 'Prefer sightseeing, photography, and standard English communication.' }
];

export const academicTrackOptions: SurveyOption[] = [
  {
    value: 'business',
    label: 'Starting a Business – Faculty of Business and Economics',
    desc: 'Entrepreneurial mindset, market research, Business Model Canvas, MVP prototyping, financial planning, and startup pitching.'
  },
  {
    value: 'engineering',
    label: 'Materials Science – Faculty of Engineering',
    desc: 'Material composition and properties across metals, alloys, polymers, ceramics, glasses, composites, and circular recycling.'
  },
  {
    value: 'humanities',
    label: 'English Communication – Faculty of Humanities',
    desc: 'Interactive spoken fluency, pronunciation, intercultural dialogue, and excursion-linked English communication missions.'
  },
  {
    value: 'it',
    label: 'Fundamentals of Multimedia & AI – Faculty of Information Technology',
    desc: 'Human visual/auditory perception, digital imaging, image editing algorithms, and generative AI media creation.'
  }
];

export const learningFormatOptions: SurveyOption[] = [
  { value: 'interactive', label: 'Interactive Workshops', desc: 'Small-group problem solving, case studies, and collaborative challenges.' },
  { value: 'lectures', label: 'Faculty Expert Lectures', desc: 'Deep-dive theoretical perspectives by senior European professors.' },
  { value: 'labs', label: 'Laboratory Visits & Demos', desc: 'Hands-on hardware, chemical lab instruments, and software demonstrations.' }
];

export const accommodationChoices: SurveyOption[] = [
  {
    value: 'magister',
    label: 'Hotel Magister (University Campus Residence)',
    desc: 'Modern campus residence within walking distance of lecture halls (Approx. HUF 14,000 / person / night).'
  },
  {
    value: 'historia',
    label: 'Hotel História (Historic City Centre Boutique)',
    desc: 'Four-star boutique hotel right below Veszprém Castle (Approx. HUF 25,000 / person / night).'
  },
  {
    value: 'betekints',
    label: 'Betekints Hotel Veszprém (Séd Valley Wellness)',
    desc: 'Peaceful valley and wellness hotel beside the Séd stream and Zoo (indicative rate to be confirmed).'
  },
  {
    value: 'marina-port',
    label: 'Hotel Marina-Port (Lake Balaton Waterfront)',
    desc: 'Lakeside resort hotel in Balatonkenese with private beach and wellness (Approx. HUF 50,000 / person / night).'
  }
];

export const roomTypeOptions: SurveyOption[] = [
  {
    value: 'single',
    label: 'Single Private Room',
    desc: 'Private room for personal space and quiet rest between programme days.'
  },
  {
    value: 'twin',
    label: 'Shared Twin Room (2 students)',
    desc: 'Budget-friendly twin room shared with a fellow summer university participant.'
  },
  {
    value: 'flexible',
    label: 'Flexible / Best Value',
    desc: 'Open to either room setup depending on final group rates and availability.'
  }
];

export const accommodationPriorityOptions: SurveyOption[] = [
  {
    value: 'budget',
    label: 'Student-Friendly Budget',
    desc: 'Keeping nightly accommodation costs as affordable as possible.'
  },
  {
    value: 'proximity',
    label: 'Walking Distance to Campus & City Centre',
    desc: 'Easy foot access to lectures, cafes, and evening cultural events.'
  },
  {
    value: 'comfort',
    label: 'Hotel Comfort & Wellness',
    desc: 'Higher-tier hotel amenities, lakeside views, or spa/wellness access.'
  }
];
