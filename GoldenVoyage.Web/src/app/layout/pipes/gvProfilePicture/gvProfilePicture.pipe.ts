import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../layout';

@Pipe({name: 'gvProfilePicture'})
export class GvProfilePicturePipe implements PipeTransform {

  transform(input:string, ext = 'png'):string {
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
