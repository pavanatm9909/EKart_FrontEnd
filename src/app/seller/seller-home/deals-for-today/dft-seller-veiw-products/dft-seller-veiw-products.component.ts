import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { DftProduct } from '../../../../shared/models/dft-product';
import { DftSellerViewProductsService } from './dft-seller-view-products.service';
import { Seller } from '../../../../shared/models/seller';

@Component({
  selector: 'app-dft-seller-veiw-products',
  templateUrl: './dft-seller-veiw-products.component.html',
  styleUrls: ['./dft-seller-veiw-products.component.css']
})
export class DftSellerVeiwProductsComponent implements OnInit {

  errorMessage: string = "";
  successMessage: string = "";
  seller: Seller
  product
  productCategoryList: string[]
  p:number=1;
  page: boolean=false
  submitted: boolean;
  
  @Input()
  productRecieved: Product
  productList: Product[]
  productDetails: Product
  dftProductDetails: DftProduct
  displayProducts: Boolean
  productInDealList: DftProduct[];
  productInDeal: DftProduct[]=[]; 
  productNotInDealList:[];
  constructor(private SellerProductsService: DftSellerViewProductsService) { }

  ngOnInit() {
    
    this.productList = JSON.parse(sessionStorage.getItem("sellerProducts"));
    this.displayProducts = true
    this.seller = JSON.parse(sessionStorage.getItem("seller"));
    this.SellerProductsService.getProductInDealList(this.seller.emailId)
            .subscribe(response => {
                this.productInDealList = response
                this.displayProducts = this.productInDealList.length != 0;
                  this.page=this.productInDealList.length != 0;
                
            })

  }
  removeFromDeals( productInDeal: DftProduct ) {
    this.successMessage = null;
    this.errorMessage = null;

    this.SellerProductsService.removeFromDeals(productInDeal).subscribe(
        response => {
            this.successMessage = response.toString();
            console.log(this.successMessage)
            this.SellerProductsService.getProductInDealList(this.seller.emailId)
            .subscribe(response => {
                this.productInDealList = response
                this.displayProducts = this.productInDealList.length != 0;
                  this.page=this.productInDealList.length != 0;
                
            })
        },

        response => {
            this.errorMessage = response.toString();
            console.log(this.errorMessage)
            this.SellerProductsService.getProductInDealList(this.seller.emailId)
            .subscribe(response => {
                this.productInDealList = response
                this.displayProducts = this.productInDealList.length != 0;
                  this.page=this.productInDealList.length != 0;
                
            })
        },

    )
  }
  // isDealActive(productInDeal:DftProduct ): boolean {
  //   let sysDateTime: Date = new Date();
  //   let dealend: Date = new Date(productInDeal.dealEnds[0],productInDeal.dealEnds[1]-1,
  //     productInDeal.dealEnds[2],productInDeal.dealEnds[3],productInDeal.dealEnds[4],0);
  //   if(dealend<sysDateTime)
  //     return false;
  //   return true;
    
  
  // }

  viewProductDetails(product: number) {
    this.productDetails = new Product
    
    for(let product2 of this.productList){
      if (product==product2.productId)
      {
        this.productDetails =product2; 
      
      }
    
    }
    this.displayProducts=false
  }

    viewDftProductDetail(product: number) {
      this.productDetails = new Product
      for(let product2 of this.productList){
        if (product==product2.productId)
        {
          this.productDetails =product2; 
        
        }
      }
    }
     
}
