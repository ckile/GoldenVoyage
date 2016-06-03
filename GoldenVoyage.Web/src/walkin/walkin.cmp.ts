import { Component, OnInit, AfterViewInit, AfterContentInit } from "@angular/core";
import { DatepickerComponent } from "../shared/components/datepicker.cmp";
import { ComboboxComponent, ComboBoxOption } from "../shared/components/combobox.cmp";

@Component({
    selector: "gv-walkin",
    templateUrl: "tmpls/walkin/walkin.cmp.html",
    directives: [DatepickerComponent, ComboboxComponent]
})
export class WalkinComponent implements OnInit, AfterContentInit, AfterViewInit {

    public item: any = {
        arrival: new Date("2015-01-01"),
        hotelId: 1
    };
     

    constructor() { }
    // 组件初始化完成调用1次
    public ngOnInit(): void {
        //alert("1");
    }

    public ngAfterContentInit(): void {
        //alert("2");
    }

    public ngAfterViewInit(): void {
        //alert("3");
    }

    public setDate() {
        this.item.arrival = new Date("2015-06-30");
    }
}