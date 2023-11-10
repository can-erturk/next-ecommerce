import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Product from "@/lib/mongodb/models/product"

export async function GET(req) {

  await connectMongoDB()

  // Define query params
  const { searchParams } = new URL(req.url)
  const product_id = searchParams.get('product_id')
  const path = searchParams.get('path')

  // Get product by id
  if (product_id) {
    const product = await Product.findOne({ product_id })
    return NextResponse.json(product)
  }

  // Get product by url
  if (path) {
    const product = await Product.findOne({ path })
    return NextResponse.json(product)
  }

  // Get all products
  const products = await Product.find({})
  return NextResponse.json(products)
}