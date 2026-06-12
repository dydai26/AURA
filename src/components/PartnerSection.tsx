import React, { useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

const gifPool = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

interface TrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  src: string;
}

export function PartnerSection() {
  const { ref, isInView } = useInViewAnimation();
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastSpawnTime = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trailIdRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTime.current > 80) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newId = trailIdRef.current++;
      const newItem = {
        id: newId,
        x,
        y,
        rotation: Math.random() * 20 - 10,
        src: gifPool[Math.floor(Math.random() * gifPool.length)]
      };
      
      setTrail(prev => [...prev, newItem]);
      lastSpawnTime.current = now;

      setTimeout(() => {
        setTrail(prev => prev.filter(item => item.id !== newId));
      }, 1000);
    }
  };

  return (
    <section className="w-full py-12 px-6 relative">
      <div 
        ref={(node) => {
          containerRef.current = node;
          (ref as any).current = node;
        }}
        onMouseMove={handleMouseMove}
        className={`max-w-7xl mx-auto py-48 bg-white rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col items-center justify-center text-center cursor-default transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      >
        {trail.map(item => (
          <img
            key={item.id}
            src={item.src}
            alt=""
            className="absolute w-40 h-28 object-cover rounded-xl pointer-events-none shadow-lg"
            style={{
              left: item.x - 80,
              top: item.y - 56,
              transform: `rotate(${item.rotation}deg)`,
              animation: 'trailFade 1s forwards ease-out'
            }}
          />
        ))}

        <style>{`
          @keyframes trailFade {
            0% { opacity: 1; transform: scale(1) rotate(var(--rot)); }
            100% { opacity: 0; transform: scale(0.8) rotate(var(--rot)); }
          }
        `}</style>

        <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 relative z-10 pointer-events-none">
          Partner with us
        </h2>
        
        <div className="relative z-10">
          <Button variant="primary" href="https://halaskastudio.com/book" className="pl-2 pr-7 py-2 h-16 rounded-full flex items-center gap-4">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Viktor"
              className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
            />
            <span className="font-medium text-base">Start chat with Viktor</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
