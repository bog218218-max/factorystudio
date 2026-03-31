import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function Contacts() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-12 pb-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Контакты
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Обсудить <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">проект</span>
          </h1>
          <p className="text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
            Оставьте заявку, и мы свяжемся с вами в течение рабочего дня. Проведем аудит текущего сайта и предложим план действий.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-12 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 bg-industrial-900/50 backdrop-blur-sm border border-industrial-800 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/50 transition-all duration-500">
                  <Phone className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Телефон</div>
                  <a href="tel:+78000000000" className="text-3xl font-bold text-white hover:text-accent-500 transition-colors duration-300 tracking-tight">
                    8 (800) 000-00-00
                  </a>
                  <div className="text-base text-industrial-400 mt-2 font-light">Пн-Пт, 10:00–19:00 (МСК)</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 bg-industrial-900/50 backdrop-blur-sm border border-industrial-800 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/50 transition-all duration-500">
                  <Mail className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Email</div>
                  <a href="mailto:hello@manufactura.digital" className="text-2xl md:text-3xl font-bold text-white hover:text-accent-500 transition-colors duration-300 tracking-tight break-all">
                    hello@manufactura.digital
                  </a>
                  <div className="text-base text-industrial-400 mt-2 font-light">Для брифов и предложений</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-6 group"
              >
                <div className="w-16 h-16 bg-industrial-900/50 backdrop-blur-sm border border-industrial-800 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/50 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Офис</div>
                  <div className="text-2xl font-bold text-white tracking-tight">
                    Москва, БЦ «Промышленный»
                  </div>
                  <div className="text-base text-industrial-400 mt-2 font-light">ул. Заводская, д. 1, офис 404</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-industrial-900/30 backdrop-blur-sm border border-industrial-800/50 p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">Реквизиты</h3>
              <div className="text-base text-industrial-400 font-mono flex flex-col gap-3">
                <p className="text-industrial-300">ООО «Мануфактура Диджитал»</p>
                <p>ИНН: 7700000000</p>
                <p>КПП: 770001001</p>
                <p>ОГРН: 1230000000000</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-industrial-900/50 backdrop-blur-md border border-industrial-800 p-16 text-center h-full flex flex-col items-center justify-center shadow-2xl shadow-black/50"
              >
                <div className="w-24 h-24 bg-industrial-800 border border-industrial-700 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,77,0,0.2)]">
                  <CheckCircle2 className="w-12 h-12 text-accent-500" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight uppercase">Заявка принята</h3>
                <p className="text-industrial-400 text-xl font-light max-w-md mx-auto leading-relaxed">
                  Спасибо за обращение. Мы изучим информацию и свяжемся с вами в ближайшее время для обсуждения деталей.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit} 
                className="bg-industrial-900/50 backdrop-blur-md border border-industrial-800 p-10 md:p-16 flex flex-col gap-8 shadow-2xl shadow-black/50"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Оставить заявку</h3>
                  <p className="text-industrial-400 text-lg font-light">Заполните форму, и мы подготовим предметный разговор.</p>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="bg-industrial-800/50 border border-industrial-700 text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="company" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Компания / Сайт</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="bg-industrial-800/50 border border-industrial-700 text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600"
                    placeholder="zavod.ru"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="contact" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Телефон или Email</label>
                  <input 
                    type="text" 
                    id="contact" 
                    required
                    className="bg-industrial-800/50 border border-industrial-700 text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Задача (кратко)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="bg-industrial-800/50 border border-industrial-700 text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 resize-none placeholder:text-industrial-600"
                    placeholder="Нужно обновить корпоративный сайт..."
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full group relative px-8 py-5 bg-accent-500 text-white text-xl font-semibold overflow-hidden flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(255,77,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,77,0,0.6)] transition-shadow"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-3 uppercase tracking-wider">
                      Отправить заявку <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <p className="text-sm text-industrial-500 text-center mt-6 font-light">
                    Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-industrial-300 transition-colors">политикой конфиденциальности</a>.
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
