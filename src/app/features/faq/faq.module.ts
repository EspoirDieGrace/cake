import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FaqRoutingModule} from './faq.routing.module';
import {FaqComponent} from './faq.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        CommonModule,
        FaqRoutingModule,
        TranslocoModule,
        FontAwesomeModule
    ],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: {scope: 'faq', alias: 'faq'}
        }
    ]
})
export class FaqModule {
}
