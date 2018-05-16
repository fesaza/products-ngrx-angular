import { Customer } from "src/app/models/Customer";

export const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS';
export const LOAD_CUSTOMERS_SUCCESS = 'LOAD_CUSTOMERS_SUCCESS';

export class LoadCustomersAction {
 readonly type = LOAD_CUSTOMERS;
 constructor(){ }
}

export class LoadCustomersSuccessAction{
 readonly type = LOAD_CUSTOMERS_SUCCESS;
 constructor(public data: Customer[]){ }
}

// export class LoadFail implements Action {
//  readonly type = CollectionActionTypes.LoadFail;

//  constructor(public payload: any) {}
// }

export type Action = LoadCustomersAction | LoadCustomersSuccessAction