import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FreelancersComponent} from './freelancers.component';
import {RouteName} from '../../core/enums/route-name.enum';
import {SearchFreelancersComponent} from './search-freelancers/search-freelancers.component';
import {FreelancerDetailsComponent} from './freelancer-details/freelancer-details.component';
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";

const routes: Routes = [
    {
        path: '',
        component: FreelancersComponent,
        children: [
            {path: '', redirectTo: RouteName.Search, pathMatch: 'full'},
            {
                path: RouteName.Search,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancers} ${Separator} ${RouteName.Search}`,
                component: SearchFreelancersComponent
            },
            {
                path: RouteName.Details,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancers} ${Separator} ${RouteName.Details}`,
                component: FreelancerDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreelancersRoutingModule {
}
