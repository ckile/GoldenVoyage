import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public IdentityServer: string = "http://localhost:51647";
    public ApiServer: string = "http://localhost:54455";
    public WebServer: string = "http://localhost:49288";
}