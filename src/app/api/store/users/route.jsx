import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import User from "@/lib/mongodb/models/user"

export async function GET(req) {

  await connectMongoDB()

  // Define query params
  const { searchParams } = new URL(req.url)
  const user_id = searchParams.get('user_id')

  // If user_id is not provided
  if (!user_id) {
    return NextResponse.json({ status: 400, message: "user_id is required." })
  }

  // Get user by id
  if (user_id) {
    const user = await User.findOne({ '_id': user_id })
    return NextResponse.json(user)
  }
}