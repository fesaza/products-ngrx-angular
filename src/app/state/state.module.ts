import { ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects/src/effects_module";
import { CustomersEffects } from "src/app/effects/customers.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ routerReducer: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CustomersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }

}