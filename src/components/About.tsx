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
    <section id="about" className="section-padding bg-black/20">
      <div className="container mx-auto">
        {/* LEARNING: Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Passionate developer creating innovative solutions with modern technologies
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
              <h3 className="text-2xl font-bold text-white mb-2">Mohammed Siyas CK</h3>
              <p className="text-blue-400">Full Stack Developer</p>
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
                  className={`pb-4 px-2 font-medium transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-white/70 hover:text-white'
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
                  <p className="text-white/80 text-lg leading-relaxed">
                    I'm a passionate full-stack developer with expertise in modern web technologies. 
                    I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
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