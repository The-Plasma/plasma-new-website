// app/main/Home.tsx
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const HomeP: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="https://the-plasma.github.io/plasma-new-website/earth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
      {/* Content Container */}
      <div className="absolute inset-0 z-20">
        {/* Logo (fixed in top left) */}
        <div className="fixed top-4 left-4">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={48} 
            height={48} 
            className="h-12 w-auto" 
          />
        </div>
        
        {/* Navbar (in top center) */}
        <div className="flex justify-center w-full">
          <Navbar />
        </div>
        
        {/* Main content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-8xl font-bold tracking-wider">
            PLASMA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeP;