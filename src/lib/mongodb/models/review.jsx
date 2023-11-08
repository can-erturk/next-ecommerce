import mongoose, { Schema, models } from "mongoose"

const reviewSchema = new Schema(
  {
    product_id: {
      type: String,
      required: true,
    },
    rating: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const Review = models.Review || mongoose.model("Review", reviewSchema, "reviews")
export default Review