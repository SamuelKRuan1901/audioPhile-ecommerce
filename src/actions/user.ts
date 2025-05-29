'use server';
import { connectDB } from '@/lib/connectDB';
import { User } from '@/models/User';
import bcryptjs from 'bcryptjs';

export const register = async (email: string, password: string) => {
  await connectDB();

  const user = await User.findOne({ email });
  if (user) return { status: 400, message: 'User already exists' };
  const hashedPassword = await bcryptjs.hash(password, 12);
  const newUser = { email: email, password: hashedPassword };
  try {
    await User.create(newUser);
    return { status: 200, message: 'User registered successfully' };
  } catch (error) {
    throw error;
  }
};
