import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerConComponent } from './hacker-con.component';

describe('HackerConComponent', () => {
  let component: HackerConComponent;
  let fixture: ComponentFixture<HackerConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerConComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
