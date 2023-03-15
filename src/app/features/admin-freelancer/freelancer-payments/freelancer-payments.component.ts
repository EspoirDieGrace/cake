import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from 'src/app/core/enums/route-name.enum';

@Component({
    templateUrl: './freelancer-payments.component.html',
    styleUrls: ['./freelancer-payments.component.scss']
})
export class FreelancerPaymentsComponent implements OnInit, OnDestroy {

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
