import { ICategoriesRepository } from '../repositories/ICategoryInterface';

interface IRequest {
    name: string
    description: string
}

// Definir o tipo de retorno
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
