import React from 'react';

export type FacultyArtKey = 'gtk' | 'mik' | 'mk' | 'htk';

interface FacultyArtSvgProps {
  facultyKey: FacultyArtKey;
  className?: string;
}

export const FacultyArtSvg: React.FC<FacultyArtSvgProps> = ({
  facultyKey,
  className,
}) => {
  return (
    <svg className={className} viewBox="0 0 300 300" aria-hidden="true">
      {facultyKey === 'gtk' && (
        <>
          <circle cx="205" cy="155" r="95" />
          <circle cx="205" cy="155" r="65" />
          <path d="M110 155h190M205 60v190M135 85l140 140M135 225l140-140" />
          <circle cx="205" cy="155" r="23" />
        </>
      )}

      {facultyKey === 'mik' && (
        <>
          <rect x="110" y="60" width="190" height="190" rx="15" />
          <circle cx="160" cy="120" r="18" />
          <circle cx="250" cy="120" r="18" />
          <path d="M140 190h130M205 60v50M160 138v52M250 138v52" />
        </>
      )}

      {facultyKey === 'mk' && (
        <>
          <circle cx="205" cy="155" r="80" />
          <path d="M205 45v30M205 235v30M95 155h30M285 155h30M127 77l21 21M263 213l21 21M127 233l21-21M263 97l21-21" />
          <circle cx="205" cy="155" r="40" />
        </>
      )}

      {facultyKey === 'htk' && (
        <>
          <path d="M125 90c25 0 55 10 80 25 25-15 55-25 80-25v120c-25 0-55 10-80 25-25-15-55-25-80-25V90z" />
          <path d="M205 115v120" />
          <circle cx="205" cy="88" r="22" />
          <path d="M148 132c15 2 30 7 42 14M148 162c15 2 30 7 42 14M262 132c-15 2-30 7-42 14M262 162c-15 2-30 7-42 14" />
        </>
      )}
    </svg>
  );
};

interface ExperienceArtSvgProps {
  kind: string;
  className?: string;
}

export const ExperienceArtSvg: React.FC<ExperienceArtSvgProps> = ({
  kind,
  className,
}) => {
  const renderArtwork = () => {
    switch (kind) {
      case 'lake':
        return (
          <path d="M0 94q16-8 32 0t32 0t32 0t32 0t32 0t32 0M0 106q16-8 32 0t32 0t32 0t32 0t32 0t32 0M34 85l36-54 18 27M138 85l30-44 14 22" />
        );
      case 'porcelain':
        return (
          <path d="M57 30h75m-63 0v17c0 12-20 17-20 34 0 16 17 23 45 23s45-7 45-23c0-17-20-22-20-34V30M53 48q-23 0-23 18t23 18m83-36q23 0 23 18t-23 18" />
        );
      case 'castle':
        return (
          <path d="M10 112q45-25 97-17 53-10 94 0M47 97V46h20v-9h12v9h20v50M43 46V24h9v8h10v-8h10v22M118 97V33h46v64M112 33V12h11v9h12v-9h11v21" />
        );
      case 'wine':
        return (
          <path d="M46 15h48v27a24 24 0 0 1-48 0V15Zm24 51v38m-20 0h40M47 34h46m-39 6 4 13M138 23h28v77m-28 0h28m-14-63a14 14 0 0 0-14 14v49h28V51a14 14 0 0 0-14-14Z" />
        );
      case 'nature':
        return (
          <path d="M0 107h204M14 106l43-75 40 75M34 70h45M102 105l42-92 45 92M124 53h41m-20 52v-8M55 106v-8" />
        );
      case 'music':
        return (
          <path d="M25 103V51m0 4h5m8 48V33m13 70V65m13 38V42m13 61V19m13 84V63m14 40V49m14 54V25m13 78V58m13 45V39m13 64V54m14 49V28m14 75V69" />
        );
      case 'people':
        return (
          <>
            <circle cx="71" cy="36" r="14" />
            <circle cx="137" cy="36" r="14" />
            <path d="M46 101V71a25 25 0 0 1 50 0v30m-16 0V75a25 25 0 0 1 50 0v26" />
          </>
        );
      case 'cave':
        return (
          <path d="M6 109 30 34l35-16 33 9 29-17 47 20 25 79M43 109V66l20-15 32 4 25-17 31 22 16 49M65 109V77l24-11 26 12 18 31" />
        );
      case 'city':
      default:
        return (
          <path d="M10 103h190M30 103V45h42v58M42 45V24h18v21M84 103V61h45v42M143 103V34h40v69M140 34l20-13 23 13" />
        );
    }
  };

  return (
    <svg className={className} viewBox="0 0 204 120" aria-hidden="true">
      {renderArtwork()}
    </svg>
  );
};
