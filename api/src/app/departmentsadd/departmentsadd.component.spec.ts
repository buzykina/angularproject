import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsaddComponent } from './departmentsadd.component';

describe('DepartmentsaddComponent', () => {
  let component: DepartmentsaddComponent;
  let fixture: ComponentFixture<DepartmentsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
