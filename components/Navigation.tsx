
import React, { useState, useEffect } from 'react';
import { Menu, X, Grid, Sun } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlueprint, setIsBlueprint] = useState(false);

  const toggleBlueprint = () => {
      setIsBlueprint(!isBlueprint);
      document.body.classList.toggle('blueprint-mode');
  };

  const links = [
    { name: 'Evolution', href: '#heritage' },
    { name: 'Projects', href: '#landmarks' },
    { name: 'Craft', href: '#experiences' },
    { name: 'Connect', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-bauhaus-bg border-b-2 border-bauhaus-black px-4 md:px-12 h-20 flex items-center justify-between transition-colors duration-500">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-bauhaus-red rounded-full"></div>
            <div className="w-6 h-6 bg-bauhaus-blue transform rotate-45"></div>
            <div className="w-6 h-6 bg-bauhaus-yellow"></div>
            <span className="font-display font-black text-xl tracking-tighter ml-2 text-bauhaus-black transition-colors uppercase">AARON.ISO</span>
        </div>

        {/* View Mode Switcher */}
        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 border-2 border-bauhaus-black rounded-full overflow-hidden p-1 gap-2 bg-white shadow-hard-sm">
            <button 
                onClick={() => { setIsBlueprint(false); document.body.classList.remove('blueprint-mode'); }}
                className={`flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase transition-all ${!isBlueprint ? 'bg-bauhaus-black text-white' : 'text-bauhaus-black hover:bg-bauhaus-bg'}`}
            >
                <Sun size={12} /> Designer
            </button>
            <button 
                onClick={() => { setIsBlueprint(true); document.body.classList.add('blueprint-mode'); }}
                className={`flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase transition-all ${isBlueprint ? 'bg-bauhaus-blue text-white' : 'text-bauhaus-black hover:bg-bauhaus-bg'}`}
            >
                <Grid size={12} /> Developer
            </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex">
            {links.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href}
                    className="h-20 flex items-center px-8 border-l border-bauhaus-black hover:bg-bauhaus-black hover:text-white transition-colors duration-200 font-sans font-bold uppercase tracking-widest text-sm text-bauhaus-black"
                >
                    {link.name}
                </a>
            ))}
            <a 
                href="#contact"
                className="h-20 flex items-center px-8 border-l border-r border-bauhaus-black bg-bauhaus-yellow hover:bg-bauhaus-red hover:text-white transition-colors duration-200 font-display font-black uppercase text-sm text-bauhaus-black"
            >
                Hire
            </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex gap-4 md:hidden">
            <button 
                onClick={toggleBlueprint}
                className="p-2 border-2 border-bauhaus-black text-bauhaus-black hover:bg-bauhaus-black hover:text-white transition-colors"
            >
                {isBlueprint ? <Sun size={24} /> : <Grid size={24} />}
            </button>

            <button 
                className="p-2 border-2 border-bauhaus-black text-bauhaus-black hover:bg-bauhaus-black hover:text-white transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={24} />
            </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-bauhaus-red transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-4 bg-white text-bauhaus-black border-2 border-bauhaus-black hover:rotate-90 transition-transform"
              >
                  <X size={24} />
              </button>
              
              <div className="flex-grow flex flex-col justify-center px-12 gap-8">
                  {links.map((link, i) => (
                      <a 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-display font-black text-5xl md:text-7xl text-white hover:text-bauhaus-yellow transition-colors uppercase stroke-text"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                          {link.name}
                      </a>
                  ))}
              </div>
              
              <div className="p-12 border-t-2 border-white/20">
                  <p className="font-sans text-white/60 uppercase tracking-widest text-xs">Constructed by Aaron, 2025</p>
              </div>
          </div>
      </div>
    </>
  );
};
