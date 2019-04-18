import { TestBed } from '@angular/core/testing';

import { SwipeScrollListenService } from './swipe-scroll-listen.service';

describe('SwipeScrollListenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwipeScrollListenService = TestBed.get(SwipeScrollListenService);
    expect(service).toBeTruthy();
  });
});
