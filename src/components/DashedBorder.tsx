"use client";
import React from 'react';

interface DashedBorderProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function DashedBorder({ className = "", style = {} }: DashedBorderProps) {
  const defaultStyle = {
    borderImage: 'repeating-linear-gradient(to right, #000 0, #000 30px, transparent 30px, transparent 32px) 1',
    borderImageSlice: 1,
    ...style
  };

  return (
    <div
      className={`h-0 border-b-2 border-b-transparent border-dashed ${className}`}
      style={defaultStyle}
    />
  );
}