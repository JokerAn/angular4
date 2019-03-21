import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTsLintComponent } from './test-ts-lint.component';

describe('TestTsLintComponent', () => {
  let component: TestTsLintComponent;
  let fixture: ComponentFixture<TestTsLintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTsLintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTsLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
