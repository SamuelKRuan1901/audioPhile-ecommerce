'use client';
import {
  AddProductToCart,
  cancelOrder,
  ClearAll,
  completeOrder,
  decreaseProductCountInCart,
  getBills,
  increaseProductCountInCart,
  receivedOrder
} from '@/actions/bill';
import { BillType } from '@/lib/type';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ShopContext } from './ShopProvider';
import { useSession } from 'next-auth/react';

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
  handleCompleteOrder: (userId: string, billId: string) => void;
  handleReceivedOrder: (billId: string) => void;
  handleCancelOrder: (billId: string) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [bills, setBills] = useState<BillType[]>([] as BillType[]);
  const [isLoading, setIsLoading] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const Router = useRouter();
  const session = useSession();
  const { userInfo } = useContext(ShopContext);

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
    if (session.status !== 'authenticated') {
      toast.error('Please login first');
      setIsLoading(false);
      Router.push('/auth/login');
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

  const handleCompleteOrder = async (userId: string, billId: string) => {
    const res = await completeOrder(billId);
    if (res?.status === 400) toast.error(res?.message as string);
    toast.success('Order completed successfully');
    await getBillsInfo(userId);
    Router.push('/profile');
  };

  const handleCancelOrder = async (billId: string) => {
    const res = await cancelOrder(billId);
    if (res?.status === 400) toast.error(res?.message as string);
    toast.success('Order cancelled successfully');
    await getBillsInfo(userInfo._id as string);
  };

  const handleReceivedOrder = async (billId: string) => {
    const res = await receivedOrder(billId);
    if (res?.status === 400) toast.error(res?.message as string);
    toast.success('Order received successfully');
    await getBillsInfo(userInfo._id as string);
  };

  useEffect(() => {
    if (userInfo._id) getBillsInfo(userInfo._id as string);
  }, [userInfo._id]);

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
    decreaseProductCount,
    handleCompleteOrder,
    handleCancelOrder,
    handleReceivedOrder
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
