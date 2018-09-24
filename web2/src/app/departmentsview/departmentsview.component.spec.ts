import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsviewComponent } from './departmentsview.component';

describe('DepartmentsviewComponent', () => {
  let component: DepartmentsviewComponent;
  let fixture: ComponentFixture<DepartmentsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
