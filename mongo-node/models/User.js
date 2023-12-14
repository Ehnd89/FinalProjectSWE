import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, min: 8 },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
