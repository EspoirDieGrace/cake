import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth.routing.module';
import {RegisterComponent} from './register/register.component';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
]

@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent,
        LoginComponent,
        ForgotPasswordComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        AuthRoutingModule,
        TranslocoModule,
        FormsModule
    ],
    exports: [],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: {scope: 'auth', alias: ''}
        }
    ]
})

export class AuthModule {}
