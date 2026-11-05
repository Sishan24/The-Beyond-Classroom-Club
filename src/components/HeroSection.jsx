import React from 'react';
import { Sparkles, Send, Radio } from 'lucide-react';

export const HeroSection = ({ curiosityCount, onOpenModal, onListenStudio }) => {
  return (
    <section id="hero-section" className="relative rounded-3xl bg-grid-pattern bg-[#172B46] text-[#FFF9ED] p-8 md:p-14 overflow-hidden border-4 border-[#172B46] shadow-[8px_8px_0px_#FF796C]">
      {/* Animated Background SVG Accents */}
      <div className="absolute top-6 right-8 animate-float pointer-events-none opacity-80">
        <svg className="w-20 h-20 text-[#FFCF56]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L63 37 L100 50 L63 63 L50 100 L37 63 L0 50 L37 37 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-1/4 animate-float-reverse pointer-events-none opacity-60">
        <svg className="w-14 h-14 text-[#77CDB5]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-4 animate-float pointer-events-none opacity-40">
        <svg className="w-12 h-12 text-[#A995E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF796C] text-[#172B46] font-fredoka font-bold text-xs md:text-sm tracking-wider uppercase px-4 py-1.5 rounded-full border border-[#172B46] shadow-sm">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>A Student-Led Initiative • Est. 2026</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-fredoka text-4xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight text-[#FFF9ED]">
          BIG QUESTIONS. <br />
          <span className="text-[#FFCF56]">BRIGHT MINDS.</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-playfair text-xl sm:text-2xl italic text-[#77CDB5]">
          "Your curiosity deserves a bigger playground."
        </p>

        <p className="text-base sm:text-lg text-[#FFF9ED]/90 max-w-xl font-normal leading-relaxed">
          Think beyond. Explore everything. A vibrant Cambridge student media society & magazine where big ideas meet fearless young thinkers.
        </p>

        {/* CTA Group */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button 
            onClick={onOpenModal}
            className="flex items-center gap-3 bg-[#FFCF56] text-[#172B46] font-fredoka font-bold text-lg px-7 py-3.5 rounded-full border-2 border-[#172B46] shadow-[4px_4px_0px_#FF796C] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <span>Ask a Big Question</span>
            <Send className="w-5 h-5" />
          </button>

          <button 
            onClick={onListenStudio}
            className="flex items-center gap-2 bg-[#A995E8] text-[#172B46] font-fredoka font-semibold text-base px-6 py-3.5 rounded-full border-2 border-[#172B46] hover:bg-[#A995E8]/90 transition-all"
          >
            <Radio className="w-5 h-5 text-[#172B46]" />
            <span>Listen to RN Studio</span>
          </button>
        </div>

        {/* Live Ticker Banner */}
        <div className="pt-6 flex items-center gap-3 text-xs md:text-sm font-fredoka text-[#77CDB5]">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#77CDB5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#77CDB5]"></span>
          </span>
          <span><strong>{curiosityCount.toLocaleString()}</strong> Curiosity Prompts Explored & Counting!</span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
