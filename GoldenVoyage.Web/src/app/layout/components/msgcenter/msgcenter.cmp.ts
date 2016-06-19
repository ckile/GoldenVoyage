import {Component} from '@angular/core';
import { Message } from "../../../models";
import { GvProfilePicturePipe } from "../../pipes";
@Component({
    selector: 'gv-msg-center',
    styles: [require('./msgcenter.cmp.scss')],
    template: require('./msgcenter.cmp.html'),
    pipes: [GvProfilePicturePipe]
})
export class GvMsgCenter {
    public notifications: Array<Message>;
    public messages: Array<Message>;

     


}