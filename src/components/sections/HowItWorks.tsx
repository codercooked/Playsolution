'use client';

import { motion } from 'framer-motion';
import { Search, Send, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Browse Products',
      description: 'Explore our wide range of kindergarten equipment and find what fits your school\'s needs.',
    },
    {
      id: 2,
      icon: Send,
      title: 'Send Enquiry',
      description: 'Click Enquire Now on any product or fill out our contact form with your requirements.',
    },
    {
      id: 3,
      icon: Truck,
      title: 'We Deliver & Install',
      description: 'Our team delivers to your location and professionally installs everything for you.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative z-0 mt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A2E] mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Getting your dream play space is as easy as 1-2-3
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4rem] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-300 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center bg-transparent"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-lg shadow-[#FF6B35]/20 relative z-10">
                  {step.id}
                </div>
                
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-6">
                  <step.icon className="w-8 h-8 text-[#1A1A2E]" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-[#1A1A2E] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
