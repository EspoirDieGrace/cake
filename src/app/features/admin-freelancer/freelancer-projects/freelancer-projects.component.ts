import {Component, OnDestroy, OnInit} from "@angular/core";
import {RouteName} from "../../../core/enums/route-name.enum";

@Component({
    templateUrl: 'freelancer-projects.component.html',
    styleUrls: ['freelancer-projects.component.scss']
})
export class FreelancerProjectsComponent implements OnInit, OnDestroy {
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
