import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(public api: ApiService) {
  }

  // PUT /employees/:id
  createEmployee(employee: Employee): Observable<Employee> {
    return this.api.createEmployee(employee);
  }

  // GET /employees
  getAllEmployees(): Observable<Employee[]> {
    return this.api.getAllEmployees();
  }

  // GET /employees/:id
  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.api.getEmployeeById(employeeId);
  }

  // PUT /employees/:id
  updateEmployeeById(employee: Employee): Observable<Employee> {
    return this.api.updateEmployee(employee);
  }

  // DELETE /employees/:id
  deleteEmployeeById(employeeId: number): Observable<Employee> {
    return this.api.deleteEmployeeById(employeeId);
  }
}