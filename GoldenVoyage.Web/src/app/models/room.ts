import { Hotel } from "./hotel";
import { Entity } from "./entity";

export class Room {
    id: number;
    code: string;
    hotelId: number;
    hotel: Hotel;
    typeId: number;
    type: Entity;
    features: Array<any>;
    floor: number;
    beds: number;
    status: number;
    cleanStatus: number;
}