import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

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

      {/* Header */}
      <div className={`fixed w-full z-50 top-0 border-b backdrop-blur-xl ${isDarkMode ? 'bg-[#0B0F19]/90 border-white/5' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-12 w-auto" />
          <button 
            onClick={onLaunch}
            className="px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>

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
      <footer className={`border-t py-8 px-4 md:px-6 ${isDarkMode ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2024 Viralitics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AITutorPage;
