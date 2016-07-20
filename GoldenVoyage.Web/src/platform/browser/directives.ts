﻿/*
 * These are globally available directives in any template
 */

import {PLATFORM_DIRECTIVES} from '@angular/core';

// Angular 2 路由
import {ROUTER_DIRECTIVES} from '@angular/router';
// Angular 2 表单
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

// application_directives: directives that are global through out the application
export const APPLICATION_DIRECTIVES = [
    ...ROUTER_DIRECTIVES,
    ...REACTIVE_FORM_DIRECTIVES
];

export const DIRECTIVES = [
    { provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
