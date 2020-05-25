import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsToDateComponent } from './seconds-to-date.component';

describe('SecondsToDateComponent', () => {
  let component: SecondsToDateComponent;
  let fixture: ComponentFixture<SecondsToDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondsToDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
