import { motion } from 'motion/react';
import { LayoutTemplate, Monitor, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Редизайн лендингов для производств',
    description: 'Обновляем одностраничные сайты так, чтобы они ясно презентовали компанию, направление, продукт или услугу и с первого экрана создавали ощущение серьёзного бизнеса.',
    link: '/services/landing'
  },
  {
    icon: Monitor,
    title: 'Редизайн корпоративных сайтов',
    description: 'Перерабатываем устаревшие сайты заводов, промышленных компаний и производственных предприятий: улучшаем структуру, подачу, визуальный уровень и удобство восприятия.',
    link: '/services/corporate'
  },
  {
    icon: Code2,
    title: 'Разработка сайтов с нуля',
    description: 'Создаём сайты для производственных компаний с чистого листа, если текущий ресурс отсутствует или его проще сделать заново, чем дорабатывать.',
    link: '/services/new'
  }
];

export function Services() {
  return (
    <section className="py-32 bg-industrial-900 border-t border-industrial-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Услуги
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Что мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">делаем</span>
          </h2>
          <p className="text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Решаем задачи любого масштаба — от посадочной страницы под конкретный станок до многостраничного портала завода.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-industrial-800/30 backdrop-blur-sm border border-industrial-700/50 p-10 hover:bg-industrial-800/80 hover:border-accent-500/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-500/20 transition-colors duration-500" />
              
              <div className="w-16 h-16 bg-industrial-900/80 border border-industrial-700 flex items-center justify-center mb-10 group-hover:border-accent-500/50 group-hover:shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-all duration-500 relative z-10">
                <service.icon className="w-8 h-8 text-industrial-400 group-hover:text-accent-500 group-hover:scale-110 transition-all duration-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10">{service.title}</h3>
              <p className="text-lg text-industrial-400 mb-10 flex-grow leading-relaxed font-light relative z-10">
                {service.description}
              </p>
              
              <Link 
                to={service.link}
                className="inline-flex items-center gap-3 text-base font-semibold text-white group-hover:text-accent-400 transition-colors mt-auto relative z-10 uppercase tracking-wider"
              >
                Подробнее <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
