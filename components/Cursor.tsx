
import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [snap, setSnap] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      // Calculate snap to 40px grid (simulated)
      const gridSize = 40;
      setSnap({
          x: Math.round(e.clientX / gridSize) * gridSize,
          y: Math.round(e.clientY / gridSize) * gridSize
      });

      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsHovering(
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') !== null || 
          target.closest('button') !== null ||
          target.classList.contains('cursor-pointer')
      );
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));
    
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Lines */}
      <div 
        className="fixed left-0 w-full h-[0.5px] bg-bauhaus-red/20 z-[9999] pointer-events-none"
        style={{ top: pos.y }}
      ></div>
      <div 
        className="fixed top-0 h-full w-[0.5px] bg-bauhaus-red/20 z-[9999] pointer-events-none"
        style={{ left: pos.x }}
      ></div>
      
      {/* Snapping Markers */}
      <div 
        className="fixed w-4 h-4 border border-bauhaus-blue/30 z-[9998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
        style={{ top: snap.y, left: snap.x }}
      ></div>

      {/* Main Cursor */}
      <div 
        className={`fixed z-[10000] pointer-events-none flex items-center justify-center transition-transform duration-300 ${isHovering ? 'scale-[2]' : 'scale-100'}`}
        style={{ top: pos.y, left: pos.x }}
      >
          {/* Bauhaus Aim */}
          <div className="w-6 h-6 border-2 border-bauhaus-black rounded-full flex items-center justify-center">
              <div className="w-[1px] h-full bg-bauhaus-black absolute"></div>
              <div className="w-full h-[1px] bg-bauhaus-black absolute"></div>
              <div className={`w-2 h-2 rounded-full transition-colors ${isHovering ? 'bg-bauhaus-red' : 'bg-bauhaus-black'}`}></div>
          </div>
          
          {/* HUD Data */}
          {!isHovering && (
            <div className="absolute left-8 top-8 font-mono text-[8px] bg-bauhaus-black text-white px-2 py-1 flex flex-col gap-0 leading-tight">
                <span>X: {pos.x}</span>
                <span>Y: {pos.y}</span>
                <span className="text-bauhaus-yellow">MODE: PRECISION</span>
            </div>
          )}
      </div>
    </>
  );
};
