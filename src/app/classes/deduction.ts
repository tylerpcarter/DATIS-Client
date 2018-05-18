export class Deduction {
    id: number;
    employee: number;
    type: boolean;
    amount: number;
    description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }   


}
