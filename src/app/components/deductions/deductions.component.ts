import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Deduction } from '../../classes/deduction'
import { DeductionService } from '../../services/deduction.service'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent {

  @Input() deductions: Deduction[];
  @Input() employee: Employee = new Employee();
  @Input() totalDeductions: number = -1;

  @Output() createDeductionEvent: EventEmitter<Deduction> = new EventEmitter();
  @Output() updateDeductionEvent: EventEmitter<Deduction> = new EventEmitter();
  @Output() deleteDeductionEvent: EventEmitter<number> = new EventEmitter();

  public editingDeduction: boolean = false;
  public addingDeduction: boolean = false;
  public tempDeduction: Deduction = new Deduction();
  public selectedId: number = -1;

  constructor(
    public service: DeductionService
  ) { }

  ngOnInit() {
  }

  editEventHandler($event: any) {
    this.editingDeduction = true;
    this.tempDeduction = new Deduction($event);
  }

  selectEventHandler($event: any) {
    if (this.selectedId === $event.id) {
      this.selectedId = -1
    } else {
      this.selectedId = $event.id;
    }
  }

  removeEventHandler($event: any) {
    this.removeDeduction($event.id);
  }

  addDeduction() {
    this.addingDeduction = true;
  }

  saveDeduction() {
    this.tempDeduction.employee = this.employee.id;
    console.log(this.tempDeduction);
    console.log(this.tempDeduction.amount);
    this.service
    .addDeduction(this.tempDeduction)
    .subscribe(
      (deduction) => {
        this.createDeductionEvent.emit(deduction);
        console.log('Deduction Created:', deduction)
      }
    );
    this.cancelDeduction();
  }

  updateDeduction() {
    this.service
    .updateDeductionById(this.tempDeduction)
    .subscribe(
      (deduction) => {
        this.updateDeductionEvent.emit(deduction);
      }
    );
    this.cancelDeduction();
  }

  removeDeduction(id: number) {
    this.service
    .deleteDeductionById(id)
    .subscribe(
      () => {
        this.deleteDeductionEvent.emit(id);
      }
    )
    this.cancelDeduction();
  }

  cancelDeduction() {
    this.tempDeduction = new Deduction();
    this.editingDeduction = false;
    this.addingDeduction = false;
  }

}
