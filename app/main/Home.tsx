// app/main/Home.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function HomeP() {
  const container = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // Initial PLASMA text animation
      gsap.set(".hero-text", { y: -200, opacity: 0 });
      gsap.to(".hero-text", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out"
      });

      // Mouse movement parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate mouse position relative to center (values from -1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2;
        const y = (clientY / innerHeight - 0.5) * 2;
        
        // Apply parallax effect to video
        gsap.to(videoRef.current, {
          x: x * 30, // Adjust these values to control the movement intensity
          y: y * 30,
          duration: 1,
          ease: "power2.out"
        });
      };

      // Add and remove event listener
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={container}>
      {/* Background Video */}
      <video 
        ref={videoRef}
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

        {/* Bottom Centered PLASMA Text */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
          <h1 className="hero-text text-white text-[8vw] font-extrabold tracking-widest drop-shadow-lg select-none">
            PLASMA
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeP;