import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from './faq.component';
import {RouteName} from "../../core/enums/route-name.enum";
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";

const routes: Routes = [
    {
        path: '',
        title: `${WebSiteTitle} ${Separator} ${RouteName.Faq}`,
        component: FaqComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaqRoutingModule {
}
