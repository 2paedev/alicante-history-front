import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';
import { StorageService } from '@services/index';

const STORAGE_IONIC_MOCK: any = {
  get: () => new Promise<any>(resolve => resolve('Asdadsa123das!')),
};
describe('StorageService', (): void => {
  let service: StorageService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: Storage, useValue: STORAGE_IONIC_MOCK },
      ],
    });

    service = TestBed.get(StorageService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
