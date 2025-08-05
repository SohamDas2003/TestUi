"use client";
import React from 'react';
import Image from 'next/image';
import spinnericon from "../../public/spinner.svg";

export default function ModuleLoadingScreen() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center font-['Lexend']">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          This Module is Over
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          All your work has been saved
        </p>
        <p className="text-lg text-gray-700 mb-2">
          You&apos;ll move on automatically in just a moment.
        </p>
        <p className="text-base text-gray-600 font-medium">
          Do not refresh this page or quit the app.
        </p>
        
        {/* SVG Loading spinner */}
        <div className="mt-8 flex justify-center">
          <Image
            src={spinnericon}
            alt="Loading..."
            className="animate-spin"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
    </div>
  );
}