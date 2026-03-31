import { motion } from 'motion/react';

const logos = [
  "СТАЛЬПРОМ", "ТЯЖМАШ", "ТЕХНОВЕКТОР", "УРАЛТРУБОСТАЛЬ", 
  "ГАЗНЕФТЬМАШ", "РОСАТОМ", "СЕВЕРСТАЛЬ", "МЕТАЛЛОИНВЕСТ"
];

export function ClientLogos() {
  return (
    <section className="py-24 border-y border-industrial-800 bg-industrial-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Нам доверяют лидеры промышленности</h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-8"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-bold text-industrial-800 uppercase tracking-tighter select-none hover:text-industrial-600 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-industrial-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-industrial-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
