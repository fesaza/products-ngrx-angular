import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Customer } from 'src/app/models/Customer';
import { Observable } from 'rxjs';
import * as customerActions from "src/app/actions/customers.actions";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers$: Observable<any>;

  constructor(public store: Store<AppState>) { 
    this.customers$ = store.pipe(select('customers'));
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    //this.store.pipe(dispatch(new customerActions.))
    this.store.dispatch(new customerActions.LoadCustomersAction());
  }

}
