import { TestBed } from '@angular/core/testing';
import { HelpersService } from '@services/index';

describe('HelpersService', (): void => {
  let service: HelpersService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [HelpersService],
    });

    service = TestBed.get(HelpersService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
