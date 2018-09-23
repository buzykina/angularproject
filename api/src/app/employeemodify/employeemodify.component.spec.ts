import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemodifyComponent } from './employeemodify.component';

describe('EmployeemodifyComponent', () => {
  let component: EmployeemodifyComponent;
  let fixture: ComponentFixture<EmployeemodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
