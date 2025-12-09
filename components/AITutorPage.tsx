import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<'features' | 'benefits'>('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border mb-6 text-xs font-bold tracking-widest bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan">
            CORE FEATURE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            AI Tutor & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Academy</span>
          </h1>

          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Learn social media mastery from expert instructors and AI-powered tutors. Get personalized guidance to accelerate your growth.
          </p>

          <button 
            onClick={onLaunch}
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all shadow-lg shadow-viral-purple/30"
          >
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 sticky top-20 z-40 bg-opacity-80 backdrop-blur-lg">
        <div className={`max-w-7xl mx-auto px-4 md:px-6 flex gap-8 ${isDarkMode ? 'bg-[#0B0F19]/80' : 'bg-white/80'}`}>
          <button 
            onClick={() => setActiveTab('features')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
              activeTab === 'features'
                ? 'border-viral-cyan text-viral-cyan'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Features
          </button>
          <button 
            onClick={() => setActiveTab('benefits')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
              activeTab === 'benefits'
                ? 'border-viral-cyan text-viral-cyan'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Benefits
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:border-viral-cyan ${
                    isDarkMode 
                      ? 'bg-slate-800/30 border-white/10 hover:bg-slate-800/50' 
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
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
          )}

          {activeTab === 'benefits' && (
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
          )}
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
