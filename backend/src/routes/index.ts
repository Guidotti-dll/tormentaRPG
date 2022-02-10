import { Router } from 'express';
import UsersController from '../app/controllers/UsersController';

const routes = Router();


routes.post('/users', UsersController.create);


routes.get('/', (request, response) => (
  response.json(({message: 'ola'}))
));

export default routes;
