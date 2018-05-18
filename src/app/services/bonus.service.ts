import { Injectable } from '@angular/core';
import { Bonus } from '../classes/bonus';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class BonusService {
  constructor(
    public api: ApiService
  ) {
  }

  // POST /bonuses
  addBonus(bonus: Bonus): Observable<Bonus> {
    return this.api.createBonus(bonus);
  }

  // GET /bonuses
  getAllBonuses(): Observable<Bonus[]>{
    return this.api.getAllBonuses();
  }

  // GET /bonuses/:id
  getBonusById(bonusId: number): Observable<Bonus> {
    return this.api.getBonusById(bonusId);
  }

  // PUT /bonuses/:id
  updateBonusById(bonus: Bonus): Observable<Bonus> {
    return this.api.updateBonus(bonus);
  }

  // DELETE /bonuses/:id
  deleteBonusById(bonusId: number): Observable<Bonus> {
    return this.api.deleteBonusById(bonusId);
  }
}