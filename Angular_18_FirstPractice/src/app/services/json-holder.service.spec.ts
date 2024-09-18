import { TestBed } from '@angular/core/testing';

import { JsonHolderService } from './json-holder.service';

describe('JsonHolderService', () => {
  let service: JsonHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
