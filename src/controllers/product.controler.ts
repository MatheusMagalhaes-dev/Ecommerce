import { Router, response } from 'express';

//Repositories
import { ProductRepository } from '../repositories';

//Middle
import { validate } from '../middlewares/validate.middleware';

//TS
import { IProduct, TQueryPrdocut } from '../ts';

// Schemas
import {
  getProductSchema,
  createProductSchema,
  deleteProductSchema,
  updateProductSchema,
  getProductsSchema,
} from '../schemas';

const ProductController = Router();

ProductController.get('/', validate(getProductsSchema), async (req, res) => {
  try {
    /*Todos os campos opcionais*/
    const query: TQueryPrdocut = req.query;

    const products = await ProductRepository.getProducts(query);

    return res.send(products);
  } catch (error) {
    console.error(error);
  }
});
//Pegar Usuarios por ID
ProductController.get('/:id', validate(getProductSchema), async (req, res) => {
  try {
    const { id } = req.params;

    const Product = await ProductRepository.getProduct(id);

    return res.send(Product);
  } catch (error) {
    console.error(error);
  }
});
//Post do usuario
ProductController.post('/', validate(createProductSchema), async (req, res) => {
  try {
    const Product: IProduct = req.body;

    const response = await ProductRepository.createProduct(Product);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});
//update do Product e do id
ProductController.put('/:id', validate(updateProductSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const Product: IProduct = req.body;

    const response = await ProductRepository.updateProduct(id, Product);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});
ProductController.delete('/:id', validate(getProductSchema), async (req, res) => {
  try {
    const { id } = req.params;

    await ProductRepository.deleteProduct(id);

    return res.send({ message: 'Product deleted ' });
  } catch (error) {
    console.error(error);
  }
});

export { ProductController };
