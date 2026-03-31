import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-industrial-800 select-none border border-industrial-700">
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="После редизайна" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Foreground, clipped) */}
      <img 
        src={beforeImage} 
        alt="До редизайна" 
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        referrerPolicy="no-referrer"
      />

      {/* Slider Handle Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-accent-500 pointer-events-none z-20"
        style={{ left: `calc(${sliderPos}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,77,0,0.5)] border-2 border-white">
          <ArrowLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Invisible Range Input for interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos} 
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Сравнение до и после"
      />
      
      {/* Labels */}
      <div className="absolute top-6 left-6 bg-industrial-900/90 backdrop-blur text-industrial-300 text-xs font-mono px-3 py-1.5 border border-industrial-700 z-20 uppercase tracking-wider">
        До редизайна
      </div>
      <div className="absolute top-6 right-6 bg-accent-500 text-white text-xs font-mono px-3 py-1.5 z-20 uppercase tracking-wider shadow-lg">
        После редизайна
      </div>
    </div>
  );
}
