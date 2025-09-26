'use client'

import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'Collaborative task management with real-time updates using Next.js',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'Beautiful weather app with location-based forecasts',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TailwindCSS', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Blog CMS',
      category: 'fullstack',
      description: 'Content management system with markdown support',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Sanity', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'This very portfolio built with Next.js and TailwindCSS',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TailwindCSS', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'API Gateway',
      category: 'backend',
      description: 'Microservices API gateway with rate limiting and authentication',
      image: '/api/placeholder/400/300',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* REAL LAPTOP WORKSPACE BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        {/* Primary workspace background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/backgrounds/laptop-workspace.jpg)',
            filter: 'brightness(0.18) contrast(1.2)'
          }}
        />
        
        {/* Development setup overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-30"
          style={{
            backgroundImage: 'url(/images/backgrounds/development-setup.jpg)'
          }}
        />
        
        {/* Dark overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-slate-900/60 to-gray-900/80" />
        
        {/* Development environment elements */}
        <div className="absolute inset-0 opacity-15">
          {/* Laptop screen representation */}
          <div className="absolute top-1/4 left-1/4 w-64 h-40 border border-cyan-400/30 rounded-lg" />
          <div className="absolute top-1/4 left-1/4 w-60 h-36 mt-2 ml-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded" />
          
          {/* Keyboard representation */}
          <div className="absolute bottom-1/4 right-1/4 w-48 h-16 border border-blue-400/20 rounded-lg" />
          
          {/* Code editor tabs */}
          <div className="absolute top-1/3 left-1/3 w-32 h-6 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-t" />
          <div className="absolute top-1/3 left-1/2 w-24 h-6 bg-gradient-to-r from-blue-400/15 to-transparent rounded-t" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Professional Section header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400/80 text-sm font-light tracking-[0.2em] uppercase mb-4 block">
            Development Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From concept to deployment - showcasing professional development solutions
          </p>
        </div>

        {/* LEARNING: Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'btn-primary'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* LEARNING: Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-morphism overflow-hidden card-hover group"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* LEARNING: Project image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                {/* Project image would go here */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/30 text-6xl">🚀</div>
                </div>
              </div>

              {/* LEARNING: Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* LEARNING: Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LEARNING: Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-white/10 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEARNING: View more projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mohammedsiyas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center group"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}