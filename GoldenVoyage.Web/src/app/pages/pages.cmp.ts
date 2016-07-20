import { Component, ViewEncapsulation } from "@angular/core"; 

import { HeaderComponent, SidebarComponent, GvBackTop, GvContentTop } from "../layout";
 
@Component({
    selector: "pages",
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [ HeaderComponent, SidebarComponent, GvBackTop, GvContentTop ],
    template: require("./pages.cmp.html")
})
 
export class PagesComponent {
    constructor() { }

    ngOnInit() { }
}


