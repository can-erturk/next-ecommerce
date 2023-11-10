import { NextResponse } from "next/server"
import connectMongoDB from "@/lib/mongodb"
import Category from "@/lib/mongodb/models/category"

export async function GET(req) {

	await connectMongoDB()

	// Define query params
	const { searchParams } = new URL(req.url)
	const category_id = searchParams.get('category_id')
	const path = searchParams.get('path')

	// Get category by id
	if (category_id) {
		const category = await Category.findOne({ category_id })
		return NextResponse.json(category)
	}

	// Get category by url
	if (path) {
		const category = await Category.findOne({ path })
		return NextResponse.json(category)
	}

	// Get all categories
	const categories = await Category.find({})
	return NextResponse.json(categories)
}