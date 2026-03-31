import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';

export function ProjectDetail() {
  const { id } = useParams();

  // В реальном проекте данные будут загружаться по ID. Здесь используем мок-данные.
  const project = {
    title: 'Завод металлоконструкций «СтальПром»',
    category: 'Металлообработка',
    type: 'Редизайн корпоративного сайта',
    duration: '45 дней',
    beforeImage: 'https://picsum.photos/seed/old-site/1200/800?blur=2&grayscale',
    afterImage: 'https://picsum.photos/seed/new-site/1200/800',
    task: 'Старый сайт был сделан в 2012 году. Он не адаптировался под мобильные устройства, каталог продукции был запутанным, а фотографии производства выглядели некачественно. Из-за этого компания теряла крупных B2B-заказчиков, которые оценивали надежность подрядчика по его сайту.',
    solution: 'Мы полностью переработали структуру: вынесли ключевые производственные мощности на первый экран, оцифровали каталог из 300+ позиций в удобные таблицы с фильтрами, и добавили блок с реализованными объектами для социального доказательства.',
    results: [
      'Конверсия из посетителя в заявку выросла на 42%',
      'Время нахождения на сайте увеличилось в 2.5 раза',
      'Снизилась нагрузка на менеджеров (клиенты сами находят нужные ГОСТы в каталоге)'
    ]
  };

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-industrial-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Вернуться к проектам
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-industrial-800 border border-industrial-700 text-xs font-mono text-accent-500 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-sm text-industrial-400">{project.type}</span>
            <span className="w-1 h-1 rounded-full bg-industrial-600" />
            <span className="text-sm text-industrial-400">Срок: {project.duration}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-4xl">
            {project.title}
          </h1>
        </div>

        {/* Before / After Interactive Block */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8">Визуальное сравнение (До / После)</h2>
          <BeforeAfterSlider 
            beforeImage={project.beforeImage} 
            afterImage={project.afterImage} 
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-industrial-800 pb-4">Дано и Задача</h3>
            <p className="text-industrial-400 leading-relaxed">
              {project.task}
            </p>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-industrial-800 pb-4">Что мы сделали</h3>
            <p className="text-industrial-400 leading-relaxed mb-8">
              {project.solution}
            </p>
            
            <h4 className="text-lg font-bold text-white mb-4">Результаты в цифрах:</h4>
            <ul className="flex flex-col gap-3">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-3 text-industrial-300">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-industrial-800 border border-industrial-700 p-8 md:p-12 mb-24 relative">
          <div className="absolute top-8 left-8 text-6xl text-industrial-700 font-serif leading-none">"</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
              До редизайна сайт выглядел слабо и давно не отражал наш реальный уровень. После обновления подача стала гораздо серьёзнее: клиентам стало проще понять, чем мы занимаемся, а сайт теперь можно спокойно отправлять в качестве презентации компании крупным заказчикам.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-industrial-700 rounded-full flex items-center justify-center text-industrial-400 font-bold">
                АИ
              </div>
              <div>
                <div className="text-white font-bold">Алексей Иванов</div>
                <div className="text-sm text-industrial-400">Генеральный директор «СтальПром»</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-industrial-900 border border-industrial-800 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Хотите такой же результат для своего производства?</h2>
          <p className="text-industrial-400 mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы бесплатно разберём ваш текущий сайт, укажем на слабые места и предложим план редизайна.
          </p>
          <Link 
            to="/contacts" 
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 text-base font-semibold hover:bg-accent-600 transition-colors"
          >
            Получить разбор сайта <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
