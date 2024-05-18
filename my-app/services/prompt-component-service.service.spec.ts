import { TestBed } from '@angular/core/testing';

import { PromptComponentServiceService } from './prompt-component-service.service';

describe('PromptComponentServiceService', () => {
  let service: PromptComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
