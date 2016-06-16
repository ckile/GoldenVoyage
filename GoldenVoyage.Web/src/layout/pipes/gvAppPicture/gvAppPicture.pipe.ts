import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../layout';

@Pipe({name: 'gvAppPicture'})
export class GvAppPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + input;
  }
}
