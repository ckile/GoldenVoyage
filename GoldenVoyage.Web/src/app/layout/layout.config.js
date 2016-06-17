"use strict";
var core_1 = require('@angular/core');
var layout_config_provider_1 = require('./layout.config.provider');
var GvLayoutConfig = (function () {
    function GvLayoutConfig(_gvConfig) {
        this._gvConfig = _gvConfig;
        this._config();
    }
    GvLayoutConfig.prototype._config = function () {
    };
    GvLayoutConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [layout_config_provider_1.GvLayoutConfigProvider])
    ], GvLayoutConfig);
    return GvLayoutConfig;
}());
exports.GvLayoutConfig = GvLayoutConfig;
//# sourceMappingURL=layout.config.js.map