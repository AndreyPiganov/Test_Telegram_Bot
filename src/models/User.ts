import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  chatId: number;
  name: string;
}

const UserSchema: Schema = new Schema({
  chatId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
});

export const User = mongoose.model<IUser>('User', UserSchema);
