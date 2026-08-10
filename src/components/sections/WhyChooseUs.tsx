'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Hammer, Truck, Headphones } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: 'Safety Certified Equipment',
      description: 'All products meet international safety standards including CE, ISI, and BIS certifications.',
    },
    {
      id: 2,
      icon: Hammer,
      title: 'Durable & Child-Safe Materials',
      description: 'Built with non-toxic, weather-resistant materials designed to last for years of active play.',
    },
    {
      id: 3,
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'We deliver and install across all major cities in India with professional setup teams.',
    },
    {
      id: 4,
      icon: Headphones,
      title: 'After-Sales Support',
      description: 'Dedicated support team for maintenance, repairs, and replacement parts whenever you need.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-[#FF6B35]">
      <div className="absolute top-0 left-0 w-full -translate-y-[98%] z-10">
        <WaveDivider color="#FF6B35" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Why Choose Play Solution
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm shadow-inner">
                <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[98%] z-10">
        <WaveDivider color="#FF6B35" flip={true} />
      </div>
    </section>
  );
}
