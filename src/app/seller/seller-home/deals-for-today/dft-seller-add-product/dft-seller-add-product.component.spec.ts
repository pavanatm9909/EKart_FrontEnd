import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DftSellerAddProductComponent } from './dft-seller-add-product.component';

describe('DftSellerAddProductComponent', () => {
  let component: DftSellerAddProductComponent;
  let fixture: ComponentFixture<DftSellerAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DftSellerAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DftSellerAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
