import React from 'react';
import { MessageSquare, Plus, ThumbsUp } from 'lucide-react';

export const CuriosityWallSection = ({ questions, onUpvote, onOpenModal }) => {
  return (
    <section id="wall-section" className="bg-white rounded-3xl p-6 md:p-10 border-4 border-[#172B46] shadow-[8px_8px_0px_#172B46] space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#FFCF56] text-[#172B46] font-fredoka font-bold text-xs uppercase px-3 py-1 rounded-full border border-[#172B46] mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Student Explorer Wall</span>
          </div>
          <h2 className="font-fredoka text-3xl md:text-4xl text-[#172B46] font-bold">
            Approved Student Questions
          </h2>
        </div>

        <button 
          onClick={onOpenModal}
          className="flex items-center gap-2 bg-[#FF796C] text-white font-fredoka font-bold px-6 py-3 rounded-full border-2 border-[#172B46] shadow-[3px_3px_0px_#172B46] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all self-start"
        >
          <Plus className="w-5 h-5" />
          <span>Submit Your Question</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {questions.map((q) => (
          <div 
            key={q.id}
            className="bg-[#FFF9ED] rounded-2xl p-5 border-2 border-[#172B46] flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-fredoka uppercase tracking-wider bg-[#172B46] text-[#FFCF56] px-2 py-0.5 rounded font-bold">
                  {q.category}
                </span>
                <span className="text-[10px] font-fredoka font-semibold text-[#FF796C]">
                  ● {q.status}
                </span>
              </div>
              <h4 className="font-fredoka text-lg text-[#172B46] font-bold leading-snug">
                "{q.text}"
              </h4>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#172B46]/10 text-xs font-fredoka">
              <span className="text-[#172B46]/70 font-semibold">{q.author}</span>
              <button 
                onClick={() => onUpvote(q.id)}
                className="flex items-center gap-1 bg-white border border-[#172B46] px-2.5 py-1 rounded-full text-[#172B46] hover:bg-[#FFCF56]/40 transition-colors"
                aria-label={`Upvote question: ${q.text}`}
              >
                <ThumbsUp className="w-3 h-3 text-[#FF796C]" />
                <span>{q.upvotes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuriosityWallSection;
