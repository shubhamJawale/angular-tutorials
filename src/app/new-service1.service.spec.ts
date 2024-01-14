import { TestBed } from '@angular/core/testing';

import { NewService1Service } from './new-service1.service';

describe('NewService1Service', () => {
  let service: NewService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
