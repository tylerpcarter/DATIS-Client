import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Salary } from '../../classes/salary'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})

export class SalaryComponent {

  @Input() salary: Salary = new Salary();
  @Input() editingSalary: boolean = false;
  @Input() idSelected: boolean = false;
  @Input() employee: Employee = new Employee();
  
  @Output() editSalaryEvent: EventEmitter<Salary> = new EventEmitter();
  @Output() selectSalaryEvent: EventEmitter<Salary> = new EventEmitter();
  @Output() removeSalaryEvent: EventEmitter<Salary> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editSalary() {
    this.editSalaryEvent.emit(this.salary)
  }

  selectSalary() {
    this.selectSalaryEvent.emit(this.salary)
  }

  removeSalary() {
    this.removeSalaryEvent.emit(this.salary)
  }
}
