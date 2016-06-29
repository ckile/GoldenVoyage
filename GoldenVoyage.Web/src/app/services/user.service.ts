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

    constructor(private _apiService: ApiService ) {
    }

    // 获取用户
    getCurrentEmployeeLogin(): void {
        this._apiService.get(this._url).subscribe(res => {
            this.currentEmployeeLogin.next(res.json());
        });
    }
}

// model
export class Tab { }

// service
export class TabSer {
    createTab: Subject<Tab> = new Subject<Tab>(null); 

    addTab(tab: Tab) {
        this.createTab.next(tab);
    }
}

// component 此处 注册TabSer的 供应商 provider
export class AppCmp {

    constructor(private _ser: TabSer) {}

    onAddTab() {
        let tab = new Tab();
        this._ser.addTab(tab);
    }

}

// 注入服务
export class TabPageCmp { }

// 注入服务
export class TabNavCmp {

    constructor(private _ser: TabSer) {
        _ser.createTab.subscribe(tab => { this._addTab(tab) });
    }

    private _addTab(tab: Tab) {
        // 处理添加
    }

}
