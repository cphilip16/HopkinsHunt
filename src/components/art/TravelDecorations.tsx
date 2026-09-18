import React from 'react';

// ================= WASHI TAPE STRIP =================
interface WashiTapeProps {
  color?: 'sky' | 'gold' | 'pink' | 'mint' | 'maryland' | 'amber' | 'rose' | 'teal';
  className?: string;
  angle?: number;
  width?: number;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = 'sky',
  className = '',
  angle = -3,
  width = 80,
}) => {
  const colorStyles = {
    sky: 'bg-sky-200/80 border-sky-300/60 text-sky-800',
    gold: 'bg-amber-200/80 border-amber-300/60 text-amber-800',
    amber: 'bg-amber-200/80 border-amber-300/60 text-amber-800',
    pink: 'bg-rose-200/80 border-rose-300/60 text-rose-800',
    rose: 'bg-rose-200/80 border-rose-300/60 text-rose-800',
    mint: 'bg-emerald-200/80 border-emerald-300/60 text-emerald-800',
    teal: 'bg-emerald-200/80 border-emerald-300/60 text-emerald-800',
    maryland: 'bg-amber-300/85 border-red-300/70 text-slate-800',
  };

  return (
    <div
      className={`h-5 shadow-sm border-t border-b flex items-center justify-center select-none pointer-events-none relative overflow-hidden backdrop-blur-xs ${colorStyles[color]} ${className}`}
      style={{
        width: `${width}px`,
        transform: `rotate(${angle}deg)`,
      }}
    >
      {/* Decorative semi-translucent tape texture */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="w-full flex justify-around opacity-40">
        <span className="text-[8px] font-mono">✦</span>
        <span className="text-[8px] font-mono">✦</span>
        <span className="text-[8px] font-mono">✦</span>
      </div>
    </div>
  );
};

// ================= PAPER AIRPLANE & FLIGHT TRAIL =================
interface PaperAirplaneTrailProps {
  className?: string;
}

export const PaperAirplaneTrail: React.FC<PaperAirplaneTrailProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center select-none pointer-events-none ${className}`}>
      <svg width="90" height="34" viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dotted Flight Loop Trail */}
        <path
          d="M 2 26 C 24 32 32 10 48 18 C 58 24 68 12 76 8"
          stroke="#68ACE5"
          strokeWidth="1.8"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        {/* Cute Paper Plane */}
        <g transform="translate(72, 2)">
          <polygon points="14,4 0,0 4,14 7,7" fill="#FFFFFF" stroke="#002D72" strokeWidth="1.2" />
          <line x1="14" y1="4" x2="4" y2="14" stroke="#68ACE5" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// ================= AIRMAIL POSTAL STRIP =================
interface AirmailStripProps {
  className?: string;
  height?: number;
}

export const AirmailStrip: React.FC<AirmailStripProps> = ({ className = '', height = 4 }) => {
  return (
    <div
      className={`w-full overflow-hidden flex select-none pointer-events-none ${className}`}
      style={{
        height: `${height}px`,
        backgroundImage: `repeating-linear-gradient(135deg, #DC2626 0px, #DC2626 12px, #FFFFFF 12px, #FFFFFF 20px, #002D72 20px, #002D72 32px, #FFFFFF 32px, #FFFFFF 40px)`,
      }}
    />
  );
};

// ================= LUGGAGE TAG CREDENTIAL =================
interface LuggageTagProps {
  tagNumber: string;
  label?: string;
  className?: string;
}

export const LuggageTag: React.FC<LuggageTagProps> = ({
  tagNumber,
  label = 'BALTIMORE EXPEDITION',
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center space-x-2 bg-[#FFFDF0] px-3 py-1.5 rounded-xl border border-amber-300/80 shadow-sm text-slate-800 font-mono text-xs select-none ${className}`}>
      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600 flex-shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="text-[9px] font-sans font-black uppercase text-amber-800 tracking-wider">
          {label}
        </span>
        <span className="text-[10px] font-black text-slate-700 tracking-widest mt-0.5">
          #{tagNumber}
        </span>
      </div>
    </div>
  );
};
