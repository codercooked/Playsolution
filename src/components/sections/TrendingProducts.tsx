'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function TrendingProducts() {
  const trendingProducts = products.slice(0, 8);

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-[#1A1A2E] mb-4"
          >
            Popular Picks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Our best-selling equipment loved by schools nationwide
          </motion.p>
        </div>

        {/* Mobile horizontal scroll, Tablet/Desktop grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="min-w-[280px] snap-center shrink-0 w-full md:min-w-0 md:w-auto"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/products" className="inline-flex items-center justify-center px-8 py-3.5 bg-white border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white rounded-lg font-bold transition-colors">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
