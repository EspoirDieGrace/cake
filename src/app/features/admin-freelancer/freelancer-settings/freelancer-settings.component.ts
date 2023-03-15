import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouteName } from 'src/app/core/enums/route-name.enum';

@Component({
    templateUrl: './freelancer-settings.component.html',
    styleUrls: ['./freelancer-settings.component.scss']
})
export class FreelancerSettingsComponent implements OnInit, OnDestroy {

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
