
import React, { useEffect, useRef, useState } from 'react';

const TimelineEvent: React.FC<{
    year: string;
    title: string;
    desc: string;
    align: 'left' | 'right';
    active: boolean;
}> = ({ year, title, desc, align, active }) => (
    <div className={`relative flex w-full mb-24 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-30'} ${align === 'left' ? 'justify-start' : 'justify-end'}`}>
        <div className={`absolute left-1/2 top-0 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-4 border-bauhaus-bg z-20 transition-colors duration-500 ${active ? 'bg-bauhaus-red' : 'bg-bauhaus-black'}`}></div>
        <div className={`w-[45%] bg-white border-2 border-bauhaus-black p-8 shadow-hard hover:bg-bauhaus-yellow transition-colors duration-300 group`}>
            <div className="flex items-baseline justify-between border-b-2 border-bauhaus-black pb-4 mb-4">
                <span className="font-display font-black text-4xl group-hover:text-white transition-colors">{year}</span>
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-bauhaus-concrete group-hover:text-bauhaus-black">ERA_{year.slice(2)}</span>
            </div>
            <h3 className="font-display font-bold text-2xl mb-4 uppercase">{title}</h3>
            <p className="font-sans text-sm leading-relaxed opacity-80 font-medium">
                {desc}
            </p>
        </div>
    </div>
);

export const Heritage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          if (!sectionRef.current) return;
          const { top, height } = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = Math.min(Math.max((windowHeight / 2 - top) / (height * 0.8), 0), 1);
          setScrollProgress(progress);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="heritage" ref={sectionRef} className="py-32 bg-bauhaus-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
            <div className="mb-24 text-center">
                <div className="inline-block border-4 border-bauhaus-black p-4 bg-white shadow-hard mb-8 transform -rotate-2">
                    <span className="font-display font-black text-4xl uppercase">Craft Evolution</span>
                </div>
            </div>

            <div className="absolute left-1/2 top-32 bottom-0 w-2 bg-bauhaus-black/10 transform -translate-x-1/2 overflow-hidden">
                 <div 
                    className="w-full bg-bauhaus-red transition-all duration-100 ease-linear"
                    style={{ height: `${scrollProgress * 100}%` }}
                 ></div>
            </div>

            <div className="relative pt-12">
                <TimelineEvent 
                    year="2018"
                    title="Geometric Origin"
                    desc="Started as a graphic designer obsessed with Swiss style. Discovered that grids are the foundation of all visual logic."
                    align="left"
                    active={scrollProgress > 0.1}
                />
                <TimelineEvent 
                    year="2020"
                    title="Code Synthesis"
                    desc="Mastered the terminal. Began translating static layouts into living, interactive structures using React and advanced CSS."
                    align="right"
                    active={scrollProgress > 0.35}
                />
                <TimelineEvent 
                    year="2023"
                    title="Systems Architecture"
                    desc="Scaled digital products from zero to millions of users. Focused on the intersection of UX motion and performant backend logic."
                    align="left"
                    active={scrollProgress > 0.6}
                />
                <TimelineEvent 
                    year="2025"
                    title="The Convergence"
                    desc="Aaron.ISO: A unified entity providing full-spectrum design and engineering for radical digital experiences."
                    align="right"
                    active={scrollProgress > 0.85}
                />
            </div>
             <div className={`absolute left-1/2 bottom-[-20px] w-12 h-12 rounded-full transform -translate-x-1/2 border-4 border-bauhaus-black z-10 flex items-center justify-center transition-colors duration-500 ${scrollProgress > 0.95 ? 'bg-bauhaus-red' : 'bg-white'}`}>
                 <div className="w-4 h-4 bg-white rounded-full"></div>
             </div>
        </div>
    </section>
  );
};
