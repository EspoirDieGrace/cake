import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../../core/enums/route-name.enum';

@Component({
    templateUrl: './search-freelancers.component.html',
    styleUrls: ['./search-freelancers.component.scss']
})
export class SearchFreelancersComponent implements OnInit, OnDestroy {

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
