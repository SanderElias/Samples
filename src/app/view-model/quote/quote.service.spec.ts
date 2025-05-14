import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteService = TestBed.inject(QuoteService);
    expect(service).toBeTruthy();
  });
});
