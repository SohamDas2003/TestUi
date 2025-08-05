"use client";
import React from 'react';
import { TestData } from '../data/data';

interface TestFooterProps {
  testData: TestData;
  currentQuestionIndex: number;
  showQuestionPopup: boolean;
  setShowQuestionPopup: (show: boolean | ((prev: boolean) => boolean)) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  hideQuestionCounter?: boolean;
}

export default function TestFooter({
  testData,
  currentQuestionIndex,
  showQuestionPopup,
  setShowQuestionPopup,
  handlePrevious,
  handleNext,
  hideQuestionCounter = false
}: TestFooterProps) {
  const isLastQuestion = currentQuestionIndex >= testData.questions.length - 1;

  return (
    <div
      className="bg-[#e6edf8] text-gray-900 px-6 py-3 flex items-center shadow-sm border-t-2 border-t-transparent border-dashed"
      style={{
        borderImage: 'repeating-linear-gradient(to right, #000 0, #000 30px, transparent 30px, transparent 32px) 1',
        borderImageSlice: 1,
      }}
    >
      <div className="text-sm flex-1 font-['Lexend']">
        <span
          className="font-semi-bold text-lg text-black pl-8"
        >
          Golden Arrows
        </span>
      </div>
      
      {/* Centered Question Counter */}
      {!hideQuestionCounter && (
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setShowQuestionPopup((prev) => !prev)}
            className="relative z-60 bg-black text-white px-4 py-1.5 rounded-lg text-sm shadow-md hover:shadow-lg hover:bg-gray-700 cursor-pointer border border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white font-semibold flex items-center gap-2 font-['Lexend']"
            aria-expanded={showQuestionPopup}
            aria-controls="question-popup"
          >
            Question {currentQuestionIndex + 1} of {testData.totalQuestions}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showQuestionPopup ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7-7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Right-aligned Navigation Buttons */}
      <div className="flex-1 flex justify-end font-['Lexend']">
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-3xl font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              currentQuestionIndex === 0
                ? 'bg-gray-300 text-gray-400 cursor-not-allowed border border-gray-200'
                : 'bg-[#324dc7] text-white hover:shadow-md cursor-pointer'
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-[#324dc7] text-white hover:shadow-md cursor-pointer px-6 py-2 rounded-3xl font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}