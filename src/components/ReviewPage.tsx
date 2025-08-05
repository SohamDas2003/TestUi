"use client";
import React, { useState } from 'react';
import { TestData } from '../data/data';
import TestHeader from './TestHeader';
import DirectionsPanel from './DirectionsPanel';
import DashedBorder from './DashedBorder';
import TestFooter from './TestFooter';

interface ReviewPageProps {
  testData: TestData;
  answers: { [key: number]: string };
  reviewFlags: { [key: number]: boolean };
  onQuestionSelect: (questionIndex: number) => void;
  onClose: () => void;
  onNextModule: () => void; // New prop for module progression
  remainingTime: number;
  formatTime: (seconds: number) => string;
}

export default function ReviewPage({
  testData,
  answers,
  reviewFlags,
  onQuestionSelect,
  onClose,
  onNextModule, // New prop
  remainingTime,
  formatTime
}: ReviewPageProps) {
  // State needed for header/footer components
  const [showDirections, setShowDirections] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [refPopupPos, setRefPopupPos] = useState({ x: 200, y: 100 });
  const [draggingRef, setDraggingRef] = useState(false);
  const dragOffset = React.useRef({ x: 0, y: 0 });

  const getQuestionStatus = (questionIndex: number) => {
    const hasAnswer = answers[questionIndex];
    const isReviewed = reviewFlags[questionIndex];

    if (isReviewed) return 'review';
    if (hasAnswer) return 'answered';
    return 'unanswered';
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  const getReviewCount = () => {
    return Object.values(reviewFlags).filter(Boolean).length;
  };

  const getUnansweredCount = () => {
    return testData.totalQuestions - getAnsweredCount();
  };

  const handleRefMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDraggingRef(true);
    dragOffset.current = {
      x: e.clientX - refPopupPos.x,
      y: e.clientY - refPopupPos.y,
    };
  };
  
  return (
    <div className="h-screen bg-[#ffffff] flex flex-col font-['SourceSerif4'] antialiased relative">
      {/* Wrap header and directions in relative container */}
      <div className="relative">
        <TestHeader
          testData={testData}
          showDirections={showDirections}
          setShowDirections={setShowDirections}
          showTimer={showTimer}
          setShowTimer={setShowTimer}
          remainingTime={remainingTime}
          formatTime={formatTime}
          showCalculator={showCalculator}
          setShowCalculator={setShowCalculator}
          showReference={showReference}
          setShowReference={setShowReference}
          showMoreDropdown={showMoreDropdown}
          setShowMoreDropdown={setShowMoreDropdown}
          refPopupPos={refPopupPos}
          handleRefMouseDown={handleRefMouseDown}
        />

        <DirectionsPanel
          showDirections={showDirections}
          setShowDirections={setShowDirections}
        />
      </div>

      <DashedBorder className="relative z-10" />
      <div className="relative">
        <div
          className="bg-[#1B2264] text-white text-center text-[13px] px-8 pt-[3px] pb-[7px] max-w-[95vw] mx-auto 
                       rounded-bl-2xl font-['Lexend'] rounded-br-2xl relative z-0 -mb-[1px] leading-tight tracking-tighter"
        >
          THIS IS A PRACTICE TEST
        </div>
      </div>

      {/* Review Page Content - Keep this the same */}
      <div className="flex-1 bg-white p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl font-normal text-gray-900 text-center mb-6">
            Check Your Work
          </h1>

          {/* Instructions */}
          <div className="text-center mb-8">
            <p className="text-gray-800 tracking-tight">
              On test day, you won&apos;t be able to move on to the next module until time expires.
            </p>
            <p className="text-gray-800 tracking-tight">
              For these practice questions, you can click{' '}
              <strong className="font-bold tracking-tight">Next</strong> when you&apos;re ready to move on.
            </p>
          </div>

          {/* Question Grid Container */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-8" style={{ boxShadow: '0px 12px 30px -4px rgba(67, 68, 76, 0.25)' }}>
            {/* Title */}
            <div className="mb-2">
              <h2 className="text-lg font-medium text-gray-800 text-center">
                {testData.section}, {testData.module}: {testData.title} Questions
              </h2>
            </div>

            {/* Legend: Answered / Unanswered / For Review (centered) */}
            <div className="flex justify-center items-center space-x-6 mb-4 text-sm font-['Lexend']">
              {/* Answered */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-[2px] bg-[#324dc7] border-2 border-[#324dc7]"></div>
                <span style={{ color: '#111' }}>Answered</span>
              </div>
              {/* Unanswered */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white border border-dashed border-black"></div>
                <span style={{ color: '#111' }}>Unanswered</span>
              </div>
              {/* For Review */}
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
                <span style={{ color: '#111' }}>For Review</span>
              </div>
            </div>

            {/* Thin horizontal line below review and title */}
            <hr className="border-t border-gray-400 my-2 mb-8" />

            {/* Question Grid */}
            <div className="grid grid-cols-12 gap-x-1 gap-y-[25px] mb-2">
              {Array.from({ length: testData.totalQuestions }, (_, index) => {
                const hasAnswer = answers[index];
                const isReviewed = reviewFlags[index];
                const showBookmark = isReviewed;
                const showBlue = hasAnswer && isReviewed;

                return (
                  <div key={index + 1} className="flex justify-center">
                    <button
                      onClick={() => onQuestionSelect(index)}
                      className={`
                        w-[40px] h-[40px] rounded-[2px] border-dashed border-black text-[22px] font-['Lexend'] font-normal
                        flex items-center justify-center cursor-pointer relative transition-all duration-150
                        ${
                          showBlue
                            ? 'bg-[#324dc7] text-white'
                            : showBookmark
                            ? 'bg-white text-blue-800 border border-dashed border-black'
                            : hasAnswer
                            ? 'bg-[#324dc7] text-white'
                            : 'bg-white text-blue-800 border border-dashed border-black hover:border-[#324dc7]'
                        }
                      `}
                    >
                      {showBookmark && (
                        <span className="absolute top-0 right-0 transform p-[0.5px] pb-[1.5px] bg-white translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                          </svg>
                        </span>
                      )}
                      {index + 1}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="text-center text-gray-600 text-sm space-y-1">
            <p>Answered: {getAnsweredCount()} | Unanswered: {getUnansweredCount()} | For Review: {getReviewCount()}</p>
          </div>
        </div>
      </div>

      {/* Footer - Updated to handle module progression */}
      <TestFooter
        testData={testData}
        currentQuestionIndex={testData.questions.length - 1} // Set to last question
        showQuestionPopup={false}
        setShowQuestionPopup={() => {}}
        handlePrevious={() => onQuestionSelect(testData.questions.length - 1)} // Go back to last question
        handleNext={onNextModule} // Use onNextModule for Next button
        hideQuestionCounter={true}
      />
    </div>
  );
}
