import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Проекты', path: '/projects' },
    { name: 'Услуги', path: '/services' },
    { name: 'Этапы', path: '/process' },
    { name: 'О студии', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-4 px-4 md:px-6' : 'pt-6 px-4 md:px-6'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center justify-between pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-industrial-900/80 backdrop-blur-xl border border-industrial-700/50 h-16 md:h-20 px-6 shadow-2xl shadow-black/50' : 'bg-transparent h-20 px-2'}`}>
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-accent-500 flex items-center justify-center text-white font-mono font-bold text-sm group-hover:bg-accent-600 transition-colors">
              SV
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-wide text-white">СТУДИЯ-ВЕКТОР</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm font-medium text-industrial-300 hover:text-white transition-colors whitespace-nowrap">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="tel:+79990000000" className="text-sm font-mono text-industrial-400 hover:text-white transition-colors whitespace-nowrap">
              +7 (999) 000-00-00
            </a>
            <Link to="/contacts" className="bg-white text-industrial-900 px-4 py-2 xl:px-5 xl:py-2.5 text-sm font-semibold hover:bg-industrial-200 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0">
              Обсудить проект <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-industrial-100 p-2 -mr-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-industrial-900/95 backdrop-blur-xl border-b border-industrial-800 p-6 flex flex-col gap-4 shadow-2xl pointer-events-auto mt-2"
          >
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-lg font-medium text-industrial-100 hover:text-accent-500 transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-industrial-800 flex flex-col gap-4">
              <a href="tel:+79990000000" className="text-lg font-mono text-industrial-400">
                +7 (999) 000-00-00
              </a>
              <Link to="/contacts" className="bg-accent-500 text-white px-5 py-3 text-center font-semibold hover:bg-accent-600 transition-colors">
                Обсудить проект
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
