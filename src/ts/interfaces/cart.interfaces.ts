import { IProduct } from './product.interface';

export interface ICart {
  user: Object | string;
  products: [
    {
      product: IProduct;
      quantity: number;
    }
  ];
}
