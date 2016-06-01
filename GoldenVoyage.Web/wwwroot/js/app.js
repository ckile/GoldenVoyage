webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(280);
	var router_deprecated_1 = __webpack_require__(301);
	var app_cmm_1 = __webpack_require__(333);
	var app_constants_1 = __webpack_require__(339);
	var security_service_1 = __webpack_require__(336);
	platform_browser_dynamic_1.bootstrap(app_cmm_1.AppComponent, [
	    router_deprecated_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    app_constants_1.Configuration,
	    security_service_1.SecurityService
	]);


/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_deprecated_1 = __webpack_require__(301);
	var forbidden_cmm_1 = __webpack_require__(334);
	var unauthorized_cmm_1 = __webpack_require__(335);
	var security_service_1 = __webpack_require__(336);
	var AppComponent = (function () {
	    function AppComponent(securityService) {
	        this.securityService = securityService;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit _securityService.AuthorizedCallback");
	        if (window.location.hash) {
	            this.securityService.AuthorizedCallback();
	        }
	    };
	    AppComponent.prototype.Login = function () {
	        console.log("Do login logic");
	        this.securityService.Authorize();
	    };
	    AppComponent.prototype.Logout = function () {
	        console.log("Do logout logic");
	        this.securityService.Logoff();
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'gv-app',
	            templateUrl: 'tmpls/layout/app.cmm.html',
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
	            providers: [
	                router_deprecated_1.ROUTER_PROVIDERS
	            ]
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: '/Forbidden', name: 'Forbidden', component: forbidden_cmm_1.ForbiddenComponent },
	            { path: '/Unauthorized', name: 'Unauthorized', component: unauthorized_cmm_1.UnauthorizedComponent }
	        ]), 
	        __metadata('design:paramtypes', [security_service_1.SecurityService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var ForbiddenComponent = (function () {
	    function ForbiddenComponent() {
	        this.message = "ForbiddenComponent constructor";
	    }
	    ForbiddenComponent.prototype.ngOnInit = function () {
	    };
	    ForbiddenComponent = __decorate([
	        core_1.Component({
	            selector: 'forbidden',
	            templateUrl: 'tmpls/layout/cmms/forbidden.cmm.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ForbiddenComponent);
	    return ForbiddenComponent;
	}());
	exports.ForbiddenComponent = ForbiddenComponent;


/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var UnauthorizedComponent = (function () {
	    function UnauthorizedComponent() {
	        this.message = "UnauthorizedComponent constructor";
	    }
	    UnauthorizedComponent.prototype.ngOnInit = function () {
	    };
	    UnauthorizedComponent = __decorate([
	        core_1.Component({
	            selector: 'unauthorized',
	            templateUrl: 'tmpls/layout/cmms/unauthorized.cmm.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UnauthorizedComponent);
	    return UnauthorizedComponent;
	}());
	exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(280);
	__webpack_require__(337);
	var app_constants_1 = __webpack_require__(339);
	var router_deprecated_1 = __webpack_require__(301);
	var SecurityService = (function () {
	    function SecurityService(_http, _configuration, _router) {
	        this._http = _http;
	        this._configuration = _configuration;
	        this._router = _router;
	        this.actionUrl = _configuration.IdentityServer + 'api/DataEventRecords/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
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
	        var data = this.getDataFromToken(token);
	        for (var i = 0; i < data.role.length; i++) {
	            if (data.role[i] === "dataEventRecords.admin") {
	                this.HasAdminRole = true;
	                this.store("HasAdminRole", true);
	            }
	        }
	    };
	    SecurityService.prototype.Authorize = function () {
	        this.ResetAuthorizationData();
	        console.log("BEGIN Authorize, no auth data");
	        var authorizationUrl = 'https://localhost:44345/connect/authorize';
	        var client_id = 'angular2client';
	        var redirect_uri = 'https://localhost:44311';
	        var response_type = "id_token token";
	        var scope = "dataEventRecords securedFiles openid";
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
	        var result = hash.split('&').reduce(function (result, item) {
	            var parts = item.split('=');
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
	            this._router.navigate(['DataEventRecords/']);
	        }
	        else {
	            this.ResetAuthorizationData();
	            this._router.navigate(['Unauthorized']);
	        }
	    };
	    SecurityService.prototype.Logoff = function () {
	        this.ResetAuthorizationData();
	    };
	    SecurityService.prototype.HandleError = function (error) {
	        console.log(error);
	        if (error.status == 403) {
	            this._router.navigate(['Forbidden']);
	        }
	        else if (error.status == 401) {
	            this.ResetAuthorizationData();
	            this._router.navigate(['Unauthorized']);
	        }
	    };
	    SecurityService.prototype.urlBase64Decode = function (str) {
	        var output = str.replace('-', '+').replace('_', '/');
	        switch (output.length % 4) {
	            case 0:
	                break;
	            case 2:
	                output += '==';
	                break;
	            case 3:
	                output += '=';
	                break;
	            default:
	                throw 'Illegal base64url string!';
	        }
	        return window.atob(output);
	    };
	    SecurityService.prototype.getDataFromToken = function (token) {
	        var data = {};
	        if (typeof token !== 'undefined') {
	            var encoded = token.split('.')[1];
	            data = JSON.parse(this.urlBase64Decode(encoded));
	        }
	        return data;
	    };
	    SecurityService.prototype.retrieve = function (key) {
	        var item = this.storage.getItem(key);
	        if (item && item !== 'undefined') {
	            return JSON.parse(this.storage.getItem(key));
	        }
	        return;
	    };
	    SecurityService.prototype.store = function (key, value) {
	        this.storage.setItem(key, JSON.stringify(value));
	    };
	    SecurityService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, router_deprecated_1.Router])
	    ], SecurityService);
	    return SecurityService;
	}());
	exports.SecurityService = SecurityService;


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(41);
	var map_1 = __webpack_require__(338);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(46);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var Configuration = (function () {
	    function Configuration() {
	        this.IdentityServer = "https://localhost:44390/";
	        this.ApiServer = "https://localhost:44378/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ }

});