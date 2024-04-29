import connectDB from '@/config/mongodb/connectDB';
import Category from '@models/category.model';
import response from '@helpers/response';
import { NextRequest } from 'next/server';
import { CategoryType } from '@/types/mongoose/category.type';

export async function GET(req: NextRequest) {
  const { searchParams }: URL = new URL(req.url);
  const category_id: string | null = searchParams.get('category_id');
  const path: string | null = searchParams.get('path');

  try {
    await connectDB();

    // Find and return category by id
    if (category_id) {
      const category: CategoryType | null = await Category.findOne({
        category_id,
      });

      if (category) {
        return response({ status: 200, data: category });
      } else {
        return response({ status: 404, message: 'Category not found.' });
      }
    }

    // Find and return category by url path
    if (path) {
      const category: CategoryType | null = await Category.findOne({
        path,
      });

      if (category) {
        return response({ status: 200, data: category });
      } else {
        return response({ status: 404, message: 'Category not found.' });
      }
    }

    // Return all categories
    const categories: CategoryType[] | null = await Category.find({});

    if (categories) {
      return response({ status: 200, data: categories });
    } else {
      return response({ status: 404, message: 'No categories found.' });
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
