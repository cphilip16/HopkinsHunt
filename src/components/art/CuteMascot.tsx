import React from 'react';
import { Sparkles } from 'lucide-react';

export type CuteMascotPose = 'waving' | 'snapping' | 'cheering' | 'explorer' | 'scholar' | 'snacking';

interface CuteMascotProps {
  pose?: CuteMascotPose;
  size?: number;
  className?: string;
  bubbleText?: string;
  speechBubble?: string;
}

export const CuteMascot: React.FC<CuteMascotProps> = ({
  pose = 'waving',
  size = 110,
  className = '',
  bubbleText,
  speechBubble,
}) => {
  const activeBubble = speechBubble || bubbleText;

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Interactive Speech / Thought Bubble */}
      {activeBubble && (
        <div className="mb-2 px-3 py-1.5 rounded-2xl bg-white text-slate-900 text-[11px] font-bold shadow-lg border-2 border-sky-200 flex items-center space-x-1.5 animate-bounce z-20 font-bubbly">
          <Sparkles className="w-3.5 h-3.5 text-sky-500 fill-sky-400 flex-shrink-0" />
          <span>{activeBubble}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-sky-200 rotate-45" />
        </div>
      )}

      <div
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center filter drop-shadow-md transform transition-transform hover:scale-105 duration-200"
      >
        <img
          src="/blue-jay-mascot.png"
          alt="Hoppy the Blue Jay Mascot"
          className="w-full h-full object-contain emote-idle"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/blue-jay.svg';
          }}
        />
      </div>
    </div>
  );
};
