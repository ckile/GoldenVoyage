"use strict";
var core_1 = require("@angular/core");
var HightlightPipe = (function () {
    function HightlightPipe() {
    }
    HightlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        return query ? value.replace(new RegExp(this.escapeRegexp(query), "gi"), "<span class=\"highlight\">$&</span>") : value;
    };
    HightlightPipe.prototype.escapeRegexp = function (queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    HightlightPipe = __decorate([
        core_1.Pipe({ name: "hightlight" }), 
        __metadata('design:paramtypes', [])
    ], HightlightPipe);
    return HightlightPipe;
}());
exports.HightlightPipe = HightlightPipe;
//# sourceMappingURL=autocomplete.pipe.js.map