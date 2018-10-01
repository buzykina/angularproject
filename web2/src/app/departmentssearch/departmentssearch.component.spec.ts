import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentssearchComponent } from './departmentssearch.component';

describe('DepartmentssearchComponent', () => {
  let component: DepartmentssearchComponent;
  let fixture: ComponentFixture<DepartmentssearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentssearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
