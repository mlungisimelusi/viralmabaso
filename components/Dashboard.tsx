import React from 'react';
import { Metric } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', engagement: 4000, reach: 2400 },
  { name: 'Tue', engagement: 3000, reach: 1398 },
  { name: 'Wed', engagement: 2000, reach: 9800 },
  { name: 'Thu', engagement: 2780, reach: 3908 },
  { name: 'Fri', engagement: 1890, reach: 4800 },
  { name: 'Sat', engagement: 2390, reach: 3800 },
  { name: 'Sun', engagement: 3490, reach: 4300 },
];

const metrics: (Metric & { icon: React.ElementType })[] = [
  { label: 'Global Engagement Rate', value: '8.4%', change: '+2.1%', positive: true, icon: Activity },
  { label: 'Viral Content Ratio', value: '32%', change: '+5%', positive: true, icon: TrendingUp },
  { label: 'Total Reach', value: '1.2M', change: '+18%', positive: true, icon: Users },
  { label: 'Ad ROI', value: '4.2x', change: '-0.3%', positive: false, icon: DollarSign },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Control Centre</h2>
          <p className="text-slate-400">Real-time overview of your social operating system.</p>
        </div>
        <div className="flex gap-2">
           <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
              Live Data
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl hover:bg-slate-800/80 transition-all border border-slate-700/50">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-slate-800 text-viral-cyan">
                <metric.icon size={20} />
              </div>
              <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${metric.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {metric.positive ? <ArrowUpRight size={12} className="mr-1"/> : <ArrowDownRight size={12} className="mr-1"/>}
                {metric.change}
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium">{metric.label}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{metric.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-700/50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Engagement Growth</h3>
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-1 focus:outline-none focus:border-viral-cyan">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#23bddf" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#23bddf" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cf29f5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#cf29f5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="engagement" stroke="#23bddf" fillOpacity={1} fill="url(#colorEngage)" strokeWidth={3} />
                <Area type="monotone" dataKey="reach" stroke="#cf29f5" fillOpacity={1} fill="url(#colorReach)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-700/50 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-4">Active Campaigns</h3>
          <div className="space-y-4 flex-1 overflow-y-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-viral-cyan/50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-white">Summer Sale v{i}</span>
                  <span className="text-xs bg-viral-purple/20 text-viral-purple px-2 py-0.5 rounded text-center">Optimizing</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                  <div className="bg-gradient-to-r from-viral-cyan to-viral-purple h-1.5 rounded-full" style={{ width: `${60 + i * 10}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Budget Used: ${(i * 120).toFixed(0)}</span>
                  <span>ROAS: 4.{i}x</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
            View All Campaigns
          </button>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
        <h3 className="text-lg font-bold text-white mb-4">Platform Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { platform: 'Instagram', followers: '1.2M', growth: '+12%', engagement: '8.4%', color: 'from-pink-500 to-purple-500' },
            { platform: 'TikTok', followers: '850K', growth: '+24%', engagement: '12.1%', color: 'from-black to-pink-500' },
            { platform: 'YouTube', followers: '500K', growth: '+8%', engagement: '6.2%', color: 'from-red-500 to-red-600' },
            { platform: 'Twitter', followers: '320K', growth: '+5%', engagement: '4.8%', color: 'from-blue-400 to-blue-500' }
          ].map((platform, idx) => (
            <div key={idx} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-viral-cyan/50 transition-all">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} mb-3 flex items-center justify-center text-white font-bold text-sm`}>
                {platform.platform[0]}
              </div>
              <h4 className="text-white font-semibold mb-2">{platform.platform}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Followers:</span>
                  <span className="text-white font-semibold">{platform.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Growth:</span>
                  <span className="text-green-400 font-semibold">{platform.growth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Engagement:</span>
                  <span className="text-viral-cyan font-semibold">{platform.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Published', content: 'Summer launch campaign', platform: 'Instagram', time: '2 min ago', icon: '📸' },
              { action: 'Scheduled', content: 'Product tutorial video', platform: 'YouTube', time: '15 min ago', icon: '📹' },
              { action: 'Optimized', content: 'Ad Campaign A/B Test', platform: 'Facebook', time: '1 hour ago', icon: '📊' },
              { action: 'Created', content: 'Influencer collaboration', platform: 'TikTok', time: '3 hours ago', icon: '🤝' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{activity.action}</span>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-slate-400 text-xs">{activity.platform}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{activity.content}</p>
                  <span className="text-slate-500 text-xs">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4">Top Content</h3>
          <div className="space-y-3">
            {[
              { title: 'How AI is changing social media', views: '1.2M', engagement: '94K', platform: 'YouTube' },
              { title: 'Behind the scenes at our studio', views: '850K', engagement: '76K', platform: 'Instagram' },
              { title: 'Product launch teaser', views: '650K', engagement: '58K', platform: 'TikTok' }
            ].map((content, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-viral-cyan to-viral-purple rounded-lg flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm mb-1">{content.title}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-400">{content.platform}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-viral-cyan">{content.views} views</span>
                    <span className="text-green-400">{content.engagement} engaged</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
