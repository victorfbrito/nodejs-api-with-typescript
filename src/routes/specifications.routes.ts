import { Router } from 'express';
import SpecificationsRepository from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();
const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRoutes.post('/', (req, res) => {
  createSpecificationController.handle(req, res);
});

specificationsRoutes.get('/', (req, res) => {
  listSpecificationController.handle(req, res);
});

export { specificationsRoutes, specificationsRepository };
