"use strict";
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var AppStateService = (function () {
    function AppStateService() {
        var _this = this;
        this._data = new Subject_1.Subject();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    AppStateService.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current != value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    AppStateService.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    AppStateService.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    AppStateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppStateService);
    return AppStateService;
}());
exports.AppStateService = AppStateService;
//# sourceMappingURL=appstate.service.js.map