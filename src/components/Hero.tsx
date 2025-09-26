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
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/30" />
      
      {/* Animated tech grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Circuit board inspired patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse-slow" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse-slow" style={{animationDelay: '2s'}} />
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-32 right-1/3 w-2.5 h-2.5 bg-teal-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/3 right-1/2 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30" />

      <div className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            {/* Professional greeting */}
            <div className="mb-8">
              <span className="text-cyan-400/80 text-sm font-light tracking-[0.2em] uppercase animate-fade-in">
                Software Engineer
              </span>
            </div>

            {/* Professional main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white animate-slide-up tracking-tight leading-tight">
              Mohammed Siyas CK
            </h1>

            {/* Professional subtitle */}
            <div className="mb-12 max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-lg md:text-xl text-gray-300 mb-4 font-light">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                Crafting modern web experiences with clean code and thoughtful design
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a
                href="#projects"
                className="group px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium transition-all duration-300 flex items-center"
              >
                View Projects
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Learning counter */}
            <button
              onClick={() => setClickCount(clickCount + 1)}
              className="px-4 py-2 text-xs text-gray-500 border border-gray-800 hover:text-cyan-400 hover:border-gray-700 transition-all duration-300"
            >
              React Practice: {clickCount}
            </button>
          </div>

          {/* Right side - Profile image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Tech-inspired glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gray-700/50 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-gray-600">
                      <svg className="w-12 h-12 text-cyan-400/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-light text-gray-500">Add Your Photo Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
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

        {/* Professional scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-xs font-light tracking-wider mb-3 rotate-90 origin-center">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent relative">
              <div className="w-2 h-2 bg-cyan-400/60 rounded-full absolute -left-0.5 animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}