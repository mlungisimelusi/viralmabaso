import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentEngine from './components/ContentEngine';
import Marketplace from './components/Marketplace';
import Settings from './components/Settings';
import ContentCalendar from './components/ContentCalendar';
import TeamCollaboration from './components/TeamCollaboration';
import APIDocs from './components/APIDocs';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PricingPage from './components/PricingPage';
import { View } from './types';
import { Bell, Search, UserCircle, Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'signup' | 'pricing' | 'app'>('landing');
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(true);

  if (currentPage === 'landing') {
    return <LandingPage onLaunch={() => setCurrentPage('signup')} onLogin={() => setCurrentPage('login')} onPricing={() => setCurrentPage('pricing')} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
  }

  if (currentPage === 'login') {
    return <LoginPage onBack={() => setCurrentPage('landing')} onLoginSuccess={() => setCurrentPage('app')} onSignup={() => setCurrentPage('signup')} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
  }

  if (currentPage === 'signup') {
    return <SignupPage onBack={() => setCurrentPage('landing')} onSignupSuccess={() => setCurrentPage('app')} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
  }

  if (currentPage === 'pricing') {
    return <PricingPage onBack={() => setCurrentPage('landing')} onSelectPlan={(plan) => {
      console.log('Selected plan:', plan);
      setCurrentPage('signup');
    }} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
  }

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard isDarkMode={isDarkMode} />;
      case View.CONTENT_ENGINE:
        return <ContentEngine />;
      case View.MARKETPLACE:
        return <Marketplace />;
      case View.SETTINGS:
        return <Settings />;
      case View.CALENDAR:
        return <ContentCalendar />;
      case View.TEAM:
        return <TeamCollaboration />;
      case View.API_DOCS:
        return <APIDocs />;
      case View.ADS_MANAGER:
      case View.ANALYTICS:
      case View.TUTOR:
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-in fade-in">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <span className="text-4xl">🚧</span>
                </div>
                <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Coming Soon</h2>
                <p className={`max-w-md ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    The <strong>{currentView.replace('_', ' ')}</strong> module is currently under development in the v1.1 roadmap.
                </p>
            </div>
        );
      default:
        return <Dashboard isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans flex animate-in fade-in duration-700 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
      {/* Sidebar */}
      <Sidebar currentView={currentView} onNavigate={setCurrentView} isDarkMode={isDarkMode} />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col relative">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-viral-purple/10 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-viral-cyan/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Header */}
        <header className={`h-20 border-b flex items-center justify-between px-8 backdrop-blur-md sticky top-0 z-10 transition-colors ${isDarkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white/50'}`}>
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} size={18} />
                <input 
                    type="text" 
                    placeholder="Search campaigns, influencers, or assets..." 
                    className={`w-full rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-viral-cyan transition-colors ${isDarkMode ? 'bg-slate-800/50 border border-slate-700/50 text-white' : 'bg-slate-100 border border-slate-200 text-slate-900'}`}
                />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`relative transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                <Bell size={20} />
                <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-viral-cyan rounded-full border-2 ${isDarkMode ? 'border-slate-900' : 'border-white'}`}></span>
            </button>
            <div className={`flex items-center gap-3 pl-6 border-l ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className="text-right hidden md:block">
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Alex Designer</p>
                    <p className="text-xs text-slate-500">Pro Plan</p>
                </div>
                <button className="hover:opacity-80 transition-opacity">
                    <UserCircle size={36} className="text-slate-300" />
                </button>
            </div>
            <button 
              onClick={() => setCurrentPage('login')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'}`}
            >
              Log Out
            </button>
          </div>
        </header>

        {/* View Content */}
        <div className="p-8 pb-20">
            {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;