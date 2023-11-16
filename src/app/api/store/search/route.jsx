import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Product from "@/lib/mongodb/models/product"
import Category from "@/lib/mongodb/models/category"
import Collection from "@/lib/mongodb/models/collection"

export async function GET(req, res) {

  await connectMongoDB()

  // Define search query
  const { searchParams } = new URL(req.url)
  const searchQuery = searchParams.get('q')

  // Define search config
  // This will search for the exact word in the given string
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  const searchConfig = {
    $regex: new RegExp(`\\b${searchQuery}\\b`),
    $options: 'i'
  }

  // Define search criteria for MongoDB query
  const searchCriteria = {
    $or: [
      { title: searchConfig },
      { description: searchConfig }
    ]
  }

  // Search for results
  const categories = await Category.find(searchCriteria)
  const collections = await Collection.find(searchCriteria)
  const products = await Product.find(searchCriteria)

  // Result processor function
  const processResult = (result) => ({
    id: result._id,
    title: result.title,
    path: result.path
  })

  // Define result object
  let result = {}

  // Process results
  result.categories = categories.map(processResult)
  result.collections = collections.map(processResult)
  result.products = products.map(processResult)

  return NextResponse.json(result)
}
