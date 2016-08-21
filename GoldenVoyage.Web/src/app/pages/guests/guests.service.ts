import { Injectable } from "@angular/core";
import { ApiService } from "../../services";
import { Guest, OperatorResult, PaginatedResult, PaginateParamter } from "../../models";
import { Subject, Observable, Operator } from "rxjs";

@Injectable()
export class GuestsService {
    private draw: number = 0;
    createGuest: Subject<OperatorResult> = new Subject<OperatorResult>();
    guests: Subject<PaginatedResult<Guest>> = new Subject<PaginatedResult<Guest>>();

    constructor(private _apiService: ApiService) { }

    create(entity: Guest): void {
        this._apiService.post("/Guests", entity).subscribe(res => {
            this.createGuest.next(res.json());
        });
    }

    getPage(page: number): void {
        let param = new PaginateParamter();
        param.draw = this.draw;
        this.draw += 1;
        param.length = 10;
        param.start = page == 0 ? 0 : page * param.length + 1;
        this._apiService.postGet("/Guests/page", param).subscribe(res => {
            this.guests.next(res.json());
        });
    }
}