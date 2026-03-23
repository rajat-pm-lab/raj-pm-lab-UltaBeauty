import { useStore } from '../store/useStore';

export function Header() {
  const { rewardsBalance, cart, setScreen, screen } = useStore();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {screen !== 'browse' && (
            <button
              onClick={() => setScreen('browse')}
              className="text-gray-600 hover:text-black mr-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <button onClick={() => setScreen('browse')} className="hover:opacity-80">
            <h1 className="text-lg font-bold tracking-[2px] text-black uppercase">
              ULTA BEAUTY
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-ulta-gold">
            ⭐ {rewardsBalance.toLocaleString()} pts (${(rewardsBalance * 0.01).toFixed(2)})
          </span>
          <button
            onClick={() => setScreen('cart')}
            className="relative text-gray-700 hover:text-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-ulta-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
