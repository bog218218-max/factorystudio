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
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["center center", "end center"]
  });
  const [isLit, setIsLit] = useState(false);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsLit(latest > 0);
  });

  return (
    <div className="relative pl-16 md:pl-32 group">
      {/* Node */}
      <div ref={circleRef} className={`absolute left-0 md:left-[16px] top-1 w-[48px] h-[48px] rounded-full bg-industrial-900 border-2 flex items-center justify-center z-10 transition-all duration-300 ${isLit ? 'border-accent-500 shadow-[0_0_20px_rgba(255,77,0,0.3)]' : 'border-industrial-600'}`}>
        <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isLit ? 'bg-accent-500' : 'bg-industrial-600'}`} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`text-sm font-mono tracking-widest transition-colors duration-300 ${isLit ? 'text-accent-500' : 'text-industrial-500'}`}>Этап 0{index + 1}</div>
          <span className={`px-3 py-1 text-xs font-mono uppercase tracking-widest border transition-colors duration-300 ${isLit ? 'border-accent-500/30 text-accent-500 bg-accent-500/5' : 'border-industrial-700 text-industrial-500 bg-industrial-800/50'}`}>
            {step.duration}
          </span>
        </div>

        <h3 className={`text-2xl sm:text-3xl font-bold mb-4 md:mb-6 tracking-tight transition-colors duration-300 flex items-center gap-4 ${isLit ? 'text-white' : 'text-industrial-400'}`}>
          <step.icon className={`w-8 h-8 transition-colors duration-300 ${isLit ? 'text-accent-500' : 'text-industrial-600'}`} />
          {step.title}
        </h3>
        
        <p className={`text-base sm:text-lg leading-relaxed font-light max-w-3xl mb-6 md:mb-8 transition-colors duration-300 ${isLit ? 'text-industrial-300' : 'text-industrial-500'}`}>
          {step.description}
        </p>

        <div>
          <div className={`text-xs font-mono mb-4 uppercase tracking-widest flex items-center gap-4 font-bold transition-colors duration-300 ${isLit ? 'text-industrial-400' : 'text-industrial-600'}`}>
            <span className={`w-6 h-px transition-colors duration-300 ${isLit ? 'bg-accent-500' : 'bg-industrial-700'}`}></span>
            Результат
          </div>
          <ul className="flex flex-wrap gap-3">
            {step.deliverables.map((item, i) => (
              <li key={i} className={`px-4 py-2 border text-xs font-medium tracking-wide transition-colors duration-300 ${isLit ? 'bg-industrial-800/80 border-industrial-600 text-industrial-200' : 'bg-industrial-900/50 border-industrial-800 text-industrial-500'}`}>
                {item}
              </li>
            ))}
          </ul>
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
    <section className="py-16 md:py-32 bg-industrial-800 border-t border-industrial-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-900/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Процесс
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Этапы <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">работы</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Работаем по четкому алгоритму, без хаоса. Вы всегда знаете, на каком этапе находится проект и что будет дальше.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Background Vertical Line */}
          <div className="absolute left-[23px] md:left-[39px] top-0 bottom-0 w-[2px] bg-industrial-700/50" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            className="absolute left-[23px] md:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-500 to-accent-600 origin-top shadow-[0_0_15px_rgba(255,77,0,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />
          
          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
