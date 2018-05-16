import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar'

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[ MatToolbarModule ],
  declarations: []
})
export class CommonComponentsModule { }
