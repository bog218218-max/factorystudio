import { motion } from 'motion/react';

const reasons = [
  {
    num: '01',
    title: 'Специализируемся на производственной нише',
    desc: 'Понимаем, что здесь важны не модные эффекты сами по себе, а доверие, серьёзная подача, понятная структура и ощущение надёжности компании.'
  },
  {
    num: '02',
    title: 'Сайт должен не украшать, а усиливать бизнес',
    desc: 'Мы не просто «освежаем дизайн», а помогаем привести сайт в соответствие с реальным уровнем вашей компании, чтобы его было не стыдно показывать клиентам, партнёрам и подрядчикам.'
  },
  {
    num: '03',
    title: 'Понятная подача сложного бизнеса',
    desc: 'Умеем структурировать информацию о производстве так, чтобы посетитель быстро понял, чем занимается компания, какие задачи решает и почему стоит обратиться именно к вам.'
  },
  {
    num: '04',
    title: 'Современный визуальный уровень',
    desc: 'Делаем сайты, которые выглядят актуально, чисто и уверенно — заметно сильнее большинства сайтов в промышленной сфере.'
  },
  {
    num: '05',
    title: 'Фиксированная стоимость и понятный процесс',
    desc: 'Согласовываем объём работ и бюджет до старта. Без бесконечных доплат и хаоса по ходу проекта.'
  },
  {
    num: '06',
    title: 'Поддержка после запуска',
    desc: 'После релиза остаёмся на связи 30 дней: помогаем с небольшими правками, вопросами и стабильной работой сайта.'
  }
];

export function WhyUs() {
  return (
    <section className="py-32 bg-industrial-900 border-t border-industrial-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Преимущества
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                Почему <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">мы</span>
              </h2>
              <p className="text-xl text-industrial-400 leading-relaxed font-light">
                Мы делаем сайты для бизнеса, а не для конкурсов дизайна. Наш фокус — конверсия, статус и доверие ваших B2B-клиентов.
              </p>
            </div>
          </div>

          {/* Right Column: Spacious List */}
          <div className="lg:col-span-7 flex flex-col">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-industrial-800/50 py-12 first:pt-0 last:border-0"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                  <div className="text-2xl font-mono text-industrial-600 group-hover:text-accent-500 transition-colors duration-500 shrink-0 mt-1">
                    {reason.num}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-400 transition-colors duration-500">
                      {reason.title}
                    </h3>
                    <p className="text-lg text-industrial-400 leading-relaxed font-light">
                      {reason.desc}
                    </p>
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
