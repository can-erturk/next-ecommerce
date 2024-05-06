import connectDB from '@/config/mongodb/connectDB';
import User from '@/models/user.model';
import { UserType } from '@/types/mongoose/user.type';
import bcrypt from 'bcryptjs';

export default function authorize(credentials: any) {
  return new Promise<any>(async (resolve, reject) => {
    // Destructure credentials
    const { usernameOrEmail, password } = credentials as {
      usernameOrEmail: string;
      password: string;
    };

    try {
      await connectDB();

      // Find user by email or username
      const user: UserType | null = await User.findOne({
        $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      });

      if (!user) {
        return reject(new Error('User not found.'));
      }

      // Compare password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return reject(new Error('You entered an incorrect password.'));
      }

      // Check if email is verified
      if (!user.activation.status) {
        return reject(new Error('Your email is not verified.'));
      }

      // If other checks pass, resolve with user object
      resolve({
        _id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
      });
    } catch (error) {
      reject(error);
    }
  });
}
