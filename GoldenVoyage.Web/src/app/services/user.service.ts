import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Subject, BehaviorSubject } from "rxjs";
import { Employee,EmployeeLogin } from "../models";
import { appConstants } from "../app.constants";

@Injectable()
export class UserService {

	private _url:string = appConstants.ApiService + "/EmployeeLogin";
	private _msgUrl:string = appConstants.ApiService + "/Messages";

    currentEmployeeLogin: Subject<EmployeeLogin> = new BehaviorSubject<EmployeeLogin>(null);

    newMessages: Subject<Message>; 


    constructor(private _apiService : ApiService) { 
    	this.newMessages = currentEmployeeLogin.map((employeeLogin)=> {
    		this._apiService.get(this._msgUrl).subscribe(res =>{
    			return <Message[]>res.json().data;
    		});
    	});
    }

    // 获取用户
    getCurrentEmployeeLogin(): void{
    	this._apiService.get(this._url).subscribe(res => {
    		var login = <EmployeeLogin>res.json().data;
    		this.currentEmployeeEmployeeLogin.next(login);
    	});
    }

}