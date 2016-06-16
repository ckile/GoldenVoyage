import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../layout';

@Pipe({name: 'gvKameleonPicture'})
export class GvKameleonPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
  }
}
