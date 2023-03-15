import {RouterModule, Routes} from "@angular/router";
import {RouteName} from "../../core/enums/route-name.enum";
import {NgModule} from "@angular/core";
import {AdminClientComponent} from "./admin-client.component";
import {ClientDashboardComponent} from "./client-dashboard/client-dashboard.component";
import {ClientIdentityComponent} from "./client-identity/client-identity.component";
import {ClientMembershipComponent} from "./client-membership/client-membership.component";
import {ClientPaymentsComponent} from "./client-payments/client-payments.component";
import {ClientWithdrawComponent} from "./client-payments/client-withdraw/client-withdraw.component";
import {
    ClientTransactionHistoryComponent
} from "./client-payments/client-transaction-history/client-transaction-history.component";
import {ClientDepositComponent} from "./client-payments/client-deposit/client-deposit.component";
import {ClientSettingsComponent} from "./client-settings/client-settings.component";
import {ClientProfileSettingComponent} from "./client-settings/client-profile-setting/client-profile-setting.component";
import {
    ClientChangePasswordComponent
} from "./client-settings/client-change-password/client-change-password.component";
import {ClientDeleteAccountComponent} from "./client-settings/client-delete-account/client-delete-account.component";
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
import {ClientProjectsComponent} from "./client-projects/client-projects.component";
import {Separator, WebSiteTitle} from "src/app/core/consts/shared.const";
import { ClientPostJobComponent } from "./client-projects/client-post-job/client-post-job.component";

const routes: Routes = [
    {
        path: '',
        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Dashboard}`,
        component: AdminClientComponent,
        children: [
            {path: '', redirectTo: RouteName.Dashboard, pathMatch: 'full'},
            {
                path: RouteName.Dashboard,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Dashboard}`,
                component: ClientDashboardComponent
            },
            {
                path: RouteName.Membership,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Membership}`,
                component: ClientMembershipComponent
            },
            {
                path: RouteName.Identity,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Identity}`,
                component: ClientIdentityComponent
            },
            {
                path: RouteName.Payments,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Payments}`,
                component: ClientPaymentsComponent,
                children: [
                    {path: '', redirectTo: RouteName.Deposit, pathMatch: 'full'},
                    {
                        path: RouteName.Withdraw,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Payments} - ${RouteName.Withdraw}`,
                        component: ClientWithdrawComponent
                    },
                    {
                        path: RouteName.Deposit,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Payments} - ${RouteName.Deposit}`,
                        component: ClientDepositComponent
                    },
                    {
                        path: RouteName.Transactions,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Payments} - ${RouteName.Transactions}`,
                        component: ClientTransactionHistoryComponent
                    }
                ]
            },
            {
                path: RouteName.Settings,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Settings}`,
                component: ClientSettingsComponent,
                children: [
                    {path: '', redirectTo: RouteName.Profile, pathMatch: 'full'},
                    {
                        path: RouteName.Profile,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Settings} - ${RouteName.Profile}`,
                        component: ClientProfileSettingComponent
                    },
                    {
                        path: RouteName.ChangePassword,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Settings} - ${RouteName.ChangePassword}`,
                        component: ClientChangePasswordComponent
                    },
                    {
                        path: RouteName.DeleteAccount,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Freelancer} - ${RouteName.Settings} - ${RouteName.DeleteAccount}`,
                        component: ClientDeleteAccountComponent
                    }
                ]
            },
            {
                path: RouteName.Projects,
                title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects}`,
                component: ClientProjectsComponent,
                children: [
                    {path: '', redirectTo: RouteName.All, pathMatch: 'full'},
                    {
                        path: RouteName.All,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.All}`,
                        component: ClientAllProjectsComponent
                    },
                    {
                        path: RouteName.Pending,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Pending}`,
                        component: ClientPendingProjectsComponent
                    },
                    {
                        path: RouteName.Ongoing,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Ongoing}`,
                        component: ClientOngoingProjectsComponent
                    },
                    {
                        path: RouteName.Completed,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Completed}`,
                        component: ClientCompletedProjectsComponent
                    },
                    {
                        path: RouteName.Cancelled,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Cancelled}`,
                        component: ClientCancelledProjectsComponent
                    },
                    {
                        path: RouteName.Post,
                        title: `${WebSiteTitle} ${Separator} ${RouteName.Client} ${Separator} ${RouteName.Projects} ${Separator} ${RouteName.Post}`,
                        component: ClientPostJobComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminClientRoutingModule {
}
