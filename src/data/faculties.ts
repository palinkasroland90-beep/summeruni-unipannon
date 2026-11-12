import { Faculty } from '../types';

export const facultiesData: Record<string, Faculty> = {
  gtk: {
    code: 'GTK',
    name: 'Faculty of Business and Economics',
    text: 'Explore modern business models, regional economic development, sustainable management practices and cross-cultural business communication in Central Europe.',
    meta: ['Regional business models', 'Circular economy & ESG', 'Cross-cultural management'],
    features: [
      {
        title: 'Regional Strategy',
        description: 'Analyzing Central European economic transitions and innovative regional development.'
      },
      {
        title: 'Sustainable Enterprise',
        description: 'ESG metrics, circular business design, and value creation in traditional industries.'
      },
      {
        title: 'Cross-Border Business',
        description: 'Interactive negotiations, market entry case studies, and practical workshops.'
      }
    ],
    art: '<circle cx="205" cy="155" r="95"/><circle cx="205" cy="155" r="65"/><path d="M110 155h190M205 60v190M135 85l140 140M135 225l140-140"/><circle cx="205" cy="155" r="23"/>'
  },
  mik: {
    code: 'MIK',
    name: 'Faculty of Information Technology',
    text: 'Dive into cutting-edge applied artificial intelligence, intelligent systems, digital innovation and hands-on workshops in data and computer science.',
    meta: ['Applied AI & Machine Learning', 'Intelligent Sensor Networks', 'Data Engineering'],
    features: [
      {
        title: 'Applied AI Systems',
        description: 'Hands-on exploration of machine learning pipelines and modern intelligent systems.'
      },
      {
        title: 'IoT & Smart Environments',
        description: 'Sensor network integration, edge intelligence, and ambient computing lab demonstrations.'
      },
      {
        title: 'Software Architecture',
        description: 'Scalable cloud patterns, distributed services, and collaborative engineering.'
      }
    ],
    art: '<rect x="110" y="60" width="190" height="190" rx="15"/><circle cx="160" cy="120" r="18"/><circle cx="250" cy="120" r="18"/><path d="M140 190h130M205 60v50M160 138v52M250 138v52"/>'
  },
  mk: {
    code: 'MK',
    name: 'Faculty of Engineering',
    text: 'Gain insights into sustainable engineering, circular economy, advanced materials, and environmental technologies through lectures and laboratory visits.',
    meta: ['Advanced Materials & Nanotech', 'Environmental Technologies', 'Process Optimization'],
    features: [
      {
        title: 'Clean Technologies',
        description: 'Circular chemical processes, industrial wastewater treatment, and zero-emission concepts.'
      },
      {
        title: 'Materials Science',
        description: 'Structural testing, polymer recycling, and advanced functional materials characterization.'
      },
      {
        title: 'Industrial Diagnostics',
        description: 'State-of-the-art laboratory visits and hands-on measurement sessions.'
      }
    ],
    art: '<circle cx="205" cy="155" r="80"/><path d="M205 45v30M205 235v30M95 155h30M285 155h30M127 77l21 21M263 213l21 21M127 233l21-21M263 97l21-21"/><circle cx="205" cy="155" r="40"/>'
  }
};
