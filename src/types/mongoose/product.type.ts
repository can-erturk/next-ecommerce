import { Document } from 'mongoose';

export type ProductType = Document & {
  product_id: string;
  category_id: string;
  category: string;
  title: string;
  path: string;
  description: string;
  specification?: string[];
  images?: {
    '800x900': string[];
    '320x360': string[];
    '160x180': string[];
  };
  stock: {
    size: string;
    quantity: number;
  }[];
  price: {
    currency: string;
    withoutDiscount: number;
    withDiscount: number;
    discountPercentage: number;
  };
  performance: {
    sales: number;
    ratingAverage: number | null;
    ratingCount: number;
  };
  keywords: string[];
  createdAt: Date;
  updatedAt: Date;
};
