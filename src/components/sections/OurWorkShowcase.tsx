'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronLeft, ChevronRight, Maximize2, ArrowRight, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { OUR_WORK_PROJECTS, WorkProject } from '@/data/ourWork';

export default function OurWorkShowcase() {
  const featuredProjects = OUR_WORK_PROJECTS.filter((p) => p.featuredOnHome);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide every 4.5 seconds
  useEffect(() => {
    if (isPaused || selectedProject) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, selectedProject, featuredProjects.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient Gradient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Radial Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black tracking-wide">
              <Sparkles size={14} className="animate-spin text-orange-400" style={{ animationDuration: '6s' }} />
              <span>REAL PLAYGROUND INSTALLATIONS IN INDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight">
              Our Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">Site Showcase</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-body">
              Take a look at our recent real-world playground installations, preschool classrooms, and park setups across Pune, Mumbai, and schools nationwide.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-orange-500 hover:border-orange-500 text-white transition-all shadow-md cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-orange-500 hover:border-orange-500 text-white transition-all shadow-md cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
            <Link
              href="/our-work"
              className="ml-2 px-5 py-3 rounded-full font-extrabold text-xs bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all shadow-lg flex items-center gap-2"
            >
              <span>View All 20 Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div 
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] md:min-h-[520px]">
            
            {/* Project Image View */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[300px] overflow-hidden bg-slate-950 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={featuredProjects[currentIndex].id}
                  src={featuredProjects[currentIndex].imageUrl}
                  alt={featuredProjects[currentIndex].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

              {/* Category Badge Overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-orange-500 text-white shadow-md">
                  {featuredProjects[currentIndex].category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-slate-200 border border-slate-700/60 backdrop-blur-md flex items-center gap-1">
                  <MapPin size={12} className="text-amber-400" />
                  {featuredProjects[currentIndex].location}
                </span>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-slate-950/80 hover:bg-orange-500 text-white transition-all shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-bold cursor-pointer group-hover:scale-110"
              >
                <Maximize2 size={16} />
                <span className="hidden sm:inline">Zoom Fullscreen</span>
              </button>
            </div>

            {/* Project Details Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-slate-900/90 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProjects[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    PROJECT {currentIndex + 1} OF {featuredProjects.length} • INSTALLED {featuredProjects[currentIndex].year}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-snug">
                    {featuredProjects[currentIndex].title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Client: <strong className="text-white">{featuredProjects[currentIndex].clientName}</strong></span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
                    {featuredProjects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProjects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators & Quick Nav */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  {featuredProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 size={14} />
                    <span>View High-Res Photo</span>
                  </button>

                  <Link
                    href="/our-work"
                    className="text-xs font-black text-orange-400 hover:text-orange-300 flex items-center gap-1"
                  >
                    <span>View Full Portfolio</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Navigation Strip */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mt-6">
          {featuredProjects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer group ${
                currentIndex === idx ? 'border-orange-500 scale-105 shadow-lg' : 'border-slate-800 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
              {currentIndex === idx && (
                <div className="absolute inset-0 bg-orange-500/20" />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
                <div>
                  <h4 className="font-display font-bold text-base">{selectedProject.title}</h4>
                  <p className="text-xs text-slate-400">{selectedProject.clientName} • {selectedProject.location}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-2 sm:p-4 flex-1 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <p className="text-slate-300 max-w-2xl">{selectedProject.description}</p>
                <a
                  href={`https://wa.me/918927298217?text=Hello%20Play%20Solution!%20I%20saw%20your%20project%20"${encodeURIComponent(selectedProject.title)}"%20and%20want%20to%20inquire%20about%20a%20similar%20installation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white shrink-0 shadow-md flex items-center gap-2"
                >
                  <span>Inquire Similar Project via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
