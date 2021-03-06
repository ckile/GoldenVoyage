import {Component, ViewEncapsulation, Input} from '@angular/core';

import {GvCardBlur} from './gvCardBlur.directive';

@Component({
  selector: 'gv-card',
  styles: [require('./gvCard.scss')],
  directives: [GvCardBlur],
  template: require('./gvCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class GvCard {
  @Input() title:String;
  @Input() gvCardClass:String;
}
