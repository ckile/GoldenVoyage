import {Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';
import {BaProfilePicturePipe} from '../../pipes';

@Component({
    selector: 'ba-msg-center',
    providers: [BaMsgCenterService],
    styles: [require('./msgcenter.cmp.scss')],
    template: require('./msgcenter.cmp.html'),
    pipes: [BaProfilePicturePipe]
})
export class BaMsgCenter {

    public notifications: Array<Object>;
    public messages: Array<Object>;

    constructor(private _baMsgCenterService: BaMsgCenterService) {
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }

}
