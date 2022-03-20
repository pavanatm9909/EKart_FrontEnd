import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DftProduct } from 'src/app/shared/models/dft-product';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewTodayDealsService {

  constructor(private http:HttpClient) { 

  }

  getProductOnDealsForCustomer():Observable<DftProduct[]>{

    const url=environment.customerDealForTodayAPI+"/productInTodayDeal/";

     return this.http.get<DftProduct[]>(url)
     .pipe(catchError(this.handleError));
   }

   private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg:string='';
    if (err.error instanceof Error) {   
        errMsg=err.error.message;
        console.log(errMsg)
    }
     else if(typeof err.error === 'string'){
        errMsg=JSON.parse(err.error).message
    }
    else {
       if(err.status==0){ 
           errMsg="No Deals Available";
       }else{
           errMsg=err.error.message;
       }
     }
        return throwError(errMsg);
}
}

