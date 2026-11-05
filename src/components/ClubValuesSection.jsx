import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ClubValuesSection = ({ onOpenModal }) => {
  const values = [
    { title: "Curious, Not Conventional", desc: "We skip boring rote memorization and head straight for wild hypotheses." },
    { title: "Playful, Not Childish", desc: "Sophisticated debates delivered with joyful visual flavor and flair." },
    { title: "Academic, Not Intimidating", desc: "University-grade questions broken down into exciting discovery magazines." },
    { title: "Student-Led, Always", desc: "Written, hosted, designed, and curated entirely by young thinkers." }
  ];

  return (
    <section id="club-section" className="bg-[#77CDB5]/30 rounded-3xl p-8 md:p-12 border-3 border-[#172B46] relative overflow-hidden">
      <div className="max-w-3xl space-y-6">
        <span className="font-fredoka text-xs uppercase tracking-widest text-[#172B46] font-bold">
          Why Join Us?
        </span>
        <h2 className="font-fredoka text-3xl md:text-5xl text-[#172B46] font-bold leading-tight">
          A Cambridge Community Built for the Curious.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-[#172B46] space-y-1">
              <div className="flex items-center gap-2 text-[#FF796C] font-fredoka font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{val.title}</span>
              </div>
              <p className="text-xs text-[#172B46]/80">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button 
            onClick={onOpenModal}
            className="bg-[#172B46] text-[#FFCF56] font-fredoka font-bold text-base px-6 py-3 rounded-full border-2 border-[#172B46] shadow-[4px_4px_0px_#FFCF56] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            Become an Explorer Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClubValuesSection;
