import React from 'react';
import { Radio, Play, Pause, Volume2 } from 'lucide-react';
import { PODCAST_EPISODES } from '../constants/episodes';

export const RNStudioSection = ({ isPlaying, setIsPlaying, currentEpisode, setCurrentEpisode }) => {
  const waveformHeights = [40, 75, 30, 90, 60, 100, 45, 80, 55, 35, 85, 65, 40, 95, 70, 50, 30, 80, 60, 40];

  return (
    <section id="studio-section" className="bg-[#172B46] rounded-3xl p-6 md:p-10 border-4 border-[#172B46] text-[#FFF9ED] relative shadow-[8px_8px_0px_#A995E8]">
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
        
        {/* Left Info Column */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#A995E8] text-[#172B46] font-fredoka font-bold text-xs uppercase px-3 py-1 rounded-full">
            <Radio className="w-4 h-4" />
            <span>RN Studio • Live Student Broadcasting</span>
          </div>

          <h2 className="font-fredoka text-3xl md:text-5xl font-bold leading-tight">
            See You at the <br />
            <span className="text-[#FFCF56]">RN Studio!</span>
          </h2>

          <p className="text-sm md:text-base text-[#FFF9ED]/80 leading-relaxed font-normal">
            Where curious minds meet, record, and record podcast sessions. Our student-led radio booth broadcasts deep-dive discussions on topics submitted directly by school explorers.
          </p>

          {/* Animated Waveform Visualizer */}
          <div className="p-4 bg-[#FFF9ED]/10 rounded-2xl border border-[#FFF9ED]/20 flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-[#FFCF56] text-[#172B46] flex items-center justify-center font-bold shadow-md hover:scale-105 transition-transform"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            <div className="flex-1">
              <div className="flex justify-between text-xs font-fredoka text-[#FFCF56] mb-1">
                <span>{isPlaying ? 'Now Broadcasting Live...' : 'Click to Play Audio Highlight'}</span>
                <span>{PODCAST_EPISODES[currentEpisode].duration}</span>
              </div>
              
              {/* Waveform Bars */}
              <div className="h-8 flex items-center gap-1">
                {waveformHeights.map((h, idx) => (
                  <div 
                    key={idx}
                    className={`flex-1 rounded-full transition-all ${isPlaying ? 'bg-[#FF796C] wave-bar' : 'bg-[#FFF9ED]/40'}`}
                    style={{ 
                      height: isPlaying ? `${h}%` : '25%',
                      animationDelay: `${(idx % 5) * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-fredoka text-[#77CDB5]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FF796C] flex items-center justify-center text-[#172B46] font-bold border-2 border-[#172B46]">E</div>
              <div className="w-8 h-8 rounded-full bg-[#77CDB5] flex items-center justify-center text-[#172B46] font-bold border-2 border-[#172B46]">M</div>
              <div className="w-8 h-8 rounded-full bg-[#FFCF56] flex items-center justify-center text-[#172B46] font-bold border-2 border-[#172B46]">Z</div>
            </div>
            <span>Hosted by Cambridge Youth Producers</span>
          </div>
        </div>

        {/* Right Episodes Playlist */}
        <div className="lg:w-1/2 w-full space-y-3 bg-[#FFF9ED]/5 p-5 rounded-2xl border border-[#FFF9ED]/10">
          <h3 className="font-fredoka text-lg text-[#FFCF56] font-bold flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            <span>Featured Studio Sessions</span>
          </h3>

          <div className="space-y-3">
            {PODCAST_EPISODES.map((ep, idx) => (
              <div 
                key={idx}
                onClick={() => { setCurrentEpisode(idx); setIsPlaying(true); }}
                className={`cursor-pointer p-4 rounded-xl border transition-all ${
                  currentEpisode === idx 
                    ? 'bg-[#FFF9ED] text-[#172B46] border-[#FFCF56] shadow-md' 
                    : 'bg-[#172B46] text-[#FFF9ED] border-[#FFF9ED]/20 hover:bg-[#FFF9ED]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-fredoka px-2 py-0.5 rounded-md font-bold ${
                    currentEpisode === idx ? 'bg-[#172B46] text-[#FFCF56]' : 'bg-[#FFF9ED]/20 text-[#FFF9ED]'
                  }`}>
                    {ep.topic}
                  </span>
                  <span className="text-xs opacity-75">{ep.duration}</span>
                </div>

                <h4 className="font-fredoka font-bold text-base">{ep.title}</h4>
                <p className={`text-xs mt-1 line-clamp-2 ${currentEpisode === idx ? 'text-[#172B46]/80' : 'text-[#FFF9ED]/70'}`}>
                  {ep.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RNStudioSection;
