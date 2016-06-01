﻿import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Configuration } from "../app.constants";
import { Router } from "@angular/router-deprecated";

@Injectable()
export class SecurityService {
    private storage: any;

    constructor(private _http: Http, private _configuration: Configuration, private _router: Router) {
        this.storage = localStorage;

        if (this.retrieve("IsAuthorized") !== "") {
            this.HasAdminRole = this.retrieve("HasAdminRole");
            this.IsAuthorized = this.retrieve("IsAuthorized");
        }
    }

    public IsAuthorized: boolean;
    public HasAdminRole: boolean;

    public GetToken(): any {
        return this.retrieve("authorizationData");
    }

    public ResetAuthorizationData(): void {
        this.store("authorizationData", "");
        this.store("authorizationDataIdToken", "");

        this.IsAuthorized = false;
        this.HasAdminRole = false;
        this.store("HasAdminRole", false);
        this.store("IsAuthorized", false);
    }

    public SetAuthorizationData(token: any, id_token: any): void {
        if (this.retrieve("authorizationData") !== "") {
            this.store("authorizationData", "");
        }

        this.store("authorizationData", token);
        this.store("authorizationDataIdToken", id_token);
        this.IsAuthorized = true;
        this.store("IsAuthorized", true);

        var data: any = this.getDataFromToken(token);
        for (var i: number = 0; i < data.role.length; i++) {
            if (data.role[i] === "dataEventRecords.admin") {
                this.HasAdminRole = true;
                this.store("HasAdminRole", true);
            }
        }
    }

    public Authorize(): void {
        this.ResetAuthorizationData();

        console.log("BEGIN Authorize, no auth data");

        var authorizationUrl: string = this._configuration.IdentityServer + "/connect/authorize";
        var client_id: string = "webclient";
        var redirect_uri: string = this._configuration.WebServer;
        var response_type: string = "id_token token";
        var scope: string = "api openid";
        var nonce: string = "N" + Math.random() + "" + Date.now();
        var state: string = Date.now() + "" + Math.random();

        this.store("authStateControl", state);
        this.store("authNonce", nonce);
        console.log("AuthorizedController created. adding myautostate: " + this.retrieve("authStateControl"));

        var url: string =
            authorizationUrl + "?" +
            "response_type=" + encodeURI(response_type) + "&" +
            "client_id=" + encodeURI(client_id) + "&" +
            "redirect_uri=" + encodeURI(redirect_uri) + "&" +
            "scope=" + encodeURI(scope) + "&" +
            "nonce=" + encodeURI(nonce) + "&" +
            "state=" + encodeURI(state);

        window.location.href = url;
    }

    public AuthorizedCallback(): any {
        console.log("BEGIN AuthorizedCallback, no auth data");
        this.ResetAuthorizationData();

        var hash: string = window.location.hash.substr(1);

        var result: any = hash.split("&").reduce(function (result: any, item: any): any {
            var parts: any = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});

        console.log(result);
        console.log("AuthorizedCallback created, begin token validation");

        var token: string = "";
        var id_token: string = "";
        var authResponseIsValid: boolean = false;
        if (!result.error) {
            if (result.state !== this.retrieve("authStateControl")) {
                console.log("AuthorizedCallback incorrect state");
            } else {
                token = result.access_token;
                id_token = result.id_token;

                var dataIdToken: any = this.getDataFromToken(id_token);
                console.log(dataIdToken);

                // validate nonce
                if (dataIdToken.nonce !== this.retrieve("authNonce")) {
                    console.log("AuthorizedCallback incorrect nonce");
                } else {
                    this.store("authNonce", "");
                    this.store("authStateControl", "");

                    authResponseIsValid = true;
                    console.log("AuthorizedCallback state and nonce validated, returning access token");
                }
            }
        }

        if (authResponseIsValid) {
            this.SetAuthorizationData(token, id_token);
            console.log(this.retrieve("authorizationData"));
            this._router.navigate(["DataEventRecords/"]);
        } else {
            this.ResetAuthorizationData();
            this._router.navigate(["Unauthorized"]);
        }
    }

    public Logoff(): void {
        this.ResetAuthorizationData();

        // tODO logout on IdentityServer4
    }

    public HandleError(error: any): void {
        console.log(error);
        if (error.status === 403) {
            this._router.navigate(["Forbidden"]);
        } else if (error.status === 401) {
            this.ResetAuthorizationData();
            this._router.navigate(["Unauthorized"]);
        }
    }

    private urlBase64Decode(str: string): any {
        var output: string = str.replace("-", "+").replace("_", "/");
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += "==";
                break;
            case 3:
                output += "=";
                break;
            default:
                throw "Illegal base64url string!";
        }

        return window.atob(output);
    }

    private getDataFromToken(token: string): any {
        var data: any = {};
        if (typeof token !== "undefined") {
            var encoded: any = token.split(".")[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    private retrieve(key: string): any {
        var item: any = this.storage.getItem(key);

        if (item && item !== "undefined") {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    private store(key: string, value: any): void {
        this.storage.setItem(key, JSON.stringify(value));
    }
}