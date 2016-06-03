import { Component, OnInit, AfterContentInit, AfterViewInit, Self, OnChanges, SimpleChange, ElementRef } from "@angular/core";
import { ControlValueAccessor, FORM_DIRECTIVES, CORE_DIRECTIVES, NgModel, NgClass, NgFor } from "@angular/common";

@Component({
    selector: "gv-combobox[ngModel]",
    inputs: ["itemsSource"],
    template: `<select class="form-control"><option value="0">未选择</option><option *ngFor="let option of options" [value]="option.Id">{{ option.Description }}<option></select>`,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, NgClass, NgModel]
})
export class ComboboxComponent implements OnInit, OnChanges, ControlValueAccessor, AfterViewInit {

    public onChange: any = Function.prototype;
    public onTouched: any = Function.prototype;
     
    private options: Array<ComboBoxOption> = [];
    private _selectedId: number;

    constructor( @Self() private _cd: NgModel, private _el: ElementRef) {
         _cd.valueAccessor = this;
    }

    // 组件初始化完成调用1次
    public ngOnInit(): void {
        this.initOptions();

    }

    public ngAfterViewInit(): void { 
         $(this._el.nativeElement).selectpicker({
            style: "btn-white",
            noneSelectedText: '未选择',
            noneResultsText: '无匹配',
            liveSearch: true
        });
    }

    private initOptions() {
        this.options.push({ Id: 1, Description: "Option1" });
        this.options.push({ Id: 2, Description: "Option2" });
        this.options.push({ Id: 3, Description: "Option3" });
    }

    // 如果组件template绑定的任何属性发生变化则得到消息
    public ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
        console.log(changes["itemsSource"].currentValue);
    }

    // 从ngModel流入组件值
    public writeValue(value: any): void {
        if (value === this._selectedId) {
            return;
        }
        if (value) {
            this._selectedId =  value;
            return;
        }
        this._selectedId = value ?  0 : void 0;     
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }

}

export interface ComboBoxOption {
    Id?: number;
    Code?: string;
    Description?: string;
}