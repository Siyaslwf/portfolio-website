'use client'

import { useState } from 'react'

export default function About() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Earth from space background - Global connectivity theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-black" />
        
        {/* Earth-inspired radial gradient */}
        <div className="absolute inset-0 earth-pattern opacity-60" />
        
        {/* Network connectivity pattern */}
        <div className="absolute inset-0 network-pattern opacity-50" />
        
        {/* Connection lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-0.5 h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Professional Section header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400/80 text-sm font-light tracking-[0.2em] uppercase mb-4 block">
            Global Connectivity
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connecting ideas globally through innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEARNING: Image section with glass morphism */}
          <div className="relative">
            <div className="glass-morphism p-8 text-center">
              {/* Placeholder for profile image */}
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">MSC</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2">Mohammed Siyas CK</h3>
              <p className="text-cyan-400 font-light">Full Stack Developer</p>
            </div>
          </div>

          {/* LEARNING: Content tabs */}
          <div>
            {/* Tab navigation */}
            <div className="flex space-x-4 mb-8 border-b border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-2 font-light transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="animate-fade-in">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    I'm a passionate full-stack developer with expertise in modern web technologies.
                    I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                    or sharing knowledge with the developer community.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="glass-morphism p-6">
                    <h4 className="text-xl font-bold text-white mb-2">Senior Full Stack Developer</h4>
                    <p className="text-blue-400 mb-2">Tech Company • 2022 - Present</p>
                    <p className="text-white/70">
                      Leading development of scalable web applications using React, Node.js, and cloud technologies. 
                      Mentoring junior developers and implementing best practices.
                    </p>
                  </div>
                  <div className="glass-morphism p-6">
                    <h4 className="text-xl font-bold text-white mb-2">Full Stack Developer</h4>
                    <p className="text-blue-400 mb-2">Startup Inc • 2020 - 2022</p>
                    <p className="text-white/70">
                      Built and maintained multiple client projects using modern JavaScript frameworks. 
                      Collaborated with design teams to create pixel-perfect implementations.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  <div className="glass-morphism p-6">
                    <h4 className="text-xl font-bold text-white mb-2">Bachelor of Computer Science</h4>
                    <p className="text-blue-400 mb-2">University Name • 2018 - 2022</p>
                    <p className="text-white/70">
                      Focused on software engineering, algorithms, and web development. 
                      Graduated with honors and completed several notable projects.
                    </p>
                  </div>
                  <div className="glass-morphism p-6">
                    <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
                    <p className="text-blue-400 mb-2">Online Platforms • Ongoing</p>
                    <p className="text-white/70">
                      Constantly updating skills through courses, workshops, and hands-on projects. 
                      Recently completed advanced React, Cloud Architecture, and AI/ML courses.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}