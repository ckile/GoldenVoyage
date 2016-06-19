export class Hotel {
    Id: number;

    Name: string;

    ProfileId: number;

    Profile: HotelProfile;
}

export class HotelProfile {

    Id: number;

    HotelDate: Date;

    ReportDate: Date;

    LocalServiceAddress: string;
}