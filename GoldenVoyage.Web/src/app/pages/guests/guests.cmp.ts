import { Component, OnInit } from "@angular/core";
import { GuestsService } from "./guests.service";
@Component({
    selector: "gv-guests",
    template: require("./guests.cmp.html"),
    providers: [GuestsService]
})
export class GuestsComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}