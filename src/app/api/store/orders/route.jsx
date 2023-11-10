import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Order from "@/lib/mongodb/models/order"

export async function GET(req) {

  await connectMongoDB()

  // Define query params
  const { searchParams } = new URL(req.url)
  const user_id = searchParams.get('user_id')
  const shipping = searchParams.get('shipping')

  // If user_id is not provided
  if (!user_id) {
    return NextResponse.json({ status: 400, message: "user_id is required." })
  }

  // Get orders by user_id
  const orders = await Order.findOne({ user_id })

  // If shipping param is provided get orders by shipping status
  // Else get all orders
  if (shipping) {
    return NextResponse.json(orders[shipping])
  } else {
    return NextResponse.json(orders)
  }
}