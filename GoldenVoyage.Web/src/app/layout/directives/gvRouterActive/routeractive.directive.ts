import { Router, Instruction, RouterLink } from "@angular/router-deprecated";
import { isPresent } from "@angular/core/src/facade/lang";
import { Directive,OnInit, Query, QueryList, Attribute, ElementRef, Renderer, Optional } from "@angular/core";

@Directive({
    selector: "[router-active],[routerActive]",
    inputs: ["routerActive"]
})
export class RouterActive implements OnInit {
    routerActive: string = null;
    routerActiveAttr: string = "active";
    constructor(public _router: Router,
        public _el: ElementRef,
        public _renderer: Renderer,
        @Query(RouterLink) public _routerLink: QueryList<RouterLink>,
        @Optional() @Attribute("router-active") routerActiveAttr?: string) {
        this.routerActiveAttr = this.defaultAttrValue(routerActiveAttr);
    }

    ngOnInit() {
        this._routerLink.changes.subscribe(() => {
            if (this._routerLink.first) {
                this.updateClass();
                this.findRootRouter()
                    .subscribe(() => {
                        this.updateClass();
                });
            }
        });
    }

    private findRootRouter(): Router {
        var router: Router = this._router;
        while (isPresent(router.parent)) {
            router = router.parent;
        }
        return router;
    }


    private updateClass(){
        let active = this._routerLink.first.isRouteActive;
        this._renderer.setElementClass(this._el.nativeElement, this.attrOrProp(), active); 
}


    private defaultAttrValue(attr?: string) {
        return this.routerActiveAttr = attr || this.routerActiveAttr;
    }

    private attrOrProp() {
        return isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    }

}