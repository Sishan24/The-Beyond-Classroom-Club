import React from 'react';
import { Microscope, Globe, BookOpen, Lightbulb, ChevronRight } from 'lucide-react';

export const DiscoverySection = ({ selectedCategory, setSelectedCategory }) => {
  const toggleCategory = (key) => {
    setSelectedCategory(selectedCategory === key ? null : key);
  };

  return (
    <section id="discover-section" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-fredoka text-sm uppercase tracking-widest text-[#FF796C] font-bold">Discover & Explore</span>
          <h2 className="font-fredoka text-3xl md:text-4xl text-[#172B46] font-bold">What's Beyond Your Classroom?</h2>
        </div>
        <p className="text-sm md:text-base text-[#172B46]/80 max-w-md">
          Tap any category card below to unlock mind-bending discovery facts and ongoing student research projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CARD 1: Science & Space */}
        <div 
          onClick={() => toggleCategory('science')}
          className="cursor-pointer group relative bg-white rounded-3xl p-6 border-3 border-[#172B46] shadow-[5px_5px_0px_#77CDB5] hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#77CDB5] flex items-center justify-center text-[#172B46] mb-4 border-2 border-[#172B46]">
            <Microscope className="w-7 h-7" />
          </div>
          <span className="inline-block text-xs font-bold font-fredoka tracking-wider text-[#172B46] bg-[#77CDB5]/30 px-2.5 py-1 rounded-md mb-2">
            DISCOVERY & SCIENCE
          </span>
          <h3 className="font-fredoka text-xl text-[#172B46] font-bold group-hover:text-[#FF796C] transition-colors">
            Science & Space
          </h3>
          <p className="text-xs text-[#172B46]/70 mt-2 font-medium">
            Explore the cosmos, quantum secrets, and extreme deep-sea mysteries.
          </p>
          
          <div className="mt-4 pt-3 border-t border-[#172B46]/10 flex items-center justify-between text-xs font-fredoka font-bold text-[#172B46]">
            <span>{selectedCategory === 'science' ? 'Hide Drawer ▲' : 'Tap to Reveal Fact ▼'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === 'science' ? 'rotate-90' : ''}`} />
          </div>

          {/* Revealable Fact Panel */}
          {selectedCategory === 'science' && (
            <div className="mt-3 p-3 bg-[#77CDB5]/20 rounded-xl text-xs text-[#172B46] font-semibold animate-fadeIn border border-[#77CDB5]">
              🚀 <strong>Did you know?</strong> One teaspoon of a neutron star would weigh about 6 billion tons on Earth!
            </div>
          )}
        </div>

        {/* CARD 2: World's Firsts */}
        <div 
          onClick={() => toggleCategory('firsts')}
          className="cursor-pointer group relative bg-white rounded-3xl p-6 border-3 border-[#172B46] shadow-[5px_5px_0px_#FF796C] hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#FF796C] flex items-center justify-center text-white mb-4 border-2 border-[#172B46]">
            <Globe className="w-7 h-7" />
          </div>
          <span className="inline-block text-xs font-bold font-fredoka tracking-wider text-[#172B46] bg-[#FF796C]/30 px-2.5 py-1 rounded-md mb-2">
            ORIGINS & INVENTIONS
          </span>
          <h3 className="font-fredoka text-xl text-[#172B46] font-bold group-hover:text-[#FF796C] transition-colors">
            World's Firsts
          </h3>
          <p className="text-xs text-[#172B46]/70 mt-2 font-medium">
            Uncover the breakthroughs that changed human civilization forever.
          </p>
          
          <div className="mt-4 pt-3 border-t border-[#172B46]/10 flex items-center justify-between text-xs font-fredoka font-bold text-[#172B46]">
            <span>{selectedCategory === 'firsts' ? 'Hide Drawer ▲' : 'Tap to Reveal Fact ▼'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === 'firsts' ? 'rotate-90' : ''}`} />
          </div>

          {/* Revealable Fact Panel */}
          {selectedCategory === 'firsts' && (
            <div className="mt-3 p-3 bg-[#FF796C]/20 rounded-xl text-xs text-[#172B46] font-semibold animate-fadeIn border border-[#FF796C]">
              📜 <strong>Did you know?</strong> The world's oldest known recipe is for beer, written in Sumerian cuneiform 3,900 years ago!
            </div>
          )}
        </div>

        {/* CARD 3: History Uncovered */}
        <div 
          onClick={() => toggleCategory('history')}
          className="cursor-pointer group relative bg-white rounded-3xl p-6 border-3 border-[#172B46] shadow-[5px_5px_0px_#A995E8] hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#A995E8] flex items-center justify-center text-[#172B46] mb-4 border-2 border-[#172B46]">
            <BookOpen className="w-7 h-7" />
          </div>
          <span className="inline-block text-xs font-bold font-fredoka tracking-wider text-[#172B46] bg-[#A995E8]/30 px-2.5 py-1 rounded-md mb-2">
            CHRONICLES & SECRETS
          </span>
          <h3 className="font-fredoka text-xl text-[#172B46] font-bold group-hover:text-[#FF796C] transition-colors">
            History Uncovered
          </h3>
          <p className="text-xs text-[#172B46]/70 mt-2 font-medium">
            Forgotten tales, lost cities, and historical puzzles solved by youth writers.
          </p>
          
          <div className="mt-4 pt-3 border-t border-[#172B46]/10 flex items-center justify-between text-xs font-fredoka font-bold text-[#172B46]">
            <span>{selectedCategory === 'history' ? 'Hide Drawer ▲' : 'Tap to Reveal Fact ▼'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === 'history' ? 'rotate-90' : ''}`} />
          </div>

          {/* Revealable Fact Panel */}
          {selectedCategory === 'history' && (
            <div className="mt-3 p-3 bg-[#A995E8]/20 rounded-xl text-xs text-[#172B46] font-semibold animate-fadeIn border border-[#A995E8]">
              👑 <strong>Did you know?</strong> Ancient Roman concrete could heal its own cracks when exposed to water!
            </div>
          )}
        </div>

        {/* CARD 4: Big Ideas & Ethics */}
        <div 
          onClick={() => toggleCategory('ideas')}
          className="cursor-pointer group relative bg-white rounded-3xl p-6 border-3 border-[#172B46] shadow-[5px_5px_0px_#FFCF56] hover:-translate-y-1.5 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#FFCF56] flex items-center justify-center text-[#172B46] mb-4 border-2 border-[#172B46]">
            <Lightbulb className="w-7 h-7" />
          </div>
          <span className="inline-block text-xs font-bold font-fredoka tracking-wider text-[#172B46] bg-[#FFCF56]/40 px-2.5 py-1 rounded-md mb-2">
            PHILOSOPHY & FUTURE
          </span>
          <h3 className="font-fredoka text-xl text-[#172B46] font-bold group-hover:text-[#FF796C] transition-colors">
            Big Ideas & Ethics
          </h3>
          <p className="text-xs text-[#172B46]/70 mt-2 font-medium">
            Tackle deep moral dilemmas, AI futures, and philosophical dilemmas.
          </p>
          
          <div className="mt-4 pt-3 border-t border-[#172B46]/10 flex items-center justify-between text-xs font-fredoka font-bold text-[#172B46]">
            <span>{selectedCategory === 'ideas' ? 'Hide Drawer ▲' : 'Tap to Reveal Fact ▼'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === 'ideas' ? 'rotate-90' : ''}`} />
          </div>

          {/* Revealable Fact Panel */}
          {selectedCategory === 'ideas' && (
            <div className="mt-3 p-3 bg-[#FFCF56]/20 rounded-xl text-xs text-[#172B46] font-semibold animate-fadeIn border border-[#FFCF56]">
              🧠 <strong>Did you know?</strong> The 'Ship of Theseus' paradox asks if an object that has had all of its components replaced remains fundamentally the same object.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DiscoverySection;
