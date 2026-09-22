import React from 'react';

export type MascotPose = 'explorer' | 'scholar' | 'cheer' | 'flight';

interface BlueJayMascotProps {
  pose?: MascotPose;
  className?: string;
  size?: number;
}

export const BlueJayMascot: React.FC<BlueJayMascotProps> = ({
  pose = 'explorer',
  className = '',
  size = 120,
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      <img
        src="/blue-jay-mascot.png"
        alt="Hoppy the Blue Jay Mascot"
        className="w-full h-full object-contain filter drop-shadow-md emote-idle"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/blue-jay.svg';
        }}
      />
    </div>
  );
};
