import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from 'src/app/core/enums/route-name.enum';

@Component({
    templateUrl: './client-payments.component.html',
    styleUrls: ['./client-payments.component.scss']
})
export class ClientPaymentsComponent implements OnInit, OnDestroy {

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
