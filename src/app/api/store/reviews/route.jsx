import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Review from "@/lib/mongodb/models/review"

export async function GET(req) {

  await connectMongoDB()

  // Define query params
  const { searchParams } = new URL(req.url)
  const product_id = searchParams.get('product_id')
  const user_id = searchParams.get('user_id')

  // If no query params
  if (!user_id && !product_id) {
    return NextResponse.json({ status: 400, message: "No query params provided." })
  }

  // Get product reviews
  if (product_id) {
    const review = await Review.findOne({ product_id })
    return NextResponse.json(review)
  }

  // Get user's reviews
  if (user_id) {
    const response = []
    const allReviews = await Review.find({})

    for (const reviews of allReviews) {

      // Find matching reviews
      const matchingReviews = await reviews.rating.find(e => e.user_id === user_id)

      // Skip if no matching reviews
      if (!matchingReviews) continue

      // Destructure product_id from reviews
      const { product_id } = reviews

      // Push matching reviews to response
      response.push({
        product_id,
        ...matchingReviews
      })
    }

    return NextResponse.json(response)
  }
}