import { Request, Response } from 'express';
import EmailServices from '../services/EmailServices';

const users = [
  { name: 'Nycolas', email: 'nycolassantana@email.com' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailServices();

    emailService.sendMail({
      to: {
        name: 'Nycolas',
        email: 'nycolassananta@email.com'
      },
      message: { subject: 'Bem vindo ao sistema', body: 'Seja bem-vindo'}
    });

    return res.send();
  }
};