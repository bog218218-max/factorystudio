import { SEO } from '../components/ui/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <SEO 
        title="Политика конфиденциальности | МАНУФАКТУРА"
        description="Политика обработки персональных данных компании МАНУФАКТУРА."
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/contacts" className="inline-flex items-center gap-2 text-sm font-medium text-industrial-400 hover:text-white transition-colors mb-8 md:mb-12">
          <ArrowLeft className="w-4 h-4" /> Назад к контактам
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12 tracking-tight uppercase">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-invert prose-industrial max-w-none">
          <p className="text-industrial-300 text-lg mb-8">
            Настоящая Политика конфиденциальности описывает, как ООО «Мануфактура Диджитал» (далее — «Оператор») собирает, использует и защищает персональные данные пользователей сайта.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Общие положения</h2>
          <p className="text-industrial-400 mb-4">
            1.1. Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных.
          </p>
          <p className="text-industrial-400 mb-4">
            1.2. В случае несогласия с этими условиями пользователь должен воздержаться от использования сайта.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Собираемые данные</h2>
          <p className="text-industrial-400 mb-4">
            В рамках настоящей Политики под «персональными данными пользователя» понимаются:
          </p>
          <ul className="list-disc pl-6 text-industrial-400 mb-8 space-y-2">
            <li>Персональная информация, которую пользователь предоставляет о себе самостоятельно при заполнении форм обратной связи (имя, телефон, email, название компании).</li>
            <li>Данные, которые автоматически передаются сервисам сайта в процессе их использования с помощью установленного на устройстве пользователя программного обеспечения (IP-адрес, данные файлов cookie, информация о браузере).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Цели обработки данных</h2>
          <p className="text-industrial-400 mb-4">
            Оператор собирает и хранит только те персональные данные, которые необходимы для предоставления сервисов или исполнения соглашений и договоров с пользователем, за исключением случаев, когда законодательством предусмотрено обязательное хранение персональной информации в течение определенного законом срока.
          </p>
          <p className="text-industrial-400 mb-4">
            Цели обработки:
          </p>
          <ul className="list-disc pl-6 text-industrial-400 mb-8 space-y-2">
            <li>Установление с пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта, оказания услуг.</li>
            <li>Улучшение качества сайта, удобства его использования, разработка новых услуг.</li>
            <li>Проведение статистических и иных исследований на основе обезличенных данных.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Защита информации</h2>
          <p className="text-industrial-400 mb-4">
            Оператор принимает необходимые и достаточные организационные и технические меры для защиты персональной информации пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ней третьих лиц.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Контакты</h2>
          <p className="text-industrial-400 mb-4">
            Все предложения или вопросы по поводу настоящей Политики конфиденциальности пользователь вправе направлять на электронный адрес: <a href="mailto:hello@manufactura.digital" className="text-accent-500 hover:underline">hello@manufactura.digital</a>.
          </p>
          
          <p className="text-industrial-500 text-sm mt-16 pt-8 border-t border-industrial-800">
            Дата последнего обновления: 15 мая 2024 г.
          </p>
        </div>
      </div>
    </div>
  );
}
