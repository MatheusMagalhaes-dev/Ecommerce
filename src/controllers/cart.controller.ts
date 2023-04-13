import { Router, response } from 'express';

//repositories
import { CartRepository } from '../repositories';

//middlewares
import { validate } from '../middlewares/validate.middleware';

//ts
import { ICart } from '../ts';

//schemas
import {
  createCartSchema,
  deleteCartSchema,
  updateCartSchema,
  getCartSchema,
} from '../schemas/carts.schema';

const CartController = Router();

CartController.get('/:userId', validate(getCartSchema), async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await CartRepository.getCart(userId);

    return res.send(cart);
  } catch (error) {
    console.error(error);
  }
});

CartController.post('/', validate(createCartSchema), async (req, res) => {
  try {
    const data: ICart = req.body;

    const response = await CartRepository.createCart(data);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});

CartController.put('/:userId', validate(updateCartSchema), async (req, res) => {
  try {
    const { userId } = req.params;
    const data: ICart = req.body;

    const response = await CartRepository.updateCart(userId, data);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});

CartController.delete('/:userId', validate(deleteCartSchema), async (req, res) => {
  try {
    const { userId } = req.params;

    await CartRepository.deleteCart(userId);

    return res.send();
  } catch (error) {
    console.error(error);
  }
});

export { CartController };
