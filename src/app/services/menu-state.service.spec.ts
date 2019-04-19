import { TestBed } from '@angular/core/testing';

import { MenuStateService } from './menu-state.service';

describe('MenuStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuStateService = TestBed.get(MenuStateService);
    expect(service).toBeTruthy();
  });
});
