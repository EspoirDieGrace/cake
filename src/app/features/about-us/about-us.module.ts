import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutUsRoutingModule} from './about-us.routing.module';
import {AboutUsComponent} from './about-us.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';

@NgModule({
    declarations: [
        AboutUsComponent
    ],
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        TranslocoModule
    ],
    exports: [],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: {scope: 'about', alias: ''}
        }
    ]
})
export class AboutUsModule {
}
