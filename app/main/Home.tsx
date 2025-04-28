import React from 'react';
import Image from 'next/image';

const HomeP: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video - Fixed */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Logo (fixed in top left) */}
      <div className="fixed top-4 left-4 z-40">
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={48} 
          height={48} 
          className="w-auto h-12" 
        />
      </div>
      
      {/* Content Container */}
      <div className="relative h-screen z-20">
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