import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutTemplate, Monitor, Code2 } from 'lucide-react';

const services = [
  {
    id: 'landing',
    icon: LayoutTemplate,
    title: 'Редизайн лендингов для производств',
    description: 'Обновляем одностраничные сайты так, чтобы они ясно презентовали компанию, направление, продукт или услугу и с первого экрана создавали ощущение серьёзного бизнеса.',
    price: 'от 150 000 ₽'
  },
  {
    id: 'corporate',
    icon: Monitor,
    title: 'Редизайн корпоративных сайтов',
    description: 'Перерабатываем устаревшие сайты заводов, промышленных компаний и производственных предприятий: улучшаем структуру, подачу, визуальный уровень и удобство восприятия.',
    price: 'от 350 000 ₽',
    highlight: true
  },
  {
    id: 'new',
    icon: Code2,
    title: 'Разработка сайтов с нуля',
    description: 'Создаём сайты для производственных компаний с чистого листа, если текущий ресурс отсутствует или его проще сделать заново, чем дорабатывать.',
    price: 'от 450 000 ₽'
  }
];

export function Services() {
  return (
    <div className="pt-12 pb-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Что мы делаем
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Услуги и форматы <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">работы</span>
          </h1>
          <p className="text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Работаем с двумя основными сценариями: когда сайт нужно аккуратно переработать и когда его разумнее сделать заново.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col p-12 border transition-all duration-500 hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-industrial-800/80 border-accent-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(255,77,0,0.1)] backdrop-blur-md hover:border-accent-500/60 hover:shadow-[0_0_60px_rgba(255,77,0,0.2)]' 
                  : 'bg-industrial-900/50 border-industrial-800 hover:border-industrial-600 hover:bg-industrial-800/80 backdrop-blur-sm'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-mono px-6 py-2 uppercase tracking-widest shadow-lg shadow-accent-500/20">
                  Частый запрос
                </div>
              )}
              
              <div className={`w-20 h-20 flex items-center justify-center mb-12 border transition-all duration-500 ${
                service.highlight 
                  ? 'bg-industrial-900/80 border-accent-500/50 text-accent-500 group-hover:bg-accent-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(255,77,0,0.3)]' 
                  : 'bg-industrial-800/80 border-industrial-700 text-industrial-400 group-hover:bg-industrial-700 group-hover:text-white group-hover:border-industrial-500'
              }`}>
                <service.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">{service.title}</h2>
              <p className="text-industrial-400 mb-12 flex-grow leading-relaxed font-light text-lg">
                {service.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-industrial-800/50 flex items-center justify-between">
                <span className="text-2xl font-mono text-white tracking-wider font-bold">{service.price}</span>
                <Link 
                  to={`/services/${service.id}`}
                  className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    service.highlight ? 'text-accent-500 hover:text-accent-400' : 'text-industrial-300 hover:text-white'
                  }`}
                >
                  Подробнее <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
