export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScheduleSlot {
  time: string;
  label: string;
  desc: string;
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
    answer: 'This preview reflects the comprehensive programme concept for summer 2027. Exact calendar dates, accommodation details, transfers, and group bookings will be confirmed in collaboration with partner universities. The wine dinner also features a premium alcohol-free pairing.'
  },
  {
    question: 'What language is used during the summer university?',
    answer: 'The primary language of instruction and all official excursions is English. In addition, interactive language exchanges provide introductory exposure to Hungarian language and Central European cultural context.'
  },
  {
    question: 'Where will students be accommodated?',
    answer: 'Students stay in modern, secure university dormitory accommodation in Veszprém, within walking distance of the historic city centre, faculty lecture halls, and campus amenities.'
  }
];
