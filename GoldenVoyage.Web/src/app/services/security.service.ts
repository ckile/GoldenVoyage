import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { appConstants } from "../app.constants"; 

@Injectable()
export class SecurityService {
    private storage: any; 
    constructor( ) {
        this.storage = localStorage; 
        if (this.retrieve("IsAuthorized") !== "") {
            this.HasAdminRole = this.retrieve("HasAdminRole");
            this.IsAuthorized = this.retrieve("IsAuthorized");
        }
    }

    // 是否验证
    public IsAuthorized: boolean = false;
    // 是否管理员
    public HasAdminRole: boolean = false;

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

    }

    public Authorize(): void {
        this.ResetAuthorizationData();

        console.log("BEGIN Authorize, no auth data");

        var authorizationUrl: string = appConstants.IdentityServer + "/connect/authorize";
        var client_id: string = "webclient";
        var redirect_uri: string = appConstants.WebServer;
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
            
        } else {
            this.ResetAuthorizationData(); 
        }
    }

    public Logoff(): void {
        this.ResetAuthorizationData();

        // tODO logout on IdentityServer4
    }

    public HandleError(error: any): void {
        console.log(error);
        if (error.status === 403) { 

        } else if (error.status === 401) {
            this.ResetAuthorizationData(); 
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

    public retrieve(key: string): any {
        var item: any = this.storage.getItem(key);

        if (item && item !== "undefined") {
            return JSON.parse(this.storage.getItem(key));
        }

        return;
    }

    public store(key: string, value: any): void {
        this.storage.setItem(key, JSON.stringify(value));
    }
}