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
      {/* Professional subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-transparent" />
      
      {/* Minimalistic geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 border border-blue-500/10 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-purple-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}} />
      </div>

      <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Professional greeting */}
        <div className="mb-8">
          <span className="text-blue-300/80 text-sm font-light tracking-wide uppercase animate-fade-in">
            Portfolio
          </span>
        </div>

        {/* Professional main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-white animate-slide-up tracking-tight">
          Mohammed Siyas CK
        </h1>

        {/* Professional subtitle */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl text-gray-300 mb-4 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Crafting modern web experiences with clean code and thoughtful design
          </p>
        </div>

        {/* Professional action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group px-8 py-3 bg-white text-gray-900 rounded-sm font-medium hover:bg-gray-100 transition-all duration-300 flex items-center"
          >
            View Projects
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-500 text-gray-300 rounded-sm font-medium hover:border-white hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>

          {/* Learning counter with minimalist design */}
          <button
            onClick={() => setClickCount(clickCount + 1)}
            className="px-4 py-2 text-xs text-gray-400 border border-gray-700 rounded-sm hover:text-white hover:border-gray-500 transition-all duration-300"
          >
            React Practice: {clickCount}
          </button>
        </div>        {/* Minimalist scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent animate-fade-in">
            <div className="w-2 h-2 bg-gray-500 rounded-full -translate-x-0.5 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  )
}