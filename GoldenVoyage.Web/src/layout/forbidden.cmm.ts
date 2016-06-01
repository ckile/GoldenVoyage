import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'forbidden',
    templateUrl: 'tmpls/layout/forbidden.cmm.html',
    directives: [CORE_DIRECTIVES]
})

export class ForbiddenComponent implements OnInit {
    public message: string;
    public values: any[];

    constructor() {
        this.message = "ForbiddenComponent constructor";
    }

    ngOnInit() {
    }
}