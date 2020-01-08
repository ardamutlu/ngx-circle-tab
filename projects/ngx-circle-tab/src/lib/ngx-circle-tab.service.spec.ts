import { TestBed } from '@angular/core/testing';

import { NgxCircleTabService } from './ngx-circle-tab.service';

describe('NgxCircleTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCircleTabService = TestBed.get(NgxCircleTabService);
    expect(service).toBeTruthy();
  });
});
