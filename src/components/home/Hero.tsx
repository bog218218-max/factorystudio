import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
          alt="Производство" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-900/40 via-industrial-900/80 to-industrial-900" />
      </div>

      {/* Premium Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      
      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Digital-агентство для промышленности
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Сайты для <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Производств
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-industrial-400 mb-12 max-w-3xl leading-relaxed font-light">
            Проектируем и разрабатываем премиальные B2B-решения. 
            Превращаем сложные производственные процессы в понятный и продающий цифровой продукт.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <Link 
              to="/projects" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-accent-500 text-white text-lg font-semibold overflow-hidden flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,77,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,77,0,0.6)] transition-shadow"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Смотреть проекты <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/contacts" 
              className="w-full sm:w-auto bg-industrial-900/50 backdrop-blur-sm border border-industrial-700 text-white px-8 py-4 text-lg font-semibold hover:bg-industrial-800 transition-colors flex items-center justify-center"
            >
              Обсудить задачу
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-industrial-800/50">
            {[
              'Редизайн под производственную нишу',
              'Фиксированная стоимость',
              '30 дней поддержки после запуска'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-industrial-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-industrial-800/50 bg-industrial-900/80 backdrop-blur-md overflow-hidden py-5">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] w-[200%]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 text-industrial-500 font-mono text-sm uppercase tracking-widest">
              <span>Редизайн сайтов</span>
              <span className="text-accent-500/50">/</span>
              <span>B2B Порталы</span>
              <span className="text-accent-500/50">/</span>
              <span>Промышленный дизайн</span>
              <span className="text-accent-500/50">/</span>
              <span>Разработка с нуля</span>
              <span className="text-accent-500/50">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
