import { model, Schema } from 'mongoose';

//ts
import { IUser } from '../ts';
import { string } from 'zod';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = model('User', UserSchema);
