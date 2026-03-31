import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { siteConfig } from '../config/site';

const team = [
  { role: 'Менеджер проекта', desc: 'Ведёт проект целиком: собирает задачи, фиксирует договорённости, держит график и остаётся вашей основной точкой контакта.' },
  { role: 'Аналитик', desc: 'Погружается в бизнес, рынок и конкурентов, помогает определить сильные акценты и логику подачи компании на сайте.' },
  { role: 'UX/UI-дизайнер', desc: 'Отвечает за структуру, пользовательский путь и визуальную систему сайта. Делает интерфейс понятным и современным.' },
  { role: 'Копирайтер', desc: 'Помогает упаковать смыслы: переписывает тексты, заголовки, преимущества и описания так, чтобы сайт воспринимался яснее.' },
  { role: 'Разработчики', desc: 'Собирают сайт, настраивают адаптивность, формы, аналитику и техническую часть, чтобы проект работал стабильно.' },
  { role: 'Тестировщик', desc: 'Проверяет сайт перед запуском, чтобы пользователь сталкивался не с ошибками, а с аккуратным и рабочим продуктом.' }
];

export function About() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden">
      <SEO 
        title="О студии"
        description="Студия с фокусом на промышленность и B2B."
      />
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero */}
        <div className="mb-16 md:mb-32 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            О студии
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Студия с фокусом на <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">промышленность</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Мы не делаем сайты для барбершопов, инфобизнеса или крипто-стартапов. Наша специализация — заводы, производственные предприятия и B2B. Мы знаем, как упаковать сложный продукт так, чтобы он вызывал доверие у закупщиков и партнеров.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="aspect-square lg:aspect-auto h-[400px] lg:h-[600px] bg-industrial-900 border border-industrial-800 relative overflow-hidden group shadow-2xl shadow-black/50">
            <img 
              src="https://picsum.photos/seed/office/800/800?grayscale" 
              alt="Рабочий процесс" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-60"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12">
              <div className="mb-3 text-2xl font-bold uppercase tracking-tight text-white sm:mb-4 sm:text-4xl">Без воды и шаблонов</div>
              <div className="text-base font-light leading-relaxed text-industrial-400 sm:text-xl">Только факты, цифры и реальные возможности вашего бизнеса.</div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 tracking-tight uppercase">Наш подход</h2>
            <div className="flex flex-col gap-8">
              {[
                'Глубокое погружение в нишу клиента до отрисовки первого макета',
                'Отказ от "креатива ради креатива" в пользу конверсии и структуры',
                'Прозрачное ценообразование без скрытых платежей',
                'Соблюдение сроков за счет параллельной работы команды'
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-industrial-800/50 border border-industrial-700 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/50 transition-colors duration-500 shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-industrial-300 text-xl leading-snug font-light pt-2 group-hover:text-white transition-colors duration-300">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight uppercase">Команда проекта</h2>
          <p className="text-industrial-400 text-lg sm:text-xl max-w-3xl mb-12 md:mb-16 font-light leading-relaxed">
            Над каждым проектом работает не один человек, а слаженная команда специалистов. За счёт этого стратегия, структура, тексты, визуал и техническая часть собираются параллельно — проект идёт быстрее и получается сильнее.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-industrial-900/50 backdrop-blur-md border border-industrial-800 p-10 hover:border-industrial-600 hover:-translate-y-2 transition-all duration-500 group shadow-xl shadow-black/20"
              >
                <div className="text-accent-500 font-mono text-sm mb-6 uppercase tracking-widest flex items-center gap-4 font-bold">
                  <span className="w-6 h-px bg-accent-500/50 group-hover:w-12 transition-all duration-500"></span>
                  {member.role}
                </div>
                <p className="text-industrial-400 leading-relaxed text-lg font-light group-hover:text-industrial-300 transition-colors duration-300">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requisites / Trust */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-industrial-800/50 backdrop-blur-md border border-industrial-700 p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative overflow-hidden shadow-2xl shadow-black/50"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Официальный партнер</h3>
            <p className="text-industrial-400 text-lg font-light leading-relaxed max-w-xl">Работаем по договору, предоставляем все закрывающие документы (ЭДО).</p>
          </div>
          <div className="text-left md:text-right font-mono text-sm text-industrial-500 space-y-2 relative z-10">
            <p className="text-industrial-300 text-base font-bold tracking-wider">{siteConfig.legalName}</p>
            <p className="tracking-widest">ИНН: {siteConfig.legal.inn}</p>
            <p className="tracking-widest">ОГРН: {siteConfig.legal.ogrn}</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
