import {Entity} from "./entity";
export class Account {
    id: number;
    code: string;
    description: string;
    typeId: number;
    type: Entity;
    status: number;
    customerId: number;
    customer: any;
    reservationId: number;
    comeWithId: number;
    shareId: number;
    currentRateId: number;
    stayId: number;
    classifyId: number;
    guests: any;
    remarks: any;

}