import { Router } from 'express';
import CategoriesRepository from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post('/', (req, res) => createCategoryController.handle(req, res));

categoriesRoutes.get('/', (req, res) => listCategoryController.handle(req, res));

export { categoriesRoutes, categoriesRepository };
