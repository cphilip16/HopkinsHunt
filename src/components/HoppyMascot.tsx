import React, { useState } from 'react';
import { Sparkles, Music, Trophy, Feather, Flame, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HoppyMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSpeechBubble?: boolean;
  className?: string;
  interactive?: boolean;
}

type EmoteType = 'idle' | 'flap' | 'dance' | 'spin';

interface MascotEmote {
  type: EmoteType;
  quote: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const EMOTE_CYCLES: MascotEmote[] = [
  {
    type: 'flap',
    quote: 'Flapping my wings! Go Blue Jays!',
    subtext: 'Tap me again for a victory dance!',
    icon: Feather,
    iconColor: 'text-sky-500',
  },
  {
    type: 'dance',
    quote: 'Charm City groove! Wiggle wiggle!',
    subtext: 'Sydney is ready to explore!',
    icon: Music,
    iconColor: 'text-pink-500',
  },
  {
    type: 'spin',
    quote: '360 Victory Flip! Leaderboard climb!',
    subtext: 'Can you overtake Sofia on the rankings?',
    icon: Trophy,
    iconColor: 'text-amber-500',
  },
  {
    type: 'flap',
    quote: 'Homewood pride in flight!',
    subtext: 'Next stop: Peabody Library & Inner Harbor!',
    icon: Flame,
    iconColor: 'text-rose-500',
  },
];

export const HoppyMascot: React.FC<HoppyMascotProps> = ({
  size = 'md',
  showSpeechBubble = true,
  className = '',
  interactive = true,
}) => {
  const [emote, setEmote] = useState<EmoteType>('idle');
  const [quoteData, setQuoteData] = useState<MascotEmote | null>(null);
  const [emoteIndex, setEmoteIndex] = useState(0);

  const handleMascotClick = () => {
    if (!interactive) return;

    const nextIndex = (emoteIndex + 1) % EMOTE_CYCLES.length;
    const nextEmote = EMOTE_CYCLES[nextIndex];
    setEmoteIndex(nextIndex);
    setEmote(nextEmote.type);
    setQuoteData(nextEmote);

    // Cute light burst confetti
    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#002D72', '#68ACE5', '#fb7185', '#F1C400'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    // Auto reset to idle after animation cycle
    window.setTimeout(() => {
      setEmote('idle');
    }, 2400);
  };

  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    hero: 'w-32 h-32 md:w-36 md:h-36',
  }[size];

  const emoteAnimationClass = {
    idle: 'emote-idle',
    flap: 'emote-flap',
    dance: 'emote-dance',
    spin: 'emote-spin',
  }[emote];

  const IconComponent = quoteData?.icon || Sparkles;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        interactive ? 'cursor-pointer group' : ''
      } ${className}`}
      onClick={handleMascotClick}
      title={interactive ? 'Click Hoppy to play & emote!' : undefined}
    >
      {/* Interactive Speech & Emote Bubble */}
      {showSpeechBubble && quoteData && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-sky-200 text-center animate-bounce-in z-30 pointer-events-none">
          <div className="flex items-center justify-center gap-1.5 mb-1 font-bubbly font-bold text-slate-800 text-xs tracking-wide">
            <IconComponent className={`w-3.5 h-3.5 ${quoteData.iconColor}`} />
            <span>HOPPY SAYS</span>
          </div>
          <p className="text-xs font-semibold text-sky-950 leading-snug">
            "{quoteData.quote}"
          </p>
          <p className="text-[10px] text-slate-500 mt-0.5">
            {quoteData.subtext}
          </p>
          {/* Cartoon speech triangle pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-8 border-transparent border-t-white" />
        </div>
      )}

      {/* Mascot Graphic Image with Emote Animation */}
      <div className={`relative ${sizeClasses} transition-transform duration-200 group-hover:scale-105 active:scale-95`}>
        <img
          src="/blue-jay-mascot.png"
          alt="Hoppy the Hopkins Blue Jay Mascot"
          className={`w-full h-full object-contain filter drop-shadow-md transition-all ${emoteAnimationClass}`}
          onError={(e) => {
            // Fallback to SVG if PNG fails
            (e.target as HTMLImageElement).src = '/blue-jay.svg';
          }}
        />

        {/* Emote Indicator Sparkle Pill */}
        {interactive && (
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm flex items-center gap-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-2.5 h-2.5" />
            <span className="capitalize">{emote === 'idle' ? 'Tap' : emote}</span>
          </div>
        )}
      </div>
    </div>
  );
};

