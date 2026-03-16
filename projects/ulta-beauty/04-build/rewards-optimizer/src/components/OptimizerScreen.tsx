import { useStore, getMarketplaceItems, getDirectItems, getCouponSavings, getPointsEarned, getTotalValueLost } from '../store/useStore';
import type { Product } from '../data/types';

// Mock direct alternatives for optimizer recommendations
const alternativeProducts: Record<number, Product> = {
  5: {
    id: 105,
    name: "Bye Bye Pores Primer",
    brand: "IT Cosmetics",
    category: "skincare",
    price: 38.00,
    image: "✨",
    source: "ulta_direct",
    pointsEarned: 380,
    couponEligible: true,
    gwpEligible: true,
    rating: 4.3,
    reviewCount: 1245
  },
  6: {
    id: 106,
    name: "Don't Despair, Repair! Deep Conditioning Mask",
    brand: "Briogeo",
    category: "haircare",
    price: 36.00,
    image: "🧴",
    source: "ulta_direct",
    pointsEarned: 360,
    couponEligible: true,
    gwpEligible: true,
    rating: 4.4,
    reviewCount: 2345
  },
};

export function OptimizerScreen() {
  const store = useStore();
  const { cart, setScreen, showToast, swapCartItem } = store;
  const marketplaceItems = getMarketplaceItems(cart);
  const directItems = getDirectItems(cart);
  const pointsEarned = getPointsEarned(cart);
  const couponSavings = getCouponSavings(cart);
  const totalValueLost = getTotalValueLost(cart);

  const handleSwap = (oldId: number) => {
    const alt = alternativeProducts[oldId];
    if (alt) {
      swapCartItem(oldId, alt);
      showToast('Swapped to Ulta Direct alternative!');
    }
  };

  const handleSetAlert = (productName: string) => {
    showToast(`Restock alert set for ${productName}!`);
  };

  return (
    <div className="flex-1 overflow-auto px-4 pt-4 pb-6">
      <h2 className="text-lg font-bold text-gray-900 mb-1">🤖 AI Cart Optimizer</h2>
      <p className="text-xs text-gray-500 mb-4">
        I analyzed your cart and found ways to save you <strong className="text-red-600">${totalValueLost.toFixed(2)}</strong> in lost value:
      </p>

      {/* Recommendations */}
      {marketplaceItems.map((item, index) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-xl p-4 mb-4 animate-slide-up"
          style={{ animationDelay: `${index * 200}ms`, opacity: 0 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{item.image}</span>
            <div>
              <span className="bg-marketplace-amber-light text-yellow-800 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full">
                ⚠️ Marketplace
              </span>
              <p className="text-sm font-semibold text-gray-900 mt-0.5">
                {item.brand} {item.name} — ${item.price.toFixed(2)}
              </p>
              <p className="text-[10px] text-red-500">❌ No points · ❌ No coupon</p>
            </div>
          </div>

          {/* Option A: Buy direct from brand */}
          {item.directAlternative && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-2">
              <p className="text-xs font-semibold text-blue-800 mb-1">Option A: Buy direct</p>
              <p className="text-xs text-blue-700">
                Buy from <strong>{item.directAlternative.retailer}</strong>
              </p>
              <p className="text-xs text-blue-700">
                Same price: ${item.directAlternative.price.toFixed(2)}
                {item.directAlternative.pointsProgram && (
                  <> + earn {item.directAlternative.pointsProgram} points</>
                )}
              </p>
              <a
                href={item.directAlternative.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-3 py-1.5 bg-blue-600 text-white text-[11px] font-semibold rounded-lg btn-press"
              >
                Visit {item.directAlternative.retailer} ↗
              </a>
            </div>
          )}

          {/* Option B: Ulta Direct alternative or Set Alert */}
          {alternativeProducts[item.id] ? (
            <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-2">
              <p className="text-xs font-semibold text-green-800 mb-1">Option B: Ulta Direct alternative</p>
              <div className="flex items-center gap-2">
                <span>{alternativeProducts[item.id].image}</span>
                <div>
                  <p className="text-xs font-medium text-green-800">
                    {alternativeProducts[item.id].brand} {alternativeProducts[item.id].name}
                  </p>
                  <p className="text-xs text-green-700">
                    ${alternativeProducts[item.id].price.toFixed(2)} (Ulta Direct)
                  </p>
                  <p className="text-[10px] text-green-600">
                    ✅ Earn {alternativeProducts[item.id].pointsEarned} pts + 20% coupon
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSwap(item.id)}
                className="mt-2 px-3 py-1.5 bg-green-600 text-white text-[11px] font-semibold rounded-lg btn-press"
              >
                Swap to This
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-2">
              <p className="text-xs font-semibold text-gray-700 mb-1">Option B: Wait for restock</p>
              <p className="text-xs text-gray-600">
                Ulta may restock as a direct item. Last available: ~2 weeks ago.
              </p>
              <button
                onClick={() => handleSetAlert(item.name)}
                className="mt-2 px-3 py-1.5 bg-gray-700 text-white text-[11px] font-semibold rounded-lg btn-press"
              >
                Set Restock Alert 🔔
              </button>
            </div>
          )}

          <button className="mt-1 text-[11px] text-gray-400 hover:text-gray-600">
            Keep as-is →
          </button>
        </div>
      ))}

      {/* Optimized Summary */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
        <h3 className="text-sm font-bold text-green-800 mb-3">Optimized Summary</h3>

        <div className="space-y-2 text-xs">
          <div>
            <p className="text-gray-500 font-medium mb-1">Before Optimization:</p>
            <div className="flex justify-between">
              <span className="text-gray-600">Points earned</span>
              <span className="text-gray-800">{pointsEarned.toLocaleString()} (${(pointsEarned * 0.01).toFixed(2)})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Coupon saved</span>
              <span className="text-gray-800">${couponSavings.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t border-green-200 mt-1 pt-1">
              <span className="text-gray-700">Total value</span>
              <span className="text-gray-900">${(pointsEarned * 0.01 + couponSavings).toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-green-200 pt-2">
            <p className="text-gray-500 font-medium mb-1">After Full Optimization:</p>
            <div className="flex justify-between">
              <span className="text-gray-600">Points earned (all direct)</span>
              <span className="text-green-700 font-semibold">
                {(pointsEarned + marketplaceItems.reduce((s, i) => s + Math.round(i.price * 10), 0)).toLocaleString()} pts
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Coupon saved (all eligible)</span>
              <span className="text-green-700 font-semibold">
                ${(couponSavings + marketplaceItems.reduce((s, i) => s + i.price * 0.20, 0)).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-3 text-center">
            <p className="text-sm font-bold text-green-800">
              ✅ EXTRA VALUE: +${totalValueLost.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setScreen('cart')}
        className="w-full py-3 mb-4 border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 btn-press"
      >
        Done — Back to Cart
      </button>
    </div>
  );
}
