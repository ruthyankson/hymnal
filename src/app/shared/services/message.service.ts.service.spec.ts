import { TestBed } from '@angular/core/testing';

import { MessageServiceTsService } from './message.service.ts.service';

describe('MessageServiceTsService', () => {
  let service: MessageServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
