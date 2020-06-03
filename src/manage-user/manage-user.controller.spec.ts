import { Test, TestingModule } from '@nestjs/testing';
import { ManageUserController } from './manage-user.controller';

describe('ManageUser Controller', () => {
  let controller: ManageUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageUserController],
    }).compile();

    controller = module.get<ManageUserController>(ManageUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
