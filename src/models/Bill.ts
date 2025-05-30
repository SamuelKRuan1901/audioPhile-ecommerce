import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        image: { type: String, required: true },
        productId: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
      }
    ],
    status: { type: String, required: true, default: 'pending' },
    paymentMethod: { type: String, required: true, default: 'cash on delivery' }
  },
  { timestamps: true }
);

export const User =
  (mongoose.models && mongoose.models.Bill) ||
  mongoose.model('User', billSchema);
