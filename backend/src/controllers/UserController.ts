import { Request, Response } from 'express';

const users = [
  { name: 'Nycolas', email: 'nycolassantana@email.com' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  
};