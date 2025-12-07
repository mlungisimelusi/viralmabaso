import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Menu, X, Sun, Moon } from 'lucide-react';

interface AdAutomationPageProps {
  onBack: () => void;
  onLaunch: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const AdAutomationPage: React.FC<AdAutomationPageProps> = ({ 
  onBack, 
  onLaunch, 
  isDarkMode, 
  setIsDarkMode 
}) => {
  const [activeTab, setActiveTab] = useState<'creation' | 'optimization' | 'benefits'>('creation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const creationFeatures = [
    {
      icon: <i className="fas fa-bullhorn text-2xl"></i>,
      title: "Smart Ad Set Creation",
      description: "Automatically generate ad sets and creative variations. AI designs multiple ad versions optimized for different audiences and platforms"
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
      description: "Automatically create multiple ad creatives with different headlines, copy, CTAs, and visuals. Test what resonates"
    },
    {
      icon: <i className="fas fa-plug text-2xl"></i>,
      title: "Multi-Platform Integration",
      description: "Seamless integration with Meta, TikTok, YouTube, Snapchat, and Google Ads APIs. Manage all campaigns from one dashboard"
    },
    {
      icon: <i className="fas fa-cogs text-2xl"></i>,
      title: "Campaign Setup Automation",
      description: "AI configures entire campaigns with optimal settings. No more manual setup—let AI handle the technical details"
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
      description: "AI detects unusual patterns—sudden drops in performance, fraud indicators, or breakthrough opportunities"
    },
    {
      icon: <i className="fas fa-gavel text-2xl"></i>,
      title: "Smart Bid Management",
      description: "AI optimizes bids in real-time based on audience value and conversion probability. Never overpay for clicks"
    }
  ];

  const benefits = [
    "Reduce ad management time by 90% with full automation",
    "Increase ROAS (Return on Ad Spend) by 5-10x",
    "Run unlimited A/B tests simultaneously without manual work",
    "Scale profitable campaigns instantly with AI-driven budgets",
    "Access predictive audience modeling for precision targeting",
    "Manage campaigns across 5+ platforms from one dashboard",
    "Eliminate wasted ad spend with real-time optimization",
    "Get actionable insights on what's driving conversions",
    "Automatically find and scale your best-performing ads",
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
      <nav className={`fixed w-full z-50 top-0 border-b backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-[#0B0F19]/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <button onClick={onBack} className="inline-flex items-center h-full md:mr-8 cursor-pointer">
            <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[60px] md:h-[100px] w-auto object-contain" />
          </button>
          
          {/* Desktop Nav (Center) */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Home</button>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Manager</button>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Influencers</button>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Tutor</button>
            <span className={`text-viral-cyan font-semibold`}>Ad Automation</span>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Pricing</button>
          </div>

          {/* Right Side: Theme Toggle, Log in, Get Activated */}
          <div className="hidden md:flex items-center gap-4">
             <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border mb-6 text-xs font-bold tracking-widest bg-viral-cyan/10 border-viral-cyan/30 text-viral-cyan">
            CORE FEATURE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Ad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">Automation</span>
          </h1>

          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Intelligent campaign and ads AI that creates, tests, and optimizes ad campaigns across all platforms. From audience generation to real-time budget optimization, let AI handle your ad strategy.
          </p>

          <button 
            onClick={onLaunch}
            className="px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all shadow-lg shadow-viral-purple/30"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Two Pillars Overview */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Creation */}
            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800/30 border-viral-cyan/30 hover:bg-slate-800/50' : 'bg-white border-viral-cyan/30 hover:bg-slate-50'}`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white mb-6">
                <i className="fas fa-bullhorn text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Campaign & Ad Creation</h2>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                AI creates complete ad sets with creative variations and intelligent audience targeting. Set it up once and let AI build your campaigns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Ad set & creative generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Predictive audience modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-cyan flex-shrink-0 mt-0.5" />
                  <span>Multi-platform integration</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Optimization */}
            <div className={`p-8 md:p-10 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-800/30 border-viral-purple/30 hover:bg-slate-800/50' : 'bg-white border-viral-purple/30 hover:bg-slate-50'}`}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-viral-purple to-viral-cyan flex items-center justify-center text-white mb-6">
                <i className="fas fa-chart-line text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4">Campaign Optimization</h2>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                AI continuously optimizes campaigns with A/B testing and real-time budget allocation. Maximize ROI without manual tweaking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Automatic A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Real-time budget shifts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-viral-purple flex-shrink-0 mt-0.5" />
                  <span>Cross-platform attribution</span>
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
            onClick={() => setActiveTab('creation')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'creation'
                ? 'border-viral-cyan text-viral-cyan'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Campaign Creation
          </button>
          <button 
            onClick={() => setActiveTab('optimization')}
            className={`py-4 px-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'optimization'
                ? 'border-viral-purple text-viral-purple'
                : isDarkMode ? 'border-transparent text-slate-400 hover:text-white' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Optimization
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
          {activeTab === 'creation' && (
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign & Ad Creation</h2>
                <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  AI-powered ad creation that generates complete campaigns with audience insights and creative variations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creationFeatures.map((feature, idx) => (
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

          {activeTab === 'optimization' && (
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Campaign Optimization</h2>
                <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Continuous AI-powered optimization that improves your campaigns every single day
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {optimizationFeatures.map((feature, idx) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ad Automation</h2>
                <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Get the results of a dedicated ads manager and data analyst combined in one system
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
          <h2 className="text-4xl font-bold text-center mb-16">How Campaign & Ads AI Works</h2>
          
          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">You Set Goals & Budget</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Define your target audience, goals (sales, leads, awareness), and total budget. AI takes it from there.
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
                <h3 className="text-xl font-bold mb-2">AI Creates Campaigns</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  AI generates ad sets, creates multiple creative variations, and targets audiences. Complete campaigns ready in seconds.
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
                <h3 className="text-xl font-bold mb-2">Campaigns Go Live Across Platforms</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Ads automatically launch on Meta, TikTok, YouTube, Snapchat, and Google Ads simultaneously with optimal settings.
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
                <h3 className="text-xl font-bold mb-2">AI Continuously Optimizes</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  A/B tests run automatically, budgets shift to winners, bids adjust in real-time. ROI improves every day without your input.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viral-cyan to-viral-purple flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">You Get Results with Attribution</h3>
                <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                  Track customer journeys across platforms. See exactly which ads drive conversions and attribute revenue accurately.
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
            Scale Your Ad Campaigns 5x Faster
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Let AI handle campaign creation, A/B testing, and optimization while you focus on strategy.
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
      <footer className={`border-t py-8 px-4 md:px-6 ${isDarkMode ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2024 Viralitics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdAutomationPage;
