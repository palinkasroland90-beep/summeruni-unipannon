export type SessionCategory = 'academic' | 'learning' | 'culture' | 'optional' | 'meal' | 'fisu';

export interface Session {
  id: string;
  time: string;
  title: string;
  description: string;
  category: SessionCategory;
  tentative?: boolean;
  track?: string;
}

export type ProgrammeData = Record<string, Session[]>;

export interface DayInfo {
  dayNumber: number;
  weekday: string;
  theme: string;
  week: 1 | 2;
}

export interface Faculty {
  code: string;
  name: string;
  text: string;
  meta: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  art: string;
}

export interface DiscoveryItem {
  id: string;
  title: string;
  desc: string;
  day: number;
  art: string;
  color: 'blue' | 'teal' | 'sand' | 'green' | 'gold';
  sessionIds: string[];
}

export interface SurveyState {
  interests: string[];
  pace: string;
  language: string;
  comment: string;
  topic: string;
  format: string;
  date?: string;
}
