import { Injectable } from '@angular/core';
import { Deduction } from '../classes/deduction';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable()
export class DeductionService {
  constructor(
    public api: ApiService
  ) {
  }

  // POST /deductions
  addDeduction(deduction: Deduction): Observable<Deduction> {
    return this.api.createDeduction(deduction);
  }

  // GET /deductions
  getAllDeductions(): Observable<Deduction[]>{
    return this.api.getAllDeductions();
  }

  // GET /deductions/:id
  getDeductionById(deductionId: number): Observable<Deduction> {
    return this.api.getDeductionById(deductionId);
  }

  // PUT /deductions/:id
  updateDeductionById(deduction: Deduction): Observable<Deduction> {
    return this.api.updateDeduction(deduction);
  }

  // DELETE /deductions/:id
  deleteDeductionById(deductionId: number): Observable<Deduction> {
    return this.api.deleteDeductionById(deductionId);
  }
}