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
	var layout_1 = __webpack_require__(360);
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
	var common_1 = __webpack_require__(181);
	var security_service_1 = __webpack_require__(334);
	var header_cmp_1 = __webpack_require__(338);
	var sidebar_cmp_1 = __webpack_require__(340);
	var forbidden_cmp_1 = __webpack_require__(341);
	var unauthorized_cmp_1 = __webpack_require__(342);
	var dashboard_cmp_1 = __webpack_require__(343);
	var walkin_cmp_1 = __webpack_require__(344);
	var booking_cmp_1 = __webpack_require__(353);
	var roomview_cmp_1 = __webpack_require__(354);
	var guests_cmp_1 = __webpack_require__(355);
	var admin_cmp_1 = __webpack_require__(356);
	var AppComponent = (function () {
	    function AppComponent(securityService) {
	        this.securityService = securityService;
	        this.IsAuthorized = false;
	        this.IsAuthorized = securityService.IsAuthorized;
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        if (window.location.hash) {
	            console.log("ngOnInit _securityService.AuthorizedCallback");
	            this.securityService.AuthorizedCallback();
	        }
	    };
	    AppComponent.prototype.login = function () {
	        console.log("Do login logic");
	        this.IsAuthorized = true;
	    };
	    AppComponent.prototype.logout = function () {
	        console.log("Do logout logic");
	        this.securityService.Logoff();
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: "gv-app",
	            templateUrl: "tmpls/app.cmp.html",
	            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, sidebar_cmp_1.SidebarComponent, header_cmp_1.HeaderComponent],
	            events: []
	        }),
	        router_deprecated_1.RouteConfig([
	            {
	                path: "/Forbidden", name: "Forbidden", component: forbidden_cmp_1.ForbiddenComponent
	            },
	            { path: "/Unauthorized", name: "Unauthorized", component: unauthorized_cmp_1.UnauthorizedComponent },
	            { path: "/Dashboard", name: "Dashboard", component: dashboard_cmp_1.DashboardComponent, useAsDefault: true },
	            { path: "/Walkin", name: "Walkin", component: walkin_cmp_1.WalkinComponent },
	            { path: "/Booking", name: "Booking", component: booking_cmp_1.BookingComponent },
	            { path: "/RoomView", name: "RoomView", component: roomview_cmp_1.RoomviewComponent },
	            { path: "/Guests", name: "Guests", component: guests_cmp_1.GuestsComponent },
	            { path: "/Admin/...", name: "Admin", component: admin_cmp_1.AdminComponent }
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
	var routeractive_directive_1 = __webpack_require__(339);
	var HeaderComponent = (function () {
	    function HeaderComponent() {
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	    };
	    HeaderComponent = __decorate([
	        core_1.Component({
	            selector: "gv-header",
	            templateUrl: "tmpls/layout/header.cmp.html",
	            styleUrls: ["tmpls/layout/header.cmp.css"],
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES, routeractive_directive_1.RouterActive]
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var router_deprecated_1 = __webpack_require__(301);
	var lang_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(1);
	var RouterActive = (function () {
	    function RouterActive(_router, _el, _renderer, _routerLink, routerActiveAttr) {
	        this._router = _router;
	        this._el = _el;
	        this._renderer = _renderer;
	        this._routerLink = _routerLink;
	        this.routerActive = null;
	        this.routerActiveAttr = "active";
	        this.routerActiveAttr = this.defaultAttrValue(routerActiveAttr);
	    }
	    RouterActive.prototype.ngOnInit = function () {
	        var _this = this;
	        this._routerLink.changes.subscribe(function () {
	            if (_this._routerLink.first) {
	                _this.updateClass();
	                _this.findRootRouter()
	                    .subscribe(function () {
	                    _this.updateClass();
	                });
	            }
	        });
	    };
	    RouterActive.prototype.findRootRouter = function () {
	        var router = this._router;
	        while (lang_1.isPresent(router.parent)) {
	            router = router.parent;
	        }
	        return router;
	    };
	    RouterActive.prototype.updateClass = function () {
	        var active = this._routerLink.first.isRouteActive;
	        this._renderer.setElementClass(this._el.nativeElement, this.attrOrProp(), active);
	    };
	    RouterActive.prototype.defaultAttrValue = function (attr) {
	        return this.routerActiveAttr = attr || this.routerActiveAttr;
	    };
	    RouterActive.prototype.attrOrProp = function () {
	        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
	    };
	    RouterActive = __decorate([
	        core_1.Directive({
	            selector: "[router-active],[routerActive]",
	            inputs: ["routerActive"]
	        }),
	        __param(3, core_1.Query(router_deprecated_1.RouterLink)),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Attribute("router-active")), 
	        __metadata('design:paramtypes', [router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
	    ], RouterActive);
	    return RouterActive;
	}());
	exports.RouterActive = RouterActive;


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
	var router_deprecated_1 = __webpack_require__(301);
	var routeractive_directive_1 = __webpack_require__(339);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	    }
	    SidebarComponent.prototype.ngOnInit = function () { };
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: "gv-sidebar",
	            templateUrl: "tmpls/layout/sidebar.cmp.html",
	            styleUrls: ["tmpls/layout/sidebar.cmp.css"],
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES, routeractive_directive_1.RouterActive]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;


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
	var gv_cmp_1 = __webpack_require__(345);
	var WalkinComponent = (function () {
	    function WalkinComponent() {
	        this.disabled = false;
	        this.types = [
	            { name: '张先生', value: '1' },
	            { name: '李先生', value: '2' },
	            { name: '王先生', value: '3' },
	            { name: '刘先生', value: '4' },
	            { name: '陈先生', value: '5' },
	            { name: '付先生', value: '6' }
	        ];
	        this.type = [];
	    }
	    WalkinComponent.prototype.change = function (value) {
	        console.log('Changed data: ', value);
	    };
	    WalkinComponent.prototype.ngOnInit = function () {
	    };
	    WalkinComponent.prototype.ngAfterContentInit = function () {
	    };
	    WalkinComponent.prototype.ngAfterViewInit = function () {
	    };
	    WalkinComponent.prototype.routerOnActivate = function (nextInstruction, prevInstruction) {
	    };
	    WalkinComponent.prototype.setDate = function () {
	    };
	    WalkinComponent = __decorate([
	        core_1.Component({
	            selector: "gv-walkin",
	            templateUrl: "tmpls/walkin/walkin.cmp.html",
	            directives: [gv_cmp_1.GV_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WalkinComponent);
	    return WalkinComponent;
	}());
	exports.WalkinComponent = WalkinComponent;


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var select_cmp_1 = __webpack_require__(346);
	var datepicker_cmp_1 = __webpack_require__(351);
	exports.GV_DIRECTIVES = [select_cmp_1.GvSelectComponent, datepicker_cmp_1.GvDatePickerComponent];


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var select_item_1 = __webpack_require__(347);
	var select_pipes_1 = __webpack_require__(348);
	var common_1 = __webpack_require__(349);
	var off_click_1 = __webpack_require__(350);
	var styles = "\n.ui-select-toggle {\n  position: relative;\n\n  /* hardcoded, should use variable from bootstrap */\n  padding: 0.375rem 0.75rem;\n}\n\n/* Fix Bootstrap dropdown position when inside a input-group */\n.input-group > .dropdown {\n  /* Instead of relative */\n  position: static;\n}\n\n.ui-select-match > .btn {\n  /* Instead of center because of .btn */\n  text-align: left !important;\n}\n\n.ui-select-match > .caret {\n  position: absolute;\n  top: 45%;\n  right: 15px;\n}\n\n.ui-disabled {\n  background-color: #eceeef;\n  border-radius: 4px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n  cursor: not-allowed;\n}\n\n.ui-select-choices {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  overflow-x: hidden;\n  margin-top: 0;\n}\n\n.ui-select-multiple .ui-select-choices {\n  margin-top: 1px;\n}\n\n.ui-select-multiple {\n  height: auto;\n  padding: 3px 3px 0 3px;\n}\n\n.ui-select-multiple input.ui-select-search {\n  background-color: transparent !important; /* To prevent double background when disabled */\n  border: none;\n  outline: none;\n  height: 1.9em;\n  margin-bottom: 3px;\n\n  /* hardcoded, should use variable from bootstrap, but must be adjusted because... reasons */\n  padding: 0.375rem 0.55rem;\n}\n\n.ui-select-multiple .ui-select-match-item {\n  outline: 0;\n  margin: 0 3px 3px 0;\n}\n";
	var optionsTemplate = "\n    <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n        class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n      <li *ngFor=\"let o of options\" role=\"menuitem\">\n        <div class=\"ui-select-choices-row\"\n             [class.active]=\"isActive(o)\"\n             (mouseenter)=\"selectActive(o)\"\n             (click)=\"selectMatch(o, $event)\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <div [innerHtml]=\"o.text | highlight:inputValue\"></div>\n          </a>\n        </div>\n      </li>\n    </ul>\n\n    <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n        class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n      <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n        <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n        <div class=\"dropdown-header\">{{c.text}}</div>\n\n        <div *ngFor=\"let o of c.children\"\n             class=\"ui-select-choices-row\"\n             [class.active]=\"isActive(o)\"\n             (mouseenter)=\"selectActive(o)\"\n             (click)=\"selectMatch(o, $event)\"\n             [ngClass]=\"{'active': isActive(o)}\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n            <div [innerHtml]=\"o.text | highlight:inputValue\"></div>\n          </a>\n        </div>\n      </li>\n    </ul>\n";
	var GvSelectComponent = (function () {
	    function GvSelectComponent(element) {
	        this.allowClear = false;
	        this.placeholder = '';
	        this.idField = 'value';
	        this.textField = 'name';
	        this.initData = [];
	        this.multiple = false;
	        this.data = new core_1.EventEmitter();
	        this.selected = new core_1.EventEmitter();
	        this.removed = new core_1.EventEmitter();
	        this.typed = new core_1.EventEmitter();
	        this.options = [];
	        this.itemObjects = [];
	        this.active = [];
	        this.inputMode = false;
	        this.optionsOpened = false;
	        this.inputValue = '';
	        this._items = [];
	        this._disabled = false;
	        this.element = element;
	        this.clickedOutside = this.clickedOutside.bind(this);
	    }
	    Object.defineProperty(GvSelectComponent.prototype, "items", {
	        set: function (value) {
	            var _this = this;
	            this._items = value;
	            this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField] })); });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GvSelectComponent.prototype, "disabled", {
	        set: function (value) {
	            this._disabled = value;
	            if (this._disabled === true) {
	                this.hideOptions();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GvSelectComponent.prototype.inputEvent = function (e, isUpMode) {
	        if (isUpMode === void 0) { isUpMode = false; }
	        if (e.keyCode === 9) {
	            return;
	        }
	        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
	            e.keyCode === 40 || e.keyCode === 13)) {
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 8) {
	            var el = this.element.nativeElement
	                .querySelector('div.ui-select-container > input');
	            if (!el.value || el.value.length <= 0) {
	                if (this.active.length > 0) {
	                    this.remove(this.active[this.active.length - 1]);
	                }
	                e.preventDefault();
	            }
	        }
	        if (!isUpMode && e.keyCode === 27) {
	            this.hideOptions();
	            this.element.nativeElement.children[0].focus();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 46) {
	            if (this.active.length > 0) {
	                this.remove(this.active[this.active.length - 1]);
	            }
	            e.preventDefault();
	        }
	        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
	            this.behavior.first();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
	            this.behavior.last();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 38) {
	            this.behavior.prev();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 40) {
	            this.behavior.next();
	            e.preventDefault();
	            return;
	        }
	        if (!isUpMode && e.keyCode === 13) {
	            if (this.active.indexOf(this.activeOption) === -1) {
	                this.selectActiveMatch();
	                this.behavior.next();
	            }
	            e.preventDefault();
	            return;
	        }
	        if (e.srcElement) {
	            this.inputValue = e.srcElement.value;
	            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
	            this.doEvent('typed', this.inputValue);
	        }
	    };
	    GvSelectComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.behavior = (this.firstItemHasChildren) ?
	            new ChildrenBehavior(this) : new GenericBehavior(this);
	        if (this.initData) {
	            this.active = this.initData.map(function (data) { return (typeof data === 'string' ? new select_item_1.SelectItem(data) : new select_item_1.SelectItem({ id: data[_this.idField], text: data[_this.textField] })); });
	            this.data.emit(this.active);
	        }
	    };
	    GvSelectComponent.prototype.remove = function (item) {
	        if (this._disabled === true) {
	            return;
	        }
	        if (this.multiple === true && this.active) {
	            var index = this.active.indexOf(item);
	            this.active.splice(index, 1);
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	        if (this.multiple === false) {
	            this.active = [];
	            this.data.next(this.active);
	            this.doEvent('removed', item);
	        }
	    };
	    GvSelectComponent.prototype.doEvent = function (type, value) {
	        if (this[type] && value) {
	            this[type].next(value);
	        }
	    };
	    GvSelectComponent.prototype.clickedOutside = function () {
	        this.inputMode = false;
	        this.optionsOpened = false;
	    };
	    Object.defineProperty(GvSelectComponent.prototype, "firstItemHasChildren", {
	        get: function () {
	            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GvSelectComponent.prototype.matchClick = function (e) {
	        if (this._disabled === true) {
	            return;
	        }
	        this.inputMode = !this.inputMode;
	        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
	            this.focusToInput();
	            this.open();
	        }
	    };
	    GvSelectComponent.prototype.mainClick = function (event) {
	        if (this.inputMode === true || this._disabled === true) {
	            return;
	        }
	        if (event.keyCode === 46) {
	            event.preventDefault();
	            this.inputEvent(event);
	            return;
	        }
	        if (event.keyCode === 8) {
	            event.preventDefault();
	            this.inputEvent(event, true);
	            return;
	        }
	        if (event.keyCode === 9 || event.keyCode === 13 ||
	            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
	            event.preventDefault();
	            return;
	        }
	        this.inputMode = true;
	        var value = String
	            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
	            .toLowerCase();
	        this.focusToInput(value);
	        this.open();
	        event.srcElement.value = value;
	        this.inputEvent(event);
	    };
	    GvSelectComponent.prototype.selectActive = function (value) {
	        this.activeOption = value;
	    };
	    GvSelectComponent.prototype.isActive = function (value) {
	        return this.activeOption.text === value.text;
	    };
	    GvSelectComponent.prototype.focusToInput = function (value) {
	        var _this = this;
	        if (value === void 0) { value = ''; }
	        setTimeout(function () {
	            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
	            if (el) {
	                el.focus();
	                el.value = value;
	            }
	        }, 0);
	    };
	    GvSelectComponent.prototype.open = function () {
	        var _this = this;
	        this.options = this.itemObjects
	            .filter(function (option) { return (_this.multiple === false ||
	            _this.multiple === true &&
	                !_this.active.find(function (o) { return option.text === o.text; })); });
	        if (this.options.length > 0) {
	            this.behavior.first();
	        }
	        this.optionsOpened = true;
	    };
	    GvSelectComponent.prototype.hideOptions = function () {
	        this.inputMode = false;
	        this.optionsOpened = false;
	    };
	    GvSelectComponent.prototype.selectActiveMatch = function () {
	        this.selectMatch(this.activeOption);
	    };
	    GvSelectComponent.prototype.selectMatch = function (value, e) {
	        if (e === void 0) { e = void 0; }
	        if (e) {
	            e.stopPropagation();
	            e.preventDefault();
	        }
	        if (this.options.length <= 0) {
	            return;
	        }
	        if (this.multiple === true) {
	            this.active.push(value);
	            this.data.next(this.active);
	        }
	        if (this.multiple === false) {
	            this.active[0] = value;
	            this.data.next(this.active[0]);
	        }
	        this.doEvent('selected', value);
	        this.hideOptions();
	        if (this.multiple === true) {
	            this.focusToInput('');
	        }
	        else {
	            this.focusToInput(select_pipes_1.stripTags(value.text));
	            this.element.nativeElement.querySelector('.ui-select-container').focus();
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], GvSelectComponent.prototype, "allowClear", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], GvSelectComponent.prototype, "placeholder", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], GvSelectComponent.prototype, "idField", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], GvSelectComponent.prototype, "textField", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], GvSelectComponent.prototype, "initData", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], GvSelectComponent.prototype, "multiple", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], GvSelectComponent.prototype, "items", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean), 
	        __metadata('design:paramtypes', [Boolean])
	    ], GvSelectComponent.prototype, "disabled", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GvSelectComponent.prototype, "data", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GvSelectComponent.prototype, "selected", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GvSelectComponent.prototype, "removed", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GvSelectComponent.prototype, "typed", void 0);
	    GvSelectComponent = __decorate([
	        core_1.Component({
	            selector: 'gv-select',
	            directives: [off_click_1.OffClickDirective],
	            pipes: [select_pipes_1.HighlightPipe],
	            styles: [styles],
	            template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"active[0].text\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" style=\"margin-right: 10px; padding: 0;\"\n          (click)=\"remove(activeOption)\" class=\"close pull-right\">\n          &times;\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n      " + optionsTemplate + "\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-sm\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 10px; padding: 0;\"\n                  (click)=\"remove(a)\">&times;</a>\n               <span>{{a.text}}</span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n    " + optionsTemplate + "\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], GvSelectComponent);
	    return GvSelectComponent;
	}());
	exports.GvSelectComponent = GvSelectComponent;
	var Behavior = (function () {
	    function Behavior(actor) {
	        this.optionsMap = new Map();
	        this.actor = actor;
	    }
	    Behavior.prototype.fillOptionsMap = function () {
	        var _this = this;
	        this.optionsMap.clear();
	        var startPos = 0;
	        this.actor.itemObjects
	            .map(function (item) {
	            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
	        });
	    };
	    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
	        if (optionsMap === void 0) { optionsMap = void 0; }
	        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
	        if (!container) {
	            return;
	        }
	        var choices = container.querySelectorAll('.ui-select-choices-row');
	        if (choices.length < 1) {
	            return;
	        }
	        var activeIndex = this.getActiveIndex(optionsMap);
	        if (activeIndex < 0) {
	            return;
	        }
	        var highlighted = choices[activeIndex];
	        if (!highlighted) {
	            return;
	        }
	        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
	        var height = container.offsetHeight;
	        if (posY > height) {
	            container.scrollTop += posY - height;
	        }
	        else if (posY < highlighted.clientHeight) {
	            container.scrollTop -= highlighted.clientHeight - posY;
	        }
	    };
	    Behavior.prototype.getActiveIndex = function (optionsMap) {
	        if (optionsMap === void 0) { optionsMap = void 0; }
	        var ai = this.actor.options.indexOf(this.actor.activeOption);
	        if (ai < 0 && optionsMap !== void 0) {
	            ai = optionsMap.get(this.actor.activeOption.id);
	        }
	        return ai;
	    };
	    return Behavior;
	}());
	exports.Behavior = Behavior;
	var GenericBehavior = (function (_super) {
	    __extends(GenericBehavior, _super);
	    function GenericBehavior(actor) {
	        _super.call(this, actor);
	    }
	    GenericBehavior.prototype.first = function () {
	        this.actor.activeOption = this.actor.options[0];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.last = function () {
	        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.prev = function () {
	        var index = this.actor.options.indexOf(this.actor.activeOption);
	        this.actor.activeOption = this.actor
	            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.next = function () {
	        var index = this.actor.options.indexOf(this.actor.activeOption);
	        this.actor.activeOption = this.actor
	            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
	        _super.prototype.ensureHighlightVisible.call(this);
	    };
	    GenericBehavior.prototype.filter = function (query) {
	        var _this = this;
	        var options = this.actor.itemObjects
	            .filter(function (option) {
	            return select_pipes_1.stripTags(option.text).match(query) &&
	                (_this.actor.multiple === false ||
	                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
	        });
	        this.actor.options = options;
	        if (this.actor.options.length > 0) {
	            this.actor.activeOption = this.actor.options[0];
	            _super.prototype.ensureHighlightVisible.call(this);
	        }
	    };
	    return GenericBehavior;
	}(Behavior));
	exports.GenericBehavior = GenericBehavior;
	var ChildrenBehavior = (function (_super) {
	    __extends(ChildrenBehavior, _super);
	    function ChildrenBehavior(actor) {
	        _super.call(this, actor);
	    }
	    ChildrenBehavior.prototype.first = function () {
	        this.actor.activeOption = this.actor.options[0].children[0];
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.last = function () {
	        this.actor.activeOption =
	            this.actor
	                .options[this.actor.options.length - 1]
	                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.prev = function () {
	        var _this = this;
	        var indexParent = this.actor.options
	            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
	        var index = this.actor.options[indexParent].children
	            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
	        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
	        if (!this.actor.activeOption) {
	            if (this.actor.options[indexParent - 1]) {
	                this.actor.activeOption = this.actor
	                    .options[indexParent - 1]
	                    .children[this.actor.options[indexParent - 1].children.length - 1];
	            }
	        }
	        if (!this.actor.activeOption) {
	            this.last();
	        }
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.next = function () {
	        var _this = this;
	        var indexParent = this.actor.options
	            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
	        var index = this.actor.options[indexParent].children
	            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
	        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
	        if (!this.actor.activeOption) {
	            if (this.actor.options[indexParent + 1]) {
	                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
	            }
	        }
	        if (!this.actor.activeOption) {
	            this.first();
	        }
	        this.fillOptionsMap();
	        this.ensureHighlightVisible(this.optionsMap);
	    };
	    ChildrenBehavior.prototype.filter = function (query) {
	        var options = [];
	        var optionsMap = new Map();
	        var startPos = 0;
	        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
	            var si = _a[_i];
	            var children = si.children.filter(function (option) { return query.test(option.text); });
	            startPos = si.fillChildrenHash(optionsMap, startPos);
	            if (children.length > 0) {
	                var newSi = si.getSimilar();
	                newSi.children = children;
	                options.push(newSi);
	            }
	        }
	        this.actor.options = options;
	        if (this.actor.options.length > 0) {
	            this.actor.activeOption = this.actor.options[0].children[0];
	            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
	        }
	    };
	    return ChildrenBehavior;
	}(Behavior));
	exports.ChildrenBehavior = ChildrenBehavior;


/***/ },

/***/ 347:
/***/ function(module, exports) {

	"use strict";
	var SelectItem = (function () {
	    function SelectItem(source) {
	        var _this = this;
	        if (typeof source === 'string') {
	            this.id = this.text = source;
	        }
	        if (typeof source === 'object') {
	            this.id = source.id || source.text;
	            this.text = source.text;
	            if (source.children && source.text) {
	                this.children = source.children.map(function (c) {
	                    var r = new SelectItem(c);
	                    r.parent = _this;
	                    return r;
	                });
	                this.text = source.text;
	            }
	        }
	    }
	    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
	        var i = startIndex;
	        this.children.map(function (child) {
	            optionsMap.set(child.id, i++);
	        });
	        return i;
	    };
	    SelectItem.prototype.hasChildren = function () {
	        return this.children && this.children.length > 0;
	    };
	    SelectItem.prototype.getSimilar = function () {
	        var r = new SelectItem(false);
	        r.id = this.id;
	        r.text = this.text;
	        r.parent = this.parent;
	        return r;
	    };
	    return SelectItem;
	}());
	exports.SelectItem = SelectItem;


/***/ },

/***/ 348:
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
	var common_1 = __webpack_require__(349);
	var HighlightPipe = (function () {
	    function HighlightPipe() {
	    }
	    HighlightPipe.prototype.transform = function (value, args) {
	        if (args.length < 1) {
	            return value;
	        }
	        var query = args[0];
	        if (query) {
	            var tagRE = new RegExp('<[^<>]*>', 'ig');
	            var tagList = value.match(tagRE);
	            var tmpValue = value.replace(tagRE, '$!$');
	            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
	            for (var i = 0; value.indexOf('$!$') > -1; i++) {
	                value = value.replace('$!$', tagList[i]);
	            }
	        }
	        return value;
	    };
	    HighlightPipe = __decorate([
	        core_1.Pipe({ name: 'highlight' }), 
	        __metadata('design:paramtypes', [])
	    ], HighlightPipe);
	    return HighlightPipe;
	}());
	exports.HighlightPipe = HighlightPipe;
	function stripTags(input) {
	    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	    return input.replace(commentsAndPhpTags, '').replace(tags, '');
	}
	exports.stripTags = stripTags;


/***/ },

/***/ 349:
/***/ function(module, exports) {

	"use strict";
	function escapeRegexp(queryToEscape) {
	    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	}
	exports.escapeRegexp = escapeRegexp;


/***/ },

/***/ 350:
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
	var OffClickDirective = (function () {
	    function OffClickDirective() {
	    }
	    OffClickDirective.prototype.onClick = function ($event) {
	        $event.stopPropagation();
	    };
	    OffClickDirective.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
	    };
	    OffClickDirective.prototype.ngOnDestroy = function () {
	        document.removeEventListener('click', this.offClickHandler);
	    };
	    __decorate([
	        core_1.Input('offClick'), 
	        __metadata('design:type', Object)
	    ], OffClickDirective.prototype, "offClickHandler", void 0);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], OffClickDirective.prototype, "onClick", null);
	    OffClickDirective = __decorate([
	        core_1.Directive({
	            selector: '[offClick]'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], OffClickDirective);
	    return OffClickDirective;
	}());
	exports.OffClickDirective = OffClickDirective;


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, jQuery) {"use strict";
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
	var GvDatePickerComponent = (function () {
	    function GvDatePickerComponent(ngControl) {
	        this.dateChange = new core_1.EventEmitter();
	        this.timepickerOptions = {};
	        this.datepickerOptions = {};
	        this.idDatePicker = uniqueId('q-datepicker_');
	        this.idTimePicker = uniqueId('q-timepicker_');
	        this.onChange = function (_) {
	        };
	        this.onTouched = function () {
	        };
	        ngControl.valueAccessor = this;
	    }
	    GvDatePickerComponent.prototype.ngAfterViewInit = function () {
	        this.init();
	    };
	    GvDatePickerComponent.prototype.ngOnDestroy = function () {
	        if (this.datepicker) {
	        }
	    };
	    GvDatePickerComponent.prototype.writeValue = function (value) {
	        var _this = this;
	        this.date = value;
	        if (isDate(this.date)) {
	            setTimeout(function () {
	                _this.updateModel(_this.date);
	            }, 0);
	        }
	    };
	    GvDatePickerComponent.prototype.registerOnChange = function (fn) {
	        this.onChange = fn;
	    };
	    GvDatePickerComponent.prototype.registerOnTouched = function (fn) {
	        this.onTouched = fn;
	    };
	    GvDatePickerComponent.prototype.init = function () {
	        var _this = this;
	        if (!this.datepicker && this.datepickerOptions !== false) {
	            this.datepicker = $('#' + this.idDatePicker).datepicker(this.datepickerOptions);
	            this.datepicker
	                .on('changeDate', function (e) {
	                var newDate = e.date;
	                if (isDate(_this.date) && isDate(newDate)) {
	                    var h = _this.date.getHours();
	                    var m = _this.date.getMinutes();
	                    newDate.setHours(h);
	                    newDate.setMinutes(m);
	                }
	                _this.date = newDate;
	                _this.dateChange.emit(newDate);
	            });
	        }
	        else if (this.datepickerOptions === false) {
	            $('#' + this.idDatePicker).remove();
	        }
	        if (!this.timepicker && this.timepickerOptions !== false) {
	            var options = jQuery.extend({ defaultTime: false }, this.timepickerOptions);
	            this.timepicker = $('#' + this.idTimePicker).timepicker(options);
	            this.timepicker
	                .on('changeTime.timepicker', function (e) {
	                var meridian = e.time.meridian;
	                var hours = e.time.hours;
	                if (meridian) {
	                    if (meridian === 'PM' && hours < 12) {
	                        hours = hours + 12;
	                    }
	                    if (meridian === 'AM' && hours === 12) {
	                        hours = hours - 12;
	                    }
	                    hours = _this.pad(hours);
	                }
	                if (!isDate(_this.date)) {
	                    _this.date = new Date();
	                    if (_this.datepicker !== undefined) {
	                        _this.datepicker.datepicker('update', _this.date.toLocaleDateString('zh-CN'));
	                    }
	                }
	                _this.date.setHours(parseInt(hours));
	                _this.date.setMinutes(e.time.minutes);
	                _this.dateChange.emit(_this.date);
	            });
	        }
	        else if (this.timepickerOptions === false) {
	            $('#' + this.idTimePicker).parent().remove();
	        }
	    };
	    GvDatePickerComponent.prototype.updateModel = function (date) {
	        if (this.datepicker !== undefined) {
	            this.datepicker.datepicker('update', date.toLocaleDateString('en-US'));
	        }
	        if (this.timepicker !== undefined) {
	            var hours = this.date.getHours();
	            if (this.timepickerOptions.showMeridian) {
	                hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
	            }
	            var meridian = this.date.getHours() >= 12 ? ' PM' : ' AM';
	            this.timepicker.timepicker('setTime', this.pad(hours) + ':' + this.date.getMinutes() + meridian);
	        }
	    };
	    GvDatePickerComponent.prototype.pad = function (value) {
	        return (value && value.toString().length < 2) ? '0' + value : value.toString();
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], GvDatePickerComponent.prototype, "dateChange", void 0);
	    __decorate([
	        core_1.Input("timepicker"), 
	        __metadata('design:type', Object)
	    ], GvDatePickerComponent.prototype, "timepickerOptions", void 0);
	    __decorate([
	        core_1.Input("datepicker"), 
	        __metadata('design:type', Object)
	    ], GvDatePickerComponent.prototype, "datepickerOptions", void 0);
	    __decorate([
	        core_1.HostListener('dateChange', ['$event']), 
	        __metadata('design:type', Object)
	    ], GvDatePickerComponent.prototype, "onChange", void 0);
	    GvDatePickerComponent = __decorate([
	        core_1.Component({
	            selector: "gv-datepicker",
	            template: "\n    <div class=\"form-inline\">\n        <div id=\"{{idDatePicker}}\" class=\"input-group date\"> \n            <input type=\"text\" class=\"form-control\"/>\n            <div class=\"input-group-addon\">\n                <span [ngClass]=\"datepickerOptions.icon || 'glyphicon glyphicon-th'\"></span>\n            </div>\n        </div>\n        <div class=\"input-group bootstrap-timepicker timepicker\">\n            <input id=\"{{idTimePicker}}\" type=\"text\" class=\"form-control input-small\">\n            <span class=\"input-group-addon\"><i [ngClass]=\"timepickerOptions.icon || 'glyphicon glyphicon-time'\"></i></span>\n        </div>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [common_1.NgControl])
	    ], GvDatePickerComponent);
	    return GvDatePickerComponent;
	}());
	exports.GvDatePickerComponent = GvDatePickerComponent;
	var id = 0;
	function uniqueId(prefix) {
	    return prefix + ++id;
	}
	function isDate(obj) {
	    return Object.prototype.toString.call(obj) === '[object Date]';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(352), __webpack_require__(352)))

/***/ },

/***/ 353:
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
	var BookingComponent = (function () {
	    function BookingComponent() {
	    }
	    BookingComponent.prototype.ngOnInit = function () { };
	    BookingComponent = __decorate([
	        core_1.Component({
	            selector: "gv-booking",
	            templateUrl: "tmpls/booking/booking.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BookingComponent);
	    return BookingComponent;
	}());
	exports.BookingComponent = BookingComponent;


/***/ },

/***/ 354:
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
	    function RoomviewComponent(_el) {
	        this._el = _el;
	    }
	    RoomviewComponent.prototype.ngOnInit = function () {
	    };
	    RoomviewComponent = __decorate([
	        core_1.Component({
	            selector: "gv-roomview",
	            templateUrl: "tmpls/roomview/roomview.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], RoomviewComponent);
	    return RoomviewComponent;
	}());
	exports.RoomviewComponent = RoomviewComponent;


/***/ },

/***/ 355:
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
	var GuestsComponent = (function () {
	    function GuestsComponent() {
	    }
	    GuestsComponent.prototype.ngOnInit = function () { };
	    GuestsComponent = __decorate([
	        core_1.Component({
	            selector: "gv-guests",
	            templateUrl: "tmpls/guests/guests.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GuestsComponent);
	    return GuestsComponent;
	}());
	exports.GuestsComponent = GuestsComponent;


/***/ },

/***/ 356:
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
	var hotel_cmp_1 = __webpack_require__(357);
	var roomtype_cmp_1 = __webpack_require__(358);
	var home_cmp_1 = __webpack_require__(359);
	var routeractive_directive_1 = __webpack_require__(339);
	var AdminComponent = (function () {
	    function AdminComponent() {
	    }
	    AdminComponent.prototype.ngOnInit = function () { };
	    AdminComponent = __decorate([
	        core_1.Component({
	            selector: "gv-admin",
	            templateUrl: "tmpls/admin/admin.cmp.html",
	            directives: [router_deprecated_1.ROUTER_DIRECTIVES, routeractive_directive_1.RouterActive]
	        }),
	        router_deprecated_1.RouteConfig([
	            { path: "/", name: "Home", component: home_cmp_1.HomeComponent, useAsDefault: true },
	            { path: "/Hotel", name: "Hotel", component: hotel_cmp_1.HotelComponent },
	            { path: "/RoomType", name: "RoomType", component: roomtype_cmp_1.RoomTypeComponent }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AdminComponent);
	    return AdminComponent;
	}());
	exports.AdminComponent = AdminComponent;


/***/ },

/***/ 357:
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
	var HotelComponent = (function () {
	    function HotelComponent() {
	    }
	    HotelComponent = __decorate([
	        core_1.Component({
	            selector: "gv-admin-hotel",
	            templateUrl: "tmpls/admin/entities/hotel.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HotelComponent);
	    return HotelComponent;
	}());
	exports.HotelComponent = HotelComponent;


/***/ },

/***/ 358:
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
	var RoomTypeComponent = (function () {
	    function RoomTypeComponent() {
	    }
	    RoomTypeComponent = __decorate([
	        core_1.Component({
	            selector: "gv-admin-roomtype",
	            templateUrl: "tmpls/admin/entities/roomtype.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RoomTypeComponent);
	    return RoomTypeComponent;
	}());
	exports.RoomTypeComponent = RoomTypeComponent;


/***/ },

/***/ 359:
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
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: "gv-admin-home",
	            templateUrl: "tmpls/admin/home.cmp.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 360:
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(352)))

/***/ }

});