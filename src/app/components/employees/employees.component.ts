import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(
    public service: EmployeeService
  ) { }

  public search: string = '';

  public employees: Employee[] = [];

  get showCancel() {
    return this.search.length > 0 ? true : false;
  }

  clearSearch() {
    this.search = '';
  }

  ngOnInit() {
    this.service
    .getAllEmployees()
    .subscribe(
      (employees) => {
        this.employees = employees;
      }
    )
  }

  get filteredEmployees() {
    if (this.employees !== undefined || this.employees !== null) {
      return this.employees.filter(
        (e) => (
          e.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          e.lastName.toLowerCase().includes(this.search.toLowerCase()) ||
          e.role.toLowerCase().includes(this.search.toLowerCase())
      ));
    }
    return [];
  }
}
