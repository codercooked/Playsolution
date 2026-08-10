'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, ToyBrick, Shapes, LibraryBig, Palette, Gamepad2, LucideIcon, Sparkles } from 'lucide-react';
import { categories } from '@/data/products';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';

const getIcon = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'toys': ToyBrick,
    'shapes': Shapes,
    'furniture': LibraryBig,
    'art': Palette,
    'play': Gamepad2,
  };
  return icons[iconName?.toLowerCase()] || LayoutGrid;
};

const gradients = [
  "from-[#FFEBE1] to-[#FFD8C7]", // Indoor
  "from-[#E6F9F6] to-[#C3F3EB]", // Outdoor
  "from-[#F0ECFF] to-[#DCD2FF]", // Classroom
  "from-[#FFEBF2] to-[#FFCDE0]", // Slides & Swings
  "from-[#E8F7FC] to-[#C5EDF9]", // Ball Pools
  "from-[#EDF8F2] to-[#CEEEDC]", // Toys
];

export default function CategoriesSection() {
  const services: Service[] = categories.map((cat, idx) => {
    const IconComp = getIcon(cat.icon || cat.slug);
    return {
      number: `00${idx + 1}`,
      title: cat.name,
      description: cat.description || 'Premium school equipment designed for safe & fun active play.',
      icon: IconComp,
      gradient: gradients[idx % gradients.length],
      slug: cat.slug,
      count: String(cat.count || 6),
    };
  });

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-black tracking-wide mb-3"
          >
            <Sparkles size={14} />
            <span>EXPLORE CATEGORIES</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight"
          >
            What We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-medium"
          >
            Everything your school needs to create the ultimate interactive play environment
          </motion.p>
        </div>

        {/* Animated Service Carousel replacing old static grid */}
        <ServiceCarousel services={services} />
      </div>
    </section>
  );
}
