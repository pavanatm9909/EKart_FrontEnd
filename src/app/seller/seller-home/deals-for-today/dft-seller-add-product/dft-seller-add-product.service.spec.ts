import { TestBed } from '@angular/core/testing';

import { DftSellerAddProductService } from './dft-seller-add-product.service';

describe('DftSellerAddProductService', () => {
  let service: DftSellerAddProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DftSellerAddProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
