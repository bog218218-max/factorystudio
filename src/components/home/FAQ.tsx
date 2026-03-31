import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'С какими компаниями вы работаете?',
    a: 'Мы специализируемся на производственных компаниях, заводах, промышленных предприятиях и B2B-бизнесе, которым нужен сильный и современный сайт.'
  },
  {
    q: 'Вы делаете только новые сайты или можете переделать существующий?',
    a: 'Наш основной фокус — редизайн. Но если сайта нет совсем или его проще создать заново, чем переделывать, мы также берём проекты с разработкой с нуля.'
  },
  {
    q: 'Как понять, что сайту уже нужен редизайн?',
    a: 'Обычно это видно по нескольким признакам: сайт выглядит устаревшим, не адаптирован под телефон, перегружен, не вызывает доверия, неудобен по структуре или не отражает уровень компании.'
  },
  {
    q: 'Как проходит работа?',
    a: 'Мы последовательно проходим этапы погружения, проектирования структуры, переработки текстов, дизайна, разработки, тестирования и запуска. Ключевые решения согласовываются с вами по ходу проекта.'
  },
  {
    q: 'Кто готовит тексты и материалы?',
    a: 'Если у вас есть свои материалы, используем их как основу. Если информации недостаточно, помогаем структурировать её и готовим тексты под новый сайт.'
  },
  {
    q: 'Вы помогаете с доменом и хостингом?',
    a: 'Да, при необходимости помогаем с покупкой, настройкой и запуском. После завершения проекта все доступы передаются вам.'
  },
  {
    q: 'Можно ли вносить правки после запуска?',
    a: 'Да, в течение 30 дней после релиза помогаем с небольшими правками и уточнениями. Отдельные крупные доработки обсуждаются отдельно.'
  },
  {
    q: 'Кто владеет сайтом после завершения работ?',
    a: 'После завершения проекта сайт, доступы и материалы передаются вам. Проект не остаётся технически привязан к нам.'
  },
  {
    q: 'Что нужно, чтобы начать?',
    a: 'Достаточно оставить заявку, обсудить задачу, согласовать объём работ, сроки и бюджет. После этого подписываем договор и начинаем проект.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-industrial-900 border-t border-industrial-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            FAQ
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-[0.9] uppercase">
            Вопросы и <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">ответы</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={index} 
                className={`border ${isOpen ? 'border-accent-500/50 bg-industrial-800/80 shadow-[0_0_30px_rgba(255,77,0,0.1)]' : 'border-industrial-800 bg-industrial-900/50 hover:border-industrial-600'} transition-all duration-500 backdrop-blur-sm`}
              >
                <button
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-xl font-bold ${isOpen ? 'text-white' : 'text-industrial-300 group-hover:text-white'} transition-colors pr-8 tracking-tight`}>{faq.q}</span>
                  <span className={`shrink-0 w-10 h-10 flex items-center justify-center border ${isOpen ? 'border-accent-500 text-accent-500 bg-accent-500/10' : 'border-industrial-700 text-industrial-500 group-hover:border-industrial-500 group-hover:text-industrial-300'} transition-all duration-300`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-industrial-400 text-lg leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
