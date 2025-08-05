"use client";
import React from 'react';
import { TestData } from '../data/data';
import TestContainer from './TestContainer';

interface TestInterfaceProps {
  testData: TestData;
}

export default function TestInterface({ testData }: TestInterfaceProps) {
  return <TestContainer testData={testData} />;
}