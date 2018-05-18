import { Component, OnInit } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

  constructor(
    public service: EmployeeService,
    public router: Router
  ) { }

  public tempEmployee: Employee = new Employee();

  ngOnInit() {
  }

  createEmployee() {
    this.service
      .createEmployee(this.tempEmployee)
      .subscribe(
        (employee) => {
          this.router.navigateByUrl('/employees/' + employee.id);
        }
      );
  }

}
