import { ISpecificationsRepository } from '../repositories/ISpecificationInterface';

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const speficiationAlreadyExists = this.specificationsRepository.findByName(name);

    if (speficiationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export default CreateSpecificationService;
