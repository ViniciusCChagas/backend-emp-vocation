import Router from 'express-promise-router';
import { employeesRoutes } from './employees.routes';
import { vocationsRoutes } from './vocations.routes';

const mainRouter = Router();

mainRouter.use('/employee', employeesRoutes);

mainRouter.use('/vocation', vocationsRoutes);

export { mainRouter };
