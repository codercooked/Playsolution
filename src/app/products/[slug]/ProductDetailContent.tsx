'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Download, Tag, MessageCircle } from 'lucide-react';
import { Product, getRelatedProducts, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import WaveDivider from '@/components/ui/WaveDivider';
import { getWhatsAppProductUrl } from '@/lib/whatsapp';

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  const category = categories.find(c => c.id === product.categoryId);
  const relatedProducts = getRelatedProducts(product, 4);

  const thumbnails = product.thumbnails && product.thumbnails.length > 0 
    ? product.thumbnails 
    : [product.image, product.image, product.image];

  const handleWhatsAppEnquiry = () => {
    const waUrl = getWhatsAppProductUrl(product);
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-12 pt-28">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          {category && (
            <>
              <Link href={`/products?category=${category.slug}`} className="hover:text-primary transition-colors">{category.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-secondary font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-square w-full bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 p-4">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(thumb)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === thumb ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 768px) 33vw, 15vw"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            {category && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                  <Tag className="w-3.5 h-3.5 mr-1.5" />
                  {category.name}
                </span>
              </div>
            )}
            
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-secondary mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-baseline gap-3 mb-5">
              <span className="font-display font-black text-3xl md:text-4xl text-primary">
                {product.price || '₹14,999'}
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-500 bg-orange-50 text-orange-800 border border-orange-200/60 px-3 py-1 rounded-full">
                Indicative Quote (Excl. GST)
              </span>
            </div>
            
            {/* Safety Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['CE Certified', 'Child-Safe Materials', 'ISI Approved'].map((badge, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-green-600" />
                  {badge}
                </span>
              ))}
            </div>

            <p className="font-body text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              {product.longDescription || product.description}
            </p>
            
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-secondary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Specs */}
            <div className="mb-10">
              <h3 className="font-display font-bold text-xl text-secondary mb-4">Specifications</h3>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <tbody>
                    <tr className="border-b border-gray-50 bg-gray-50/50">
                      <th className="py-3 px-4 font-medium text-gray-900 w-1/3">Material</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.material || 'Food-Grade LLDPE Plastic & Metal'}</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <th className="py-3 px-4 font-medium text-gray-900">Age Group</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.ageGroup || '2 - 10 Years'}</td>
                    </tr>
                    <tr className="border-b border-gray-50 bg-gray-50/50">
                      <th className="py-3 px-4 font-medium text-gray-900">Dimensions</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.dimensions || 'Standard School Size'}</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <th className="py-3 px-4 font-medium text-gray-900">Color Finish</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.colorOptions || 'Multi-Color Primary / Soft Pastels'}</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-medium text-gray-900">Warranty</th>
                      <td className="py-3 px-4 text-gray-600">1 Year against manufacturing defects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Direct WhatsApp Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-display font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={24} />
                <span>Chat on WhatsApp for Quote & Specs</span>
              </button>
              
              <a 
                href={getWhatsAppProductUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 rounded-2xl font-display font-extrabold text-base flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <WaveDivider color="fill-white" />
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-2">Related Products</h2>
                <p className="text-gray-600">More equipment from this category</p>
              </div>
              <Link 
                href="/products" 
                className="text-primary font-bold hover:underline hidden sm:block"
              >
                View All Catalog →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
