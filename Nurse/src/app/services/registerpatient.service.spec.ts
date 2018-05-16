import { TestBed, inject } from '@angular/core/testing';

import { RegisterpatientService } from './registerpatient.service';

describe('RegisterpatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterpatientService]
    });
  });

  it('should be created', inject([RegisterpatientService], (service: RegisterpatientService) => {
    expect(service).toBeTruthy();
  }));
});
