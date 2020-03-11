import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsElementComponent } from './cms-element.component';

describe('CmsElementComponent', () => {
  let component: CmsElementComponent;
  let fixture: ComponentFixture<CmsElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
