import { Hotel } from "./hotel";
import { Entity } from "./entity";

export class Room {
    Id: number;
    code: string;
    Hotel: Hotel;
    type: Entity;
    Features: Array<any>;
    Floor: number;
    Beds: number;
    Status: number;
    CleanStatus: number;
}