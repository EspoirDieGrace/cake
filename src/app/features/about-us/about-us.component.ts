import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../core/enums/route-name.enum';

@Component({
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

    constructor() {
    }

    get RouteName(): typeof RouteName  {
        return RouteName;
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
