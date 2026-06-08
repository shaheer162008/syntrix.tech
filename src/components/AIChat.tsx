'use client';

import { useState, useRef, useEffect } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import Image from 'next/image';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Helper function to parse markdown formatting
function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/_(.*?)_/g, '<em class="italic">$1</em>')
    .replace(/\n/g, '<br />');
}

export default function AIChat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm the Syntrix Solutions AI Assistant. How can I help you today? Feel free to ask about our services, team, pricing, or anything else!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (input.trim() === '' || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to get response from AI');
      }

      if (!data.message) {
        throw new Error('No response from AI');
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorText = error instanceof Error ? error.message : 'An unknown error occurred';
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Sorry, I encountered an error: ${errorText}. Please try again or contact us at info@syntrixsolutions.tech`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1B1B1B]/50 z-[10000] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Modal */}
      <div 
        className="fixed inset-4 sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto sm:w-[380px] md:w-[420px] sm:h-[500px] md:h-[550px] z-[10001] rounded-[2rem] sm:rounded-[2rem] shadow-lg sm:shadow-2xl overflow-hidden flex flex-col font-sans"
        style={{
          background: '#1B1B1B',
          border: '1px solid rgba(168,85,247,0.2)',
          maxHeight: 'calc(100vh - 32px)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b font-mono"
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            background: '#1B1B1B',
          }}
        >
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-1">
              <div className="bg-primary/20 p-2 sm:p-2.5 rounded-[2rem] flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9">
                <Image 
                  src="/icons/aichatbot.svg" 
                  alt="AI Chatbot" 
                  width={40}
                  height={40}
                  className="sm:w-[22px] sm:h-[22px]"
                />
              </div>
              <h3 className="text-primary font-semibold text-base sm:text-lg tracking-tight font-mono">Syntrix Solutions</h3>
            </div>
            <p className="text-gray-400 text-[11px] sm:text-xs pl-10 sm:pl-12 font-mono">AI Assistant</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-primary/20 rounded-[2rem]"
          >
            <FiX size={18} className="sm:w-[20px]" />
          </button>
        </div>

        {/* Messages Container */}
        <div
          className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 font-mono"
          style={{
            background: '#1B1B1B',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-[2rem] text-sm sm:text-[15px] ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground border border-primary/30'
                    : 'bg-white/5 text-white border border-white/10'
                }`}
                style={{
                  wordBreak: 'break-word'
                }}
              >
                {msg.role === 'assistant' ? (
                  <div
                    className="leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
                  />
                ) : (
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 text-primary border border-white/10 px-4 sm:px-5 py-3 sm:py-4 rounded-[2rem]">
                <div className="flex gap-1.5 items-center">
                  <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] bg-primary rounded-full animate-bounce" />
                  <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 border-t font-mono" style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#1B1B1B' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2 relative"
          >
            <div className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden focus-within:border-primary/50 focus-within:bg-white/10 transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask something..."
                className="w-full bg-transparent text-white placeholder-gray-400 px-3 sm:px-4 py-3 sm:py-4 focus:outline-none resize-none max-h-32 min-h-[44px] sm:min-h-[48px] text-sm sm:text-base"
                rows={1}
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || input.trim() === ''}
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 sm:p-3 rounded-[2rem] disabled:opacity-50 transition-colors disabled:cursor-not-allowed flex-shrink-0 flex items-center justify-center h-[44px] w-[44px] sm:h-[48px] sm:w-[48px]"
            >
              <FiSend size={18} className="sm:w-[20px]" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[9px] sm:text-[10px] text-gray-500">AI can make mistakes</span>
          </div>
        </div>
      </div>
    </>
  );
}
