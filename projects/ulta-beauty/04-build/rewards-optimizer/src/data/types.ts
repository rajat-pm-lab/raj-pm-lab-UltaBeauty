export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'fragrance';
  price: number;
  image: string;
  source: 'ulta_direct' | 'marketplace';
  pointsEarned: number;
  couponEligible: boolean;
  gwpEligible: boolean;
  rating: number;
  reviewCount: number;
  directAlternative?: {
    retailer: string;
    url: string;
    price: number;
    pointsProgram?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export type DemoMode = 'broken' | 'fixed';
export type Screen = 'browse' | 'cart';
export type Category = 'all' | 'skincare' | 'makeup' | 'haircare' | 'fragrance';
