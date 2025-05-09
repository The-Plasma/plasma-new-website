"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  videoUrl: string;
  size: 'small' | 'medium' | 'large';
}

const projects: Project[] = [
  {
    id: 1,
    title: "VYRA",
    videoUrl: "/videos/vyra.mp4",
    size: 'large'
  },
  {
    id: 2,
    title: "VYRA AI",
    videoUrl: "/videos/gym.mp4",
    size: 'medium'
  },
  {
    id: 3,
    title: "InternLink",
    videoUrl: "/videos/internlink.mp4",
    size: 'small'
  },
  {
    id: 4,
    title: "Project Layers",
    videoUrl: "/videos/layers.webm",
    size: 'medium'
  },
  {
    id: 5,
    title: "PrintVenue",
    videoUrl: "/videos/printvenue.webm",
    size: 'small'
  },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          Our Work
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-lg
                ${project.size === 'large' ? 'md:col-span-8 md:row-span-2' : 
                  project.size === 'medium' ? 'md:col-span-4 md:row-span-2' : 
                  'md:col-span-4 md:row-span-1'}
                group cursor-pointer
              `}
            >
              <video
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.videoUrl} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
