import mongoose, { Schema, models } from "mongoose"

const productSchema = new Schema(
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
      type: Array,
      required: false,
    },
    images: {
      type: Object,
      required: true,
    },
    stock: {
      type: Array,
      required: true,
    },
    price: {
      type: Object,
      required: true,
    },
    performance: {
      type: Object,
      required: true,
    },
    keywords: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const Product = models.Product || mongoose.model("Product", productSchema, "products")
export default Product