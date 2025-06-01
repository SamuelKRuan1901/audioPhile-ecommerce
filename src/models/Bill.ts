import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
      }
    ],
    status: { type: String, required: true, default: 'pending' },
    paymentMethod: { type: String, required: true, default: 'cash on delivery' }
  },
  { timestamps: true }
);

export const Bill =
  (mongoose.models && mongoose.models.Bill) ||
  mongoose.model('Bill', billSchema);
