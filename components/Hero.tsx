
import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Cpu, Layers, MousePointer2 } from 'lucide-react';

const VoxelLetter: React.FC<{ 
    char: string; 
    index: number; 
    mouse: { x: number, y: number } 
}> = ({ char, index, mouse }) => {
    const depth = (index + 1) * 15;
    const rotateX = mouse.y * (index * 2 + 5);
    const rotateY = mouse.x * (index * 2 + 5);
    
    return (
        <div 
            className="relative preserve-3d transition-transform duration-200 ease-out flex items-center justify-center"
            style={{ 
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${depth}px)`,
                zIndex: 10 - index
            }}
        >
            <span className="font-display font-black text-[12vw] leading-none select-none text-bauhaus-black blueprint-mode:text-white">
                {char}
            </span>
            {/* Architectural Shadow */}
            <span 
                className="absolute inset-0 font-display font-black text-[12vw] leading-none select-none text-bauhaus-red/20 pointer-events-none"
                style={{ transform: `translateZ(-20px) translateX(10px) translateY(10px)` }}
            >
                {char}
            </span>
        </div>
    );
};

export const Hero: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, height, left, top } = containerRef.current!.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMouse({ x, y });
  };

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen flex flex-col items-center justify-center pt-24 px-12 overflow-hidden perspective-lg bg-bauhaus-bg transition-colors duration-500"
    >
        <div className="absolute top-24 left-12 font-mono text-[10px] tracking-[0.2em] opacity-50 uppercase flex flex-col gap-1">
            <span>System: Aaron.iso_v2</span>
            <span>Status: Optimization_In_Progress</span>
            <span>Coordinates: 25.2048° N, 55.2708° E</span>
        </div>

        <div className="flex gap-[1vw] md:gap-[2vw] preserve-3d py-20">
            {['A', 'A', 'R', 'O', 'N'].map((c, i) => (
                <VoxelLetter key={i} char={c} index={i} mouse={mouse} />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] border-t-2 border-bauhaus-black pt-12 gap-12">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-bauhaus-red">
                    <Cpu size={20} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Logic Tier</span>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase leading-none">Engineering Fluid Architecture</h2>
                <p className="font-sans text-sm opacity-60">High-performance frontend systems built on a foundation of structural integrity and visual radicalism.</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-bauhaus-blue">
                    <Layers size={20} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Aesthetic Tier</span>
                </div>
                <h2 className="font-display text-2xl font-bold uppercase leading-none">The Swiss Grid Paradox</h2>
                <p className="font-sans text-sm opacity-60">Where rigid grids meet organic motion. Design that breathes within the constraints of the digital box.</p>
            </div>

            <div className="flex flex-col justify-end items-end">
                <button className="group relative bg-bauhaus-black text-white px-8 py-6 flex items-center gap-6 shadow-mega hover:shadow-mega-red transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-bauhaus-red translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative font-display font-black uppercase text-xl z-10">Access Ledger</span>
                    <ArrowUpRight size={32} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </button>
            </div>
        </div>

        {/* Technical Deco Elements */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <div className="w-[1px] h-24 bg-bauhaus-black"></div>
            <span className="font-mono text-[10px] uppercase rotate-90">Scroll_To_Audit</span>
        </div>
    </section>
  );
};
