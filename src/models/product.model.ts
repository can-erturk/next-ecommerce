import mongoose, { Model, Schema } from 'mongoose';
import { ProductType } from '@/types/mongoose/product.type';

const productSchema: Schema<ProductType> = new Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    specification: {
      type: [String],
      required: false,
    },
    images: {
      type: Array,
      required: false,
    },
    stock: {
      type: [{ size: String, quantity: Number }],
      required: true,
    },
    price: {
      type: {
        currency: String,
        withoutDiscount: Number,
        withDiscount: Number,
        discountPercentage: Number,
      },
      required: true,
    },
    performance: {
      type: Object,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

const Product: Model<ProductType> =
  mongoose.models.Product ||
  mongoose.model<ProductType>('Product', productSchema, 'products');
export default Product;
