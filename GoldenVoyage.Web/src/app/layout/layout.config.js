"use strict";
var core_1 = require('@angular/core');
var layout_config_provider_1 = require('./layout.config.provider');
var LayoutConfig = (function () {
    function LayoutConfig(_baConfig) {
        this._baConfig = _baConfig;
        this._config();
    }
    LayoutConfig.prototype._config = function () {
    };
    LayoutConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [layout_config_provider_1.LayoutConfigProvider])
    ], LayoutConfig);
    return LayoutConfig;
}());
exports.LayoutConfig = LayoutConfig;
//# sourceMappingURL=layout.config.js.map