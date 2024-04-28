import mongoose, { Model, Schema } from 'mongoose';
import { CategoryType } from '@/types/mongoose/category.type';

const categorySchema: Schema<CategoryType> = new Schema(
  {
    category_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    products: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

const Category: Model<CategoryType> =
  mongoose.models.Category ||
  mongoose.model<CategoryType>('Category', categorySchema, 'categories');
export default Category;
