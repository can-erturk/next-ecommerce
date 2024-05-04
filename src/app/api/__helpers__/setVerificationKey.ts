import connectDB from '@/config/mongodb/connectDB';
import User from '@models/user.model';
import { sha256 } from './crypter';
import { UserType } from '@/types/mongoose/user.type';

export default async function setVerificationKey(email: string): Promise<{
  status: boolean;
  message: string;
  verificationURL?: string;
}> {
  // Generate verification key
  const key: string = sha256(email + Math.random().toString());

  // Set key expiration date to 10 minutes
  const keyExpires: Date = new Date();
  keyExpires.setMinutes(keyExpires.getMinutes() + 10);

  try {
    await connectDB();
    const user: UserType | null = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return {
        status: false,
        message: 'User not found.',
      };
    }

    // Set verification key
    user.activation.key = key;
    user.activation.keyExpires = keyExpires;
    user.save();

    return {
      status: true,
      message: 'Verification key set successfully.',
      verificationURL: `${process.env.BASE_URL}/verify-email?key=${key}`,
    };

    // Catch any errors
  } catch (error) {
    console.log(error);

    return {
      status: false,
      message: 'Something went wrong while setting verification key.',
    };
  }
}
