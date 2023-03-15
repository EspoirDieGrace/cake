import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
    LayoutWithHeaderFooterComponent
} from './core/components/layouts/header-and-footer/layout-with-header-footer.component';
import {NotFoundComponent} from './core/components/page-not-found/not-found.component';
import {RouteName} from './core/enums/route-name.enum';
import {WebSiteTitle} from "./core/consts/shared.const";
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import {HeaderComponent} from "./core/components/header/header.component";


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
    { path:'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    {
        path: '',
       // canActivate: [AngularFireAuthGuard],
        component: LayoutWithHeaderFooterComponent,
      //  data: { authGuardPipe: redirectUnauthorizedToLogin },
        children: [
            {
                path: '',
                title: WebSiteTitle,
                loadChildren: () =>
                    import('./features/home/home.module').then((m) => m.HomeModule)
            },
            {
                path: RouteName.Auth,
                loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: RouteName.Freelancers,
                loadChildren: () => import('./features/freelancers/freelancers.module').then(m => m.FreelancersModule),
            },
            {
                path: RouteName.Projects,
                loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule)
            },
            {
                path: RouteName.AboutUs,
                loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule)
            },
            {
                path: RouteName.Faq,
                loadChildren: () => import('./features/faq/faq.module').then(m => m.FaqModule)
            },
            {
                path: RouteName.Client,
                loadChildren: () => import('./features/admin-client/admin-client.module').then(m => m.AdminClientModule)
            },
            {
                path: RouteName.Freelancer,
                loadChildren: () => import('./features/admin-freelancer/admin-freelancer.module').then(m => m.AdminFreelancerModule)
            },
            {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
