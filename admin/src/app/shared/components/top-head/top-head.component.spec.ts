import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadComponent } from './top-head.component';

describe('TopHeadComponent', () => {
  let component: TopHeadComponent;
  let fixture: ComponentFixture<TopHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
