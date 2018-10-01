import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltertaskviewComponent } from './altertaskview.component';

describe('AltertaskviewComponent', () => {
  let component: AltertaskviewComponent;
  let fixture: ComponentFixture<AltertaskviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltertaskviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltertaskviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
