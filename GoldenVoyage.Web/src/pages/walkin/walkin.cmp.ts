import { Component, OnInit, AfterViewInit, AfterContentInit } from "@angular/core";
import { ComponentInstruction, OnActivate } from "@angular/router-deprecated";
import { GV_DIRECTIVES } from "../../shared/components";
@Component({
    selector: "gv-walkin",
    template: require("./walkin.cmp.html"),
    directives: [GV_DIRECTIVES]
})
export class WalkinComponent implements OnInit, AfterContentInit, AfterViewInit, OnActivate {
    private disabled: boolean = false;
    public arrival: Date;
    private types: Array<any> = [
        { name: '张先生', value: '1' },
        { name: '李先生', value: '2' },
        { name: '王先生', value: '3' },
        { name: '刘先生', value: '4' },
        { name: '陈先生', value: '5' },
        { name: '付先生', value: '6' }
    ];

    private type: Array<any> = [];
    private change(value: any) {
        console.log('Changed data: ', value);
    }

    constructor() { }
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