export type CoffeeCategory = 'espresso' | 'milk' | 'cold' | 'tea' | 'bakery' | 'dessert';

export interface CoffeeItem {
  id: string;
  name: string;
  category: CoffeeCategory;
  price: number;
  badge?: string;
  temp: 'hot' | 'iced' | 'both';
  image: string;
  desc: string;
  ingredients: string;
  dietary: string[];
  roast?: string;
}

export interface CartItem {
  uniqueId: string;
  id: string;
  name: string;
  image: string;
  unitPrice: number;
  size: string;
  temp: 'hot' | 'iced';
  milk: string;
  syrup: string;
  extraShot: boolean;
  notes: string;
  quantity: number;
}

export interface OrderTicket {
  orderNumber: string;
  itemCount: number;
  total: number;
  prepTime: string;
  pickupAddress: string;
}
