import React from 'react';

// ================= 1. WASHI TAPE STRIP WITH TORN FIBER EDGES =================
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
  width = 84,
}) => {
  const colorStyles = {
    sky: 'bg-sky-200/85 border-sky-300/80 text-sky-900',
    gold: 'bg-amber-200/85 border-amber-300/80 text-amber-900',
    amber: 'bg-amber-200/85 border-amber-300/80 text-amber-900',
    pink: 'bg-rose-200/85 border-rose-300/80 text-rose-900',
    rose: 'bg-rose-200/85 border-rose-300/80 text-rose-900',
    mint: 'bg-emerald-200/85 border-emerald-300/80 text-emerald-900',
    teal: 'bg-emerald-200/85 border-emerald-300/80 text-emerald-900',
    maryland: 'bg-amber-300/90 border-red-300/80 text-slate-900',
  };

  return (
    <div
      className={`h-5 shadow-sm border-t border-b flex items-center justify-center select-none pointer-events-none relative overflow-hidden backdrop-blur-xs filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] ${colorStyles[color]} ${className}`}
      style={{
        width: `${width}px`,
        transform: `rotate(${angle}deg)`,
        clipPath: 'polygon(0% 8%, 2% 0%, 5% 10%, 8% 0%, 10% 8%, 90% 8%, 92% 0%, 95% 10%, 98% 0%, 100% 8%, 100% 92%, 98% 100%, 95% 90%, 92% 100%, 90% 92%, 10% 92%, 8% 100%, 5% 90%, 2% 100%, 0% 92%)',
      }}
    >
      {/* Decorative semi-translucent paper fiber grid texture */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:5px_5px]" />
      <div className="w-full flex justify-around opacity-50">
        <span className="text-[8px] font-mono">+</span>
        <span className="text-[8px] font-mono">+</span>
        <span className="text-[8px] font-mono">+</span>
      </div>
    </div>
  );
};

// ================= 2. ANIMATED PAPER AIRPLANE & FLIGHT TRAIL =================
interface PaperAirplaneTrailProps {
  className?: string;
}

export const PaperAirplaneTrail: React.FC<PaperAirplaneTrailProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center select-none pointer-events-none ${className}`}>
      <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes planeBobGlide {
              0%, 100% { transform: translate(78px, 4px) rotate(0deg); }
              50% { transform: translate(79px, 1px) rotate(-6deg); }
            }
            .animate-plane-glide {
              animation: planeBobGlide 2.2s infinite ease-in-out;
            }
          `}
        </style>
        {/* Dotted Flight Loop Trail */}
        <path
          d="M 2 28 C 24 34 32 8 50 18 C 62 25 72 12 80 8"
          stroke="#68ACE5"
          strokeWidth="1.8"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
        {/* Cute Animated Paper Plane */}
        <g className="animate-plane-glide">
          <polygon points="15,4 0,0 5,15 8,8" fill="#FFFFFF" stroke="#002D72" strokeWidth="1.2" />
          <line x1="15" y1="4" x2="5" y2="15" stroke="#68ACE5" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// ================= 3. AIRMAIL POSTAL STRIP =================
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

// ================= 4. LUGGAGE TAG CREDENTIAL WITH TWINE STRING =================
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
    <div className={`relative inline-flex items-center space-x-2.5 bg-[#FFFDF2] px-3.5 py-1.5 rounded-xl border-2 border-amber-300 shadow-sm text-slate-800 font-mono text-xs select-none ${className}`}>
      {/* Brass Grommet Ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-amber-200 border-2 border-amber-600 flex-shrink-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFFDF2]" />
        </div>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-[9px] font-sans font-black uppercase text-amber-900 tracking-wider">
          {label}
        </span>
        <span className="text-[10px] font-black text-slate-800 tracking-widest mt-0.5">
          #{tagNumber}
        </span>
      </div>

      {/* Decorative Mini Barcode */}
      <div className="hidden sm:flex items-center space-x-0.5 opacity-40 ml-1">
        <div className="w-0.5 h-4 bg-slate-800" />
        <div className="w-1 h-4 bg-slate-800" />
        <div className="w-0.5 h-4 bg-slate-800" />
        <div className="w-0.5 h-4 bg-slate-800" />
        <div className="w-1 h-4 bg-slate-800" />
      </div>
    </div>
  );
};

// ================= 5. PERFORATED POSTAGE STAMP BADGE =================
interface PostageStampBadgeProps {
  points: number;
  className?: string;
}

export const PostageStampBadge: React.FC<PostageStampBadgeProps> = ({
  points,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-black bg-amber-400 text-hopkins-deep shadow-sm border border-amber-500/50 select-none ${className}`}
      style={{
        clipPath: 'polygon(0% 10%, 5% 0%, 10% 10%, 15% 0%, 20% 10%, 25% 0%, 30% 10%, 35% 0%, 40% 10%, 45% 0%, 50% 10%, 55% 0%, 60% 10%, 65% 0%, 70% 10%, 75% 0%, 80% 10%, 85% 0%, 90% 10%, 95% 0%, 100% 10%, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0% 90%)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-hopkins-deep flex-shrink-0">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      <span>+{points} PTS</span>
    </div>
  );
};
