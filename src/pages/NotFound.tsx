import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AppWindow, Briefcase } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative px-6">
      <SEO 
        title="Страница не найдена"
        description="Запрашиваемая страница не существует."
        noIndex
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-[120px] md:text-[180px] font-bold font-mono text-industrial-800/50 leading-none mb-8 select-none">
          404
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
          Система не <span className="text-accent-500">нашла</span> страницу
        </h1>
        <p className="text-industrial-400 text-lg md:text-xl mb-10 max-w-lg mx-auto font-light">
          Возможно, ссылка устарела или страница была перемещена. Вернитесь на главную, чтобы продолжить работу.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors uppercase tracking-widest text-sm w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" /> На главную
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-industrial-800 text-white font-semibold hover:bg-industrial-700 transition-colors border border-industrial-700 uppercase tracking-widest text-sm w-full sm:w-auto justify-center"
          >
            <AppWindow className="w-5 h-5" /> Услуги
          </Link>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-industrial-800 text-white font-semibold hover:bg-industrial-700 transition-colors border border-industrial-700 uppercase tracking-widest text-sm w-full sm:w-auto justify-center"
          >
            <Briefcase className="w-5 h-5" /> Проекты
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
