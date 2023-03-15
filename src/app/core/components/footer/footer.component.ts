import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../enums/route-name.enum';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

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
