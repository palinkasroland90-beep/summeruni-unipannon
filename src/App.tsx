import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Programme } from './components/Programme';
import { Academics } from './components/Academics';
import { Experiences } from './components/Experiences';
import { Practical } from './components/Practical';
import { Surveys } from './components/Surveys';
import { Footer } from './components/Footer';
import { SessionDetailModal } from './components/SessionDetailModal';
import { SurveyModal } from './components/SurveyModal';
import { Toast } from './components/Toast';
import { Session, DiscoveryItem } from './types';
import { programmeData, weekdays, dayThemes, categoryLabels } from './data/programme';

export const App: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [selectedSessionDay, setSelectedSessionDay] = useState<number>(1);
  const [targetAgendaDay, setTargetAgendaDay] = useState<number>(1);
  const [surveyModalKind, setSurveyModalKind] = useState<'programme' | 'academic' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [programmeCompleted, setProgrammeCompleted] = useState<boolean>(false);
  const [academicCompleted, setAcademicCompleted] = useState<boolean>(false);

  // Check initial localStorage status
  useEffect(() => {
    try {
      setProgrammeCompleted(!!localStorage.getItem('pannon-summer-2027-survey-programme'));
      setAcademicCompleted(!!localStorage.getItem('pannon-summer-2027-survey-academic'));
    } catch {
      // ignore
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleExploreProgramme = () => {
    const el = document.getElementById('programme');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreAcademics = () => {
    const el = document.getElementById('academics');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectSession = (session: Session, dayNumber: number) => {
    setSelectedSession(session);
    setSelectedSessionDay(dayNumber);
  };

  const handleJumpToDay = (dayNumber: number) => {
    setTargetAgendaDay(dayNumber);
    const el = document.getElementById('programme');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectExperience = (item: DiscoveryItem) => {
    // If it has session IDs, try finding the first session in that day
    const daySessions = programmeData[String(item.day)] || [];
    const matchedSession =
      daySessions.find((s) => item.sessionIds.includes(s.id)) || daySessions[0];

    if (matchedSession) {
      setSelectedSession(matchedSession);
      setSelectedSessionDay(item.day);
    } else {
      handleJumpToDay(item.day);
    }
  };

  const handleDownloadProgramme = () => {
    const header = `UNIVERSITY OF PANNONIA
SUMMER UNIVERSITY 2027 · WORKING PROGRAMME PREVIEW
Veszprém & Lake Balaton, Hungary
Academic Discovery · European Culture · Global Community

=======================================================
`;

    const body = Object.entries(programmeData)
      .map(([d, events]) => {
        const dayNum = Number(d);
        const dayTheme = dayThemes[dayNum - 1] || 'Programme';
        const weekday = weekdays[(dayNum - 1) % 7];

        const eventLines = events
          .map(
            (e) =>
              `  [${e.time}] ${e.title} (${categoryLabels[e.category] || e.category})\n    ${e.description}`
          )
          .join('\n\n');

        return `DAY ${String(dayNum).padStart(2, '0')} (${weekday.toUpperCase()}) - ${dayTheme}
-------------------------------------------------------
${eventLines}`;
      })
      .join('\n\n=======================================================\n\n');

    const fullText = header + '\n' + body;
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pannon-Summer-University-2027-Programme.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Programme schedule downloaded (.TXT)!');
  };

  const handleSurveySuccess = (kind: 'programme' | 'academic') => {
    if (kind === 'programme') setProgrammeCompleted(true);
    if (kind === 'academic') setAcademicCompleted(true);
    showToast('Your survey responses were saved locally!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#193c55] selection:bg-[#00b0b9]/30">
      {/* Navigation */}
      <Navbar onExploreProgramme={handleExploreProgramme} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProgramme={handleExploreProgramme}
          onExploreAcademics={handleExploreAcademics}
        />

        {/* Pannon Intro / Philosophy */}
        <Intro />

        {/* 14-Day Interactive Programme Agenda */}
        <Programme
          activeDay={targetAgendaDay}
          onSelectSession={handleSelectSession}
          onDownloadProgramme={handleDownloadProgramme}
        />

        {/* Academic Faculties (GTK, MIK, MK) */}
        <Academics onJumpToDay={handleJumpToDay} />

        {/* Culture, Balaton & Optional Activities */}
        <Experiences
          onSelectExperience={handleSelectExperience}
          onJumpToDay={handleJumpToDay}
        />

        {/* Campus Life & Practical FAQs */}
        <Practical />

        {/* Interactive Student Surveys */}
        <Surveys
          onOpenSurvey={(kind) => setSurveyModalKind(kind)}
          programmeCompleted={programmeCompleted}
          academicCompleted={academicCompleted}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Session Details Modal Dialog */}
      <SessionDetailModal
        session={selectedSession}
        dayNumber={selectedSessionDay}
        isOpen={!!selectedSession}
        onClose={() => setSelectedSession(null)}
        onJumpToDay={handleJumpToDay}
      />

      {/* Survey Wizard Modal */}
      <SurveyModal
        kind={surveyModalKind}
        isOpen={!!surveyModalKind}
        onClose={() => setSurveyModalKind(null)}
        onSuccess={handleSurveySuccess}
      />

      {/* Action Notification Toast */}
      <Toast message={toastMessage} />
    </div>
  );
};
