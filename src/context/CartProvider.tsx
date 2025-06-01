'use client';
import {
  AddProductToCart,
  ClearAll,
  decreaseProductCountInCart,
  getBills,
  increaseProductCountInCart
} from '@/actions/bill';
import { BillType } from '@/lib/type';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

interface CartContextProps {
  bills: BillType[];
  setBills: React.Dispatch<React.SetStateAction<BillType[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  productCount: number;
  setProductCount: React.Dispatch<React.SetStateAction<number>>;
  handleAddToCart: (
    slug: string,
    productName: string[],
    price: number,
    productCount: number,
    userId: string
  ) => void;
  getBillsInfo: (userId: string) => Promise<void>;
  clearCart: (userId: string) => void;
  increaseProductCount: (productId: string, userId: string) => void;
  decreaseProductCount: (productId: string, userId: string) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [bills, setBills] = useState<BillType[]>([] as BillType[]);
  const [isLoading, setIsLoading] = useState(false);
  const [productCount, setProductCount] = useState(0);

  const handleAddToCart = async (
    slug: string,
    productName: string[],
    price: number,
    productCount: number,
    userId: string
  ) => {
    setIsLoading(true);
    if (productCount < 1) {
      toast.error('Please select at least one product');
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('slug', slug);
    formData.append(
      'name',
      productName.slice(0, productName.length - 1).join(' ')
    );
    formData.append('price', price.toString());
    formData.append('count', productCount.toString());
    formData.append('image', `/cart/image-${slug}.jpg`);
    const res = await AddProductToCart(formData);
    if (res?.status !== 200) {
      toast.error(res?.message);
      setIsLoading(false);
      return;
    }
    setProductCount(0);
    setIsLoading(false);
    toast.success(res?.message);
    await getBillsInfo(userId);
  };

  const getBillsInfo = async (userId: string) => {
    const res = await getBills(userId);
    if (res) {
      setBills(res);
    }
  };

  const clearCart = async (userId: string) => {
    const pendingBill = bills.find((bill) => bill.status === 'pending');
    if (!pendingBill) return;
    const res = await ClearAll(pendingBill._id);
    if (res?.status === 400) toast.error(res?.message as string);
    toast.success(res?.message as string);
    await getBillsInfo(userId);
  };

  const increaseProductCount = async (productId: string, userId: string) => {
    const res = await increaseProductCountInCart(productId, userId);
    if (res?.status === 400) toast.error(res?.message as string);
    await getBillsInfo(userId);
  };

  const decreaseProductCount = async (productId: string, userId: string) => {
    const res = await decreaseProductCountInCart(productId, userId);
    if (res?.status === 400) toast.error(res?.message as string);
    await getBillsInfo(userId);
  };

  const values = {
    bills,
    setBills,
    isLoading,
    setIsLoading,
    productCount,
    setProductCount,
    handleAddToCart,
    getBillsInfo,
    clearCart,
    increaseProductCount,
    decreaseProductCount
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
