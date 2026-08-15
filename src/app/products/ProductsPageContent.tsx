'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Frown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'newest') {
      // Assuming higher ID means newer for mock data
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-black text-secondary mb-4">Our Products</h1>
        <p className="text-gray-600 text-lg">
          Discover our wide range of premium, safe, and engaging kindergarten equipment designed to foster learning through play.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 p-4 -mx-4 px-4 md:mx-0 md:rounded-2xl mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Categories */}
          <div className="w-full md:w-auto flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow bg-gray-50 focus:bg-white"
              />
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-700 font-medium cursor-pointer"
              >
                <option value="default">Default sorting</option>
                <option value="name-asc">Name A-Z</option>
                <option value="newest">Newest first</option>
              </select>
              <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Frown className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-display font-bold text-secondary mb-2">No products found</h3>
          <p className="text-gray-500 mb-6 max-w-md">
            We couldn&apos;t find any products matching your current filters. Try adjusting your search or category selection.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setSortBy('default');
            }}
            className="btn-primary"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
