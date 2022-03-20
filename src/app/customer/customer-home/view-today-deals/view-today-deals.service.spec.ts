import { TestBed } from '@angular/core/testing';

import { ViewTodayDealsService } from './view-today-deals.service';

describe('ViewTodayDealsService', () => {
  let service: ViewTodayDealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTodayDealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
