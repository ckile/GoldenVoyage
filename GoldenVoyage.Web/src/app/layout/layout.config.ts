import {Injectable} from '@angular/core';
import {GvLayoutConfigProvider} from './layout.config.provider';
import {colorHelper} from './layout.constants';

@Injectable()
export class GvLayoutConfig {
    constructor(private _gvConfig: GvLayoutConfigProvider) {
        this._config();
    }

    private _config() {
    }
}