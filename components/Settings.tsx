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
                    <label className="block text-sm font-medium text-slate-300 mb-2">Viralitics API Key</label>
                    <div className="flex gap-2">
                        <input type="password" value="vir_........................" disabled className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-400 font-mono text-sm" />
                        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Regenerate</button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Use this key to access the Viralitics API programmatically.</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">OpenAI / Gemini API Key</label>
                    <div className="flex gap-2">
                        <input type="password" value="sk-........................" disabled className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-400 font-mono text-sm" />
                        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Update</button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Required for AI Content Engine and Tutor features.</p>
                </div>
            </div>
        </div>

        {/* White-Label Settings (Business Plan) */}
        <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-lg font-bold text-white">White-Label Configuration</h3>
                    <p className="text-sm text-slate-400 mt-1">Customize branding for client reports</p>
                </div>
                <span className="px-3 py-1 bg-viral-purple/20 text-viral-purple text-xs font-bold rounded-full">
                    Business Plan
                </span>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Logo</label>
                    <div className="flex gap-3 items-center">
                        <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
                            <span className="text-slate-500 text-xs">No logo</span>
                        </div>
                        <div className="flex-1">
                            <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
                                Upload Logo
                            </button>
                            <p className="text-xs text-slate-500">Recommended: 500x500px, PNG or SVG</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Company Name" 
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-viral-cyan"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Brand Color</label>
                    <div className="flex gap-2">
                        <input 
                            type="color" 
                            defaultValue="#23bddf"
                            className="w-12 h-10 bg-slate-800 border border-slate-700 rounded-lg cursor-pointer"
                        />
                        <input 
                            type="text" 
                            value="#23bddf" 
                            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-viral-cyan"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                        <p className="text-white font-medium text-sm">Remove Viralitics Branding</p>
                        <p className="text-slate-400 text-xs">Hide "Powered by Viralitics" in reports</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-viral-cyan"></div>
                    </label>
                </div>
            </div>
        </div>

        {/* Team Settings */}
        <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Team Settings</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                        <p className="text-white font-medium text-sm">Require 2FA for Team Members</p>
                        <p className="text-slate-400 text-xs">Enforce two-factor authentication</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-viral-cyan"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                        <p className="text-white font-medium text-sm">Email Notifications</p>
                        <p className="text-slate-400 text-xs">Notify team on campaign completions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-viral-cyan"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                        <p className="text-white font-medium text-sm">Auto-approve Content</p>
                        <p className="text-slate-400 text-xs">Skip review for AI-generated content</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-viral-cyan"></div>
                    </label>
                </div>
            </div>
        </div>

        {/* Integrations */}
        <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Third-Party Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    { name: 'Zapier', description: 'Connect 5000+ apps', connected: true },
                    { name: 'Google Analytics', description: 'Track performance', connected: true },
                    { name: 'Slack', description: 'Team notifications', connected: false },
                    { name: 'HubSpot', description: 'CRM integration', connected: false },
                    { name: 'Shopify', description: 'E-commerce sync', connected: true },
                    { name: 'Stripe', description: 'Payment tracking', connected: false }
                ].map((integration, idx) => (
                    <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold text-sm">{integration.name}</p>
                            <p className="text-slate-400 text-xs">{integration.description}</p>
                        </div>
                        {integration.connected ? (
                            <span className="text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                                Active
                            </span>
                        ) : (
                            <button className="text-xs font-medium text-white bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full transition-colors">
                                Connect
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Billing */}
        <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Billing & Subscription</h3>
            <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">Creator Pro Plan</h4>
                        <span className="px-3 py-1 bg-viral-cyan/20 text-viral-cyan text-xs font-bold rounded-full">
                            Active
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">$29/month • Renews on Jan 4, 2026</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors">
                            Change Plan
                        </button>
                        <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg text-sm font-medium transition-colors">
                            Cancel Subscription
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                        <p className="text-white font-medium text-sm">Payment Method</p>
                        <p className="text-slate-400 text-xs">Visa ending in 4242</p>
                    </div>
                    <button className="text-viral-cyan text-sm font-medium hover:underline">
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Settings;