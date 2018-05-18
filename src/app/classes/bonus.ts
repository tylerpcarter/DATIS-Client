export class Bonus {
    id: number;
    employee: number;
    amount: number;
    description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }


}