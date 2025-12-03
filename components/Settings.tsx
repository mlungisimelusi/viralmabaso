import React from 'react';
import { PlatformStatus } from '../types';
import { CheckCircle2, AlertCircle, RefreshCw, Settings as SettingsIcon } from 'lucide-react';

const platforms: PlatformStatus[] = [
  { name: 'Instagram', connected: true, icon: 'instagram' },
  { name: 'TikTok', connected: true, icon: 'video' },
  { name: 'Facebook', connected: true, icon: 'facebook' },
  { name: 'Twitter / X', connected: false, icon: 'twitter' },
  { name: 'LinkedIn', connected: true, icon: 'linkedin' },
  { name: 'YouTube', connected: false, icon: 'youtube' },
  { name: 'Pinterest', connected: false, icon: 'image' },
  { name: 'Shopify', connected: true, icon: 'shopping-bag' },
];

const Settings: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
       <div>
          <h2 className="text-3xl font-bold text-white mb-2">Platform Integrations</h2>
          <p className="text-slate-400">Manage your connected social accounts and API tokens.</p>
        </div>

        <div className="glass-card rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Connected Platforms</h3>
                <button className="text-viral-cyan text-sm flex items-center gap-2 hover:underline">
                    <RefreshCw size={14} /> Refresh Status
                </button>
            </div>
            
            <div className="divide-y divide-slate-800">
                {platforms.map((platform, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${platform.connected ? 'bg-slate-800' : 'bg-slate-800/50'}`}>
                                <span className="text-xs font-bold text-slate-300">{platform.name[0]}</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">{platform.name}</p>
                                <p className="text-xs text-slate-500">{platform.connected ? 'Data syncing active' : 'Not connected'}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            {platform.connected ? (
                                <span className="flex items-center gap-1.5 text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                                    <CheckCircle2 size={12} /> Connected
                                </span>
                            ) : (
                                <button className="text-xs font-medium text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-1.5 rounded-full transition-colors">
                                    Connect
                                </button>
                            )}
                            <button className="text-slate-500 hover:text-white">
                                <SettingsIcon size={16} /> {/* Should be renamed if conflicting import, but in this file it refers to the icon from lucide not the component */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">API Configuration</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">OpenAI / Gemini API Key</label>
                    <div className="flex gap-2">
                        <input type="password" value="sk-........................" disabled className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-400" />
                        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Update</button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Required for AI Content Engine and Tutor features.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Settings;