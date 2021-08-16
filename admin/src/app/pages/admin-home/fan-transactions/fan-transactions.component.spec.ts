import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanTransactionsComponent } from './fan-transactions.component';

describe('FanTransactionsComponent', () => {
  let component: FanTransactionsComponent;
  let fixture: ComponentFixture<FanTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
