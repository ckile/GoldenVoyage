"use strict";
var core_1 = require('@angular/core');
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
//# sourceMappingURL=app.constants.js.map