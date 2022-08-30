import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl="http://localhost:9999/emps";
  }

  getAll():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiUrl +"/" + id);
  }

  add(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiUrl,emp);
  }

  update(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.apiUrl+"/"+emp.id,emp);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl +"/" + id);
  }
}
