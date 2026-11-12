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
  { value: 'gtk', label: 'Business & Regional Economics (GTK)', desc: 'Regional competitiveness, circular business models, and Central European trade.' },
  { value: 'mik', label: 'Applied AI & Information Technology (MIK)', desc: 'Artificial intelligence applications, smart sensors, and modern data platforms.' },
  { value: 'mk', label: 'Engineering & Sustainability (MK)', desc: 'Advanced functional materials, circular chemistry, and environmental innovation.' }
];

export const learningFormatOptions: SurveyOption[] = [
  { value: 'interactive', label: 'Interactive Workshops', desc: 'Small-group problem solving, case studies, and collaborative challenges.' },
  { value: 'lectures', label: 'Faculty Expert Lectures', desc: 'Deep-dive theoretical perspectives by senior European professors.' },
  { value: 'labs', label: 'Laboratory Visits & Demos', desc: 'Hands-on hardware, chemical lab instruments, and software demonstrations.' }
];
