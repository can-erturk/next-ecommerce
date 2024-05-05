import connectDB from '@/config/mongodb/connectDB';
import { UserType } from '@/types/mongoose/user.type';
import User from '@models/user.model';

export type checkVerificationResponse = {
  status: boolean;
  key?: string;
  keyExpires?: Date;
  message?: string;
};

export default async function checkVerification(
  email: string,
): Promise<checkVerificationResponse> {
  try {
    await connectDB();
    const user: UserType | null = await User.findOne({ email });

    if (!user) {
      return {
        status: false,
        message: 'User not found.',
      };
    }

    return {
      status: user?.activation.status,
      key: user?.activation.key,
      keyExpires: user?.activation.keyExpires,
    };

    // Catch any errors
  } catch (error) {
    console.log(error);

    return {
      status: false,
      message: 'Something went wrong while checking verification.',
    };
  }
}
