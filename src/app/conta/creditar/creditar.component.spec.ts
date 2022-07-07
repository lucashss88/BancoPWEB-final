import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditarComponent } from './creditar.component';

describe('CreditarComponent', () => {
  let component: CreditarComponent;
  let fixture: ComponentFixture<CreditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
