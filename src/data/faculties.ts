import { Faculty } from '../types';

export const facultiesData: Record<string, Faculty> = {
  gtk: {
    name: 'Faculty of Business and Economics',
    text: 'Course: Starting a Business (2 hours/week · 3 credits). Learn the essential steps of launching a venture—from idea generation, market research, and customer-centric product design to Business Model Canvas, marketing strategy, financial planning, and funding. Apply your knowledge in a team startup project culminating in a closing business pitch.',
    meta: ['Idea Generation & MVP', 'Business Model Canvas', 'Financial Planning & Pitch'],
    features: [
      {
        title: 'Opportunity & Validation',
        description: 'Entrepreneurial mindset, trend analysis, team building, customer interviews, and market mapping (Modules 1–4).'
      },
      {
        title: 'Product & Go-to-Market',
        description: 'Customer-centred service design, MVP prototyping, brand positioning, and sales channels (Modules 5–8).'
      },
      {
        title: 'Finance & Final Pitch',
        description: 'Pricing, cash-flow modelling, investor readiness, company setup, and final team pitch (Modules 9–12).'
      }
    ]
  },
  mik: {
    name: 'Faculty of Information Technology',
    text: 'Course: Fundamentals of Multimedia I (2 hours/week · 3 credits). Explore the core concepts, technologies, and applications of digital media—spanning human visual and auditory perception, digital image representation, image editing algorithms, and generative AI tools. Combine theory with creative hands-on project work.',
    meta: ['Digital Imaging & Pixels', 'Generative AI Media', 'Creative Project & Quiz'],
    features: [
      {
        title: 'Perception & Digital Imaging',
        description: 'Multimedia concepts, visual/auditory illusions, pixels, resolution, and colour models (Days 03–05).'
      },
      {
        title: 'Editing & Algorithms',
        description: 'Practical image cropping, geometric transforms, colour correction, and filtering algorithms (Day 08).'
      },
      {
        title: 'Generative AI & Project',
        description: 'Prompt-based AI media creation (Day 09), followed by a hands-on multimedia project and quiz (Day 10).'
      }
    ]
  },
  mk: {
    name: 'Faculty of Engineering',
    text: 'Course: Materials Science (6 sessions · 4×45 mins). Gain a cohesive engineering perspective on how material composition and structure shape properties and real-world applications—covering metals, alloys, polymers, ceramics, glasses, binders, and composites, plus modern characterization methods.',
    meta: ['Metals, Alloys & Polymers', 'Ceramics & Composites', 'Circular Materials Science'],
    features: [
      {
        title: 'Fundamentals & Properties',
        description: 'History, circular economy, states of matter, plus optical, electrical, magnetic, mechanical, and thermal traits.'
      },
      {
        title: 'Metals & Polymers',
        description: 'Steels, cast irons, non-ferrous and special alloys alongside plastics, rubbers, and polymer recycling.'
      },
      {
        title: 'Ceramics & Composites',
        description: 'Inorganic non-metallic materials (ceramics, glasses, binders) and composite matrix/disperse systems.'
      }
    ]
  },
  htk: {
    name: 'Faculty of Humanities',
    text: 'Summer English Communication Programme (6 training days · 42 lessons · A2 & B1 groups of 10–15 students). Boost spoken fluency, pronunciation, and confidence in everyday and academic communication through role-plays, debates, and excursion missions—beginning with the Placement & Speaking Challenge on Day 01.',
    meta: ['Placement & Speaking Challenge', 'A2 & B1 Small Groups', 'Excursion Language Missions'],
    features: [
      {
        title: 'Placement & Ice-Breaking',
        description: 'Day 01 Placement & Speaking Challenge (listening, pair interviews & picture tasks for A2/B1 grouping), plus Breaking the Ice and Speak Naturally!.'
      },
      {
        title: 'Storytelling & Culture',
        description: 'Tell Your Story! and Across Cultures link Veszprém, Balaton, Herend, and Zirc excursions with real English communication.'
      },
      {
        title: 'Spontaneous Debate & Challenge',
        description: 'Think Fast, Speak Freely! and The Great English Challenge conclude with My Hungarian Experience talks and feedback.'
      }
    ]
  }
};
