import * as ActionTypes from '../actions/customers.actions'

export function CustomerReducer(state = [], action: ActionTypes.Action){
  debugger;
 switch (action.type) {
  case ActionTypes.LOAD_CUSTOMERS_SUCCESS:
   return action.data;
  default:
   return state;
 }
}