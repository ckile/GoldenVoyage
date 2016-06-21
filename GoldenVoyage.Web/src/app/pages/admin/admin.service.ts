import { Injectable } from "@angular/core";
import { ApiService } from "../../services";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { OperatorResult, PaginatedResult,PaginateParamter } from "../../models";

@Injectable()
export class AdminService<T> {

    private url: string;

    constructor(private _apiService: ApiService) {

    }

    setEntityUrl(url: string) {
        this.url = url;
    }

    get(): Observable<Array<T>> {
        return (<any>this._apiService.get(this.url)).map(res => {
            return res.json();
        });
    }

    postGet(paramter: PaginateParamter): Observable<PaginatedResult<T>> {
        return (<any>this._apiService.postGet(this.url, paramter)).map(res => {
            return res.json();
        });
    }


    getById(id: number): Observable<T> {
        return (<any>this._apiService.getById(this.url,id)).map(res => {
            return res.json();
        });
    }    


    add(entity: T):Observable<OperatorResult> {
        return (<any>this._apiService.post(this.url, entity)).map(res => {
            return res.json();
        });
    }

    delete(id: number):Observable<OperatorResult> {
        return (<any>this._apiService.delete(this.url, id)).map(res => {
            return res.json();
        });
    }

    update(id: number, entity: T): Observable<OperatorResult> {
        return (<any>this._apiService.put(this.url, id, entity)).map(res => {
            return res.json();
        }); 
    }


}