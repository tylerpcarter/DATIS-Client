import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Deduction } from '../../classes/deduction'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.scss']
})

export class DeductionComponent {

  @Input() deduction: Deduction = new Deduction();
  @Input() editingDeduction: boolean = false;
  @Input() idSelected: boolean = false;
  @Input() employee: Employee = new Employee();

  @Output() editDeductionEvent: EventEmitter<Deduction> = new EventEmitter();
  @Output() selectDeductionEvent: EventEmitter<Deduction> = new EventEmitter();
  @Output() removeDeductionEvent: EventEmitter<Deduction> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editDeduction() {
    this.editDeductionEvent.emit(this.deduction)
  }

  selectDeduction() {
    this.selectDeductionEvent.emit(this.deduction)
  }

  removeDeduction() {
    this.removeDeductionEvent.emit(this.deduction)
  }
}