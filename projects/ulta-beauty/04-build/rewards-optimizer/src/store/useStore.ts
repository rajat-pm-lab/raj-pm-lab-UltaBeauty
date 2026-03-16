import { createContext, useContext } from 'react';
import type { CartItem, DemoMode, Screen, Category, Product } from '../data/types';

export interface AppState {
  mode: DemoMode;
  screen: Screen;
  activeCategory: Category;
  searchQuery: string;
  cart: CartItem[];
  couponApplied: boolean;
  couponCode: string;
  pointsRedemptionAttempted: boolean;
  rewardsBalance: number;
  showDemoPanel: boolean;
  toast: string | null;
  shakeItems: number[];
}

export interface AppActions {
  setMode: (mode: DemoMode) => void;
  setScreen: (screen: Screen) => void;
  setCategory: (category: Category) => void;
  setSearchQuery: (query: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  applyCoupon: (code: string) => void;
  attemptPointsRedemption: () => void;
  toggleDemoPanel: () => void;
  resetDemo: () => void;
  swapCartItem: (oldId: number, newProduct: Product) => void;
  showToast: (message: string) => void;
}

export type Store = AppState & AppActions;

export const StoreContext = createContext<Store | null>(null);

export function useStore(): Store {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useStore must be used within StoreProvider');
  return store;
}

// Computed values
export function getDirectItems(cart: CartItem[]) {
  return cart.filter(item => item.source === 'ulta_direct');
}

export function getMarketplaceItems(cart: CartItem[]) {
  return cart.filter(item => item.source === 'marketplace');
}

export function getCartTotal(cart: CartItem[]) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getDirectTotal(cart: CartItem[]) {
  return getDirectItems(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getMarketplaceTotal(cart: CartItem[]) {
  return getMarketplaceItems(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCouponSavings(cart: CartItem[]) {
  return getDirectTotal(cart) * 0.20;
}

export function getPointsEarned(cart: CartItem[]) {
  return getDirectItems(cart).reduce((sum, item) => sum + item.pointsEarned * item.quantity, 0);
}

export function getPointsLost(cart: CartItem[]) {
  // Estimate: marketplace items would earn 10 pts per dollar if they were direct
  return getMarketplaceItems(cart).reduce((sum, item) => sum + Math.round(item.price * 10) * item.quantity, 0);
}

export function getCouponSavingsLost(cart: CartItem[]) {
  return getMarketplaceTotal(cart) * 0.20;
}

export function getTotalValueLost(cart: CartItem[]) {
  return getCouponSavingsLost(cart) + getPointsLost(cart) * 0.01;
}
