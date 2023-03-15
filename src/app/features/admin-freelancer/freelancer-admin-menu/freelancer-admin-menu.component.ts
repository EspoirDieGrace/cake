import {Component, OnDestroy, OnInit} from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
//import { AuthService } from "src/app/core/services/auth.service";
import {RouteName} from "../../../core/enums/route-name.enum";

@Component({
    selector: 'app-freelancer-admin-menu',
    templateUrl: 'freelancer-admin-menu.component.html',
    styleUrls: ['freelancer-admin-menu.component.scss']
})
export class FreelancerAdminMenuComponent implements OnInit, OnDestroy {
    user:any
    constructor(private authService: AuthService,
        private router: Router,
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

     // Sign out
  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
    });
  }
}
