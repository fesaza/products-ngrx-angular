import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
  declarations: [CustomersComponent]
})
export class SharedComponentsModule { }
