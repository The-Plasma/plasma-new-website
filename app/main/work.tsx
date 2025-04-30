"use client"

import React from 'react';
import { ExternalLink, Star, Zap, Shield, Code, Palette } from 'lucide-react';

const Work = () => {
  // Card data to make component more maintainable
  const cards = [
    {
      id: 'ideation',
      title: 'Endless Ideation',
      description: 'Generate innovative concepts at unprecedented speeds with our AI-powered brainstorming tools.',
      icon: <Zap className="w-8 h-8 text-cyan-300" />,
      span: 'md:col-span-2',
      visual: 'Interactive Ideation Dashboard',
      gradient: 'from-cyan-900/40 to-blue-900/40'
    },
    {
      id: 'benchmark',
      title: 'Benchmark with AI',
      description: 'Our intelligent system evaluates your designs against industry standards for pixel-perfect results.',
      icon: <Shield className="w-8 h-8 text-cyan-300" />,
      span: '',
      visual: 'Real-time Analysis Metrics',
      gradient: 'from-cyan-900/40 to-blue-900/40'
    },
    {
      id: 'aesthetic',
      title: 'Aesthetic Excellence',
      description: 'Craft visually stunning experiences using advanced design principles and automated refinement tools.',
      icon: <Palette className="w-8 h-8 text-cyan-300" />,
      span: '',
      visual: 'Visual Design Interface',
      gradient: 'from-cyan-900/40 to-blue-900/40'
    },
    {
      id: 'pixel',
      title: 'Pixels Perfected',
      description: 'Transform concepts into production-ready designs optimized for websites, apps, and digital platforms.',
      icon: <Code className="w-8 h-8 text-cyan-300" />,
      span: 'md:col-span-2',
      visual: 'Multi-platform Preview',
      gradient: 'from-cyan-900/40 to-blue-900/40'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl opacity-20"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLnJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMzBoMzB2MzBIMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDIiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAwaDMwdjMwSDB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-medium text-amber-200">Premium Design Tools</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Work Showcase</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our revolutionary features that empower creators to design with unprecedented speed and precision.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${card.span} group relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 ease-out hover:scale-[1.03] hover:z-20`}
              >
                {/* Card background with glass effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-80`}></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                
                {/* Double border effect */}
                <div className="absolute inset-[1px] rounded-2xl border border-white/10"></div>
                <div className="absolute inset-[2px] rounded-2xl border border-white/5"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      {card.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-5 h-5 text-white/70 hover:text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white">{card.title}</h3>
                  <p className="text-gray-300 mb-6">{card.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <p className="text-sm text-gray-400">{card.visual}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;