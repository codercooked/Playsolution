'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, FileText, PackageCheck, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Filter } from 'lucide-react';
import { CATALOGUES } from '@/data/catalogues';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

export default function CataloguesPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const bundleItem = CATALOGUES.find((c) => c.isBundle);
  const individualCatalogues = CATALOGUES.filter((c) => !c.isBundle);

  const categories = ['All', 'Indoor', 'Outdoor', 'Wooden & Montessori'];

  const filteredCatalogues = selectedCategory === 'All'
    ? individualCatalogues
    : individualCatalogues.filter((c) => c.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white pt-28 pb-20 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Radial Grid Overlay */}
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
            <span>OFFICIAL PRODUCT CATALOGUE PORTAL (2025-2026)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight"
          >
            Download Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400">PDF Catalogues</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-body"
          >
            Explore our complete range of 954 preschool equipment models across 4 high-resolution PDF catalogues. Download individually or grab the entire package in a single click.
          </motion.p>
        </div>

        {/* Master Package Highlight Card */}
        {bundleItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black">
                  <PackageCheck size={16} />
                  <span>MASTER BUNDLE • ALL 4 CATALOGUES INCLUDED</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white">
                  {bundleItem.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
                  {bundleItem.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-bold text-slate-300">
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-center">
                    <div className="text-amber-400 font-black text-base">4</div>
                    <div className="text-[11px] text-slate-400">PDF Files</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-center">
                    <div className="text-amber-400 font-black text-base">954</div>
                    <div className="text-[11px] text-slate-400">Total Products</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-center">
                    <div className="text-amber-400 font-black text-base">304</div>
                    <div className="text-[11px] text-slate-400">Pages</div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 text-center">
                    <div className="text-amber-400 font-black text-base">{bundleItem.fileSize}</div>
                    <div className="text-[11px] text-slate-400">ZIP File Size</div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
                <a
                  href={bundleItem.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-base bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Master ZIP ({bundleItem.fileSize})</span>
                </a>

                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Request Printed Copy via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Filter size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="text-orange-400 font-bold">{filteredCatalogues.length}</span> PDF Catalogues
          </div>
        </div>

        {/* Individual Catalogue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredCatalogues.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                    {cat.fileSize}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-black text-white group-hover:text-orange-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-body leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800 text-center text-xs">
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">PAGES</span>
                    <span className="text-white font-bold">{cat.pageCount}</span>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">PRODUCTS</span>
                    <span className="text-white font-bold">{cat.productCount}</span>
                  </div>
                  <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">FORMAT</span>
                    <span className="text-orange-400 font-bold">PDF</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-800/60">
                <a
                  href={cat.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </a>

                <a
                  href={cat.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
                  title="Open PDF in new browser tab"
                >
                  <FileText size={16} />
                  <span>Preview</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp & Quotation Help Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-8 text-center space-y-4 max-w-4xl mx-auto">
          <ShieldCheck size={36} className="text-emerald-400 mx-auto" />
          <h3 className="text-2xl font-display font-black text-white">
            Need Custom Pricing or Project Consultation?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-body">
            Our team assists schools, builders, and institutions with site planning, CAD layouts, custom color selections, and bulk wholesale quotes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppGeneralUrl('Hello! I would like to request product quotations based on your PDF catalogues.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Catalogue Inquiry</span>
            </a>
            <Link
              href="/products"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700 flex items-center gap-2"
            >
              <span>Browse All 954 Products Online</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
