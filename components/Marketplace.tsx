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
    imageUrl: 'https://picsum.photos/200/200?random=1',
    bio: 'NYC-based fashion curator sharing daily outfit inspiration and sustainable style tips for modern professionals.'
  },
  {
    id: '2',
    name: 'Tech Haven',
    handle: '@techhaven_reviews',
    niche: 'Technology',
    score: 94,
    followers: '850K',
    engagementRate: '8.7%',
    imageUrl: 'https://picsum.photos/200/200?random=2',
    bio: 'In-depth tech reviews and tutorials. Trusted by brands like Apple, Samsung, and Google for product launches.'
  },
  {
    id: '3',
    name: 'Chef Mike',
    handle: '@mikecooks',
    niche: 'Food & Dining',
    score: 91,
    followers: '1.1M',
    engagementRate: '4.1%',
    imageUrl: 'https://picsum.photos/200/200?random=3',
    bio: 'Michelin-trained chef making gourmet cooking accessible. Partnered with major culinary brands and kitchenware.'
  },
  {
    id: '4',
    name: 'FitLife Jess',
    handle: '@jess_fitness',
    niche: 'Health & Wellness',
    score: 88,
    followers: '500K',
    engagementRate: '12.3%',
    imageUrl: 'https://picsum.photos/200/200?random=4',
    bio: 'Certified personal trainer and nutritionist. Authentic fitness journey inspiring 500K+ followers to live healthier.'
  },
  {
    id: '5',
    name: 'Travel with Tom',
    handle: '@tomtravels',
    niche: 'Travel',
    score: 85,
    followers: '3.2M',
    engagementRate: '3.5%',
    imageUrl: 'https://picsum.photos/200/200?random=5',
    bio: 'Adventure photographer exploring 150+ countries. Collaborating with tourism boards and hospitality brands worldwide.'
  },
   {
    id: '6',
    name: 'Gamer Pro',
    handle: '@gamerpro_official',
    niche: 'Gaming',
    score: 96,
    followers: '4.5M',
    engagementRate: '9.2%',
    imageUrl: 'https://picsum.photos/200/200?random=6',
    bio: 'Professional esports player and streamer. Official partner with Xbox, PlayStation, and leading gaming peripherals.'
  },
];

const Marketplace: React.FC = () => {
  const influencerTiers = [
    {
      tier: 'Nano',
      followers: '1K - 10K',
      engagement: '5-10%',
      avgCost: '$50-200',
      description: 'Highly engaged niche audiences with authentic connections',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      tier: 'Micro',
      followers: '10K - 100K',
      engagement: '3-7%',
      avgCost: '$200-1K',
      description: 'Strong community influence with targeted reach',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      tier: 'Macro',
      followers: '100K - 1M',
      engagement: '2-5%',
      avgCost: '$1K-10K',
      description: 'Wide reach with established brand partnerships',
      color: 'from-purple-500 to-pink-500'
    },
    {
      tier: 'Mega',
      followers: '1M+',
      engagement: '1-3%',
      avgCost: '$10K+',
      description: 'Maximum visibility and celebrity-level impact',
      color: 'from-orange-500 to-red-500'
    }
  ];

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

      {/* Influencer Tier Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {influencerTiers.map((tier) => (
          <div key={tier.tier} className="glass-card rounded-xl p-5 border border-slate-700/50 hover:border-slate-600 transition-all group">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-3`}>
              <Star size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{tier.tier}</h3>
            <p className="text-sm text-slate-400 mb-3">{tier.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Followers:</span>
                <span className="text-slate-300 font-semibold">{tier.followers}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Engagement:</span>
                <span className="text-green-400 font-semibold">{tier.engagement}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Avg Cost:</span>
                <span className="text-viral-cyan font-semibold">{tier.avgCost}</span>
              </div>
            </div>
          </div>
        ))}
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

              <p className="mt-4 text-sm text-slate-400 leading-relaxed line-clamp-2">
                {(inf as any).bio}
              </p>

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
