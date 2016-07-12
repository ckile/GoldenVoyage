import {Entity} from "./entity";
import {Account} from "./account";
export class Reservation {
    id: number;
    status: number;
    code: string;
    description: string;
    travelAgencyId: number;
    travelAgency: any;
    agenId: number;
    typeId: number;
    type: Entity;
    reservationConfirmedStatus: number;
    Accounts: Array<Account>;
}