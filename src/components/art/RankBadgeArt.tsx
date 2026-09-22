import React, { useId } from 'react';

const themes = [
  { name: 'Nestling', background: '#dff4ff', rim: '#83cfff', accent: '#2384c6' },
  { name: 'Homewood Hopper', background: '#d8f9ed', rim: '#72dcb6', accent: '#168f78' },
  { name: 'Charm City Scout', background: '#e5e9ff', rim: '#a7b5ff', accent: '#5065bd' },
  { name: 'Bmore Blue Jay', background: '#ffe8db', rim: '#ffb58b', accent: '#df674c' },
  { name: 'Charm City Laureate', background: '#fff1bf', rim: '#f7ca65', accent: '#c8832d' },
];

export const RankBadgeArt: React.FC<{ rankId: number; size?: number; className?: string }> = ({
  rankId, size = 48, className = '',
}) => {
  const theme = themes[rankId - 1] ?? themes[0];
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} role="img" aria-label={`${theme.name} badge`}>
      <defs>
        <radialGradient id={id} cx="35%" cy="25%" r="75%">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor={theme.background} />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={theme.rim} />
      <circle cx="32" cy="32" r="26" fill={`url(#${id})`} stroke="#fff" strokeWidth="2" />
      <circle cx="15" cy="15" r="2" fill="#fff" opacity=".8" />
      <circle cx="50" cy="19" r="1.5" fill="#fff" opacity=".8" />
      {rankId === 1 && (
        <>
          <ellipse cx="32" cy="44" rx="18" ry="7" fill="#c98950" />
          <path d="M16 42q16 10 32 0M19 46q13 8 26 0" stroke="#805038" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="32" cy="30" rx="13" ry="15" fill="#68ace5" />
          <ellipse cx="32" cy="36" rx="9" ry="8" fill="#fff8e8" />
          <path d="M28 18q2-7 5-3l3 5" fill="#2384c6" />
          <circle cx="27" cy="29" r="1.7" fill="#24344d" /><circle cx="37" cy="29" r="1.7" fill="#24344d" />
          <path d="M29 33q3 4 6 0" fill="#ffbd56" />
          <circle cx="23" cy="33" r="2" fill="#ffb8b8" /><circle cx="41" cy="33" r="2" fill="#ffb8b8" />
        </>
      )}
      {rankId === 2 && (
        <>
          <path d="M12 43q9-9 18-2t22-7" stroke="#87c9ab" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 5" />
          <ellipse cx="34" cy="33" rx="12" ry="13" fill="#54a7db" />
          <ellipse cx="31" cy="37" rx="8" ry="7" fill="#fff7e9" />
          <path d="M30 21q3-8 7-3l2 5" fill="#2584bc" />
          <path d="M42 33q8-7 11-3-2 8-10 10" fill="#2c8fbd" />
          <circle cx="30" cy="31" r="1.7" fill="#24344d" />
          <path d="M24 33l-5 2 5 2" fill="#ffba59" />
          <path d="M28 46l-4 5m13-5 4 5" stroke="#efad54" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 22q5-8 10 0m-5-5v10" stroke="#329d7c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="17" cy="17" r="4" fill="#8cdb9e" />
        </>
      )}
      {rankId === 3 && (
        <>
          <path d="M10 45q10-4 21 0t23 0" stroke="#8cbbe7" strokeWidth="3" strokeLinecap="round" />
          <path d="M15 18l10-4 10 4-10 4z" fill="#fff" stroke={theme.accent} strokeWidth="2" strokeLinejoin="round" />
          <path d="M20 20v9l5-2 5 2v-9" fill="#b8c8ff" stroke={theme.accent} strokeWidth="1.5" />
          <circle cx="38" cy="34" r="14" fill="#fff" stroke={theme.accent} strokeWidth="2.5" />
          <path d="M38 23v22m-11-11h22" stroke="#a8b6e9" strokeWidth="1" />
          <path d="M38 25l4 9-4-2-4 2z" fill="#f08169" />
          <path d="M38 43l-4-9 4 2 4-2z" fill={theme.accent} />
          <circle cx="38" cy="34" r="2" fill="#ffd474" />
        </>
      )}
      {rankId === 4 && (
        <>
          <path d="M12 46q20-9 40 0" stroke="#efaa87" strokeWidth="3" strokeLinecap="round" />
          <path d="M19 25q-5-7-8-2 0 7 8 8m26-6q5-7 8-2 0 7-8 8" fill="#5ba3d6" stroke="#266d9e" strokeWidth="2" />
          <ellipse cx="32" cy="33" rx="16" ry="17" fill="#4e9ed5" />
          <ellipse cx="32" cy="39" rx="11" ry="9" fill="#fff8eb" />
          <path d="M27 18q3-9 7-3l3 5" fill="#246aa9" />
          <circle cx="26" cy="31" r="2" fill="#24344d" /><circle cx="38" cy="31" r="2" fill="#24344d" />
          <path d="M28 35q4 5 8 0" fill="#ffbd56" />
          <circle cx="21" cy="36" r="2" fill="#ffacaa" /><circle cx="43" cy="36" r="2" fill="#ffacaa" />
          <path d="M45 45q3-6 6-2l-3 5" fill="#ef7258" />
        </>
      )}
      {rankId === 5 && (
        <>
          <path d="M18 21l5 5 9-12 9 12 5-5-3 16H21z" fill="#ffd566" stroke="#b97d2b" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="18" cy="20" r="3" fill="#ff91a4" /><circle cx="32" cy="13" r="3" fill="#88c9f3" /><circle cx="46" cy="20" r="3" fill="#ff91a4" />
          <ellipse cx="32" cy="39" rx="13" ry="12" fill="#5a9ed1" />
          <ellipse cx="32" cy="43" rx="9" ry="7" fill="#fff8e9" />
          <circle cx="27" cy="38" r="1.6" fill="#24344d" /><circle cx="37" cy="38" r="1.6" fill="#24344d" />
          <path d="M29 42q3 4 6 0" fill="#ffba58" />
          <path d="M12 36l2 3 3 1-3 1-2 3-1-3-3-1 3-1zm40-2 1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fff" />
        </>
      )}
    </svg>
  );
};
