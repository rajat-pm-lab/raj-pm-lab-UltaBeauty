import type { Product } from '../data/types';
import { useStore } from '../store/useStore';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { mode, cart, addToCart, updateQuantity } = useStore();
  const cartItem = cart.find(item => item.id === product.id);
  const isMarketplace = product.source === 'marketplace';

  // In broken mode, show misleading points for marketplace items
  const displayPoints = mode === 'broken'
    ? Math.round(product.price * 10)
    : product.pointsEarned;

  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(product.rating));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300">
      {/* Image area */}
      <div className="bg-gray-50 h-36 flex items-center justify-center p-2 relative">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="max-h-full max-w-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='40'>🧴</text></svg>`;
          }}
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        {/* Badge - only in fixed mode */}
        {mode === 'fixed' && (
          <div className="mb-1.5 animate-fade-in">
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                isMarketplace
                  ? 'bg-marketplace-amber-light text-yellow-800'
                  : 'bg-direct-green-light text-green-800'
              }`}
            >
              {isMarketplace ? '⚠️ MARKETPLACE' : '✅ ULTA DIRECT'}
            </span>
          </div>
        )}

        {/* Brand */}
        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="text-xs font-semibold text-gray-900 leading-tight mt-0.5 line-clamp-2 min-h-[2rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[10px] text-yellow-500">{stars}</span>
          <span className="text-[10px] text-gray-400">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <p className="text-base font-bold text-gray-900 mt-1.5">
          ${product.price.toFixed(2)}
        </p>

        {/* Points */}
        <div className="mt-1 text-xs">
          {mode === 'fixed' && isMarketplace ? (
            <p className="text-red-500 font-medium">❌ No points earned</p>
          ) : (
            <p className="text-ulta-gold font-medium">
              ⭐ Earn {displayPoints} pts (${(displayPoints * 0.01).toFixed(2)})
            </p>
          )}
        </div>

        {/* Coupon eligibility - only in fixed mode */}
        {mode === 'fixed' && (
          <div className="mt-0.5 text-[11px] animate-fade-in">
            {isMarketplace ? (
              <p className="text-red-500">❌ No coupons</p>
            ) : (
              <p className="text-green-600">✅ Coupons apply</p>
            )}
          </div>
        )}

        {/* Add to Cart / Quantity */}
        <div className="mt-auto pt-2">
          {cartItem ? (
            <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-lg py-1.5">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 btn-press text-sm font-bold"
              >
                −
              </button>
              <span className="text-sm font-semibold w-4 text-center">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, 1)}
                className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 btn-press text-sm font-bold"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="w-full py-2 bg-ulta-pink text-white text-xs font-semibold rounded-lg hover:bg-ulta-pink-light transition-colors btn-press"
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
