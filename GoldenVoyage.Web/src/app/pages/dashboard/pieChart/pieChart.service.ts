import { Injectable } from "@angular/core";
import { GvLayoutConfigProvider, colorHelper } from "../../../layout";

@Injectable()
export class PieChartService {
    constructor(private _gvConfig: GvLayoutConfigProvider) {
    }

    // 获取图标数据
    getData() {
        let pieColor = this._gvConfig.get().colors.custom.dashboardPieChart;
        return [
            {
                color: pieColor,
                description: 'New Visits',
                stats: '57,820',
                icon: 'person',
            }, {
                color: pieColor,
                description: 'Purchases',
                stats: '$ 89,745',
                icon: 'money',
            }, {
                color: pieColor,
                description: 'Active Users',
                stats: '178,391',
                icon: 'face',
            }, {
                color: pieColor,
                description: 'Returned',
                stats: '32,592',
                icon: 'refresh',
            }
        ];
    }
}