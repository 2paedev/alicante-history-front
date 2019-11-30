import { Renderer } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HideHeaderDirective } from './hide-header.directive';

describe('HideHeaderDirective', (): void => {
  let service: HideHeaderDirective;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [HideHeaderDirective, Renderer],
    });

    service = TestBed.get(HideHeaderDirective);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
