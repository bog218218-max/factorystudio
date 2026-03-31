import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, AppWindow, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

const services = [
  {
    id: 'landing',
    icon: AppWindow,
    title: 'Редизайн лендингов',
    subtitle: 'Для производств и заводов',
    description: 'Обновляем одностраничные сайты так, чтобы они ясно презентовали компанию, направление, продукт или услугу и с первого экрана создавали ощущение серьёзного бизнеса.',
    price: 'от 150 000 ₽',
    features: ['Анализ конкурентов', 'Прототипирование', 'UX/UI дизайн', 'Верстка и интеграция']
  },
  {
    id: 'corporate',
    icon: Globe,
    title: 'Корпоративные сайты',
    subtitle: 'Глубокая переработка',
    description: 'Перерабатываем устаревшие сайты заводов, промышленных компаний и производственных предприятий: улучшаем структуру, подачу, визуальный уровень и удобство восприятия.',
    price: 'от 350 000 ₽',
    highlight: true,
    features: ['Аудит текущего сайта', 'Проектирование структуры', 'Дизайн-система', 'Сложные интеграции']
  },
  {
    id: 'new',
    icon: Cpu,
    title: 'Разработка с нуля',
    subtitle: 'Комплексные решения',
    description: 'Создаём сайты для производственных компаний с чистого листа, если текущий ресурс отсутствует или его проще сделать заново, чем дорабатывать.',
    price: 'от 450 000 ₽',
    features: ['Бизнес-аналитика', 'Архитектура проекта', 'Frontend & Backend', 'SEO-оптимизация']
  }
];

export function Services() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden bg-industrial-950">
      <SEO 
        title="Услуги и форматы работы | МАНУФАКТУРА"
        description="Разработка и редизайн сайтов для промышленных компаний."
      />
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900 border border-industrial-800 text-industrial-400 text-xs font-mono mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Что мы делаем
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Услуги и форматы <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">работы</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Работаем с двумя основными сценариями: когда сайт нужно аккуратно переработать и когда его разумнее сделать заново.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 md:p-12 border transition-all duration-500 overflow-hidden ${
                service.highlight 
                  ? 'bg-industrial-900/80 border-accent-500/30 shadow-[0_0_40px_rgba(255,77,0,0.05)] backdrop-blur-md hover:border-accent-500/60 hover:shadow-[0_0_60px_rgba(255,77,0,0.1)]' 
                  : 'bg-industrial-900/40 border-industrial-800 hover:border-industrial-600 hover:bg-industrial-900/80 backdrop-blur-sm'
              }`}
            >
              {/* Large Background Number */}
              <div className="absolute -right-4 -bottom-8 md:-right-8 md:-bottom-12 text-[120px] md:text-[240px] font-bold font-mono text-industrial-800/20 group-hover:text-industrial-700/20 transition-colors duration-500 pointer-events-none select-none leading-none z-0">
                0{index + 1}
              </div>

              {service.highlight && (
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-mono px-6 py-2 uppercase tracking-widest shadow-lg shadow-accent-500/20 z-20">
                  Частый запрос
                </div>
              )}
              
              {/* Left Column: Icon & Title */}
              <div className="lg:w-1/3 flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-accent-500 font-mono text-sm font-bold tracking-widest">0{index + 1} //</span>
                  <span className="text-industrial-500 font-mono text-sm uppercase tracking-widest">{service.subtitle}</span>
                </div>

                <div className={`w-24 h-24 flex items-center justify-center mb-8 border transition-all duration-500 ${
                  service.highlight 
                    ? 'bg-industrial-950 border-accent-500/50 text-accent-500 group-hover:shadow-[0_0_30px_rgba(255,77,0,0.3)]' 
                    : 'bg-industrial-950 border-industrial-800 text-industrial-400 group-hover:border-industrial-600 group-hover:text-white'
                }`}>
                  <service.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-accent-50 transition-colors">{service.title}</h2>
              </div>
              
              {/* Right Column: Description, Features, Price, CTA */}
              <div className="lg:w-2/3 flex flex-col relative z-10">
                <p className="text-industrial-400 mb-8 md:mb-10 leading-relaxed font-light text-lg sm:text-xl max-w-3xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-industrial-300">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-8 border-t border-industrial-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="text-industrial-500 font-mono text-xs uppercase tracking-widest mb-2">Стоимость</div>
                    <span className="text-2xl sm:text-3xl font-mono text-white tracking-wider font-bold">{service.price}</span>
                  </div>
                  
                  <Link 
                    to={`/services/${service.id}`}
                    className={`inline-flex items-center gap-4 text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${
                      service.highlight ? 'text-accent-500 hover:text-accent-400' : 'text-white hover:text-accent-400'
                    }`}
                  >
                    <span className={`relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-300 ${
                      service.highlight ? 'border-accent-500/50 bg-industrial-900' : 'border-industrial-700 group-hover:border-accent-500/50 bg-industrial-900'
                    }`}>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    Подробнее об услуге
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
