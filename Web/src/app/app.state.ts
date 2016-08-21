import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

// 保存应用状态
// 的全局服务
// 全局消息泵

@Injectable()
export class AppState {
    private _data = new Subject<Object>();
    private _dataStream$ = this._data.asObservable();

    // 关注列表
    private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

    constructor() {
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }

    // 触发数据已修改消息
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

    // 关注某个消息,将关注者添加到关注列表
    subscribe(event: string, callback: Function): void {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    }

    _onEvent(data: any) {
        var subscribers = this._subscriptions.get(data['event']) || [];

        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
}