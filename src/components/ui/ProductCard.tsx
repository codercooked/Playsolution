'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { Product } from '@/data/products';
import { getWhatsAppProductUrl } from '@/lib/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const waUrl = getWhatsAppProductUrl(product);
    window.open(waUrl, '_blank');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
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
            className="object-contain w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
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

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display font-bold text-xl text-secondary mb-2 line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="font-body text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="flex items-baseline justify-between mb-4">
          <span className="font-display font-black text-2xl text-primary">
            {product.price || '₹14,999'}
          </span>
          <span className="text-xs text-gray-400 font-medium">Excl. GST</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href={`/products/${product.slug}`}
            className="py-2.5 px-3 text-xs font-bold text-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={handleWhatsAppEnquiry}
            className="py-2.5 px-3 text-xs font-extrabold text-center text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
