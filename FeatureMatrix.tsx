
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURE_CATEGORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { BentoGrid, BentoCard } from './MagicBento';

const FeatureMatrix = () => {
  const [activeTab, setActiveTab] = useState(FEATURE_CATEGORIES[0].id);

  const activeCategory = FEATURE_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="features" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decorative blobs - subtle since we have global splash */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">70+ Features.</span> The Innovation Matrix.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From generative creation to professional post-production. Every tool you need, unified in one orchestrator.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FEATURE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-white text-slate-950 shadow-lg shadow-white/10 scale-105'
                  : 'bg-slate-900/50 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Feature Grid with Magic Bento */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory?.items.map((item, idx) => (
                <BentoCard 
                  key={idx} 
                  glowColor="20, 184, 166" // Teal
                  className="bg-slate-900/40 backdrop-blur-sm hover:bg-slate-800/60"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </BentoCard>
              ))}
            </BentoGrid>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureMatrix;
