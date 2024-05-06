import { Document } from 'mongoose';

export type CategoryType = Document & {
  category_id: string;
  title: string;
  description: string;
  path: string;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
};
