import React from 'react';
import { View } from '../types';
import { 
  LayoutDashboard, 
  PenTool, 
  Users, 
  Megaphone, 
  BarChart2, 
  GraduationCap, 
  Settings,
  Calendar,
  UserCog,
  Code
} from 'lucide-react';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const menuItems = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: View.CONTENT_ENGINE, label: 'AI Content Engine', icon: PenTool },
    { id: View.CALENDAR, label: 'Content Calendar', icon: Calendar },
    { id: View.MARKETPLACE, label: 'Influencer Market', icon: Users },
    { id: View.ADS_MANAGER, label: 'Campaigns & Ads', icon: Megaphone },
    { id: View.ANALYTICS, label: 'Analytics', icon: BarChart2 },
    { id: View.TUTOR, label: 'AI Tutor', icon: GraduationCap },
    { id: View.TEAM, label: 'Team Workspace', icon: UserCog },
    { id: View.API_DOCS, label: 'API Docs', icon: Code },
    { id: View.SETTINGS, label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-40 p-2 rounded-lg md:hidden transition-colors"
        style={{
          background: isDarkMode ? '#1e293b' : '#f1f5f9',
          color: isDarkMode ? '#fff' : '#000'
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar - Hidden on mobile, visible on md+ */}
      <aside className={`fixed left-0 top-0 h-full w-56 border-r flex flex-col z-20 transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 md:relative ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="p-6 flex items-center justify-center h-24 border-b" style={{ borderColor: isDarkMode ? '#1e293b' : '#e2e8f0' }}>
          {/* Logo Image - Match navbar style */}
          <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[80px] w-auto object-contain" />
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm ${
                isActive 
                  ? isDarkMode 
                    ? 'bg-slate-800 text-white shadow-lg shadow-purple-900/20 border border-slate-700/50'
                    : 'bg-slate-100 text-slate-900 shadow-lg shadow-purple-200/30 border border-slate-200'
                  : isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon 
                size={20} 
                className={`transition-colors ${isActive ? 'text-viral-cyan' : 'group-hover:text-viral-purple'}`} 
              />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
        </nav>

        <div className={`p-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className={`p-4 rounded-xl text-xs ${isDarkMode ? 'glass-card' : 'bg-slate-50 border border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
              <span className={`font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>System Status</span>
            </div>
            <p className="text-slate-400">All Systems Operational</p>
            <p className="text-slate-500 mt-1">v1.1 Developer Edition</p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;