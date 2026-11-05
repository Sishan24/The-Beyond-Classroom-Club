import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import ExplorerEmblem from './ExplorerEmblem';

export const Navbar = ({ activeTab, setActiveTab, onOpenModal }) => {
  const navItems = ['Home', 'Discover', 'RN Studio', 'Our Club', 'Explorer Wall'];

  const handleTabClick = (item) => {
    setActiveTab(item);
    // Smooth scroll to corresponding section if available
    const sectionMap = {
      'Home': 'hero-section',
      'Discover': 'discover-section',
      'RN Studio': 'studio-section',
      'Our Club': 'club-section',
      'Explorer Wall': 'wall-section'
    };
    const targetId = sectionMap[item];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9ED]/90 backdrop-blur-md border-b-2 border-[#172B46]/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div onClick={() => handleTabClick('Home')}>
          <ExplorerEmblem />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-fredoka font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleTabClick(item)}
              className={`px-4 py-2 rounded-full transition-all text-sm md:text-base ${
                activeTab === item 
                  ? 'bg-[#172B46] text-[#FFCF56] shadow-sm' 
                  : 'text-[#172B46] hover:bg-[#FFCF56]/30'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Interactive CTA */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenModal}
            className="hidden sm:flex items-center gap-2 bg-[#FF796C] text-white font-fredoka font-semibold px-4 py-2 rounded-full hover:bg-[#FF796C]/90 transition-transform active:scale-95 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#FFCF56]" />
            <span>I WONDER...</span>
          </button>

          <button 
            onClick={() => handleTabClick('Our Club')}
            className="group flex items-center gap-2 bg-[#FFCF56] text-[#172B46] font-fredoka font-bold px-5 py-2.5 rounded-full border-2 border-[#172B46] shadow-[3px_3px_0px_#172B46] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <span>JOIN THE CLUB</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </div>
      </div>

      {/* Mobile Tab Nav */}
      <div className="flex md:hidden items-center justify-around mt-2 pt-2 border-t border-[#172B46]/10 font-fredoka text-xs">
        {['Home', 'Discover', 'RN Studio', 'Wall'].map((item) => {
          const resolvedTab = item === 'Wall' ? 'Explorer Wall' : item;
          const isSelected = activeTab === item || (item === 'Wall' && activeTab === 'Explorer Wall');
          return (
            <button
              key={item}
              onClick={() => handleTabClick(resolvedTab)}
              className={`px-2.5 py-1 rounded-full ${
                isSelected 
                  ? 'bg-[#172B46] text-[#FFCF56]' 
                  : 'text-[#172B46]'
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
