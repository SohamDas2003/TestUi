/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState, useEffect, useRef } from 'react';

// Declare Desmos global for TypeScript
declare global {
  interface Window {
    Desmos: {
      GraphingCalculator: (element: HTMLElement) => any;
    };
  }
}

interface DesmosCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
}

export default function DesmosCalculator({ isOpen, onClose, initialPosition = { x: 300, y: 150 } }: DesmosCalculatorProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calculatorInstance = useRef<any>(null);

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // Handle dragging
  useEffect(() => {
    if (!isDragging) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    
    const handleMouseUp = () => setIsDragging(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Initialize Desmos calculator when component opens - using dummy page method
  useEffect(() => {
    if (isOpen) {
      // Load Desmos script
      const script = document.createElement('script');
      script.src = 'https://www.desmos.com/api/v1.11/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
      script.async = true;
      script.onload = () => {
        // The following is the original JS logic from dummy page
        const elt = calculatorRef.current;
        if (elt && window.Desmos) {
          calculatorInstance.current = window.Desmos.GraphingCalculator(elt);
        }
      };
      document.body.appendChild(script);
      
      return () => {
        // Cleanup when component unmounts or closes
        if (script.parentNode) {
          document.body.removeChild(script);
        }
        if (calculatorInstance.current && typeof calculatorInstance.current.destroy === 'function') {
          calculatorInstance.current.destroy();
          calculatorInstance.current = null;
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 1000,
        minWidth: 600,
        minHeight: 450,
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
        onMouseDown={handleMouseDown}
      >
        <span>Graphing Calculator</span>
        <button
          onClick={onClose}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: 20, 
            color: '#64748b', 
            cursor: 'pointer', 
            fontWeight: 700,
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'background-color 0.2s'
          }}
          title="Close"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ×
        </button>
      </div>
      
      {/* Calculator content area */}
      <div style={{ padding: '0.5rem', overflow: 'hidden', flex: 1 }}>
        <div 
          ref={calculatorRef}
          style={{ 
            width: '600px', 
            height: '400px',
            minHeight: '400px',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb'
          }}
        />
      </div>
    </div>
  );
}
