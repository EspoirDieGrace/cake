import {RouterModule, Routes} from "@angular/router";
import {RouteName} from "../../core/enums/route-name.enum";
import {NgModule} from "@angular/core";
import {FreelancerDashboardComponent} from "./freelancer-dashboard/freelancer-dashboard.component";
import {AdminFreelancerComponent} from "./admin-freelancer.component";
import {FreelancerProjectsComponent} from "./freelancer-projects/freelancer-projects.component";
import {
    FreelancerProposalProjectsComponent
} from "./freelancer-projects/freelancer-proposal-projects/freelancer-proposal-projects.component";
import {
    FreelancerOngoingProjectsComponent
} from "./freelancer-projects/freelancer-ongoing-projects/freelancer-ongoing-projects.component";
import {
    FreelancerCompletedProjectsComponent
} from "./freelancer-projects/freelancer-completed-projects/freelancer-completed-projects.component";
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
import {
    FreelancerProfileSettingComponent
} from "./freelancer-settings/freelancer-profile-setting/freelancer-profile-setting.component";
import {
    FreelancerChangePasswordComponent
} from "./freelancer-settings/freelancer-change-password/freelancer-change-password.component";
import {
    FreelancerDeleteAccountComponent
} from "./freelancer-settings/freelancer-delete-account/freelancer-delete-account.component";
import {FreelancerSettingsComponent} from "./freelancer-settings/freelancer-settings.component";
import {Separator, WebSiteTitle} from "../../core/consts/shared.const";
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
    {
        path: '',
        
        component: AdminFreelancerComponent,

        children: [
            {path: '', redirectTo: RouteName.Dashboard, pathMatch: 'full'},
            {
                path: RouteName.Dashboard,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Dashboard}`,
                component: FreelancerDashboardComponent
            },
            {
                path: RouteName.Projects,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Projects}`,
                component: FreelancerProjectsComponent,
                children: [
                    {path: '', redirectTo: RouteName.Proposal, pathMatch: 'full'},
                    {
                        path: RouteName.Proposal,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Proposal}`,
                        component: FreelancerProposalProjectsComponent
                    },
                    {
                        path: RouteName.Ongoing,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Ongoing}`,
                        component: FreelancerOngoingProjectsComponent
                    },
                    {
                        path: RouteName.Completed,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Completed}`,
                        component: FreelancerCompletedProjectsComponent
                    },
                    {
                        path: RouteName.Cancelled,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Cancelled}`,
                        component: FreelancerCancelledProjectsComponent
                    }
                ]
            },
            {
                path: RouteName.Membership,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Membership}`,
                component: FreelancerMembershipComponent
            },
            {
                path: RouteName.Identity,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Identity}`,
                component: FreelancerIdentityComponent
            },
            {
                path: RouteName.Payments,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Payments}`,
                component: FreelancerPaymentsComponent,
                children: [
                    {path: '', redirectTo: RouteName.Withdraw, pathMatch: 'full'},
                    {
                        path: RouteName.Withdraw,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Payments} - ${RouteName.Withdraw}`,
                        component: FreelancerWithdrawComponent
                    },
                    {
                        path: RouteName.Transactions,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Payments} - ${RouteName.Transactions}`,
                        component: FreelancerTransactionHistoryComponent
                    }
                ]
            },
            {
                path: RouteName.Settings,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Settings}`,
                component: FreelancerSettingsComponent,
                children: [
                    {path: '', redirectTo: RouteName.Profile, pathMatch: 'full'},
                    {
                        path: RouteName.Profile,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Settings} - ${RouteName.Profile}`,
                        component: FreelancerProfileSettingComponent
                    },
                    {
                        path: RouteName.ChangePassword,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Settings} - ${RouteName.ChangePassword}`,
                        component: FreelancerChangePasswordComponent
                    },
                    {
                        path: RouteName.DeleteAccount,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} ${Separator} ${RouteName.Settings} - ${RouteName.DeleteAccount}`,
                        component: FreelancerDeleteAccountComponent
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminFreelancerRoutingModule {
}
