import { createContext, useState } from 'react';

interface ShopContextProps {
  slug: string;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
}

export const ShopContext = createContext<ShopContextProps>(
  {} as ShopContextProps
);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [slug, setSlug] = useState('');
  const values = {
    slug,
    setSlug
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};
