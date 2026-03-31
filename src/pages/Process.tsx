import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Search, Network, FileText, Palette, Code2, Blocks, CheckSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Погружение в бизнес',
    duration: '1-2 недели',
    description: 'Изучаем вашу компанию, текущее состояние сайта, специфику продукта, конкурентов и логику, по которой клиент выбирает подрядчика или поставщика. На этом этапе определяем, что именно мешает нынешнему сайту работать сильнее.',
    deliverables: ['Бриф', 'Анализ конкурентов', 'Стратегия']
  },
  {
    icon: Network,
    title: 'Структура и логика',
    duration: '1-2 недели',
    description: 'Проектируем будущую структуру сайта: какие разделы нужны, в каком порядке подавать информацию, как показать преимущества, кейсы, направления, процессы и точки контакта. Продумываем путь посетителя от первого экрана до заявки.',
    deliverables: ['Карта сайта', 'Wireframes', 'User Flow']
  },
  {
    icon: FileText,
    title: 'Смыслы и тексты',
    duration: '2-3 недели',
    description: 'Переписываем подачу так, чтобы сайт говорил с клиентом понятным языком: без перегруза, без сухой канцелярщины и без пустых обещаний. Помогаем ясно объяснить, чем вы занимаетесь, в чём ваша сила и почему вам можно доверять.',
    deliverables: ['Копирайтинг', 'УТП', 'Слоган']
  },
  {
    icon: Palette,
    title: 'Дизайн',
    duration: '3-4 недели',
    description: 'Создаём новый визуальный стиль сайта под задачи компании. Делаем дизайн современным, строгим и собранным, чтобы он усиливал восприятие бизнеса, а не отвлекал от сути.',
    deliverables: ['UI-кит', 'Дизайн-макеты', 'Адаптив']
  },
  {
    icon: Code2,
    title: 'Разработка',
    duration: '4-6 недель',
    description: 'Аккуратно собираем сайт, адаптируем под мобильные устройства, следим за скоростью загрузки и качеством реализации. На выходе вы получаете не только дизайн в макете, а готовый рабочий инструмент.',
    deliverables: ['Верстка', 'Frontend', 'Backend/CMS']
  },
  {
    icon: Blocks,
    title: 'Интеграции и формы',
    duration: '1-2 недели',
    description: 'Подключаем формы заявок, аналитику, мессенджеры и, если нужно, CRM или другие сервисы, чтобы сайт был встроен в ваши бизнес-процессы, а не существовал отдельно от них.',
    deliverables: ['CRM', 'Аналитика', 'API']
  },
  {
    icon: CheckSquare,
    title: 'Проверка перед запуском',
    duration: '1 неделя',
    description: 'Тестируем сайт на разных устройствах и в популярных браузерах, проверяем формы, адаптивность, кликабельность и ключевые сценарии, чтобы исключить технические ошибки до релиза.',
    deliverables: ['QA-отчет', 'Багфикс', 'Оптимизация']
  },
  {
    icon: Rocket,
    title: 'Запуск',
    duration: '1-2 дня',
    description: 'Публикуем сайт, подключаем домен и SSL, проверяем финальную работу и передаём вам доступы к готовому проекту.',
    deliverables: ['Релиз', 'Доступы', 'Инструкция']
  }
];

function ProcessStep({ step, index }: { step: typeof steps[0], index: number }) {
  const iconRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["center center", "end center"]
  });
  const [isLit, setIsLit] = useState(false);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsLit(latest > 0);
  });

  return (
    <div className="relative flex flex-col md:flex-row gap-8 md:gap-20 group">
      {/* Icon / Number */}
      <div className="relative z-10 flex items-start md:items-center gap-6 md:w-[100px] shrink-0">
        <div ref={iconRef} className={`w-16 h-16 md:w-24 md:h-24 bg-industrial-900 border-4 flex items-center justify-center shrink-0 transition-all duration-300 rounded-full ${isLit ? 'border-accent-500 shadow-[0_0_40px_rgba(255,77,0,0.3)]' : 'border-industrial-800'}`}>
          <step.icon className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ${isLit ? 'text-accent-500 scale-110' : 'text-industrial-600'}`} />
        </div>
        <div className={`md:hidden text-5xl font-bold font-mono tracking-tighter transition-colors duration-300 ${isLit ? 'text-accent-500/50' : 'text-industrial-800'}`}>
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-grow bg-industrial-900/50 backdrop-blur-md border p-8 md:p-16 transition-colors duration-300 relative overflow-hidden shadow-xl shadow-black/20 ${isLit ? 'border-industrial-500' : 'border-industrial-800'}`}
      >
        <div className={`absolute top-0 right-0 text-[100px] md:text-[180px] font-bold font-mono leading-none -mt-6 -mr-6 md:-mt-12 md:-mr-12 select-none pointer-events-none hidden md:block transition-colors duration-300 ${isLit ? 'text-industrial-800/40' : 'text-industrial-800/20'}`}>
          0{index + 1}
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-300 ${isLit ? 'text-white' : 'text-industrial-400'}`}>{step.title}</h3>
            <span className={`inline-block px-4 py-2 bg-industrial-800/80 text-sm font-mono uppercase tracking-widest w-fit border shadow-lg transition-colors duration-300 ${isLit ? 'text-accent-500 border-accent-500/30' : 'text-industrial-500 border-industrial-700/50'}`}>
              {step.duration}
            </span>
          </div>
          
          <p className={`text-lg sm:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl font-light transition-colors duration-300 ${isLit ? 'text-industrial-300' : 'text-industrial-500'}`}>
            {step.description}
          </p>

          <div>
            <div className={`text-sm font-mono mb-6 uppercase tracking-widest flex items-center gap-4 font-bold transition-colors duration-300 ${isLit ? 'text-industrial-400' : 'text-industrial-600'}`}>
              <span className={`w-8 h-px transition-colors duration-300 ${isLit ? 'bg-accent-500' : 'bg-industrial-700'}`}></span>
              Результат этапа
            </div>
            <ul className="flex flex-wrap gap-4">
              {step.deliverables.map((item, i) => (
                <li key={i} className={`px-5 py-2.5 bg-industrial-800/50 border text-sm font-medium tracking-wide transition-colors duration-300 ${isLit ? 'border-industrial-600 text-industrial-200' : 'border-industrial-700 text-industrial-500'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Как мы работаем
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Прозрачный процесс <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">без сюрпризов</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Разработка сложного B2B-сайта — это инженерная задача. Мы разбили её на понятные этапы, где каждый шаг завершается конкретным артефактом, который вы можете оценить.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Background Vertical Line */}
          <div className="hidden md:block absolute left-[48px] top-0 bottom-0 w-1 bg-industrial-800/50 rounded-full" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            className="hidden md:block absolute left-[48px] top-0 bottom-0 w-1 bg-gradient-to-b from-accent-500 to-accent-600 origin-top rounded-full shadow-[0_0_15px_rgba(255,77,0,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
