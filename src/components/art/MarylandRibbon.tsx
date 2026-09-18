import React from 'react';

interface MarylandRibbonProps {
  className?: string;
  height?: number;
}

export const MarylandRibbon: React.FC<MarylandRibbonProps> = ({
  className = '',
  height = 4,
}) => {
  return (
    <div
      className={`w-full overflow-hidden flex select-none ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {/* Repeating Calvert & Crossland Heraldic Strip */}
      <div className="flex-1 flex">
        {/* Section 1: Calvert Gold & Black */}
        <div className="flex-1 bg-gradient-to-r from-amber-400 via-black to-amber-400" />
        {/* Section 2: Hopkins Spirit Blue Bridge */}
        <div className="w-12 bg-hopkins-spirit" />
        {/* Section 3: Crossland Red & White */}
        <div className="flex-1 bg-gradient-to-r from-red-600 via-white to-red-600" />
        {/* Section 4: Hopkins Heritage Deep Blue Bridge */}
        <div className="w-12 bg-hopkins-heritage" />
        {/* Section 5: Calvert Gold & Black */}
        <div className="flex-1 bg-gradient-to-r from-amber-400 via-black to-amber-400" />
      </div>
    </div>
  );
};
