'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-[#1A1A2E] py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#FF6B35] opacity-20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#FFD166] opacity-10 blur-xl"
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Ready to Transform Your School Space?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10">
            Get a free consultation and custom quote for your school.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block px-10 py-4 bg-[#FF6B35] hover:bg-[#e85c2c] text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-[#FF6B35]/25 hover:shadow-xl hover:shadow-[#FF6B35]/40 hover:-translate-y-1"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
