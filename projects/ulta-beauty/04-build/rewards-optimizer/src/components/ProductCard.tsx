import type { Product } from '../data/types';
import { useStore } from '../store/useStore';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { mode, cart, addToCart, updateQuantity } = useStore();
  const cartItem = cart.find(item => item.id === product.id);
  const isDirect = product.source === 'ulta_direct';

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
        {/* Badge overlay on image — only in fixed mode */}
        {mode === 'fixed' && (
          <span
            className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide animate-fade-in ${
              isDirect
                ? 'bg-green-600 text-white'
                : 'bg-gray-500 text-white'
            }`}
          >
            {isDirect ? 'Ulta Direct' : 'Sold by Partner'}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
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

        {/* Points & coupon — positive-only signaling */}
        <div className="mt-1 min-h-[2rem]">
          {mode === 'broken' ? (
            /* Broken mode: ALL items show points (misleading) */
            <p className="text-xs text-ulta-gold font-medium">
              ⭐ Earn {displayPoints} pts (${(displayPoints * 0.01).toFixed(2)})
            </p>
          ) : (
            /* Fixed mode: Only direct items show points & coupon */
            isDirect && (
              <div className="animate-fade-in">
                <p className="text-xs text-ulta-gold font-medium">
                  ⭐ Earn {product.pointsEarned} pts (${(product.pointsEarned * 0.01).toFixed(2)})
                </p>
                <p className="text-[11px] text-green-600 mt-0.5">
                  Coupon eligible
                </p>
              </div>
            )
          )}
        </div>

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
