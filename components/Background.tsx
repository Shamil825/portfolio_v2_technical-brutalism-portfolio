import React, { useEffect, useState } from 'react';

export const Background: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-bauhaus-bg">
        
        {/* Analog Noise / Grain Overlay */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-0"></div>

        {/* Technical Grid */}
        <div 
            className="absolute inset-0 opacity-[0.05] z-0" 
            style={{ 
                backgroundImage: `linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)`,
                backgroundSize: '4rem 4rem',
                transform: `translateY(${offset * 0.2}px)`
            }}
        ></div>

        {/* Floating Geometric Primitives */}
        <div className="absolute top-20 right-[10%] w-64 h-64 border-4 border-bauhaus-red rounded-full opacity-20 animate-spin-slow mix-blend-multiply z-0"></div>
        <div className="absolute bottom-[20%] left-[5%] w-48 h-48 border-4 border-bauhaus-blue opacity-20 rotate-45 mix-blend-multiply z-0" style={{ transform: `rotate(${45 + offset * 0.1}deg)` }}></div>
        <div className="absolute top-[40%] left-[40%] w-32 h-32 bg-bauhaus-yellow opacity-10 mix-blend-multiply rounded-full blur-3xl z-0"></div>

        {/* Constructivist Lines */}
        <div className="absolute top-0 right-20 h-full w-[1px] bg-bauhaus-black opacity-10 z-0"></div>
        <div className="absolute top-0 left-20 h-full w-[1px] bg-bauhaus-black opacity-10 z-0"></div>
        
    </div>
  );
};