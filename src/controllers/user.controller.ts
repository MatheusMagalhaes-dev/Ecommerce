import { Router, response } from 'express';

//repositores
import { UserRepository } from '../repositories';
import { IUser } from '../ts';
//  Validates
import { validate } from '../middlewares/validate.middleware';
//  Schemas
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  updateUserPasswordSchema,
  deleteUserSchema,
} from '../schemas/user.schemas';

const UserController = Router();

//Pegar todos os usuarios
UserController.get('/', async (req, res) => {
  try {
    const users = await UserRepository.getUsers();

    return res.send(users);
  } catch (error) {
    console.error(error);
  }
});
//Pegar Usuarios por ID
UserController.get('/:id', validate(getUserSchema), async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserRepository.getUser(id);

    return res.send(user);
  } catch (error) {
    console.error(error);
  }
});
//Post do usuario
UserController.post('/', validate(createUserSchema), async (req, res) => {
  try {
    const user: IUser = req.body;

    const response = await UserRepository.createUser(user);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});
//update do user e do id
UserController.put('/:id', validate(updateUserSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const user: IUser = req.body;

    const response = await UserRepository.updateUser(id, user);

    return res.send(response);
  } catch (error) {
    console.error(error);
  }
});
UserController.patch(
  '/:id/password',
  validate(updateUserPasswordSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { password }: IUser = req.body;

      const response = await UserRepository.updateUserPassword(id, password);

      return res.send(response);
    } catch (error) {
      console.error(error);
    }
  }
);
UserController.delete('/:id', validate(deleteUserSchema), async (req, res) => {
  try {
    const { id } = req.params;

    await UserRepository.deleteUser(id);

    return res.send({ message: 'User deleted ' });
  } catch (error) {
    console.error(error);
  }
});

export { UserController };
