import { IProduct } from '../interfaces';

export type TQueryPrdocut = Partial<
  Omit<IProduct, '_id' | 'description' | 'createdAt' | 'updatedAt'>
>;
