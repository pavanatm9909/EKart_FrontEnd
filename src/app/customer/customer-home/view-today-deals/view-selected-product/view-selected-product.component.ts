import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-view-selected-product',
  templateUrl: './view-selected-product.component.html',
  styleUrls: ['./view-selected-product.component.css']
})
export class ViewSelectedProductComponent implements OnInit {

  @Input() selectedProduct: Product;
  constructor() {
    console.log(this.selectedProduct)
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    Object.assign(this.selectedProduct);
  }

}