import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeesview1Component } from './employeesview1.component';

describe('Employeesview1Component', () => {
  let component: Employeesview1Component;
  let fixture: ComponentFixture<Employeesview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employeesview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employeesview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
