import { Link } from 'react-router-dom';
import { LogoMark } from '../ui/LogoMark';

export function Footer() {
  return (
    <footer className="bg-industrial-900 border-t border-industrial-800 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <LogoMark />
              <span className="font-bold text-xl tracking-wide text-white">СТУДИЯ-ВЕКТОР</span>
            </Link>
            <p className="text-industrial-400 max-w-sm mb-8 leading-relaxed">
              Помогаем заводам, производствам и промышленным компаниям обновить устаревшие сайты и привести их в соответствие с реальным уровнем бизнеса.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Навигация</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/projects" className="text-industrial-400 hover:text-white transition-colors">Проекты</Link></li>
              <li><Link to="/services" className="text-industrial-400 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/process" className="text-industrial-400 hover:text-white transition-colors">Этапы работы</Link></li>
              <li><Link to="/about" className="text-industrial-400 hover:text-white transition-colors">О студии</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="tel:+79990000000" className="text-industrial-400 hover:text-white transition-colors font-mono">+7 (999) 000-00-00</a></li>
              <li><a href="mailto:hello@manufactura.ru" className="text-industrial-400 hover:text-white transition-colors">hello@manufactura.ru</a></li>
              <li><a href="#" className="text-industrial-400 hover:text-white transition-colors">Telegram</a></li>
              <li><a href="#" className="text-industrial-400 hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-industrial-500">
          <p>© {new Date().getFullYear()} «Студия-вектор». Все права защищены.</p>
          <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
