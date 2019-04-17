import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingMouseComponent } from './scrolling-mouse.component';

describe('ScrollingMouseComponent', () => {
  let component: ScrollingMouseComponent;
  let fixture: ComponentFixture<ScrollingMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingMouseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
