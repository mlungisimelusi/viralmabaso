import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess?: () => void;
  onSignup?: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginSuccess, onSignup, isDarkMode, setIsDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess?.();
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-viral-purple/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-viral-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-30 mix-blend-screen"></div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img src="/assets/viralitics-logo.png" alt="Viralitics" className="h-[110px] w-auto object-contain" />
        </div>

        {/* Form Container */}
        <div className={`rounded-3xl p-8 border backdrop-blur-xl transition-colors ${isDarkMode ? 'bg-[#0B0F19]/80 border-white/10' : 'bg-white/80 border-slate-200'}`}>
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
            <h1 className={`text-3xl font-bold mx-auto transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Welcome Back
            </h1>
          </div>
          <p className={`mb-8 text-center transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Sign in to your Viralitics account
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Email Address
              </label>
              <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 focus-within:border-viral-cyan' : 'bg-slate-50 border-slate-200 focus-within:border-viral-cyan'}`}>
                <Mail size={20} className="text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`flex-1 bg-transparent outline-none transition-colors ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Password
              </label>
              <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${isDarkMode ? 'bg-slate-900/50 border-slate-700 focus-within:border-viral-cyan' : 'bg-slate-50 border-slate-200 focus-within:border-viral-cyan'}`}>
                <Lock size={20} className="text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`flex-1 bg-transparent outline-none transition-colors ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className={`flex items-center gap-2 cursor-pointer transition-colors ${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'}`}>
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-viral-cyan hover:text-viral-purple transition-colors font-medium">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all ${isLoading ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-viral-cyan to-viral-purple hover:opacity-90'}`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className={`absolute inset-0 flex items-center ${isDarkMode ? 'border-t border-slate-700' : 'border-t border-slate-200'}`}></div>
            <div className={`relative flex justify-center text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <span className={isDarkMode ? 'bg-[#0B0F19] px-2' : 'bg-white px-2'}>Or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className={`text-center text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Don't have an account?{' '}
            <button onClick={onSignup} className="text-viral-cyan hover:text-viral-purple transition-colors font-medium">
              Sign up
            </button>
          </p>
        </div>

        {/* Footer Text */}
        <p className={`text-center text-xs mt-6 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
