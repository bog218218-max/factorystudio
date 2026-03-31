import { motion } from 'motion/react';
import { ClipboardList, PenTool, LayoutTemplate, Code2, Rocket, Wrench } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Аудит и брифинг',
    duration: '1-2 недели',
    description: 'Погружаемся в ваш бизнес. Изучаем текущий сайт, анализируем конкурентов, собираем требования и определяем ключевые задачи нового ресурса.',
    deliverables: ['Бриф', 'Аналитическая записка', 'Оценка сроков и бюджета']
  },
  {
    icon: PenTool,
    title: 'Проектирование структуры',
    duration: '2-3 недели',
    description: 'Разрабатываем логику сайта. Создаем интерактивные прототипы всех ключевых страниц, чтобы согласовать расположение блоков и путь пользователя до начала дизайна.',
    deliverables: ['Интерактивный прототип (Wireframes)', 'Карта сайта', 'Структура контента']
  },
  {
    icon: LayoutTemplate,
    title: 'Дизайн-концепция',
    duration: '3-4 недели',
    description: 'Отрисовываем визуальную часть. Сначала утверждаем концепцию на главной странице, затем масштабируем стиль на все внутренние страницы и адаптируем под мобильные устройства.',
    deliverables: ['UI-кит', 'Дизайн-макеты всех страниц', 'Адаптивные версии']
  },
  {
    icon: Code2,
    title: 'Верстка и программирование',
    duration: '4-6 недель',
    description: 'Переносим дизайн в код. Настраиваем анимации, подключаем систему управления контентом (CMS), интегрируем формы заявок и сторонние сервисы (CRM, аналитика).',
    deliverables: ['Рабочий сайт на тестовом домене', 'Настроенная CMS', 'Интеграции']
  },
  {
    icon: Rocket,
    title: 'Тестирование и запуск',
    duration: '1 неделя',
    description: 'Проверяем сайт на всех устройствах и браузех. Тестируем формы, скорость загрузки и базовое SEO. После успешных тестов переносим сайт на ваш боевой домен.',
    deliverables: ['Опубликованный сайт', 'Базовая SEO-оптимизация', 'Инструкция по управлению']
  },
  {
    icon: Wrench,
    title: 'Поддержка и развитие',
    duration: 'Постоянно',
    description: 'Не бросаем проект после запуска. Берем сайт на техническое обслуживание, следим за стабильностью, вносим правки и развиваем функционал по мере роста ваших задач.',
    deliverables: ['Техническая поддержка', 'Резервное копирование', 'Доработка функционала']
  }
];

export function Process() {
  return (
    <div className="pt-12 pb-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Как мы работаем
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Прозрачный процесс <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">без сюрпризов</span>
          </h1>
          <p className="text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Разработка сложного B2B-сайта — это инженерная задача. Мы разбили её на понятные этапы, где каждый шаг завершается конкретным артефактом, который вы можете оценить.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[48px] top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500/50 via-industrial-800 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-20 group"
              >
                {/* Icon / Number */}
                <div className="relative z-10 flex items-start md:items-center gap-6 md:w-[100px] shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-industrial-900 border-4 border-industrial-800 flex items-center justify-center shrink-0 group-hover:border-accent-500/50 group-hover:shadow-[0_0_40px_rgba(255,77,0,0.3)] transition-all duration-500 rounded-full">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="md:hidden text-5xl font-bold text-industrial-800 font-mono tracking-tighter">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-industrial-900/50 backdrop-blur-md border border-industrial-800 p-8 md:p-16 hover:border-industrial-600 transition-colors duration-500 relative overflow-hidden shadow-xl shadow-black/20">
                  <div className="absolute top-0 right-0 text-[180px] font-bold text-industrial-800/20 font-mono leading-none -mt-12 -mr-12 select-none pointer-events-none hidden md:block group-hover:text-industrial-800/40 transition-colors duration-500">
                    0{index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{step.title}</h3>
                      <span className="inline-block px-4 py-2 bg-industrial-800/80 text-accent-500 text-sm font-mono uppercase tracking-widest w-fit border border-industrial-700/50 shadow-lg">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-industrial-400 text-xl leading-relaxed mb-12 max-w-3xl font-light">
                      {step.description}
                    </p>

                    <div>
                      <div className="text-sm font-mono text-industrial-500 mb-6 uppercase tracking-widest flex items-center gap-4 font-bold">
                        <span className="w-8 h-px bg-industrial-700"></span>
                        Результат этапа
                      </div>
                      <ul className="flex flex-wrap gap-4">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="px-5 py-2.5 bg-industrial-800/50 border border-industrial-700 text-industrial-300 text-sm font-medium tracking-wide hover:bg-industrial-800 hover:text-white transition-colors duration-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
