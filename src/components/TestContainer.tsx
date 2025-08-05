"use client";
import React, { useState, useEffect, useRef } from 'react';
import { TestData, satTestData, getCurrentModuleAsTestData } from '../data/data';
import TestHeader from './TestHeader';
import DirectionsPanel from './DirectionsPanel';
import DashedBorder from './DashedBorder';
import MainContent from './MainContent';
import TestFooter from './TestFooter';
import QuestionNavigationPopup from './QuestionNavigationPopup';
import DesmosCalculator from './DesmosCalculator';
import ReviewPage from './ReviewPage';
import ModuleLoadingScreen from './ModuleLoadingScreen';

interface TestContainerProps {
  testData: TestData;
}

export default function TestContainer({ testData: initialTestData }: TestContainerProps) {
  // Module progression state
  const [currentModuleIndex, setCurrentModuleIndex] = useState(satTestData.currentModuleIndex);
  const [showModuleLoading, setShowModuleLoading] = useState(false);
  const [testData, setTestData] = useState(initialTestData);

  // Update testData when module changes
  useEffect(() => {
    const updatedSatData = { ...satTestData, currentModuleIndex };
    const newTestData = getCurrentModuleAsTestData(updatedSatData);
    setTestData(newTestData);
    
    // Update global satTestData
    satTestData.currentModuleIndex = currentModuleIndex;
  }, [currentModuleIndex]);

  // Function to handle module completion and transition
  const handleModuleComplete = () => {
    console.log('Module complete called, current index:', currentModuleIndex);
    
    // Check if there are more modules
    if (currentModuleIndex < satTestData.modules.length - 1) {
      setShowModuleLoading(true);
      
      // Simulate loading time (2-3 seconds)
      setTimeout(() => {
        const nextModuleIndex = currentModuleIndex + 1;
        const nextModule = satTestData.modules[nextModuleIndex];
        
        console.log('Moving to next module:', nextModule);
        
        // Reset states for new module
        setAnswers({});
        setReviewFlags({});
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setMarkedForReview(false);
        setShowReviewPage(false);
        
        // Reset timer for new module - FIX: Use nextModule instead of wrong index
        if (nextModule?.timeLimit) {
          const [min, sec] = nextModule.timeLimit.split(':').map(Number);
          const newTime = min * 60 + (isNaN(sec) ? 0 : sec);
          console.log('Setting new timer:', newTime, 'seconds');
          setRemainingTime(newTime);
        }
        
        // Move to next module - This will trigger the useEffect above
        setCurrentModuleIndex(nextModuleIndex);
        setShowModuleLoading(false);
        
        console.log('Module transition complete');
      }, 2500); // 2.5 second loading screen
    } else {
      // Test complete
      alert('Test Complete! All modules finished.');
      console.log('All modules completed');
    }
  };

  // Reference Sheet popup state and drag logic
  const [showReference, setShowReference] = useState(false);
  const [refPopupPos, setRefPopupPos] = useState({ x: 200, y: 100 });
  const [draggingRef, setDraggingRef] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Calculator popup state
  const [showCalculator, setShowCalculator] = useState(false);

  // Mouse events for dragging Reference Sheet
  const handleRefMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDraggingRef(true);
    dragOffset.current = {
      x: e.clientX - refPopupPos.x,
      y: e.clientY - refPopupPos.y,
    };
  };

  useEffect(() => {
    if (!draggingRef) return;
    const handleMouseMove = (e: MouseEvent) => {
      setRefPopupPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const handleMouseUp = () => setDraggingRef(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingRef]);

  const [showDirections, setShowDirections] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  
  // Initialize timer with current module's time limit
  const [remainingTime, setRemainingTime] = useState(() => {
    if (typeof testData.timeLimit === 'string') {
      const [min, sec] = testData.timeLimit.split(':').map(Number);
      return min * 60 + (isNaN(sec) ? 0 : sec);
    }
    return 0;
  });

  // Live timer effect (should run regardless of showTimer)
  useEffect(() => {
    if (remainingTime <= 0) return;
    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [remainingTime]);

  // Format timer as mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedForReview, setMarkedForReview] = useState(false);
  const [showQuestionPopup, setShowQuestionPopup] = useState(false);
  const [showReviewPage, setShowReviewPage] = useState(false);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [reviewFlags, setReviewFlags] = useState<{[key: number]: boolean}>({});
  const [leftPanelWidth, setLeftPanelWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const currentQuestion = testData.questions[currentQuestionIndex];

  // Initialize current question state when switching questions
  useEffect(() => {
    setSelectedAnswer(answers[currentQuestionIndex] || '');
    setMarkedForReview(reviewFlags[currentQuestionIndex] || false);
  }, [currentQuestionIndex, answers, reviewFlags]);

  const handleNext = () => {
    // Save current answer and review flag
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [currentQuestionIndex]: selectedAnswer }));
    }
    setReviewFlags(prev => ({ ...prev, [currentQuestionIndex]: markedForReview }));

    // If on last question, go to review page
    if (currentQuestionIndex >= testData.questions.length - 1) {
      setShowReviewPage(true);
    } else {
      // Otherwise, go to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    // Save current answer and review flag
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [currentQuestionIndex]: selectedAnswer }));
    }
    setReviewFlags(prev => ({ ...prev, [currentQuestionIndex]: markedForReview }));

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleMarkForReview = () => {
    setMarkedForReview(prev => {
      const next = !prev;
      setReviewFlags(flags => ({ ...flags, [currentQuestionIndex]: next }));
      return next;
    });
  };

  const handleQuestionSelect = (questionIndex: number) => {
    // Save current answer and review flag before switching
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [currentQuestionIndex]: selectedAnswer }));
    }
    setReviewFlags(prev => ({ ...prev, [currentQuestionIndex]: markedForReview }));

    setCurrentQuestionIndex(questionIndex);
    setShowQuestionPopup(false);
    setShowReviewPage(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const updatePanelWidth = (clientX: number) => {
    if (!containerRef.current || !leftPanelRef.current || !rightPanelRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const newLeftWidth = ((clientX - rect.left) / rect.width) * 100;
    
    // Constrain the width between 20% and 80%
    const constrainedWidth = Math.max(20, Math.min(80, newLeftWidth));
    
    // Use direct DOM manipulation for immediate visual feedback
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    
    leftPanel.style.width = `${constrainedWidth}%`;
    rightPanel.style.width = `${100 - constrainedWidth}%`;
    
    // Force immediate repaint
    leftPanel.style.transform = 'translateZ(0)';
    rightPanel.style.transform = 'translateZ(0)';
    
    // Update state (this will be slower but needed for React consistency)
    setLeftPanelWidth(constrainedWidth);
  };

  // Add event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      let animationFrameId: number;
      
      const handleGlobalMouseMove = (e: MouseEvent) => {
        // Cancel previous frame if still pending
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        
        // Schedule update for next frame
        animationFrameId = requestAnimationFrame(() => {
          updatePanelWidth(e.clientX);
        });
      };

      const handleGlobalMouseUp = () => {
        setIsDragging(false);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };

      document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
      document.addEventListener('mouseup', handleGlobalMouseUp);
      
      // Prevent text selection while dragging
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [isDragging]);

  // Close More dropdown when clicking outside
  useEffect(() => {
    if (!showMoreDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const dropdown = target.closest('[data-dropdown="more"]');
      if (!dropdown) {
        setShowMoreDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMoreDropdown]);

  // Get current module data to access hasPassage field
  const currentModule = satTestData.modules[currentModuleIndex];

  // Show loading screen during module transition
  if (showModuleLoading) {
    return <ModuleLoadingScreen />;
  }

  return (
    <>
      {showReviewPage ? (
        <ReviewPage
          testData={testData}
          answers={answers}
          reviewFlags={reviewFlags}
          onQuestionSelect={handleQuestionSelect}
          onClose={() => setShowReviewPage(false)}
          onNextModule={handleModuleComplete} // Pass the module completion handler
          remainingTime={remainingTime}
          formatTime={formatTime}
        />
      ) : (
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

          <MainContent
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={handleSelectAnswer}
            currentQuestionIndex={currentQuestionIndex}
            markedForReview={markedForReview}
            handleMarkForReview={handleMarkForReview}
            leftPanelWidth={leftPanelWidth}
            isDragging={isDragging}
            handleMouseDown={handleMouseDown}
            containerRef={containerRef}
            leftPanelRef={leftPanelRef}
            rightPanelRef={rightPanelRef}
            hasPassage={currentModule.hasPassage}
          />

          <TestFooter
            testData={testData}
            currentQuestionIndex={currentQuestionIndex}
            showQuestionPopup={showQuestionPopup}
            setShowQuestionPopup={setShowQuestionPopup}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />

          <QuestionNavigationPopup
            showQuestionPopup={showQuestionPopup}
            setShowQuestionPopup={setShowQuestionPopup}
            testData={testData}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            reviewFlags={reviewFlags}
            handleQuestionSelect={handleQuestionSelect}
            setShowReviewPage={setShowReviewPage}
          />
        </div>
      )}
      
      <DesmosCalculator 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        initialPosition={{ x: 300, y: 150 }}
      />
    </>
  );
}