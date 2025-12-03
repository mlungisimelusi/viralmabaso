import React from 'react';
import { View } from '../types';
import { 
  LayoutDashboard, 
  PenTool, 
  Users, 
  Megaphone, 
  BarChart2, 
  GraduationCap, 
  Settings
} from 'lucide-react';

interface SidebarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const menuItems = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: View.CONTENT_ENGINE, label: 'AI Content Engine', icon: PenTool },
    { id: View.MARKETPLACE, label: 'Influencer Market', icon: Users },
    { id: View.ADS_MANAGER, label: 'Campaigns & Ads', icon: Megaphone },
    { id: View.ANALYTICS, label: 'Analytics', icon: BarChart2 },
    { id: View.TUTOR, label: 'AI Tutor', icon: GraduationCap },
    { id: View.SETTINGS, label: 'Integrations', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
      <div className="p-6 flex items-center gap-3">
        {/* Logo Image */}
        <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-12 w-auto object-contain" />
        <div>
            <p className="text-[10px] text-viral-cyan tracking-wider font-semibold">AI SOCIAL OS</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-slate-800 text-white shadow-lg shadow-purple-900/20 border border-slate-700/50' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
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

      <div className="p-4 border-t border-slate-800">
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-slate-300">System Status</span>
          </div>
          <p className="text-xs text-slate-400">All Systems Operational</p>
          <p className="text-xs text-slate-500 mt-1">v1.1 Developer Edition</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;