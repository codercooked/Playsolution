'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Play, Pause, Volume2, VolumeX, X, CheckCircle, ArrowRight, Video } from 'lucide-react';
import { LightGradientBg } from '@/components/ui/elegant-dark-pattern';

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <LightGradientBg className="min-h-[92vh] flex items-center pt-28 pb-20 border-b border-orange-100">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 xl:col-span-4 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
          >
            {/* Pill Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-orange-200/80 text-orange-600 text-sm font-black tracking-wide shadow-md"
            >
              <Sparkles size={16} className="text-orange-500" />
              <span>Where Little Dreams Come to Play</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-display font-black text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight">
              Making Schools Come Alive — <span className="text-[#FF6B35] underline decoration-[#FFD166] decoration-wavy decoration-4">One Play Set</span> at a Time
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              Premium kindergarten slides, swings, play stations & classroom furniture trusted by 200+ schools across India. 100% safety certified equipment engineered for active learning.
            </motion.p>

            {/* Quick Checklist */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-bold text-slate-800 pt-1">
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-100 shadow-sm">
                <CheckCircle size={15} className="text-emerald-500" /> CE & ISI Certified
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-100 shadow-sm">
                <CheckCircle size={15} className="text-emerald-500" /> Non-Toxic Materials
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-100 shadow-sm">
                <CheckCircle size={15} className="text-emerald-500" /> Pan-India Installation
              </span>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-3 w-full sm:w-auto">
              <Link 
                href="/products" 
                className="px-7 py-3.5 bg-gradient-to-r from-[#FF6B35] to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-display font-extrabold transition-all text-center shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 text-base sm:text-lg flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} />
              </Link>
              
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                className="px-6 py-3.5 bg-white/90 hover:bg-slate-900 text-slate-900 hover:text-white border-2 border-slate-900 rounded-full font-display font-extrabold transition-all text-center hover:scale-105 active:scale-95 text-base shadow-md flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                <span>Ask AI for Price & Specs</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: INSTAGRAM REEL VIDEO PLAYER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:col-span-7 xl:col-span-8 relative w-full"
          >
            {/* Liquid Glass Showcase Frame around Video */}
            <div className="relative rounded-3xl p-3 sm:p-4 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_30px_90px_rgba(0,0,0,0.15)] overflow-hidden group">
              
              {/* Glossy reflection line */}
              <div className="absolute -inset-y-12 -left-12 w-64 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-45 pointer-events-none group-hover:translate-x-[900px] transition-transform duration-1000" />

              {/* Large Inline Video Player */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-white/20">
                <video
                  ref={videoRef}
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  poster="https://placehold.co/800x500/FF6B35/white?text=Play+Solution+Instagram+Video"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video Top Header Bar Overlay with Instagram Badge */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                  <a
                    href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold shadow-lg pointer-events-auto hover:bg-pink-600 transition-colors"
                  >
                    <InstagramIcon size={16} className="text-pink-400" />
                    <span>@play_solutions Instagram Reel</span>
                  </a>

                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white hover:bg-orange-500 transition-colors shadow-md"
                      title={isMuted ? 'Unmute Video' : 'Mute Video'}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white hover:bg-orange-500 transition-colors shadow-md"
                      title={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                  </div>
                </div>

                {/* Video Play Overlay Button (Centered if paused) */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-[2px] z-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <Play size={44} className="fill-white ml-1.5" />
                    </div>
                  </button>
                )}

                {/* Video Bottom Glass Tag Info Bar */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-xl border border-white/15 text-white flex flex-wrap items-center justify-between gap-3 z-20 shadow-2xl">
                  <div>
                    <p className="font-display font-extrabold text-sm text-white flex items-center gap-2">
                      <Video size={16} className="text-orange-400" />
                      <span>Multi-Play Station Installation Reel</span>
                    </p>
                    <p className="text-xs text-gray-300 font-medium">Sunshine Montessori Preschool, Pune</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-black hover:opacity-90 shadow-md flex items-center gap-1.5 transition-opacity"
                    >
                      <span>Expand Fullscreen</span>
                      <Play size={12} className="fill-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal for Fullscreen Experience */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 p-2"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <video
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-orange-400" />
                  <span className="font-extrabold font-display">Play Solution Official Instagram Reel</span>
                </div>
                <a
                  href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-pink-400 hover:underline flex items-center gap-1"
                >
                  <InstagramIcon size={14} />
                  <span>Follow @play_solutions on Instagram →</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LightGradientBg>
  );
}
