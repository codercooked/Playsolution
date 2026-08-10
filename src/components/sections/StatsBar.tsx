'use client';

import { motion } from 'framer-motion';
import { School, Clock, Package, ShieldCheck } from 'lucide-react';
import CounterAnimation from '@/components/ui/CounterAnimation';

export default function StatsBar() {
  const stats = [
    { id: 1, icon: School, value: 200, suffix: '+', label: 'Schools', prefix: '' },
    { id: 2, icon: Clock, value: 15, suffix: '+', label: 'Years Experience', prefix: '' },
    { id: 3, icon: Package, value: 50, suffix: '+', label: 'Products', prefix: '' },
    { id: 4, icon: ShieldCheck, value: 100, suffix: '%', label: 'Safety Certified', prefix: '' },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16 relative z-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                <stat.icon className="w-8 h-8 text-[#FF6B35]" strokeWidth={2} />
              </div>
              <div className="text-3xl md:text-4xl font-display font-black text-white flex items-center">
                {stat.prefix}
                <CounterAnimation end={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
