import Category from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoryInterface';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name, this);
    throw new Error('Method not implemented.');
  }

  list(): Category[] {
    console.log(this);
    return null;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description, this);
  }
}

export default PostgresCategoriesRepository;
