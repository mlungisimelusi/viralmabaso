  // AI Tutor Features (aligned with VIRALITICS.pdf and AITutorPage)
  const tutorFeatures = [
    {
      icon: <i className="fas fa-brain text-2xl"></i>,
      title: "Personalized Learning Paths",
      description: "Customized training based on your goals. AI adapts to your skill level and learning style."
    },
    {
      icon: <i className="fas fa-book-open text-2xl"></i>,
      title: "Comprehensive Courses",
      description: "Master content strategy, video creation, analytics, influencer partnerships, and ad campaigns."
    },
    {
      icon: <i className="fas fa-chalkboard-teacher text-2xl"></i>,
      title: "Live Mentorship",
      description: "Connect with industry experts and creators. Get personalized feedback and guidance."
    },
    {
      icon: <i className="fas fa-chart-bar text-2xl"></i>,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics. Get AI-powered suggestions for improvement."
    },
    {
      icon: <i className="fas fa-award text-2xl"></i>,
      title: "Certifications & Badges",
      description: "Earn recognized certifications to showcase your expertise and build credibility."
    },
    {
      icon: <i className="fas fa-project-diagram text-2xl"></i>,
      title: "Hands-On Projects",
      description: "Apply what you learn with real-world projects. Build your portfolio while mastering social media."
    }
  ];
import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Menu, X, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

interface AISocialMediaManagerPageProps {
  onBack: () => void;
  onLaunch: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const AISocialMediaManagerPage: React.FC<AISocialMediaManagerPageProps> = ({ 
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

  const contentFeatures = [
    {
      icon: <i className="fas fa-video text-2xl"></i>,
      title: "AI Script & Video Generation",
      description: "Automatically generate viral scripts, video content, thumbnails, and titles optimized for each platform"
    },
    {
      icon: <i className="fas fa-palette text-2xl"></i>,
      title: "Caption & Hashtag Creation",
      description: "AI-powered captions with platform-specific hashtags, emojis, and calls-to-action that drive engagement"
    },
    {
      icon: <i className="fas fa-network-wired text-2xl"></i>,
      title: "Multi-Platform Variants",
      description: "Automatically adapt content for TikTok, Instagram Reels, YouTube Shorts, and more with optimal formatting"
    },
    {
      icon: <i className="fas fa-chart-line text-2xl"></i>,
      title: "Creative Scoring System",
      description: "AI rates and scores content ideas using predictive models to identify top performers before publishing"
    },
    {
      icon: <i className="fas fa-file-alt text-2xl"></i>,
      title: "Content Templates & Metadata",
      description: "Pre-built templates for different content types with automatic metadata packaging for consistency"
    },
    {
      icon: <i className="fas fa-layer-group text-2xl"></i>,
      title: "Short-Form & Long-Form Creation",
      description: "Intelligent structure building for both quick viral clips and deep-dive content pieces"
    }
  ];

  const engagementFeatures = [
    {
      icon: <i className="fas fa-comments text-2xl"></i>,
      title: "Automated Comment Replies",
      description: "Intelligent responses to comments with sentiment detection. Maintains authentic voice and brand tone"
    },
    {
      icon: <i className="fas fa-envelope text-2xl"></i>,
      title: "DM Automation",
      description: "Smart direct message handling with context awareness. Route complex inquiries to your team seamlessly"
    },
    {
      icon: <i className="fas fa-shield-alt text-2xl"></i>,
      title: "Sentiment & Spam Detection",
      description: "Real-time analysis of audience sentiment. Automatically filter spam and negative comments with confidence scoring"
    },
    {
      icon: <i className="fas fa-lock text-2xl"></i>,
      title: "Platform-Safe Automation",
      description: "Built-in rate-limiting rules and platform compliance. Never risk your account with intelligent throttling"
    },
    {
      icon: <i className="fas fa-tasks text-2xl"></i>,
      title: "Engagement Task Automation",
      description: "Automate likes, follows, and engagements across platforms. Strategic automation that looks authentic"
    },
    {
      icon: <i className="fas fa-bolt text-2xl"></i>,
      title: "Real-Time Event-Driven System",
      description: "Instant responses to new comments, mentions, and messages. Never miss engagement opportunities"
    }
  ];

  const benefits = [
    "Replace a full-time social media manager with AI-powered automation",
    "Generate 30+ pieces of content weekly without manual creation",
    "Respond to every comment & message in real-time (24/7)",
    "Increase engagement rates by 400%+ with optimized content",
    "Maintain consistent posting schedule across all platforms",
    "Score content before posting to maximize performance",
    "Build authentic audience relationships at scale",
    "Save 25+ hours per week on content and engagement management",
    "Adapt content to each platform's algorithm automatically",
    "Keep your account safe with platform-compliant automation"
  ];

  // List of 15 major website Font Awesome icon classes
  const majorWebsites = [
    'fa-facebook-f', 'fa-x-twitter', 'fa-instagram', 'fa-youtube', 'fa-tiktok',
    'fa-linkedin-in', 'fa-pinterest-p', 'fa-snapchat-ghost', 'fa-reddit-alien', 'fa-discord',
    'fa-twitch', 'fa-telegram-plane', 'fa-whatsapp', 'fa-slack', 'fa-dribbble'
  ];

  // Logo brand colors
  const brandColors = [
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
    'text-viral-purple',
    'text-viral-cyan',
  ];

  // Helper to generate random positions for icons with better spacing
  function getRandomPosition(seed: number) {
    // Create a grid-like distribution to avoid clustering
    const gridCol = seed % 5; // 5 columns
    const gridRow = Math.floor(seed / 5); // 3 rows
    const x = 10 + gridCol * 18 + (Math.abs(Math.sin(seed * 2.3) * 10)); // Spread across width
    const y = 10 + gridRow * 25 + (Math.abs(Math.cos(seed * 1.7) * 15)); // Spread across height
    return { left: `${x}%`, top: `${y}%` };
  }

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
            <span className="text-viral-cyan font-semibold">AI Manager</span>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">Influencers</button>
            <button onClick={onBack} className="transition-colors hover:text-slate-800">AI Tutor</button>
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

            <button onClick={onBack} className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
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
            <span className={`text-lg font-medium text-viral-cyan`}>AI Manager</span>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Influencers</button>
            <button onClick={onBack} className={`text-lg font-medium text-left ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Tutor</button>
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
      <section className="relative w-full min-h-[480px] flex flex-col items-center justify-center py-16 md:py-28 overflow-hidden">
        {/* Animated Icon Background */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ filter: 'blur(0.5px)' }}>
          {majorWebsites.map((icon, i) => {
            const pos = getRandomPosition(i);
            return (
              <i
                key={icon}
                className={`fab ${icon} text-[24px] md:text-[36px] opacity-20 animate-float-icon icon-anim-${i} ${brandColors[i % brandColors.length]}`}
                style={{
                  position: 'absolute',
                  ...pos,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border mb-6 text-xs font-bold tracking-widest bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan">
            CORE FEATURE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            AI Social Media <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Manager</span>
          </h1>

          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Your complete AI-powered social media management system. Create viral content, manage engagement, and scale your presence across all platforms with two intelligent pillars: AI Content Engine & AI Engagement Manager.
          </p>

          <button 
            onClick={onLaunch}
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all shadow-lg shadow-viral-purple/30"
          >
            Get Activated
          </button>
        </div>
      </section>

      {/* Two Pillars Overview */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 border-b border-white/10 overflow-visible bg-[#0a0c1b]">
        {/* Holographic grid and ambient gradient background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full animate-holo-grid" viewBox="0 0 1440 600" fill="none">
            <defs>
              <linearGradient id="gridLine2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                <stop stopColor="#23BDEE" stopOpacity="0.10" />
                <stop offset="1" stopColor="#7F57FF" stopOpacity="0.07" />
              </linearGradient>
            </defs>
            {[...Array(16)].map((_,i)=>(
              <line key={i} x1={i*90} y1="0" x2={i*90} y2="600" stroke="url(#gridLine2)" strokeWidth="1" />
            ))}
            {[...Array(8)].map((_,i)=>(
              <line key={i} x1="0" y1={i*75} x2="1440" y2={i*75} stroke="url(#gridLine2)" strokeWidth="1" />
            ))}
          </svg>
          {/* Ambient gradient blobs */}
          <div className="absolute left-[-8%] top-[-8%] w-[420px] h-[420px] bg-gradient-to-br from-[#23BDEE55] via-[#7F57FF33] to-[#D350FF11] rounded-full blur-3xl opacity-60 animate-float-blob" />
          <div className="absolute right-[-8%] bottom-[-8%] w-[320px] h-[320px] bg-gradient-to-tr from-[#D350FF55] via-[#23BDEE33] to-[#7F57FF11] rounded-full blur-2xl opacity-50 animate-float-blob2" />
        </div>
        <style jsx>{`
          @keyframes holoGrid {
            0% { opacity: 0.85; transform: scale(1) translateY(0px); }
            50% { opacity: 1; transform: scale(1.01) translateY(-8px); }
            100% { opacity: 0.85; transform: scale(1) translateY(0px); }
          }
          .animate-holo-grid { animation: holoGrid 7s ease-in-out infinite; }
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
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-16 py-6">
            {/* AI Content Engine Card */}
            <div className="relative flex-1 min-w-[320px] max-w-xl bg-white/5 backdrop-blur-md rounded-3xl border-2 border-cyan-400/30 shadow-2xl group transition-all duration-300 overflow-hidden hover:shadow-cyan-400/30 hover:-translate-y-2 hover:border-cyan-400/60" style={{boxShadow:'0 8px 48px 0 #23BDEE22, 0 2px 16px 0 #7F57FF22'}}>
              {/* Glowing lines/data streams */}
              <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <defs>
                  <linearGradient id="stream1" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#23BDEE" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#7F57FF" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path d="M60 40 Q120 120 200 60 Q280 0 340 80" stroke="url(#stream1)" strokeWidth="2.5" opacity="0.18" />
                <path d="M80 120 Q180 200 320 120" stroke="url(#stream1)" strokeWidth="2" opacity="0.13" />
                <path d="M100 200 Q200 320 300 200" stroke="url(#stream1)" strokeWidth="1.5" opacity="0.10" />
              </svg>
              <div className="relative z-10 flex flex-col items-center text-center px-10 py-12">
                {/* Icon orb and animated beams will be added next */}
                <div className="mb-7" />
                <h2 className="text-3xl font-bold mb-5 text-white drop-shadow-lg">AI Content Engine</h2>
                <ul className="space-y-4 w-full max-w-xs mx-auto">
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-cyan-100 transition-all">Scripts, videos & thumbnails</span>
                  </li>
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-cyan-100 transition-all">Multi-platform optimization</span>
                  </li>
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-cyan-100 transition-all">Creative scoring & rating</span>
                  </li>
                </ul>
              </div>
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-[2.5px] z-0" />
            </div>
            {/* AI Engagement Manager Card */}
            <div className="relative flex-1 min-w-[320px] max-w-xl bg-white/5 backdrop-blur-md rounded-3xl border-2 border-purple-400/30 shadow-2xl group transition-all duration-300 overflow-hidden hover:shadow-purple-400/30 hover:-translate-y-2 hover:border-purple-400/60" style={{boxShadow:'0 8px 48px 0 #7F57FF22, 0 2px 16px 0 #D350FF22'}}>
              {/* Faint network node connections */}
              <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="80" cy="80" r="4" fill="#7F57FF" fillOpacity="0.13" />
                <circle cx="320" cy="120" r="5" fill="#D350FF" fillOpacity="0.10" />
                <circle cx="200" cy="300" r="3" fill="#23BDEE" fillOpacity="0.10" />
                <path d="M80 80 Q200 40 320 120" stroke="#7F57FF" strokeWidth="2" opacity="0.10" />
                <path d="M80 80 Q140 200 200 300 Q260 200 320 120" stroke="#D350FF" strokeWidth="2" opacity="0.10" />
              </svg>
              <div className="relative z-10 flex flex-col items-center text-center px-10 py-12">
                {/* Icon orb and animated bubbles will be added next */}
                <div className="mb-7" />
                <h2 className="text-3xl font-bold mb-5 text-white drop-shadow-lg">AI Engagement Manager</h2>
                <ul className="space-y-4 w-full max-w-xs mx-auto">
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-500 to-cyan-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-purple-100 transition-all">Comment & DM automation</span>
                  </li>
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-500 to-cyan-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-purple-100 transition-all">Sentiment & spam filtering</span>
                  </li>
                  <li className="flex items-center gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-500 to-cyan-400 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </span>
                    <span className="text-base text-slate-200 group-hover/item:text-purple-100 transition-all">Real-time event system</span>
                  </li>
                </ul>
              </div>
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-[2.5px] z-0" />
            </div>
          </div>
        </div>
        {/* Animation styles for micro-animations */}
        <style jsx>{`
          @keyframes brainPulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.08);} }
          .animate-brain-pulse { animation: brainPulse 2.2s cubic-bezier(.7,.2,.3,1) infinite; }
          @keyframes engageConnect { 0%,100%{filter:brightness(1);} 50%{filter:brightness(1.3);} }
          .animate-engage-connect { animation: engageConnect 2.5s cubic-bezier(.7,.2,.3,1) infinite; }
        `}</style>
      </section>
      {/* Content Engine Features Section - Premium Futuristic Design */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 border-b border-white/10 overflow-hidden bg-[#0a0c1b]">
              {/* Animated holographic grid background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Animated grid */}
                <svg className="absolute inset-0 w-full h-full animate-holo-grid" viewBox="0 0 1440 600" fill="none">
                  <defs>
                    <linearGradient id="gridLine" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop stopColor="#23BDEE" stopOpacity="0.13" />
                      <stop offset="1" stopColor="#7F57FF" stopOpacity="0.09" />
                    </linearGradient>
                  </defs>
                  {[...Array(16)].map((_,i)=>(
                    <line key={i} x1={i*90} y1="0" x2={i*90} y2="600" stroke="url(#gridLine)" strokeWidth="1" />
                  ))}
                  {[...Array(8)].map((_,i)=>(
                    <line key={i} x1="0" y1={i*75} x2="1440" y2={i*75} stroke="url(#gridLine)" strokeWidth="1" />
                  ))}
                </svg>
                {/* Gradient blobs and holographic flares */}
                <div className="absolute left-[-10%] top-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#23BDEE99] via-[#7F57FF55] to-[#D350FF33] rounded-full blur-3xl opacity-60 animate-float-blob" />
                <div className="absolute right-[-8%] bottom-[-8%] w-[320px] h-[320px] bg-gradient-to-tr from-[#D350FF88] via-[#23BDEE44] to-[#7F57FF22] rounded-full blur-2xl opacity-50 animate-float-blob2" />
              </div>
              <div className="relative max-w-7xl mx-auto z-10">
                {/* Headline with glowing beam */}
                <div className="relative flex flex-col items-center mb-14">
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-72 h-6 bg-gradient-to-r from-[#23BDEE55] via-[#7F57FF99] to-[#D350FF55] blur-lg rounded-full opacity-80 animate-glow-beam" />
                  <h2 className="relative text-3xl md:text-4xl font-bold text-center tracking-tight text-white drop-shadow-lg z-10 px-6 py-2">AI Content Engine Features</h2>
                </div>
                {/* Subtle AI network lines/dots between cards */}
                <svg className="absolute left-1/2 top-[44%] -translate-x-1/2 z-0 w-[700px] h-[320px] pointer-events-none opacity-30" viewBox="0 0 700 320" fill="none">
                  <circle cx="120" cy="80" r="4" fill="#23BDEE" fillOpacity="0.18" />
                  <circle cx="350" cy="60" r="5" fill="#7F57FF" fillOpacity="0.13" />
                  <circle cx="580" cy="110" r="4" fill="#D350FF" fillOpacity="0.15" />
                  <circle cx="220" cy="220" r="3" fill="#23BDEE" fillOpacity="0.13" />
                  <circle cx="480" cy="250" r="3" fill="#D350FF" fillOpacity="0.13" />
                  <circle cx="180" cy="150" r="2.5" fill="#23BDEE" fillOpacity="0.10" />
                  <circle cx="400" cy="180" r="2.5" fill="#7F57FF" fillOpacity="0.10" />
                  <circle cx="600" cy="200" r="2.5" fill="#D350FF" fillOpacity="0.10" />
                  <path d="M120 80 Q350 20 580 110" stroke="#23BDEE" strokeWidth="2" opacity="0.10" />
                  <path d="M120 80 Q220 180 350 60 Q480 140 580 110" stroke="#7F57FF" strokeWidth="2" opacity="0.10" />
                  <path d="M220 220 Q350 300 480 250" stroke="#D350FF" strokeWidth="2" opacity="0.10" />
                  <path d="M180 150 Q350 100 400 180 Q600 120 600 200" stroke="#23BDEE" strokeWidth="1.5" opacity="0.08" strokeDasharray="6 8" />
                </svg>
                {/* Extra gradient flares for depth */}
                <div className="absolute left-[10%] top-[60%] w-32 h-32 bg-gradient-to-br from-[#23BDEE55] via-[#7F57FF33] to-[#D350FF11] rounded-full blur-2xl opacity-40 animate-float-blob" />
                <div className="absolute right-[12%] top-[20%] w-24 h-24 bg-gradient-to-tr from-[#D350FF55] via-[#23BDEE33] to-[#7F57FF11] rounded-full blur-2xl opacity-35 animate-float-blob2" />
                {/* Features grid will be added below */}
              </div>
              {/* Holographic grid and blob animations */}
              <style jsx>{`
                @keyframes holoGrid {
                  0% { opacity: 0.85; transform: scale(1) translateY(0px); }
                  50% { opacity: 1; transform: scale(1.01) translateY(-8px); }
                  100% { opacity: 0.85; transform: scale(1) translateY(0px); }
                }
                .animate-holo-grid { animation: holoGrid 7s ease-in-out infinite; }
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
                @keyframes glowBeam {
                  0%,100% { opacity: 0.7; filter: blur(16px); }
                  50% { opacity: 1; filter: blur(24px); }
                }
                .animate-glow-beam { animation: glowBeam 2.8s cubic-bezier(.7,.2,.3,1) infinite; }
              `}</style>
            </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`relative group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-transparent shadow-xl transition-all duration-300 min-h-[260px] fade-in-up-card`}
                style={{
                  boxShadow: '0 6px 32px 0 #23BDEE22, 0 1.5px 8px 0 #7F57FF22',
                  animationDelay: `${0.12 + idx * 0.13}s`,
                }}
                onMouseMove={e => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--x', `${x}px`);
                  card.style.setProperty('--y', `${y}px`);
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget;
                  card.style.setProperty('--x', `50%`);
                  card.style.setProperty('--y', `50%`);
                }}
              >
                {/* Neon animated border */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 border-2 border-transparent group-hover:border-gradient group-hover:from-[#23BDEE] group-hover:via-[#7F57FF] group-hover:to-[#D350FF] group-hover:animate-border-glow" style={{borderImage: 'linear-gradient(90deg,#23BDEE,#7F57FF,#D350FF) 1'}} />
                {/* Icon and card content */}
                <div className="relative z-10 w-14 h-14 mb-5 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#23BDEE] via-[#7F57FF] to-[#D350FF] shadow-lg animate-float-icon group-hover:animate-icon-glow">
                  {feature.icon}
                  <span className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#23BDEE88] via-[#7F57FF88] to-[#D350FF88] blur-xl" />
                  </span>
                </div>
                <h3 className="relative z-10 text-xl font-semibold mb-2 text-white drop-shadow-md">{feature.title}</h3>
                <p className="relative z-10 text-base text-slate-300 leading-relaxed">{feature.description}</p>
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-[2.5px] z-0" />
              </div>
            ))}
          </div>
          {/* Card slide-in, 3D tilt, and border light animation */}
          <style jsx>{`
            .fade-in-up-card {
              opacity: 0;
              transform: translateY(32px) scale(0.98) perspective(800px) rotateX(8deg);
              animation: fadeInUpCard 0.85s cubic-bezier(.7,.2,.3,1) forwards;
            }
            @keyframes fadeInUpCard {
              0% { opacity: 0; transform: translateY(32px) scale(0.98) perspective(800px) rotateX(8deg); }
              80% { opacity: 1; transform: translateY(-4px) scale(1.01) perspective(800px) rotateX(0deg); }
              100% { opacity: 1; transform: translateY(0) scale(1) perspective(800px) rotateX(0deg); }
            }
            .group:hover {
              transform: translateY(-8px) scale(1.025) perspective(800px) rotateX(2deg) rotateY(calc((var(--x,50px)-56px)/32deg)) rotateX(calc((var(--y,50px)-56px)/32deg));
              box-shadow: 0 12px 48px 0 #23BDEE44, 0 2px 16px 0 #D350FF44;
              border-image: linear-gradient(90deg,#23BDEE,#7F57FF,#D350FF) 1;
            }
            .group:active {
              transform: scale(0.98);
            }
            @keyframes floatIcon {
              0%,100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-8px) scale(1.06); }
            }
            .animate-float-icon { animation: floatIcon 3.2s ease-in-out infinite; }
            @keyframes iconGlow {
              0%,100% { filter: drop-shadow(0 0 0 #23BDEE88) drop-shadow(0 0 0 #D350FF88); }
              50% { filter: drop-shadow(0 0 16px #23BDEE) drop-shadow(0 0 24px #D350FF); }
            }
            .group-hover\:animate-icon-glow:hover {
              animation: iconGlow 1.2s cubic-bezier(.7,.2,.3,1) infinite;
            }
            .group:hover .group-hover\:border-gradient {
              border-image: linear-gradient(90deg,#23BDEE,#7F57FF,#D350FF) 1;
              border-width: 2px;
            }
            @keyframes borderGlow {
              0%,100% { box-shadow: 0 0 0 0 #23BDEE44, 0 0 0 0 #D350FF44; }
              50% { box-shadow: 0 0 24px 4px #23BDEE66, 0 0 32px 8px #D350FF66; }
            }
            .group-hover\:animate-border-glow {
              animation: borderGlow 1.8s cubic-bezier(.7,.2,.3,1) infinite;
            }
          `}</style>
          {/* Scroll-based fade-in logic for cards */}
          <script dangerouslySetInnerHTML={{__html:`
            document.addEventListener('DOMContentLoaded',function(){
              document.querySelectorAll('.fade-in-up-card').forEach(function(el,i){
                if(!el._fadeInObserver){
                  el._fadeInObserver=new window.IntersectionObserver(function([entry]){
                    if(entry.isIntersecting){el.style.opacity=1;el.style.transform='none';el._fadeInObserver.disconnect();}
                  },{threshold:0.2});
                  el._fadeInObserver.observe(el);
                }
              });
            });
          `}} />

      {/* Engagement Manager Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Engagement Manager Features</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Automate engagement tasks and manage audience interactions at scale with intelligent automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all hover:border-viral-purple ${
                  isDarkMode 
                    ? 'bg-slate-800/30 border-white/10 hover:bg-slate-800/50' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Social Media Manager</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Get all the benefits of a dedicated social media team with AI efficiency and 24/7 availability
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
            Replace Your Entire Social Media Team
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Get the power of a dedicated content creator and community manager combined in one intelligent system.
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

export default AISocialMediaManagerPage;

/* Add to global CSS (e.g., index.css or in a <style jsx global>)
.animate-float-icon {
  animation: floatIcon 7s ease-in-out infinite alternate;
}
@keyframes floatIcon {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-40px) scale(1.15); }
}
*/
