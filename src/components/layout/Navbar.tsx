'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, MessageCircle, Download } from 'lucide-react';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Catalogues', path: '/catalogues' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-2.5 border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
        {/* Compact Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 md:h-11 lg:h-12 w-auto flex items-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/logo.png" 
              alt="Play Solution Logo" 
              className="h-full w-auto object-contain drop-shadow-md" 
            />
          </div>
          <span className="font-display font-black text-xl md:text-2xl tracking-tight text-secondary">
            Play<span className="text-primary">Solution</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`font-body font-semibold text-sm transition-colors hover:text-primary ${
                    pathname === link.path ? 'text-primary font-bold' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-slate-200 mx-1" />

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-download-catalog-modal'))}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-black bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-sm hover:scale-105"
            >
              <Download size={14} />
              <span>PDF Catalogues</span>
            </button>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-extrabold bg-slate-900 text-white hover:bg-orange-500 transition-colors shadow-sm"
            >
              <Bot size={15} className="text-orange-400" />
              <span>AI Chat</span>
            </button>
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-xs font-black bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-sm hover:scale-105"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
            <Link href="/contact" className="btn-primary py-1.5 px-4 text-xs font-extrabold">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-secondary p-1 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden absolute w-full top-full left-0"
          >
            <div className="flex flex-col px-4 py-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display font-bold text-base py-2 px-3 rounded-xl transition-colors ${
                    pathname === link.path ? 'bg-primary/10 text-primary' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.dispatchEvent(new CustomEvent('open-download-catalog-modal'));
                  }}
                  className="w-full py-2 px-4 rounded-xl font-bold text-xs bg-orange-500 text-white flex items-center justify-center gap-2"
                >
                  <Download size={15} />
                  <span>Download PDF Catalogues</span>
                </button>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-500 text-white flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary block text-center w-full py-2.5 text-xs"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
