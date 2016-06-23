import { Directive, HostBinding } from '@angular/core';

import { GvLayoutConfigProvider, isMobile } from "../../../layout";  

@Directive({
    selector: '[gvThemeRun]'
})
export class GvThemeRun {
 
  private _classes:Array<string> = [];
  @HostBinding('class') classesString:string;

  constructor( private _gvConfig: GvLayoutConfigProvider) {  
  }

  public ngOnInit():void {
    this._assignTheme();
    this._assignMobile();
  }

  private _assignTheme():void {
      this._addClass(this._gvConfig.get().theme.name);
  }

  private _assignMobile():void {
    if (isMobile()) {
      this._addClass('mobile');
    }
  }

  private _addClass(cls:string) {
    this._classes.push(cls);
    this.classesString = this._classes.join(' ');
  }
}
