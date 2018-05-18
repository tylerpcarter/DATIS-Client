import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bonus } from '../../classes/bonus'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})

export class BonusComponent {

  @Input() b: Bonus = new Bonus();
  @Input() editingBonus: boolean = false;
  @Input() idSelected: boolean = false;
  @Input() employee: Employee = new Employee();

  @Output() editBonusEvent: EventEmitter<Bonus> = new EventEmitter();
  @Output() selectBonusEvent: EventEmitter<Bonus> = new EventEmitter();
  @Output() removeBonusEvent: EventEmitter<Bonus> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editBonus() {
    this.editBonusEvent.emit(this.b)
  }

  selectBonus() {
    this.selectBonusEvent.emit(this.b)
  }

  removeBonus() {
    this.removeBonusEvent.emit(this.b)
  }
}