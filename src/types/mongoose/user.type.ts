import { Document } from 'mongoose';

export type UserType = Document & {
  provider: string;
  activation: {
    status: string;
    code: string;
  };
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  interestedProducts?: string[];
  createdAt: Date;
  updatedAt: Date;
};
