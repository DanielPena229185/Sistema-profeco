import { Test, TestingModule } from '@nestjs/testing';
import { MultaService } from './multa.service';

describe('MultaService', () => {
  let service: MultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultaService],
    }).compile();

    service = module.get<MultaService>(MultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
