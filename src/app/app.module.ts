import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
// import {AngularFireAnalyticsModule} from '@angular/fire/compat/analytics';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco-root.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthGuard} from "@angular/fire/auth-guard";

import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {
    LayoutWithHeaderFooterComponent
} from "./core/components/layouts/header-and-footer/layout-with-header-footer.component";
import { GraphQLModule } from './graphql/graphql.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // Base modules
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        // Firebase and Google Analytics modules
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        // AngularFireAnalyticsModule,
        // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAnalytics(() => getAnalytics()),
        // provideAuth(() => getAuth()),
        // provideFirestore(() => getFirestore()),
        // Translate
        TranslocoRootModule,
        FontAwesomeModule,
        GraphQLModule
    ],
    providers: [
        ScreenTrackingService,
        UserTrackingService,
        AuthGuard,
        {
            provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    xml: () => import('highlight.js/lib/languages/xml'),
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                }
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
