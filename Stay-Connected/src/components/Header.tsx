import React from 'react';

export function Header() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Mit Patel</h1>
      <h2 className="text-lg md:text-xl text-gray-300 mb-4">Software Engineer</h2>
      <p className="text-gray-400 mb-2">Dallas, Texas, USA</p>
      
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-6 md:mt-8 bg-gradient-to-r from-[#4a5d4a] to-[#8b7355] bg-clip-text text-transparent">
        Stay Connected
      </h3>
      
      <p className="text-gray-400 italic mb-8 md:mb-12 text-sm md:text-base px-4 text-center">
        "Connect, inspire, and make a difference in the world."
      </p>
    </>
  );
}