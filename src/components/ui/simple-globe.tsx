"use client";

interface SimpleGlobeProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function SimpleGlobe({ width = "100%", height = "500px", className = "" }: SimpleGlobeProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {/* Main globe container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Rotating globe */}
        <div className="relative animate-spin-slow">
          {/* Globe sphere */}
          <div 
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-[#a855f7]/30 relative"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #001a1a, #000000)',
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
      
      {/* Bottom text */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm">
        Interactive 3D Globe
      </div>
    </div>
  );
}
