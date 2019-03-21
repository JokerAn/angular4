import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page052Component } from './page052.component';

describe('Page052Component', () => {
  let component: Page052Component;
  let fixture: ComponentFixture<Page052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
