import { Entity } from "./entity.ts";
import { Address } from "./address.ts";
import { Contact } from "./contact.ts";
import { Identity } from "./identity.ts";

export class Guest {
    id: number;
    name: string;
    eName: string;
    hotelId: number;
    typeId: number;
    attribute: number;
    gender: number;
    birthDate: Date;
    titleId: number;
    languageId: number;
    vipTypeId: number;
    customerId: number;
    preferenceId: number;
    remarkId: number;
    remark: GuestRemark;
    identities: Array<Identity>;
    addresses: Array<Address>;
    contacts: Array<Contact>;
    specialRequests: Array<GuestMmSpecialRequest>;
    profileId: number;
    profile: GuestProfile;
}

export class GuestProfile {
    id: number;
    ethnicityId: number;

}

export class GuestMmSpecialRequest {
    id: number;
    guestId: number;
    specialRequestId: number;
    specialRequest: any;
}


export class GuestRemark {
    id: number;
    guestId: number;
    frontRemark: string;
    cashingRemark: string;

}