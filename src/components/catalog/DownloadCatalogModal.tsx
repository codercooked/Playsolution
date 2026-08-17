'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Package, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CATALOGUES } from '@/data/catalogues';

export default function DownloadCatalogModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-download-catalog-modal', handleOpenModal);
    return () => window.removeEventListener('open-download-catalog-modal', handleOpenModal);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-100"
          >
            {/* Header Banner */}
            <div className="relative bg-gradient-to-r from-slate-900 via-orange-950 to-slate-900 px-6 sm:px-8 py-6 text-white flex justify-between items-center shrink-0 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-black tracking-wide mb-2">
                  <Sparkles size={14} className="animate-spin text-orange-400" style={{ animationDuration: '6s' }} />
                  <span>PLAY SOLUTION CATALOGUE SUITE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight">
                  Download Official Catalogues
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-body">
                  Access 954 certified equipment models across 4 comprehensive catalogues, available as individual PDFs or as a complete master package.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-slate-50/50 custom-scrollbar">
              {/* Featured Master Package Banner */}
              {CATALOGUES.filter((c) => c.isBundle).map((bundle) => (
                <div
                  key={bundle.id}
                  className="relative group bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-0.5 rounded-2xl shadow-xl transition-all hover:shadow-2xl"
                >
                  <div className="bg-slate-900 rounded-[15px] p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

                    <div className="space-y-2 text-center md:text-left relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                        <Package size={14} />
                        <span>RECOMMENDED FOR SCHOOLS & ARCHITECTS</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                        {bundle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                        {bundle.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-slate-300">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-amber-400" /> 4 Full Catalogues
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-amber-400" /> 954 Total Equipment Models
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-amber-400" /> 304 High-Res Pages
                        </span>
                      </div>
                    </div>

                    <a
                      href={bundle.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 w-full md:w-auto px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 transition-all shadow-lg hover:scale-105 shrink-0 flex items-center justify-center gap-2.5 group cursor-pointer"
                    >
                      <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                      <span>Download Complete ZIP ({bundle.fileSize})</span>
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 py-2">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-xs font-black tracking-wider text-slate-600 uppercase">
                  Individual PDF Catalogues
                </span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {/* Individual PDF Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CATALOGUES.filter((c) => !c.isBundle).map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-slate-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold ${cat.badgeColor}`}>
                          {cat.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {cat.fileSize}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 font-body leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>

                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                        <span>📄 {cat.pageCount} Pages</span>
                        <span>📦 {cat.productCount} Products</span>
                        <span>⚡ High-Res PDF</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-2">
                      <a
                        href={cat.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-900 hover:bg-orange-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Download size={15} />
                        <span>Download PDF</span>
                      </a>
                      <a
                        href={cat.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5"
                        title="View PDF directly in browser"
                      >
                        <FileText size={15} />
                        <span className="hidden sm:inline">Preview</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Trust Bar */}
            <div className="px-6 py-4 bg-slate-100/90 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span className="font-medium">Direct official PDF downloads from Play Solution India.</span>
              </div>
              <a
                href="/catalogues"
                onClick={() => setIsOpen(false)}
                className="font-bold text-primary hover:underline flex items-center gap-1"
              >
                <span>View Catalogue Portal</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
