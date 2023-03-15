import {NgModule, Optional, SkipSelf} from '@angular/core';
import {EnsureModuleLoadedOnceGuard} from './guards/ensure-module-loaded-once.guard';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {
    LayoutWithHeaderFooterComponent
} from './components/layouts/header-and-footer/layout-with-header-footer.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/page-not-found/not-found.component';
import {CommonModule} from '@angular/common';
import {TranslocoModule} from '@ngneat/transloco';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    declarations: [
        LayoutWithHeaderFooterComponent,
        FooterComponent,
        HeaderComponent,
        NotFoundComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        TranslocoModule,
        FontAwesomeModule
    ],
    exports: [],
    providers: []
})

export class CoreModule extends EnsureModuleLoadedOnceGuard {
    // EnsureModuleLoadedOnceGuard : Ensure that CoreModule is only loaded into AppModule
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}
