import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../../core/enums/route-name.enum';

@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

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
