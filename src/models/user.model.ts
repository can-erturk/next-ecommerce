import mongoose, { Model, Schema } from 'mongoose';
import { UserType } from '@/types/mongoose/user.type';

const userSchema: Schema<UserType> = new Schema(
  {
    provider: {
      type: String,
      required: true,
      default: 'credentials',
    },
    activation: {
      type: {
        status: Boolean,
        key: String,
        keyExpires: Date,
      },
      required: true,
      default: {
        status: false,
        key: '',
        keyExpires: new Date(),
      },
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
      default: '/images/default-profile-picture.jpg',
    },
    address: {
      type: Object,
      required: false,
    },
    interestedProducts: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true },
);

const User: Model<UserType> =
  mongoose.models.User || mongoose.model<UserType>('User', userSchema, 'users');
export default User;
