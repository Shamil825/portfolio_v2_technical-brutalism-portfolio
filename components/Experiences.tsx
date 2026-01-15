
import React, { useRef, useState } from 'react';

const GeoCard: React.FC<{
    shape: 'circle' | 'square' | 'triangle' | 'arch';
    title: string;
    bg: string;
    text: string;
}> = ({ shape, title, bg, text }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const maxDist = 400; 
        const distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < maxDist) {
            const power = (maxDist - distance) / maxDist;
            const moveX = -(distX * power * 0.4);
            const moveY = -(distY * power * 0.4);
            setOffset({ x: moveX, y: moveY });
        } else {
            setOffset({ x: 0, y: 0 });
        }
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setOffset({ x: 0, y: 0 }); setIsHovered(false); }}
            className={`relative h-[600px] border-r-2 border-bauhaus-black flex flex-col justify-between p-8 overflow-hidden group hover:flex-[1.5] transition-all duration-500 ease-out bg-white`}
        >
            <div 
                className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
                style={{ 
                    transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(${offset.x !== 0 ? 1.1 : 1})`,
                    opacity: isHovered ? 0.8 : 0.2
                }}
            >
                {shape === 'circle' && (
                    <div className={`w-64 h-64 rounded-full transition-all duration-300 ${isHovered ? 'bg-transparent border-4 border-bauhaus-red' : bg}`} 
                         style={isHovered ? { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E30022 10px, #E30022 12px)' } : {}}>
                    </div>
                )}
                {shape === 'square' && (
                    <div className={`w-64 h-64 rotate-12 transition-all duration-300 ${isHovered ? 'bg-transparent border-4 border-bauhaus-blue' : bg}`}
                        style={isHovered ? { backgroundImage: 'linear-gradient(90deg, transparent 50%, #0044CC 50%)', backgroundSize: '20px 20px' } : {}}>
                    </div>
                )}
                {shape === 'triangle' && (
                    <div className={`relative w-0 h-0 transition-all duration-300 ${isHovered ? '' : 'opacity-50'}`}>
                         <div className={`w-0 h-0 border-l-[128px] border-r-[128px] border-b-[256px] border-l-transparent border-r-transparent ${isHovered ? 'border-b-transparent' : `border-b-[${bg.replace('bg-', '')}]`}`}></div>
                         {isHovered && (
                             <div className="absolute top-32 -left-32 w-[256px] h-[256px] border-b-4 border-l-4 border-r-4 border-bauhaus-yellow rotate-45 transform origin-center"></div>
                         )}
                    </div>
                )}
                {shape === 'arch' && (
                    <div className={`w-64 h-80 rounded-t-full transition-all duration-300 ${isHovered ? 'bg-transparent border-4 border-bauhaus-black' : bg}`}
                         style={isHovered ? { backgroundImage: 'radial-gradient(#121212 2px, transparent 2px)', backgroundSize: '20px 20px' } : {}}>
                    </div>
                )}
            </div>

            <span className="font-mono text-sm font-bold opacity-50">SKILL_0{Math.floor(Math.random() * 9) + 1}</span>

            <div className="relative z-10 mix-blend-difference text-bauhaus-black group-hover:text-white transition-colors duration-300 pointer-events-none">
                <h3 className="font-display font-black text-5xl md:text-6xl uppercase leading-none mb-4">{title}</h3>
                <p className="font-sans font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {text}
                </p>
            </div>
            <div className="absolute bottom-0 left-0 h-2 w-full bg-bauhaus-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};

export const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="bg-white border-b-4 border-bauhaus-black relative">
        <div className="grid grid-cols-1 md:grid-cols-4">
            <GeoCard 
                shape="circle" 
                title="Vision" 
                bg="bg-bauhaus-red" 
                text="UI & Visual Design"
            />
            <GeoCard 
                shape="square" 
                title="Logic" 
                bg="bg-bauhaus-blue" 
                text="Frontend Architecture"
            />
            <GeoCard 
                shape="arch" 
                title="Motion" 
                bg="bg-bauhaus-yellow" 
                text="Interaction Physics"
            />
            <GeoCard 
                shape="square" 
                title="Core" 
                bg="bg-bauhaus-black" 
                text="System Engineering"
            />
        </div>
        <div className="bg-bauhaus-black text-white py-4 overflow-hidden border-t-4 border-bauhaus-black">
            <div className="whitespace-nowrap animate-marquee font-mono text-xl font-bold uppercase">
                CODE IS POETRY IN MOTION. /// DESIGN IS A SOLVED PROBLEM. /// PIXELS MUST HAVE PURPOSE. /// STRUCTURE IS FREEDOM. /// 
                CODE IS POETRY IN MOTION. /// DESIGN IS A SOLVED PROBLEM. /// PIXELS MUST HAVE PURPOSE. /// STRUCTURE IS FREEDOM. ///
            </div>
        </div>
    </section>
  );
};
