import mongoose, { Model, Schema } from 'mongoose';
import { OrderType } from '@/types/mongoose/order.type';

const orderSchema: Schema<OrderType> = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    processing: {
      type: [
        {
          message: String,
          order: {
            product_id: String,
            quantity: Number,
          },
          price: {
            subtotal: Number,
            shipping: Number,
            total: Number,
          },
          address: {
            street: String,
            city: String,
            state: String,
            zip: String,
            country: String,
          },
          shipping: {
            carrier: String,
            tracking_number: String,
            estimated_delivery_date: String,
          },
        },
      ],
      required: false,
    },
    completed: {
      type: [
        {
          message: String,
          order: {
            product_id: String,
            quantity: Number,
          },
          price: {
            subtotal: Number,
            shipping: Number,
            total: Number,
          },
          address: {
            street: String,
            city: String,
            state: String,
            zip: String,
            country: String,
          },
          shipping: {
            carrier: String,
            tracking_number: String,
            delivery_date: String,
          },
        },
      ],
      required: false,
    },
  },
  { timestamps: true },
);

const Order: Model<OrderType> =
  mongoose.models.Order ||
  mongoose.model<OrderType>('Order', orderSchema, 'orders');
export default Order;
