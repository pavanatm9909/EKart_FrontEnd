import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DftSellerVeiwProductsComponent } from './dft-seller-veiw-products.component';

describe('DftSellerVeiwProductsComponent', () => {
  let component: DftSellerVeiwProductsComponent;
  let fixture: ComponentFixture<DftSellerVeiwProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DftSellerVeiwProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DftSellerVeiwProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
