import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroptionComponent } from './useroption.component';

describe('UseroptionComponent', () => {
  let component: UseroptionComponent;
  let fixture: ComponentFixture<UseroptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseroptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
