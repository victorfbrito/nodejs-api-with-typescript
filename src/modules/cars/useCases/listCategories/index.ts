import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import ListCategoryUseCase from './ListCategoriesUseCase';
import ListCategoryController from './ListCategoriesController';

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController, listCategoryUseCase };
