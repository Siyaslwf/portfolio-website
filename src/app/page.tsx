'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'  
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* LEARNING: Navigation component with sticky positioning */}
      <Navigation />
      
      {/* LEARNING: Each section has its own component for modularity */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}