import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Lock, Facebook, Twitter } from 'lucide-react';

interface SignupPageProps {
  onBack: () => void;
  onSignupSuccess?: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onBack, onSignupSuccess, isDarkMode, setIsDarkMode }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('Content Creator');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const userTypes = ['Content Creator', 'Brand', 'Agency', 'Influencer', 'Other'];

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    setIsLoading(true);
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess?.();
    }, 1500);
  };

  

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[60px] md:h-[100px] w-auto object-contain" />
        </div>

        {/* Form Container */}
        <div className={`rounded-3xl p-6 md:p-8 border backdrop-blur-xl transition-colors ${isDarkMode ? 'bg-[#0B0F19]/80 border-white/10' : 'bg-white/80 border-slate-200'}`}>
          {/* Heading centered; back arrow absolute at left edge */}
          <div className="relative mb-2 text-center">
            <button
              onClick={onBack}
              aria-label="Back"
              className={`absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                isDarkMode ? 'bg-white/5 text-slate-200 hover:bg-white/10' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft size={16} />
            </button>
            <h1 className={`text-2xl md:text-3xl font-extrabold mx-auto transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Get Activated
            </h1>
          </div>
          <p className={`mb-6 text-sm text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Create your account to get started
          </p>

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-viral-cyan focus:outline-none' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-viral-cyan focus:outline-none'}`}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-viral-cyan focus:outline-none' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-viral-cyan focus:outline-none'}`}
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Password
              </label>
              <div className={`relative px-4 py-3 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 focus-within:border-viral-cyan' : 'bg-slate-50 border-slate-200 focus-within:border-viral-cyan'}`}>
                <div className="flex items-center gap-2 pr-8">
                  <Lock size={18} className="text-slate-500 flex-shrink-0" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`flex-1 bg-transparent outline-none transition-colors ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Confirm Password
              </label>
              <div className={`relative px-4 py-3 rounded-lg border transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 focus-within:border-viral-cyan' : 'bg-slate-50 border-slate-200 focus-within:border-viral-cyan'}`}>
                <div className="flex items-center gap-2 pr-8">
                  <Lock size={18} className="text-slate-500 flex-shrink-0" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`flex-1 bg-transparent outline-none transition-colors ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* User Type Dropdown */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I am a
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-all appearance-none cursor-pointer ${isDarkMode ? 'bg-slate-900/50 border-slate-700 text-white focus:border-viral-cyan focus:outline-none' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-viral-cyan focus:outline-none'}`}
              >
                {userTypes.map((type) => (
                  <option key={type} value={type} className={isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Terms Agreement Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-slate-300 text-viral-cyan focus:ring-viral-cyan focus:ring-2 cursor-pointer"
                required
              />
              <label htmlFor="agreeTerms" className={`text-xs transition-colors cursor-pointer ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                I agree to the{' '}
                <a href="#" className="text-viral-cyan hover:text-viral-purple transition-colors font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-viral-cyan hover:text-viral-purple transition-colors font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-full font-extrabold text-white transition-all shadow-lg ${isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-95'}`}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className={`absolute inset-0 flex items-center ${isDarkMode ? 'border-t border-slate-700' : 'border-t border-slate-200'}`}></div>
            <div className={`relative flex justify-center text-xs font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <span className={isDarkMode ? 'bg-[#0B0F19] px-2' : 'bg-white px-2'}>OR SIGN UP WITH</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              type="button"
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-full border font-medium transition-all ${isDarkMode ? 'bg-transparent border-slate-700 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>

            <button
              type="button"
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-full border font-medium transition-all ${isDarkMode ? 'bg-transparent border-slate-700 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0866FF">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            <button
              type="button"
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-full border font-medium transition-all ${isDarkMode ? 'bg-transparent border-slate-700 text-white hover:bg-white/5' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

          {/* Login Link */}
          <p className={`text-center text-sm transition-colors break-words ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Already have an account?{' '}
            <button
              onClick={onBack}
              className="text-viral-cyan hover:text-viral-purple transition-colors font-medium whitespace-nowrap"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
