'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import EnquiryModal from './EnquiryModal';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
      >
        <div className="relative h-60 w-full p-6 flex items-center justify-center overflow-hidden bg-gray-50">
          {/* Colored Blob Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundColor: product.categoryColor || '#FF6B35',
              clipPath: 'ellipse(70% 70% at 50% 100%)',
            }}
          />
          <div className="relative z-10 w-full h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={400}
              className="object-contain w-full h-full drop-shadow-xl"
            />
          </div>
          
          <div className="absolute top-4 left-4 z-20">
            <span 
              className="text-xs font-display font-bold px-3 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: product.categoryColor || '#FF6B35' }}
            >
              {product.category}
            </span>
          </div>
        </div>

        <Link href={`/products/${product.slug}`} className="p-6 flex flex-col flex-grow">
          <h3 className="font-display font-bold text-xl text-secondary mb-2 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-body text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          <div className="flex items-baseline justify-between mb-4">
            <span className="font-display font-black text-2xl text-primary">
              {product.price || '₹14,999'}
            </span>
            <span className="text-xs text-gray-400 font-medium">Approx. Excl. GST</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="btn-primary py-2.5 px-4 text-sm w-full font-bold shadow-md hover:shadow-lg transition-all"
          >
            Enquire Now
          </button>
        </Link>
      </motion.div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </>
  );
}
