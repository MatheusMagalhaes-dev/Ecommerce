// Schemas
import { ProductModel } from '../models';

//Ts
import { IProduct, TQueryPrdocut } from '../ts';

export const ProductRepository = {
  async getProducts(query: TQueryPrdocut) {
    try {
      const conditions: any = {};

      if (query.name) conditions.name = { $regex: query.name, $options: 'i' };
      if (query.price) conditions.price = Number(query.price);
      if (query.stock) conditions.stock = Number(query.stock);

      const products = await ProductModel.find(conditions);

      return products;
    } catch (error) {
      console.error(error);
    }
  },
  async getProduct(id: string) {
    try {
      const product = await ProductModel.findById(id);

      return product;
    } catch (error) {
      console.error(error);
    }
  },
  async createProduct(product: IProduct) {
    try {
      const response = await ProductModel.create(product);

      return response;
    } catch (error) {
      console.error(error);
    }
  },
  async updateProduct(id: string, product: IProduct) {
    try {
      const response = await ProductModel.findByIdAndUpdate(id, product, { new: true });

      return response;
    } catch (error) {
      console.error(error);
    }
  },
  async deleteProduct(id: string) {
    try {
      const response = await ProductModel.findByIdAndDelete(id);

      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
