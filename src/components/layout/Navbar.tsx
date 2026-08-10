'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform">
            <path d="m22 2-2.2 2.2a2.8 2.8 0 0 0-.8 2L19 14.5a3 3 0 0 1-5 2.5l-4-4a3 3 0 0 1-2.5 5H3L2 22"/>
            <path d="M12.5 19H17"/>
            <path d="M12.5 19v-4"/>
            <path d="m20.5 7-6-6"/>
            <path d="M7 13.5v4"/>
            <path d="M7 13.5H2.5"/>
          </svg>
          <span className="font-display font-black text-2xl tracking-tight text-secondary">
            Play<span className="text-primary">Solution</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`font-body font-medium transition-colors hover:text-primary ${
                    pathname === link.path ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-full text-xs font-extrabold bg-slate-900 text-white hover:bg-orange-500 transition-colors shadow-sm"
          >
            <Bot size={16} className="text-orange-400" />
            <span>AI Assistant</span>
          </button>
          <Link href="/contact" className="btn-primary py-2.5 px-5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden absolute w-full top-full left-0"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display font-bold text-lg p-2 rounded-lg ${
                    pathname === link.path ? 'bg-primary/10 text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary block text-center w-full"
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
