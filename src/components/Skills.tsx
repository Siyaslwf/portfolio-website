export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'TailwindCSS', level: 92 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Database Design', level: 82 },
        { name: 'API Development', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'AWS/Cloud', level: 80 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* REAL CODE SCREEN BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        {/* Primary code screen background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/backgrounds/code-screen.jpg)',
            filter: 'brightness(0.15) contrast(1.3) saturate(1.1)'
          }}
        />
        
        {/* Secondary programming workspace overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-50"
          style={{
            backgroundImage: 'url(/images/backgrounds/programming-setup.jpg)'
          }}
        />
        
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-blue-900/60" />
        
        {/* Binary/data visualization effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-cyan-400/30 font-mono text-xs">
            01001000 01100101 01101100 01101100 01101111
          </div>
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-xs">
            function createPortfolio() &#123;
          </div>
          <div className="absolute bottom-20 right-10 text-teal-400/30 font-mono text-xs">
            const skills = ['React', 'Node.js'];
          </div>
        </div>
        
        {/* Syntax highlighting blocks */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-8 bg-gradient-to-r from-cyan-500/20 to-transparent mt-4" />
          <div className="w-2/3 h-6 bg-gradient-to-r from-blue-500/15 to-transparent mt-2" />
          <div className="w-3/4 h-6 bg-gradient-to-r from-purple-500/15 to-transparent mt-2" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Professional Section header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400/80 text-sm font-light tracking-[0.2em] uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Crafting digital solutions with cutting-edge technologies and best practices
          </p>
        </div>

        {/* LEARNING: Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-morphism p-8 card-hover"
              style={{
                animationDelay: `${categoryIndex * 200}ms`
              }}
            >
              {/* LEARNING: Category header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* LEARNING: Skill progress bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    {/* LEARNING: Animated progress bar */}
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LEARNING: Additional skills section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Figma', 'Photoshop', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL', 
              'Jest', 'Cypress', 'Webpack', 'Vite', 'Prisma', 'Supabase'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-morphism text-white/80 hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}