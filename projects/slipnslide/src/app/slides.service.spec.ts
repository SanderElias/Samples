import { TestBed } from '@angular/core/testing';

import { SlidesService } from './slides.service';

describe('SlidesService', () => {
  let service: SlidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
