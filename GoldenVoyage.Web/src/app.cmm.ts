import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ForbiddenComponent} from './layout/forbidden.cmm';
import {UnauthorizedComponent} from './layout/unauthorized.cmm';
import {SecurityService} from './services/security.service';

//import {DataEventRecordsComponent} from './dataeventrecords/dataeventrecords.component';
//import { DataEventRecordsService } from './dataeventrecords/DataEventRecordsService';

@Component({
    selector: 'gv-app',
    templateUrl: 'tmpls/app.cmm.html',
    // styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    { path: '/Forbidden', name: 'Forbidden', component: ForbiddenComponent },
    { path: '/Unauthorized', name: 'Unauthorized', component: UnauthorizedComponent }
    //{ path: '/dataeventrecords/...', name: 'DataEventRecords', component: DataEventRecordsComponent, useAsDefault: true }
])

export class AppComponent {
    public Is

    constructor(public securityService: SecurityService) {
    }

    ngOnInit() {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
            this.securityService.AuthorizedCallback();
        }
    }

    public Login() {
        console.log("Do login logic");
        this.securityService.Authorize();
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
}