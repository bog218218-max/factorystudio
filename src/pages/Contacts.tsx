import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { siteConfig } from '../config/site';

const contactSchema = z.object({
  name: z.string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(50, 'Имя не должно превышать 50 символов')
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, 'Имя может содержать только буквы'),
  company: z.string()
    .max(100, 'Слишком длинное название')
    .optional()
    .refine(val => !val || val.trim().length >= 3, 'Минимум 3 символа'),
  contact: z.string()
    .min(1, 'Обязательное поле')
    .refine(
      (val) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        // Проверяем, что это похоже на телефон (минимум 10 цифр, допускаются +, скобки, пробелы, дефисы)
        const digitsOnly = val.replace(/\D/g, '');
        const isPhone = /^\+?[\d\s\-\(\)]+$/.test(val) && digitsOnly.length >= 10 && digitsOnly.length <= 15;
        return isEmail || isPhone;
      },
      'Введите корректный email (например, name@mail.ru) или телефон (от 10 цифр)'
    ),
  message: z.string()
    .max(1000, 'Сообщение слишком длинное')
    .optional()
    .refine(val => !val || val.trim().length >= 10, 'Опишите задачу подробнее (минимум 10 символов)'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contacts() {
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsPending(true);
    
    try {
      // Имитация отправки формы до подключения бекенда/CRM
      void data;
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Заявка успешно отправлена!', {
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      reset();
    } catch (error) {
      toast.error('Произошла ошибка', {
        description: 'Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 relative">
      <SEO 
        title="Контакты"
        description="Свяжитесь с нами для обсуждения вашего проекта."
      />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-industrial-800/50 border border-industrial-700/50 backdrop-blur-md text-industrial-300 text-xs font-mono mb-8 uppercase tracking-widest shadow-xl shadow-black/20">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            Контакты
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[0.9] uppercase">
            Обсудить <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">проект</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-industrial-400 leading-relaxed font-light max-w-3xl">
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-industrial-800 bg-industrial-900/50 backdrop-blur-sm transition-all duration-500 group-hover:border-accent-500/50 group-hover:bg-accent-500/10 md:h-16 md:w-16">
                  <Phone className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Телефон</div>
                  <a href={siteConfig.phoneHref} className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-accent-500 md:text-3xl">
                    {siteConfig.phoneDisplay}
                  </a>
                  <div className="mt-2 text-base font-light text-industrial-400">{siteConfig.workingHours}</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-industrial-800 bg-industrial-900/50 backdrop-blur-sm transition-all duration-500 group-hover:border-accent-500/50 group-hover:bg-accent-500/10 md:h-16 md:w-16">
                  <Mail className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Email</div>
                  <a href={siteConfig.emailHref} className="break-all text-xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-accent-500 sm:text-2xl md:text-3xl">
                    {siteConfig.email}
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-industrial-800 bg-industrial-900/50 backdrop-blur-sm transition-all duration-500 group-hover:border-accent-500/50 group-hover:bg-accent-500/10 md:h-16 md:w-16">
                  <MapPin className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-sm font-mono text-industrial-500 mb-2 uppercase tracking-widest">Офис</div>
                  <div className="text-2xl font-bold text-white tracking-tight">
                    {siteConfig.addressTitle}
                  </div>
                  <div className="text-base text-industrial-400 mt-2 font-light">{siteConfig.addressLine}</div>
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
                <p className="text-industrial-300">{siteConfig.legalName}</p>
                <p>ИНН: {siteConfig.legal.inn}</p>
                <p>КПП: {siteConfig.legal.kpp}</p>
                <p>ОГРН: {siteConfig.legal.ogrn}</p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)} 
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
                    {...register('name')}
                    className={`bg-industrial-800/50 border ${errors.name ? 'border-red-500' : 'border-industrial-700'} text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600`}
                    placeholder="Иван Иванов"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="company" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Компания / Сайт</label>
                  <input 
                    type="text" 
                    id="company" 
                    {...register('company')}
                    className={`bg-industrial-800/50 border ${errors.company ? 'border-red-500' : 'border-industrial-700'} text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600`}
                    placeholder="zavod.ru"
                  />
                  {errors.company && <span className="text-red-500 text-sm mt-1">{errors.company.message}</span>}
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="contact" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Телефон или Email</label>
                  <input 
                    type="text" 
                    id="contact" 
                    {...register('contact')}
                    className={`bg-industrial-800/50 border ${errors.contact ? 'border-red-500' : 'border-industrial-700'} text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 placeholder:text-industrial-600`}
                    placeholder="+7 (999) 000-00-00"
                  />
                  {errors.contact && <span className="text-red-500 text-sm mt-1">{errors.contact.message}</span>}
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-sm font-mono text-industrial-500 uppercase tracking-widest">Задача (кратко)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    {...register('message')}
                    className={`bg-industrial-800/50 border ${errors.message ? 'border-red-500' : 'border-industrial-700'} text-white px-6 py-4 text-lg focus:outline-none focus:border-accent-500 focus:bg-industrial-800 transition-all duration-300 resize-none placeholder:text-industrial-600`}
                    placeholder="Нужно обновить корпоративный сайт..."
                  />
                  {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full group relative px-8 py-5 bg-accent-500 text-white text-xl font-semibold overflow-hidden flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(255,77,0,0.4)] hover:shadow-[0_0_60px_-15px_rgba(255,77,0,0.6)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-3 uppercase tracking-wider">
                      {isPending ? (
                        <>Отправка... <Loader2 className="w-6 h-6 animate-spin" /></>
                      ) : (
                        <>Отправить заявку <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                      )}
                    </span>
                  </button>
                  <p className="text-sm text-industrial-500 text-center mt-6 font-light">
                    Нажимая кнопку, вы соглашаетесь с <Link to="/privacy" className="underline hover:text-industrial-300 transition-colors">политикой конфиденциальности</Link>.
                  </p>
                </div>
              </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
