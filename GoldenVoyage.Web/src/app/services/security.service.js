"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var app_constants_1 = require("../app.constants");
var SecurityService = (function () {
    function SecurityService() {
        this.IsAuthorized = false;
        this.HasAdminRole = false;
        this.storage = localStorage;
        if (this.retrieve("IsAuthorized") !== "") {
            this.HasAdminRole = this.retrieve("HasAdminRole");
            this.IsAuthorized = this.retrieve("IsAuthorized");
        }
    }
    SecurityService.prototype.GetToken = function () {
        return this.retrieve("authorizationData");
    };
    SecurityService.prototype.ResetAuthorizationData = function () {
        this.store("authorizationData", "");
        this.store("authorizationDataIdToken", "");
        this.IsAuthorized = false;
        this.HasAdminRole = false;
        this.store("HasAdminRole", false);
        this.store("IsAuthorized", false);
    };
    SecurityService.prototype.SetAuthorizationData = function (token, id_token) {
        if (this.retrieve("authorizationData") !== "") {
            this.store("authorizationData", "");
        }
        this.store("authorizationData", token);
        this.store("authorizationDataIdToken", id_token);
        this.IsAuthorized = true;
        this.store("IsAuthorized", true);
    };
    SecurityService.prototype.Authorize = function () {
        this.ResetAuthorizationData();
        console.log("BEGIN Authorize, no auth data");
        var authorizationUrl = app_constants_1.appConstants.IdentityServer + "/connect/authorize";
        var client_id = "webclient";
        var redirect_uri = app_constants_1.appConstants.WebServer;
        var response_type = "id_token token";
        var scope = "api openid";
        var nonce = "N" + Math.random() + "" + Date.now();
        var state = Date.now() + "" + Math.random();
        this.store("authStateControl", state);
        this.store("authNonce", nonce);
        console.log("AuthorizedController created. adding myautostate: " + this.retrieve("authStateControl"));
        var url = authorizationUrl + "?" +
            "response_type=" + encodeURI(response_type) + "&" +
            "client_id=" + encodeURI(client_id) + "&" +
            "redirect_uri=" + encodeURI(redirect_uri) + "&" +
            "scope=" + encodeURI(scope) + "&" +
            "nonce=" + encodeURI(nonce) + "&" +
            "state=" + encodeURI(state);
        window.location.href = url;
    };
    SecurityService.prototype.AuthorizedCallback = function () {
        console.log("BEGIN AuthorizedCallback, no auth data");
        this.ResetAuthorizationData();
        var hash = window.location.hash.substr(1);
        var result = hash.split("&").reduce(function (result, item) {
            var parts = item.split("=");
            result[parts[0]] = parts[1];
            return result;
        }, {});
        console.log(result);
        console.log("AuthorizedCallback created, begin token validation");
        var token = "";
        var id_token = "";
        var authResponseIsValid = false;
        if (!result.error) {
            if (result.state !== this.retrieve("authStateControl")) {
                console.log("AuthorizedCallback incorrect state");
            }
            else {
                token = result.access_token;
                id_token = result.id_token;
                var dataIdToken = this.getDataFromToken(id_token);
                console.log(dataIdToken);
                if (dataIdToken.nonce !== this.retrieve("authNonce")) {
                    console.log("AuthorizedCallback incorrect nonce");
                }
                else {
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
        }
        else {
            this.ResetAuthorizationData();
        }
    };
    SecurityService.prototype.Logoff = function () {
        this.ResetAuthorizationData();
    };
    SecurityService.prototype.HandleError = function (error) {
        console.log(error);
        if (error.status === 403) {
        }
        else if (error.status === 401) {
            this.ResetAuthorizationData();
        }
    };
    SecurityService.prototype.urlBase64Decode = function (str) {
        var output = str.replace("-", "+").replace("_", "/");
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
    };
    SecurityService.prototype.getDataFromToken = function (token) {
        var data = {};
        if (typeof token !== "undefined") {
            var encoded = token.split(".")[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    SecurityService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== "undefined") {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    SecurityService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    SecurityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map