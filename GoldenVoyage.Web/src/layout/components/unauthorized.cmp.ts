import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'unauthorized',
    template: `<h1>Unauthorized</h1>`
})

export class UnauthorizedComponent implements OnInit {
    public message: string;
    public values: any[];

    constructor() {
        this.message = "UnauthorizedComponent constructor";
    }

    ngOnInit() {
    }
}