import { Router } from 'express';

import UserController from '../controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);

routes.get('/', (req, res) => {
  return res.send('Hello World');
})

export default routes;