"use client";
import React from 'react';

interface DirectionsPanelProps {
  showDirections: boolean;
  setShowDirections: (show: boolean) => void;
}

export default function DirectionsPanel({ showDirections, setShowDirections }: DirectionsPanelProps) {
  if (!showDirections) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-30 bg-[#1e2028]/[0.40] transition-opacity animate-fadeIn"
        onClick={() => setShowDirections(false)}
        aria-hidden="true"
      />
      {/* Directions Panel */}
      <div className="absolute z-40 animate-fadeIn pointer-events-auto font-['Lexend']" style={{ left: 24, top: '100%', minWidth: '300px', maxWidth: '90vw' }}>
        {/* Speech bubble triangle pointing upward */}
        <div
          className="absolute w-0 h-0"
          style={{
            left: '36px',
            top: '-8px',
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderBottom: '16px solid white',
            zIndex: 1
          }}
        ></div>
        <div
          className="bg-white pt-6 pr-6 pl-6 pb-20 mt-2 max-h-[70vh] max-w-[90vh] relative"
          style={{ fontSize: '1rem', lineHeight: '1.6', color: '#222', minWidth: '340px', position: 'relative' }}
        >
          {/* Content Container with scrolling */}
          <div className="overflow-y-auto directions-scroll" style={{ maxHeight: 'calc(70vh - 80px)' }}>
            <h2 className="text-lg font-bold mb-2 text-gray-900">Directions</h2>
            <p className="mb-2">
              The questions in this section address a number of important math skills.
            </p>
            <p className="mb-2">
              Use of a calculator is permitted for all questions. A reference sheet, calculator, and these directions can be accessed throughout the test.
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>All variables and expressions represent real numbers.</li>
              <li>Figures provided are drawn to scale.</li>
              <li>All figures lie in a plane.</li>
              <li>
                The domain of a given function <i>f</i> is the set of all real numbers <i>x</i> for which <i>f(x)</i> is a real number.
              </li>
            </ul>
            <p className="mb-2">
              <b>For multiple-choice questions</b>, solve each problem and choose the correct answer from the choices provided. Each multiple-choice question has a single correct answer.
            </p>
            <p className="mb-2">
              <b>For student-produced response questions</b>, solve each problem and enter your answer as described below.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>If you find <b>more than one correct answer</b>, enter only one answer.</li>
              <li>You can enter up to 5 characters for a positive answer and up to 6 characters (including the negative sign) for a negative answer.</li>
              <li>If your answer is a <b>fraction</b> that doesn&apos;t fit in the provided space, enter the decimal equivalent.</li>
              <li>If your answer is a <b>decimal</b> that doesn&apos;t fit in the provided space, enter it by truncating or rounding at the fourth digit.</li>
              <li>If your answer is a <b>mixed number</b> (such as 3 1/2), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li>
            </ul>

            {/* Navigation Tips */}
            <h3 className="text-md font-semibold mb-2">Navigation Tips</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the <b>Next</b> and <b>Back</b> buttons at the bottom to move between questions.</li>
              <li>Click the bookmark icon to <b>mark for review</b>; flagged questions appear on the Review page.</li>
              <li>Open the question dropdown to jump directly to any question.</li>
              <li>Hide or show the timer using the <b>Hide/Show</b> button underneath the clock.</li>
              <li>Use the <b>Calculator</b> and <b>Reference Sheet</b> icons in the header for tools at any time.</li>
            </ul>
            <p className="mb-4">
              Make sure to review all your answers before the time expires.
            </p>
          </div>
          
          {/* Fixed Close Button in bottom right corner */}
          <div className="absolute bottom-4 right-6">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-3xl cursor-pointer border-black border-1 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={() => setShowDirections(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}