import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../../core/enums/route-name.enum';

@Component({
    templateUrl: './freelancer-details.component.html',
    styleUrls: ['./freelancer-details.component.scss']
})
export class FreelancerDetailsComponent implements OnInit, OnDestroy {

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
