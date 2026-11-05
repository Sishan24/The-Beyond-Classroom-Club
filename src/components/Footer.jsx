import React from 'react';
import { Award } from 'lucide-react';
import ExplorerEmblem from './ExplorerEmblem';

export const Footer = () => {
  return (
    <footer className="bg-[#172B46] text-[#FFF9ED] border-t-4 border-[#172B46] mt-20 pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#FFF9ED]/15 pb-8">
          <ExplorerEmblem showText={true} />

          <div className="flex flex-wrap items-center gap-6 font-fredoka text-sm">
            <span className="text-[#FFCF56]">Think Beyond.</span>
            <span className="text-[#77CDB5]">Explore Everything.</span>
            <span className="text-[#FF796C]">Ask the Unexpected.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-normal">
          <div className="space-y-3">
            <h4 className="font-fredoka text-sm text-[#FFCF56] font-bold uppercase tracking-wider">About The Club</h4>
            <p className="text-[#FFF9ED]/70 leading-relaxed">
              The Beyond Classroom Club is a student-led Cambridge learning collective bringing curiosity to youth media, discovery magazines, and podcast broadcasting.
            </p>
          </div>

          <div className="space-y-2 font-fredoka">
            <h4 className="font-fredoka text-sm text-[#77CDB5] font-bold uppercase tracking-wider">Explore Modules</h4>
            <ul className="space-y-1.5 text-[#FFF9ED]/80">
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Science & Deep Space</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">World's First Inventions</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Unsolved Historical Puzzles</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Ethics & Artificial Intelligence</li>
            </ul>
          </div>

          <div className="space-y-2 font-fredoka">
            <h4 className="font-fredoka text-sm text-[#A995E8] font-bold uppercase tracking-wider">Media & Studio</h4>
            <ul className="space-y-1.5 text-[#FFF9ED]/80">
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">RN Studio Broadcasts</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Explorer Wall Archive</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Question of the Week</li>
              <li className="hover:text-[#FFCF56] cursor-pointer transition-colors">Student Editorial Guild</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-fredoka text-sm text-[#FF796C] font-bold uppercase tracking-wider">Explorer Emblem Badge</h4>
            <div className="p-3 bg-[#FFF9ED]/10 rounded-2xl border border-[#FFF9ED]/20 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#FFCF56] shrink-0" />
              <p className="text-[11px] text-[#FFF9ED]/90 leading-tight">
                Official badge awarded to active student contributors and question submitters.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-[#FFF9ED]/10 text-[11px] text-[#FFF9ED]/50 font-fredoka">
          © 2026 The Beyond Classroom Club. A Student-Led Initiative. All rights reserved. Designed with Oxford Navy, Sunshine Yellow, Coral Pop, Mint Green & Dreamy Lilac.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
