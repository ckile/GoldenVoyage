import { Injectable } from "@angular/core";
import { ApiService } from "../../services";
import { Room } from "../../models";
import { Subject } from "rxjs";

@Injectable()
export class RoomViewService {

    rooms: Subject<Array<Room>> = new Subject<Array<Room>>(null);

    constructor(private _apiService: ApiService) {

    }

}