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

export function BrowseScreen() {
  const { activeCategory, setCategory, searchQuery, setSearchQuery, cart, setScreen, mode } = useStore();

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = getCartTotal(cart);
  const marketplaceInCart = getMarketplaceItems(cart).length;

  return (
    <div className="flex flex-col min-h-0 flex-1">
      {/* Search bar */}
      <div className="px-4 pt-3 pb-2">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search beauty products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ulta-pink/30"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-4 pb-2 flex gap-1 overflow-x-auto scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat.value
                ? 'bg-ulta-pink text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="flex-1 overflow-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
            className="w-full flex items-center justify-between bg-ulta-pink text-white rounded-xl px-4 py-3 btn-press"
          >
            <div className="text-left">
              <span className="text-sm font-semibold">🛒 {cartCount} items · ${cartTotal.toFixed(2)}</span>
              {mode === 'fixed' && marketplaceInCart > 0 && (
                <p className="text-[10px] text-pink-100 mt-0.5">
                  ⚠️ {marketplaceInCart} items won't earn points
                </p>
              )}
            </div>
            <span className="text-sm font-semibold">View Cart →</span>
          </button>
        </div>
      )}
    </div>
  );
}
