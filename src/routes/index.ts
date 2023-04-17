import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const router = Router();

//start here
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export default router;
