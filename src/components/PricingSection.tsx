
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { cn } from './Button';

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end md:max-w-4xl md:ml-auto">
        
        {/* Card 1 (Dark) */}
        <div 
          className={cn("bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.1)] flex flex-col", isInView ? "animate-fade-in-up" : "opacity-0")}
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-4">Monthly Partnership</h3>
          <p className="text-[#E0EBF0] mb-12">
            A dedicated creative design team.<br/>
            You work directly with Viktor.
          </p>
          <div className="mb-8">
            <span className="text-2xl text-[#F6FCFF]">$5,000</span>
            <div className="text-[#E0EBF0] text-sm mt-1">Monthly</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Button variant="primary" href="https://halaskastudio.com/book">Start a chat</Button>
            <Button variant="secondary" href="https://halaskastudio.com/book">How it works</Button>
          </div>
        </div>

        {/* Card 2 (Light) */}
        <div 
          className={cn("bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col", isInView ? "animate-fade-in-up" : "opacity-0")}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-[22px] font-medium text-[#0D212C] mb-4">Custom Project</h3>
          <p className="text-[#273C46] mb-12">
            Fixed scope, fixed timeline.<br/>
            Same team, same standards.
          </p>
          <div className="mb-8">
            <span className="text-2xl text-[#0D212C]">$5,000</span>
            <div className="text-[#273C46] text-sm mt-1">Minimum</div>
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <Button variant="tertiary" href="https://halaskastudio.com/book">Start a chat</Button>
          </div>
        </div>

      </div>
    </section>
  );
}
