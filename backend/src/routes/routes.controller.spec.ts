import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller.js';
import { RoutesService } from './routes.service.js';

describe('RoutesController', () => {
  let controller: RoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutesController],
      providers: [RoutesService],
    }).compile();

    controller = module.get<RoutesController>(RoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
