import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/src/app/shared/models/product';
import { DftProduct } from 'src/app/shared/models/dft-product';
import { ViewTodayDealsService } from './view-today-deals.service';
import { ViewAllProductsService } from '../view-all-products/view-all-products.service';

@Component({
  selector: 'app-view-today-deals',
  templateUrl: './view-today-deals.component.html',
  styleUrls: ['./view-today-deals.component.css']
})
export class ViewTodayDealsComponent implements OnInit {

  p: number = 1;
  page: boolean = false;
  isProductSelected: boolean = false;
  selectedProduct: Product;
  productOnDeals: DftProduct[] = [];
  count: number = 0;
  errorMessage: string;
  successMessage: string;
  now = new Date();
  status: number[];
  

  constructor(private customerViewDealsService: ViewTodayDealsService, private viewAllProductService: ViewAllProductsService) {
    setInterval(() => {
      this.now = new Date();
      this.setStatus();
    }
      , 5000);
  }

  ngOnInit() {
    this.successMessage = null;
    this.errorMessage = null;
    this.productOnDeals = null;

    this.getProductOnDealsForCustomer();
  }
  

  getProductOnDealsForCustomer() {
    this.status = [],


      this.customerViewDealsService.getProductOnDealsForCustomer().subscribe
        (
          (response) => {
            

            this.viewAllProductService.getAllProducts()
              .subscribe(products => {
                let temp=[]
                for(let i=0; i<products.length;i++){
                  for(let j=0;j<response.length;j++){
                    if(products[i].productId===response[j].productId){
                      temp.push({
                        dealId: response[j].dealId,
                        productId: response[j].productId,
                        dealDiscount: response[j].dealDiscount,
                        dealStarts: response[j].dealStarts,
                        dealEnds: response[j].dealEnds,
                        sellerEmailId: response[j].sellerEmailId,
                        errorMessage: response[j].errorMessage,
                        successMessage: response[j].successMessage,
                        productList: products[i]
                      });
                    }
                  }
                }
                
                this.productOnDeals=temp;
                this.setStatus();

            if (this.productOnDeals.length > 10) {
              this.page = true;
            }
            }
          );
            
          },
          (response) => {
            this.errorMessage = <any>response;
            this.productOnDeals = null;
            this.successMessage = null;
          }
          
        )
  }

  setStatus() {
    let currTime = this.now;
    this.count = 0;
    for (var i = 0; i < this.productOnDeals.length; i++) {
      let startDateTime = new Date(this.productOnDeals[i].dealStarts[0],
        this.productOnDeals[i].dealStarts[1] - 1,
        this.productOnDeals[i].dealStarts[2],
        this.productOnDeals[i].dealStarts[3],
        this.productOnDeals[i].dealStarts[4],
        0);

      let endDateTime = new Date(this.productOnDeals[i].dealEnds[0],
        this.productOnDeals[i].dealEnds[1] - 1,
        this.productOnDeals[i].dealEnds[2],
        this.productOnDeals[i].dealEnds[3],
        this.productOnDeals[i].dealEnds[4],
        0);

      if (startDateTime.getTime() < currTime.getTime() && endDateTime.getTime() > currTime.getTime()) {
        this.status[i] = 1;
        this.count++;
      }
      else if (startDateTime.getTime() > currTime.getTime()) {
        this.status[i] = 2;
      }
      else if (endDateTime.getTime() < currTime.getTime()) {
        this.status[i] = 3;
      }


    }

  }

  setSelectedProduct(product: Product) {
    this.isProductSelected = true;
    this.successMessage = null;
    this.selectedProduct = product;
  }



  unsetSelectedProduct() {
    this.isProductSelected = false;
    this.selectedProduct = null;
  }

}

