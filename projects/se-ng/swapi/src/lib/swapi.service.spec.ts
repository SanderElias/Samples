import { TestBed } from '@angular/core/testing';

import { SwapiService } from './swapi.service';

describe('SwapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiService = TestBed.inject(SwapiService);
    expect(service).toBeTruthy();
  });
});
