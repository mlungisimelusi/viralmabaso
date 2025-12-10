import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Menu, X, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

interface AITutorPageProps {
  onBack: () => void;
  onLaunch: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const AITutorPage: React.FC<AITutorPageProps> = ({ 
  onBack, 
  onLaunch, 
  isDarkMode, 
  setIsDarkMode 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <i className="fas fa-brain text-2xl"></i>,
      title: "Personalized Learning Paths",
      description: "Get customized training based on your skill level and goals. AI adapts to your learning pace and style"
    },
    {
      icon: <i className="fas fa-book-open text-2xl"></i>,
      title: "Comprehensive Courses",
      description: "Master content strategy, video creation, analytics, influencer partnerships, and ad campaigns with structured lessons"
    },
    {
      icon: <i className="fas fa-chalkboard-teacher text-2xl"></i>,
      title: "Live Mentorship",
      description: "Connect with industry experts and experienced creators. Get personalized feedback on your work and strategies"
    },
    {
      icon: <i className="fas fa-chart-bar text-2xl"></i>,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics. Understand what's working and get AI-powered suggestions for improvement"
    },
    {
      icon: <i className="fas fa-award text-2xl"></i>,
      title: "Certifications & Badges",
      description: "Earn recognized certifications that showcase your expertise. Build credibility with your audience"
    },
    {
      icon: <i className="fas fa-project-diagram text-2xl"></i>,
      title: "Hands-On Projects",
      description: "Apply what you learn with real-world projects. Build your portfolio while mastering social media management"
    }
  ];

  const benefits = [
    "Learn at your own pace with flexible schedules",
    "Access 100+ hours of expert training content",
    "Get certified credentials recognized in the industry",
    "Skip beginner mistakes and accelerate your growth",
    "Network with thousands of creators and marketers",
    "Build a portfolio of successful campaigns",
    "Get 1-on-1 mentorship from industry experts",
    "Stay updated with the latest platform changes and trends"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Ambient Background */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      {/* Navbar */}
      <nav className={`fixed left-1/2 -translate-x-1/2 top-4 z-50 border backdrop-blur-xl transition-all duration-300 rounded-full bg-transparent border-white/10 w-[90%] md:w-[95%] max-w-7xl`}>
        <div className="px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <button onClick={onBack} className="inline-flex items-center h-full md:mr-8 cursor-pointer">
            <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[60px] md:h-[100px] w-auto object-contain" />
          </button>
          
          {/* Desktop Nav (Center) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 transition-colors">
            <button onClick={onBack} className="transition-colors hover:text-slate-800">Home</button>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">AI Manager</button>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">Influencers</button>
            <span className="text-viral-cyan font-semibold">AI Tutor</span>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">Ad Creator</button>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">Pricing</button>
          </div>

          {/* Right Side: Theme Toggle, Log in, Get Activated */}
          <div className="hidden md:flex items-center gap-4">
             <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full transition-colors text-slate-600 hover:text-slate-800 hover:bg-slate-200"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={onBack} className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-800">
              Log in
            </button>
            <button 
              onClick={onLaunch}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${isDarkMode ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              Get Activated
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-20 left-0 w-full border-b p-6 flex flex-col gap-4 ${isDarkMode ? 'bg-[#0B0F19] border-white/10' : 'bg-white border-slate-200'}`}>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Home</button>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Manager</button>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Influencers</button>
            <span className={`text-lg font-medium text-viral-cyan`}>AI Tutor</span>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Ad Creator</button>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pricing</button>
            
            <div className="flex items-center justify-between mt-2">
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Theme</span>
                <button 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}`}
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <button onClick={onLaunch} className="w-full bg-gradient-to-r from-viral-cyan to-viral-purple py-3 rounded-lg font-bold text-white mt-4">
              Get Activated
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 relative overflow-visible">
        {/* 3D Animated Background Effect */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {/* Animated gradient blobs */}
          <div className="absolute left-[-10%] top-[-18%] w-[480px] h-[480px] bg-gradient-to-br from-[#23BDEE99] via-[#7F57FF55] to-[#D350FF33] rounded-full blur-[120px] opacity-70 animate-float-blob" />
          <div className="absolute right-[-12%] bottom-[-12%] w-[340px] h-[340px] bg-gradient-to-tr from-[#D350FF88] via-[#23BDEE44] to-[#7F57FF22] rounded-full blur-[100px] opacity-60 animate-float-blob2" />
          {/* Animated neural network lines */}
          <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1440 320" fill="none">
            <defs>
              <linearGradient id="tutorGrid" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                <stop stopColor="#23BDEE" stopOpacity="0.13" />
                <stop offset="1" stopColor="#7F57FF" stopOpacity="0.09" />
              </linearGradient>
            </defs>
            {[...Array(12)].map((_,i)=>(
              <line key={i} x1={i*120} y1="0" x2={i*120} y2="320" stroke="url(#tutorGrid)" strokeWidth="1" />
            ))}
            {[...Array(6)].map((_,i)=>(
              <line key={i} x1="0" y1={i*54} x2="1440" y2={i*54} stroke="url(#tutorGrid)" strokeWidth="1" />
            ))}
            {/* 3D neural curves */}
            <path d="M120 80 Q400 20 900 180 Q1300 300 1400 80" stroke="#23BDEE" strokeWidth="2.5" opacity="0.10" fill="none" />
            <path d="M400 200 Q700 80 1100 220" stroke="#D350FF" strokeWidth="2" opacity="0.08" fill="none" />
            <path d="M300 60 Q600 180 900 60 Q1200 0 1300 200" stroke="#7F57FF" strokeWidth="1.5" opacity="0.09" fill="none" />
          </svg>
        </div>
        <style jsx>{`
          @keyframes floatBlob {
            0%,100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-18px) scale(1.04); }
          }
          .animate-float-blob { animation: floatBlob 8s ease-in-out infinite; }
          @keyframes floatBlob2 {
            0%,100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(12px) scale(1.03); }
          }
          .animate-float-blob2 { animation: floatBlob2 9s ease-in-out infinite; }
        `}</style>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border mb-6 text-xs font-bold tracking-widest bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan">
            CORE FEATURE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            AI Tutor
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Learn social media mastery from AI-powered tutor. Get personalized guidance to accelerate your growth.
          </p>
          <button 
            onClick={onLaunch}
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all shadow-lg shadow-viral-purple/30"
          >
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Tutor Features</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Personalized learning, instant feedback, and interactive lessons for every student.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Tutor</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Unlock every learner’s potential with adaptive technology and expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-4 p-6 rounded-xl border ${
                  isDarkMode 
                    ? 'bg-slate-800/30 border-white/10' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <CheckCircle2 className="w-6 h-6 text-viral-cyan flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 md:px-6 ${isDarkMode ? 'bg-gradient-to-r from-viral-cyan/10 to-viral-purple/10' : 'bg-gradient-to-r from-viral-cyan/5 to-viral-purple/5'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to level up your skills?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Join thousands of creators learning how to build profitable social media businesses with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onLaunch}
              className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all"
            >
              Start Learning Today
            </button>
            <button 
              onClick={onBack}
              className={`px-8 py-4 rounded-full text-lg font-bold border-2 transition-all ${
                isDarkMode 
                  ? 'border-white/20 text-white hover:bg-white/5' 
                  : 'border-slate-300 text-slate-900 hover:bg-slate-100'
              }`}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default AITutorPage;
