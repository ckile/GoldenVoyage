import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "gvFieldSplit" })
export class GvFieldSplit implements PipeTransform {

    // 返回一个对象指定字符串的值
    transform(item: any, field: string): any {
        var result = item;
        let fields: string[] = field.split(".");
        if (fields.length > 0) {
            fields.forEach((f) => {
                result = result[f];
            });
        }
        return result;
    }

}