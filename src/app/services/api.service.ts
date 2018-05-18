import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';
import { Salary } from '../classes/salary';
import { Bonus } from '../classes/bonus';
import { Deduction } from '../classes/deduction';
import { map, catchError } from 'rxjs/operators/'
import { throwError } from 'rxjs'
throwError(new Error("oops"));

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    public http: Http
  ) { }

  public handleError(error: Response | any) {
    //     console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http
      .get(API_URL + '/employees/' + employeeId)
      .pipe(map(response => {
        return new Employee(response.json());
      }),
        catchError(this.handleError))
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http
      .get(API_URL + '/employees/')
      .pipe(
        map(response => {
          const employees = response.json();
          return employees.map((employee) => new Employee(employee));
        }),
        catchError(this.handleError));
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .put(API_URL + '/employees/' + employee.id, employee)
      .pipe(map(response => {
        return new Employee(response.json());
      }),
        catchError(this.handleError));
  }

  public deleteEmployeeById(employeeId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/employees/' + employeeId)
      .pipe(map(response => null)
        , catchError(this.handleError))
  }


  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http
      .post(API_URL + '/employees/', employee)
      .pipe(map(response => {
        return new Employee(response.json());
      }),
        catchError(this.handleError));
  }

  public getAllSalaries(): Observable<Salary[]> {
    return this.http
      .get(API_URL + '/salaries/')
      .pipe(
        map(response => {
          const salary = response.json();
          return salary.map((salary) => new Salary(salary));
        }),
        catchError(this.handleError));
  }

  public getSalaryById(salaryId: number): Observable<Salary> {
    return this.http
      .get(API_URL + '/salaries/' + salaryId)
      .pipe(map(response => {
        return new Salary(response.json());
      }),
        catchError(this.handleError))
  }

  public createSalary(salary: Salary): Observable<Salary> {
    return this.http
      .post(API_URL + '/salaries/', salary)
      .pipe(map(response => {
        return new Salary(response.json());
      }),
        catchError(this.handleError));
  }

  public updateSalary(salary: Salary): Observable<Salary> {
    return this.http
      .put(API_URL + '/salaries/' + salary.id, salary)
      .pipe(map(response => {
        return new Salary(response.json());
      }),
        catchError(this.handleError));
  }

  public deleteSalaryById(salaryId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/salaries/' + salaryId)
      .pipe(map(response => null)
        , catchError(this.handleError))
  }






  public getAllDeductions(): Observable<Deduction[]> {
    return this.http
      .get(API_URL + '/deductions/')
      .pipe(
        map(response => {
          const deduction = response.json();
          return deduction.map((deduction) => new Deduction(deduction));
        }),
        catchError(this.handleError));
  }

  public getDeductionById(deductionId: number): Observable<Deduction> {
    return this.http
      .get(API_URL + '/deductions/' + deductionId)
      .pipe(map(response => {
        return new Deduction(response.json());
      }),
        catchError(this.handleError))
  }

  public createDeduction(deduction: Deduction): Observable<Deduction> {
    return this.http
      .post(API_URL + '/deductions', deduction)
      .pipe(map(response => {
        return new Deduction(response.json());
      }),
        catchError(this.handleError));
  }

  public updateDeduction(deduction: Deduction): Observable<Deduction> {
    return this.http
      .put(API_URL + '/deductions/' + deduction.id, deduction)
      .pipe(map(response => {
        return new Deduction(response.json());
      }),
        catchError(this.handleError));
  }

  public deleteDeductionById(deductionId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/deductions/' + deductionId)
      .pipe(map(response => null)
        , catchError(this.handleError))
  }









  public getAllBonuses(): Observable<Bonus[]> {
    return this.http
      .get(API_URL + '/bonuses/')
      .pipe(
        map(response => {
          const bonuses = response.json();
          return bonuses.map((bonus) => new Bonus(bonus));
        }),
        catchError(this.handleError));
  }

  public getBonusById(bonusId: number): Observable<Bonus> {
    return this.http
      .get(API_URL + '/bonuses/' + bonusId)
      .pipe(map(response => {
        return new Bonus(response.json());
      }),
        catchError(this.handleError))
  }

  public createBonus(bonus: Bonus): Observable<Bonus> {
    return this.http
      .post(API_URL + '/bonuses', bonus)
      .pipe(map(response => {
        return new Bonus(response.json());
      }),
        catchError(this.handleError));
  }

  public updateBonus(bonus: Bonus): Observable<Bonus> {
    return this.http
      .put(API_URL + '/bonuses/' + bonus.id, bonus)
      .pipe(map(response => {
        return new Bonus(response.json());
      }),
        catchError(this.handleError));
  }

  public deleteBonusById(bonusId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/bonuses/' + bonusId)
      .pipe(map(response => null)
        , catchError(this.handleError))
  }
}