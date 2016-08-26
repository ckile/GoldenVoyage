import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Subject, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';
import { Employee, EmployeeLogin, Task, Message } from "../models";
import { appConstants } from "../app.constants";

@Injectable()
export class UserService {
    private _url: string = "/EmployeeLogin/Get";
    private _msgUrl: string = "/Messages";
    currentEmployeeLogin: Subject<EmployeeLogin> = new BehaviorSubject<EmployeeLogin>(null);
    messages: Subject<Array<Message>> = new BehaviorSubject<Array<Message>>([]);
    tasks: Subject<Array<Task>> = new BehaviorSubject<Array<Task>>([]);
    constructor(private _apiService: ApiService) {
    }
    getCurrentEmployeeLogin(): void {
        this._apiService.get(this._url).subscribe(res => {
            this.currentEmployeeLogin.next(res.json());
        });
    }
}