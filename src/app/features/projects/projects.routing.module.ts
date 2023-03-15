import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../core/enums/route-name.enum';
import {ProjectsComponent} from './projects.component';
import {SearchProjectsComponent} from './search-projects/search-projects.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [
            {path: '', redirectTo: RouteName.Search, pathMatch: 'full'},
            {
                path: RouteName.Search,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Search}`,
                component: SearchProjectsComponent
            },
            {
                path: RouteName.Details,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Details}`,
                component: ProjectDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule {
}
