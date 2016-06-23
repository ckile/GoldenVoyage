"use strict";
var core_1 = require('@angular/core');
var gvCardBlur_directive_1 = require('./gvCardBlur.directive');
var GvCard = (function () {
    function GvCard() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GvCard.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], GvCard.prototype, "gvCardClass", void 0);
    GvCard = __decorate([
        core_1.Component({
            selector: 'gv-card',
            styles: [require('./gvCard.scss')],
            directives: [gvCardBlur_directive_1.GvCardBlur],
            template: require('./gvCard.html'),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], GvCard);
    return GvCard;
}());
exports.GvCard = GvCard;
//# sourceMappingURL=gvCard.component.js.map