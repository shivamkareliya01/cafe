import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import RemainingSections from "./RemainingSections";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const animationRef = useRef<number | null>(null);
  
  const frameCount = 232;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      setProgressVal(v);
    });
  }, [smoothProgress]);
  
  // Resilient Preloading
  useEffect(() => {
    let loadedCount = 0;
    const imgs: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      
      const checkCompletion = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          imagesRef.current = imgs;
          setLoaded(true);
        }
      };

      img.onload = () => {
        imgs[i - 1] = img;
        checkCompletion();
      };

      img.onerror = () => {
        console.warn(`Failed to load frame ${i}`);
        imgs[i - 1] = null;
        checkCompletion();
      };
    }
  }, []);
  
  // Draw frames
  useEffect(() => {
    if (!loaded) return;
    
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    
    const firstValidImg = imagesRef.current.find(img => img !== null);
    if (firstValidImg) {
      canvas.width = firstValidImg.width;
      canvas.height = firstValidImg.height;
    }
    
    const drawFrame = (index: number) => {
      const targetImg = imagesRef.current[index];
      if (canvas && context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        if (targetImg) {
          context.drawImage(targetImg, 0, 0, canvas.width, canvas.height);
        }
      }
    };
    
    drawFrame(0);
    
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    });
    
    return () => {
      unsubscribe();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [loaded, smoothProgress]);

  const opacityA = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const yA = useTransform(smoothProgress, [0, 0.05, 0.15, 0.2], [40, 0, 0, -40]);

  const opacityB = useTransform(smoothProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const yB = useTransform(smoothProgress, [0.25, 0.3, 0.45, 0.5], [40, 0, 0, -40]);

  const opacityC = useTransform(smoothProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const yC = useTransform(smoothProgress, [0.55, 0.6, 0.75, 0.8], [40, 0, 0, -40]);

  const opacityD = useTransform(smoothProgress, [0.85, 0.9, 1, 1], [0, 1, 1, 1]);
  const yD = useTransform(smoothProgress, [0.85, 0.9, 1, 1], [40, 0, 0, 0]);

  return (
    <>
      <div ref={containerRef} className="relative h-[400vh] w-full bg-[#050505] font-sans">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-12">
          <h1 className="tracking-widest font-semibold text-lg md:text-xl text-white/90">CAFÉ MATCHA</h1>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#layers" className="font-label-caps text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors">Anatomy</a>
            <a href="#menu" className="font-label-caps text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors">Menu</a>
            <a href="#order" className="font-label-caps text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors">Sanctuaries</a>
          </nav>

          <div className="flex items-center gap-6">

            <a href="#order" className="hidden md:inline-flex px-5 py-2 rounded-full bg-primary-container text-white font-label-caps text-[11px] tracking-widest uppercase hover:bg-primary hover:text-black transition-colors shadow-[0_0_15px_rgba(79,122,58,0.2)]">
              Order Now
            </a>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2">
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </header>

        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#050505]">
              <p className="text-white/60 text-sm tracking-widest uppercase font-mono">Loading Sequence...</p>
            </div>
          )}

          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover max-w-full max-h-full"
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
          />

          {/* Text Sequence A */}
          <motion.div 
            style={{ opacity: opacityA, y: yA }} 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 uppercase mix-blend-overlay shadow-black drop-shadow-2xl">MATCHA, UNLEASHED</h2>
            <p className="tracking-[0.4em] text-white/90 font-medium uppercase text-sm md:text-lg">CAFÉ MATCHA</p>
          </motion.div>

          {/* Text Sequence B */}
          <motion.div 
            style={{ opacity: opacityB, y: yB }} 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 uppercase mix-blend-overlay shadow-black drop-shadow-2xl">FIRST HARVEST</h2>
            <p className="tracking-[0.4em] text-white/90 font-medium uppercase text-sm md:text-lg">CEREMONIAL GRADE</p>
          </motion.div>

          {/* Text Sequence C */}
          <motion.div 
            style={{ opacity: opacityC, y: yC }} 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 uppercase mix-blend-overlay shadow-black drop-shadow-2xl">TRIPLE STRATA</h2>
            <p className="tracking-[0.4em] text-white/90 font-medium uppercase text-sm md:text-lg">ESPRESSO • MATCHA • OAT</p>
          </motion.div>

          {/* Text Sequence D */}
          <motion.div 
            style={{ opacity: opacityD, y: yD }} 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-2 uppercase mix-blend-overlay shadow-black drop-shadow-2xl">THE RITUAL</h2>
            <p className="tracking-[0.4em] text-white/90 font-medium uppercase text-sm md:text-lg">POURING NOW</p>
          </motion.div>
        </div>
      </div>
      <RemainingSections />
    </>
  );
}
