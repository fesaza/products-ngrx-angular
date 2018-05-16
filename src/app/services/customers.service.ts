import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "src/app/models/Customer";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomerService{
 BASE_URL = 'http://localhost:3000';
 constructor(private httpClient: HttpClient){}

 getCustomers(): Observable<Array<Customer>> {
  return this.httpClient.get<Customer[]>(`${this.BASE_URL}/customers`);
 }
}