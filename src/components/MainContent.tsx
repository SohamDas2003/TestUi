"use client";
import React from 'react';
import Image from 'next/image';
import icon from "../../public/icon.svg";
import { TestQuestion } from '../data/data';

interface MainContentProps {
  currentQuestion: TestQuestion;
  selectedAnswer: string;
  setSelectedAnswer: (answer: string) => void;
  currentQuestionIndex: number;
  markedForReview: boolean;
  handleMarkForReview: () => void;
  leftPanelWidth: number;
  isDragging: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  leftPanelRef: React.RefObject<HTMLDivElement | null>;
  rightPanelRef: React.RefObject<HTMLDivElement | null>;
  hasPassage: boolean; // New prop to determine layout
}

export default function MainContent({
  currentQuestion,
  selectedAnswer,
  setSelectedAnswer,
  currentQuestionIndex,
  markedForReview,
  handleMarkForReview,
  leftPanelWidth,
  isDragging,
  handleMouseDown,
  containerRef,
  leftPanelRef,
  rightPanelRef,
  hasPassage
}: MainContentProps) {
  // Determine if current question has passage content
  const showLeftPanel = hasPassage && currentQuestion.passage;

  if (!showLeftPanel) {
    // Centered layout for math questions or questions without passages
    return (
      <div className="flex-1 flex justify-center items-start bg-white" style={{fontSmooth: 'always', WebkitFontSmoothing: 'antialiased'}}>
        <div className="w-full max-w-4xl p-8 overflow-y-auto">
          {/* Question content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-800 text-xl whitespace-pre-line mb-6">
                {currentQuestion.question}
              </p>
            </div>
          </div>

          {/* Answer section */}
          <div className="max-w-[700px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col w-full">
                <div className="flex items-center bg-gray-100">
                  <span className="bg-black text-white rounded-none w-7 h-7 flex items-center justify-center text-base font-bold shadow-sm border border-black mr-2" style={{fontFamily:'inherit'}}>
                    {currentQuestionIndex + 1}
                  </span>
                  <button
                    onClick={handleMarkForReview}
                    className={
                      `flex items-center group focus:outline-none px-0 bg-none border-none cursor-pointer transition-colors duration-150 rounded-md`
                    }
                    title="Mark for Review"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={markedForReview ? '#ef4444' : 'none'}
                      stroke={markedForReview ? '#ef4444' : '#000000'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={
                        `lucide lucide-bookmark-icon lucide-bookmark transition-colors duration-150
                         ${markedForReview ? '' : 'group-hover:stroke-black'}
                         `
                      }
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                    </svg>
                    <span
                      className={`ml-2 text-sm font-['Lexend'] font-normal transition-colors duration-150`}
                    >
                      Mark for Review
                    </span>
                  </button>
                </div>
                <hr
                  className="w-full border-t-2 border-t-transparent border-dashed mt-[2px]"
                  style={{
                    borderImage: 'repeating-linear-gradient(to right, #000 0, #000 30px, transparent 30px, transparent 32px) 1',
                    borderImageSlice: 1,
                  }}
                />
              </div>
            </div>

            <div className="space-y-3 text-lg font-['Lexend']">
              {currentQuestion.type === 'mcq' && 'options' in currentQuestion ? (
                currentQuestion.options.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAnswer === option.id
                        ? 'border-blue-700 shadow-[0_0_0_2px_theme(colors.blue.700)]'
                        : 'border-gray-700 bg-white hover:bg-gray-100 hover:cursor-pointer'
                    }`}
                    onClick={() => setSelectedAnswer(option.id)}
                    style={{fontWeight: 500}}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center font-bold text-sm select-none transition-all duration-200 shadow-sm ${
                      selectedAnswer === option.id
                        ? 'border-gray-700 bg-[#324dc7] text-white'
                        : 'border-gray-700 text-gray-700 bg-white hover:border-blue-400'
                    }`}>
                      {option.id}
                    </div>
                    <span className="font-normal text-[#505050]">{option.text}</span>
                  </label>
                ))
              ) : currentQuestion.type === 'input' ? (
                <div className="flex flex-col items-start space-y-2">
                  <textarea
                    className="border-2 border-blue-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black transition-all duration-150 resize-vertical w-full"
                    placeholder="Enter your answer"
                    value={selectedAnswer}
                    onChange={e => setSelectedAnswer(e.target.value)}
                    rows={Math.min(Math.max(selectedAnswer.split('\n').length, 1), 20)}
                    style={{ minHeight: '32px', maxHeight: '800px', height: 'auto' }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original two-panel layout for reading sections with passages
  return (
    <div className="flex-1 flex relative" style={{fontSmooth: 'always', WebkitFontSmoothing: 'antialiased'}} ref={containerRef}>
      {/* Left panel - Passage content */}
      <div 
        ref={leftPanelRef}
        className={`bg-white text-xl p-8 overflow-y-auto rounded-l-2xl shadow-sm ${
          isDragging ? '' : 'transition-all duration-200'
        }`}
        style={{ width: `${leftPanelWidth}%` }}
      >
        <div className="prose max-w-none">
          <p className="text-gray-800 whitespace-pre-line">
            {currentQuestion.passage}
          </p>
        </div>
      </div>

      {/* Resizable divider */}
      <div 
        className={`w-[4px] bg-gray-400 cursor-col-resize hover:bg-gray-600 transition-all duration-200 relative group ${
          isDragging ? '' : ''
        }`}
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute w-4 border-2 border-white left-1/2 transform -translate-x-1/2 bg-black rounded-[4.5px] flex items-center z-10 cursor-grab active:cursor-grabbing"
          style={{ top: '25%' }}
        >
          <Image 
            src={icon.src} 
            alt="resize handle" 
            width={40}
            height={40}
            className="h-7 w-28"
          />
        </div>
      </div>

      {/* Right panel - Question and Answer choices */}
      <div 
        ref={rightPanelRef}
        className={`bg-[#ffffff] p-8 overflow-y-auto rounded-r-2xl shadow-sm ${
          isDragging ? '' : 'transition-all duration-200'
        }`}
        style={{ width: `${100 - leftPanelWidth}%` }}
      >
        <div className="mb-6 ml-10 max-w-[700px]">
          {/* Question text */}
          <div className="mb-6">
            <p className="text-gray-800 text-xl whitespace-pre-line">
              {currentQuestion.question}
            </p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col w-full">
              <div className="flex items-center bg-gray-100">
                <span className="bg-black text-white rounded-none w-7 h-7 flex items-center justify-center text-base font-bold shadow-sm border border-black mr-2" style={{fontFamily:'inherit'}}>
                  {currentQuestionIndex + 1}
                </span>
                <button
                  onClick={handleMarkForReview}
                  className={
                    `flex items-center group focus:outline-none px-0 bg-none border-none cursor-pointer transition-colors duration-150 rounded-md`
                  }
                  title="Mark for Review"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={markedForReview ? '#ef4444' : 'none'}
                    stroke={markedForReview ? '#ef4444' : '#000000'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      `lucide lucide-bookmark-icon lucide-bookmark transition-colors duration-150
                       ${markedForReview ? '' : 'group-hover:stroke-black'}
                       `
                    }
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                  </svg>
                  <span
                    className={`ml-2 text-sm font-['Lexend'] font-normal transition-colors duration-150`}
                  >
                    Mark for Review
                  </span>
                </button>
              </div>
              <hr
                className="w-full border-t-2 border-t-transparent border-dashed mt-[2px]"
                style={{
                  borderImage: 'repeating-linear-gradient(to right, #000 0, #000 30px, transparent 30px, transparent 32px) 1',
                  borderImageSlice: 1,
                }}
              />
            </div>
          </div>

          <div className="space-y-3 text-lg font-['Lexend']">
            {currentQuestion.type === 'mcq' && 'options' in currentQuestion ? (
              currentQuestion.options.map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedAnswer === option.id
                      ? 'border-blue-700 shadow-[0_0_0_2px_theme(colors.blue.700)]'
                      : 'border-gray-700 bg-white hover:bg-gray-100 hover:cursor-pointer'
                  }`}
                  onClick={() => setSelectedAnswer(option.id)}
                  style={{fontWeight: 500}}
                >
                  <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center font-bold text-sm select-none transition-all duration-200 shadow-sm ${
                    selectedAnswer === option.id
                      ? 'border-gray-700 bg-[#324dc7] text-white'
                      : 'border-gray-700 text-gray-700 bg-white hover:border-blue-400'
                  }`}>
                    {option.id}
                  </div>
                  <span className="font-[350] text-[#000000]">{option.text}</span>
                </label>
              ))
            ) : currentQuestion.type === 'input' ? (
              <div className="flex flex-col items-start space-y-2">
                <textarea
                  className="border-2 border-blue-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black transition-all duration-150 resize-vertical w-full"
                  placeholder="Enter your answer"
                  value={selectedAnswer}
                  onChange={e => setSelectedAnswer(e.target.value)}
                  rows={Math.min(Math.max(selectedAnswer.split('\n').length, 1), 20)}
                  style={{ minHeight: '32px', maxHeight: '800px', height: 'auto' }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}