import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmodifyComponent } from './taskmodify.component';

describe('TaskmodifyComponent', () => {
  let component: TaskmodifyComponent;
  let fixture: ComponentFixture<TaskmodifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmodifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
