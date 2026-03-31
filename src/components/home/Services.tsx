import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

export function Services() {
  return (
    <section className="py-16 md:py-32 lg:py-40 bg-industrial-950 border-t border-industrial-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900 border border-industrial-800 text-industrial-400 text-xs font-mono mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Наши компетенции
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Что мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">делаем</span>
          </h2>
          <p className="text-lg sm:text-xl text-industrial-400 leading-relaxed font-light max-w-3xl md:mx-0">
            Решаем задачи любого масштаба — от посадочной страницы под конкретный станок до многостраничного портала завода.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-industrial-900/40 backdrop-blur-md border border-industrial-800 p-8 md:p-10 hover:bg-industrial-900/80 hover:border-industrial-600 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Large Background Number */}
              <div className="absolute -right-4 -bottom-8 text-[100px] md:text-[140px] font-bold font-mono text-industrial-800/30 group-hover:text-industrial-700/30 transition-colors duration-500 pointer-events-none select-none leading-none">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-industrial-950 border border-industrial-800 flex items-center justify-center mb-8 group-hover:border-accent-500/50 group-hover:shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all duration-500">
                  <service.icon className="w-8 h-8 text-industrial-500 group-hover:text-accent-500 group-hover:scale-110 transition-all duration-500" />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent-500 font-mono text-sm font-bold tracking-widest">0{index + 1} //</span>
                  <span className="text-industrial-500 font-mono text-xs uppercase tracking-widest">{service.subtitle}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-accent-50 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-base text-industrial-400 leading-relaxed font-light mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="mt-auto inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white group-hover:text-accent-400 transition-colors w-fit"
                >
                  <span className="relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-full border border-industrial-700 group-hover:border-accent-500/50 bg-industrial-900 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  Подробнее
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
