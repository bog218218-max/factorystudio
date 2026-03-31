import { motion } from 'motion/react';

const steps = [
  {
    title: 'Погружение в бизнес',
    desc: 'Изучаем вашу компанию, текущее состояние сайта, специфику продукта, конкурентов и логику, по которой клиент выбирает подрядчика или поставщика. На этом этапе определяем, что именно мешает нынешнему сайту работать сильнее.'
  },
  {
    title: 'Структура и логика',
    desc: 'Проектируем будущую структуру сайта: какие разделы нужны, в каком порядке подавать информацию, как показать преимущества, кейсы, направления, процессы и точки контакта. Продумываем путь посетителя от первого экрана до заявки.'
  },
  {
    title: 'Смыслы и тексты',
    desc: 'Переписываем подачу так, чтобы сайт говорил с клиентом понятным языком: без перегруза, без сухой канцелярщины и без пустых обещаний. Помогаем ясно объяснить, чем вы занимаетесь, в чём ваша сила и почему вам можно доверять.'
  },
  {
    title: 'Дизайн',
    desc: 'Создаём новый визуальный стиль сайта под задачи компании. Делаем дизайн современным, строгим и собранным, чтобы он усиливал восприятие бизнеса, а не отвлекал от сути.'
  },
  {
    title: 'Разработка',
    desc: 'Аккуратно собираем сайт, адаптируем под мобильные устройства, следим за скоростью загрузки и качеством реализации. На выходе вы получаете не только дизайн в макете, а готовый рабочий инструмент.'
  },
  {
    title: 'Интеграции и формы',
    desc: 'Подключаем формы заявок, аналитику, мессенджеры и, если нужно, CRM или другие сервисы, чтобы сайт был встроен в ваши бизнес-процессы, а не существовал отдельно от них.'
  },
  {
    title: 'Проверка перед запуском',
    desc: 'Тестируем сайт на разных устройствах и в популярных браузерах, проверяем формы, адаптивность, кликабельность и ключевые сценарии, чтобы исключить технические ошибки до релиза.'
  },
  {
    title: 'Запуск',
    desc: 'Публикуем сайт, подключаем домен и SSL, проверяем финальную работу и передаём вам доступы к готовому проекту.'
  }
];

export function Process() {
  return (
    <section className="py-32 bg-industrial-800 border-t border-industrial-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Процесс
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Этапы <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">работы</span>
          </h2>
          <p className="text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Работаем по четкому алгоритму, без хаоса. Вы всегда знаете, на каком этапе находится проект и что будет дальше.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-[39px] top-0 bottom-0 w-[2px] bg-industrial-700/50" />
          
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 md:pl-32 group"
              >
                {/* Node */}
                <div className="absolute left-0 md:left-[16px] top-1 w-[48px] h-[48px] rounded-full bg-industrial-900 border-2 border-industrial-600 flex items-center justify-center z-10 group-hover:border-accent-500 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.3)] transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-industrial-600 group-hover:bg-accent-500 transition-colors duration-500" />
                </div>
                
                <div className="text-sm font-mono text-accent-500 mb-4 tracking-widest">Этап 0{index + 1}</div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                <p className="text-lg text-industrial-400 leading-relaxed font-light max-w-3xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
