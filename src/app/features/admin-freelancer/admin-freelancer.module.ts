import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {AdminFreelancerRoutingModule} from "./admin-freelancer-routing.module";
import {FreelancerDashboardComponent} from "./freelancer-dashboard/freelancer-dashboard.component";
import {AdminFreelancerComponent} from "./admin-freelancer.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {FreelancerAdminMenuComponent} from "./freelancer-admin-menu/freelancer-admin-menu.component";
import {FreelancerProjectsComponent} from "./freelancer-projects/freelancer-projects.component";
import {
    FreelancerOngoingProjectsComponent
} from "./freelancer-projects/freelancer-ongoing-projects/freelancer-ongoing-projects.component";
import {
    FreelancerCompletedProjectsComponent
} from "./freelancer-projects/freelancer-completed-projects/freelancer-completed-projects.component";
import {
    FreelancerProposalProjectsComponent
} from "./freelancer-projects/freelancer-proposal-projects/freelancer-proposal-projects.component";
import {
    FreelancerCancelledProjectsComponent
} from "./freelancer-projects/freelancer-cancelled-projects/freelancer-cancelled-projects.component";
import {FreelancerMembershipComponent} from "./freelancer-membership/freelancer-membership.component";
import {FreelancerIdentityComponent} from "./freelancer-identity/freelancer-identity.component";
import {FreelancerPaymentsComponent} from "./freelancer-payments/freelancer-payments.component";
import {FreelancerWithdrawComponent} from "./freelancer-payments/freelancer-withdraw/freelancer-withdraw.component";
import {
    FreelancerTransactionHistoryComponent
} from "./freelancer-payments/freelancer-transaction-history/freelancer-transaction-history.component";
import {NgSelect2Module} from "ng-select2";
import {FreelancerSettingsComponent} from "./freelancer-settings/freelancer-settings.component";
import {
    FreelancerProfileSettingComponent
} from "./freelancer-settings/freelancer-profile-setting/freelancer-profile-setting.component";
import {
    FreelancerDeleteAccountComponent
} from "./freelancer-settings/freelancer-delete-account/freelancer-delete-account.component";
import {
    FreelancerChangePasswordComponent
} from "./freelancer-settings/freelancer-change-password/freelancer-change-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AdminFreelancerComponent,
        FreelancerAdminMenuComponent,
        FreelancerDashboardComponent,
        FreelancerProjectsComponent,
        FreelancerOngoingProjectsComponent,
        FreelancerCompletedProjectsComponent,
        FreelancerOngoingProjectsComponent,
        FreelancerProposalProjectsComponent,
        FreelancerCancelledProjectsComponent,
        FreelancerMembershipComponent,
        FreelancerIdentityComponent,
        FreelancerPaymentsComponent,
        FreelancerWithdrawComponent,
        FreelancerTransactionHistoryComponent,
        FreelancerSettingsComponent,
        FreelancerProfileSettingComponent,
        FreelancerDeleteAccountComponent,
        FreelancerChangePasswordComponent
    ],
    imports: [
        CommonModule,
        AdminFreelancerRoutingModule,
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

export class AdminFreelancerModule {

}
