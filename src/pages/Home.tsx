import { SEO } from '../components/ui/SEO';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { WhyUs } from '../components/home/WhyUs';
import { Process } from '../components/home/Process';
import { FAQ } from '../components/home/FAQ';

export function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Главная"
        description="Проектируем и разрабатываем премиальные B2B-решения для заводов и производств."
      />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <FAQ />
    </div>
  );
}
