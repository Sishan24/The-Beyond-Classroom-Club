import React from 'react';
import { HelpCircle, Compass, Shuffle } from 'lucide-react';
import { FUN_FACTS } from '../constants/facts';

export const WidgetsSection = ({ 
  pollVotes, 
  userVotedOption, 
  onVote, 
  currentFactIdx, 
  onNextFact 
}) => {
  const currentFact = FUN_FACTS[currentFactIdx];
  const totalVotes = pollVotes.optionA + pollVotes.optionB + pollVotes.optionC;

  const pollOptions = [
    { key: 'optionA', label: 'A panel of children & young artists', color: '#77CDB5' },
    { key: 'optionB', label: 'A team of scientists & ethicists', color: '#A995E8' },
    { key: 'optionC', label: 'A randomly chosen global citizen', color: '#FF796C' }
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* WIDGET A: Question of the Week Poll */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border-3 border-[#172B46] shadow-[6px_6px_0px_#FFCF56] flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-fredoka text-xs uppercase tracking-widest text-[#FF796C] font-bold flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Question of the Week</span>
            </span>
            <span className="bg-[#FFCF56]/40 text-[#172B46] text-xs font-fredoka px-2.5 py-0.5 rounded-full font-bold">
              Live Student Vote
            </span>
          </div>

          <h3 className="font-fredoka text-xl sm:text-2xl text-[#172B46] font-bold leading-snug">
            "If we discover intelligent alien life, who should represent humanity to make first contact?"
          </h3>
        </div>

        {/* Poll Choices */}
        <div className="space-y-3">
          {pollOptions.map((opt) => {
            const percentage = totalVotes > 0 ? Math.round((pollVotes[opt.key] / totalVotes) * 100) : 0;

            return (
              <div key={opt.key} className="space-y-1">
                <button
                  onClick={() => onVote(opt.key)}
                  disabled={userVotedOption !== null}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 border-[#172B46] font-fredoka font-semibold text-sm transition-all flex items-center justify-between relative overflow-hidden ${
                    userVotedOption === opt.key ? 'ring-2 ring-[#172B46]' : 'hover:bg-[#FFF9ED]'
                  }`}
                >
                  {/* Vote Progress Bar */}
                  {userVotedOption && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 opacity-30 transition-all duration-700"
                      style={{ width: `${percentage}%`, backgroundColor: opt.color }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                  {userVotedOption && (
                    <span className="relative z-10 text-xs font-bold bg-[#172B46] text-[#FFF9ED] px-2 py-0.5 rounded">
                      {percentage}%
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-xs font-fredoka text-[#172B46]/70 flex items-center justify-between pt-2 border-t border-[#172B46]/10">
          <span>Total Explorer Votes: {totalVotes.toLocaleString()}</span>
          {userVotedOption && <span className="text-[#FF796C] font-bold">✓ Vote Cast!</span>}
        </div>
      </div>

      {/* WIDGET B: "Did You Know?" Random Discovery Generator */}
      <div className="bg-[#A995E8]/20 rounded-3xl p-6 md:p-8 border-3 border-[#172B46] shadow-[6px_6px_0px_#77CDB5] flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-fredoka text-xs uppercase tracking-widest text-[#172B46] font-bold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#172B46]" />
              <span>Did You Know?</span>
            </span>
            <span 
              className="text-xs font-fredoka font-bold px-2.5 py-0.5 rounded-full border border-[#172B46]"
              style={{ backgroundColor: currentFact.color }}
            >
              {currentFact.tag}
            </span>
          </div>

          <div className="min-h-[120px] flex items-center">
            <p className="font-playfair text-xl sm:text-2xl text-[#172B46] italic leading-relaxed">
              "{currentFact.text}"
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#172B46]/10">
          <span className="text-xs font-fredoka font-semibold text-[#172B46]">
            Discovery Spark #{currentFactIdx + 1} of {FUN_FACTS.length}
          </span>

          <button
            onClick={onNextFact}
            className="flex items-center gap-2 bg-[#172B46] text-[#FFCF56] font-fredoka font-bold text-xs px-4 py-2 rounded-full border border-[#172B46] hover:bg-[#172B46]/90 transition-all active:scale-95 shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Spin Random Fact</span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default WidgetsSection;
