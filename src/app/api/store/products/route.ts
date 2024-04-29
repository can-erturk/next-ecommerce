import connectDB from '@/config/mongodb/connectDB';
import Product from '@models/product.model';
import response from '@helpers/response';
import { NextRequest } from 'next/server';
import { ProductType } from '@/types/mongoose/product.type';

export async function GET(req: NextRequest) {
  const { searchParams }: URL = new URL(req.url);
  const path: string | null = searchParams.get('path');
  const product_id: string | null = searchParams.get('product_id');
  const category_id: string | null = searchParams.get('category_id');

  try {
    await connectDB();

    // Get product by product_id or path and return it
    if (product_id || path) {
      const product: ProductType | null = await Product.findOne({
        $or: [{ product_id }, { path }],
      });

      if (product) {
        return response({ status: 200, data: product });
      } else {
        return response({ status: 404, message: 'Product not found.' });
      }
    }

    // Get all products or by category_id and return them
    const products: Array<ProductType> | null = await Product.find(
      category_id ? { category_id } : {},
    );

    if (products && products.length > 0) {
      return response({ status: 200, data: products });
    } else {
      return response({ status: 404, message: 'No products found.' });
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
