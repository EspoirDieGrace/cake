import {Component, OnDestroy, OnInit} from "@angular/core";
import {RouteName} from "../../../core/enums/route-name.enum";

@Component({
    templateUrl: 'client-projects.component.html',
    styleUrls: ['client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit, OnDestroy {
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
