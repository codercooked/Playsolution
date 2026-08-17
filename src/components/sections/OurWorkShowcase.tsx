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
    <section className="py-20 bg-gradient-to-b from-orange-50/60 via-white to-slate-50 text-slate-900 relative overflow-hidden">
      {/* Soft Ambient Background Decor */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-black tracking-wide">
              <Sparkles size={14} className="animate-spin text-orange-600" style={{ animationDuration: '6s' }} />
              <span>REAL PLAYGROUND INSTALLATIONS IN INDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight text-secondary">
              Our Work & <span className="text-primary">Site Showcase</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-body">
              Take a look at our recent real-world playground installations, preschool classrooms, and park setups across Pune, Mumbai, and schools nationwide.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-200 hover:bg-primary hover:border-primary hover:text-white text-slate-700 transition-all shadow-md cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-200 hover:bg-primary hover:border-primary hover:text-white text-slate-700 transition-all shadow-md cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
            <Link
              href="/our-work"
              className="ml-2 px-5 py-3 rounded-full font-extrabold text-xs bg-primary hover:bg-orange-600 text-white transition-all shadow-lg flex items-center gap-2 hover:scale-105"
            >
              <span>View All 20 Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Carousel Showcase Card (Light Theme) */}
        <div 
          className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl backdrop-blur-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] md:min-h-[520px]">
            
            {/* Project Image View */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full min-h-[300px] overflow-hidden bg-slate-900 group">
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

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

              {/* Category Badge Overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-primary text-white shadow-md">
                  {featuredProjects[currentIndex].category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-800 border border-slate-200 shadow-sm backdrop-blur-md flex items-center gap-1">
                  <MapPin size={12} className="text-orange-500" />
                  {featuredProjects[currentIndex].location}
                </span>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 hover:bg-primary hover:text-white text-slate-800 transition-all shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-bold cursor-pointer group-hover:scale-110"
              >
                <Maximize2 size={16} />
                <span className="hidden sm:inline">Zoom Fullscreen</span>
              </button>
            </div>

            {/* Project Details Content (Light Side Card) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-slate-50/90 border-l border-slate-200/80 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProjects[currentIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="text-xs font-mono font-black text-primary uppercase tracking-widest">
                    PROJECT {currentIndex + 1} OF {featuredProjects.length} • INSTALLED {featuredProjects[currentIndex].year}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-secondary leading-snug">
                    {featuredProjects[currentIndex].title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Client: <strong className="text-slate-900">{featuredProjects[currentIndex].clientName}</strong></span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                    {featuredProjects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProjects[currentIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white text-slate-700 border border-slate-200 shadow-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators & Quick Nav */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  {featuredProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    onClick={() => setSelectedProject(featuredProjects[currentIndex])}
                    className="text-xs font-bold text-slate-600 hover:text-primary flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 size={14} />
                    <span>View High-Res Photo</span>
                  </button>

                  <Link
                    href="/our-work"
                    className="text-xs font-black text-primary hover:underline flex items-center gap-1"
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
              className={`relative h-16 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer group shadow-sm ${
                currentIndex === idx ? 'border-primary scale-105 shadow-md ring-2 ring-orange-200' : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
              {currentIndex === idx && (
                <div className="absolute inset-0 bg-primary/10" />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col border border-slate-200"
            >
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div>
                  <h4 className="font-display font-bold text-base">{selectedProject.title}</h4>
                  <p className="text-xs text-slate-300">{selectedProject.clientName} • {selectedProject.location}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-2 sm:p-4 flex-1 bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <p className="text-slate-600 max-w-2xl font-body">{selectedProject.description}</p>
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
