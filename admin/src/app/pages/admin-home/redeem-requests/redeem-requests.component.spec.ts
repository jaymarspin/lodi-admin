import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemRequestsComponent } from './redeem-requests.component';

describe('RedeemRequestsComponent', () => {
  let component: RedeemRequestsComponent;
  let fixture: ComponentFixture<RedeemRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
