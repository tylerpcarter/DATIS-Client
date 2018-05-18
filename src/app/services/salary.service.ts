import { Injectable } from '@angular/core';
import { Salary } from '../classes/salary';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class SalaryService {
  constructor(
    public api: ApiService
  ) {
  }

  // POST /salaries
  addSalary(salary: Salary): Observable<Salary> {
    return this.api.createSalary(salary);
  }

  // GET /salaries
  getAllSalaries(): Observable<Salary[]>{
    return this.api.getAllSalaries();
  }

  // GET /salaries/:id
  getSalaryById(salaryId: number): Observable<Salary> {
    return this.api.getSalaryById(salaryId);
  }

  // PUT /salaries/:id
  updateSalaryById(salary: Salary): Observable<Salary> {
    return this.api.updateSalary(salary);
  }

  // DELETE /salaries/:id
  deleteSalaryById(salaryId: number): Observable<Salary> {
    return this.api.deleteSalaryById(salaryId);
  }
}