import { useStore, getPointsLost, getCouponSavingsLost, getTotalValueLost, getMarketplaceItems } from '../store/useStore';

export function DemoPanel() {
  const { mode, setMode, showDemoPanel, toggleDemoPanel, resetDemo, cart } = useStore();

  const pointsLost = getPointsLost(cart);
  const couponLost = getCouponSavingsLost(cart);
  const totalLost = getTotalValueLost(cart);
  const marketplaceCount = getMarketplaceItems(cart).length;

  return (
    <>
      {/* Floating toggle pill */}
      <button
        onClick={toggleDemoPanel}
        className={`fixed top-3 right-3 z-50 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border-2 transition-all btn-press ${
          mode === 'broken'
            ? 'bg-red-50 border-red-300 text-red-700'
            : 'bg-green-50 border-green-300 text-green-700'
        }`}
      >
        {mode === 'broken' ? '🔴 Broken' : '✅ Fixed'}
        <span className="ml-1 opacity-60">▼</span>
      </button>

      {/* Expanded panel */}
      {showDemoPanel && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={toggleDemoPanel} />
          <div className="fixed top-12 right-3 z-50 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-3">🎮 Demo Mode</h3>

              {/* Toggle */}
              <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-4">
                <button
                  onClick={() => setMode('broken')}
                  className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                    mode === 'broken'
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  🔴 Broken
                  <span className="block text-[10px] font-normal opacity-80">Current Ulta</span>
                </button>
                <button
                  onClick={() => setMode('fixed')}
                  className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                    mode === 'fixed'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  ✅ Fixed
                  <span className="block text-[10px] font-normal opacity-80">With Optimizer</span>
                </button>
              </div>

              {/* Impact stats */}
              {marketplaceCount > 0 && (
                <div className="mb-4">
                  <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    This Cart's Impact
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Points at risk</span>
                      <span className="font-semibold text-red-600">
                        {pointsLost.toLocaleString()} pts (${(pointsLost * 0.01).toFixed(2)})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Coupon savings lost</span>
                      <span className="font-semibold text-red-600">${couponLost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-100 pt-1.5">
                      <span className="text-gray-700 font-medium">Total left on table</span>
                      <span className="font-bold text-red-600">${totalLost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* At Ulta Scale */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  At Ulta Scale
                </h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <p>46.7M loyalty members affected</p>
                  <p className="font-semibold text-gray-800">$50M–$125M marketplace GMV at risk</p>
                  <p className="text-[10px] text-gray-400 mt-1">Source: FY2025 earnings + review data</p>
                </div>
              </div>

              <button
                onClick={resetDemo}
                className="w-full py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 btn-press"
              >
                Reset Demo
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
