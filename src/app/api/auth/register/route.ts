import { NextRequest } from 'next/server';
import connectDB from '@/config/mongodb/connectDB';
import User from '@models/user.model';
import bcrypt from 'bcryptjs';
import response from '@helpers/response';
import { UserType } from '@/types/mongoose/user.type';
import { emailRegex } from '@/lib/utils/regex';

export async function POST(req: NextRequest) {
  const { name, username, email, password, privacyPolicy } = await req.json();

  if (!name || !email || !username || !password) {
    return response({
      status: 400,
      message: 'All fields are required.',
    });
  }

  if (privacyPolicy !== 'on') {
    return response({
      status: 400,
      message: 'You must accept the privacy policy.',
    });
  }

  // Check if email is valid
  if (!emailRegex.test(email)) {
    return response({ status: 400, message: 'Email is invalid.' });
  }

  try {
    await connectDB();

    // Check if user exists
    const isUserExists: UserType | null = await User.findOne({
      $or: [{ email }, { username }],
    });

    // If user exists
    if (isUserExists !== null) {
      return response({
        status: 400,
        message: 'This email or username is already in use.',
      });
    }

    // Hash the password
    const hashedPassword: string = await bcrypt.hash(password, 10);

    // Save user to database
    const userCreation: UserType | null = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      activation: {
        status: false,
        key: '',
        keyExpires: new Date(),
      },
    });

    // If user creation fails
    if (!userCreation) {
      return response({
        status: 500,
        message: 'Failed to create user.',
      });
    }

    return response({
      status: 201,
      message: 'You have successfully registered.',
    });
  } catch (error: any) {
    return response({ status: 500, message: error?.message });
  }
}
