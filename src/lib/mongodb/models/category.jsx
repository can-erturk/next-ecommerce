import mongoose, { Schema, models } from "mongoose"

const categorySchema = new Schema(
  {
    category_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const Category = models.Category || mongoose.model("Category", categorySchema, "categories")
export default Category