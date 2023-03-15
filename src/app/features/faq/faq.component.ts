import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../core/enums/route-name.enum';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'

@Component({
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
    faCircleCheck = faCircleCheck

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
