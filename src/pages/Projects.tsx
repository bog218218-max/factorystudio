import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { categories, projects } from '../data/projects';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Все проекты');

  const filteredProjects = activeCategory === 'Все проекты' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden">
      <SEO 
        title="Наши проекты | МАНУФАКТУРА"
        description="Портфолио сайтов для промышленных компаний и заводов."
      />
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Портфолио
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">проекты</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Примеры сайтов, где визуальная подача, структура и смыслы работают на доверие, статус компании и понятную презентацию производственных возможностей.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 md:mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-8 md:py-4 text-xs md:text-sm font-semibold transition-all duration-500 uppercase tracking-widest border ${
                activeCategory === category 
                  ? 'bg-white text-industrial-900 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]' 
                  : 'bg-industrial-900/50 text-industrial-400 border-industrial-800 hover:bg-industrial-800 hover:text-white hover:border-industrial-600 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <Link to={`/projects/${project.id}`} className="relative aspect-[4/3] overflow-hidden bg-industrial-900 mb-8 border border-industrial-800 block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-500/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-bold flex items-center gap-4 text-xl tracking-widest uppercase">
                    Смотреть кейс <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
                  </span>
                </div>
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-accent-500 uppercase tracking-widest">{project.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-700" />
                <span className="text-sm text-industrial-500 font-mono uppercase tracking-wider">{project.type}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 group-hover:text-accent-500 transition-colors duration-500 tracking-tight leading-snug">
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
              </h3>
              
              <p className="text-industrial-400 font-light text-lg sm:text-xl leading-relaxed">
                <strong className="text-industrial-200 font-medium mr-2">Результат:</strong> {project.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
