import React from 'react';

export const ExplorerEmblem = ({ className = "w-10 h-10", showText = true }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative flex items-center justify-center rounded-full bg-[#172B46] p-2 text-[#FFCF56] transition-transform duration-300 group-hover:scale-105 shadow-md ${className}`}>
        {/* Globe SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none stroke-[6]">
          <circle cx="50" cy="50" r="42" stroke="#FFCF56" strokeWidth="6" />
          <path d="M 8,50 H 92" stroke="#77CDB5" strokeWidth="5" strokeDasharray="4 2" />
          <path d="M 50,8 V 92" stroke="#77CDB5" strokeWidth="5" strokeDasharray="4 2" />
          <ellipse cx="50" cy="50" rx="26" ry="42" stroke="#A995E8" strokeWidth="5" />
        </svg>
        {/* Paper Airplane Flying Out */}
        <div className="absolute -top-1 -right-2 transform rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          <svg className="w-6 h-6 text-[#FF796C] fill-current" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-fredoka text-xs tracking-widest text-[#FF796C] uppercase font-bold">The Beyond</span>
          <span className="font-fredoka text-lg tracking-tight text-[#172B46] font-bold">CLASSROOM CLUB</span>
        </div>
      )}
    </div>
  );
};

export default ExplorerEmblem;
