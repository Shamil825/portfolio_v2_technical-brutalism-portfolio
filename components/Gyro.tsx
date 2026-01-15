import React, { useEffect, useState } from 'react';

export const Gyro: React.FC = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-40 hidden md:block pointer-events-none mix-blend-difference text-bauhaus-black invert-0">
            <div className="relative w-32 h-32 flex items-center justify-center">
                
                {/* Outer Ring - Slow Rotate */}
                <div 
                    className="absolute inset-0 border border-bauhaus-black rounded-full opacity-40 border-dashed"
                    style={{ transform: `rotate(${scroll * 0.1}deg)` }}
                ></div>

                {/* Middle Ring - Medium Rotate Counter */}
                <div 
                    className="absolute inset-4 border-2 border-bauhaus-black rounded-full opacity-60"
                    style={{ transform: `rotate(-${scroll * 0.2}deg)` }}
                >
                    <div className="absolute top-0 left-1/2 w-1 h-2 bg-bauhaus-black -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-bauhaus-black -translate-x-1/2"></div>
                    <div className="absolute left-0 top-1/2 w-2 h-1 bg-bauhaus-black -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-2 h-1 bg-bauhaus-black -translate-y-1/2"></div>
                </div>

                {/* Inner Ring - Fast Rotate */}
                <div 
                    className="absolute inset-8 border border-bauhaus-black rounded-full opacity-80"
                    style={{ transform: `rotate(${scroll * 0.5}deg)` }}
                >
                     <div className="absolute top-0 left-1/2 w-[1px] h-full bg-bauhaus-black -translate-x-1/2"></div>
                     <div className="absolute left-0 top-1/2 w-full h-[1px] bg-bauhaus-black -translate-y-1/2"></div>
                </div>

                {/* Center Point */}
                <div className="absolute w-2 h-2 bg-bauhaus-red rounded-full"></div>

                {/* Digital Readout */}
                <div className="absolute -bottom-8 font-mono text-[10px] font-bold tracking-widest w-full text-center">
                    DEPTH: {Math.floor(scroll)}M
                </div>

            </div>
        </div>
    );
};