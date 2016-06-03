import { Component, OnInit, OnChanges, Input, HostBinding, HostListener, Self, ElementRef } from "@angular/core";
// ngModel 与 ControlValueAccessor对应
import { ControlValueAccessor, FORM_DIRECTIVES, CORE_DIRECTIVES, NgClass, NgModel } from "@angular/common";

@Component(
    {
        selector: "gv-datepicker[ngModel]",
        events: ['change'],
        template: `<div class="input-group date"><input type="text" class="form-control" placeholder="yyyy-mm-dd" /><span class="input-group-addon"><i class="fa fa-calendar"></i></span></div>`,
        directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, NgClass, NgModel]
    })
export class DatepickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;

    public cd: NgModel;
    public _now: Date = new Date();
    private _activeDate: Date;
    public set activeDate(value: Date) {
        this._activeDate = value;
        this.updateDatepicker(this._activeDate);
    }

    // 拥有ngmodel的组建必须在构造时初始化ngmodel的valueAccessor
    constructor( @Self() cd: NgModel, private _el: ElementRef) {
        this.cd = cd; 
        cd.valueAccessor = this;
    }

    ngOnInit(): void {
        var elem = $(this._el.nativeElement);
        elem.datepicker({
            todayHighlight: true,
            language: "zh-CN",
            format: 'yyyy-mm-dd',
            todayBtn: true
        }); 
        elem.on("change", (e) => { 
            let date = $(elem).datepicker("getDate");
            if (this._activeDate.toLocaleDateString() === date.toLocaleDateString()) {
                return;
            }
            this._activeDate = date;
            this.cd.viewToModelUpdate(date);
        });
    }

    // 更新试图内的值
    private updateDatepicker(value: any): void {
        $(this._el.nativeElement).datepicker("setDate", value);
    }

    public ngOnChanges(): void {
        alert("ngOnChanges");
    }

    // 从ngModel流入组件值
    public writeValue(value: any): void {
        if (value === this._activeDate) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value; 
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;         
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }
}