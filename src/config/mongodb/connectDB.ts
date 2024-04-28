import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export default async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI || '');
  } catch (error) {
    console.error(error);
  }
}
