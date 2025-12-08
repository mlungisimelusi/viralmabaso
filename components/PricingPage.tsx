import React, { useState } from 'react';
import { Check, X, ArrowLeft, Zap, Crown, Rocket, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

// Social Media Icons using Font Awesome CDN
const SocialIcon = ({ platform }: { platform: string }) => {
  const iconMap: { [key: string]: string } = {
    'TikTok': 'fab fa-tiktok',
    'Instagram': 'fab fa-instagram',
    'YouTube': 'fab fa-youtube',
    'Facebook': 'fab fa-facebook',
    'LinkedIn': 'fab fa-linkedin',
    'X (Twitter)': 'fab fa-x-twitter',
    'Reddit': 'fab fa-reddit',
    'Twitch': 'fab fa-twitch',
    'Pinterest': 'fab fa-pinterest',
    'Snapchat': 'fab fa-snapchat',
    'Discord': 'fab fa-discord',
    'WhatsApp': 'fab fa-whatsapp',
    'Telegram': 'fab fa-telegram',
    'Bluesky': 'fab fa-bluesky',
    'Mastodon': 'fab fa-mastodon',
  };

  return (
    <i className={`${iconMap[platform]} text-2xl text-slate-500 hover:text-slate-400 transition-colors`}></i>
  );
};

interface PricingPageProps {
  onBack: () => void;
  onSelectPlan: (plan: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, onSelectPlan, isDarkMode, setIsDarkMode }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  // Add CSS for wave animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0% {
          d: path('M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z');
        }
        50% {
          d: path('M0,80L48,96C96,112,192,144,288,154.7C384,165,480,155,576,144C672,133,768,123,864,122.7C960,123,1056,133,1152,138.7C1248,144,1344,160,1392,166.7L1440,173L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z');
        }
        100% {
          d: path('M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z');
        }
      }
      .wave-path {
        animation: wave 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const plans = [
    {
      name: 'Launch',
      icon: Zap,
      price: { monthly: 29, yearly: 290 },
      description: 'Perfect for individuals getting started.',
      features: [
        'Up to 3 Social Profiles',
        'Basic AI Content',
        'Basic Analytics',
        'Community Support',
      ],
      limitations: [],
      highlighted: false,
      cta: 'Get Started',
      badge: null,
      label: 'STARTER',
    },
    {
      name: 'Creator Pro',
      icon: Rocket,
      price: { monthly: 99, yearly: 990 },
      description: 'For brands and creators scaling their brand.',
      features: [
        'Unlimited Social Profiles',
        'Unlimited AI Content',
        'Advanced Analytics',
        'AI Tutor Access',
        'Marketplace Access',
        'Priority Support',
      ],
      limitations: [],
      highlighted: true,
      cta: 'Start Free Trial',
      badge: 'Most Popular',
      label: 'GROWTH',
    },
    {
      name: 'Business',
      icon: Crown,
      price: { monthly: null, yearly: null },
      description: 'For agencies and large teams with advanced needs.',
      features: [
        'Everything in Creator Pro',
        '5+ Team Members',
        'White-label Reports',
        'API Access',
        'Ad Automation',
        'Dedicated Account Manager',
      ],
      limitations: [],
      highlighted: false,
      cta: 'Contact Us',
      badge: null,
      label: 'ENTERPRISE',
    },
  ];

  const yearlyDiscount = (plan: typeof plans[0]) => {
    if (plan.price.monthly === 0) return 0;
    const monthlyCost = plan.price.monthly * 12;
    const yearlyCost = plan.price.yearly;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 top-0 border-b backdrop-blur-xl transition-all duration-300 ${isDarkMode ? 'bg-[#0B0F19]/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Left Side: Logo */}
          <a href="#" onClick={onBack} className="inline-flex items-center h-full md:mr-8">
            <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[100px] w-auto object-contain" />
            <span className="sr-only">Viralitics</span>
          </a>
          
          {/* Desktop Nav (Center) */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <button onClick={onBack} className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Home</button>
            <a href="#ai-manager" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Manager</a>
            <a href="#influencers" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Influencers</a>
            <a href="#ai-tutor" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>AI Tutor</a>
            <a href="#ad-creator" className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-slate-900'}`}>Ad Creator</a>
            <button className={`transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'} font-bold`}>Pricing</button>
          </div>

          {/* Right Side: Theme Toggle, Log in, Get Activated */}
          <div className="hidden md:flex items-center gap-4">
             {/* Theme Toggle */}
             <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              Log in
            </button>
            <button 
              onClick={() => onSelectPlan('Creator Pro')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${isDarkMode ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              Get Activated
            </button>
          </div>
        </div>
      </nav>

      {/* Top Wave Gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#23bddf', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#cf29f5', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#23bddf', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path className="wave-path" fill="url(#waveGradient)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <path className="wave-path" fill="url(#waveGradient)" fillOpacity="0.5" d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-viral-purple/20 via-viral-cyan/10 to-transparent pointer-events-none"></div>

      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        {/* Header */}
        <div className="mb-12">

          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Give Your Team the Right Tools to Succeed
            </h1>
            <p className={`text-base mb-8 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Our goal is to make identity by Figr available to every team, no matter the size.
            </p>

            {/* Billing Toggle */}
            <div className={`inline-flex items-center gap-3 p-1 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'}`}>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  billingCycle === 'annually'
                    ? isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-900 text-white'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annually
              </button>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? isDarkMode ? 'bg-slate-700 text-white' : 'bg-slate-900 text-white'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto items-stretch justify-center">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
            const discount = yearlyDiscount(plan);

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 transition-all relative border hover:scale-110 hover:shadow-2xl cursor-pointer ${
                  plan.highlighted
                    ? 'bg-teal-900/30 border-2 border-teal-400 md:scale-105 hover:shadow-teal-400/20'
                    : plan.name === 'Launch'
                    ? 'border-slate-500/30 bg-slate-900/40 hover:shadow-viral-cyan/20'
                    : 'border-slate-500/30 bg-slate-900/40 hover:shadow-slate-400/20'
                }`}
              >
                {/* Plan Label */}
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  plan.highlighted ? 'text-teal-400' : plan.name === 'Launch' ? 'text-viral-cyan' : 'text-slate-400'
                }`}>
                  {plan.label}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-600/30">
                  <div className="flex items-baseline gap-1">
                    {price !== null ? (
                      <>
                        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-200'}`}>
                          ${price}
                        </span>
                        <span className="text-slate-400 text-sm">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </>
                    ) : (
                      <span className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-200'}`}>
                        Custom Pricing
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan?.(plan.name)}
                  className={`w-full py-3 px-6 rounded-2xl font-bold transition-all mb-6 ${
                    plan.highlighted
                      ? 'bg-white text-teal-900 hover:bg-teal-50'
                      : plan.name === 'Launch'
                      ? 'bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90'
                      : 'border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className={`flex-shrink-0 ${
                        plan.highlighted ? 'text-teal-400' : plan.name === 'Launch' ? 'text-viral-cyan' : 'text-teal-500'
                      }`} />
                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trusted By Section - Creative Grid */}
        <div className="text-center mb-20">
          {/* Animated Grid Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative top gradient line */}
            <div className={`h-px mb-12 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-viral-cyan/50 to-transparent' : 'bg-gradient-to-r from-transparent via-viral-cyan/30 to-transparent'}`}></div>
            
            {/* Platform Icons - Flex Layout */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4">
              {[
                { platform: 'TikTok', delay: 0 },
                { platform: 'Instagram', delay: 1 },
                { platform: 'YouTube', delay: 2 },
                { platform: 'Facebook', delay: 3 },
                { platform: 'LinkedIn', delay: 4 },
                { platform: 'X (Twitter)', delay: 5 },
                { platform: 'Reddit', delay: 6 },
                { platform: 'Twitch', delay: 7 },
                { platform: 'Pinterest', delay: 8 },
                { platform: 'Snapchat', delay: 9 },
                { platform: 'Discord', delay: 10 },
                { platform: 'WhatsApp', delay: 11 },
                { platform: 'Telegram', delay: 12 },
                { platform: 'Bluesky', delay: 13 },
                { platform: 'Mastodon', delay: 14 },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    animation: `slideInUp 0.6s ease-out ${item.delay * 0.08}s forwards`,
                    opacity: 0,
                  }}
                  className="group cursor-pointer transition-transform hover:scale-110"
                >
                  <div className="relative z-10 flex justify-center">
                    <SocialIcon platform={item.platform} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative bottom gradient line */}
            <div className={`h-px mt-12 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-viral-purple/50 to-transparent' : 'bg-gradient-to-r from-transparent via-viral-purple/30 to-transparent'}`}></div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can pay via invoice.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! Creator Pro and Business plans come with a 14-day free trial. No credit card required.',
              },
              {
                q: 'What happens after my trial ends?',
                a: "You'll be automatically subscribed to your chosen plan. You can cancel anytime during the trial with no charge.",
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee on all paid plans. Contact support for a full refund.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-colors ${isDarkMode ? 'bg-slate-800/50 border border-white/5' : 'bg-white border border-slate-200'}`}
              >
                <h3 className={`font-bold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{faq.q}</h3>
                <p className={`text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-4 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Still have questions?
          </p>
          <button className="text-viral-cyan hover:text-viral-purple font-bold transition-colors">
            Contact our sales team →
          </button>
        </div>

        {/* Call To Action Section */}
        <section className={`mt-24 py-32 px-6 relative overflow-hidden rounded-3xl transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-viral-cyan to-viral-purple blur-[120px] rounded-full pointer-events-none -z-10 ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}></div>
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              One platform to create, schedule, and scale.
            </h2>
            
            <p className={`text-xl mb-10 max-w-xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Join thousands of creators and brands using Viralitics to dominate the algorithm.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => onSelectPlan?.('Creator Pro')}
                  className="px-10 py-4 bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90 text-white rounded-full font-bold text-lg shadow-[0_0_25px_-5px_rgba(207,41,245,0.5)] transition-all"
                >
                  Get Activated
                </button>
                <button 
                  className={`px-10 py-4 border rounded-full font-bold text-lg transition-colors ${
                      isDarkMode 
                      ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' 
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Contact Sales
                </button>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default PricingPage;
