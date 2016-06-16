import {Component} from '@angular/core';

import {AppState} from "../../../app.state";

@Component({
  selector: 'gv-content-top',
  styles: [require('./gvContentTop.scss')],
  template: require('./gvContentTop.html'),
})
export class GvContentTop {

  public activePageTitle:string = '';

  constructor(private _state:AppState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
