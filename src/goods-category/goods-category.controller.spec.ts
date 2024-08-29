import { Test, TestingModule } from '@nestjs/testing';
import { GoodsCategoryController } from './goods-category.controller';

describe('GoodsCategoryController', () => {
  let controller: GoodsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodsCategoryController],
    }).compile();

    controller = module.get<GoodsCategoryController>(GoodsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
