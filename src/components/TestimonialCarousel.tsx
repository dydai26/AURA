import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

const testimonials = [
  {
    id: 1,
    text: "With very little guidance team delivered designs that were consistently spot on...",
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    text: "Viktor led the creation of our best fundraising deck to date!...",
    name: "alexwu",
    role: "Founder, Nexgate",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    text: "Working with Viktor transformed our product vision...",
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 4,
    text: "The design quality exceeded our expectations...",
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 5,
    text: "Incredible work from start to finish...",
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    avatar: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const itemWidth = 427.5; // Desktop card width
  const gap = 24;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= testimonials.length * 2) {
          // Reset without animation logic ideally, but simple wrap for now
          return testimonials.length;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex(prev => prev + 1);
  const handlePrev = () => setCurrentIndex(prev => prev - 1);

  return (
    <section ref={ref} className="w-full py-20 overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div 
        className={cn("px-6 md:max-w-4xl md:ml-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center", isInView ? "animate-fade-in-up" : "opacity-0")}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-4 md:mb-0">
          What <span className="font-serif">builders</span> say
        </h2>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="font-medium text-slate-900">Clutch 5/5</span>
        </div>
      </div>

      <div className="relative w-full px-6 md:px-0">
        <div 
          className={cn("flex transition-transform duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] gap-6", isInView ? "animate-fade-in-up" : "opacity-0")}
          style={{ 
            animationDelay: '0.2s',
            transform: `translateX(calc(-${currentIndex * (itemWidth + gap)}px))`
          }}
          ref={containerRef}
        >
          {allTestimonials.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex flex-col w-[calc(100vw-48px)] md:w-[427.5px]"
              style={{
                opacity: Math.abs(idx - currentIndex) > 2 ? 0.3 : 1,
                transform: Math.abs(idx - currentIndex) > 2 ? 'scale(0.95)' : 'scale(1)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
                <path d="M10 11L8 15H11V19H5V15L7 11H5V7H11V11H10ZM20 11L18 15H21V19H15V15L17 11H15V7H21V11H20Z" fill="#0D212C"/>
              </svg>
              
              <p className="text-base text-[#0D212C] leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm text-[#0D212C]">{t.name}</div>
                  <div className="text-sm text-[#273C46]">↗ {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8 md:max-w-4xl md:ml-auto px-6 md:px-0">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-[#0D212C]" />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-[#0D212C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
