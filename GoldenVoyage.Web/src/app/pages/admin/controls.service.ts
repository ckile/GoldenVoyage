import { Injectable } from "@angular/core";
import { DropdownControl, TextBoxControl, FormControlBase } from "../../common/models";

/**
 * 所有管理控件集合
 */
@Injectable()
export class ControlsService {
    getHotelControls() {
        let controls: FormControlBase<any>[] = [
            new TextBoxControl({
                key: 'hotelName',
                label: '酒店名称', 
                value: '',
                order: 100
            }),
            new TextBoxControl({
                key: 'hotelDate',
                label: '酒店日期',
                order: 200
            }),
            new TextBoxControl({
                key: 'reportDate',
                label: '报表日期',
                order: 300 
            }),
            new TextBoxControl({
                key: 'localApi',
                label: '本地服务器地址',
                order: 400
            }),

        ];
        // 排序控件
        return controls.sort((a, b) => a.order - b.order);
    }
}