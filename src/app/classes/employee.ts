import { Salary } from './salary';
import { Deduction } from './deduction';
import { Bonus } from './bonus';

export class Employee {
  id: number;
  firstName: string = '';
  lastName: string = '';
  role: string = '';
  thumbnail: string = 'avatar';
  salaries: Salary[] = [];
  bonus: Bonus[] = [];
  deductions: Deduction[] = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
