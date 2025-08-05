"use client";
import React from 'react';
import { TestData } from '../data/data';

interface QuestionNavigationPopupProps {
  showQuestionPopup: boolean;
  setShowQuestionPopup: (show: boolean) => void;
  testData: TestData;
  currentQuestionIndex: number;
  answers: { [key: number]: string };
  reviewFlags: { [key: number]: boolean };
  handleQuestionSelect: (index: number) => void;
  setShowReviewPage: (show: boolean) => void;
}

export default function QuestionNavigationPopup({
  showQuestionPopup,
  setShowQuestionPopup,
  testData,
  currentQuestionIndex,
  answers,
  reviewFlags,
  handleQuestionSelect,
  setShowReviewPage
}: QuestionNavigationPopupProps) {
  if (!showQuestionPopup) return null;

  return (
    <div className="fixed left-0 right-0 bottom-20 flex justify-center items-end z-50 pointer-events-none">
      <div className="relative">
        {/* Main popup content div */}
        <div
          className="bg-white rounded-lg px-6 py-5 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto border border-blue-100 animate-fadeIn pointer-events-auto"
          style={{
            position: 'relative',
            boxShadow: '0px 0px 12px 1px rgba(0,0,0,0.54)',
            WebkitBoxShadow: '0px 0px 12px 1px rgba(0,0,0,0.54)',
            MozBoxShadow: '0px 0px 12px 1px rgba(0,0,0,0.54)',
          }}
        >
          <div className="relative mb-4">
            {/* Close button in top-right */}
            <button
              onClick={() => setShowQuestionPopup(false)}
              className="absolute top-0 right-0 text-black cursor-pointer hover:bg-gray-50"
              style={{ lineHeight: '1' }}
              aria-label="Close"
            >
              {/* SVG Cross Icon */}
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="6" x2="14" y2="14" />
                <line x1="14" y1="6" x2="6" y2="14" />
              </svg>
            </button>
            {/* Centered combined heading */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-gray-900 tracking-tight text-center font-['Lexend']" style={{ letterSpacing: '-0.01em' }}>
                {testData.section}, {testData.module}: {testData.title}
              </span>
              <span className="text-lg font-semibold text-gray-900 tracking-tight text-center font-['Lexend']" style={{ letterSpacing: '-0.01em', marginTop: '-2px' }}>
                Questions
              </span>
            </div>
          </div>
        {/* Legend */}
        <div className="flex justify-center space-x-6 mb-8 text-sm border-b border-gray-400 pb-3 border-t-[1px] border-t-gray-400 pt-3 font-['Lexend']">
          <div className="flex items-center space-x-2">
             {/* NEW: Updated Legend for Current Question */}
            <div className="w-5 h-5 flex items-center justify-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </div>
            <span style={{ color: '#111' }}>Current</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-[2px] bg-[#324dc7] border-2 border-[#324dc7]"></div>
            <span style={{ color: '#111' }}>Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white border border-dashed border-black"></div>
            <span style={{ color: '#111' }}>Unanswered</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-icon lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            <span style={{ color: '#111' }}>For Review</span>
          </div>
        </div>
          {/* Question Grid */}
        <div className="grid grid-cols-10 gap-x-1 gap-y-[25px] mb-6">
          {Array.from({ length: testData.totalQuestions }, (_, index) => {
            const hasAnswer = answers[index];
            const isReviewed = reviewFlags[index];
            const isCurrent = index === currentQuestionIndex;
            const showBookmark = isReviewed;
            const showBlue = hasAnswer && isReviewed;

            return (
              <div key={index + 1} className="relative flex justify-center">
                {/* NEW: Location Pin SVG for the current question */}
                {isCurrent && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 pointer-events-none z-20">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                       </svg>
                    </div>
                )}
                <button
                  onClick={() => handleQuestionSelect(index)}
                  className={`
                    w-[30px] h-[30px] border-dashed border-black text-lg font-semibold transition-all duration-150 
                    flex items-center justify-center cursor-pointer relative rounded-[2px]
                    ${
                      showBlue
                      ? // Answered + Marked for review
                        'bg-[#324dc7] text-white'
                      : showBookmark
                      ? // Marked for review only
                        'bg-white text-blue-800 border border-dashed border-black'
                      : hasAnswer
                      ? // Answered only
                        'bg-[#324dc7] text-white'
                      : // Default unanswered (also used for current question box)
                        'bg-white border border-dashed border-black text-blue-800 hover:border-[#324dc7]'
                    }
                  `}
                >
                  {showBookmark && (
                    <span className="absolute top-0 right-0 transform p-[0.5px] pb-[1.5px] bg-white translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="#ef4444"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </span>
                  )}
                  {index + 1}
                </button>
              </div>
            );
          })}
        </div>

        {/* Go to Review Page Button */}
        <div className="text-center mb-2">
          <button 
            onClick={() => setShowReviewPage(true)}
            className="cursor-pointer font-['Lexend'] text-[#324dc7] border-blue-600 border-1 px-4 py-1 rounded-2xl text-sm font-[500] hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
          >
            Go to Review Page
          </button>
        </div>
      </div>
        {/* Speech bubble triangle */}
        <div
          className="absolute left-1/2 w-0 h-0"
          style={{
          transform: 'translateX(-50%)',
          bottom: '-22px',
          borderLeft: '28px solid transparent',
          borderRight: '28px solid transparent',
          borderTop: '25px solid white',
          filter: 'drop-shadow(0px 12px 5px rgba(0,0,0,0.35))',
          }}
        ></div>
      </div>
    </div>
  );
}