'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'assistant',
    text: "Hello! 👋 I'm the Play Solution AI Assistant. Ask me anything about equipment prices, dimensions, materials, age groups, or custom school setups!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

const quickQuestions = [
  "What is the price of Multi-Play Station?",
  "What are the dimensions for slides & swings?",
  "Do you provide installation in my city?",
  "What materials do you use for safety?",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSendMessage = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages
        .filter((m) => m.id !== '1')
        .concat(userMsg)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || "For exact dimensions and bulk pricing, feel free to call +91 8927298217!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error('Chatbot error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: "I'm available to help with prices, dimensions, and specifications! You can also email us at hello@playsolution.in.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Launcher Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6B35] to-amber-500 text-white shadow-2xl flex items-center justify-center border-2 border-white/80 group"
          aria-label="Open AI Assistant"
        >
          <Bot size={28} className="group-hover:rotate-12 transition-transform" />

          {/* Glowing pulse indicator */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />

          {/* Hover Tooltip */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            🤖 Ask AI for prices & specs!
          </span>
        </motion.button>
      </div>

      {/* Floating Glass Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-[#FF6B35] to-amber-500 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-base leading-tight flex items-center gap-1.5">
                    <span>Play Solution AI</span>
                    <Sparkles size={14} className="text-amber-200" />
                  </h3>
                  <p className="text-xs text-amber-100 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" /> Prices, Dimensions & Specs
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-slate-950/60 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={16} />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-none shadow-md'
                        : 'bg-white/10 backdrop-blur-md border border-white/15 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    <span
                      className={`text-[10px] block mt-1 ${
                        msg.sender === 'user' ? 'text-orange-100 text-right' : 'text-gray-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={16} />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-gray-400 text-xs py-2 px-3 bg-white/5 rounded-full w-fit border border-white/10">
                  <RefreshCw size={14} className="animate-spin text-orange-400" />
                  <span>Thinking & checking catalog specs...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length < 4 && (
              <div className="px-4 py-2 bg-slate-900/80 border-t border-white/10 flex overflow-x-auto gap-2 text-xs hide-scrollbar">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-orange-500/20 border border-white/15 hover:border-orange-500/50 text-gray-300 hover:text-white transition-all shrink-0 flex items-center gap-1"
                  >
                    <MessageSquare size={12} className="text-orange-400" />
                    <span>{q}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about prices, dimensions..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 disabled:opacity-50 text-white flex items-center justify-center shadow-lg shrink-0 transition-opacity"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
