import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Product } from '../../../../shared/models/product';
import { environment } from '../../../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DftSellerAddProductService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  
 productsCurrentlyBeingSold(emailId: String): Observable<Product[]> {
  const url = environment.dftProductAPIUrl + "/productsCurrentlyBeingSold";
  return this.http.post<Product[]>(url,emailId)
    .pipe(catchError(this.handleError));
}

message:String=""
addProductInDeal(productId: number, sellerEmailId: string, discount: number, startDateTime: string, endDateTime: string ): Observable<any> {
  const url = environment.dftProductAPIUrl + "/addProductInDeal";
  return this.http.post<any>(url, {productId, sellerEmailId, discount, startDateTime, endDateTime}, { headers: this.headers, responseType: 'text' as 'json'})     
    .pipe(catchError(this.handleError));
}

  private handleError(err: HttpErrorResponse) {
   // console.log(err)
    let errMsg: string = '';
    if (err.error instanceof Error) {
      errMsg = err.error.message;
      //console.log(errMsg)
    }
    else if (typeof err.error === 'string') {
      errMsg = JSON.parse(err.error).message
    }
    else {
      if (err.status == 0) {
        errMsg = "A connection to back end can not be established.";
      } else {
        errMsg = err.error.message;
      }
    }
    return throwError(errMsg);
  }
}
