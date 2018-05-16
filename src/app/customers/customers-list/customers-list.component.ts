import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app-state';
import { Customer } from 'src/app/models/Customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers$: Observable<any>;

  constructor(public store: Store<AppState>) { 
    this.customers$ = store.select(state => state.customers);
  }

  ngOnInit() {
    
  }

}
