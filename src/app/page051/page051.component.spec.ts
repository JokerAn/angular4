import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page051Component } from './page051.component';

describe('Page051Component', () => {
  let component: Page051Component;
  let fixture: ComponentFixture<Page051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
