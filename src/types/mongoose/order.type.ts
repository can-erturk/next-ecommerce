import { Document } from 'mongoose';

type OrderItem = {
  product_id: string;
  quantity: number;
};

type Price = {
  subtotal: number;
  shipping: number;
  total: number;
};

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type ShippingInfo = {
  carrier: string;
  tracking_number: string;
  estimated_delivery_date?: string;
  delivery_date?: string;
};

export type OrderType = Document & {
  user_id: string;
  processing?: {
    message: string;
    order: OrderItem[];
    price: Price;
    address: Address;
    shipping: ShippingInfo;
  }[];
  completed?: {
    message: string;
    order: OrderItem[];
    price: Price;
    address: Address;
    shipping: ShippingInfo;
  }[];
};
