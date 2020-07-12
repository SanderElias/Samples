import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteService = TestBed.get(QuoteService);
    expect(service).toBeTruthy();
  });
});
