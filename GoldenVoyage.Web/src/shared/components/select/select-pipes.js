"use strict";
var core_1 = require('@angular/core');
var common_1 = require('./common');
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
//# sourceMappingURL=select-pipes.js.map