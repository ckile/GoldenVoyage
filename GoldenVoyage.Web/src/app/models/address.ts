import {Entity}  from  "./entity.ts";
export class Address {
    id: number;
    attribute: number;
    countryId: number;
    country: Entity;
    provinceId: number;
    province: Entity;
    regionId: number;
    region: Entity;
    addr: string;
    guestId: number;
}