import { TestBed } from '@angular/core/testing';

import { WordmatchService } from './wordmatch.service';

describe('WordmatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordmatchService = TestBed.get(WordmatchService);
    expect(service).toBeTruthy();
  });
});
