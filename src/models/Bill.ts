import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
      }
    ],
    checked: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const User =
  (mongoose.models && mongoose.models.Bill) ||
  mongoose.model('User', billSchema);
