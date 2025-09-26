'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [clickCount, setClickCount] = useState(0) // LEARNING: New state for counting clicks

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* LEARNING: Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
      
      {/* LEARNING: Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
      </div>

      <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* LEARNING: Animated greeting */}
        <div className="mb-6">
          <span className="text-blue-400 text-lg font-medium animate-fade-in">
            Hello, I'm
          </span>
        </div>

        {/* LEARNING: Main heading with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
          MOHAMMED SIYAS CK
        </h1>

        {/* LEARNING: Subtitle with typewriter effect */}
        <h2 className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer
          <br />
          <span className="text-blue-400">Building digital experiences that matter</span>
        </h2>

        {/* LEARNING: Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="btn-primary group"
          >
            View My Work
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Get In Touch
          </a>
          
          {/* LEARNING: Interactive counter button to practice useState */}
          <button
            onClick={() => setClickCount(clickCount + 1)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Learning Counter: {clickCount}
          </button>
        </div>

        {/* LEARNING: Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}