import {NgModule} from '@angular/core';
import {FreelancersComponent} from './freelancers.component';
import {CommonModule} from '@angular/common';
import {FreelancersRoutingModule} from './freelancers.routing.module';
import {NgSelect2Module} from 'ng-select2';
import {SearchFreelancersComponent} from './search-freelancers/search-freelancers.component';
import {FreelancerDetailsComponent} from './freelancer-details/freelancer-details.component';

@NgModule({
    declarations: [
        FreelancersComponent,
        SearchFreelancersComponent,
        FreelancerDetailsComponent
    ],
    imports: [
        CommonModule,
        FreelancersRoutingModule,
        NgSelect2Module
    ],
    exports: [],
    providers: []
})

export class FreelancersModule {

}
