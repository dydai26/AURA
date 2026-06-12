
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section 
      ref={ref} 
      className="max-w-[440px] mx-auto px-6 pt-12 md:pt-16 flex flex-col items-center text-center"
    >
      <div 
        className={cn("mb-4", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.1s' }}
      >
        <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight">
          AURA
        </h1>
      </div>
      
      <div 
        className={cn("mb-2", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.2s' }}
      >
        <p className="font-mono text-xs md:text-sm text-[#051A24]">
          Студія вебдизайну
        </p>
      </div>

      <div 
        className={cn("mb-5 md:mb-6", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.3s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap">
          <span className="font-serif">Вебдизайн та</span><br/>
          <span className="font-serif">створення сайтів.</span>
        </h2>
      </div>

      <div 
        className={cn("flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 text-center w-full", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.4s' }}
      >
        <p>
          Створюємо сайти, які перетворюють відвідувачів на клієнтів.<br/>Продуманий дизайн, зручний функціонал та ефективні рішення для розвитку вашого бізнесу.
        </p>
        <p>
          Спеціалізуємось на UI/UX дизайні, розробці<br/>інтернет-магазинів та створенні Landing Page.
        </p>
        <p>
          Проєктуємо адаптивні сайти, які ідеально<br/>працюють як на телефонах, так і на ПК. 
        </p>
        <p>
          Працюємо швидко, стильно та під ключ.
        </p>
      </div>

      <div 
        className={cn("flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-5 md:mt-6 w-full sm:w-auto", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.5s' }}
      >
        <Button variant="primary" href="https://www.instagram.com/aura_web_desing?igsh=MTl0dHdmYnJpcnIzdA%3D%3D&utm_source=qr">Напишіть у Direct для консультації</Button>
      </div>
    </section>
  );
}
