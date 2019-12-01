import { TestBed } from '@angular/core/testing';
import { ToastService } from '@services/index';

describe('ToastService', (): void => {
  let service: ToastService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ToastService],
      imports: [],
    });

    service = TestBed.get(ToastService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
