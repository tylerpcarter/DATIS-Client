import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bonus } from '../../classes/bonus'
import { BonusService } from '../../services/bonus.service'
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class BonusesComponent {

  @Input() bonus: Bonus[];
  @Input() employee: Employee = new Employee();
  @Input() totalBonuses: number = -1;

  @Output() createBonusEvent: EventEmitter<Bonus> = new EventEmitter();
  @Output() updateBonusEvent: EventEmitter<Bonus> = new EventEmitter();
  @Output() deleteBonusEvent: EventEmitter<number> = new EventEmitter();

  public editingBonus: boolean = false;
  public addingBonus: boolean = false;
  public tempBonus: Bonus = new Bonus();
  public selectedId: number = -1;

  constructor(
    public service: BonusService
  ) { }

  ngOnInit() {
  }

  editEventHandler($event: any) {
    this.editingBonus = true;
    this.tempBonus = new Bonus($event);
  }

  selectEventHandler($event: any) {
    if (this.selectedId === $event.id) {
      this.selectedId = -1
    } else {
      this.selectedId = $event.id;
    }
  }

  removeEventHandler($event: any) {
    this.removeBonus($event.id);
  }

  addBonus() {
    this.addingBonus = true;
  }

  saveBonus() {
    this.tempBonus.employee = this.employee.id;
    this.service
    .addBonus(this.tempBonus)
    .subscribe(
      (bonus) => {
        this.createBonusEvent.emit(bonus);
        console.log('Bonus Created:', bonus)
      }
    );
    this.cancelBonus();
  }

  updateBonus() {
    this.service
    .updateBonusById(this.tempBonus)
    .subscribe(
      (bonus) => {
        this.updateBonusEvent.emit(bonus);
      }
    );
    this.cancelBonus();
  }

  removeBonus(id: number) {
    this.service
    .deleteBonusById(id)
    .subscribe(
      () => {
        this.deleteBonusEvent.emit(id);
      }
    )
    this.cancelBonus();
  }

  cancelBonus() {
    this.tempBonus = new Bonus();
    this.editingBonus = false;
    this.addingBonus = false;
  }

}
