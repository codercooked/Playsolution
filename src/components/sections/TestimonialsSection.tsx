'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  // Duplicate array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A2E] mb-4"
          >
            Schools Love Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Hear from educators who transformed their schools with Play Solution
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pb-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex gap-6 px-3 whitespace-nowrap"
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`} 
              className="inline-flex flex-col bg-gray-50/80 rounded-2xl p-8 min-w-[320px] max-w-[360px] border border-gray-100 shadow-sm whitespace-normal"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FFD166] text-[#FFD166]" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <h4 className="font-display font-bold text-[#1A1A2E]">
                  {testimonial.schoolName}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.city}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
