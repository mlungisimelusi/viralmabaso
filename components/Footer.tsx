import React, { useState } from 'react';
import { Mail, X, Linkedin, Youtube, ArrowRight, Globe } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = true }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    'English',
    'Español',
    'Français',
    'Deutsch',
    'Italiano',
    'Português',
    '日本語',
    '한국어',
    '中文',
    'العربية',
    'हिन्दी',
    'Русский',
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-300 ${isDarkMode ? 'bg-[#06080e] border-white/10' : 'bg-slate-100 border-slate-200'}`}>
      {/* Newsletter Section */}
      <div className={`border-b ${isDarkMode ? 'border-white/5 bg-gradient-to-r from-viral-cyan/5 to-viral-purple/5' : 'border-slate-200 bg-gradient-to-r from-viral-cyan/10 to-viral-purple/10'}`}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Stay ahead of the algorithm
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Get one bite-sized growth insight in your inbox each week. No spam, unsubscribe anytime.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`flex-1 px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-viral-cyan ${
                  isDarkMode
                    ? 'bg-slate-900 border border-slate-700 text-white placeholder-slate-500 hover:border-slate-600'
                    : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 hover:border-slate-400'
                }`}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple text-white font-semibold rounded-lg hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="inline-flex items-center gap-3 h-[100px] mb-6">
                <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[100px] w-auto object-contain" />
                <span className="sr-only">Viralitics</span>
              </a>
              <p className={`text-sm leading-relaxed mb-6 max-w-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                The AI-first operating system for the modern social media era. Automated, intelligent, and scalable.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://x.com/viralitics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  className={`p-2 rounded-lg transition-all ${
                    isDarkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900'
                  }`}
                >
                  <X size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/viralitics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on LinkedIn"
                  className={`p-2 rounded-lg transition-all ${
                    isDarkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900'
                  }`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://youtube.com/@viralitics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on YouTube"
                  className={`p-2 rounded-lg transition-all ${
                    isDarkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900'
                  }`}
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Divider on desktop */}
            <div className={`hidden md:block w-px ${isDarkMode ? 'bg-slate-800' : 'bg-slate-300'}`}></div>

            {/* Product Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Product
              </h4>
              <ul className={`space-y-3.5 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Content Engine
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Ad Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Resources
              </h4>
              <ul className={`space-y-3.5 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Company
              </h4>
              <ul className={`space-y-3.5 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t mb-8 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                &copy; {currentYear} Viralitics Inc. All rights reserved.
              </p>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                    isDarkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900'
                  }`}
                  aria-label="Select language"
                >
                  <Globe size={16} />
                  <span>{selectedLanguage}</span>
                </button>
                
                {/* Language Dropdown */}
                {showLanguages && (
                  <div className={`absolute bottom-full mb-2 left-0 rounded-xl shadow-2xl border overflow-hidden min-w-[160px] z-50 ${
                    isDarkMode
                      ? 'bg-slate-900 border-slate-700'
                      : 'bg-white border-slate-200'
                  }`}>
                    <div className="max-h-64 overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setShowLanguages(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                            selectedLanguage === lang
                              ? isDarkMode
                                ? 'bg-viral-cyan/20 text-viral-cyan'
                                : 'bg-viral-cyan/10 text-viral-cyan'
                              : isDarkMode
                              ? 'text-slate-300 hover:bg-slate-800'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className={`flex gap-6 text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
              <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                Privacy Policy
              </a>
              <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                Terms of Service
              </a>
              <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}>•</span>
              <a href="#" className={`transition-colors hover:${isDarkMode ? 'text-white' : 'text-slate-900'} focus:outline-none focus:ring-2 focus:ring-viral-cyan rounded px-1`}>
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
