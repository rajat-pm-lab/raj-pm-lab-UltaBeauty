import { useState, useCallback, useRef, type ReactNode } from 'react';
import { StoreContext } from './useStore';
import type { AppState } from './useStore';
import type { Product } from '../data/types';
export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    mode: 'broken',
    screen: 'browse',
    activeCategory: 'all',
    searchQuery: '',
    cart: [],
    couponApplied: false,
    couponCode: '',
    pointsRedemptionAttempted: false,
    rewardsBalance: 12450,
    showDemoPanel: false,
    toast: null,
    shakeItems: [],
  });

  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setState(s => ({ ...s, toast: message }));
    toastTimer.current = setTimeout(() => {
      setState(s => ({ ...s, toast: null }));
    }, 2000);
  }, []);

  const store = {
    ...state,

    setMode: (mode: AppState['mode']) =>
      setState(s => ({ ...s, mode, couponApplied: false, pointsRedemptionAttempted: false, shakeItems: [] })),

    setScreen: (screen: AppState['screen']) =>
      setState(s => ({ ...s, screen })),

    setCategory: (category: AppState['activeCategory']) =>
      setState(s => ({ ...s, activeCategory: category })),

    setSearchQuery: (query: string) =>
      setState(s => ({ ...s, searchQuery: query })),

    addToCart: (product: Product) => {
      setState(s => {
        const existing = s.cart.find(item => item.id === product.id);
        if (existing) {
          return {
            ...s,
            cart: s.cart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        }
        return { ...s, cart: [...s.cart, { ...product, quantity: 1 }] };
      });
      showToast(`Added ${product.name} to cart`);
    },

    removeFromCart: (productId: number) =>
      setState(s => ({ ...s, cart: s.cart.filter(item => item.id !== productId) })),

    updateQuantity: (productId: number, delta: number) =>
      setState(s => ({
        ...s,
        cart: s.cart
          .map(item =>
            item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
          )
          .filter(item => item.quantity > 0),
      })),

    applyCoupon: (code: string) => {
      setState(s => {
        const marketplaceIds = s.cart
          .filter(item => item.source === 'marketplace')
          .map(item => item.id);
        return {
          ...s,
          couponApplied: true,
          couponCode: code,
          shakeItems: marketplaceIds,
        };
      });
      // Clear shake after animation
      setTimeout(() => setState(s => ({ ...s, shakeItems: [] })), 500);
    },

    attemptPointsRedemption: () =>
      setState(s => ({ ...s, pointsRedemptionAttempted: true })),

    toggleDemoPanel: () =>
      setState(s => ({ ...s, showDemoPanel: !s.showDemoPanel })),

    resetDemo: () =>
      setState({
        mode: 'broken',
        screen: 'browse',
        activeCategory: 'all',
        searchQuery: '',
        cart: [],
        couponApplied: false,
        couponCode: '',
        pointsRedemptionAttempted: false,
        rewardsBalance: 12450,
        showDemoPanel: false,
        toast: null,
        shakeItems: [],
      }),

    showToast,
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}
