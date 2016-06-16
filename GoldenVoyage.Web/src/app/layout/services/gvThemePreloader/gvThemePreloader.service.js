"use strict";
var core_1 = require('@angular/core');
var GvThemePreloader = (function () {
    function GvThemePreloader() {
    }
    GvThemePreloader.registerLoader = function (method) {
        GvThemePreloader._loaders.push(method);
    };
    GvThemePreloader.clear = function () {
        GvThemePreloader._loaders = [];
    };
    GvThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            GvThemePreloader._executeAll(resolve);
        });
    };
    GvThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(GvThemePreloader._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    GvThemePreloader._loaders = [];
    GvThemePreloader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GvThemePreloader);
    return GvThemePreloader;
}());
exports.GvThemePreloader = GvThemePreloader;
//# sourceMappingURL=gvThemePreloader.service.js.map