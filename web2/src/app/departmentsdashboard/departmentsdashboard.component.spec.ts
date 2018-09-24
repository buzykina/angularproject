import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsdashboardComponent } from './departmentsdashboard.component';

describe('DepartmentsdashboardComponent', () => {
  let component: DepartmentsdashboardComponent;
  let fixture: ComponentFixture<DepartmentsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
