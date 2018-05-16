import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerService } from 'src/app/services/customers.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CustomersListComponent],
  providers: [CustomerService],
  declarations: [CustomersListComponent]
})
export class CustomersModule { }
