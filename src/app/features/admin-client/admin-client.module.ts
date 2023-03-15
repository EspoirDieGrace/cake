import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {AdminClientRoutingModule} from "./admin-client.routing.module";
import {AdminClientComponent} from "./admin-client.component";
import {ClientAdminMenuComponent} from "./client-admin-menu/client-admin-menu.component";
import {ClientDashboardComponent} from "./client-dashboard/client-dashboard.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {ClientIdentityComponent} from "./client-identity/client-identity.component";
import {ClientMembershipComponent} from "./client-membership/client-membership.component";
import {ClientPaymentsComponent} from "./client-payments/client-payments.component";
import {ClientWithdrawComponent} from "./client-payments/client-withdraw/client-withdraw.component";
import {
    ClientTransactionHistoryComponent
} from "./client-payments/client-transaction-history/client-transaction-history.component";
import {ClientDepositComponent} from "./client-payments/client-deposit/client-deposit.component";
import {NgSelect2Module} from "ng-select2";
import {ClientSettingsComponent} from "./client-settings/client-settings.component";
import {ClientProfileSettingComponent} from "./client-settings/client-profile-setting/client-profile-setting.component";
import {
    ClientChangePasswordComponent
} from "./client-settings/client-change-password/client-change-password.component";
import {ClientDeleteAccountComponent} from "./client-settings/client-delete-account/client-delete-account.component";
import {ClientProjectsComponent} from "./client-projects/client-projects.component";
import {ClientAllProjectsComponent} from "./client-projects/client-all-projects/client-all-projects.component";
import {
    ClientPendingProjectsComponent
} from "./client-projects/client-pending-projects/client-pending-projects.component";
import {
    ClientCancelledProjectsComponent
} from "./client-projects/client-cancelled-projects/client-cancelled-projects.component";
import {
    ClientCompletedProjectsComponent
} from "./client-projects/client-completed-projects/client-completed-projects.component";
import {
    ClientOngoingProjectsComponent
} from "./client-projects/client-ongoing-projects/client-ongoing-projects.component";
import { ClientPostJobComponent } from './client-projects/client-post-job/client-post-job.component';

@NgModule({
    declarations: [
        AdminClientComponent,
        ClientAdminMenuComponent,
        ClientDashboardComponent,
        ClientIdentityComponent,
        ClientMembershipComponent,
        ClientPaymentsComponent,
        ClientWithdrawComponent,
        ClientTransactionHistoryComponent,
        ClientDepositComponent,
        ClientSettingsComponent,
        ClientProfileSettingComponent,
        ClientChangePasswordComponent,
        ClientDeleteAccountComponent,
        ClientProjectsComponent,
        ClientAllProjectsComponent,
        ClientPendingProjectsComponent,
        ClientCancelledProjectsComponent,
        ClientCompletedProjectsComponent,
        ClientOngoingProjectsComponent,
        ClientPostJobComponent
    ],
    imports: [
        CommonModule,
        AdminClientRoutingModule,
        TranslocoModule,
        NgApexchartsModule,
        NgSelect2Module,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: {scope: '', alias: ''}
        }
    ]
})

export class AdminClientModule {

}
