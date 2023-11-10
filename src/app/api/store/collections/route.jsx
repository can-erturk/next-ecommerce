import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Collection from "@/lib/mongodb/models/collection"

export async function GET(req) {

  await connectMongoDB()

  // Define query params
  const { searchParams } = new URL(req.url)
  const collection_id = searchParams.get('collection_id')
  const path = searchParams.get('path')

  // Get collection by id
  if (collection_id) {
    const collection = await Collection.findOne({ collection_id })
    return NextResponse.json(collection)
  }

  // Get collection by url
  if (path) {
    const collection = await Collection.findOne({ path })
    return NextResponse.json(collection)
  }

  // Get all collections
  const collections = await Collection.find({})
  return NextResponse.json(collections)
}