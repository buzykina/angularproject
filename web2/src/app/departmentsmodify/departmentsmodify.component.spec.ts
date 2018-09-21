import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsmodifyComponent } from './departmentsmodify.component';

describe('DepartmentsmodifyComponent', () => {
  let component: DepartmentsmodifyComponent;
  let fixture: ComponentFixture<DepartmentsmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
