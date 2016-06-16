"use strict";
var router_deprecated_1 = require("@angular/router-deprecated");
var lang_1 = require("@angular/core/src/facade/lang");
var core_1 = require("@angular/core");
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
//# sourceMappingURL=routeractive.directive.js.map