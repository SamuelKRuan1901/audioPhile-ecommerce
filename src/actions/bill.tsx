'use server';
import { connectDB } from '@/lib/connectDB';
import { ProductType } from '@/lib/type';
import { Bill } from '@/models/Bill';

export const getBills = async (id: string) => {
  await connectDB();
  const bills = await Bill.find({ userId: id }).lean();

  if (!bills) return [];
  return JSON.parse(JSON.stringify(bills));
};

export const AddProductToCart = async (formData: FormData) => {
  await connectDB();
  const userId = formData.get('userId') as string;
  const slug = formData.get('slug') as string;
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;
  const quantity = formData.get('count') as string;
  const image = formData.get('image') as string;

  const pendingBill = await Bill.find({ userId, status: 'pending' }).lean();

  if (!pendingBill) return { status: 400, message: 'Bill not found' };

  if (pendingBill.length === 0) {
    const newBill = new Bill({
      userId,
      products: [
        {
          slug: slug,
          name: name,
          image: image,
          price: price,
          quantity: quantity
        }
      ]
    });
    await newBill.save();
    return { status: 200, message: 'Product added to cart successfully' };
  }

  if (pendingBill[0].products.length > 0) {
    const productExists = pendingBill[0].products.find(
      (product: ProductType) => product.slug === slug
    );
    if (productExists) {
      pendingBill[0].products.find((product: ProductType) => {
        if (product.slug === slug) {
          product.quantity += Number(quantity);
        }
      });
      console.log(pendingBill[0].products);

      await Bill.findOneAndUpdate(
        { userId, status: 'pending' },
        {
          $set: {
            products: pendingBill[0].products
          }
        }
      ).lean();

      return { status: 200, message: 'Product added to cart successfully' };
    }

    pendingBill[0].products.push({
      slug: slug,
      name: name,
      image: image,
      price: price,
      quantity: quantity
    });
    await Bill.findOneAndUpdate(
      { userId, status: 'pending' },
      {
        $set: {
          products: pendingBill[0].products
        }
      }
    ).lean();

    return { status: 200, message: 'Product added to cart successfully' };
  }
};

export const ClearAll = async (id: string) => {
  await connectDB();
  try {
    await Bill.deleteOne({ _id: id, status: 'pending' }).lean();
    return { status: 200, message: 'Cart cleared successfully' };
  } catch (error) {
    return { status: 400, message: error };
  }
};

export const increaseProductCountInCart = async (
  id: string,
  userId: string
) => {
  await connectDB();
  try {
    const pendingBill = await Bill.find({ userId, status: 'pending' }).lean();
    if (!pendingBill) return { status: 400, message: 'Bill not found' };
    const products = pendingBill[0].products;
    const productExists = products.find(
      (product: ProductType) => product._id.toString() === id
    );

    if (productExists) {
      pendingBill[0].products.find((product: ProductType) => {
        if (product._id.toString() === id) {
          product.quantity += 1;
        }
      });
      console.log(pendingBill[0].products);
      await Bill.findOneAndUpdate(
        { userId, status: 'pending' },
        {
          $set: {
            products: pendingBill[0].products
          }
        }
      ).lean();

      return { status: 200, message: 'Product added to cart successfully' };
    }
  } catch (error) {
    return { status: 400, message: error };
  }
};

export const decreaseProductCountInCart = async (
  id: string,
  userId: string
) => {
  await connectDB();
  try {
    const pendingBill = await Bill.find({ userId, status: 'pending' }).lean();
    if (!pendingBill) return { status: 400, message: 'Bill not found' };
    const products = pendingBill[0].products;
    if (products.length === 1) {
      await Bill.findOneAndDelete({
        userId,
        status: 'pending'
      }).lean();
      return {
        status: 200,
        message: 'Product removed from cart successfully'
      };
    }
    const productExists = products.find(
      (product: ProductType) => product._id.toString() === id
    );
    if (productExists) {
      if (productExists.quantity === 1) {
        pendingBill[0].products = pendingBill[0].products.filter(
          (product: ProductType) => product._id.toString() !== id
        );
        await Bill.findOneAndUpdate(
          { userId, status: 'pending' },
          {
            $set: {
              products: pendingBill[0].products
            }
          }
        ).lean();

        return {
          status: 200,
          message: 'Product removed from cart successfully'
        };
      }
      pendingBill[0].products.find((product: ProductType) => {
        if (product._id.toString() === id) {
          product.quantity -= 1;
        }
      });
      console.log(pendingBill[0].products);
      await Bill.findOneAndUpdate(
        { userId, status: 'pending' },
        {
          $set: {
            products: pendingBill[0].products
          }
        }
      ).lean();

      return { status: 200, message: 'Product added to cart successfully' };
    }
  } catch (error) {
    return { status: 400, message: error };
  }
};

export const completeOrder = async (billId: string) => {
  await connectDB();
  try {
    await Bill.findOneAndUpdate(
      { _id: billId, status: 'pending' },
      {
        $set: {
          status: 'delivering'
        }
      }
    ).lean();
    return { status: 200, message: 'Order completed successfully' };
  } catch (error) {
    return { status: 400, message: error };
  }
};
