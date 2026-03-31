import { motion } from 'motion/react';
import { LayoutTemplate, Monitor, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Редизайн лендингов',
    subtitle: 'Для производств и заводов',
    description: 'Обновляем одностраничные сайты так, чтобы они ясно презентовали компанию, направление, продукт или услугу и с первого экрана создавали ощущение серьёзного бизнеса.',
    link: '/services/landing',
    tags: ['UX/UI Дизайн', 'Копирайтинг', 'Верстка']
  },
  {
    icon: Monitor,
    title: 'Корпоративные сайты',
    subtitle: 'Глубокая переработка',
    description: 'Перерабатываем устаревшие сайты промышленных компаний: улучшаем структуру, подачу, визуальный уровень и удобство восприятия сложной технической информации.',
    link: '/services/corporate',
    tags: ['Аналитика', 'Прототипирование', 'CMS']
  },
  {
    icon: Code2,
    title: 'Разработка с нуля',
    subtitle: 'Комплексные решения',
    description: 'Создаём сайты для производственных компаний с чистого листа, проектируя масштабируемую архитектуру и закладывая фундамент для будущего роста и SEO.',
    link: '/services/new',
    tags: ['Архитектура', 'Frontend', 'Backend']
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-40 bg-industrial-950 border-t border-industrial-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 relative z-10">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900 border border-industrial-800 text-industrial-400 text-xs font-mono mb-8 uppercase tracking-widest">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Наши компетенции
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                Что мы <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">делаем</span>
              </h2>
              <p className="text-xl text-industrial-400 leading-relaxed font-light mb-12">
                Решаем задачи любого масштаба — от посадочной страницы под конкретный станок до многостраничного портала завода.
              </p>
              
              <div className="hidden lg:flex items-center gap-4 text-industrial-500 font-mono text-sm uppercase tracking-widest">
                <span className="w-12 h-px bg-industrial-800" />
                Скролльте вниз
              </div>
            </div>
          </div>

          {/* Scrollable Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-6 md:gap-8 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-industrial-900/40 backdrop-blur-md border border-industrial-800 p-8 md:p-12 hover:bg-industrial-900/80 hover:border-industrial-600 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Large Background Number */}
                <div className="absolute -right-4 -bottom-8 text-[180px] font-bold font-mono text-industrial-800/30 group-hover:text-industrial-700/30 transition-colors duration-500 pointer-events-none select-none leading-none">
                  0{index + 1}
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                  {/* Icon Container */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 bg-industrial-950 border border-industrial-800 flex items-center justify-center group-hover:border-accent-500/50 group-hover:shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all duration-500">
                      <service.icon className="w-10 h-10 text-industrial-500 group-hover:text-accent-500 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-accent-500 font-mono text-sm font-bold tracking-widest">0{index + 1} //</span>
                      <span className="text-industrial-500 font-mono text-sm uppercase tracking-widest">{service.subtitle}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 group-hover:text-accent-50 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-industrial-400 leading-relaxed font-light mb-8">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-industrial-950 border border-industrial-800 text-xs font-mono text-industrial-400 uppercase tracking-wider group-hover:border-industrial-700 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="mt-auto inline-flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-white group-hover:text-accent-400 transition-colors w-fit"
                    >
                      <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full border border-industrial-700 group-hover:border-accent-500/50 bg-industrial-900 transition-colors duration-300">
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
    </section>
  );
}
