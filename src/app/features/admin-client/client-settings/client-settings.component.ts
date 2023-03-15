import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouteName } from 'src/app/core/enums/route-name.enum';

@Component({
    templateUrl: './client-settings.component.html',
    styleUrls: ['./client-settings.component.scss']
})
export class ClientSettingsComponent implements OnInit, OnDestroy {

    constructor() {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
