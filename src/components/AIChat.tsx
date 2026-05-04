'use client';

import { useState, useRef, useEffect } from 'react';
import { FiX, FiSend, FiZap } from 'react-icons/fi';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Helper function to parse markdown formatting
function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/_(.*?)_/g, '<em class="italic">$1</em>')
    .replace(/\n/g, '<br class="my-2" />');
}

export default function AIChat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm the Nexiler AI Assistant. How can I help you today? Feel free to ask about our services, team, pricing, or anything else!",
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
        content: `Sorry, I encountered an error: ${errorText}. Please try again or contact us at info@nexiler.tech`,
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
        className="fixed inset-0 bg-black/50 z-[10000] backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Modal */}
      <div 
        className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:right-6 sm:left-auto z-[10001] w-full sm:w-[400px] md:w-[450px] h-[85vh] sm:h-[600px] md:h-[650px] sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="bg-primary/20 p-2 rounded-full">
                <FiZap size={18} className="text-primary animate-pulse" />
              </div>
              <h3 className="text-white font-semibold text-lg tracking-tight">Nexiler Assistant</h3>
            </div>
            <p className="text-gray-400 text-xs pl-11">Always here to help</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Messages Container */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,26,46,0.8), rgba(15,15,30,0.8))',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3.5 rounded-2xl shadow-sm text-[15px] ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-sm'
                    : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-sm'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <div
                    className="leading-relaxed prose prose-invert prose-p:my-1 prose-a:text-primary max-w-none"
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
              <div className="bg-white/5 text-gray-400 border border-white/10 px-5 py-4 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1.5 items-center">
                  <div className="w-[6px] h-[6px] bg-primary rounded-full animate-bounce" />
                  <div className="w-[6px] h-[6px] bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <div className="w-[6px] h-[6px] bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0f0f1e]/90 backdrop-blur-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2 relative"
          >
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl md:rounded-[1.5rem] relative overflow-hidden focus-within:border-primary/50 focus-within:bg-white/10 transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask about our services..."
                className="w-full bg-transparent text-white placeholder-gray-400 px-5 py-4 focus:outline-none resize-none max-h-32 min-h-[56px]"
                rows={1}
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || input.trim() === ''}
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-2xl md:rounded-[1.5rem] disabled:opacity-50 transition-colors disabled:cursor-not-allowed flex-shrink-0 flex items-center justify-center h-[56px] w-[56px]"
            >
              <FiSend size={20} />
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-[10px] text-gray-500">AI can make mistakes. Please verify important information.</span>
          </div>
        </div>
      </div>
    </>
  );
}
