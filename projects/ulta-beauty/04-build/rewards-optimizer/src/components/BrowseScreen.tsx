import { useState } from 'react';
import { useStore, getMarketplaceItems, getCartTotal } from '../store/useStore';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import type { Category } from '../data/types';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Skincare', value: 'skincare' },
  { label: 'Makeup', value: 'makeup' },
  { label: 'Haircare', value: 'haircare' },
  { label: 'Fragrance', value: 'fragrance' },
];

type SortOption = 'default' | 'price-low' | 'price-high' | 'points-value';

export function BrowseScreen() {
  const { activeCategory, setCategory, searchQuery, setSearchQuery, cart, setScreen, mode } = useStore();
  const [pointsOnly, setPointsOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('default');

  let filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPoints = !pointsOnly || p.source === 'ulta_direct';
    return matchesCategory && matchesSearch && matchesPoints;
  });

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'points-value') {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const aValue = a.pointsEarned / a.price;
      const bValue = b.pointsEarned / b.price;
      return bValue - aValue;
    });
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = getCartTotal(cart);
  const marketplaceInCart = getMarketplaceItems(cart).length;

  const directCount = filteredProducts.filter(p => p.source === 'ulta_direct').length;
  const marketplaceCount = filteredProducts.filter(p => p.source === 'marketplace').length;

  return (
    <div className="flex flex-col min-h-0 flex-1">
      {/* Search bar — matches Ulta's search UI */}
      <div className="px-4 pt-3 pb-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search Ulta Beauty"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Category pills — bordered style like Ulta */}
      <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
              activeCategory === cat.value
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Fixed mode: Filter & sort controls */}
      {mode === 'fixed' && (
        <div className="px-4 pb-2 flex items-center gap-2 animate-fade-in">
          <button
            onClick={() => setPointsOnly(!pointsOnly)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-semibold transition-colors border ${
              pointsOnly
                ? 'bg-green-50 text-green-800 border-green-400'
                : 'bg-white text-gray-500 border-gray-300'
            }`}
          >
            ⭐ Points-eligible only
          </button>

          <div className="ml-auto flex items-center gap-1">
            <span className="text-xs text-gray-400">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-2 py-1.5 text-xs font-medium bg-white text-gray-700 border-none focus:outline-none cursor-pointer"
            >
              <option value="default">Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="points-value">Points Value</option>
            </select>
          </div>
        </div>
      )}

      {/* Results count — matches Ulta's light gray style */}
      <div className="px-4 pb-2 flex items-center justify-between">
        <span className="text-sm text-gray-400">
          {filteredProducts.length} results
          {mode === 'fixed' && !pointsOnly && (
            <span className="text-gray-300"> ({directCount} Ulta Direct, {marketplaceCount} partner)</span>
          )}
        </span>
        {mode === 'broken' && (
          <div className="flex items-center gap-1 ml-auto">
            <span className="text-xs text-gray-400">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-2 py-1.5 text-xs font-medium bg-white text-gray-700 border-none focus:outline-none cursor-pointer"
            >
              <option value="default">Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        )}
      </div>

      {/* Product grid */}
      <div className="flex-1 overflow-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No products found
          </div>
        )}
      </div>

      {/* Sticky bottom cart bar */}
      {cartCount > 0 && (
        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] bg-white border-t border-gray-200 px-4 py-3 z-20 shadow-lg"
        >
          <button
            onClick={() => setScreen('cart')}
            className="w-full flex items-center justify-between bg-black text-white rounded-full px-5 py-3.5 btn-press hover:bg-gray-800 transition-colors"
          >
            <div className="text-left">
              <span className="text-sm font-semibold">{cartCount} {cartCount === 1 ? 'item' : 'items'} · ${cartTotal.toFixed(2)}</span>
              {mode === 'fixed' && marketplaceInCart > 0 && (
                <p className="text-[10px] text-gray-300 mt-0.5">
                  {marketplaceInCart} partner {marketplaceInCart === 1 ? 'item' : 'items'} in bag
                </p>
              )}
            </div>
            <span className="text-sm font-semibold">View bag →</span>
          </button>
        </div>
      )}
    </div>
  );
}
