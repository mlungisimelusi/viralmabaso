import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<'content' | 'engagement' | 'benefits'>('content');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Two Pillars Overview */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Content */}
            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800/30 border-viral-cyan/30 hover:bg-slate-800/50' : 'bg-white border-viral-cyan/30 hover:bg-slate-50'}`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white mb-6">
                <i className="fas fa-brain text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Content Engine</h2>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Generates all content a social media manager would prepare: scripts, videos, captions, thumbnails, and multi-platform variants with intelligent creative scoring.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Scripts, videos & thumbnails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Multi-platform optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Creative scoring & rating</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Engagement */}
            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800/30 border-viral-purple/30 hover:bg-slate-800/50' : 'bg-white border-viral-purple/30 hover:bg-slate-50'}`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white mb-6">
                <i className="fas fa-users text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Engagement Manager</h2>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Handles all post-publishing tasks: automated comment replies, DM handling, sentiment detection, and real-time engagement at scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Comment & DM automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Sentiment & spam filtering</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Real-time event system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-white/10 sticky top-20 z-40 bg-opacity-80 backdrop-blur-lg">
        <div className={`max-w-7xl mx-auto px-4 md:px-6 flex gap-8 overflow-x-auto ${isDarkMode ? 'bg-[#0B0F19]/80' : 'bg-white/80'}`}>
          <button 
            onClick={() => setActiveTab('content')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'content'
                ? 'border-viral-cyan text-viral-cyan'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Content Engine
          </button>
          <button 
            onClick={() => setActiveTab('engagement')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'engagement'
                ? 'border-viral-purple text-viral-purple'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Engagement Manager
          </button>
          <button 
            onClick={() => setActiveTab('benefits')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
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
          {activeTab === 'content' && (
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Content Engine Features</h2>
                <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Automatically generate, optimize, and manage all your social media content across platforms
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentFeatures.map((feature, idx) => (
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
            </div>
          )}

          {activeTab === 'engagement' && (
            <div>
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
          )}

          {activeTab === 'benefits' && (
            <div>
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
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-20 px-4 md:px-6 border-t border-white/10 ${isDarkMode ? 'bg-slate-800/20' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works Together</h2>
          
          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Content Engine Creates</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Generate scripts, videos, captions, and thumbnails. The engine scores each idea for virality potential and adapts it to each platform's specifications.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Publishing</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Content is automatically published at optimal times when your audience is most active, across all your connected platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Engagement Manager Responds</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Real-time engagement kicks in instantly. Comments are replied to, sentiment is analyzed, spam is filtered, and audience relationships are nurtured 24/7.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Analytics & Optimization</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Performance data feeds back into the system. AI learns what works and continuously improves content quality and engagement tactics.
                </p>
              </div>
            </div>
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
              Start Your Free Trial
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
