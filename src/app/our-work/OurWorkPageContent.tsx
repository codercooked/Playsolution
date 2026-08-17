'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, Sparkles, Filter, X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { OUR_WORK_PROJECTS, WorkProject } from '@/data/ourWork';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

export default function OurWorkPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const categories = [
    { key: 'all', label: 'All Projects', count: OUR_WORK_PROJECTS.length },
    { key: 'outdoor', label: 'Outdoor Multi-Play', count: OUR_WORK_PROJECTS.filter((p) => p.categoryKey === 'outdoor').length },
    { key: 'indoor', label: 'Indoor Soft Play', count: OUR_WORK_PROJECTS.filter((p) => p.categoryKey === 'indoor').length },
    { key: 'classroom', label: 'Preschool Classroom', count: OUR_WORK_PROJECTS.filter((p) => p.categoryKey === 'classroom').length },
    { key: 'slides', label: 'Slides & Swings', count: OUR_WORK_PROJECTS.filter((p) => p.categoryKey === 'slides').length },
    { key: 'park', label: 'Park & Safety Matting', count: OUR_WORK_PROJECTS.filter((p) => p.categoryKey === 'park').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? OUR_WORK_PROJECTS
    : OUR_WORK_PROJECTS.filter((p) => p.categoryKey === selectedCategory);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white pt-28 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black tracking-wide"
          >
            <Sparkles size={15} className="animate-spin text-orange-400" style={{ animationDuration: '6s' }} />
            <span>OUR WORK & REAL SITE SHOWCASE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight"
          >
            Real Playground <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">Installations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-body"
          >
            Browse photos of our verified equipment installations at preschools, Montessori academies, residential parks, and indoor play zones across India.
          </motion.p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-2xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-display">200+</div>
              <div className="text-[11px] text-slate-400 font-bold">Schools Installed</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-display">20+</div>
              <div className="text-[11px] text-slate-400 font-bold">Real Site Photos</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-display">954</div>
              <div className="text-[11px] text-slate-400 font-bold">Certified Equipment</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-display">100%</div>
              <div className="text-[11px] text-slate-400 font-bold">Child-Safe Standard</div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-between gap-4 mb-10 overflow-x-auto pb-3 scrollbar-none">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
              <Filter size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-medium whitespace-nowrap hidden sm:block">
            Showing <span className="text-orange-400 font-bold">{filteredProjects.length}</span> Installation Photos
          </div>
        </div>

        {/* Work Projects Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-orange-500 text-white shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-slate-200 border border-slate-700/60 backdrop-blur-md flex items-center gap-1">
                  <MapPin size={12} className="text-amber-400" />
                  <span>{project.location}</span>
                </div>

                {/* Zoom Icon Overlay */}
                <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-slate-950/80 group-hover:bg-orange-500 text-white transition-all shadow-lg backdrop-blur-md group-hover:scale-110">
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 space-y-3">
                <div className="text-[11px] font-bold text-amber-400 font-mono">
                  INSTALLED: {project.year} • {project.clientName}
                </div>

                <h3 className="font-display font-black text-lg text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 font-body leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Consultation Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center space-y-4 max-w-4xl mx-auto shadow-2xl">
          <ShieldCheck size={40} className="text-emerald-400 mx-auto animate-bounce" style={{ animationDuration: '3s' }} />
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
            Want a Playground Built for Your School or Society?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-body">
            Our expert engineers evaluate site layouts, offer free CAD design layouts, and recommend safety certified equipment suitable for your age groups.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppGeneralUrl('Hello! I visited your Our Work portfolio and would like to get a playground site installation quote for our school/society.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <MessageCircle size={18} />
              <span>Get Free Site Quote via WhatsApp</span>
            </a>
            <Link
              href="/products"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700 flex items-center gap-2"
            >
              <span>Explore 954 Equipment Models</span>
              <ArrowRight size={16} />
            </Link>
          </div>
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
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg">{selectedProject.title}</h4>
                  <p className="text-xs text-slate-400">{selectedProject.clientName} • {selectedProject.location} ({selectedProject.year})</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
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
                <p className="text-slate-300 max-w-2xl font-body leading-relaxed">{selectedProject.description}</p>
                <a
                  href={`https://wa.me/918927298217?text=Hello%20Play%20Solution!%20I%20saw%20your%20installation%20photo%20"${encodeURIComponent(selectedProject.title)}"%20and%20want%20to%20get%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white shrink-0 shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Inquire This Installation</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
