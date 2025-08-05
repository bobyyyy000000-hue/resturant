export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients?: string[];
  spicy?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  orderDate: Date;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
}