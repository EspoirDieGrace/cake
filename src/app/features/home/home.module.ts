import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './home.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgSelect2Module} from 'ng-select2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CarouselModule,
        NgSelect2Module,
        FormsModule,
        ReactiveFormsModule,
        TranslocoModule
    ],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: {scope: 'home', alias: ''}
        }
    ]
})
export class HomeModule {
}
