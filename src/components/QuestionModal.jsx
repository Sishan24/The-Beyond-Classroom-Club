import React, { useState } from 'react';
import { Sparkles, X, CheckCircle } from 'lucide-react';

export const QuestionModal = ({ isOpen, onClose, onSubmitQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('Science & Space');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    onSubmitQuestion({
      text: questionText.trim(),
      author: authorName.trim() ? `${authorName.trim()}, Student Explorer` : "Anonymous Explorer",
      category: category
    });

    setHasSubmitted(true);
    setTimeout(() => {
      setHasSubmitted(false);
      setQuestionText('');
      setAuthorName('');
      setCategory('Science & Space');
      onClose();
    }, 1800);
  };

  const handleClose = () => {
    if (!hasSubmitted) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172B46]/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFF9ED] w-full max-w-lg rounded-3xl p-6 md:p-8 border-4 border-[#172B46] shadow-[10px_10px_0px_#FF796C] relative space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#172B46]/10 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF796C]" />
            <h3 className="font-fredoka text-2xl text-[#172B46] font-bold">Ask "I WONDER..."</h3>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-[#172B46]/10 text-[#172B46] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {hasSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#77CDB5] text-[#172B46] rounded-full flex items-center justify-center mx-auto border-2 border-[#172B46] animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-fredoka text-2xl font-bold text-[#172B46]">Question Received!</h4>
            <p className="text-sm text-[#172B46]/80 font-medium">
              Your prompt has been added to the Explorer Wall and dispatched to the RN Studio producers!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-fredoka text-xs uppercase tracking-wider text-[#172B46] font-bold mb-1">
                What have you always wondered about?
              </label>
              <textarea
                required
                rows="3"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="e.g. Could humans ever communicate with whales using ocean acoustics?"
                className="w-full rounded-2xl border-2 border-[#172B46] p-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF796C] bg-white text-[#172B46]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-fredoka text-xs uppercase tracking-wider text-[#172B46] font-bold mb-1">
                  Your Name / Handle
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Alex M., Age 14"
                  className="w-full rounded-xl border-2 border-[#172B46] p-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF796C] bg-white text-[#172B46]"
                />
              </div>

              <div>
                <label className="block font-fredoka text-xs uppercase tracking-wider text-[#172B46] font-bold mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border-2 border-[#172B46] p-2.5 text-sm font-fredoka font-semibold bg-white text-[#172B46] focus:outline-none focus:ring-2 focus:ring-[#FF796C]"
                >
                  <option>Science & Space</option>
                  <option>World's Firsts</option>
                  <option>History Uncovered</option>
                  <option>Big Ideas & Ethics</option>
                </select>
              </div>
            </div>

            {/* Question Live Preview Box */}
            {questionText.trim() && (
              <div className="p-3 bg-[#FFCF56]/20 rounded-xl border border-[#FFCF56] space-y-1">
                <span className="text-[10px] font-fredoka uppercase text-[#FF796C] font-bold">Live Question Card Preview</span>
                <p className="font-fredoka text-xs font-bold text-[#172B46]">"{questionText}"</p>
                <span className="text-[10px] text-[#172B46]/70 block">— {authorName.trim() || 'Anonymous Student'}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#FFCF56] text-[#172B46] font-fredoka font-bold text-base py-3 rounded-full border-2 border-[#172B46] shadow-[4px_4px_0px_#172B46] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                Submit Question to RN Studio ↗
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default QuestionModal;
