import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DiscoverySection from './components/DiscoverySection';
import RNStudioSection from './components/RNStudioSection';
import WidgetsSection from './components/WidgetsSection';
import CuriosityWallSection from './components/CuriosityWallSection';
import ClubValuesSection from './components/ClubValuesSection';
import QuestionModal from './components/QuestionModal';
import Footer from './components/Footer';

import { FUN_FACTS } from './constants/facts';
import { INITIAL_QUESTIONS } from './constants/questions';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Curiosity Counter State
  const [curiosityCount, setCuriosityCount] = useState(1482);

  // Discovery Cards Active View State (accordion drawer)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // "Did You Know?" Fact Index State
  const [currentFactIdx, setCurrentFactIdx] = useState(0);

  // Audio Podcast Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(0);

  // Poll Voting State
  const [pollVotes, setPollVotes] = useState({ optionA: 142, optionB: 289, optionC: 98 });
  const [userVotedOption, setUserVotedOption] = useState(null);

  // Student Submitted Questions List State
  const [submittedQuestions, setSubmittedQuestions] = useState(INITIAL_QUESTIONS);

  // Poll Vote Handler
  const handleVote = (option) => {
    if (userVotedOption) return;
    setUserVotedOption(option);
    setPollVotes(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  // Fact Shuffle Handler
  const handleNextFact = () => {
    setCurrentFactIdx((prev) => (prev + 1) % FUN_FACTS.length);
  };

  // Question Submission Handler
  const handleQuestionSubmit = (newQuestionData) => {
    const newQ = {
      id: Date.now(),
      text: newQuestionData.text,
      author: newQuestionData.author,
      category: newQuestionData.category,
      upvotes: 1,
      status: "Submitted to Studio"
    };

    setSubmittedQuestions([newQ, ...submittedQuestions]);
    setCuriosityCount(prev => prev + 1);
  };

  // Upvote Question Handler
  const handleUpvoteQuestion = (questionId) => {
    setSubmittedQuestions(prevQuestions =>
      prevQuestions.map(item =>
        item.id === questionId ? { ...item, upvotes: item.upvotes + 1 } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9ED] text-[#172B46] selection:bg-[#FFCF56]">
      {/* Top Header / Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 space-y-16">
        {/* Section 1: Hero Section */}
        <HeroSection 
          curiosityCount={curiosityCount}
          onOpenModal={() => setIsModalOpen(true)}
          onListenStudio={() => {
            setActiveTab('RN Studio');
            const studioEl = document.getElementById('studio-section');
            if (studioEl) {
              studioEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Section 2: Interactive Discovery Categories */}
        <DiscoverySection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Section 3: RN Studio Media & Podcast Spotlight */}
        <RNStudioSection 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentEpisode={currentEpisode}
          setCurrentEpisode={setCurrentEpisode}
        />

        {/* Section 4: Two-Column Interactive Widgets */}
        <WidgetsSection 
          pollVotes={pollVotes}
          userVotedOption={userVotedOption}
          onVote={handleVote}
          currentFactIdx={currentFactIdx}
          onNextFact={handleNextFact}
        />

        {/* Section 5: Curiosity Wall & Submissions */}
        <CuriosityWallSection 
          questions={submittedQuestions}
          onUpvote={handleUpvoteQuestion}
          onOpenModal={() => setIsModalOpen(true)}
        />

        {/* Section 6: Club Values & Membership */}
        <ClubValuesSection 
          onOpenModal={() => setIsModalOpen(true)}
        />
      </main>

      {/* "I WONDER..." Submission Modal Dialog */}
      <QuestionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitQuestion={handleQuestionSubmit}
      />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
