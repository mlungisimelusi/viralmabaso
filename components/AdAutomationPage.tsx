import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Menu, X, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

interface ADAutomationPageProps {
  onBack: () => void;
  onLaunch: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const ADAutomationPage: React.FC<ADAutomationPageProps> = ({ 
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

  const creationFeatures = [
    {
      icon: <i className="fas fa-bullhorn text-2xl"></i>,
      title: "Smart AD Set Creation",
      description: "Automatically generate AD sets and creative variations. AI designs multiple AD versions optimized for different audiences and platforms"
    },
    {
      icon: <i className="fas fa-brain text-2xl"></i>,
      title: "Predictive Audience Modeling",
      description: "AI analyzes your best customers and creates detailed audience profiles. Generate lookalike audiences with precision targeting"
    },
    {
      icon: <i className="fas fa-crosshairs text-2xl"></i>,
      title: "Audience Targeting Recommendations",
      description: "Get AI-powered recommendations for demographics, interests, behaviors, and custom audiences. Pinpoint your ideal customer"
    },
    {
      icon: <i className="fas fa-magic text-2xl"></i>,
      title: "Creative Variation Generation",
      description: "Automatically create multiple AD creatives with different headlines, copy, CTAs, and visuals. Test what resonates"
    },
    {
      icon: <i className="fas fa-plug text-2xl"></i>,
      title: "Multi-Platform Integration",
      description: "Seamless integration with Meta, TikTok, YouTube, Snapchat, and Google ADs APIs. Manage all campaigns from one dashboard"
    },
    {
      icon: <i className="fas fa-cogs text-2xl"></i>,
      title: "Campaign Setup Automation",
      description: "AI configures entire campaigns with optimal settings. No more manual setup - let AI handle the technical details"
    }
  ];

  const optimizationFeatures = [
    {
      icon: <i className="fas fa-chart-line text-2xl"></i>,
      title: "Automatic A/B Testing",
      description: "Continuously run A/B tests across creatives, audiences, and placements. AI identifies winners and scales them"
    },
    {
      icon: <i className="fas fa-dollar-sign text-2xl"></i>,
      title: "Real-Time Budget Optimization",
      description: "AI monitors performance and automatically shifts budgets to top-performing ads. Maximize ROI without manual intervention"
    },
    {
      icon: <i className="fas fa-users text-2xl"></i>,
      title: "Cross-Platform Attribution Modeling",
      description: "Track customer journeys across platforms. Understand which ads drive conversions and attribute value accurately"
    },
    {
      icon: <i className="fas fa-robot text-2xl"></i>,
      title: "Continuous Campaign Optimization",
      description: "AI learns from every impression, click, and conversion. Campaigns improve automatically over time with zero input"
    },
    {
      icon: <i className="fas fa-exclamation-triangle text-2xl"></i>,
      title: "Anomaly Detection & Smart Alerts",
      description: "AI detects unusual patterns - sudden drops in performance, fraud indicators, or breakthrough opportunities"
    },
    {
      icon: <i className="fas fa-gavel text-2xl"></i>,
      title: "Smart Bid Management",
      description: "AI optimizes bids in real-time based on audience value and conversion probability. Never overpay for clicks"
    }
  ];

  const benefits = [
    "Reduce AD management time by 90% with full automation",
    "Increase ROAS (Return on AD Spend) by 5-10x",
    "Run unlimited A/B tests simultaneously without manual work",
    "Scale profitable campaigns instantly with AI-driven budgets",
    "Access predictive audience modeling for precision targeting",
    "Manage campaigns across 5+ platforms from one dashboard",
    "Eliminate wasted AD spend with real-time optimization",
    "Get actionable insights on what's driving conversions",
    "Automatically find and scale your best-performing ADs",
    "Reduce customer acquisition costs by 50%+",
    "Never miss a performance opportunity with AI alerts",
    "Build lookalike audiences that actually convert"
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
            <button onClick={onBack} className="transition-colors hover:text-slate-800">AI Tutor</button>
            <span className="text-viral-cyan font-semibold">Ad Automation</span>
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
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Tutor</button>
            <span className={`text-lg font-medium text-viral-cyan`}>Ad Automation</span>
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
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 relative"
        style={{
          position: 'relative',
        }}
      >
        <div
          className="absolute left-0 right-0 top-0 z-0"
          style={{
            backgroundImage: 'url(/assets/ad-hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.45,
            pointerEvents: 'none',
            minHeight: '600px',
            height: '100%',
            maxHeight: 'none',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border mb-6 text-xs font-bold tracking-widest bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan">
            CORE FEATURE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            AD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Automation</span>
          </h1>

          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Intelligent campaign and ADs AI that creates, tests, and optimizes AD campaigns across all platforms. From audience generation to real-time budget optimization, let AI handle your AD strategy.
          </p>

          <button 
            onClick={onLaunch}
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all shadow-lg shadow-viral-purple/30"
          >
            Get Activated
          </button>
        </div>
      </section>

      {/* Redesigned Two Pillars Overview */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 border-b border-white/10 overflow-hidden" style={{background: isDarkMode ? 'linear-gradient(135deg, #0B0F19 60%, #1a1d2b 100%)' : 'linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)'}}>
        {/* Glowing background elements */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-viral-cyan/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>
        <div className="absolute -bottom-40 right-0 w-[600px] h-[400px] bg-viral-purple/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>
        {/* Faint flowing lines and arrows */}
        <svg className="absolute left-1/4 top-1/3 w-2/3 h-1/2 pointer-events-none z-0" viewBox="0 0 600 200" fill="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#23bddf" />
              <stop offset="1" stopColor="#cf29f5" />
            </linearGradient>
          </defs>
          <path d="M20 180 Q300 20 580 180" stroke="url(#lineGrad)" strokeWidth="4" opacity="0.18" />
          <path d="M100 120 Q300 80 500 120" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.10" />
          <g opacity="0.18">
            <polygon points="570,180 580,180 575,170" fill="#23bddf" />
            <polygon points="510,120 500,120 505,110" fill="#cf29f5" />
          </g>
        </svg>
        {/* Animated gradient line connecting cards */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-32 pointer-events-none z-10 animate-pulse" viewBox="0 0 600 80" fill="none">
          <defs>
            <linearGradient id="connectGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#23bddf" />
              <stop offset="1" stopColor="#cf29f5" />
            </linearGradient>
          </defs>
          <path d="M100 40 Q300 0 500 40" stroke="url(#connectGrad)" strokeWidth="6" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;40;0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
        {/* 3D-style floating cards behind */}
        <div className="absolute left-1/4 top-1/4 w-60 h-40 bg-gradient-to-br from-viral-cyan/40 to-viral-purple/30 rounded-3xl shadow-2xl blur-[2px] rotate-[-8deg] z-0 animate-float" style={{filter:'drop-shadow(0 0 40px #23bddf88)'}}></div>
        <div className="absolute right-1/4 bottom-1/4 w-52 h-36 bg-gradient-to-br from-viral-purple/40 to-viral-cyan/30 rounded-3xl shadow-2xl blur-[2px] rotate-[7deg] z-0 animate-float2" style={{filter:'drop-shadow(0 0 40px #cf29f588)'}}></div>
        {/* Main content */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-20">
          {/* Campaign & AD Creation Card */}
          <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-[#10182a] to-[#1a1d2b] shadow-xl border border-viral-cyan/30 hover:shadow-viral-cyan/40 transition-all overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-viral-cyan/30 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white mb-6 shadow-lg animate-glow">
                <i className="fas fa-bullhorn text-4xl" style={{textShadow:'0 0 16px #23bddf, 0 0 32px #cf29f5'}}></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Campaign & AD Creation</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">AD set & creative generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">Predictive audience modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">Multi-platform integration</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Campaign Optimization Card */}
          <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-[#18102a] to-[#1a1d2b] shadow-xl border border-viral-purple/30 hover:shadow-viral-purple/40 transition-all overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-viral-purple/30 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white mb-6 shadow-lg animate-glow">
                <i className="fas fa-chart-line text-4xl" style={{textShadow:'0 0 16px #cf29f5, 0 0 32px #23bddf'}}></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Campaign Optimization</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">Automatic A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">Real-time budget shifts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5 animate-glow" />
                  <span className="text-slate-200">Cross-platform attribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Micro-movement particles */}
        <div className="absolute left-1/2 top-1/3 w-2 h-2 bg-viral-cyan rounded-full blur-sm animate-ping z-20"></div>
        <div className="absolute left-1/3 top-2/3 w-3 h-3 bg-viral-purple rounded-full blur-md animate-ping z-20"></div>
        <div className="absolute right-1/4 bottom-1/4 w-2 h-2 bg-viral-cyan rounded-full blur-sm animate-ping z-20"></div>
      </section>

      {/* Campaign & AD Creation Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="relative max-w-7xl mx-auto py-12 md:py-20 rounded-3xl overflow-visible" style={{background: isDarkMode ? 'linear-gradient(135deg, #0B0F19 60%, #18102a 100%)' : 'linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)'}}>
          {/* Soft gradient glows and floating cards */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-viral-cyan/20 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>
          <div className="absolute -bottom-32 right-0 w-[400px] h-[300px] bg-viral-purple/20 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse"></div>
          {/* Abstract AI lines and arrows */}
          <svg className="absolute left-1/4 top-1/3 w-2/3 h-1/2 pointer-events-none z-0" viewBox="0 0 600 200" fill="none">
            <defs>
              <linearGradient id="aiLineGrad" x1="0" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#23bddf" />
                <stop offset="1" stopColor="#cf29f5" />
              </linearGradient>
            </defs>
            <path d="M40 180 Q300 20 560 180" stroke="url(#aiLineGrad)" strokeWidth="4" opacity="0.18" />
            <path d="M120 120 Q300 80 480 120" stroke="url(#aiLineGrad)" strokeWidth="2" opacity="0.10" />
            <g opacity="0.18">
              <polygon points="550,180 560,180 555,170" fill="#23bddf" />
              <polygon points="470,120 480,120 475,110" fill="#cf29f5" />
            </g>
          </svg>
          {/* Section header */}
          <div className="mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Campaign & AD Creation</h2>
            <p className="text-lg text-viral-cyan mb-2">AI-powered AD creation that generates complete campaigns with audience insights and creative variations</p>
            <p className="text-lg font-semibold mt-2 text-viral-purple">Social media outperforms every traditional advertising platform.</p>
          </div>
          {/* Feature mini-cards with workflow lines */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 z-10">
            {/* Connecting curved line */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 pointer-events-none z-0 animate-pulse" viewBox="0 0 600 80" fill="none">
              <defs>
                <linearGradient id="workflowGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#23bddf" />
                  <stop offset="1" stopColor="#cf29f5" />
                </linearGradient>
              </defs>
              <path d="M100 40 Q300 0 500 40" stroke="url(#workflowGrad)" strokeWidth="6" opacity="0.5">
                <animate attributeName="stroke-dashoffset" values="0;40;0" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
            {creationFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={
                  `relative flex flex-col items-center text-center p-6 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#10182a] to-[#1a1d2b] shadow-xl transition-all duration-300 cursor-pointer group ` +
                  `hover:-translate-y-2 hover:scale-105 hover:border-viral-cyan/60 hover:shadow-viral-cyan/40 animate-fade-in` +
                  (idx === 0 ? ' animate-delay-0' : idx === 1 ? ' animate-delay-1' : ' animate-delay-2')
                }
                style={{ boxShadow: '0 4px 32px 0 #23bddf22, 0 1.5px 8px 0 #cf29f522' }}
              >
                {/* Glowing gradient border and background particles */}
                <div className="absolute -z-10 -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-viral-cyan/30 to-viral-purple/20 rounded-full blur-2xl animate-pulse"></div>
                {/* Icon with glow and micro-movement */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white mb-4 shadow-lg group-hover:animate-glow group-hover:scale-110 transition-transform duration-300" style={{textShadow:'0 0 16px #23bddf, 0 0 32px #cf29f5'}}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-md">{feature.title}</h3>
                <p className="text-slate-300 mb-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Optimization Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Optimization</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Continuous AI-powered optimization that improves your campaigns every single day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 relative">
            {/* Minimal separator line between rows */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" style={{pointerEvents:'none'}}></div>
            {optimizationFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`relative group p-6 rounded-2xl border border-white/10 transition-all duration-300 bg-slate-800/40 overflow-hidden
                  hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/30
                  focus-within:shadow-2xl focus-within:shadow-black/30
                  fade-in-up
                `}
                style={{ zIndex: 1, boxShadow: '0 2px 8px 0 #0004' }}
                ref={el => {
                  if (el) {
                    if (!el._fadeInObserver) {
                      el._fadeInObserver = new window.IntersectionObserver(([entry]) => {
                        if (entry.isIntersecting) {
                          el.classList.add('visible');
                          el._fadeInObserver.disconnect();
                        }
                      }, { threshold: 0.3 });
                      el._fadeInObserver.observe(el);
                    }
                  }
                }}
              >
                {/* Icon with micro-animation and scroll fade-in */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 transition-transform duration-300
                  ${
                    idx === 0 ? 'animate-graph group-hover:scale-110 fade-in-up' :
                    idx === 1 ? 'animate-bounce-budget group-hover:scale-110 fade-in-up' :
                    idx === 2 ? 'animate-attribution group-hover:scale-110 fade-in-up' :
                    idx === 3 ? 'animate-automation group-hover:scale-110 fade-in-up' :
                    'group-hover:scale-110 fade-in-up'
                  }
                  bg-gradient-to-br from-viral-purple to-viral-cyan
                `}
                  style={{ transitionDelay: `${idx * 80 + 100}ms` }}
                  ref={iconEl => {
                    if (iconEl) {
                      if (!iconEl._fadeInObserver) {
                        iconEl._fadeInObserver = new window.IntersectionObserver(([entry]) => {
                          if (entry.isIntersecting) {
                            iconEl.classList.add('visible');
                            iconEl._fadeInObserver.disconnect();
                          }
                        }, { threshold: 0.3 });
                        iconEl._fadeInObserver.observe(iconEl);
                      }
                    }
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">{feature.title}</h3>
                <p className={`transition-all duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} group-hover:translate-x-1 group-hover:scale-105`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Animations for icons and cards */}
      <style jsx>{`
        @keyframes graphLine {
          0% { transform: translateY(0); }
          30% { transform: translateY(-3px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
        .animate-graph { animation: graphLine 2.2s cubic-bezier(.7,.2,.3,1) infinite; }
        @keyframes bounceBudget {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(2px); }
        }
        .animate-bounce-budget { animation: bounceBudget 1.8s cubic-bezier(.7,.2,.3,1) infinite; }
        @keyframes attributionConnect {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        .animate-attribution { animation: attributionConnect 2.5s ease-in-out infinite; }
        @keyframes automationPulse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          40% { transform: rotate(-6deg) scale(1.08); }
          60% { transform: rotate(6deg) scale(1.08); }
        }
        .animate-automation { animation: automationPulse 2.1s cubic-bezier(.7,.2,.3,1) infinite; }
        /* Scroll-based fade-in up */
        .fade-in-up { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(.7,.2,.3,1), transform 0.7s cubic-bezier(.7,.2,.3,1); }
        .fade-in-up.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AD Automation</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Get the results of a dedicated ADs manager and data analyst combined in one system
            </p>
            <p className={`text-lg font-semibold mt-4 ${isDarkMode ? 'text-viral-cyan' : 'text-viral-purple'}`}>
              Social media outperforms every traditional advertising platform.
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
            Scale Your AD Campaigns 5x Faster
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Let AI handle campaign creation, A/B testing, and optimization while you focus on strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onLaunch}
              className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all"
            >
              Get Activated
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

export default ADAutomationPage;
