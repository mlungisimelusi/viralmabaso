import React from 'react';

interface CallToActionProps {
  onLaunch?: () => void;
  isDarkMode?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ onLaunch, isDarkMode = true }) => {
  return (
    <section className={`py-32 px-6 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Background Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-viral-cyan to-viral-purple blur-[120px] rounded-full pointer-events-none -z-10 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}></div>
        
        <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          One platform to create, schedule, and scale.
        </h2>
        
        <p className={`text-xl mb-10 max-w-xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Join thousands of creators and brands using Viralitics to dominate the algorithm.
        </p>
        
        <div className="flex justify-center">
            <button 
              onClick={onLaunch}
              className="px-10 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-full font-bold text-lg shadow-[0_0_25px_-5px_rgba(207,41,245,0.5)] transition-all"
            >
              Get Activated
            </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;