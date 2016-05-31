import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public IdentityServer: string = "https://localhost:44390/";
    public ApiServer: string = "https://localhost:44378/";
}