import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import * as customersActions  from "src/app/actions/customers.actions";
import { switchMap, toArray, map, catchError, mergeMap } from 'rxjs/operators';
import { Customer } from "src/app/models/Customer";
import { CustomerService } from "src/app/services/customers.service";

@Injectable()
export class CustomersEffects{
 constructor(private actions$: Actions, private customerService: CustomerService){
  
 }

 @Effect()
 loadCollection$: Observable<Action> = this.actions$.pipe(
   ofType(customersActions.LOAD_CUSTOMERS),
   switchMap(() =>
     this.customerService.getCustomers()
       .pipe(
         map((customers: Customer[]) => new customersActions.LoadCustomersSuccessAction(customers)),
         //catchError(error => of(new LoadFail(error)))
       )
   )
 );
}