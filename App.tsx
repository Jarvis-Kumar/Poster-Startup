
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import FeatureMatrix from './components/FeatureMatrix';
import { ALGORITHMS, USP_DATA, FLAGSHIP_FEATURES } from './constants';
import { 
  ChevronRight, Cpu, Layers, Coins, Sparkles, 
  Zap, Brain, Video, ShoppingBag, Gamepad2, X, MessageSquare, Send
} from 'lucide-react';
import { BentoGrid, BentoCard } from './components/MagicBento';

// Simple Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-4' : 'bg-transparent pt-64 pb-8'}`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-4 group cursor-default">
          <div className={`relative transition-all duration-500 ${scrolled ? 'scale-75' : 'scale-100'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-400 rounded-xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
              <span className="text-white text-4xl md:text-5xl font-black">A</span>
            </div>
          </div>
          <span className={`font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-teal-100 transition-all duration-500 ${scrolled ? 'text-3xl md:text-5xl' : 'text-5xl md:text-7xl lg:text-8xl'}`}>
            ALGOEDIT
          </span>
        </div>
      </div>
    </nav>
  );
};

// Flagship Section Component
const Flagship = () => (
  <section id="flagship" className="py-24 bg-slate-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Flagship Capabilities</h2>
          <p className="text-slate-400">Top 10 tools chosen by professional creators.</p>
        </div>
        <a href="#features" className="text-purple-400 flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0">
          View All 70+ Features <ChevronRight size={18} />
        </a>
      </div>

      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FLAGSHIP_FEATURES.map((feature, idx) => (
          <BentoCard 
            key={idx} 
            glowColor="168, 85, 247" // Purple
            className="bg-slate-950"
          >
            <div className="flex flex-col h-full">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center mb-4 text-teal-400 border border-slate-800">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  </section>
);

// Algorithms & Tech Section
const Technology = () => (
  <section id="technology" className="py-24 bg-black relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powered by the Orchestrator Model</h2>
        <p className="text-slate-400 text-lg">
          We don't just wrap one API. We route your request to the perfect neural network for the job.
        </p>
      </div>

      <BentoGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ALGORITHMS.map((algo, idx) => (
          <BentoCard 
            key={idx} 
            className="bg-slate-900/50"
            glowColor="99, 102, 241" // Indigo
          >
            <div className="flex gap-6 h-full">
              <div className="shrink-0 mt-1 text-purple-500">
                 <Brain size={32} />
              </div>
              <div>
                <div className="text-xs font-bold tracking-wider text-purple-400 uppercase mb-2">{algo.tech}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{algo.title}</h3>
                <p className="text-slate-400 leading-relaxed">{algo.description}</p>
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  </section>
);

// USP Section
const USPSection = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Cpu': return <Cpu size={32} />;
      case 'Layers': return <Layers size={32} />;
      case 'Coins': return <Coins size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="container mx-auto px-4">
        <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_DATA.map((usp, idx) => (
            <BentoCard key={idx} glowColor="20, 184, 166" className="bg-slate-900/20">
              <div className="text-center md:text-left h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white mb-6 border border-slate-800 shadow-lg">
                  {getIcon(usp.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{usp.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{usp.description}</p>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

// Use Case Carousel (Simplified)
const UseCases = () => (
  <section className="py-24 bg-slate-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for Every Creator</h2>
      <BentoGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <BentoCard className="p-0 overflow-hidden group !border-0 !bg-transparent" glowColor="255, 50, 50">
           <div className="relative h-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center group-hover:border-red-500/30 transition-colors">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="p-6 rounded-full bg-slate-900 border border-slate-800 mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                <Video className="w-12 h-12 text-red-500" strokeWidth={1.5} />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
               <h3 className="text-2xl font-bold text-white mb-2">YouTubers</h3>
               <p className="text-slate-400 text-sm">Auto-generate thumbnails, shorts, and captions in seconds.</p>
             </div>
           </div>
        </BentoCard>
        
        <BentoCard className="p-0 overflow-hidden group !border-0 !bg-transparent" glowColor="20, 184, 166">
           <div className="relative h-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center group-hover:border-teal-500/30 transition-colors">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="p-6 rounded-full bg-slate-900 border border-slate-800 mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-teal-500/50 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <ShoppingBag className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
               <h3 className="text-2xl font-bold text-white mb-2">E-Commerce</h3>
               <p className="text-slate-400 text-sm">Place products in any environment with smart background replacement.</p>
             </div>
           </div>
        </BentoCard>

        <BentoCard className="p-0 overflow-hidden group !border-0 !bg-transparent" glowColor="168, 85, 247">
           <div className="relative h-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center group-hover:border-purple-500/30 transition-colors">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="p-6 rounded-full bg-slate-900 border border-slate-800 mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <Gamepad2 className="w-12 h-12 text-purple-500" strokeWidth={1.5} />
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-8 text-center bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
               <h3 className="text-2xl font-bold text-white mb-2">Game Devs</h3>
               <p className="text-slate-400 text-sm">Generate textures, concept art, and assets on the fly.</p>
             </div>
           </div>
        </BentoCard>
      </BentoGrid>
    </div>
  </section>
);

// Custom Feedback Form Component
const CustomFeedbackForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  
  // NOTE: This ID needs to be replaced with your actual Google Form entry ID 
  // Inspect your Google Form, fill in an answer, inspect the network request to 'formResponse' 
  // to find the exact entry.123456789 ID corresponding to the comment box.
  const GOOGLE_FORM_ENTRY_ID = "entry.123456789"; 
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeer2bIGBCSm-3kzvmBBLkJb4aDvJZJ2ubgKC0Cm2AnXxyT6Q/formResponse";

  const handleSubmit = () => {
    setSubmitted(true);
    if(onSubmit) setTimeout(onSubmit, 2000);
  };

  if (submitted) {
    return (
      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-slate-900/50 animate-in fade-in">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="text-green-400" size={32} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">Feedback Received!</h3>
        <p className="text-slate-400 text-lg">Thank you for helping us improve AlgoEdit.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} onLoad={() => {}}></iframe>
      <form 
        action={GOOGLE_FORM_ACTION_URL} 
        method="POST" 
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div>
          <label className="block text-white text-5xl md:text-6xl font-black mb-6 tracking-tight">Comments & Reviews</label>
          <textarea 
            name={GOOGLE_FORM_ENTRY_ID}
            required
            placeholder="Share your thoughts on AlgoEdit..."
            className="w-full h-80 bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-white text-lg placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="self-end px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          Submit Feedback <Send size={20} />
        </button>
      </form>
    </div>
  );
};

// Feedback / Response Section
const FeedbackSection = () => (
  <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-purple-900/20 blur-[100px] pointer-events-none"></div>
    <div className="container mx-auto px-4 max-w-5xl relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">Your Voice Matters</h2>
        <p className="text-slate-400">Help shape the future of creative AI.</p>
      </div>
      
      <BentoCard className="!p-8 md:!p-16 overflow-hidden bg-slate-950 border-slate-800 shadow-2xl" glowColor="132, 0, 255" disableAnimations={true}>
        <CustomFeedbackForm />
      </BentoCard>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-slate-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-2xl font-black text-white mb-4">ALGOEDIT</div>
          <p className="text-slate-500 text-sm">
            The last creative suite you will ever need. Bridging the gap between complex research and one-click creativity.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Image Gen</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Video Gen</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Community</h4>
          <p className="text-slate-500 text-sm mb-4">
            Join our Discord to chat with other creators.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} ALGOEDIT AI STUDIO. All rights reserved.
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-50 font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Global Splash Cursor fixed to viewport, behind content but on top of base bg */}
      <SplashCursor zIndex={0} />
      
      <Header />
      <main className="relative z-0">
        <Hero />
        
        {/* Mission Statement */}
        <section id="mission" className="py-20 bg-transparent text-center px-4">
           <div className="max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed mb-6">
               We are entering the age of <span className="text-white font-semibold">synthetic creativity</span>.
             </h3>
             <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
               ALGOEDIT AI STUDIO is not just an editor; it is a generative engine built to democratize professional-grade design. 
               We bridge the gap between complex generative AI research and intuitive, one-click creative tools.
             </p>
           </div>
        </section>

        <Flagship />
        <FeatureMatrix />
        <Technology />
        <USPSection />
        <UseCases />
        <FeedbackSection />
        
        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden bg-transparent text-center px-4">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Start Creating Now
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Join thousands of creators who have already switched to the unified workflow.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-slate-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Get Started Free
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
