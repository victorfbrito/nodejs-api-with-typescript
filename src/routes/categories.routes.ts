import { Router } from 'express';

import Category from '../model/Category';

const categoriesRoutes = Router();
const categoriesRoutes2 = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return res.status(201).json(category);
});

categoriesRoutes.get('/', (req, res) => res.status(200).json(categories));

export { categoriesRoutes, categoriesRoutes2 };
