import React from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  textColor?: string;
}

export function SocialIcon({ icon, label, bgColor, textColor = "text-white" }: SocialIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
      <div 
        className={`
          ${bgColor} 
          w-16 h-16 md:w-24 md:h-24 
          rounded-full 
          flex items-center justify-center 
          shadow-lg
          transition-all duration-300
          hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]
          hover:brightness-110
        `}
      >
        <div className={`${textColor} transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      <span className={`${textColor} text-xs md:text-sm font-semibold`}>
        {label}
      </span>
    </div>
  );
}