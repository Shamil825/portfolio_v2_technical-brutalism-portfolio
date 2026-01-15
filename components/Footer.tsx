
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bauhaus-black text-white relative overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-bauhaus-red via-bauhaus-blue to-bauhaus-yellow"></div>
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 border-b border-white/20">
            <div className="col-span-12 md:col-span-4 p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between min-h-[300px]">
                <div>
                    <div className="w-12 h-12 bg-white rounded-full mb-8"></div>
                    <h2 className="font-display font-black text-4xl uppercase leading-none">
                        Aaron<br/>Iso.
                    </h2>
                </div>
                <p className="font-mono text-xs opacity-50 max-w-[200px] mt-8">
                    An autonomous study of design, logic, and the future.
                    <br/><br/>
                    EST. 2025
                </p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4">
                <div className="p-12 border-r border-b md:border-b-0 border-white/20">
                    <h4 className="font-mono text-xs font-bold text-bauhaus-yellow mb-8">DIRECTORY</h4>
                    <ul className="space-y-4 font-sans font-bold">
                        <li><a href="#hero" className="hover:text-bauhaus-red transition-colors">Home</a></li>
                        <li><a href="#heritage" className="hover:text-bauhaus-red transition-colors">Evolution</a></li>
                        <li><a href="#landmarks" className="hover:text-bauhaus-red transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-bauhaus-red transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div className="p-12 border-r border-b md:border-b-0 border-white/20">
                    <h4 className="font-mono text-xs font-bold text-bauhaus-blue mb-8">SOCIAL</h4>
                    <ul className="space-y-4 font-sans font-bold">
                        <li><a href="#" className="hover:text-bauhaus-yellow transition-colors">GitHub</a></li>
                        <li><a href="#" className="hover:text-bauhaus-yellow transition-colors">Dribbble</a></li>
                        <li><a href="#" className="hover:text-bauhaus-yellow transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-bauhaus-yellow transition-colors">X / Twitter</a></li>
                    </ul>
                </div>
                <div className="col-span-2 p-12 flex items-end justify-end bg-white/5 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-halftone opacity-10"></div>
                     <span className="font-display font-black text-[10rem] leading-none opacity-20 group-hover:opacity-100 group-hover:text-bauhaus-red transition-all duration-500 absolute -bottom-10 -right-4 uppercase">
                         ISO
                     </span>
                </div>
            </div>
        </div>
        <div className="max-w-[1800px] mx-auto p-4 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] uppercase opacity-60">
            <div>
                © 2025 AARON.ISO / DESIGN & CODE
            </div>
            <div className="flex gap-8 mt-2 md:mt-0">
                <span>OPEN_SOURCE</span>
                <span>SYSTEM_V1.0</span>
            </div>
        </div>
    </footer>
  );
};
