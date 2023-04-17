import { z } from 'zod';

export const getUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(20),
    cep: z.string().min(7).max(9),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    cep: z.string().min(7).max(9).optional(),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const updateUserPasswordSchema = z.object({
  body: z.object({
    password: z.string().min(6).max(20),
  }),
  params: z.object({
    id: z.string(),
  }),
});

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
