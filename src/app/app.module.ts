import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomersModule } from 'src/app/customers/customers.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { LayoutModule } from '@angular/cdk/layout';
import { StateModule } from 'src/app/state/state.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CommonComponentsModule,
    CustomersModule,
    RouterModule.forRoot(
      [
        
      ]
    ),
    StateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
