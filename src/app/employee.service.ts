import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>('https://employeedb-601b6.firebaseio.com/employee.json')
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message || 'server Error');
  }

}
