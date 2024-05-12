import { Test, TestingModule } from '@nestjs/testing';
import { RecievedReportsService } from './recieved-reports.service';

describe('RecievedReportsService', () => {
  let service: RecievedReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecievedReportsService],
    }).compile();

    service = module.get<RecievedReportsService>(RecievedReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
