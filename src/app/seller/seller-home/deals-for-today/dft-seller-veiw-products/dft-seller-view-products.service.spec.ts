import { TestBed } from '@angular/core/testing';

import { DftSellerViewProductsService } from './dft-seller-view-products.service';

describe('DftSellerViewProductsService', () => {
  let service: DftSellerViewProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DftSellerViewProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
