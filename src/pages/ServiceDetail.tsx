import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceData = {
  'landing': {
    title: 'Редизайн лендинга для производства',
    subtitle: 'Подходит, если нужен современный одностраничный сайт для компании, направления, продукта или услуги.',
    description: 'Такой формат помогает быстро привести подачу в порядок, усилить первое впечатление и ясно объяснить клиенту, чем вы занимаетесь.',
    price: 'от 150 000 ₽',
    time: 'от 20 дней',
    includes: [
      'Анализ текущего сайта и подачи',
      'Обновление структуры страницы',
      'Переработка смыслов и ключевых блоков',
      'Новый визуальный стиль',
      'Адаптация под мобильные устройства',
      'Разработка и запуск'
    ]
  },
  'corporate': {
    title: 'Редизайн корпоративного сайта',
    subtitle: 'Подходит, если у компании уже есть сайт, но он устарел визуально, неудобен по структуре и не отражает возможности бизнеса.',
    description: 'Это более глубокая переработка: со структурой, подачей, страницами и логикой сайта в целом. Мы приводим сайт в соответствие с реальным уровнем вашей компании.',
    price: 'от 350 000 ₽',
    time: 'от 45 дней',
    includes: [
      'Анализ текущего сайта, компании и конкурентов',
      'Переработка структуры и логики сайта',
      'Обновление ключевых текстов и подачи',
      'Индивидуальный дизайн основных и внутренних страниц',
      'Адаптация под все устройства',
      'Разработка, тестирование и запуск'
    ]
  },
  'new': {
    title: 'Разработка сайта с нуля',
    subtitle: 'Подходит, если сайта ещё нет или текущий ресурс настолько устарел, что проще создать новый с чистого листа.',
    description: 'Такой формат позволяет сразу выстроить правильную структуру, сильную подачу и современный визуальный уровень без ограничений старого сайта.',
    price: 'от 450 000 ₽',
    time: 'от 60 дней',
    includes: [
      'Исследование компании, продукта и конкурентов',
      'Проектирование структуры сайта с нуля',
      'Разработка смыслов, текстов и логики подачи',
      'Индивидуальный дизайн всех ключевых страниц',
      'Адаптация под мобильные устройства',
      'Разработка, тестирование и запуск',
      'Подключение форм, аналитики и базовых интеграций'
    ]
  }
};

export function ServiceDetail() {
  const { id } = useParams<{ id: keyof typeof serviceData }>();
  const service = id && serviceData[id] ? serviceData[id] : serviceData['corporate'];

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-industrial-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Все услуги
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {service.title}
        </h1>
        
        <p className="text-xl text-industrial-300 mb-6 leading-relaxed font-medium">
          {service.subtitle}
        </p>
        
        <p className="text-lg text-industrial-400 mb-12 leading-relaxed">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-industrial-800 border border-industrial-700 p-6">
            <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-wider">Стоимость</div>
            <div className="text-3xl font-bold text-white">{service.price}</div>
            <div className="text-sm text-industrial-400 mt-2">Точная смета после аудита</div>
          </div>
          <div className="bg-industrial-800 border border-industrial-700 p-6">
            <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-wider">Сроки</div>
            <div className="text-3xl font-bold text-white">{service.time}</div>
            <div className="text-sm text-industrial-400 mt-2">С поэтапной сдачей работ</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">Что входит в работу:</h2>
        <div className="bg-industrial-900 border border-industrial-800 p-8 mb-16">
          <ul className="flex flex-col gap-4">
            {service.includes.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0" />
                <span className="text-industrial-200 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-industrial-800 border-l-4 border-accent-500 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Готовы обсудить вашу задачу?</h3>
            <p className="text-industrial-400">
              Оставьте заявку. Мы изучим ваш текущий сайт или материалы и предложим оптимальный план действий.
            </p>
          </div>
          <Link 
            to="/contacts" 
            className="shrink-0 bg-accent-500 text-white px-8 py-4 text-base font-semibold hover:bg-accent-600 transition-colors flex items-center gap-2"
          >
            Оставить заявку <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
