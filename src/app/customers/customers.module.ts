import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomersListComponent],
  declarations: [CustomersListComponent]
})
export class CustomersModule { }
