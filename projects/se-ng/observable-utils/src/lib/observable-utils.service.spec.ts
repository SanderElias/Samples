import { TestBed } from '@angular/core/testing';

import { ObservableUtilsService } from './observable-utils.service';

describe('ObservableUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableUtilsService = TestBed.get(ObservableUtilsService);
    expect(service).toBeTruthy();
  });
});
