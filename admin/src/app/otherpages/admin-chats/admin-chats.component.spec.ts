import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatsComponent } from './admin-chats.component';

describe('AdminChatsComponent', () => {
  let component: AdminChatsComponent;
  let fixture: ComponentFixture<AdminChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
