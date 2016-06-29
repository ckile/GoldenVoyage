import { Hotel } from "./hotel";
import { Entity } from "./entity";

export class Room {
    Id: number;
    code: string;
    HotelId: number;
    Hotel: Hotel;
    TypeId: number;
    Type: Entity;
    Features: Array<any>;
    Floor: number;
    Beds: number;
    Status: number;
    CleanStatus: number;
}