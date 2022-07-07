import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaloginComponent } from './telalogin.component';

describe('TelaloginComponent', () => {
  let component: TelaloginComponent;
  let fixture: ComponentFixture<TelaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
