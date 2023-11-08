import mongoose, { Schema, models } from "mongoose"

const orderSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    processing: {
      type: Array,
      required: false,
    },
    completed: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
)

const Order = models.Order || mongoose.model("Order", orderSchema, "orders")
export default Order