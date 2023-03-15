import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteName } from '../../../core/enums/route-name.enum';
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/core/shared/services/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as auth from 'firebase/auth';
import { Apollo } from 'apollo-angular';
import { GET_USER_INFO } from 'src/app/graphql/users/users.queries';
import { threadId } from 'worker_threads';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    user: any;

    userData: any;

    isLoading = false;

    email = new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")

    ])

    password = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
    ])


    appLogin = this.formBuilder.group({
        email: this.email,
        password: this.password,
    });


    constructor(
        private authService: AuthService,
        private router: Router,
        private firebaseAuth: AngularFireAuth,
        public afs: AngularFirestore,
        private formBuilder: FormBuilder,
        public apollo: Apollo,
    ) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    toggleLoading = () => {
        this.isLoading = true;

        //Faking an API call
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    };


    SignIn(email: any, password: any) {
        this.toggleLoading()

        this.firebaseAuth.signInWithEmailAndPassword(email, password).then((result) => {


            if (result) {

                const userId = result.user?.uid
                this.apollo.watchQuery({

                    query: GET_USER_INFO,
                    variables: {
                        id: userId
                    }
                                        
                }).valueChanges.subscribe(({ data, error }: any) => {
                    let user = JSON.stringify(data.users.edges[0]['node'])
                    localStorage.setItem('user', user);
                    let getuser = localStorage.getItem('user')!
                    this.user = JSON.parse(getuser)
                    console.log(this.user)
                    this.user.privileges === 'freelancer' ? this.router.navigate(['/freelancer']) : this.router.navigate(['/client'])
                });
            } else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
                console.log('erreur');

            }

        }, err => {
            //window.alert(err.message)
            console.log(err.message)
        }
        )
        console.log(this.email);

    }
}
