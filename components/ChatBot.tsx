import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, MessageSquare } from 'lucide-react';
import { chatWithAssistant } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

interface ChatBotProps {
  isDarkMode: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: 'Hi there! I\'m TiC, your Viralitics assistant. How can I help you grow your social presence today?'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAssistant(
        input, 
        messages.map(m => ({ role: m.role, text: m.text }))
      );

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: responseText
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className={`pointer-events-auto mb-4 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          
          {/* Header */}
          <div className={`p-4 border-b flex justify-between items-center transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                <img src="/assets/bot-icon.png" alt="TiC Bot" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>TiC AI</h3>
                <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-slate-400">Online</span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className={`transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 transition-colors ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed transition-colors ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-viral-cyan to-viral-purple text-white rounded-tr-none' 
                      : isDarkMode 
                        ? 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none' 
                        : 'bg-white text-slate-700 border border-slate-200 shadow-sm rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`border rounded-2xl rounded-tl-none px-4 py-3 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <Loader2 size={16} className="animate-spin text-viral-cyan" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className={`p-4 border-t flex gap-2 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask TiC anything..."
              className={`flex-1 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-viral-cyan transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400'}`}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-viral-cyan hover:bg-cyan-400 text-slate-900 rounded-xl p-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-20 h-20 rounded-full border shadow-[0_0_20px_rgba(35,189,223,0.3)] hover:shadow-[0_0_30px_rgba(207,41,245,0.5)] transition-all duration-300 flex items-center justify-center overflow-hidden group hover:scale-105 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}
      >
        {isOpen ? (
            <X size={36} className={isDarkMode ? 'text-white' : 'text-slate-900'} />
        ) : (
            <img src="/assets/bot-icon.png" alt="TiC Bot" className="w-full h-full object-contain p-2" />
        )}
      </button>
    </div>
  );
};

export default ChatBot;