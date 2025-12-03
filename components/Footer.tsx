import React from 'react';
import { Globe, Sliders } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode = true }) => {
  return (
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
  );
};

export default Footer;
