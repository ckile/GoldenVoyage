export class Hotel {
    id: number;

    name: string;

    profileId: number;

    profile: HotelProfile;
}

export class HotelProfile {

    id: number;

    hotelDate: Date;

    reportDate: Date;

    localServiceAddress: string;
}