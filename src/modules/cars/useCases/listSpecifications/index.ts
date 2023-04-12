import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import ListSpecificationUseCase from './ListSpecificationsUseCase';
import ListSpecificationController from './ListSpecificationsController';

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(specificationsRepository);

const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationController, listSpecificationUseCase };
