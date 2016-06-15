"use strict";
var core_1 = require('@angular/core');
var layout_constants_1 = require('./layout.constants');
var LayoutConfigProvider = (function () {
    function LayoutConfigProvider() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: layout_constants_1.colorHelper.tint(this.colorScheme.primary, 30),
                infoLight: layout_constants_1.colorHelper.tint(this.colorScheme.info, 30),
                successLight: layout_constants_1.colorHelper.tint(this.colorScheme.success, 30),
                warningLight: layout_constants_1.colorHelper.tint(this.colorScheme.warning, 30),
                dangerLight: layout_constants_1.colorHelper.tint(this.colorScheme.danger, 30),
                primaryDark: layout_constants_1.colorHelper.shade(this.colorScheme.primary, 15),
                infoDark: layout_constants_1.colorHelper.shade(this.colorScheme.info, 15),
                successDark: layout_constants_1.colorHelper.shade(this.colorScheme.success, 15),
                warningDark: layout_constants_1.colorHelper.shade(this.colorScheme.warning, 15),
                dangerDark: layout_constants_1.colorHelper.shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardLineChart: this.basic.defaultText,
                    dashboardPieChart: layout_constants_1.colorHelper.hexToRgbA(this.basic.defaultText, 0.8)
                }
            }
        };
    }
    LayoutConfigProvider.prototype.get = function () {
        return this.conf;
    };
    LayoutConfigProvider.prototype.changeTheme = function (theme) {
        _.merge(this.get().theme, theme);
    };
    LayoutConfigProvider.prototype.changeColors = function (colors) {
        _.merge(this.get().colors, colors);
    };
    LayoutConfigProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LayoutConfigProvider);
    return LayoutConfigProvider;
}());
exports.LayoutConfigProvider = LayoutConfigProvider;
//# sourceMappingURL=layout.config.provider.js.map