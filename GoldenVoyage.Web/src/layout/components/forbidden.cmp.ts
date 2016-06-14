import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
    selector: 'forbidden',
    template: `<h1>Forbidden</h1>`
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