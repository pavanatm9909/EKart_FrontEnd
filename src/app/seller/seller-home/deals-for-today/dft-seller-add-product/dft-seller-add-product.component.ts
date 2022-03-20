import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../shared/models/product';
//import { ProductInDeal } from '../../../../shared/models/productInDeal';
import { DftSellerAddProductService } from './dft-seller-add-product.service';
import { Seller } from '../../../../shared/models/seller';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-dft-seller-add-product',
  templateUrl: './dft-seller-add-product.component.html',
  styleUrls: ['./dft-seller-add-product.component.css']
})
export class DftSellerAddProductComponent implements OnInit {
  seller: Seller
  successMessage: String="";
  errorMessage: string = "";
  productNotInDealList: Product[]
  p:number=1;
  page: boolean=false
  productToAdd:Product
  productAddForm: FormGroup
  displayProducts: Boolean
  submitted: Boolean
  productId: number
  startDateTime:string
  endDateTime:string
  sellerEmailId:string
  discount: number
  constructor(private fb: FormBuilder, private dftSellerAddProductService: DftSellerAddProductService) { }

  ngOnInit() {
    this.seller = JSON.parse(sessionStorage.getItem("seller"));
    this.dftSellerAddProductService.productsCurrentlyBeingSold(this.seller.emailId)
      .subscribe(productNotInDealList => {
        this.productNotInDealList = productNotInDealList
        if(this.productNotInDealList.length >0){
          this.page=true
        }
        //console.log(this.productNotInDealList)
      })
      this.displayProducts = true
      this.submitted=false
  }
   
  add(product: Product){
    this.displayProducts = false
    this.submitted=true
    this.productToAdd=product
    this.successMessage=''
    this.errorMessage=''
    this.createForm()
  }

  createForm(){
    this.productAddForm=this.fb.group({
      dealStartsAt: ["",Validators.required],
      dealEndsAt: ["",Validators.required],
      discount: ["",Validators.required]
    })
  }

  AddProduct(){
    this.sellerEmailId=this.productToAdd.sellerEmailId
    this.productId=this.productToAdd.productId
    this.startDateTime=this.productAddForm.value.dealStartsAt
    this.endDateTime=this.productAddForm.value.dealEndsAt
    this.discount=this.productAddForm.value.discount
    this.dftSellerAddProductService.addProductInDeal(this.productId,this.sellerEmailId, this.discount, this.startDateTime, this.endDateTime)
    .subscribe((response)=>{
      this.successMessage=response
      this.submitted=false
      this.dftSellerAddProductService.productsCurrentlyBeingSold(this.seller.emailId)
      .subscribe(productNotInDealList => {
        this.productNotInDealList = productNotInDealList
        if(this.productNotInDealList.length >0){
          this.page=true
        }
        //console.log(this.productNotInDealList)
      })
    },
    error => {
      this.errorMessage="Please provide Date and Time in Valid format." 
    })
    
  } 
}
