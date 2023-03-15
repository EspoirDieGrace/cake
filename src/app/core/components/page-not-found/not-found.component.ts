import {Component, OnInit} from '@angular/core';
import {RouteName} from '../../enums/route-name.enum';
import { Location } from '@angular/common'


@Component({
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    constructor(
        private location: Location
    ) {
    }

    ngOnInit(): void {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    goBack = (): void => {
        this.location.back();
    };
}
