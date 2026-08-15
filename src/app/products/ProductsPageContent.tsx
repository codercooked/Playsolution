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

  const [activeCatalog, setActiveCatalog] = useState<'all' | 'indoor' | 'outdoor'>('all');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Filter categories based on active master catalog tab
  const visibleCategories = useMemo(() => {
    if (activeCatalog === 'all') return categories;
    return categories.filter((c) => c.catalogType === activeCatalog);
  }, [activeCatalog]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Master Catalog filter (Indoor vs Outdoor)
    if (activeCatalog !== 'all') {
      result = result.filter((p) => p.catalogType === activeCatalog);
    }

    // Sub-category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          (p.code && p.code.toLowerCase().includes(query))
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [activeCatalog, selectedCategory, searchQuery, sortBy]);

  if (!mounted) return null;

  const indoorCount = products.filter((p) => p.catalogType === 'indoor').length;
  const outdoorCount = products.filter((p) => p.catalogType === 'outdoor').length;

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-black text-secondary mb-4">Product Catalogue</h1>
        <p className="text-gray-600 text-lg">
          Browse our complete range of certified Indoor & Outdoor kindergarten playground equipment, furniture, and toys.
        </p>

        {/* Master Level 1 Classification Switcher (Indoor vs Outdoor) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-gray-200/80 border border-gray-300/60 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => {
                setActiveCatalog('all');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-full font-display font-black text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                activeCatalog === 'all'
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-slate-900'
              }`}
            >
              <span>All Equipment</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">{products.length}</span>
            </button>

            <button
              onClick={() => {
                setActiveCatalog('indoor');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-full font-display font-black text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                activeCatalog === 'indoor'
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <span>🏫 Indoor Catalogue</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeCatalog === 'indoor' ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-700'}`}>{indoorCount}</span>
            </button>

            <button
              onClick={() => {
                setActiveCatalog('outdoor');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-full font-display font-black text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                activeCatalog === 'outdoor'
                  ? 'bg-teal-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:text-teal-700'
              }`}
            >
              <span>🌲 Outdoor Catalogue</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeCatalog === 'outdoor' ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'}`}>{outdoorCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Sub-Category Bar */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md shadow-md border border-gray-200 p-4 rounded-2xl mb-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          
          {/* Level 2 Sub-Categories */}
          <div className="w-full lg:w-auto flex overflow-x-auto pb-2 lg:pb-0 hide-scrollbar gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-bold text-xs transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All {activeCatalog === 'indoor' ? 'Indoor' : activeCatalog === 'outdoor' ? 'Outdoor' : ''} Sub-Categories
            </button>
            {visibleCategories.map((cat) => {
              const catProductCount = products.filter((p) => p.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-75 font-mono">({catProductCount})</span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search code (e.g. LFO-MPS-01)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-xs transition-shadow bg-gray-50 focus:bg-white"
              />
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-700 font-bold text-xs cursor-pointer"
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
