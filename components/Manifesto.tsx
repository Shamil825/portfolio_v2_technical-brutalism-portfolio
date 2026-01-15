
import React, { useEffect, useRef, useState } from 'react';

export const Manifesto: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const progress = (winHeight - rect.top) / (winHeight + rect.height);
      setScroll(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="bg-bauhaus-black text-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div 
            className="font-display font-black text-[15vw] leading-none uppercase stroke-text whitespace-nowrap transition-transform duration-100 ease-out"
            style={{ 
                transform: `translateX(${(scroll - 0.5) * -100}%) rotate(${(scroll - 0.5) * 10}deg)`,
                opacity: 0.2
            }}
        >
            Logic is Art / Logic is Art / Logic is Art
        </div>

        <div className="relative z-10 max-w-4xl space-y-12">
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase leading-none">
                The<br/>
                Digital<br/>
                Manifesto.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-xl leading-relaxed">
                <p className="border-l-4 border-bauhaus-red pl-8">
                    We reject the soft edges of the modern web. We embrace the grid as the ultimate form of creative liberation. Every pixel must justify its existence through function.
                </p>
                <p className="border-l-4 border-bauhaus-blue pl-8">
                    Motion is not decoration; it is feedback. Design is not skin; it is the skeleton. We build systems that survive the audit of logic.
                </p>
            </div>
        </div>

        <div 
            className="absolute bottom-24 right-0 font-display font-black text-[15vw] leading-none uppercase stroke-text whitespace-nowrap transition-transform duration-100 ease-out"
            style={{ 
                transform: `translateX(${(scroll - 0.5) * 100}%) rotate(${(scroll - 0.5) * -5}deg)`,
                opacity: 0.2
            }}
        >
            Code is Law / Code is Law / Code is Law
        </div>

        {/* Floating Geometric Pieces */}
        <div 
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-bauhaus-red rounded-full mix-blend-screen"
            style={{ transform: `translateY(${scroll * 200}px) scale(${1 + scroll})` }}
        ></div>
        <div 
            className="absolute bottom-1/4 left-1/4 w-48 h-48 border-8 border-bauhaus-yellow mix-blend-screen"
            style={{ transform: `translateY(${scroll * -150}px) rotate(${scroll * 360}deg)` }}
        ></div>
    </section>
  );
};
