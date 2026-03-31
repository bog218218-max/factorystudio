import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { Analytics } from '../analytics/Analytics';
import { SiteSchema } from '../ui/SiteSchema';

export function Layout() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-industrial-900 text-industrial-100 relative">
      <ScrollToTop />
      <Analytics />
      <SiteSchema />
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 to-accent-400 origin-left z-[10000] shadow-[0_0_10px_rgba(255,77,0,0.5)]"
        style={{ scaleX }}
      />

      <div className="bg-noise"></div>
      <Header />
      
      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
