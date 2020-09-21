import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTest1Component } from './app-test1.component';

describe('AppTest1Component', () => {
  let component: AppTest1Component;
  let fixture: ComponentFixture<AppTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
