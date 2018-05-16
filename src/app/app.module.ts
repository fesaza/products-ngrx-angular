import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersModule } from 'src/app/customers/customers.module';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { LayoutModule } from '@angular/cdk/layout';
import { StateModule } from 'src/app/state/state.module';

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
    StateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
