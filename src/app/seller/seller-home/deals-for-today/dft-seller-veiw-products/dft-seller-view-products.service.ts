import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { DftProduct } from '../../../../shared/models/dft-product';
import { environment } from '../../../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})

export class DftSellerViewProductsService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getProductCategories(): Observable<string[]> {
    const url = environment.dftProductAPIUrl + "/getProductCategories";
    return this.http.get<string[]>(url)
      .pipe(catchError(this.handleError));

  }

  getProductInDealList(sellerEmailId): Observable<DftProduct[]> {
    const url = environment.dftProductAPIUrl + "/productsInDealList";
    return this.http.post<DftProduct[]>(url, sellerEmailId, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }
  removeFromDeals(productInDeal: DftProduct): Observable<any> {

    const url = environment.dftProductAPIUrl + "/removeProductInDeals";
    return this.http.post<any>(url, productInDeal, { headers: this.headers, responseType: 'text' as 'json' })
    .pipe(catchError(this.handleError));

  }
  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg: string = '';
    if (err.error instanceof Error) {
      errMsg = err.error.message;
      console.log(errMsg)
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
