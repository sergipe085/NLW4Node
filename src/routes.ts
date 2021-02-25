import { Router } from 'express'

import UserController from './database/controllers/UserController'

const routes = Router();

routes.get('/users', UserController.create)

export default routes;