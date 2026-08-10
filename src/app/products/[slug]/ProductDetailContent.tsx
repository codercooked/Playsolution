'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, CheckCircle, Download, Tag } from 'lucide-react';
import { Product, getRelatedProducts, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import EnquiryModal from '@/components/ui/EnquiryModal';
import WaveDivider from '@/components/ui/WaveDivider';

interface ProductDetailContentProps {
  product: Product;
}

export default function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const category = categories.find(c => c.id === product.categoryId);
  const relatedProducts = getRelatedProducts(product, 4);

  const thumbnails = product.thumbnails && product.thumbnails.length > 0 
    ? product.thumbnails 
    : [product.image, product.image, product.image]; 

  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 whitespace-nowrap overflow-x-auto pb-2 hide-scrollbar">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          {category && (
            <>
              <Link href={`/products?category=${category.id}`} className="hover:text-primary transition-colors">
                {category.name}
              </Link>
              <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
            </>
          )}
          <span className="text-secondary font-medium truncate">{product.name}</span>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-square w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover"
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
                    className="object-cover"
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
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color ? category.color.replace('bg-', 'bg-opacity-20 text-').replace('-500', '-700') : ''} bg-opacity-10 text-primary bg-primary/10`}>
                  <Tag className="w-3 h-3 mr-1.5" />
                  {category.name}
                </span>
              </div>
            )}
            
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-secondary mb-3">
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
                <div key={idx} className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-100">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                  {badge}
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {product.longDescription || product.description || product.shortDescription}
            </p>
            
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-secondary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
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
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.material || 'High-density Polyethylene (HDPE)'}</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <th className="py-3 px-4 font-medium text-gray-900">Age Group</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.ageGroup || '2 - 6 Years'}</td>
                    </tr>
                    <tr className="border-b border-gray-50 bg-gray-50/50">
                      <th className="py-3 px-4 font-medium text-gray-900">Dimensions</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.dimensions || 'Customizable'}</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <th className="py-3 px-4 font-medium text-gray-900">Capacity</th>
                      <td className="py-3 px-4 text-gray-600">{product.specifications?.capacity || 'Varies by configuration'}</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-medium text-gray-900">Warranty</th>
                      <td className="py-3 px-4 text-gray-600">1 Year against manufacturing defects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button 
                onClick={() => setIsEnquiryModalOpen(true)}
                className="btn-primary flex-1 py-4 text-lg justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                Enquire About This Product
              </button>
              <a 
                href="#"
                className="btn-outline flex-1 py-4 text-lg justify-center border-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Brochure download will begin shortly.");
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
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
                <p className="text-gray-500">You might also be interested in these items</p>
              </div>
              <Link href="/products" className="hidden md:flex text-primary font-medium hover:underline items-center">
                View all products <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link href="/products" className="btn-outline w-full justify-center">
                View all products
              </Link>
            </div>
          </div>
        </section>
      )}

      <EnquiryModal 
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        productName={product.name}
      />
    </>
  );
}
