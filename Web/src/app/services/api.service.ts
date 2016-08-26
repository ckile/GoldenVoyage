import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { appConstants } from "../app.constants";
import { SecurityService } from "./security.service";
import { PaginatedResult,PaginateParamter } from "../models";
@Injectable()
export class ApiService {
    private hostUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _securityService: SecurityService) {
        this.hostUrl = `${appConstants.ApiServer}`;
    }

    private setHeaders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        var token = this._securityService.GetToken();

        if (token !== "") {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    }

    private getUrl = (actionUrl: string) => {
        return this.hostUrl + actionUrl;
    }

    get(actionUrl: string): Observable<Response> {
        this.setHeaders();
        return this._http.get(this.getUrl(actionUrl), { headers: this.headers });
    }

    postGet(actionUrl: string, paramter: any): Observable<Response> {
        this.setHeaders();
        return this._http.post(this.getUrl(actionUrl + "/page"), JSON.stringify(paramter), { headers: this.headers });
    }

    getById(actionUrl: string, id: number): Observable<Response> {
        this.setHeaders();
        return this._http.get(this.getUrl(actionUrl) + "/" + id, { headers: this.headers });
    }

    post(actionUrl: string, item: any): Observable<Response> {
        this.setHeaders();
        return this._http.post(this.getUrl(actionUrl), JSON.stringify(item), { headers: this.headers });
    }

    put(actionUrl: string, id: number, item: any): Observable<Response> {
        this.setHeaders();
        return this._http.put(this.getUrl(actionUrl) + "/" + id, JSON.stringify(item), { headers: this.headers });
    }

    delete(actionUrl: string, id: number): Observable<Response> {
        this.setHeaders();
        return this._http.delete(this.getUrl(actionUrl) + "/" + id, { headers: this.headers });
    }
}