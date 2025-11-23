import React from 'react';
import { motion } from 'framer-motion';
import SplashCursor from './SplashCursor';
import BlobCursor from './BlobCursor';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-slate-950 pt-[32rem]">
      {/* Splash Cursor Background */}
      <SplashCursor />
      
      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto mt-10 flex flex-col items-center"
        >
          {/* Blob Cursor Container replacing Image */}
          <div className="relative w-full max-w-lg h-[400px] mb-12 flex justify-center items-center">
             <div className="absolute inset-0">
                <BlobCursor 
                  fillColor="#a855f7" // Purple-500
                  innerColor="#ffffff"
                  sizes={[100, 150, 80]}
                  innerSizes={[15, 25, 15]}
                  opacities={[0.5, 0.4, 0.3]}
                  trailCount={3}
                  zIndex={10}
                />
             </div>
             {/* Optional Label or overlay text inside the blob area if desired, or leave empty for pure visual */}
             <div className="relative z-20 text-white/50 font-mono text-sm tracking-widest pointer-events-none select-none mix-blend-overlay">
               INTERACTIVE CORE
             </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white mb-8 leading-tight">
            Imagine. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 animate-gradient">
              Describe. Done.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            ALGOEDIT AI STUDIO is not just an editor; it is a generative engine built to democratize professional-grade design. Create, edit, and transform media instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;