import connectDB from '@/config/mongodb/connectDB';
import User from '@models/user.model';
import { isValidObjectId } from 'mongoose';
import response from '@api-helpers/response';
import { NextRequest, NextResponse } from 'next/server';
import { UserType } from '@/types/mongoose/user.type';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams }: URL = new URL(req.url);
  const _id: string | null = searchParams.get('user_id');

  if (!_id) {
    return response({
      status: 400,
      message: 'User ID is required.',
    });
  }

  // Check if _id is not a valid ObjectId
  if (!isValidObjectId(_id)) {
    return response({
      status: 400,
      message: 'Invalid user ID.',
    });
  }

  try {
    await connectDB();
    const user: UserType | null = await User.findOne({ _id });

    if (user) {
      return response({ status: 200, data: user });
    } else {
      return response({ status: 404, message: 'User not found.' });
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
