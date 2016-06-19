import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

/**
 *  应用状态服务
 */

@Injectable()
export class AppState {

    private _data = new Subject<Object>();

    private _dataStream$ = this._data.asObservable();

    // Map 是个字典对应key， value
    private _subscridata: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    constructor() {
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }

    notifyDataChanged(event: any, value: any): void {
        let current = this._data[event];
        if (current != value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    }

    subscribe(event: string, callback: Function): void {
        var subscribers = this._subscridata.get(event) || [];
        subscribers.push(callback);
        this._subscridata.set(event, subscribers);
    }

    private _onEvent(data: any): void {
        var subscribers = this._subscridata.get(data['event']) || [];

        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
}