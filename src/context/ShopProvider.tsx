'use client';
import { getUser } from '@/actions/user';
import { UserInfo } from '@/lib/type';
import { useSession } from 'next-auth/react';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface ShopContextProps {
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
  session: unknown;
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  getUserInfo: (email: string) => Promise<void>;
}

export const ShopContext = createContext<ShopContextProps>(
  {} as ShopContextProps
);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [slug, setSlug] = useState<string>('');
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const session = useSession();
  const getUserInfo = async (email: string) => {
    try {
      const user = await getUser(email);
      if (!user) toast.error('Something went wrong! Try again.');
      setUserInfo(user);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (session?.data?.user?.email)
      getUserInfo(session?.data?.user?.email as string);
  }, [session]);

  const values = {
    slug,
    setSlug,
    userInfo,
    setUserInfo,
    getUserInfo,
    session
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};
