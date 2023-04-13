import { Request, Response, NextFunction } from 'express';
import type { Schema, ZodError } from 'zod';
//Criando a função validate
export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error) {
      return res.status(400).send((error as ZodError).errors);
    }
  };
