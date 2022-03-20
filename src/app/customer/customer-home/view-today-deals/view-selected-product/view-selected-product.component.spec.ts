import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedProductComponent } from './view-selected-product.component';

describe('ViewSelectedProductComponent', () => {
  let component: ViewSelectedProductComponent;
  let fixture: ComponentFixture<ViewSelectedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
