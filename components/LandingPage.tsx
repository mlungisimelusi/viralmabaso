
import React, { useState, useEffect, useRef } from 'react';
import CallToAction from './CallToAction';
import ChatBot from './ChatBot';
import { 
  Menu,
  X,
  CheckCircle2, 
  Globe, 
  Sliders,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  BadgeCheck,
  Home,
  Search as SearchIcon,
  PlusSquare,
  Trophy,
  Sun,
  Moon,
  GraduationCap,
  Target,
  Check,
  TrendingUp,
  ArrowRight,
  Zap,
  Award,
  Crown
} from 'lucide-react';

interface LandingPageProps {
  onLaunch: () => void;
  onLogin?: () => void;
  onPricing?: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch, onLogin, onPricing, isDarkMode, setIsDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`min-h-screen selection:bg-viral-cyan selection:text-[#0B0F19] overflow-x-hidden font-sans transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* --- Ambient Background Glows --- */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      {/* --- Navbar --- */}
      <nav className={`fixed w-full z-50 top-0 border-b backdrop-blur-xl transition-all duration-300 ${scrollY > 50 ? 'shadow-lg' : ''} ${isDarkMode ? 'bg-[#0B0F19]/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <a href="#" className="inline-flex items-center h-full md:mr-8">
            <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[100px] w-auto object-contain" />
            <span className="sr-only">Viralitics</span>
          </a>
          
          {/* Desktop Nav (Center) */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <a href="#" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Home</a>
            <a href="#ai-manager" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Manager</a>
            <a href="#influencers" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Influencers</a>
            <a href="#ai-tutor" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Tutor</a>
            <a href="#ad-creator" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Ad Creator</a>
            <button onClick={onPricing} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Pricing</button>
          </div>

          {/* Right Side: Theme Toggle, Log in, Get Activated */}
          <div className="hidden md:flex items-center gap-4">
             {/* Theme Toggle */}
             <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={onLogin} className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
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
          <div className={`md:hidden absolute top-20 left-0 w-full border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 ${isDarkMode ? 'bg-[#0B0F19] border-white/10' : 'bg-white border-slate-200'}`}>
            <a href="#" className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Home</a>
            <a href="#ai-manager" className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Manager</a>
            <a href="#influencers" className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Influencers</a>
            <a href="#ai-tutor" className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Tutor</a>
            <a href="#ad-creator" className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Ad Creator</a>
            <button onClick={onPricing} className={`text-lg font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pricing</button>
            
            <div className="flex items-center justify-between mt-2">
                <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Theme</span>
                <button 
                    onClick={toggleTheme} 
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

      {/* --- Hero Section (2-Column, Text Left, Image Right) --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden flex items-center min-h-[90vh]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        
        {/* Background Image Layer (video removed) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
            {/* Static background image replacing video */}
            <img
                src="https://images.pexels.com/photos/3196024/pexels-photo-3196024.jpeg"
                alt="Influencers Background"
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            {/* Decorative hero image (dimmed) - visible on large screens only and placed fully in the background */}
            <img
                src="https://images.unsplash.com/photo-1520975917410-5b0f9b2f4a1b?q=80&w=1600&auto=format&fit=crop"
                alt="Social media interaction"
                className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none -z-30"
            />

            {/* Overlay to ensure text readability (Adaptive for Light/Dark Mode) */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-[#0B0F19]/85' : 'bg-white/85'}`}></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
           {/* Text Column (Left) */}
          <div className="relative z-10 lg:order-1 scroll-animate text-center lg:text-left lg:pl-8">
             
             <h1 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Create. Automate. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Grow Faster.</span>
             </h1>

             <p className={`text-lg max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Your all-in-one social media management platform for planning, creating, scheduling, and optimizing content across every major platform.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={onLaunch}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-full font-bold text-lg shadow-[0_0_25px_-5px_rgba(207,41,245,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  Get Activated
                </button>
             </div>
          </div>

           {/* Video Column (Right) */}
          <div className="relative z-10 lg:order-2 scroll-animate animate-delay-200 flex justify-center items-center">
             {/* Glow Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-viral-cyan/20 to-viral-purple/20 blur-[100px] rounded-full -z-10"></div>
             
             {/* Video Container */}
             <div className={`relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl group ${isDarkMode ? 'border border-white/10' : 'border border-slate-200'}`}>
                <video 
                   src="/assets/hero-video.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   className="w-full h-full object-cover"
                />
             </div>
          </div>

        </div>
      </section>

      {/* --- About Us Section --- */}
      <section className={`py-24 px-6 relative transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
         {/* Background subtle effect */}
         <div className={`absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l opacity-50 -z-10 ${isDarkMode ? 'from-[#111827] to-transparent' : 'from-slate-200 to-transparent'}`}></div>
         
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Image with Floating Card */}
            <div className="relative scroll-animate">
                <div className={`relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl group ${isDarkMode ? 'border border-white/5' : 'border border-slate-200'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                      alt="Social media analytics dashboard" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${isDarkMode ? 'from-[#0B0F19] via-transparent to-transparent' : 'from-slate-50 via-transparent to-transparent'}`}></div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="scroll-animate animate-delay-200">
                {/* Label */}
                <div className={`inline-block px-3 py-1 rounded-full border text-viral-cyan text-xs font-bold tracking-wider mb-6 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                    ABOUT VIRALITICS
                </div>
                
                {/* Heading */}
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Social Media Success</span>
                </h2>
                
                {/* Description */}
                <div className={`space-y-6 text-lg leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <p>
                        Viralitics is an AI-first, all-in-one social media management tool designed to replace traditional teams with a single, unified automation engine. We empower creators and brands to reclaim 90% of their time by automating the entire content lifecycle - from ideation and creation to scheduling and real-time optimization.
                    </p>
                    <p>
                        Our intelligent control center integrates seamlessly with 15+ major platforms, including TikTok, Instagram, YouTube, and LinkedIn. Beyond just posting, Viralitics manages complex engagement strategies, scales influencer collaborations through AI-driven scoring, and optimizes paid campaigns automatically, acting as your 24/7 digital growth team.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* --- AI Manager / Core Features --- */}
      <section id="ai-manager" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
                 {/* Core Features Label */}
                <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest mb-6 transition-colors ${isDarkMode ? 'bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan' : 'bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan'}`}>
                    CORE FEATURES
                </div>
                
                <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Dominate.</span>
                </h2>
                <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    A complete suite of AI tools designed to replace fragmented workflows. One login, infinite reach.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1: AI Social Media Manager */}
                <div className={`scroll-animate animate-delay-100 rounded-3xl p-8 transition-all group overflow-hidden relative border ${isDarkMode ? 'bg-[#131b2c] border-white/5 hover:border-viral-cyan/30' : 'bg-white border-slate-200 shadow-sm hover:border-viral-cyan/50 hover:shadow-md'}`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-viral-cyan/10 blur-[80px] rounded-full group-hover:bg-viral-cyan/20 transition-all"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Custom Brand Icon: Hand with interactions */}
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                             <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
                                {/* Hand Base */}
                                <path d="M25 75 Q50 90 75 75" stroke="url(#icon_gradient_manager)" strokeWidth="6" strokeLinecap="round" />
                                {/* Stems */}
                                <path d="M50 75 L50 45" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                <path d="M50 75 L25 50" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                <path d="M50 75 L75 50" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                
                                {/* Circles */}
                                <circle cx="25" cy="40" r="14" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                <circle cx="50" cy="30" r="14" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                <circle cx="75" cy="40" r="14" stroke="url(#icon_gradient_manager)" strokeWidth="4" />
                                
                                {/* Icons inside circles */}
                                {/* Heart (Left) */}
                                <path d="M25 36 C23 34 20 34 20 37 C20 40 25 44 25 44 C25 44 30 40 30 37 C30 34 27 34 25 36" stroke="url(#icon_gradient_manager)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Play (Middle) */}
                                <path d="M47 26 L56 30 L47 34 Z" stroke="url(#icon_gradient_manager)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Thumbs Up (Right) - Simple check/tick style for scale */}
                                <path d="M72 40 V36 H75 L76 34 L78 34 C79 34 79 35 79 36 L78 38 H80 V42 H72" stroke="url(#icon_gradient_manager)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                                <defs>
                                    <linearGradient id="icon_gradient_manager" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#23bddf" />
                                        <stop offset="1" stopColor="#cf29f5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AI Social Media Manager</h3>
                        <p className={`mb-6 flex-grow transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Stop guessing. Generate high-retention scripts, hooks, and engagement strategies tailored to your niche. Our AI manages your posting schedule to maximize reach.
                        </p>
                        
                        <a href="#ai-manager" className="inline-flex items-center gap-2 text-viral-cyan font-bold hover:gap-3 transition-all">
                            Learn more <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Card 2: Ad Automation */}
                <div className={`scroll-animate animate-delay-200 rounded-3xl p-8 transition-all group overflow-hidden relative border ${isDarkMode ? 'bg-[#131b2c] border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50 hover:shadow-md'}`}>
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         {/* Custom Brand Icon: Gear with Play + Arrows */}
                         <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                            <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
                                {/* Rotating Arrow Top */}
                                <path d="M20 50 A30 30 0 0 1 50 20" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" />
                                <path d="M50 20 L44 26 M50 20 L56 26" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

                                {/* Rotating Arrow Bottom */}
                                <path d="M80 50 A30 30 0 0 1 50 80" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" />
                                <path d="M50 80 L56 74 M50 80 L44 74" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                
                                {/* Gear Body */}
                                <circle cx="50" cy="50" r="16" stroke="url(#icon_gradient_ads)" strokeWidth="5" />
                                {/* Gear Teeth */}
                                <path d="M50 26 V22 M50 78 V74 M74 50 H78 M26 50 H22" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" />
                                <path d="M67 33 L70 30 M33 67 L30 70 M67 67 L70 70 M33 33 L30 30" stroke="url(#icon_gradient_ads)" strokeWidth="5" strokeLinecap="round" />

                                {/* Play Button in center */}
                                <path d="M46 44 L56 50 L46 56 Z" fill="url(#icon_gradient_ads)" />

                                <defs>
                                    <linearGradient id="icon_gradient_ads" x1="20" y1="95" x2="75" y2="5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3b82f6" />
                                        <stop offset="1" stopColor="#23bddf" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ad Automation</h3>
                        <p className={`mb-6 flex-grow transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Launch campaigns that optimize themselves. We test hundreds of creative variations and automatically shift budget to the winners.
                        </p>
                        
                        <a href="#ad-creator" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all">
                            Learn more <ArrowRight size={16} />
                        </a>
                     </div>
                </div>

                {/* Card 3: AI Tutor */}
                <div className={`scroll-animate animate-delay-300 rounded-3xl p-8 transition-all group overflow-hidden relative border ${isDarkMode ? 'bg-[#131b2c] border-white/5 hover:border-yellow-500/30' : 'bg-white border-slate-200 shadow-sm hover:border-yellow-500/50 hover:shadow-md'}`}>
                     <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         {/* Custom Brand Icon: Tutor/Book */}
                         <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                             <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
                                <path d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z" stroke="url(#icon_gradient_tutor)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M50 85 L50 45 M50 45 L80 30 M50 45 L20 30" stroke="url(#icon_gradient_tutor)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                    <linearGradient id="icon_gradient_tutor" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#f59e0b" />
                                        <stop offset="1" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AI Tutor</h3>
                        <p className={`mb-6 flex-grow transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                             Your personal algorithm coach. Learn exactly why a post failed and get step-by-step instructions to improve your next one.
                        </p>
                        
                        <a href="#ai-tutor" className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:gap-3 transition-all">
                            Learn more <ArrowRight size={16} />
                        </a>
                     </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- Influencers Section (Updated Grid) --- */}
      <section id="influencers" className={`py-24 px-6 scroll-mt-20 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <div className={`inline-block px-3 py-1 rounded-full border text-viral-cyan text-xs font-bold tracking-wider mb-6 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                    INFLUENCER MARKETPLACE
                </div>
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Top Influencers</span>
                </h2>
                <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Access thousands of verified influencers across all tiers and niches.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Nano Tier */}
                <div className={`relative p-8 rounded-3xl border group transition-all duration-300 ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-viral-purple/50' : 'bg-white border-slate-200 hover:border-viral-purple/50 shadow-sm hover:shadow-lg'}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-viral-purple mb-2">Nano</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>1K - 10K Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-viral-purple/10 text-viral-purple text-xs font-bold mb-4 border border-viral-purple/20">
                            High Engagement
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-viral-cyan to-viral-purple rounded-full mx-auto opacity-50"></div>
                    </div>
                </div>

                {/* Micro Tier */}
                <div className={`relative p-8 rounded-3xl border group transition-all duration-300 ${isDarkMode ? 'bg-[#131b2c] border-viral-cyan/30' : 'bg-slate-50 border-viral-cyan/30 shadow-md transform -translate-y-2'}`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-viral-cyan text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Most Active
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-viral-cyan mb-2">Micro</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>10K - 100K Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-viral-cyan/10 text-viral-cyan text-xs font-bold mb-4 border border-viral-cyan/20">
                            Very High Engagement
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-viral-cyan to-viral-purple rounded-full mx-auto opacity-50"></div>
                    </div>
                </div>

                {/* Macro Tier */}
                <div className={`relative p-8 rounded-3xl border group transition-all duration-300 ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50 shadow-sm hover:shadow-lg'}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-blue-500 mb-2">Macro</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>500K - 1M Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-xs font-bold mb-4 border border-blue-500/20">
                            Medium Engagement
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto opacity-50"></div>
                    </div>
                </div>

                {/* Mega Tier */}
                <div className={`relative p-8 rounded-3xl border group transition-all duration-300 ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-pink-500/50' : 'bg-white border-slate-200 hover:border-pink-500/50 shadow-sm hover:shadow-lg'}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-pink-500 mb-2">Mega</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>1M+ Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-pink-500/10 text-pink-500 text-xs font-bold mb-4 border border-pink-500/20">
                            Medium Engagement
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto opacity-50"></div>
                    </div>
                </div>

            </div>

            <div className="mt-12 text-center">
                <button onClick={onLaunch} className="px-8 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-bold text-lg shadow-lg transition-all inline-flex items-center gap-2">
                    Browse Marketplace <ArrowRight size={20} />
                </button>
            </div>
        </div>
      </section>

      {/* --- AI Tutor Section --- */}
      <section id="ai-tutor" className={`py-24 px-6 scroll-mt-20 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-yellow-500 ${isDarkMode ? 'bg-yellow-500/10' : 'bg-yellow-100'}`}>
                    <GraduationCap size={24} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Your Personal <span className="text-yellow-500">Algorithm Coach</span>
                </h2>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Don't just post - learn. The AI Tutor analyzes your past performance and teaches you exactly *why* certain posts went viral while others flopped.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200'}`}>
                        <h4 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Trend Alerts</h4>
                        <p className="text-sm text-slate-500">Get notified of rising audio and formats before they peak.</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200'}`}>
                        <h4 className={`font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Step-by-Step</h4>
                        <p className="text-sm text-slate-500">Actionable checklists to improve your content quality.</p>
                    </div>
                </div>
             </div>
             
             <div className="order-2 relative">
                 {/* Chat UI Mockup */}
                 <div className={`max-w-md mx-auto rounded-3xl p-6 border ${isDarkMode ? 'bg-[#131b2c] border-white/5' : 'bg-white border-slate-200 shadow-lg'}`}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dashed border-slate-700">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold">AI</div>
                        <div>
                            <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Viralitics Tutor</p>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className={`p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                            Your retention dropped at 0:03. Try adding a visual hook earlier next time! 📉
                        </div>
                        <div className="p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%] ml-auto bg-viral-cyan/20 text-viral-cyan border border-viral-cyan/20">
                            What kind of visual hook works best for tech reviews?
                        </div>
                        <div className={`p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                            Split-screen comparisons or a sudden zoom-in usually perform 20% better in your niche. Here are 3 examples...
                        </div>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      {/* --- Ad Creator Section --- */}
      <section id="ad-creator" className={`py-24 px-6 scroll-mt-20 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
             <div className="order-2 lg:order-1 relative">
                <div className={`absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full`}></div>
                <div className={`relative rounded-3xl p-1 border ${isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-200 shadow-xl'}`}>
                     {/* Abstract Ad Builder UI */}
                     <div className={`h-64 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
                        <div className="text-center">
                            <Target size={48} className="mx-auto text-blue-500 mb-4 opacity-50"/>
                            <p className="text-slate-500 font-mono text-sm">Targeting: Optimized</p>
                            <p className="text-slate-500 font-mono text-sm">Creative: A/B Testing (3 Variants)</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-3 gap-1 mt-1">
                        <div className="h-20 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                            <span className="font-bold text-blue-500">A</span>
                        </div>
                        <div className="h-20 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 opacity-50">
                            <span className="font-bold text-slate-500">B</span>
                        </div>
                        <div className="h-20 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50 opacity-50">
                            <span className="font-bold text-slate-500">C</span>
                        </div>
                     </div>
                </div>
             </div>

             {/* Right: Content */}
             <div className="order-1 lg:order-2">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-blue-500 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-100'}`}>
                    <svg viewBox="0 0 100 100" fill="none" className="w-7 h-7">
                        <path d="M40 20 L60 20 L70 90 L30 90 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M50 20 L50 90" stroke="currentColor" strokeWidth="4"/>
                        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="4"/>
                    </svg>
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Automated <span className="text-blue-500">Ad Campaigns</span>
                </h2>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Launch high-converting ads on Meta, TikTok, and YouTube in minutes. Our AI handles the budget allocation, audience targeting, and creative testing automatically.
                </p>
                <button className="text-blue-500 font-bold hover:underline flex items-center gap-2">
                    Explore Ad Features <ArrowRight size={16}/>
                </button>
             </div>
         </div>
      </section>

      {/* --- Content Types Section --- */}
      <section className={`py-24 px-6 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest mb-6 transition-colors ${isDarkMode ? 'bg-viral-purple/10 border-viral-purple/30 text-viral-purple' : 'bg-viral-purple/10 border-viral-purple/30 text-viral-purple'}`}>
              CONTENT TYPES
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Every Type of Content</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              From video scripts to trending hashtags — generate everything you need in seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Content */}
            <div className={`scroll-animate animate-delay-100 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-viral-cyan/50' : 'bg-white border-slate-200 hover:border-viral-cyan/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-viral-cyan/10 via-viral-purple/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#video-gradient)" strokeWidth="2"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="url(#video-gradient)"/>
                    <defs>
                      <linearGradient id="video-gradient" x1="3" y1="3" x2="21" y2="21">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Video Content</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Short-form & long-form videos
                </p>
              </div>
            </div>

            {/* Images & Graphics */}
            <div className={`scroll-animate animate-delay-200 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-viral-purple/50' : 'bg-white border-slate-200 hover:border-viral-purple/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-viral-purple/10 via-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#image-gradient)" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="url(#image-gradient)"/>
                    <path d="M21 15L16 10L8 18" stroke="url(#image-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="image-gradient" x1="3" y1="3" x2="21" y2="21">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Images & Graphics</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Eye-catching visuals
                </p>
              </div>
            </div>

            {/* Captions & Scripts */}
            <div className={`scroll-animate animate-delay-300 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-viral-cyan/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V15" stroke="url(#caption-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 9H15M9 13H13" stroke="url(#caption-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="caption-gradient" x1="5" y1="5" x2="19" y2="19">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Captions & Scripts</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Engaging copy that converts
                </p>
              </div>
            </div>

            {/* Audio Content */}
            <div className={`scroll-animate animate-delay-100 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-pink-500/50' : 'bg-white border-slate-200 hover:border-pink-500/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-viral-purple/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="url(#audio-gradient)" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" fill="url(#audio-gradient)"/>
                    <path d="M12 7V5M12 19V17M17 12H19M5 12H7" stroke="url(#audio-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="audio-gradient" x1="2" y1="2" x2="22" y2="22">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Audio Content</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Podcasts & voice-overs
                </p>
              </div>
            </div>

            {/* Hashtag Research */}
            <div className={`scroll-animate animate-delay-200 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-green-500/50' : 'bg-white border-slate-200 hover:border-green-500/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M7 7V17M17 7V17M10 4V20M14 4V20" stroke="url(#hashtag-gradient)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="hashtag-gradient" x1="7" y1="4" x2="17" y2="20">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Hashtag Research</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Trending tags for reach
                </p>
              </div>
            </div>

            {/* Reels & Stories */}
            <div className={`scroll-animate animate-delay-300 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-yellow-500/50' : 'bg-white border-slate-200 hover:border-yellow-500/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <rect x="6" y="2" width="12" height="20" rx="2" stroke="url(#reels-gradient)" strokeWidth="2"/>
                    <path d="M10 9L14 12L10 15V9Z" fill="url(#reels-gradient)"/>
                    <defs>
                      <linearGradient id="reels-gradient" x1="6" y1="2" x2="18" y2="22">
                        <stop stopColor="#23bddf"/>
                        <stop offset="1" stopColor="#cf29f5"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Reels & Stories</h3>
                <p className={`text-sm mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Platform-specific formats
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className={`text-lg mb-6 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              All powered by Viralitics. No creative limits.
            </p>
            <button 
              onClick={onLaunch}
              className="px-8 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-full font-bold text-lg shadow-lg transition-all inline-flex items-center gap-2"
            >
              Start Creating <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Platform Integration Section --- */}
      <section className={`py-24 px-6 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block px-4 py-1.5 rounded-full border border-viral-purple/30 bg-viral-purple/10 text-xs font-bold tracking-widest mb-6 text-viral-purple">
              PLATFORM INTEGRATION
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              One Dashboard for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">All Platforms</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Connect and manage content across 8+ major social media platforms seamlessly
            </p>
          </div>

          {/* Platform Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* TikTok */}
            <div className={`scroll-animate animate-delay-100 group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00f2ea] to-[#ff0050] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>TikTok</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>1.7B+ users</p>
            </div>

            {/* Instagram */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Instagram</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>2.4B+ users</p>
            </div>

            {/* YouTube */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-[#FF0000] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>YouTube</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>2.7B+ users</p>
            </div>

            {/* Facebook */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-[#1877F2] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Facebook</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>3.1B+ users</p>
            </div>

            {/* LinkedIn */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-[#0A66C2] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>1B+ users</p>
            </div>

            {/* X (Twitter) */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>X</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>600M+ users</p>
            </div>

            {/* Reddit */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-[#FF4500] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Reddit</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>900M+ users</p>
            </div>

            {/* Twitch */}
            <div className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="w-16 h-16 rounded-xl bg-[#9146FF] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
              </div>
              <h3 className={`font-bold text-center mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Twitch</h3>
              <p className={`text-xs text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>240M+ users</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className={`py-32 px-6 scroll-mt-20 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
                <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">pricing.</span>
                </h2>
                <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Start for free, scale as you grow. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className={`scroll-animate animate-delay-100 rounded-3xl p-8 border transition-all ${isDarkMode ? 'bg-[#0B0F19] border-white/10' : 'bg-white border-slate-200'}`}>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Starter</h3>
                    <div className="text-4xl font-bold mb-6 flex items-end gap-1">
                        <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>$0</span>
                        <span className="text-sm text-slate-500 mb-1">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-8">Perfect for new creators just starting out.</p>
                    <ul className={`space-y-4 mb-8 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> 3 Social Profiles</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> 10 AI Posts / mo</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> Basic Analytics</li>
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-bold border transition-colors ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-900'}`}>
                        Get Started
                    </button>
                </div>

                {/* Pro Plan */}
                <div className={`scroll-animate animate-delay-200 rounded-3xl p-8 border-2 relative transition-all transform md:-translate-y-4 ${isDarkMode ? 'bg-[#131b2c] border-viral-purple' : 'bg-white border-viral-purple shadow-xl'}`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-viral-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Creator Pro</h3>
                    <div className="text-4xl font-bold mb-6 flex items-end gap-1">
                        <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>$29</span>
                        <span className="text-sm text-slate-500 mb-1">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-8">For serious creators scaling their brand.</p>
                    <ul className={`space-y-4 mb-8 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-purple"/> Unlimited Profiles</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-purple"/> Unlimited AI Content</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-purple"/> AI Tutor Access</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-purple"/> Marketplace Access</li>
                    </ul>
                    <button onClick={onLaunch} className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 shadow-lg transition-all">
                        Start Free Trial
                    </button>
                </div>

                {/* Agency Plan */}
                <div className={`scroll-animate animate-delay-300 rounded-3xl p-8 border transition-all ${isDarkMode ? 'bg-[#0B0F19] border-white/10' : 'bg-white border-slate-200'}`}>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Business</h3>
                    <div className="text-4xl font-bold mb-6 flex items-end gap-1">
                        <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>$99</span>
                        <span className="text-sm text-slate-500 mb-1">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-8">For agencies and large teams.</p>
                    <ul className={`space-y-4 mb-8 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> 5 Team Members</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> Priority Support</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> API Access</li>
                        <li className="flex items-center gap-3"><Check size={16} className="text-viral-cyan"/> White-label Reports</li>
                    </ul>
                    <button className={`w-full py-3 rounded-xl font-bold border transition-colors ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-900'}`}>
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* --- Call To Action Section --- */}
      <CallToAction onLaunch={onLaunch} isDarkMode={isDarkMode} />

      {/* --- Footer --- */}
      <footer className={`border-t pt-16 pb-12 text-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#06080e] border-white/10' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
            <div className="col-span-2 lg:col-span-2">
                 <a href="#" className="inline-flex items-center gap-3 h-12 mb-6">
                              <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-full w-auto object-contain" />
                              <span className="sr-only">Viralitics</span>
                 </a>
                <p className="text-slate-500 mb-6 max-w-xs">
                    The AI-first operating system for the modern social media era. Automated, intelligent, and scalable.
                </p>
                <div className="flex gap-4">
                    <Globe size={20} className={`cursor-pointer transition-colors ${isDarkMode ? 'text-slate-600 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} />
                    <Sliders size={20} className={`cursor-pointer transition-colors ${isDarkMode ? 'text-slate-600 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} />
                </div>
            </div>
            
            <div>
                <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Product</h4>
                <ul className="space-y-3 text-slate-500">
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Content Engine</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Marketplace</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Analytics</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Ads AI</li>
                </ul>
            </div>

            <div>
                <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Resources</h4>
                <ul className="space-y-3 text-slate-500">
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Blog</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Community</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Help Center</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">API Docs</li>
                </ul>
            </div>

             <div>
                <h4 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Company</h4>
                <ul className="space-y-3 text-slate-500">
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">About</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Legal</li>
                    <li className="hover:text-viral-cyan cursor-pointer transition-colors">Contact</li>
                </ul>
            </div>
        </div>
        <div className={`max-w-7xl mx-auto px-6 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-slate-600 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
            <p>&copy; 2024 Viralitics Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span className={`cursor-pointer ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Privacy Policy</span>
                <span className={`cursor-pointer ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Terms of Service</span>
            </div>
        </div>
      </footer>

      {/* --- Floating Chatbot --- */}
      <ChatBot isDarkMode={isDarkMode} />

    </div>
  );
};

export default LandingPage;
