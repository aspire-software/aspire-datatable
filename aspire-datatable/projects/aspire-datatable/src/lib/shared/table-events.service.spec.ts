import { TestBed } from '@angular/core/testing';

import { TableEventsService } from './table-events.service';

describe('TableEventsService', () => {
  let service: TableEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
