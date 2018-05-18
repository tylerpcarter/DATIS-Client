import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Salary } from '../../classes/salary'
import { SalaryService } from '../../services/salary.service'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.scss']
})
export class SalariesComponent {

  @Input() salaries: Salary[] = [];
  @Input() employee: Employee = new Employee();
  @Input() currentSalary: number = -1;
  
  @Output() createSalaryEvent: EventEmitter<Salary> = new EventEmitter();
  @Output() updateSalaryEvent: EventEmitter<Salary> = new EventEmitter();
  @Output() deleteSalaryEvent: EventEmitter<number> = new EventEmitter();

  public editingSalary: boolean = false;
  public addingSalary: boolean = false;
  public tempSalary: Salary = new Salary();
  public selectedId: number = -1;
 

  constructor(
    public service: SalaryService
  ) { }

  ngOnInit() {
  }

  editEventHandler($event: any) {
    this.editingSalary = true;
    this.tempSalary = new Salary($event);
  }

  selectEventHandler($event: any) {
    if (this.selectedId === $event.id) {
      this.selectedId = -1
    } else {
      this.selectedId = $event.id;
    }
  }

  removeEventHandler($event: any) {
    this.removeSalary($event.id);
  }

  addSalary() {
    this.addingSalary = true;
  }

  saveSalary() {
    this.tempSalary.employee = this.employee.id;
    this.service
    .addSalary(this.tempSalary)
    .subscribe(
      (salaries) => {
        this.createSalaryEvent.emit(salaries);
        console.log('Salary Created:', salaries)
      }
    );
    this.cancelSalary();
  }

  updateSalary() {
    this.service
    .updateSalaryById(this.tempSalary)
    .subscribe(
      (salaries) => {
        this.updateSalaryEvent.emit(salaries);
      }
    );
    this.cancelSalary();
  }

  removeSalary(id: number) {
    this.service
    .deleteSalaryById(id)
    .subscribe(
      () => {
        this.deleteSalaryEvent.emit(id);
      }
    )
    this.cancelSalary();
  }

  cancelSalary() {
    this.tempSalary = new Salary();
    this.editingSalary = false;
    this.addingSalary = false;
  }


}
