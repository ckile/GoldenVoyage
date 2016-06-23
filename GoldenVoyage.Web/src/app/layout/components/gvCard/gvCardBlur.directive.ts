import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

import {GvCardBlurHelper} from './gvCardBlurHelper.service';
import {GvMetrics} from './gvMetrics';
import {GvLayoutConfigProvider} from '../../../layout';

@Directive({
  selector: '[gvCardBlur]',
  providers: [GvCardBlurHelper]
})
export class GvCardBlur {

  @HostBinding('class.card-blur') isEnabled:boolean = false;

  private _bodyBgSize:GvMetrics;

  constructor(private _gvConfig:GvLayoutConfigProvider, private _gvCardBlurHelper:GvCardBlurHelper, private _el:ElementRef) {
    if (this._isEnabled()) {
      this._gvCardBlurHelper.init();
      this._getBodyImageSizesOnBgLoad();
      this._recalculateCardStylesOnBgLoad();

      this.isEnabled = true;
    }
  }

  @HostListener('window:resize')
  _onWindowResize():void {
    if (this._isEnabled()) {
      this._bodyBgSize = this._gvCardBlurHelper.getBodyBgImageSizes();
      this._recalculateCardStyle();
    }
  }

  private _getBodyImageSizesOnBgLoad():void {
    this._gvCardBlurHelper.bodyBgLoad().subscribe(() => {
      this._bodyBgSize = this._gvCardBlurHelper.getBodyBgImageSizes();
    });
  }

  private _recalculateCardStylesOnBgLoad():void {
    this._gvCardBlurHelper.bodyBgLoad().subscribe((event) => {
      setTimeout(this._recalculateCardStyle.bind(this));
    })
  }

  private _recalculateCardStyle():void {
    if (!this._bodyBgSize) {
      return;
    }
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }

  private _isEnabled() {
      return this._gvConfig.get().theme.name == 'blur';
  }
}
