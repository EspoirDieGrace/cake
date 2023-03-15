import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {RouteName} from '../../core/enums/route-name.enum';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {path: '', redirectTo: RouteName.Login, pathMatch: 'full'},
            {
                path: RouteName.Register,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Register}`,
                component: RegisterComponent
            },
            {
                path: RouteName.Login,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Login}`,
                component: LoginComponent},
            {
                path: RouteName.ForgotPassword,
                title: `${WebSiteTitle} ${Separator} ${RouteName.ForgotPassword}`,
                component: ForgotPasswordComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {
}
