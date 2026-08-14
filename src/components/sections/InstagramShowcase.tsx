'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function InstagramShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-[#1A1A2E] to-slate-950 text-white relative overflow-hidden">
      {/* Liquid Glass Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-400 text-sm font-extrabold mb-4 shadow-lg"
          >
            <InstagramIcon size={18} className="text-pink-500" />
            <span>@play_solutions Official Instagram Account</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-tight"
          >
            Live Instagram Videos & Profile Stream 📸
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Watch real installation videos, reels, and photos streamed straight from our official Instagram profile <strong className="text-pink-400 font-extrabold">@play_solutions</strong>.
          </motion.p>
        </div>

        {/* Profile Card Header */}
        <div className="mb-10 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 shadow-xl flex-shrink-0">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white">
                <InstagramIcon size={36} className="text-pink-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-2xl text-white">play_solutions</h3>
                <span className="bg-blue-500 text-white rounded-full p-0.5 text-[10px] font-bold">✓</span>
              </div>
              <p className="text-pink-400 text-sm font-bold">Play Solution • Kindergarten & School Equipment</p>
              <p className="text-gray-300 text-xs mt-1">Manufacturer of slides, swings, play stations & classroom furniture across India 🇮🇳</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 hover:opacity-95 text-white font-extrabold shadow-xl shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all text-base flex items-center gap-2 flex-shrink-0"
          >
            <InstagramIcon size={20} />
            <span>Open @play_solutions</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Official Embedded Live Instagram Feed Container */}
        <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/20 p-2 sm:p-4 my-8">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100 rounded-2xl mb-4 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Official Instagram Live Profile & Media Feed</span>
            </div>
            <a
              href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-600 hover:underline flex items-center gap-1"
            >
              <span>View directly on Instagram</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Official Instagram Embed Frame */}
          <div className="relative w-full h-[700px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
            <iframe
              src="https://www.instagram.com/play_solutions/embed"
              className="w-full h-full border-0 rounded-2xl"
              frameBorder="0"
              scrolling="yes"
              allowTransparency={true}
              allow="encrypted-media"
              title="Play Solution Official Instagram Profile Feed"
            />
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 hover:opacity-95 text-white font-display font-extrabold text-lg shadow-2xl shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <InstagramIcon size={24} />
            <span>Follow @play_solutions on Instagram for Daily Reel Updates</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
