"use client";

import { useState, useRef, useEffect } from "react";

interface SimpleGlobeProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function SimpleGlobe({ width = "100%", height = "500px", className = "" }: SimpleGlobeProps) {
  const [manualRotation, setManualRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    setManualRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDragging.current = true;
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || e.touches.length !== 1) return;
    
    const deltaX = e.touches[0].clientX - lastMousePos.current.x;
    const deltaY = e.touches[0].clientY - lastMousePos.current.y;
    
    setManualRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Prevent zoom on wheel (disable scroll zoom)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Add global mouse up listener
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {/* Main globe container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Auto-rotating wrapper */}
        <div className="relative animate-spin-slow">
          {/* Manual rotation layer */}
          <div 
            className="relative cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: `rotateX(${manualRotation.x}deg) rotateY(${manualRotation.y}deg)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            {/* Globe sphere */}
            <div 
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-[#a855f7]/30 relative"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #1B1B1B, #1B1B1B)',
                boxShadow: '0 0 60px rgba(0, 225, 255, 0.15), inset 0 0 30px rgba(0, 225, 255, 0.1)'
              }}
            >
            {/* Grid lines - horizontal */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 border-t border-[#a855f7]/20"
                style={{ 
                  top: `${15 + i * 14}%`,
                  transform: 'rotate(0deg)'
                }}
              />
            ))}
            
            {/* Grid lines - vertical (curved effect with border-radius) */}
            <div className="absolute inset-2 rounded-full border border-[#a855f7]/20" />
            <div className="absolute inset-4 rounded-full border border-[#a855f7]/15" />
            <div className="absolute inset-6 rounded-full border border-[#a855f7]/10" />
            
            {/* Continent-like shapes (simplified) */}
            <div className="absolute top-[20%] left-[25%] w-[30%] h-[25%] rounded-full bg-[#a855f7]/10 blur-sm" />
            <div className="absolute top-[40%] right-[20%] w-[25%] h-[30%] rounded-full bg-[#a855f7]/10 blur-sm" />
            <div className="absolute bottom-[25%] left-[30%] w-[35%] h-[20%] rounded-full bg-[#a855f7]/10 blur-sm" />
            
            {/* Glow effect */}
            <div 
              className="absolute -inset-4 rounded-full opacity-50 blur-xl"
              style={{ background: 'rgba(0, 225, 255, 0.05)' }}
            />
          </div>
          
          {/* Orbit ring */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#a855f7]/20 rounded-full"
            style={{ transform: 'rotateX(75deg)' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-[#a855f7]/10 rounded-full"
            style={{ transform: 'rotateX(75deg)' }}
          />
          </div>
        </div>
      </div>
      
      {/* Bottom text */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md bg-[#1B1B1B]/50 backdrop-blur-sm">
        Interactive 3D Globe
      </div>
    </div>
  );
}
