import { Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

const testimonials = [
  {
    id: 1,
    text: "Your brand deserves visuals that make an impact. From logos and brand identity to marketing assets, we create designs that tell your story and resonate with your audience.",
    author: "John Murray"
  },
  {
    id: 2,
    text: "Співпраця була надзвичайно продуктивною. Дизайн перевершив усі очікування, а новий фірмовий стиль допоміг суттєво підвищити впізнаваність нашого бренду на ринку.",
    author: "Олена Левченко"
  },
  {
    id: 3,
    text: "Справжні професіонали своєї справи! Створили сучасний, зручний та естетичний продукт. Комунікація була на вищому рівні на кожному етапі проєкту.",
    author: "Максим Шевченко"
  },
   {
    id: 4,
    text: "They did the job quickly and efficiently, friendly team. I recommend",
    author: "Catalina Baciu"
  }
];

export function TestimonialSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto">
      <div 
        className={cn("text-center mb-12 md:mb-16", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#051A24]">
          Що кажуть наші клієнти
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, index) => (
          <div 
            key={t.id}
            className={cn(
              "bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center",
              isInView ? "animate-fade-in-up" : "opacity-0"
            )}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="flex gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E88B12] text-[#E88B12]" />
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed mb-8 flex-1 text-sm md:text-base">
              "{t.text}"
            </p>
            <div className="h-px w-12 bg-slate-200 mb-6"></div>
            <p className="font-serif font-semibold text-lg text-[#051A24]">
              {t.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
