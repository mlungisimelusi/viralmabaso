import React, { useState } from 'react';
import { Code, Copy, Check, Key, BookOpen, Zap, Shield } from 'lucide-react';

const APIDocs: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    javascript: {
      auth: `const API_KEY = 'your_api_key_here';

fetch('https://api.viralitics.com/v1/auth', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
});`,
      generateContent: `const response = await fetch('https://api.viralitics.com/v1/content/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    topic: 'AI in social media',
    platform: 'instagram',
    tone: 'professional'
  })
});

const data = await response.json();
console.log(data);`,
      analytics: `const response = await fetch('https://api.viralitics.com/v1/analytics', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`
  },
  params: {
    platform: 'all',
    dateRange: 'last_30_days'
  }
});

const analytics = await response.json();`
    },
    python: {
      auth: `import requests

API_KEY = 'your_api_key_here'

response = requests.post(
    'https://api.viralitics.com/v1/auth',
    headers={
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
)`,
      generateContent: `import requests

response = requests.post(
    'https://api.viralitics.com/v1/content/generate',
    headers={
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    },
    json={
        'topic': 'AI in social media',
        'platform': 'instagram',
        'tone': 'professional'
    }
)

data = response.json()
print(data)`,
      analytics: `import requests

response = requests.get(
    'https://api.viralitics.com/v1/analytics',
    headers={'Authorization': f'Bearer {API_KEY}'},
    params={
        'platform': 'all',
        'dateRange': 'last_30_days'
    }
)

analytics = response.json()`
    },
    curl: {
      auth: `curl -X POST https://api.viralitics.com/v1/auth \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      generateContent: `curl -X POST https://api.viralitics.com/v1/content/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "topic": "AI in social media",
    "platform": "instagram",
    "tone": "professional"
  }'`,
      analytics: `curl -X GET "https://api.viralitics.com/v1/analytics?platform=all&dateRange=last_30_days" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
    }
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/v1/auth',
      description: 'Authenticate and get access token',
      color: 'bg-green-500'
    },
    {
      method: 'POST',
      path: '/v1/content/generate',
      description: 'Generate AI content for specified platform',
      color: 'bg-blue-500'
    },
    {
      method: 'GET',
      path: '/v1/analytics',
      description: 'Retrieve analytics data',
      color: 'bg-viral-cyan'
    },
    {
      method: 'POST',
      path: '/v1/posts/schedule',
      description: 'Schedule a post across platforms',
      color: 'bg-green-500'
    },
    {
      method: 'GET',
      path: '/v1/influencers',
      description: 'Search influencer marketplace',
      color: 'bg-viral-cyan'
    },
    {
      method: 'POST',
      path: '/v1/campaigns/create',
      description: 'Create new ad campaign',
      color: 'bg-green-500'
    },
    {
      method: 'PUT',
      path: '/v1/campaigns/{id}',
      description: 'Update existing campaign',
      color: 'bg-yellow-500'
    },
    {
      method: 'DELETE',
      path: '/v1/posts/{id}',
      description: 'Delete scheduled post',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="h-full space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">API Documentation</h2>
          <p className="text-slate-400">Integrate Viralitics into your workflow</p>
        </div>
        <a
          href="https://docs.viralitics.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-xl font-semibold transition-all"
        >
          <BookOpen size={20} />
          Full Documentation
        </a>
      </div>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card p-6 rounded-xl border border-slate-700/50">
          <div className="w-12 h-12 rounded-lg bg-viral-cyan/20 flex items-center justify-center mb-4">
            <Key className="text-viral-cyan" size={24} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Get API Key</h3>
          <p className="text-slate-400 text-sm mb-4">
            Generate your API key from the settings page to start making requests.
          </p>
          <button className="text-viral-cyan text-sm font-semibold hover:underline">
            Go to Settings →
          </button>
        </div>

        <div className="glass-card p-6 rounded-xl border border-slate-700/50">
          <div className="w-12 h-12 rounded-lg bg-viral-purple/20 flex items-center justify-center mb-4">
            <Zap className="text-viral-purple" size={24} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Quick Start</h3>
          <p className="text-slate-400 text-sm mb-4">
            Make your first API call in under 5 minutes with our examples.
          </p>
          <button className="text-viral-purple text-sm font-semibold hover:underline">
            View Examples →
          </button>
        </div>

        <div className="glass-card p-6 rounded-xl border border-slate-700/50">
          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
            <Shield className="text-green-500" size={24} />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Rate Limits</h3>
          <p className="text-slate-400 text-sm mb-4">
            1000 requests/hour on Pro plan, 5000 on Business. No limits on Enterprise.
          </p>
          <button className="text-green-500 text-sm font-semibold hover:underline">
            View Pricing →
          </button>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Available Endpoints</h3>
        <div className="space-y-2">
          {endpoints.map((endpoint, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-all"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className={`${endpoint.color} text-white text-xs font-bold px-3 py-1 rounded-lg`}>
                  {endpoint.method}
                </span>
                <code className="text-viral-cyan font-mono text-sm">{endpoint.path}</code>
              </div>
              <p className="text-slate-400 text-sm">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Code Examples */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Code Examples</h3>
          <div className="flex gap-2">
            {['javascript', 'python', 'curl'].map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedLanguage === lang
                    ? 'bg-viral-cyan text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Authentication Example */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Authentication</h4>
          <div className="relative">
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-slate-300 font-mono">
                {codeExamples[selectedLanguage as keyof typeof codeExamples].auth}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(codeExamples[selectedLanguage as keyof typeof codeExamples].auth, 'auth')}
              className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              {copiedCode === 'auth' ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Generate Content Example */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Generate Content</h4>
          <div className="relative">
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-slate-300 font-mono">
                {codeExamples[selectedLanguage as keyof typeof codeExamples].generateContent}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(codeExamples[selectedLanguage as keyof typeof codeExamples].generateContent, 'content')}
              className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              {copiedCode === 'content' ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Analytics Example */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get Analytics</h4>
          <div className="relative">
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-slate-300 font-mono">
                {codeExamples[selectedLanguage as keyof typeof codeExamples].analytics}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(codeExamples[selectedLanguage as keyof typeof codeExamples].analytics, 'analytics')}
              className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              {copiedCode === 'analytics' ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Response Format */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Response Format</h3>
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
          <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`{
  "success": true,
  "data": {
    "platform": "instagram",
    "content": {
      "caption": "Your generated caption...",
      "hashtags": ["#viral", "#trending"],
      "script": "Your video script..."
    }
  },
  "meta": {
    "requestId": "req_abc123",
    "timestamp": "2025-12-04T10:30:00Z"
  }
}`}
          </pre>
        </div>
      </div>

      {/* SDK Links */}
      <div className="glass-card rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-4">Official SDKs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Node.js SDK', version: 'v2.1.0', downloads: '12K', link: 'npm install @viralitics/sdk' },
            { name: 'Python SDK', version: 'v2.0.3', downloads: '8K', link: 'pip install viralitics' },
            { name: 'Go SDK', version: 'v1.5.0', downloads: '3K', link: 'go get github.com/viralitics/sdk' }
          ].map((sdk, idx) => (
            <div key={idx} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <div className="flex items-center gap-2 mb-2">
                <Code className="text-viral-cyan" size={20} />
                <h4 className="text-white font-semibold">{sdk.name}</h4>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span>{sdk.version}</span>
                <span>•</span>
                <span>{sdk.downloads} downloads</span>
              </div>
              <div className="bg-slate-900 border border-slate-700 rounded p-2">
                <code className="text-xs text-viral-cyan font-mono">{sdk.link}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIDocs;
