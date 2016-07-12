import { Component, OnInit, AfterViewInit, AfterContentInit } from "@angular/core";
import { FORM_DIRECTIVES, AbstractControl, FormBuilder, ControlGroup } from "@angular/common";

import { ComponentInstruction, OnActivate } from "@angular/router-deprecated";

import { GV_DIRECTIVES } from "../../common/components";

import { GvCard } from "../../layout";
//import { WalkInGuestComponent } from "./components";

import { WalkInService } from "./walkin.service";
import { ReservationFormBuilder } from "./formBuilder";

@Component({
    selector: "gv-walkin",
    template: require("./walkin.cmp.html"),
    directives: [GV_DIRECTIVES, FORM_DIRECTIVES, GvCard],
    providers: [WalkInService]
})
export class WalkInComponent implements OnInit, AfterContentInit, AfterViewInit, OnActivate {
    resvForm: ControlGroup;
    resv: any;

    constructor(fb: FormBuilder) {
        var builder = new ReservationFormBuilder(fb);
        this.resvForm = builder.builder();
    }
    // 组件初始化完成调用1次
    public ngOnInit(): void {
        //  alert("1");
    }

    // 在内容初始化后
    public ngAfterContentInit(): void {
        //  alert("2");
    }
    // 在视图初始化后
    public ngAfterViewInit(): void {
        //  alert("3");
    }

    // 在路由切换成功后
    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        // alert("0");
    }

    public setDate() {
    }
}