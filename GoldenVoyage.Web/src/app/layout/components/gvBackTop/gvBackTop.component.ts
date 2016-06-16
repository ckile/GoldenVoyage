import {Component, ViewChild, HostListener, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'gv-back-top',
  styles: [require('./gvBackTop.scss')],
  template: `
    <i #gvBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class GvBackTop {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('gvBackTop') private _selector:ElementRef;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    $('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);
  }
}