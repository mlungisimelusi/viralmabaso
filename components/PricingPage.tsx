import React, { useState } from 'react';
import { Check, X, ArrowLeft, Zap, Crown, Rocket, Sun, Moon } from 'lucide-react';
import Footer from './Footer';

interface PricingPageProps {
  onBack: () => void;
  onSelectPlan: (plan: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, onSelectPlan, isDarkMode, setIsDarkMode }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for new creators just starting out',
      features: [
        '3 Social Profiles',
        '10 AI Posts / month',
        'Basic Analytics',
        'Post Scheduling',
        'Community Support',
      ],
      limitations: [
        'No AI Tutor Access',
        'No Marketplace Access',
        'No Ad Automation',
        'Limited Analytics',
      ],
      highlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'Creator Pro',
      icon: Rocket,
      price: { monthly: 29, yearly: 290 },
      description: 'For serious creators scaling their brand',
      features: [
        'Unlimited Social Profiles',
        'Unlimited AI Content',
        'Advanced Analytics',
        'AI Tutor Access',
        'Marketplace Access',
        'Priority Support',
        'Content Calendar',
        'Team Collaboration (3 members)',
      ],
      limitations: [],
      highlighted: true,
      cta: 'Start Free Trial',
      badge: 'Most Popular',
    },
    {
      name: 'Business',
      icon: Crown,
      price: { monthly: 99, yearly: 990 },
      description: 'For agencies and large teams',
      features: [
        'Everything in Creator Pro',
        '5+ Team Members',
        'White-label Reports',
        'API Access',
        'Ad Automation',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Advanced Security',
        'SLA Support',
      ],
      limitations: [],
      highlighted: false,
      cta: 'Contact Sales',
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
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 transition-colors font-['Courier_New',monospace] ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <ArrowLeft size={20} />
              <span className="font-['Courier_New',monospace]">Back</span>
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Simple, transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-cyan to-viral-purple">pricing</span>
            </h1>
            <p className={`text-xl mb-8 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Start for free, scale as you grow. No hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className={`inline-flex items-center gap-4 p-1.5 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-viral-cyan to-viral-purple text-white'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-viral-cyan to-viral-purple text-white'
                    : isDarkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yearly <span className="ml-1 text-xs">(Save up to 20%)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
            const discount = yearlyDiscount(plan);

            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 transition-all relative ${
                  plan.highlighted
                    ? isDarkMode
                      ? 'bg-[#131b2c] border-2 border-viral-purple shadow-2xl transform md:-translate-y-4'
                      : 'bg-white border-2 border-viral-purple shadow-xl transform md:-translate-y-4'
                    : isDarkMode
                    ? 'bg-[#0B0F19] border border-white/10'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-viral-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlighted ? 'bg-gradient-to-r from-viral-cyan to-viral-purple' : isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <Icon size={28} className={plan.highlighted ? 'text-white' : 'text-viral-cyan'} />
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className={`text-5xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      ${price}
                    </span>
                    <span className={`text-sm mb-2 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && discount > 0 && (
                    <p className="text-sm text-viral-cyan mt-2">Save {discount}% with yearly billing</p>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm mb-8 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan?.(plan.name)}
                  className={`w-full py-3 rounded-xl font-bold transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-viral-cyan to-viral-purple text-white hover:opacity-90 shadow-lg'
                      : isDarkMode
                      ? 'border border-slate-700 hover:bg-slate-800 text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-900'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-viral-purple' : 'text-viral-cyan'}`} />
                        <span className={`text-sm transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start gap-3 opacity-50">
                        <X size={18} className={`flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
                        <span className={`text-sm transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
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
