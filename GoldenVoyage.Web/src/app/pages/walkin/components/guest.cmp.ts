import { Component, Input } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/common";
import { Reservation } from "../../../models";
import { GvCard } from "../../../layout";
@Component({
    selector: "gv-walkin-guest",
    directives: [FORM_DIRECTIVES, GvCard],
    template: require("./guest.cmp.html")
})
export class WalkInGuestComponent {
    @Input() resvForm: any;


}