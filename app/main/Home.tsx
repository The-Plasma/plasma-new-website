// app/main/Home.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function HomeP() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Initial state - set elements to be invisible
      gsap.set([".hero-text", ".hero-description", ".hero-content", ".hero-video"], {
        opacity: 0
      });

      // Animate the main PLASMA text
      tl.fromTo(
        ".hero-text",
        { 
          scale: 0.5,
          opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.4 
        }
      );

      // Animate the description or secondary content
      tl.fromTo(
        ".hero-description",
        { 
          y: 20,
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2 
        },
        "-=0.6"
      );

      // Animate any additional content
      tl.fromTo(
        ".hero-content",
        { 
          y: 100,
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.3 
        },
        "+=0.3"
      );

      // Fade in the background video
      tl.fromTo(
        ".hero-video",
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        },
        "-=0.8"  // Start slightly before the previous animation ends
      );
    },
    { scope: container }
  );

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={container}>
      {/* Background Video */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="hero-video absolute w-full h-full object-cover z-0"
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
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="hero-text text-white text-8xl font-bold tracking-wider mb-6">
            PLASMA
          </h1>
          <p className="hero-description text-white/70 text-xl max-w-2xl mx-auto">
            Revolutionizing the future of technology
          </p>
          <div className="hero-content mt-8">
            
          </div>        </div>
      </div>
    </div>
  );
}

export default HomeP;