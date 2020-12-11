import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodisComponent } from './lodis.component';

describe('LodisComponent', () => {
  let component: LodisComponent;
  let fixture: ComponentFixture<LodisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
