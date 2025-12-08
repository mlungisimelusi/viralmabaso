import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, MessageSquare, Paperclip, Mic } from 'lucide-react';
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
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: 'Hi there! I\'m TiC, your Viralitics AI assistant. How can we help you?'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        text: `📎 Uploaded file: ${file.name}`
      };
      setMessages(prev => [...prev, userMsg]);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: 'I can see you\'ve uploaded a file. File upload processing is coming soon! For now, feel free to ask me any questions about growing your social media presence.'
      };
      setMessages(prev => [...prev, aiMsg]);
    }
  };

  const handleVoiceMessage = () => {
    if (isRecording) {
      setIsRecording(false);
      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        text: '🎤 Voice message recorded'
      };
      setMessages(prev => [...prev, userMsg]);
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: 'Voice message received! Voice processing is coming soon. In the meantime, feel free to type your questions and I\'ll help you out!'
      };
      setMessages(prev => [...prev, aiMsg]);
    } else {
      setIsRecording(true);
      setTimeout(() => {
        if (isRecording) {
          handleVoiceMessage();
        }
      }, 3000);
    }
  };

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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className={`pointer-events-auto mb-4 w-[92vw] sm:w-[380px] max-w-[420px] h-[60vh] sm:h-[500px] max-h-[80vh] border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          
          {/* Header */}
          <div className={`p-3 sm:p-4 border-b flex justify-between items-center transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center overflow-hidden transition-colors flex-shrink-0 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                <img src="/assets/bot-icon.png" alt="TiC Bot" className="w-full h-full object-contain p-1" />
              </div>
              <div className="min-w-0">
                <h3 className={`font-bold text-xs sm:text-sm truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>TiC AI</h3>
                <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
                    <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>Online</span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className={`flex-shrink-0 ml-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 transition-colors ${isDarkMode ? 'bg-[#0B0F19]' : 'bg-slate-50'}`}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm leading-relaxed transition-colors ${
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
          <div className={`border-t transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
            <form onSubmit={handleSubmit} className="p-3 sm:p-4 flex gap-1.5 sm:gap-2 items-center">
              <button 
                type="button"
                onClick={handleFileUpload}
                className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full transition-colors flex-shrink-0 flex items-center justify-center ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'}`}
                title="Attach file"
              >
                <Paperclip size={16} />
              </button>
              <button 
                type="button"
                onClick={handleVoiceMessage}
                className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full transition-colors flex-shrink-0 flex items-center justify-center ${isRecording ? 'text-red-500 animate-pulse' : isDarkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'}`}
                title={isRecording ? 'Recording... Click to stop' : 'Voice message'}
              >
                <Mic size={16} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask..."
                className={`flex-1 min-w-0 border rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-viral-cyan transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400'}`}
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 sm:h-11 sm:w-11 bg-viral-cyan hover:bg-cyan-400 text-slate-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </form>
            <div className={`px-3 sm:px-4 pb-2 sm:pb-3 flex items-center gap-1 text-[9px] sm:text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <MessageSquare size={12} />
              <span>Voice · Text · Upload</span>
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full border shadow-[0_0_20px_rgba(35,189,223,0.3)] hover:shadow-[0_0_30px_rgba(207,41,245,0.5)] transition-all duration-300 flex items-center justify-center overflow-hidden group hover:scale-105 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}
      >
        {isOpen ? (
            <X size={24} className={isDarkMode ? 'text-white' : 'text-slate-900'} />
        ) : (
            <img src="/assets/bot-icon.png" alt="TiC Bot" className="w-full h-full object-contain p-2" />
        )}
      </button>
    </div>
  );
};

export default ChatBot;