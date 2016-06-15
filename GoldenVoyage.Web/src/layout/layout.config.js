"use strict";
var core_1 = require('@angular/core');
var layout_config_provider_1 = require('./layout.config.provider');
var BaThemeConfig = (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
        this._config();
    }
    BaThemeConfig.prototype._config = function () {
    };
    BaThemeConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [layout_config_provider_1.LayoutConfigProvider])
    ], BaThemeConfig);
    return BaThemeConfig;
}());
exports.BaThemeConfig = BaThemeConfig;
//# sourceMappingURL=layout.config.js.map