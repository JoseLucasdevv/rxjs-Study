import { TestBed } from '@angular/core/testing';

import { PersonsGETService } from './persons-get.service';

describe('PersonsGETService', () => {
  let service: PersonsGETService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsGETService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
