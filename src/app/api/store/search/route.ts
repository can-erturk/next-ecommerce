import connectDB from '@/config/mongodb/connectDB';
import Product from '@models/product.model';
import Category from '@models/category.model';
import response from '@helpers/response';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams }: URL = new URL(req.url);
  const searchQuery: string | null = searchParams.get('q');

  if (!searchQuery) {
    return response({
      status: 400,
      message: 'Search query is required.',
    });
  }

  try {
    await connectDB();

    // Define search criteria for MongoDB query
    const searchCriteria = {
      $or: [
        { title: { $regex: new RegExp(searchQuery, 'i') } },
        { description: { $regex: new RegExp(searchQuery, 'i') } },
      ],
    };

    // Search for results
    const categories = await Category.find(searchCriteria);
    const products = await Product.find(searchCriteria);

    // Sort products by sales
    products.sort((a, b) => {
      return b.performance.sales - a.performance.sales;
    });

    // Return search results
    return response({
      status: 200,
      data: {
        categories,
        products,
      },
    });

    // Catch any errors
  } catch (error) {
    console.error('Search results could not be retrieved:', error);

    return response({
      status: 500,
      message: 'An internal server error. Check server logs for details.',
    });
  }
}
