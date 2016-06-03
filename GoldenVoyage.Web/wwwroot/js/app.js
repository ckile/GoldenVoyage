webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(97);
	var http_1 = __webpack_require__(280);
	var router_deprecated_1 = __webpack_require__(301);
	var app_cmp_1 = __webpack_require__(333);
	var app_constants_1 = __webpack_require__(337);
	var security_service_1 = __webpack_require__(334);
	var layout_1 = __webpack_require__(345);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_cmp_1.AppComponent, [
	    router_deprecated_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    app_constants_1.Configuration,
	    security_service_1.SecurityService,
	    layout_1.LayoutConfiguration
	]).then(function (success) { return console.log("启动完成！"); }, function (error) { return console.log(error); });


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
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(301);
	var security_service_1 = __webpack_require__(334);
	var header_cmp_1 = __webpack_require__(338);
	var sidebar_cmp_1 = __webpack_require__(339);
	var forbidden_cmp_1 = __webpack_require__(340);
	var unauthorized_cmp_1 = __webpack_require__(341);
	var dashboard_cmp_1 = __webpack_require__(342);
	var walkin_cmp_1 = __webpack_require__(343);
	var roomview_cmp_1 = __webpack_require__(344);
	var AppComponent = (function () {
	    function AppComponent(securityService) {
	        this.securityService = securityService;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        if (window.location.hash) {
	            console.log("ngOnInit _securityService.AuthorizedCallback");
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
	            selector: "gv-app",
	            templateUrl: "tmpls/app.cmp.html",
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES, sidebar_cmp_1.SidebarComponent, header_cmp_1.HeaderComponent],
	            providers: [
	                router_deprecated_1.ROUTER_PROVIDERS
	            ],
	            events: []
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: "/Forbidden", name: "Forbidden", component: forbidden_cmp_1.ForbiddenComponent },
	            { path: "/Unauthorized", name: "Unauthorized", component: unauthorized_cmp_1.UnauthorizedComponent },
	            { path: "/Dashboard", name: "Dashboard", component: dashboard_cmp_1.DashboardComponent, useAsDefault: true },
	            { path: "/Walkin", name: "Walkin", component: walkin_cmp_1.WalkinComponent },
	            { path: "/RoomView", name: "RoomView", component: roomview_cmp_1.RoomviewComponent }
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
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(280);
	__webpack_require__(335);
	var app_constants_1 = __webpack_require__(337);
	var router_deprecated_1 = __webpack_require__(301);
	var SecurityService = (function () {
	    function SecurityService(_http, _configuration, _router) {
	        this._http = _http;
	        this._configuration = _configuration;
	        this._router = _router;
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
	        var authorizationUrl = this._configuration.IdentityServer + "/connect/authorize";
	        var client_id = "webclient";
	        var redirect_uri = this._configuration.WebServer;
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
	            this._router.navigate(["DataEventRecords/"]);
	        }
	        else {
	            this.ResetAuthorizationData();
	            this._router.navigate(["Unauthorized"]);
	        }
	    };
	    SecurityService.prototype.Logoff = function () {
	        this.ResetAuthorizationData();
	    };
	    SecurityService.prototype.HandleError = function (error) {
	        console.log(error);
	        if (error.status === 403) {
	            this._router.navigate(["Forbidden"]);
	        }
	        else if (error.status === 401) {
	            this.ResetAuthorizationData();
	            this._router.navigate(["Unauthorized"]);
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
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, router_deprecated_1.Router])
	    ], SecurityService);
	    return SecurityService;
	}());
	exports.SecurityService = SecurityService;


/***/ },

/***/ 337:
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
	var core_1 = __webpack_require__(1);
	var Configuration = (function () {
	    function Configuration() {
	        this.IdentityServer = "http://localhost:51647";
	        this.ApiServer = "http://localhost:54455";
	        this.WebServer = "http://localhost:49288";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 338:
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
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(301);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	    };
	    HeaderComponent = __decorate([
	        core_1.Component({
	            selector: "gv-header",
	            templateUrl: "tmpls/layout/header.cmp.html",
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HeaderComponent);
	    return HeaderComponent;
	}());
	exports.HeaderComponent = HeaderComponent;


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
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(301);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	    }
	    SidebarComponent.prototype.ngOnInit = function () { };
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: "gv-sidebar",
	            templateUrl: "tmpls/layout/sidebar.cmp.html",
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;


/***/ },

/***/ 340:
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
	var core_1 = __webpack_require__(1);
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
	            templateUrl: 'tmpls/layout/forbidden.cmp.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ForbiddenComponent);
	    return ForbiddenComponent;
	}());
	exports.ForbiddenComponent = ForbiddenComponent;


/***/ },

/***/ 341:
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
	var core_1 = __webpack_require__(1);
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
	            templateUrl: 'tmpls/layout/unauthorized.cmp.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UnauthorizedComponent);
	    return UnauthorizedComponent;
	}());
	exports.UnauthorizedComponent = UnauthorizedComponent;


/***/ },

/***/ 342:
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
	var core_1 = __webpack_require__(1);
	var DashboardComponent = (function () {
	    function DashboardComponent() {
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: "gv-dashboard",
	            templateUrl: "tmpls/layout/dashboard.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DashboardComponent);
	    return DashboardComponent;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 343:
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
	var core_1 = __webpack_require__(1);
	var WalkinComponent = (function () {
	    function WalkinComponent() {
	    }
	    WalkinComponent.prototype.ngOnInit = function () {
	    };
	    WalkinComponent = __decorate([
	        core_1.Component({
	            selector: "gv-walkin",
	            templateUrl: "tmpls/walkin/walkin.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WalkinComponent);
	    return WalkinComponent;
	}());
	exports.WalkinComponent = WalkinComponent;


/***/ },

/***/ 344:
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
	var core_1 = __webpack_require__(1);
	var RoomviewComponent = (function () {
	    function RoomviewComponent() {
	    }
	    RoomviewComponent.prototype.ngOnInit = function () {
	    };
	    RoomviewComponent = __decorate([
	        core_1.Component({
	            selector: "gv-roomview",
	            templateUrl: "tmpls/roomview/roomview.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RoomviewComponent);
	    return RoomviewComponent;
	}());
	exports.RoomviewComponent = RoomviewComponent;


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var LayoutConfiguration = (function () {
	    function LayoutConfiguration() {
	        this.panelActionRunning = false;
	    }
	    LayoutConfiguration.prototype.handleSlimScroll = function () {
	        var _this = this;
	        $("[data-scrollbar=true]").each(function () {
	            _this.generateSlimScroll($(_this));
	        });
	    };
	    LayoutConfiguration.prototype.generateSlimScroll = function (element) {
	        if ($(element).attr("data-init")) {
	            return;
	        }
	        var dataHeight = $(element).attr("data-height");
	        dataHeight = (!dataHeight) ? $(element).height().toString() : dataHeight;
	        var scrollBarOption = {
	            height: dataHeight,
	            alwaysVisible: true
	        };
	        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	            $(element).css('height', dataHeight);
	            $(element).css('overflow-x', 'scroll');
	        }
	        else {
	            $(element).slimScroll(scrollBarOption);
	        }
	        $(element).attr('data-init', "true");
	    };
	    LayoutConfiguration.prototype.handleSidebarMenu = function () {
	        $('.sidebar .nav > .has-sub > a').click(function () {
	            var target = $(this).next('.sub-menu');
	            var otherMenu = '.sidebar .nav > li.has-sub > .sub-menu';
	            if ($('.page-sidebar-minified').length === 0) {
	                $(otherMenu).not(target).slideUp(250, function () {
	                    $(this).closest('li').removeClass('expand');
	                });
	                $(target).slideToggle(250, function () {
	                    var targetLi = $(this).closest('li');
	                    if ($(targetLi).hasClass('expand')) {
	                        $(targetLi).removeClass('expand');
	                    }
	                    else {
	                        $(targetLi).addClass('expand');
	                    }
	                });
	            }
	        });
	        $('.sidebar .nav > .has-sub .sub-menu li.has-sub > a').click(function () {
	            if ($('.page-sidebar-minified').length === 0) {
	                var target = $(this).next('.sub-menu');
	                $(target).slideToggle(250);
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handleSidebarMinify = function () {
	        $('[data-click=sidebar-minify]').click(function (e) {
	            e.preventDefault();
	            var sidebarClass = 'page-sidebar-minified';
	            var targetContainer = '#page-container';
	            $('#sidebar [data-scrollbar="true"]').css('margin-top', '0');
	            $('#sidebar [data-scrollbar="true"]').removeAttr('data-init');
	            $('#sidebar [data-scrollbar=true]').stop();
	            if ($(targetContainer).hasClass(sidebarClass)) {
	                $(targetContainer).removeClass(sidebarClass);
	                if ($(targetContainer).hasClass('page-sidebar-fixed')) {
	                    if ($('#sidebar .slimScrollDiv').length !== 0) {
	                        $('#sidebar [data-scrollbar="true"]').slimScroll();
	                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
	                    }
	                    this.generateSlimScroll($('#sidebar [data-scrollbar="true"]'));
	                    $('#sidebar [data-scrollbar=true]').trigger('mouseover');
	                }
	                else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	                    if ($('#sidebar .slimScrollDiv').length !== 0) {
	                        $('#sidebar [data-scrollbar="true"]').slimScroll();
	                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
	                    }
	                    this.generateSlimScroll($('#sidebar [data-scrollbar="true"]'));
	                }
	            }
	            else {
	                $(targetContainer).addClass(sidebarClass);
	                if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	                    if ($(targetContainer).hasClass('page-sidebar-fixed')) {
	                        $('#sidebar [data-scrollbar="true"]').slimScroll();
	                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
	                    }
	                    $('#sidebar [data-scrollbar=true]').trigger('mouseover');
	                }
	                else {
	                    $('#sidebar [data-scrollbar="true"]').css('margin-top', '0');
	                    $('#sidebar [data-scrollbar="true"]').css('overflow', 'visible');
	                }
	            }
	            $(window).trigger('resize');
	        });
	    };
	    LayoutConfiguration.prototype.handleMobileSidebarToggle = function () {
	        var sidebarProgress = false;
	        $('.sidebar').bind('click touchstart', function (e) {
	            if ($(e.target).closest('.sidebar').length !== 0) {
	                sidebarProgress = true;
	            }
	            else {
	                sidebarProgress = false;
	                e.stopPropagation();
	            }
	        });
	        $(document).bind('click touchstart', function (e) {
	            if ($(e.target).closest('.sidebar').length === 0) {
	                sidebarProgress = false;
	            }
	            if (!e.isPropagationStopped() && sidebarProgress !== true) {
	                if ($('#page-container').hasClass('page-sidebar-toggled')) {
	                    sidebarProgress = true;
	                    $('#page-container').removeClass('page-sidebar-toggled');
	                }
	                if ($(window).width() <= 767) {
	                    if ($('#page-container').hasClass('page-right-sidebar-toggled')) {
	                        sidebarProgress = true;
	                        $('#page-container').removeClass('page-right-sidebar-toggled');
	                    }
	                }
	            }
	        });
	        $('[data-click=right-sidebar-toggled]').click(function (e) {
	            e.stopPropagation();
	            var targetContainer = '#page-container';
	            var targetClass = 'page-right-sidebar-collapsed';
	            targetClass = ($(window).width() < 979) ? 'page-right-sidebar-toggled' : targetClass;
	            if ($(targetContainer).hasClass(targetClass)) {
	                $(targetContainer).removeClass(targetClass);
	            }
	            else if (sidebarProgress !== true) {
	                $(targetContainer).addClass(targetClass);
	            }
	            else {
	                sidebarProgress = false;
	            }
	            if ($(window).width() < 480) {
	                $('#page-container').removeClass('page-sidebar-toggled');
	            }
	        });
	        $('[data-click=sidebar-toggled]').click(function (e) {
	            e.stopPropagation();
	            var sidebarClass = 'page-sidebar-toggled';
	            var targetContainer = '#page-container';
	            if ($(targetContainer).hasClass(sidebarClass)) {
	                $(targetContainer).removeClass(sidebarClass);
	            }
	            else if (sidebarProgress !== true) {
	                $(targetContainer).addClass(sidebarClass);
	            }
	            else {
	                sidebarProgress = false;
	            }
	            if ($(window).width() < 480) {
	                $('#page-container').removeClass('page-right-sidebar-toggled');
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handlePageContentView = function () {
	        "use strict";
	        $.when($('#page-loader').addClass('hide')).done(function () {
	            $('#page-container').addClass('in');
	        });
	    };
	    LayoutConfiguration.prototype.handlePanelAction = function () {
	        "use strict";
	        if (this.panelActionRunning) {
	            return false;
	        }
	        this.panelActionRunning = true;
	        $(document).on('hover', '[data-click=panel-remove]', function (e) {
	            $(this).tooltip({
	                title: 'Remove',
	                placement: 'bottom',
	                trigger: 'hover',
	                container: 'body'
	            });
	            $(this).tooltip('show');
	        });
	        $(document).on('click', '[data-click=panel-remove]', function (e) {
	            e.preventDefault();
	            $(this).tooltip('destroy');
	            $(this).closest('.panel').remove();
	        });
	        $(document).on('hover', '[data-click=panel-collapse]', function (e) {
	            $(this).tooltip({
	                title: 'Collapse / Expand',
	                placement: 'bottom',
	                trigger: 'hover',
	                container: 'body'
	            });
	            $(this).tooltip('show');
	        });
	        $(document).on('click', '[data-click=panel-collapse]', function (e) {
	            e.preventDefault();
	            $(this).closest('.panel').find('.panel-body').slideToggle();
	        });
	        $(document).on('hover', '[data-click=panel-reload]', function (e) {
	            $(this).tooltip({
	                title: 'Reload',
	                placement: 'bottom',
	                trigger: 'hover',
	                container: 'body'
	            });
	            $(this).tooltip('show');
	        });
	        $(document).on('click', '[data-click=panel-reload]', function (e) {
	            e.preventDefault();
	            var target = $(this).closest('.panel');
	            if (!$(target).hasClass('panel-loading')) {
	                var targetBody = $(target).find('.panel-body');
	                var spinnerHtml = '<div class="panel-loader"><span class="spinner-small"></span></div>';
	                $(target).addClass('panel-loading');
	                $(targetBody).prepend(spinnerHtml);
	                setTimeout(function () {
	                    $(target).removeClass('panel-loading');
	                    $(target).find('.panel-loader').remove();
	                }, 2000);
	            }
	        });
	        $(document).on('hover', '[data-click=panel-expand]', function (e) {
	            $(this).tooltip({
	                title: 'Expand / Compress',
	                placement: 'bottom',
	                trigger: 'hover',
	                container: 'body'
	            });
	            $(this).tooltip('show');
	        });
	        $(document).on('click', '[data-click=panel-expand]', function (e) {
	            e.preventDefault();
	            var target = $(this).closest('.panel');
	            var targetBody = $(target).find('.panel-body');
	            var targetTop = 40;
	            if ($(targetBody).length !== 0) {
	                var targetOffsetTop = $(target).offset().top;
	                var targetBodyOffsetTop = $(targetBody).offset().top;
	                targetTop = targetBodyOffsetTop - targetOffsetTop;
	            }
	            if ($('body').hasClass('panel-expand') && $(target).hasClass('panel-expand')) {
	                $('body, .panel').removeClass('panel-expand');
	                $('.panel').removeAttr('style');
	                $(targetBody).removeAttr('style');
	            }
	            else {
	                $('body').addClass('panel-expand');
	                $(this).closest('.panel').addClass('panel-expand');
	                if ($(targetBody).length !== 0 && targetTop != 40) {
	                    var finalHeight = 40;
	                    $(target).find(' > *').each(function () {
	                        var targetClass = $(this).attr('class');
	                        if (targetClass != 'panel-heading' && targetClass != 'panel-body') {
	                            finalHeight += $(this).height() + 30;
	                        }
	                    });
	                    if (finalHeight != 40) {
	                        $(targetBody).css('top', finalHeight + 'px');
	                    }
	                }
	            }
	            $(window).trigger('resize');
	        });
	    };
	    LayoutConfiguration.prototype.handleDraggablePanel = function () {
	        var target = $('.panel').parent('[class*=col]');
	        var targetHandle = '.panel-heading';
	        var connectedTarget = '.row > [class*=col]';
	        $(target).sortable({
	            handle: targetHandle,
	            connectWith: connectedTarget,
	            stop: function (event, ui) {
	                ui.item.find('.panel-title').append('<i class="fa fa-refresh fa-spin m-l-5" data-id="title-spinner"></i>');
	                this.handleSavePanelPosition(ui.item);
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handelTooltipPopoverActivation = function () {
	        $('[data-toggle=tooltip]').tooltip();
	        $('[data-toggle=popover]').popover();
	    };
	    LayoutConfiguration.prototype.handleScrollToTopButton = function () {
	        $(document).scroll(function () {
	            var totalScroll = $(document).scrollTop();
	            if (totalScroll >= 200) {
	                $('[data-click=scroll-top]').addClass('in');
	            }
	            else {
	                $('[data-click=scroll-top]').removeClass('in');
	            }
	        });
	        $('[data-click=scroll-top]').click(function (e) {
	            e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $("body").offset().top
	            }, 500);
	        });
	    };
	    LayoutConfiguration.prototype.handleThemePageStructureControl = function () {
	        if ($.cookie && $.cookie('theme')) {
	            if ($('.theme-list').length !== 0) {
	                $('.theme-list [data-theme]').closest('li').removeClass('active');
	                $('.theme-list [data-theme="' + $.cookie('theme') + '"]').closest('li').addClass('active');
	            }
	            var cssFileSrc = 'assets/css/theme/' + $.cookie('theme') + '.css';
	            $('#theme').attr('href', cssFileSrc);
	        }
	        if ($.cookie && $.cookie('sidebar-styling')) {
	            if ($('.sidebar').length !== 0 && $.cookie('sidebar-styling') == 'grid') {
	                $('.sidebar').addClass('sidebar-grid');
	                $('[name=sidebar-styling] option[value="2"]').prop('selected', true);
	            }
	        }
	        if ($.cookie && $.cookie('header-styling')) {
	            if ($('.header').length !== 0 && $.cookie('header-styling') == 'navbar-inverse') {
	                $('.header').addClass('navbar-inverse');
	                $('[name=header-styling] option[value="2"]').prop('selected', true);
	            }
	        }
	        if ($.cookie && $.cookie('content-gradient')) {
	            if ($('#page-container').length !== 0 && $.cookie('content-gradient') == 'enabled') {
	                $('#page-container').addClass('gradient-enabled');
	                $('[name=content-gradient] option[value="2"]').prop('selected', true);
	            }
	        }
	        if ($.cookie && $.cookie('content-styling')) {
	            if ($('body').length !== 0 && $.cookie('content-styling') == 'black') {
	                $('body').addClass('flat-black');
	                $('[name=content-styling] option[value="2"]').prop('selected', true);
	            }
	        }
	        $('.theme-list [data-theme]').click(function () {
	            var cssFileSrc = 'assets/css/theme/' + $(this).attr('data-theme') + '.css';
	            $('#theme').attr('href', cssFileSrc);
	            $('.theme-list [data-theme]').not(this).closest('li').removeClass('active');
	            $(this).closest('li').addClass('active');
	            $.cookie('theme', $(this).attr('data-theme'));
	        });
	        $('.theme-panel [name=header-styling]').on('change', function () {
	            var targetClassAdd = ($(this).val() == 1) ? 'navbar-default' : 'navbar-inverse';
	            var targetClassRemove = ($(this).val() == 1) ? 'navbar-inverse' : 'navbar-default';
	            $('#header').removeClass(targetClassRemove).addClass(targetClassAdd);
	            $.cookie('header-styling', targetClassAdd);
	        });
	        $('.theme-panel [name=sidebar-styling]').on('change', function () {
	            if ($(this).val() == 2) {
	                $('#sidebar').addClass('sidebar-grid');
	                $.cookie('sidebar-styling', 'grid');
	            }
	            else {
	                $('#sidebar').removeClass('sidebar-grid');
	                $.cookie('sidebar-styling', 'default');
	            }
	        });
	        $('.theme-panel [name=content-gradient]').on('change', function () {
	            if ($(this).val() == 2) {
	                $('#page-container').addClass('gradient-enabled');
	                $.cookie('content-gradient', 'enabled');
	            }
	            else {
	                $('#page-container').removeClass('gradient-enabled');
	                $.cookie('content-gradient', 'disabled');
	            }
	        });
	        $(document).on('change', '.theme-panel [name=content-styling]', function () {
	            if ($(this).val() == 2) {
	                $('body').addClass('flat-black');
	                $.cookie('content-styling', 'black');
	            }
	            else {
	                $('body').removeClass('flat-black');
	                $.cookie('content-styling', 'default');
	            }
	        });
	        $(document).on('change', '.theme-panel [name=sidebar-fixed]', function () {
	            if ($(this).val() == 1) {
	                if ($('.theme-panel [name=header-fixed]').val() == 2) {
	                    alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
	                    $('.theme-panel [name=header-fixed] option[value="1"]').prop('selected', true);
	                    $('#header').addClass('navbar-fixed-top');
	                    $('#page-container').addClass('page-header-fixed');
	                }
	                $('#page-container').addClass('page-sidebar-fixed');
	                if (!$('#page-container').hasClass('page-sidebar-minified')) {
	                    this.generateSlimScroll($('.sidebar [data-scrollbar="true"]'));
	                }
	            }
	            else {
	                $('#page-container').removeClass('page-sidebar-fixed');
	                if ($('.sidebar .slimScrollDiv').length !== 0) {
	                    if ($(window).width() <= 979) {
	                        $('.sidebar').each(function () {
	                            if (!($('#page-container').hasClass('page-with-two-sidebar') && $(this).hasClass('sidebar-right'))) {
	                                $(this).find('.slimScrollBar').remove();
	                                $(this).find('.slimScrollRail').remove();
	                                $(this).find('[data-scrollbar="true"]').removeAttr('style');
	                                var targetElement = $(this).find('[data-scrollbar="true"]').parent();
	                                var targetHtml = $(targetElement).html();
	                                $(targetElement).replaceWith(targetHtml);
	                            }
	                        });
	                    }
	                    else if ($(window).width() > 979) {
	                        $('.sidebar [data-scrollbar="true"]').slimScroll();
	                        $('.sidebar [data-scrollbar="true"]').removeAttr('style');
	                    }
	                }
	                if ($('#page-container .sidebar-bg').length === 0) {
	                    $('#page-container').append('<div class="sidebar-bg"></div>');
	                }
	            }
	        });
	        $(document).on('change', '.theme-panel [name=header-fixed]', function () {
	            if ($(this).val() == 1) {
	                $('#header').addClass('navbar-fixed-top');
	                $('#page-container').addClass('page-header-fixed');
	                $.cookie('header-fixed', true);
	            }
	            else {
	                if ($('.theme-panel [name=sidebar-fixed]').val() == 1) {
	                    alert('Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.');
	                    $('.theme-panel [name=sidebar-fixed] option[value="2"]').prop('selected', true);
	                    $('#page-container').removeClass('page-sidebar-fixed');
	                    if ($('#page-container .sidebar-bg').length === 0) {
	                        $('#page-container').append('<div class="sidebar-bg"></div>');
	                    }
	                }
	                $('#header').removeClass('navbar-fixed-top');
	                $('#page-container').removeClass('page-header-fixed');
	                $.cookie('header-fixed', false);
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handleAfterPageLoadAddClass = function () {
	        if ($('[data-pageload-addclass]').length !== 0) {
	            $(window).load(function () {
	                $('[data-pageload-addclass]').each(function () {
	                    var targetClass = $(this).attr('data-pageload-addclass');
	                    $(this).addClass(targetClass);
	                });
	            });
	        }
	    };
	    LayoutConfiguration.prototype.handleSavePanelPosition = function (element) {
	        "use strict";
	        if ($('.ui-sortable').length !== 0) {
	            var newValue = [];
	            var index = 0;
	            $.when($('.ui-sortable').each(function () {
	                var panelSortableElement = $(this).find('[data-sortable-id]');
	                if (panelSortableElement.length !== 0) {
	                    var columnValue = [];
	                    $(panelSortableElement).each(function () {
	                        var targetSortId = $(this).attr('data-sortable-id');
	                        columnValue.push({ id: targetSortId });
	                    });
	                    newValue.push(columnValue);
	                }
	                else {
	                    newValue.push([]);
	                }
	                index++;
	            })).done(function () {
	                var targetPage = window.location.href;
	                targetPage = targetPage.split('?');
	                targetPage = targetPage[0];
	                localStorage.setItem(targetPage, JSON.stringify(newValue));
	                $(element).find('[data-id="title-spinner"]').delay(500).fadeOut(500, function () {
	                    $(this).remove();
	                });
	            });
	        }
	    };
	    LayoutConfiguration.prototype.handleLocalStorage = function () {
	        if (typeof (Storage) !== 'undefined' && typeof (localStorage) !== 'undefined') {
	            var targetPage = window.location.href;
	            targetPage = targetPage.split('?');
	            targetPage = targetPage[0];
	            var panelPositionData = localStorage.getItem(targetPage);
	            if (panelPositionData) {
	                panelPositionData = JSON.parse(panelPositionData);
	                var i = 0;
	                $('.panel').parent('[class*="col-"]').each(function () {
	                    var storageData = panelPositionData[i];
	                    var targetColumn = $(this);
	                    if (storageData) {
	                        $.each(storageData, function (index, data) {
	                            var targetId = $('[data-sortable-id="' + data.id + '"]').not('[data-init="true"]');
	                            if ($(targetId).length !== 0) {
	                                var targetHtml = $(targetId).clone();
	                                $(targetId).remove();
	                                $(targetColumn).append(targetHtml);
	                                $('[data-sortable-id="' + data.id + '"]').attr('data-init', 'true');
	                            }
	                        });
	                    }
	                    i++;
	                });
	            }
	        }
	        else {
	            alert('Your browser is not supported with the local storage');
	        }
	    };
	    LayoutConfiguration.prototype.handleIEFullHeightContent = function () {
	        var userAgent = window.navigator.userAgent;
	        var msie = userAgent.indexOf("MSIE ");
	        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
	            $('.vertical-box-row [data-scrollbar="true"][data-height="100%"]').each(function () {
	                var targetRow = $(this).closest('.vertical-box-row');
	                var targetHeight = $(targetRow).height();
	                $(targetRow).find('.vertical-box-cell').height(targetHeight);
	            });
	        }
	    };
	    LayoutConfiguration.prototype.handleUnlimitedTabsRender = function () {
	        function handleTabOverflowScrollWidth(obj, animationSpeed) {
	            var marginLeft = parseInt($(obj).css('margin-left'));
	            var viewWidth = $(obj).width();
	            var prevWidth = $(obj).find('li.active').width();
	            var speed = (animationSpeed > -1) ? animationSpeed : 150;
	            var fullWidth = 0;
	            $(obj).find('li.active').prevAll().each(function () {
	                prevWidth += $(this).width();
	            });
	            $(obj).find('li').each(function () {
	                fullWidth += $(this).width();
	            });
	            if (prevWidth >= viewWidth) {
	                var finalScrollWidth = prevWidth - viewWidth;
	                if (fullWidth != prevWidth) {
	                    finalScrollWidth += 40;
	                }
	                $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, speed);
	            }
	            if (prevWidth != fullWidth && fullWidth >= viewWidth) {
	                $(obj).addClass('overflow-right');
	            }
	            else {
	                $(obj).removeClass('overflow-right');
	            }
	            if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
	                $(obj).addClass('overflow-left');
	            }
	            else {
	                $(obj).removeClass('overflow-left');
	            }
	        }
	        function handleTabButtonAction(element, direction) {
	            var obj = $(element).closest('.tab-overflow');
	            var marginLeft = parseInt($(obj).find('.nav.nav-tabs').css('margin-left'));
	            var containerWidth = $(obj).width();
	            var totalWidth = 0;
	            var finalScrollWidth = 0;
	            $(obj).find('li').each(function () {
	                if (!$(this).hasClass('next-button') && !$(this).hasClass('prev-button')) {
	                    totalWidth += $(this).width();
	                }
	            });
	            switch (direction) {
	                case 'next':
	                    var widthLeft = totalWidth + marginLeft - containerWidth;
	                    if (widthLeft <= containerWidth) {
	                        finalScrollWidth = widthLeft - marginLeft;
	                        setTimeout(function () {
	                            $(obj).removeClass('overflow-right');
	                        }, 150);
	                    }
	                    else {
	                        finalScrollWidth = containerWidth - marginLeft - 80;
	                    }
	                    if (finalScrollWidth != 0) {
	                        $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
	                            $(obj).addClass('overflow-left');
	                        });
	                    }
	                    break;
	                case 'prev':
	                    var widthLeft = -marginLeft;
	                    if (widthLeft <= containerWidth) {
	                        $(obj).removeClass('overflow-left');
	                        finalScrollWidth = 0;
	                    }
	                    else {
	                        finalScrollWidth = widthLeft - containerWidth + 80;
	                    }
	                    $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
	                        $(obj).addClass('overflow-right');
	                    });
	                    break;
	            }
	        }
	        function handlePageLoadTabFocus() {
	            $('.tab-overflow').each(function () {
	                var targetWidth = $(this).width();
	                var targetInnerWidth = 0;
	                var targetTab = $(this);
	                var scrollWidth = targetWidth;
	                $(targetTab).find('li').each(function () {
	                    var targetLi = $(this);
	                    targetInnerWidth += $(targetLi).width();
	                    if ($(targetLi).hasClass('active') && targetInnerWidth > targetWidth) {
	                        scrollWidth -= targetInnerWidth;
	                    }
	                });
	                handleTabOverflowScrollWidth(this, 0);
	            });
	        }
	        $('[data-click="next-tab"]').click(function (e) {
	            e.preventDefault();
	            handleTabButtonAction(this, 'next');
	        });
	        $('[data-click="prev-tab"]').click(function (e) {
	            e.preventDefault();
	            handleTabButtonAction(this, 'prev');
	        });
	        $(window).resize(function () {
	            $('.tab-overflow .nav.nav-tabs').removeAttr('style');
	            handlePageLoadTabFocus();
	        });
	        handlePageLoadTabFocus();
	    };
	    LayoutConfiguration.prototype.handleMobileSidebar = function () {
	        "use strict";
	        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	            if ($('#page-container').hasClass('page-sidebar-minified')) {
	                $('#sidebar [data-scrollbar="true"]').css('overflow', 'visible');
	                $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').slimScroll();
	                $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').removeAttr('style');
	                $('.page-sidebar-minified #sidebar [data-scrollbar=true]').trigger('mouseover');
	            }
	        }
	        var oriTouch = 0;
	        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchstart', function (e) {
	            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	            var touchVertical = touch.pageY;
	            oriTouch = touchVertical - parseInt($(this).closest('[data-scrollbar=true]').css('margin-top'));
	        });
	        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchmove', function (e) {
	            e.preventDefault();
	            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	                var touchVertical = touch.pageY;
	                var elementTop = touchVertical - oriTouch;
	                $(this).closest('[data-scrollbar=true]').css('margin-top', elementTop + 'px');
	            }
	        });
	        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchend', function (e) {
	            var targetScrollBar = $(this).closest('[data-scrollbar=true]');
	            var windowHeight = $(window).height();
	            var sidebarTopPosition = parseInt($('#sidebar').css('padding-top'));
	            var sidebarContainerHeight = $('#sidebar').height();
	            oriTouch = parseInt($(targetScrollBar).css('margin-top'));
	            var sidebarHeight = sidebarTopPosition;
	            $('.sidebar').not('.sidebar-right').find('.nav').each(function () {
	                sidebarHeight += $(this).height();
	            });
	            var finalHeight = -parseInt(oriTouch.toString()) + $('.sidebar').height();
	            if (finalHeight >= sidebarHeight && windowHeight <= sidebarHeight && sidebarContainerHeight <= sidebarHeight) {
	                var finalMargin = windowHeight - sidebarHeight - 20;
	                $(targetScrollBar).animate({ marginTop: finalMargin + 'px' });
	            }
	            else if (parseInt(oriTouch.toString()) >= 0 || sidebarContainerHeight >= sidebarHeight) {
	                $(targetScrollBar).animate({ marginTop: '0px' });
	            }
	            else {
	                finalMargin = oriTouch;
	                $(targetScrollBar).animate({ marginTop: finalMargin + 'px' });
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handleUnlimitedTopMenuRender = function () {
	        "use strict";
	        function handleMenuButtonAction(element, direction) {
	            var obj = $(element).closest('.nav');
	            var marginLeft = parseInt($(obj).css('margin-left'));
	            var containerWidth = $('.top-menu').width() - 88;
	            var totalWidth = 0;
	            var finalScrollWidth = 0;
	            $(obj).find('li').each(function () {
	                if (!$(this).hasClass('menu-control')) {
	                    totalWidth += $(this).width();
	                }
	            });
	            switch (direction) {
	                case 'next':
	                    var widthLeft = totalWidth + marginLeft - containerWidth;
	                    if (widthLeft <= containerWidth) {
	                        finalScrollWidth = widthLeft - marginLeft + 128;
	                        setTimeout(function () {
	                            $(obj).find('.menu-control.menu-control-right').removeClass('show');
	                        }, 150);
	                    }
	                    else {
	                        finalScrollWidth = containerWidth - marginLeft - 128;
	                    }
	                    if (finalScrollWidth != 0) {
	                        $(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
	                            $(obj).find('.menu-control.menu-control-left').addClass('show');
	                        });
	                    }
	                    break;
	                case 'prev':
	                    var widthLeft = -marginLeft;
	                    if (widthLeft <= containerWidth) {
	                        $(obj).find('.menu-control.menu-control-left').removeClass('show');
	                        finalScrollWidth = 0;
	                    }
	                    else {
	                        finalScrollWidth = widthLeft - containerWidth + 88;
	                    }
	                    $(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
	                        $(obj).find('.menu-control.menu-control-right').addClass('show');
	                    });
	                    break;
	            }
	        }
	        function handlePageLoadMenuFocus() {
	            var targetMenu = $('.top-menu .nav');
	            var targetList = $('.top-menu .nav > li');
	            var targetActiveList = $('.top-menu .nav > li.active');
	            var targetContainer = $('.top-menu');
	            var marginLeft = parseInt($(targetMenu).css('margin-left'));
	            var viewWidth = $(targetContainer).width() - 128;
	            var prevWidth = $('.top-menu .nav > li.active').width();
	            var speed = 0;
	            var fullWidth = 0;
	            $(targetActiveList).prevAll().each(function () {
	                prevWidth += $(this).width();
	            });
	            $(targetList).each(function () {
	                if (!$(this).hasClass('menu-control')) {
	                    fullWidth += $(this).width();
	                }
	            });
	            if (prevWidth >= viewWidth) {
	                var finalScrollWidth = prevWidth - viewWidth + 128;
	                $(targetMenu).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, speed);
	            }
	            if (prevWidth != fullWidth && fullWidth >= viewWidth) {
	                $(targetMenu).find('.menu-control.menu-control-right').addClass('show');
	            }
	            else {
	                $(targetMenu).find('.menu-control.menu-control-right').removeClass('show');
	            }
	            if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
	                $(targetMenu).find('.menu-control.menu-control-left').addClass('show');
	            }
	            else {
	                $(targetMenu).find('.menu-control.menu-control-left').removeClass('show');
	            }
	        }
	        $('[data-click="next-menu"]').click(function (e) {
	            e.preventDefault();
	            handleMenuButtonAction(this, 'next');
	        });
	        $('[data-click="prev-menu"]').click(function (e) {
	            e.preventDefault();
	            handleMenuButtonAction(this, 'prev');
	        });
	        $(window).resize(function () {
	            $('.top-menu .nav').removeAttr('style');
	            handlePageLoadMenuFocus();
	        });
	        handlePageLoadMenuFocus();
	    };
	    LayoutConfiguration.prototype.handleTopMenuSubMenu = function () {
	        "use strict";
	        $('.top-menu .sub-menu .has-sub > a').click(function () {
	            var target = $(this).closest('li').find('.sub-menu').first();
	            var otherMenu = $(this).closest('ul').find('.sub-menu').not(target);
	            $(otherMenu).not(target).slideUp(250, function () {
	                $(this).closest('li').removeClass('expand');
	            });
	            $(target).slideToggle(250, function () {
	                var targetLi = $(this).closest('li');
	                if ($(targetLi).hasClass('expand')) {
	                    $(targetLi).removeClass('expand');
	                }
	                else {
	                    $(targetLi).addClass('expand');
	                }
	            });
	        });
	    };
	    LayoutConfiguration.prototype.handleMobileTopMenuSubMenu = function () {
	        "use strict";
	        $('.top-menu .nav > li.has-sub > a').click(function () {
	            if ($(window).width() <= 767) {
	                var target = $(this).closest('li').find('.sub-menu').first();
	                var otherMenu = $(this).closest('ul').find('.sub-menu').not(target);
	                $(otherMenu).not(target).slideUp(250, function () {
	                    $(this).closest('li').removeClass('expand');
	                });
	                $(target).slideToggle(250, function () {
	                    var targetLi = $(this).closest('li');
	                    if ($(targetLi).hasClass('expand')) {
	                        $(targetLi).removeClass('expand');
	                    }
	                    else {
	                        $(targetLi).addClass('expand');
	                    }
	                });
	            }
	        });
	    };
	    LayoutConfiguration.prototype.handleTopMenuMobileToggle = function () {
	        "use strict";
	        $('[data-click="top-menu-toggled"]').click(function () {
	            $('.top-menu').slideToggle(250);
	        });
	    };
	    LayoutConfiguration.prototype.handleClearSidebarSelection = function () {
	        $('.sidebar .nav > li, .sidebar .nav .sub-menu').removeClass('expand').removeAttr('style');
	    };
	    ;
	    LayoutConfiguration.prototype.handleClearSidebarMobileSelection = function () {
	        $('#page-container').removeClass('page-sidebar-toggled');
	    };
	    LayoutConfiguration.prototype.init = function () {
	        this.initSidebar();
	        this.initTopMenu();
	        this.initPageLoad();
	        this.initComponent();
	        this.initLocalStorage();
	    };
	    LayoutConfiguration.prototype.initPageLoad = function () {
	        this.handlePageContentView();
	    };
	    LayoutConfiguration.prototype.initSidebar = function () {
	        this.handleSidebarMenu();
	        this.handleMobileSidebarToggle();
	        this.handleSidebarMinify();
	        this.handleMobileSidebar();
	    };
	    LayoutConfiguration.prototype.initSidebarSelection = function () {
	        this.handleClearSidebarSelection();
	    };
	    LayoutConfiguration.prototype.initSidebarMobileSelection = function () {
	        this.handleClearSidebarMobileSelection();
	    };
	    LayoutConfiguration.prototype.initTopMenu = function () {
	        this.handleUnlimitedTopMenuRender();
	        this.handleTopMenuSubMenu();
	        this.handleMobileTopMenuSubMenu();
	        this.handleTopMenuMobileToggle();
	    };
	    LayoutConfiguration.prototype.initComponent = function () {
	        this.handleIEFullHeightContent();
	        this.handleSlimScroll();
	        this.handleUnlimitedTabsRender();
	        this.handlePanelAction();
	        this.handelTooltipPopoverActivation();
	        this.handleScrollToTopButton();
	        this.handleAfterPageLoadAddClass();
	        this.handleDraggablePanel();
	    };
	    LayoutConfiguration.prototype.initLocalStorage = function () {
	        this.handleLocalStorage();
	    };
	    LayoutConfiguration.prototype.scrollTop = function () {
	        $('html, body').animate({
	            scrollTop: $('body').offset().top
	        }, 0);
	    };
	    LayoutConfiguration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], LayoutConfiguration);
	    return LayoutConfiguration;
	}());
	exports.LayoutConfiguration = LayoutConfiguration;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(346)))

/***/ }

});