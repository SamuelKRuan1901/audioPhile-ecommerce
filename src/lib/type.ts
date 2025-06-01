export interface UserInfo {
  name: string;
  _id: string;
  email: string;
  password: string;
  number: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface BillType {
  _id: string;
  userId: string;
  products: ProductType[];
  status: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  _id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
