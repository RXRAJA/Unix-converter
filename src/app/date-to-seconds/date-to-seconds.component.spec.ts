import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToSecondsComponent } from './date-to-seconds.component';

describe('DateToSecondsComponent', () => {
  let component: DateToSecondsComponent;
  let fixture: ComponentFixture<DateToSecondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateToSecondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
