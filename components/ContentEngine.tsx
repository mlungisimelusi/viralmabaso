import React, { useState } from 'react';
import { generateSocialContent } from '../services/geminiService';
import { GeneratedContent } from '../types';

const ContentEngine: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [tone, setTone] = useState('Exciting');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setLoading(true);
    setResult(null);
    try {
      const data = await generateSocialContent(topic, platform, tone);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert('Failed to generate content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-500">
      
      {/* Input Section */}
      <div className="glass-card p-6 rounded-2xl border border-slate-700/50 h-fit">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <i className="fas fa-magic text-viral-purple"></i>
            AI Content Engine
          </h2>
          <p className="text-slate-400 mt-2">
            Generate multi-platform viral content from a single prompt.
          </p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Topic or Idea</label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-viral-cyan focus:ring-1 focus:ring-viral-cyan transition-all resize-none"
              placeholder="e.g., Launching a new eco-friendly sneaker line made from recycled ocean plastic..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Platform</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan"
              >
                <option>Instagram</option>
                <option>TikTok</option>
                <option>Twitter / X</option>
                <option>LinkedIn</option>
                <option>YouTube Shorts</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tone</label>
              <select 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-viral-cyan"
              >
                <option>Exciting</option>
                <option>Professional</option>
                <option>Funny</option>
                <option>Educational</option>
                <option>Urgent</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Generating...
              </>
            ) : (
              <>
                Generate Magic <i className="fas fa-magic"></i>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Output Section */}
      <div className="space-y-6">
        {result ? (
          <>
            {/* Script Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Generated Script</h3>
                <button className="text-slate-400 hover:text-viral-cyan transition-colors" title="Copy">
                  <i className="fas fa-copy"></i>
                </button>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                {result.script}
              </div>
            </div>

            {/* Caption & Hashtags */}
            <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Caption & Metadata</h3>
                <button className="text-slate-400 hover:text-viral-cyan transition-colors">
                  <i className="fas fa-copy"></i>
                </button>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-slate-300 text-sm mb-4">
                {result.caption}
              </div>
              <div className="flex flex-wrap gap-2">
                {result.hashtags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-viral-purple/10 text-viral-purple text-xs font-medium border border-viral-purple/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

             {/* Visual Suggestion */}
             <div className="glass-card p-6 rounded-2xl border border-slate-700/50">
                <div className="flex items-center gap-2 mb-4 text-white font-bold">
                    <i className="fas fa-image text-viral-cyan"></i>
                    <h3>Visual Direction</h3>
                </div>
                <p className="text-slate-400 text-sm italic border-l-2 border-viral-cyan pl-4">
                    "{result.suggestedVisual}"
                </p>
                <div className="mt-4 flex gap-3">
                     <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-white font-medium transition-colors">
                        Send to Designer
                     </button>
                     <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-white font-medium transition-colors">
                        Generate Image (Coming Soon)
                     </button>
                </div>
             </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center glass-card rounded-2xl border border-slate-700/50 p-10 text-center opacity-70">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-4">
              <i className="fas fa-magic text-slate-600 text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-white">Ready to Create?</h3>
            <p className="text-slate-400 mt-2 max-w-xs mx-auto">
              Enter a topic on the left to let the AI Engine generate viral-ready content for you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentEngine;
