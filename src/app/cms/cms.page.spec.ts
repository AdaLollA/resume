import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPage } from './cms.page';

describe('CmsPage', () => {
  let component: CmsPage;
  let fixture: ComponentFixture<CmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
