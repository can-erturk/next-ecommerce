import connectMongoDB from "@/lib/mongodb"
import User from "@/lib/mongodb/models/user"
import bcrypt from "bcryptjs"
import response from "@/lib/helpers/response"
import { emailRegex } from "@/lib/helpers/regex"

const responses = {
  success: { status: 201, message: "User successfully registered." },
  emptyFields: { status: 400, message: "Email and password fields are required." },
  invalidEmail: { status: 400, message: "Email is invalid." },
  userExists: { status: 400, message: "User already exists." },
  privacyPolicy: { status: 400, message: "You must accept the privacy policy." },
}

export async function POST(request) {

  const { email, password, privacyPolicy } = await request.json()

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10)

  // If email or password are empty
  if (email === "" || password === "") {
    return response(responses.emptyFields)
  }

  // If email is invalid
  if (!emailRegex.test(email)) {
    return response(responses.invalidEmail)
  }

  // If privacy policy is not accepted
  if (privacyPolicy !== "on") {
    return response(responses.privacyPolicy)
  }

  try {
    await connectMongoDB()

    // Check if user exists
    const isUserExists = await User.findOne({ email })

    // If user exists
    if (isUserExists !== null) {
      return response(responses.userExists)
    }

    // Save user to database if user doesn't exist
    await User.create({ email, password: hashedPassword })

    // Return success message
    return response(responses.success)

  } catch (error) {
    return response({ status: 500, message: error?.message })
  }
}