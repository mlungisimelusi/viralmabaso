
import React, { useState, useEffect, useRef } from 'react';
import CallToAction from './CallToAction';
import ChatBot from './ChatBot';
import Footer from './Footer';
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
  Crown,
  Linkedin,
  Youtube
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
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<'A' | 'B' | 'C'>('A');
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [spinChat, setSpinChat] = useState(false);
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  const languages = [
    'English', 'Español', 'Français', 'Deutsch', 'Italiano', 'Português',
    '日本語', '한국어', '中文', 'العربية', 'हिन्दी', 'Русский',
  ];

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Intersection Observer for scroll animations and chat spin
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            // Trigger chat spin when AI Tutor section comes into view
            if (entry.target.id === 'ai-tutor') {
              setSpinChat(true);
              // Reset after animation completes (3 seconds)
              setTimeout(() => setSpinChat(false), 3000);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));
    
    // Also observe the AI Tutor section
    const aiTutorSection = document.getElementById('ai-tutor');
    if (aiTutorSection && observerRef.current) {
      observerRef.current.observe(aiTutorSection);
    }
    
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <a href="#" className="inline-flex items-center h-full md:mr-8">
            <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[60px] md:h-[100px] w-auto object-contain" />
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
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 px-4 md:px-6 overflow-hidden flex items-center min-h-screen md:min-h-[90vh]" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        
        {/* Floating Gradient Particles */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-viral-cyan/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
          <div className="absolute top-[60%] left-[15%] w-24 h-24 bg-viral-purple/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
          <div className="absolute top-[30%] right-[10%] w-40 h-40 bg-viral-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
          <div className="absolute bottom-[20%] right-[25%] w-28 h-28 bg-viral-purple/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
          
          {/* Sparkles / Light Streaks */}
          <div className="absolute top-[20%] right-[30%] w-1 h-20 bg-gradient-to-b from-viral-cyan/60 to-transparent blur-sm animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[70%] left-[40%] w-1 h-16 bg-gradient-to-b from-viral-purple/50 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
          <div className="absolute top-[45%] right-[15%] w-2 h-2 bg-viral-cyan rounded-full blur-sm animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute top-[55%] left-[20%] w-2 h-2 bg-viral-purple rounded-full blur-sm animate-ping" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        </div>

        {/* Background Image Layer (video removed) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          
           {/* Text Column (Left) */}
          <div className="relative z-10 lg:order-1 scroll-animate text-center lg:text-left lg:pl-8">
             
             <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Elevate Your Brand. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Amplify Your Impact</span>
             </h1>

             <p className={`text-lg sm:text-xl max-w-lg mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                An influencer marketplace that helps creators monetize and enables brands to reach more people.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={onLaunch}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-full font-bold text-xl shadow-[0_0_25px_-5px_rgba(207,41,245,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  Get Activated
                </button>
             </div>
          </div>

          {/* Video Column (Right) */}
          <div className="relative z-10 lg:order-2 scroll-animate animate-delay-200 flex justify-center items-center">
            <div className="relative w-full max-w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Gradient overlay for better blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </section>

      {/* --- AI Manager / Core Features --- */}
      <section id="ai-manager" className="py-16 md:py-24 px-4 md:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
                 {/* Core Features Label */}
                <div className={`inline-block px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest mb-6 transition-colors ${isDarkMode ? 'bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan' : 'bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan'}`}>
                    CORE FEATURES
                </div>
                
                <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">take over your entire workflow.</span>
                </h2>
                <p className={`text-xl max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    A complete suite of AI tools designed to replace fragmented workflows. One login, infinite reach.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Card 1: AI Social Media Manager */}
                <div className={`scroll-animate animate-delay-100 rounded-2xl p-8 md:p-10 min-h-[280px] transition-all group overflow-hidden relative border flex flex-col ${isDarkMode ? 'bg-slate-800/50 border-white/10 hover:border-viral-cyan/40 hover:bg-slate-800/70 shadow-sm hover:shadow-md' : 'bg-slate-50 border-slate-200 hover:border-viral-cyan/50 hover:bg-white shadow-sm hover:shadow-lg'}`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-viral-cyan/5 blur-[60px] rounded-full group-hover:bg-viral-cyan/10 transition-all opacity-0 group-hover:opacity-100"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Custom Brand Icon: Hand with interactions */}
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                             <svg viewBox="0 0 100 100" fill="none" className="w-9 h-9">
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
                        <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors line-clamp-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AI Social Media Manager</h3>
                        <p className={`mb-4 flex-grow text-base md:text-lg transition-colors line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Stop guessing. AI plans, creates, engages, and optimizes your entire social media presence.
                        </p>
                        
                        <a href="#ai-manager" className="inline-flex items-center gap-1 text-viral-cyan font-bold text-sm hover:gap-2 transition-all mt-auto">
                            Learn more <ArrowRight size={12} />
                        </a>
                    </div>
                </div>

                {/* Card 2: Ad Automation */}
                <div className={`scroll-animate animate-delay-200 rounded-2xl p-8 md:p-10 min-h-[280px] transition-all group overflow-hidden relative border flex flex-col ${isDarkMode ? 'bg-slate-800/50 border-white/10 hover:border-viral-cyan/40 hover:bg-slate-800/70 shadow-sm hover:shadow-md' : 'bg-slate-50 border-slate-200 hover:border-viral-cyan/50 hover:bg-white shadow-sm hover:shadow-lg'}`}>
                     <div className="absolute top-0 right-0 w-40 h-40 bg-viral-cyan/5 blur-[60px] rounded-full group-hover:bg-viral-cyan/10 transition-all opacity-0 group-hover:opacity-100"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         {/* Custom Brand Icon: Gear with Play + Arrows */}
                         <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                            <svg viewBox="0 0 100 100" fill="none" className="w-9 h-9">
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
                                        <stop stopColor="#23bddf" />
                                        <stop offset="1" stopColor="#cf29f5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors line-clamp-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ad Automation</h3>
                        <p className={`mb-4 flex-grow text-base md:text-lg transition-colors line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Launch campaigns that optimize themselves. We test hundreds of creative variations and automatically shift budget to the winners.
                        </p>
                        
                        <a href="#ad-creator" className="inline-flex items-center gap-1 text-viral-cyan font-bold text-sm hover:gap-2 transition-all mt-auto">
                            Learn more <ArrowRight size={12} />
                        </a>
                     </div>
                </div>

                {/* Card 3: AI Tutor */}
                <div className={`scroll-animate animate-delay-300 rounded-2xl p-8 md:p-10 min-h-[280px] transition-all group overflow-hidden relative border flex flex-col ${isDarkMode ? 'bg-slate-800/50 border-white/10 hover:border-viral-purple/40 hover:bg-slate-800/70 shadow-sm hover:shadow-md' : 'bg-slate-50 border-slate-200 hover:border-viral-purple/50 hover:bg-white shadow-sm hover:shadow-lg'}`}>
                     <div className="absolute top-0 right-0 w-40 h-40 bg-viral-purple/5 blur-[60px] rounded-full group-hover:bg-viral-purple/10 transition-all opacity-0 group-hover:opacity-100"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         {/* Custom Brand Icon: Tutor/Book */}
                         <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                             <i className="fas fa-book text-transparent bg-clip-text bg-gradient-to-r from-viral-purple to-viral-cyan text-2xl"></i>
                        </div>
                        <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors line-clamp-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AI Tutor</h3>
                        <p className={`mb-4 flex-grow text-base md:text-lg transition-colors line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                             Your personal algorithm coach. Learn exactly why a post failed and get step-by-step instructions to improve your next one.
                        </p>
                        
                        <a href="#ai-tutor" className="inline-flex items-center gap-1 text-viral-purple font-bold text-sm hover:gap-2 transition-all mt-auto">
                            Learn more <ArrowRight size={12} />
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
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Top Influencers</span>
                </h2>
                <p className={`text-xl max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Join to work with brands, help them achieve their goals, while you monetize your influence.
                </p>
                <p className={`text-xl max-w-2xl mx-auto transition-colors mt-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Brands and companies looking for the best creators and influencers can rely on Viralitics as the platform to explore because no matter the country, language, or region we have you covered.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                
                {/* Nano Tier */}
                <div 
                  onMouseEnter={() => setHoveredTier('nano')}
                  onMouseLeave={() => setHoveredTier(null)}
                  className={`relative p-8 rounded-3xl border group transition-all duration-300 cursor-pointer ${hoveredTier === 'nano' ? 'lg:scale-110 lg:z-10' : ''} ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-viral-purple/50' : 'bg-white border-slate-200 hover:border-viral-purple/50 shadow-sm hover:shadow-lg'}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-viral-purple mb-2">Nano</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>1K - 10K Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-viral-purple/10 text-viral-purple text-xs font-bold mb-4 border border-viral-purple/20">
                            Very High Engagement
                        </div>
                        <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Perfect for niche communities and authentic engagement. Nano influencers connect deeply with loyal followers, ideal for authentic product recommendations and grassroots campaigns. Get direct access to engaged communities with genuine interest in your brand.
                            </p>
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-viral-cyan to-viral-purple rounded-full mx-auto opacity-50 mt-6"></div>
                    </div>
                </div>

                {/* Micro Tier */}
                <div 
                  onMouseEnter={() => setHoveredTier('micro')}
                  onMouseLeave={() => setHoveredTier(null)}
                  className={`relative p-8 rounded-3xl border group transition-all duration-300 cursor-pointer ${hoveredTier === 'micro' ? 'lg:scale-110 lg:z-10' : ''} ${isDarkMode ? 'bg-[#131b2c] border-viral-cyan/30' : 'bg-slate-50 border-viral-cyan/30 shadow-md'} ${hoveredTier !== 'micro' && hoveredTier ? 'lg:scale-95 lg:opacity-50' : ''}`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-viral-cyan text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Most Active
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-viral-cyan mb-2">Micro</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>10K - 100K Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-viral-cyan/10 text-viral-cyan text-xs font-bold mb-4 border border-viral-cyan/20">
                            High Engagement
                        </div>
                        <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                The sweet spot for ROI. Micro influencers maintain exceptional engagement rates while reaching meaningful audiences. Ideal for building brand awareness and driving conversions with authentic voices and dedicated followers who trust their recommendations.
                            </p>
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-viral-cyan to-viral-purple rounded-full mx-auto opacity-50 mt-6"></div>
                    </div>
                </div>

                {/* Macro Tier */}
                <div 
                  onMouseEnter={() => setHoveredTier('macro')}
                  onMouseLeave={() => setHoveredTier(null)}
                  className={`relative p-8 rounded-3xl border group transition-all duration-300 cursor-pointer ${hoveredTier === 'macro' ? 'lg:scale-110 lg:z-10' : ''} ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50 shadow-sm hover:shadow-lg'} ${hoveredTier !== 'macro' && hoveredTier ? 'lg:scale-95 lg:opacity-50' : ''}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-blue-500 mb-2">Macro</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>500K - 1M Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 text-xs font-bold mb-4 border border-blue-500/20">
                            Medium Engagement
                        </div>
                        <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Reach a substantial audience with established credibility. Macro influencers excel at brand awareness campaigns and reaching larger demographics. Perfect for campaigns requiring significant reach while maintaining professional influence and brand partnerships.
                            </p>
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto opacity-50 mt-6"></div>
                    </div>
                </div>

                {/* Mega Tier */}
                <div 
                  onMouseEnter={() => setHoveredTier('mega')}
                  onMouseLeave={() => setHoveredTier(null)}
                  className={`relative p-8 rounded-3xl border group transition-all duration-300 cursor-pointer ${hoveredTier === 'mega' ? 'lg:scale-110 lg:z-10' : ''} ${isDarkMode ? 'bg-[#0B0F19] border-white/10 hover:border-pink-500/50' : 'bg-white border-slate-200 hover:border-pink-500/50 shadow-sm hover:shadow-lg'} ${hoveredTier !== 'mega' && hoveredTier ? 'lg:scale-95 lg:opacity-50' : ''}`}>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-pink-500 mb-2">Mega</h3>
                        <p className={`text-sm font-medium mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>1M+ Followers</p>
                        <div className="inline-block px-3 py-1 rounded-lg bg-pink-500/10 text-pink-500 text-xs font-bold mb-4 border border-pink-500/20">
                            Medium Engagement
                        </div>
                        <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
                            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Maximum reach and brand visibility. Mega influencers command massive audiences and are ideal for major campaign launches and global brand awareness. Perfect for established brands looking to make a big impact across multiple markets and demographics.
                            </p>
                        </div>
                        <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto opacity-50 mt-6"></div>
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
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
             <div className="order-1 lg:pl-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r from-viral-cyan to-viral-purple text-white ${isDarkMode ? '' : ''}`}>
                    <GraduationCap size={24} />
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Social Media Coach</span>
                </h2>
                <p className={`text-xl mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    The AI Tutor teaches you how to succeed on social media, helping creators and brands grow their accounts, boost engagement, and increase their chances of going viral.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200'}`}>
                        <h4 className={`font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple ${isDarkMode ? '' : ''}`}>Trend Alerts</h4>
                        <p className="text-sm text-slate-500">Get notified of rising audio and formats before they peak.</p>
                    </div>
                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800 border-white/5' : 'bg-white border-slate-200'}`}>
                        <h4 className={`font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-viral-purple to-viral-cyan ${isDarkMode ? '' : ''}`}>Step-by-Step</h4>
                        <p className="text-sm text-slate-500">Actionable checklists to improve your content quality.</p>
                    </div>
                </div>
             </div>
             
             <div className="order-2 relative">
                 {/* Chat UI Mockup */}
                 <div className={`max-w-md mx-auto rounded-3xl p-6 border transition-all ${spinChat ? 'animate-spin-once' : ''} ${isDarkMode ? 'bg-[#131b2c] border-white/5' : 'bg-white border-slate-200 shadow-lg'}`}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dashed border-slate-700">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold">AI</div>
                        <div>
                            <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Viralitics Tutor</p>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%] ml-auto bg-viral-cyan/20 text-viral-cyan border border-viral-cyan/20">
                            How can I grow my account and increase engagement?
                        </div>
                        <div className={`p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%] ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                            Focus on consistency, trending audio, and strong hooks in the first 3 seconds. Post at peak times when your audience is most active, and engage with comments within the first hour to boost the algorithm.
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
                        <div className="text-center p-6">
                            <Target size={48} className={`mx-auto mb-4 ${selectedVariant === 'A' ? 'text-viral-cyan' : selectedVariant === 'B' ? 'text-viral-purple' : 'text-blue-500'}`}/>
                            <p className={`font-mono text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Platform: Cross-Network</p>
                            <p className={`font-mono text-sm mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Campaign: Variant {selectedVariant}</p>
                            {selectedVariant === 'A' && (
                              <div className="mt-4">
                                <p className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Content Strategy: Viral Focus</p>
                                <p className={`text-xs mb-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>TikTok + Instagram Reels</p>
                                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>Scheduled: 3 posts/day • Best times</p>
                              </div>
                            )}
                            {selectedVariant === 'B' && (
                              <div className="mt-4">
                                <p className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Content Strategy: Professional</p>
                                <p className={`text-xs mb-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>LinkedIn + X</p>
                                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>Scheduled: 2 posts/day • Peak hours</p>
                              </div>
                            )}
                            {selectedVariant === 'C' && (
                              <div className="mt-4">
                                <p className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Content Strategy: Balanced Mix</p>
                                <p className={`text-xs mb-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>YouTube + Facebook + Instagram</p>
                                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>Scheduled: 5 posts/day • All platforms</p>
                              </div>
                            )}
                        </div>
                     </div>
                     <div className="grid grid-cols-3 gap-1 mt-1">
                        <button 
                          onClick={() => setSelectedVariant('A')}
                          className={`h-20 rounded-xl flex items-center justify-center transition-all ${selectedVariant === 'A' ? 'bg-viral-cyan/20 border border-viral-cyan/50' : 'bg-slate-800/50 border border-slate-700/50 opacity-50 hover:opacity-75'}`}
                        >
                            <span className={`font-bold ${selectedVariant === 'A' ? 'text-viral-cyan' : 'text-slate-500'}`}>A</span>
                        </button>
                        <button 
                          onClick={() => setSelectedVariant('B')}
                          className={`h-20 rounded-xl flex items-center justify-center transition-all ${selectedVariant === 'B' ? 'bg-viral-purple/20 border border-viral-purple/50' : 'bg-slate-800/50 border border-slate-700/50 opacity-50 hover:opacity-75'}`}
                        >
                            <span className={`font-bold ${selectedVariant === 'B' ? 'text-viral-purple' : 'text-slate-500'}`}>B</span>
                        </button>
                        <button 
                          onClick={() => setSelectedVariant('C')}
                          className={`h-20 rounded-xl flex items-center justify-center transition-all ${selectedVariant === 'C' ? 'bg-blue-500/20 border border-blue-500/50' : 'bg-slate-800/50 border border-slate-700/50 opacity-50 hover:opacity-75'}`}
                        >
                            <span className={`font-bold ${selectedVariant === 'C' ? 'text-blue-500' : 'text-slate-500'}`}>C</span>
                        </button>
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
                    We help you create winning ads and launch high-converting campaigns on Meta, TikTok, and YouTube in minutes. Our AI handles the ad creation, budget allocation, audience targeting, and creative testing automatically.
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
              From video scripts to trending hashtags - generate everything you need in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Content */}
            <div className={`scroll-animate animate-delay-100 group relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#131b2c] border-white/10 hover:border-viral-cyan/50' : 'bg-white border-slate-200 hover:border-viral-cyan/50 shadow-sm hover:shadow-xl'}`}>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop')] bg-cover bg-center opacity-10 blur-sm transition-opacity duration-500"></div>
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
      <section className={`py-16 md:py-24 px-4 md:px-6 relative overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <div className="inline-block px-4 py-1.5 rounded-full border border-viral-purple/30 bg-viral-purple/10 text-xs font-bold tracking-widest mb-6 text-viral-purple">
              PLATFORM INTEGRATION
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              One Dashboard for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">All Major Platforms</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
              Connect and manage content across 15+ major social media platforms seamlessly.
            </p>
          </div>

          {/* All Platform Icons - No Cards */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
            {/* TikTok */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center group-hover:shadow-lg group-hover:shadow-slate-900/50 transition-all mx-auto">
                <i className="fab fa-tiktok text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">1.7B+ users</p>
            </div>

            {/* YouTube */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#FF0000] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all mx-auto">
                <i className="fab fa-youtube text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">2.9B+ users</p>
            </div>

            {/* Instagram */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all mx-auto">
                <i className="fab fa-instagram text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">2.4B+ users</p>
            </div>

            {/* Facebook */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#1877F2] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-600/50 transition-all mx-auto">
                <i className="fab fa-facebook text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">3.1B+ users</p>
            </div>

            {/* LinkedIn */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#0A66C2] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-700/50 transition-all mx-auto">
                <i className="fab fa-linkedin text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">1B+ users</p>
            </div>

            {/* X (Twitter) */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-black flex items-center justify-center group-hover:shadow-lg group-hover:shadow-slate-800/50 transition-all mx-auto">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="text-slate-500 text-xs mt-2">600M+ users</p>
            </div>

            {/* Reddit */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#FF4500] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all mx-auto">
                <i className="fab fa-reddit text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">850M+ users</p>
            </div>

            {/* Twitch */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#9146FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all mx-auto">
                <i className="fab fa-twitch text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">240M+ users</p>
            </div>

            {/* Pinterest */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#E60B3B] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all mx-auto">
                <i className="fab fa-pinterest text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">520M+ users</p>
            </div>

            {/* Snapchat */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#FFFC00] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all mx-auto">
                <i className="fab fa-snapchat text-black text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">800M+ users</p>
            </div>

            {/* Discord */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#5865F2] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all mx-auto">
                <i className="fab fa-discord text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">220M+ users</p>
            </div>

            {/* WhatsApp */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#25D366] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all mx-auto">
                <i className="fab fa-whatsapp text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">3B+ users</p>
            </div>

            {/* Telegram */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#0088cc] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all mx-auto">
                <i className="fab fa-telegram text-white text-3xl"></i>
              </div>
              <p className="text-slate-500 text-xs mt-2">950M+ users</p>
            </div>

            {/* Bluesky */}
            <div className="group cursor-pointer transition-transform hover:scale-110 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#1185FE] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all mx-auto">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5 3.5C9.5 2.119 10.619 1 12 1s2.5 1.119 2.5 2.5c0 .99-.725 1.807-1.675 1.964C12.896 6.297 12 7.461 12 8.5c0 .78.38 1.47 1 1.895V20h2v-9.605c.62-.425 1-1.115 1-1.895 0-1.039-.896-2.203-1.825-2.036.95-.157 1.675-.974 1.675-1.964zm-6 0C3.5 2.119 4.619 1 6 1s2.5 1.119 2.5 2.5c0 .99.725 1.807 1.675 1.964.929.833 1.675 1.997 1.675 3.036 0 .78.38 1.47 1 1.895V20h2v-9.605c.62-.425 1-1.115 1-1.895 0-1.039-.896-2.203-1.825-2.036.95-.157 1.675-.974 1.675-1.964 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 .99.725 1.807 1.675 1.964-.929.833-1.675 1.997-1.675 3.036 0 .78-.38 1.47-1 1.895V20h-2v-9.605c-.62-.425-1-1.115-1-1.895 0-1.039.896-2.203 1.825-2.036-.95-.157-1.675-.974-1.675-1.964z"/>
                </svg>
              </div>
              <p className="text-slate-500 text-xs mt-2">23M+ users</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-black/0 to-black/50">
        {/* Top Wave Gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="landingWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#23bddf', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#cf29f5', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#23bddf', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path fill="url(#landingWaveGradient)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            <path fill="url(#landingWaveGradient)" fillOpacity="0.5" d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 scroll-animate">
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Give Your Team the Right Tools to Succeed
                </h2>
                <p className={`text-base max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                   Our goal is to make Identity accessible to every team, no matter the size.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch justify-center">
                {/* Launch Plan */}
                <div className={`scroll-animate rounded-2xl p-8 transition-all relative border hover:scale-105 hover:shadow-2xl hover:shadow-viral-cyan/20 cursor-pointer ${
                  'border-slate-500/30 bg-slate-900/40'
                }`}>
                    {/* Plan Label */}
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 text-viral-cyan">
                        STARTER
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 mb-6">
                        Perfect for individuals getting started.
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-600/30">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white">$9</span>
                            <span className="text-slate-400 text-sm">/month</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onLaunch}
                        className="w-full py-3 px-6 rounded-2xl font-bold transition-all mb-6 bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90"
                    >
                        Get Started
                    </button>

                    {/* Features */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-viral-cyan" />
                            <span className="text-sm text-slate-300">Up to 3 Social Profiles</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-viral-cyan" />
                            <span className="text-sm text-slate-300">Basic AI Content</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-viral-cyan" />
                            <span className="text-sm text-slate-300">Basic Analytics</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-viral-cyan" />
                            <span className="text-sm text-slate-300">Community Support</span>
                        </li>
                    </ul>
                </div>

                {/* Creator Pro Plan */}
                <div className={`scroll-animate rounded-2xl p-8 transition-all relative border hover:scale-110 hover:shadow-2xl hover:shadow-teal-400/20 cursor-pointer ${
                  'md:col-span-1 bg-teal-900/30 border-2 border-teal-400 md:scale-105'
                }`}>
                    {/* Plan Label */}
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 text-teal-400">
                        GROWTH
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 mb-6">
                        For brands and creators scaling their brand.
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-600/30">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-slate-400 text-sm">/month</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onLaunch}
                        className="w-full py-3 px-6 rounded-2xl font-bold transition-all mb-6 bg-white text-teal-900 hover:bg-teal-50"
                    >
                        Start Free Trial
                    </button>

                    {/* Features */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">Unlimited Social Profiles</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">Unlimited AI Content</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">Advanced Analytics</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">AI Tutor Access</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">Marketplace Access</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-400" />
                            <span className="text-sm text-slate-300">Priority Support</span>
                        </li>
                    </ul>
                </div>

                {/* Business Plan */}
                <div className={`scroll-animate rounded-2xl p-8 transition-all relative border hover:scale-110 hover:shadow-2xl hover:shadow-slate-400/20 cursor-pointer ${
                  'border-slate-500/30 bg-slate-900/40'
                }`}>
                    {/* Plan Label */}
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">
                        ENTERPRISE
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 mb-6">
                        For agencies and large teams with advanced needs.
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-600/30">
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-slate-200">Custom Pricing</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full py-3 px-6 rounded-2xl font-bold transition-all mb-6 border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10"
                    >
                        Contact Us
                    </button>

                    {/* Features */}
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">Everything in Creator Pro</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">5+ Team Members</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">White-label Reports</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">API Access</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">Ad Automation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check size={20} className="flex-shrink-0 text-teal-500" />
                            <span className="text-sm text-slate-300">Dedicated Account Manager</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className="text-center">
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-8`}>
                    Trusted by 15+ major social media platforms
                </p>
            </div>
        </div>
      </section>

      {/* --- Call To Action Section --- */}
      <CallToAction onLaunch={onLaunch} isDarkMode={isDarkMode} />

      {/* --- Footer --- */}
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* --- Floating Chatbot --- */}
      <ChatBot isDarkMode={isDarkMode} />

    </div>
  );
};

export default LandingPage;
