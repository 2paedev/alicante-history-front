import { TestBed } from '@angular/core/testing';
import { StorageService } from '@services/index';

describe('StorageService', (): void => {
  let service: StorageService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [StorageService],
    });

    service = TestBed.get(StorageService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
