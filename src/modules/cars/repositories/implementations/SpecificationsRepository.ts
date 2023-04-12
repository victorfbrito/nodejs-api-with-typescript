import Specification from '../../model/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationInterface';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  // SINGLETON INSTANCE
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name, description, created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (spec) => spec.name === name,
    );
    return specification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export default SpecificationsRepository;
