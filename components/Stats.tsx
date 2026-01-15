
import React, { useEffect, useState, useRef } from 'react';

const ScrambleNumber: React.FC<{ value: string; trigger: boolean }> = ({ value, trigger }) => {
    const [display, setDisplay] = useState("000");
    const chars = "0123456789";

    useEffect(() => {
        if (!trigger) return;
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(prev => 
                value.split("").map((letter, index) => {
                    if (index < iteration) return value[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= value.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [trigger, value]);

    return <span>{display}</span>;
}

const StatModule: React.FC<{
    label: string;
    value: string;
    subtext: string;
    color: string;
    index: number;
    isInView: boolean;
}> = ({ label, value, subtext, color, index, isInView }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className={`relative border-b-4 md:border-b-0 md:border-r-4 border-bauhaus-black bg-white group overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? 'flex-[2]' : 'flex-1'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 ${color} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]`}></div>
            <div className="relative h-[400px] p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs font-bold bg-bauhaus-black text-white px-2 py-1 group-hover:bg-white group-hover:text-bauhaus-black transition-colors">
                        METRIC.0{index}
                    </span>
                    <div className={`w-4 h-4 rounded-full border-2 border-bauhaus-black group-hover:bg-white transition-colors`}></div>
                </div>
                <div className="overflow-hidden">
                    <h3 className={`font-display font-black text-8xl md:text-9xl tracking-tighter group-hover:text-white transition-colors duration-300`}>
                        <ScrambleNumber value={value} trigger={isInView} />
                    </h3>
                </div>
                <div className="border-t-4 border-bauhaus-black group-hover:border-white pt-4 transition-colors">
                    <h4 className="font-display font-bold text-xl uppercase mb-2 group-hover:text-white transition-colors">{label}</h4>
                    <p className="font-mono text-xs max-w-[200px] opacity-60 group-hover:opacity-100 group-hover:text-white transition-opacity">
                        {subtext}
                    </p>
                </div>
            </div>
            <div className={`absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500`}></div>
        </div>
    );
};

export const Stats: React.FC = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setIsInView(true);
      }, { threshold: 0.2 });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b-4 border-bauhaus-black bg-bauhaus-bg">
        <div className="flex flex-col md:flex-row min-h-[400px]">
            <StatModule 
                index={1}
                value="07+"
                label="Years Craft"
                subtext="Continuous evolution in design and engineering."
                color="bg-bauhaus-red"
                isInView={isInView}
            />
            <StatModule 
                index={2}
                value="142"
                label="Repos Shipped"
                subtext="Proven track record of production-grade builds."
                color="bg-bauhaus-blue"
                isInView={isInView}
            />
            <StatModule 
                index={3}
                value="100"
                label="Logic Flow"
                subtext="Percentage of commitment to structural integrity."
                color="bg-bauhaus-yellow"
                isInView={isInView}
            />
        </div>
        <div className="bg-bauhaus-black text-white py-3 overflow-hidden border-t-4 border-bauhaus-black relative">
            <div className="whitespace-nowrap animate-marquee font-mono text-[10px] uppercase tracking-widest flex gap-12">
                <span>Core: Healthy</span>
                <span>Uptime: 99.9%</span>
                <span>Commit: Push</span>
                <span>Branch: Main</span>
                <span>Merge: Conflict Zero</span>
                <span>Core: Healthy</span>
                <span>Uptime: 99.9%</span>
                <span>Commit: Push</span>
                <span>Branch: Main</span>
                <span>Merge: Conflict Zero</span>
            </div>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bauhaus-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bauhaus-black to-transparent z-10"></div>
        </div>
    </section>
  );
};
