import React, { useState } from 'react';
import { X, Linkedin, Youtube, MapPin, Globe, Sun, Moon } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
  setIsDarkMode?: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = true, setIsDarkMode }) => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0e1a]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <a href="#" className="inline-block mb-6">
              <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[60px] md:h-[100px] w-auto object-contain" />
            </a>
            <p className={`text-sm leading-relaxed mb-8 max-w-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              AI-first operating system for modern social media. Automated, intelligent, and scalable.
            </p>
            
            {/* Location */}
            <div className={`space-y-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="flex gap-3">
                <MapPin size={18} className="text-viral-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Global Office</p>
                  <p>Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://x.com/viralitics" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-slate-800 hover:bg-viral-cyan/20 text-slate-400 hover:text-viral-cyan' : 'bg-slate-200 hover:bg-viral-cyan/20 text-slate-600 hover:text-viral-cyan'}`}>
                <X size={18} />
              </a>
              <a href="https://linkedin.com/company/viralitics" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-slate-800 hover:bg-viral-cyan/20 text-slate-400 hover:text-viral-cyan' : 'bg-slate-200 hover:bg-viral-cyan/20 text-slate-600 hover:text-viral-cyan'}`}>
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com/@viralitics" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all ${isDarkMode ? 'bg-slate-800 hover:bg-viral-cyan/20 text-slate-400 hover:text-viral-cyan' : 'bg-slate-200 hover:bg-viral-cyan/20 text-slate-600 hover:text-viral-cyan'}`}>
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 text-viral-cyan`}>Solutions</h4>
            <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Content Engine</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>AI Tutor</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Marketplace</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Ad Automation</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Analytics</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 text-viral-cyan`}>Company</h4>
            <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>About Us</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Careers</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Press</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Contacts</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Blog</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className={`font-semibold text-sm uppercase tracking-wider mb-6 text-viral-cyan`}>Resources</h4>
            <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Help Center</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>API Docs</a></li>
              <li><a href="#" className={`transition-colors hover:text-viral-cyan ${isDarkMode ? 'hover:text-viral-cyan' : 'hover:text-slate-900'}`}>Community</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-8 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            &copy; {currentYear} Viralitics Inc. All rights reserved.
          </div>

          <div className={`flex gap-6 text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            <a href="#" className="hover:text-viral-cyan transition-colors">Terms of Service</a>
            <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}></span>
            <a href="#" className="hover:text-viral-cyan transition-colors">Cookie Policy</a>
            <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}></span>
            <a href="#" className="hover:text-viral-cyan transition-colors">Privacy</a>
          </div>

          <div className="flex items-center gap-4 mr-8">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                  isDarkMode
                    ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-viral-cyan'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-viral-cyan'
                }`}
              >
                <Globe size={16} />
                <span>{selectedLanguage}</span>
              </button>
              
              {showLanguages && (
                <div className={`absolute bottom-full mb-2 right-0 rounded-xl shadow-2xl border overflow-hidden min-w-[160px] z-50 ${
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
