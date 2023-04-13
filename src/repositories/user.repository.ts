// Schemas
import { UserModel } from '../models';

//Ts
import { IUser } from '../ts';

export const UserRepository = {
  async getUsers() {
    try {
      const users = await UserModel.find();

      return users;
    } catch (error) {
      console.error(error);
    }
  },

  async getUser(id: string) {
    try {
      const user = await UserModel.findById(id);

      return user;
    } catch (error) {
      console.error(error);
    }
  },

  async createUser(user: IUser) {
    try {
      const response = await UserModel.create(user);

      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async updateUser(id: string, user: IUser) {
    try {
      const response = await UserModel.findByIdAndUpdate(id, user, { new: true });

      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async updateUserPassword(id: string, password: string) {
    try {
      const response = await UserModel.findByIdAndUpdate(id, { password }, { new: true });

      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async deleteUser(id: string) {
    try {
      const response = await UserModel.findByIdAndDelete(id);

      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
