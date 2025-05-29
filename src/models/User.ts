import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    number: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    zipCode: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const User =
  (mongoose.models && mongoose.models.User) ||
  mongoose.model('User', userSchema);
