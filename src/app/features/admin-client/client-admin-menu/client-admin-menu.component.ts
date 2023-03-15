import {Component, OnDestroy, OnInit} from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import {RouteName} from "../../../core/enums/route-name.enum";

@Component({
    selector: 'app-client-admin-menu',
    templateUrl: 'client-admin-menu.component.html',
    styleUrls: ['client-admin-menu.component.scss']
})
export class ClientAdminMenuComponent implements OnInit, OnDestroy {
    user: any;
    constructor(private router: Router,
        private firebaseAuth: AngularFireAuth,) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    ngOnInit(): void {
        let getuser = localStorage.getItem('user')!
        this.user = JSON.parse(getuser)
        console.log('on recupere mes infos', this.user)
    }

    ngOnDestroy(): void {
    }

    SignOut() {
        return this.firebaseAuth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['/auth/login']);
        });
      }
}
