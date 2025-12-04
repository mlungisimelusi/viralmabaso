import React from 'react';
import { Influencer } from '../types';
import { Star, ShieldCheck, TrendingUp } from 'lucide-react';

const mockInfluencers: Influencer[] = [
  {
    id: '1',
    name: 'Sarah Jenks',
    handle: '@sarahstyle',
    niche: 'Fashion & Lifestyle',
    score: 98,
    followers: '2.4M',
    engagementRate: '5.2%',
    imageUrl: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: '2',
    name: 'Tech Haven',
    handle: '@techhaven_reviews',
    niche: 'Technology',
    score: 94,
    followers: '850K',
    engagementRate: '8.7%',
    imageUrl: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: '3',
    name: 'Chef Mike',
    handle: '@mikecooks',
    niche: 'Food & Dining',
    score: 91,
    followers: '1.1M',
    engagementRate: '4.1%',
    imageUrl: 'https://picsum.photos/200/200?random=3'
  },
  {
    id: '4',
    name: 'FitLife Jess',
    handle: '@jess_fitness',
    niche: 'Health & Wellness',
    score: 88,
    followers: '500K',
    engagementRate: '12.3%',
    imageUrl: 'https://picsum.photos/200/200?random=4'
  },
  {
    id: '5',
    name: 'Travel with Tom',
    handle: '@tomtravels',
    niche: 'Travel',
    score: 85,
    followers: '3.2M',
    engagementRate: '3.5%',
    imageUrl: 'https://picsum.photos/200/200?random=5'
  },
   {
    id: '6',
    name: 'Gamer Pro',
    handle: '@gamerpro_official',
    niche: 'Gaming',
    score: 96,
    followers: '4.5M',
    engagementRate: '9.2%',
    imageUrl: 'https://picsum.photos/200/200?random=6'
  },
];

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Influencer Marketplace</h2>
          <p className="text-slate-400">AI-scored creators for maximum campaign ROI.</p>
        </div>
        <div className="flex gap-3">
            <input 
                type="text" 
                placeholder="Search niche or handle..." 
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-viral-cyan"
            />
            <button className="bg-viral-cyan hover:bg-cyan-500 text-slate-900 font-bold px-6 py-2 rounded-xl text-sm transition-colors">
                Find Creators
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInfluencers.map((inf) => (
          <div key={inf.id} className="glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-viral-purple/50 transition-all group">
            <div className="h-24 bg-gradient-to-r from-slate-800 to-slate-900 relative">
                 <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700 flex items-center gap-1 text-xs font-bold text-viral-cyan">
                    <ShieldCheck size={12} /> Verified
                 </div>
            </div>
            <div className="px-6 pb-6 relative">
              <div className="absolute -top-12 left-6">
                <img 
                    src={inf.imageUrl} 
                    alt={inf.name} 
                    className="w-24 h-24 rounded-2xl border-4 border-slate-900 object-cover shadow-lg"
                />
              </div>
              <div className="mt-14 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{inf.name}</h3>
                    <p className="text-slate-400 text-sm">{inf.handle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black gradient-text">{inf.score}</div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-500 font-bold">AI Score</div>
                  </div>
              </div>

              <div className="mt-4 flex gap-2">
                 <span className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                    {inf.niche}
                 </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                 <div>
                    <p className="text-slate-500 text-xs mb-1">Followers</p>
                    <p className="text-white font-bold">{inf.followers}</p>
                 </div>
                 <div>
                    <p className="text-slate-500 text-xs mb-1">Engagement</p>
                    <p className="text-green-400 font-bold flex items-center gap-1">
                        <TrendingUp size={12} /> {inf.engagementRate}
                    </p>
                 </div>
              </div>

              <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors group-hover:bg-gradient-to-r group-hover:from-viral-cyan group-hover:to-viral-purple group-hover:text-white group-hover:border-transparent">
                View Profile & Analysis
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
