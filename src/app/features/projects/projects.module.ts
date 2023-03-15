import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsRoutingModule} from './projects.routing.module';
import {ProjectsComponent} from './projects.component';
import {NgSelect2Module} from 'ng-select2';
import {SearchProjectsComponent} from './search-projects/search-projects.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProjectsComponent,
        SearchProjectsComponent,
        ProjectDetailsComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        NgSelect2Module,
        FormsModule,
        ReactiveFormsModule

    ],
    exports: [],
    providers: []
})

export class ProjectsModule {

}
