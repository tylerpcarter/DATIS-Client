import { Component, Output, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public id: number = -1;
  public employee: Employee = new Employee();

  public editingEmployee: boolean = false;
  public employeeCardSize = 'uk-width-1-2@m'

  public tempEmployee: Employee = new Employee();
  public computedTakeHomePay: number = 0;
  public computedCurrentSalary: number = 0;
  public computedTotalDeductions: number = 0;
  public computedTotalBonuses: number = 0;
  public removingEmployee: boolean = false;


  constructor(
    public service: EmployeeService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.service
          .getEmployeeById(this.id)
          .subscribe(
            (employee) => {
              this.employee = employee
              console.log(this.takeHomePay());
              this.currentSalary();
              this.totalBonuses();
              this.totalDeductions();
              this.takeHomePay();
              if (this.employee.id === undefined || this.employee.id === null || this.employee.id === -1) {
                this.router.navigateByUrl('/employees');
              }
            }
          )
      }
    )
  }

  takeHomePay() {
    if (this.employee !== undefined || this.employee !== null) {
      console.log(+this.computedCurrentSalary, this.computedTotalBonuses, this.computedTotalDeductions);
      this.computedTakeHomePay = (+this.computedCurrentSalary + +this.computedTotalBonuses) - +this.computedTotalDeductions;
    }
  }

  currentSalary() {
    let max: number = 0;

    if (this.employee.salaries.length > 0) {
      for (let i: number = 0; i < this.employee.salaries.length; i++) {
        if (this.employee.salaries[i].id > this.employee.salaries[max].id) {
          max = i;
        }
      }
      this.computedCurrentSalary = +this.employee.salaries[max].amount;
      console.log('computed salary is ' + this.computedCurrentSalary);
    } else {
      this.computedCurrentSalary = 0;
    }
  }

  totalDeductions() {
    let totalDeductions: number = 0;
    if (this.employee.deductions.length > 0) {
      for (let i: number = 0; i < this.employee.deductions.length; i++) {
        if (this.employee.deductions[i].type) {
          totalDeductions += +((+this.employee.deductions[i].amount / 100.00) * this.computedCurrentSalary);
        }
        else {
          totalDeductions += +this.employee.deductions[i].amount;
        }
      }
      this.computedTotalDeductions = +totalDeductions;
    } else {
      this.computedTotalDeductions = 0;

    }
  }

  totalBonuses() {
    let totalBonuses: number = 0;

    if (this.employee.bonus.length > 0) {
      for (let i: number = 0; i < +this.employee.bonus.length; i++) {
        totalBonuses += +this.employee.bonus[i].amount;
      }
      this.computedTotalBonuses = +totalBonuses;
    } else {
      this.computedTotalBonuses = 0;
    }
  }


  editEmployee() {
    this.editingEmployee = true;
    this.tempEmployee = new Employee(this.employee);
    this.employeeCardSize = 'uk-width-1-1';
  }

  updateEmployee() {
    this.service
      .updateEmployeeById(this.tempEmployee)
      .subscribe(
        (employee) => {
          this.employee = employee
        }
      );
    this.cancelEmployee();
  }

  removeEmployee() {
    this.removingEmployee = true;
  }

  deleteEmployee() {
    this.service
      .deleteEmployeeById(this.employee.id)
      .subscribe(
        () => {
          this.router.navigateByUrl('/employees');
        }
      );
  }

  cancelEmployee() {
    this.employeeCardSize = 'uk-width-1-2@m';
    setTimeout(() => { this.editingEmployee = false }, 200);
    this.tempEmployee = new Employee();
    this.removingEmployee = false;
  }


  // Salary Handler

  createSalaryHandler($event) {
    this.employee.salaries.push($event);
    this.currentSalary();
    this.takeHomePay();
  }

  updateSalaryHandler($event) {
    console.log($event)
    let v = this.employee.salaries.filter((e) => e.id === $event.id)[0];
    let i = this.employee.salaries.indexOf(v);
    this.employee.salaries[i] = $event
    this.currentSalary();
    this.takeHomePay();

  }

  deleteSalaryHandler($event) {
    this.employee.salaries = this.employee.salaries.filter((e) => e.id !== $event);
    this.currentSalary();
    this.takeHomePay();

  }


  // Bonus Handler

  createBonusHandler($event) {
    this.employee.bonus.push($event);
    this.totalBonuses();
    this.takeHomePay();

  }

  updateBonusHandler($event) {
    console.log($event)
    let v = this.employee.bonus.filter((e) => e.id === $event.id)[0];
    let i = this.employee.bonus.indexOf(v);
    this.employee.bonus[i] = $event
    this.totalBonuses();
    this.takeHomePay();

  }

  deleteBonusHandler($event) {
    this.employee.bonus = this.employee.bonus.filter((e) => e.id !== $event);
    this.totalBonuses();
    this.takeHomePay();

  }

  // Deduction Handler

  createDeductionHandler($event) {
    this.employee.deductions.push($event);
    this.totalDeductions();
    this.takeHomePay();

  }

  updateDeductionHandler($event) {
    console.log($event)
    let v = this.employee.deductions.filter((e) => e.id === $event.id)[0];
    let i = this.employee.deductions.indexOf(v);
    this.employee.deductions[i] = $event
    this.totalDeductions();
    this.takeHomePay();

  }

  deleteDeductionHandler($event) {
    this.employee.deductions = this.employee.deductions.filter((e) => e.id !== $event);
    this.totalDeductions();
    this.takeHomePay();
  }

}
