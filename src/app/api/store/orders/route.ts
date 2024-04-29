import connectDB from '@/config/mongodb/connectDB';
import Order from '@models/order.model';
import response from '@helpers/response';
import { NextRequest } from 'next/server';
import { OrderType } from '@/types/mongoose/order.type';

export async function GET(req: NextRequest) {
  const { searchParams }: URL = new URL(req.url);
  const user_id: string | null = searchParams.get('user_id');

  if (!user_id) {
    return response({ status: 400, message: 'User ID is required.' });
  }

  try {
    // Find orders by user_id
    await connectDB();
    const orders: OrderType | null = await Order.findOne({ user_id });

    if (orders) {
      return response({ status: 200, data: orders });
    } else {
      return response({ status: 404, message: 'No orders found.' });
    }

    // Catch any errors
  } catch (error) {
    console.error('Search results could not be retrieved:', error);

    return response({
      status: 500,
      message: 'An internal server error. Check server logs for details.',
    });
  }
}
