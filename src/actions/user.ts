'use server';
import { connectDB } from '@/lib/connectDB';
import { UserInfo } from '@/lib/type';
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

export const getUser = async (email: string) => {
  await connectDB();
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) return { status: 400, message: 'User not found' };
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async (FormData: FormData) => {
  console.log(FormData);
  const email = FormData.get('email') as string;
  const name = FormData.get('name') as string;
  const number = FormData.get('number') as string;
  const address = FormData.get('address') as string;
  const city = FormData.get('city') as string;
  const country = FormData.get('country') as string;
  const zipCode = FormData.get('zipCode') as string;
  await connectDB();
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, number, address, city, country, zipCode }
    ).lean();
    if (!user) return { status: 400, message: 'User not found' };
    return { status: 200, message: 'User updated successfully' };
  } catch (error) {
    throw error;
  }
};

export const ChangePassword = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const currentPassword = formData.get('currentPassword') as string;
  const newPassword = formData.get('newPassword') as string;
  await connectDB();
  try {
    const user = (await User.findOne({ email }).lean()) as unknown as UserInfo;
    if (!user) return { status: 400, message: 'User not found' };
    const passwordOk = bcryptjs.compareSync(currentPassword, user.password);
    if (!passwordOk) return { status: 400, message: 'Incorrect password' };
    const hashedPassword = await bcryptjs.hash(newPassword, 12);
    await User.findOneAndUpdate({ email }, { password: hashedPassword }).lean();
    return { status: 200, message: 'Password changed successfully' };
  } catch (error) {
    throw error;
  }
};
