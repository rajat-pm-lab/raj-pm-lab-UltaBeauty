import { useState } from 'react';
import {
  useStore,
  getDirectItems,
  getMarketplaceItems,
  getCartTotal,
  getCouponSavings,
  getPointsEarned,
  getPointsLost,
  getCouponSavingsLost,
  getTotalValueLost,
} from '../store/useStore';
import type { CartItem } from '../data/types';

export function CartScreen() {
  const store = useStore();
  const { mode, cart, couponApplied, pointsRedemptionAttempted, setScreen } = store;
  const [couponInput, setCouponInput] = useState('20OFFPRESTIGE');
  const [showPointsModal, setShowPointsModal] = useState(false);

  const directItems = getDirectItems(cart);
  const marketplaceItems = getMarketplaceItems(cart);
  const total = getCartTotal(cart);
  const directTotal = directItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const couponSavings = getCouponSavings(cart);
  const pointsEarned = getPointsEarned(cart);
  const pointsLost = getPointsLost(cart);
  const couponLost = getCouponSavingsLost(cart);
  const totalValueLost = getTotalValueLost(cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <span className="text-5xl mb-4">🛒</span>
        <p className="text-gray-500 text-sm">Your cart is empty</p>
        <button
          onClick={() => setScreen('browse')}
          className="mt-4 px-6 py-2 bg-ulta-pink text-white rounded-lg text-sm font-semibold btn-press"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-0 flex-1 pb-4">
      <div className="px-4 pt-4 pb-2">
        <h2 className="text-lg font-bold text-gray-900">
          🛒 Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)} items)
        </h2>
      </div>

      <div className="flex-1 overflow-auto px-4">
        {/* FIXED MODE: Grouped by source */}
        {mode === 'fixed' ? (
          <>
            {/* Direct items section */}
            {directItems.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2 py-1.5 border-b-2 border-green-200">
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                    ✅ Ulta Direct ({directItems.length} items)
                  </span>
                </div>
                <p className="text-[10px] text-green-600 mb-2">Points & coupons work on these items</p>
                <div className="space-y-2">
                  {directItems.map(item => (
                    <CartItemCard key={item.id} item={item} mode="fixed" shakeItems={store.shakeItems} store={store} />
                  ))}
                </div>
              </div>
            )}

            {/* Marketplace items section */}
            {marketplaceItems.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2 py-1.5 border-b-2 border-yellow-200">
                  <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">
                    ⚠️ UB Marketplace ({marketplaceItems.length} items)
                  </span>
                </div>
                <p className="text-[10px] text-yellow-600 mb-2">No points, coupons, or GWP</p>
                <div className="space-y-2">
                  {marketplaceItems.map(item => (
                    <CartItemCard key={item.id} item={item} mode="fixed" shakeItems={store.shakeItems} store={store} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* BROKEN MODE: Flat list */
          <div className="space-y-2 mb-4">
            {cart.map(item => (
              <CartItemCard key={item.id} item={item} mode="broken" shakeItems={store.shakeItems} store={store} />
            ))}
          </div>
        )}

        {/* Coupon section - BROKEN MODE */}
        {mode === 'broken' && !couponApplied && (
          <div className="bg-gray-50 rounded-xl p-3 mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">🏷️ Apply Coupon Code</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-ulta-pink/30"
                placeholder="Enter coupon code"
              />
              <button
                onClick={() => store.applyCoupon(couponInput)}
                className="px-4 py-2 bg-ulta-pink text-white text-xs font-semibold rounded-lg btn-press"
              >
                Apply
              </button>
            </div>
          </div>
        )}

        {/* Coupon applied - BROKEN MODE reveal */}
        {mode === 'broken' && couponApplied && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 animate-fade-in">
            <p className="text-xs font-bold text-yellow-800">⚠️ Coupon Applied</p>
            <p className="text-xs text-yellow-700 mt-1">
              "20OFFPRESTIGE" — 20% Off
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              Applied to <strong>{directItems.length} of {cart.length}</strong> items.
            </p>
            <p className="text-xs text-yellow-600 mt-0.5">
              {marketplaceItems.length} items are not eligible.
            </p>
          </div>
        )}

        {/* Points redemption button - BROKEN MODE */}
        {mode === 'broken' && couponApplied && !pointsRedemptionAttempted && (
          <button
            onClick={() => {
              store.attemptPointsRedemption();
              setShowPointsModal(true);
            }}
            className="w-full py-2.5 mb-4 border-2 border-ulta-gold text-ulta-gold text-xs font-semibold rounded-xl hover:bg-yellow-50 btn-press"
          >
            ⭐ Redeem Points (12,450 pts)
          </button>
        )}

        {/* Points modal - BROKEN MODE */}
        {showPointsModal && mode === 'broken' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4 animate-shake">
            <p className="text-sm font-bold text-red-800">❌ Points Redemption</p>
            <p className="text-xs text-red-700 mt-2">
              Your balance: <strong>12,450 pts ($12.45)</strong>
            </p>
            <p className="text-xs text-red-700 mt-2">
              Points can only be applied to <em>eligible items</em> in your cart.
            </p>
            <div className="bg-red-100 rounded-lg p-2 mt-2">
              <p className="text-xs text-red-800">
                Eligible subtotal: <strong>${directTotal.toFixed(2)}</strong>
              </p>
              <p className="text-[10px] text-red-600">
                (You expected: ${total.toFixed(2)})
              </p>
            </div>
            <p className="text-xs text-gray-500 italic mt-3">
              "Wait, why can't I use my points on everything in my cart?"
            </p>
            <button
              onClick={() => setShowPointsModal(false)}
              className="mt-3 text-xs text-red-600 font-medium"
            >
              Close
            </button>
          </div>
        )}

        {/* Cart Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3">Cart Summary</h3>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
              <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
            </div>

            {(mode === 'fixed' || couponApplied) && (
              <div className="flex justify-between text-green-600">
                <span>20% Off Coupon ({directItems.length} direct items)</span>
                <span className="font-semibold">−${couponSavings.toFixed(2)}</span>
              </div>
            )}

            {mode === 'fixed' && (
              <>
                <div className="flex justify-between text-ulta-gold">
                  <span>Points earned</span>
                  <span className="font-semibold">{pointsEarned.toLocaleString()} (${(pointsEarned * 0.01).toFixed(2)})</span>
                </div>

                {marketplaceItems.length > 0 && (
                  <>
                    <div className="border-t border-gray-200 my-2" />
                    <div className="flex justify-between text-red-600">
                      <span>⚠️ Points NOT earned</span>
                      <span className="font-semibold">{pointsLost.toLocaleString()} pts</span>
                    </div>
                    <div className="flex justify-between text-red-600">
                      <span>⚠️ Coupon NOT applied</span>
                      <span className="font-semibold">${couponLost.toFixed(2)}</span>
                    </div>

                    {/* VALUE ALERT */}
                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mt-2 animate-pulse-glow">
                      <p className="text-xs font-bold text-yellow-800 text-center">
                        YOU'RE LEAVING
                      </p>
                      <p className="text-xl font-bold text-yellow-800 text-center mt-0.5">
                        ${totalValueLost.toFixed(2)}
                      </p>
                      <p className="text-xs font-bold text-yellow-800 text-center">
                        ON THE TABLE
                      </p>
                    </div>
                  </>
                )}
              </>
            )}

            {mode === 'broken' && couponApplied && (
              <>
                <div className="border-t border-gray-200 my-2" />
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-bold text-gray-900">${(total - couponSavings).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 my-2" />
                <div className="flex justify-between text-gray-500">
                  <span>Expected savings</span>
                  <span>−${(total * 0.20).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Actual savings</span>
                  <span className="font-semibold">−${couponSavings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-red-600 font-semibold">
                  <span>💸 Missing savings</span>
                  <span>${couponLost.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        {mode === 'fixed' && marketplaceItems.length > 0 && (
          <button
            onClick={() => setScreen('optimizer')}
            className="w-full py-3 mb-3 bg-ulta-pink text-white text-sm font-bold rounded-xl hover:bg-pink-600 transition-colors btn-press shadow-lg"
          >
            🤖 Optimize My Cart
          </button>
        )}

        <button
          className="w-full py-3 mb-4 border-2 border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-50 btn-press"
        >
          Proceed to Checkout
        </button>

        {/* Hint to switch mode */}
        {mode === 'broken' && couponApplied && pointsRedemptionAttempted && (
          <button
            onClick={() => store.setMode('fixed')}
            className="w-full py-3 mb-4 bg-blue-50 border border-blue-200 text-blue-700 text-xs rounded-xl btn-press animate-slide-up"
          >
            💡 This could have been avoided. Tap to see how →
          </button>
        )}
      </div>
    </div>
  );
}

// Cart item row component
function CartItemCard({ item, mode, shakeItems, store }: {
  item: CartItem;
  mode: 'broken' | 'fixed';
  shakeItems: number[];
  store: ReturnType<typeof useStore>;
}) {
  const isMarketplace = item.source === 'marketplace';
  const isShaking = shakeItems.includes(item.id);

  return (
    <div className={`bg-white border border-gray-100 rounded-lg p-3 flex items-start gap-3 ${isShaking ? 'animate-shake' : ''}`}>
      <span className="text-2xl mt-0.5">{item.image}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            {mode === 'fixed' && (
              <span className={`text-[9px] font-bold uppercase tracking-wider ${
                isMarketplace ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {isMarketplace ? '⚠️ Marketplace' : '✅ Direct'}
              </span>
            )}
            <p className="text-xs font-semibold text-gray-900 truncate">{item.brand} {item.name}</p>
          </div>
          <p className="text-sm font-bold text-gray-900 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        {mode === 'fixed' && (
          <div className="mt-1 space-y-0.5">
            {isMarketplace ? (
              <>
                <p className="text-[10px] text-red-500">❌ No points · ❌ No coupon</p>
                {item.directAlternative && (
                  <p className="text-[10px] text-blue-500">
                    💡 Available at {item.directAlternative.retailer} — ${item.directAlternative.price.toFixed(2)}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-[10px] text-ulta-gold">⭐ Earn {item.pointsEarned * item.quantity} pts</p>
                <p className="text-[10px] text-green-600">🏷️ 20% coupon: −${(item.price * item.quantity * 0.20).toFixed(2)}</p>
              </>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-1.5 py-0.5">
            <button
              onClick={() => store.updateQuantity(item.id, -1)}
              className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 text-xs font-bold"
            >
              −
            </button>
            <span className="text-xs font-semibold w-3 text-center">{item.quantity}</span>
            <button
              onClick={() => store.updateQuantity(item.id, 1)}
              className="w-5 h-5 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 text-xs font-bold"
            >
              +
            </button>
          </div>
          <button
            onClick={() => store.removeFromCart(item.id)}
            className="text-[10px] text-gray-400 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
