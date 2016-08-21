// Angular2
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/core";
import "@angular/common";
import "@angular/http";
import "@angular/router";

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Web dependencies
import 'jquery';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';
import 'lodash';

if ('production' === ENV) {
    // Production
} else {
    // Development
    require('angular2-hmr');
}