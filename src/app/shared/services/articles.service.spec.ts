import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ArticlesService } from '@services/index';

describe('ArticlesService', (): void => {
  let httpTestingController: HttpTestingController;
  let service: ArticlesService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ArticlesService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ArticlesService);
  });

  afterEach((): void => {
    httpTestingController.verify();
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
