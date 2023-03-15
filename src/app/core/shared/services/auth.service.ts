import {Injectable, NgZone} from '@angular/core';
import {Apollo} from "apollo-angular";
import {User} from "./user";
import {GET_USER_INFO} from "../../../graphql/users/users.queries";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { LoginComponent } from 'src/app/features/auth/login/login.component';
import {ActivatedRoute, Router} from "@angular/router";

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Sign } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  // MAKE AUTH SERVICE BETTER
  userData: any;

  constructor(public firebaseAuth: AngularFireAuth,
              public apollo: Apollo,
              public ngZone: NgZone,
              private router: Router,
              private route: ActivatedRoute,) {

  
    this.firebaseAuth.authState.subscribe((user) => {
      if (user) {
        // this.userData = user;
        const userId = user.uid;

        this.apollo.watchQuery({
          query: GET_USER_INFO,
          variables: {
            id: userId
          }
        }).valueChanges.subscribe(({data, error}: any) => {
          // this.error = error;
          this.userData = {
            uid: userId,
            email: data.users.email,
            firstName: data.users.firstname,
            lastName: data.users.lastname,
            slug: data.users.slug,
            privileges: data.users.privileges,
          };

          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        });


      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

   // Sign in with email/password


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ;
  }


  // && user.emailVerified !== false


  // Sign out
 
}
