"use client";
import React from 'react';

interface TestHeaderProps {
  testData: {
    section: string;
    module: string;
    title: string;
  };
  showDirections: boolean;
  setShowDirections: (show: boolean | ((prev: boolean) => boolean)) => void;
  showTimer: boolean;
  setShowTimer: (show: boolean | ((prev: boolean) => boolean)) => void;
  remainingTime: number;
  formatTime: (seconds: number) => string;
  showCalculator: boolean;
  setShowCalculator: (show: boolean) => void;
  showReference: boolean;
  setShowReference: (show: boolean) => void;
  showMoreDropdown: boolean;
  setShowMoreDropdown: (show: boolean | ((prev: boolean) => boolean)) => void;
  refPopupPos: { x: number; y: number };
  handleRefMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function TestHeader({
  testData,
  showDirections,
  setShowDirections,
  showTimer,
  setShowTimer,
  remainingTime,
  formatTime,
  showCalculator,
  setShowCalculator,
  showReference,
  setShowReference,
  showMoreDropdown,
  setShowMoreDropdown,
  refPopupPos,
  handleRefMouseDown
}: TestHeaderProps) {
  return (
    <>
      <div className="bg-[#e6edf8] px-8 py-3 flex items-center justify-between border-b border-gray-300 shadow-sm relative z-40 min-h-[60px]">
        {/* Left: Section/Module/Title */}
        <div className="flex items-center min-w-0">
          <div className="flex flex-col">
            <span className="text-xl font-['Lexend'] font-[500] text-gray-800 truncate" style={{letterSpacing: '-0.01em'}}> {testData.section}, {testData.module}: {testData.title}</span>
            <span
              className="flex items-center mt-1 text-sm text-gray-800 font-['Lexend'] font-semibold cursor-pointer select-none hover:underline w-max"
              onClick={() => setShowDirections((prev) => !prev)}
              style={{ width: 'fit-content' }}
              role="button"
              tabIndex={0}
              onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setShowDirections((prev) => !prev); }}
            >
              Directions
              <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${showDirections ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Center: Timer (absolutely centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {showTimer || remainingTime < 300 ? (
            <span className={`text-2xl font-['Lexend'] font-[500] ${remainingTime < 300 ? 'text-red-600' : 'text-gray-800'}`}>
              {formatTime(remainingTime)}
            </span>
          ) : (
            <span className='mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M352-850.67v-84h256v84H352ZM438.33-386h84v-249.33h-84V-386ZM480-47.33q-78.22 0-146.72-29.81-68.51-29.81-119.75-81.05-51.25-51.25-81.06-119.75-29.8-68.51-29.8-146.73 0-78.22 29.8-146.72 29.81-68.5 81.06-119.75 51.24-51.25 119.75-81.05Q401.78-802 480-802q66.74 0 125.7 21 58.97 21 107.3 60.33L772.67-781l59.66 59.67L772-661.67Q811-615 834.17-557q23.16 58 23.16 132.33 0 78.22-29.8 146.73-29.81 68.5-81.06 119.75-51.24 51.24-119.75 81.05Q558.22-47.33 480-47.33Zm0-84q122 0 207.67-85.67 85.66-85.67 85.66-207.67 0-122-85.66-207.66Q602-718 480-718q-122 0-207.67 85.67-85.66 85.66-85.66 207.66T272.33-217Q358-131.33 480-131.33ZM480-424Z"/></svg>
            </span>
          )}
          {remainingTime >= 300 && (
            <button
              className="px-4 border-1 border-black rounded-full text-sm text-black font-semibold bg-white hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer font-['Lexend']"
              onClick={() => setShowTimer((prev) => !prev)}
              style={{ cursor: 'pointer' }}
            >
              {showTimer ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
        
        {/* Right: Controls */}
        <div className="flex items-center space-x-6 text-gray-700 text-sm">
          <button 
            className="flex flex-col items-center group hover:bg-gray-100 cursor-pointer rounded-md px-2 py-1 transition-colors" 
            title="Calculator"
            onClick={() => setShowCalculator(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mb-1 lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
            <span className="text-xs">Calculator</span>
          </button>
          <button
            className="flex flex-col items-center group hover:bg-gray-100 cursor-pointer rounded-md px-2 py-1 transition-colors"
            title="Reference"
            onClick={() => setShowReference(true)}
          >
            <span className="text-xl mb-0.5">𝑥²</span>
            <span className="text-xs">Reference</span>
          </button>
          
          {/* More Dropdown */}
          <div className="relative" data-dropdown="more">
            <button 
              className="flex flex-col items-center group hover:bg-gray-100 cursor-pointer rounded-md px-2 py-1 transition-colors" 
              title="More"
              onClick={() => setShowMoreDropdown(!showMoreDropdown)}
            >
              <span className="text-xl mb-0.5">⋮</span>
              <span className="text-xs">More</span>
            </button>
            {showMoreDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn">
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg transition-colors flex items-center gap-2"
                  onClick={() => {
                    setShowMoreDropdown(false);
                    alert('Help: Contact your instructor for assistance or check the FAQ section.');
                  }}
                >
                  <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-600">
                    ?
                  </div>
                  Help
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg transition-colors flex items-center gap-2"
                  onClick={() => {
                    setShowMoreDropdown(false);
                    if (confirm('Are you sure you want to save and exit? Your progress will be saved.')) {
                      // Add actual save/exit logic here
                      alert('Your progress has been saved. Exiting...');
                    }
                  }}
                >
                  <div className="w-4 h-4  flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                  </div>
                  Save and Exit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reference Sheet Draggable Popup */}
      {showReference && (
        <div
          style={{
            position: 'fixed',
            left: refPopupPos.x,
            top: refPopupPos.y,
            zIndex: 1000,
            minWidth: 350,
            minHeight: 300,
            maxWidth: '90vw',
            maxHeight: '80vh',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            background: 'white',
            borderRadius: 16,
            border: '1.5px solid #cbd5e1',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header for drag */}
          <div
            style={{
              cursor: 'move',
              background: '#f3f6fb',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid #e5e7eb',
              fontWeight: 600,
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onMouseDown={handleRefMouseDown}
          >
            <span>Reference Sheet</span>
            <button
              onClick={() => setShowReference(false)}
              style={{ background: 'none', border: 'none', fontSize: 20, color: '#64748b', cursor: 'pointer', fontWeight: 700 }}
              title="Close"
            >
              ×
            </button>
          </div>
          {/* Content area: You can add images/text here */}
          <div style={{ padding: '1.25rem', overflow: 'auto', flex: 1 }}>
            {/* Example content: Replace with your images/text as needed */}
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
            </div>
            <div style={{ fontSize: 15, color: '#222', lineHeight: 1.7 }}>
              <b>Special Right Triangles</b><br />
              <span>Formulas and diagrams for quick reference. You can add more images or text here as needed.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}