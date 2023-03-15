import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from 'src/app/core/enums/route-name.enum';

@Component({
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

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
