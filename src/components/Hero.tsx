'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional gradient background inspired by your tech images */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-black" />
      
      {/* Visible tech grid pattern */}
      <div className="absolute inset-0 code-pattern opacity-40" />
      
      {/* Circuit board inspired elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-teal-400/25 rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}} />
      </div>

      {/* Main content container */}
      <div className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
          
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Professional greeting with tech inspiration */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono tracking-wider">
                  SYSTEM ONLINE
                </span>
              </div>
              <span className="text-cyan-400/90 text-sm font-medium tracking-[0.3em] uppercase">
                Software Engineer
              </span>
            </div>

            {/* Main heading with tech styling */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none">
                Mohammed
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  Siyas CK
                </span>
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mx-auto lg:mx-0"></div>
            </div>

            {/* Professional subtitle */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <p className="text-xl text-gray-300 font-light">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Crafting modern web experiences with clean code, innovative design, and global connectivity in mind
              </p>
            </div>

            {/* Tech stats - inspired by your data visualization images */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-cyan-400">5+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-blue-400">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-teal-400">∞</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Ideas</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium transition-all duration-300 flex items-center text-lg shadow-lg shadow-cyan-500/25"
              >
                Explore Work
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-gray-600 text-gray-300 font-medium hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                Connect
              </a>
            </div>
          </div>

          {/* Right side - Profile image with tech frame */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Tech-inspired frame with multiple layers */}
              <div className="absolute -inset-4">
                <div className="w-full h-full rounded-full border border-gray-700/30"></div>
              </div>
              <div className="absolute -inset-2">
                <div className="w-full h-full rounded-full border border-cyan-400/20 animate-pulse"></div>
              </div>
              
              {/* Subtle glow effect inspired by your network images */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-teal-500/10 rounded-full blur-2xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-2 border-gray-700/40 bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/50 backdrop-blur-sm">
                <Image
                  src="/images/profile.png"
                  alt="Mohammed Siyas CK - Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
                
                {/* Tech overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating tech elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-cyan-400/40 rounded bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-blue-400/40 rounded bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Single professional scroll indicator - no duplicates */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-400 space-y-3">
            <span className="text-xs font-light tracking-wider uppercase">Scroll to Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent relative">
              <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full absolute -left-0.5 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Learning counter - subtle placement */}
        <button
          onClick={() => setClickCount(clickCount + 1)}
          className="absolute bottom-8 right-8 px-3 py-2 text-xs text-gray-600 border border-gray-800 hover:text-cyan-400 hover:border-gray-700 transition-all duration-300 hidden md:block backdrop-blur-sm bg-gray-900/20"
        >
          React Sessions: {clickCount}
        </button>
      </div>
    </section>
  )
}