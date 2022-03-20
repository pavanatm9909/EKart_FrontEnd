import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodayDealsComponent } from './view-today-deals.component';

describe('ViewTodayDealsComponent', () => {
  let component: ViewTodayDealsComponent;
  let fixture: ComponentFixture<ViewTodayDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTodayDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodayDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
