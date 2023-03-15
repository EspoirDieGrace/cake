import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us.component';
import {RouteName} from "../../core/enums/route-name.enum";
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";

const routes: Routes = [
    {
        path: '',
        title: `${WebSiteTitle} ${Separator} ${RouteName.AboutUs}`,
        component: AboutUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
