import {Component, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildDecorator} from '@angular/core';
import {RouteName} from '../../../core/enums/route-name.enum';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Apollo} from "apollo-angular";
import {ADD_USER} from "../../../graphql/users/users.mutaion";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {


    returnUrl: any;
    loading = true;
    error: any;
    getv : any;
    getc: any
    userRole: any = 'freelancer'
    isLoading = false

   

    date_ = new Date(Date.now())

    //validator
    
    firstName = new FormControl('',[
        Validators.required,
        Validators.maxLength(50)
    ])

    lastName = new FormControl('',[
        Validators.required,
        Validators.maxLength(15)
    ])

    username = new FormControl('',[
        Validators.required,
        Validators.maxLength(20)
    ])

    email = new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
       
    ])

    password = new FormControl('',[
        Validators.required,
        Validators.minLength(6)
    ])



    

    appRegister = this.formBuilder.group({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
    });

    
    
 

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private firebaseAuth: AngularFireAuth,
        private apollo: Apollo,
        private builder: FormBuilder,
        private elementRef: ElementRef
    ) {
    }

   

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth/login';
    }

    //set role freelancer on click
changeTof(){
    this.userRole = 'freelancer'
    console.log(this.userRole)

}

//set role client on click
changeToc(){
    this.userRole = 'client'
    console.log(this.userRole)
}

getValue(){
    console.log(this.appRegister.value.username)
    console.log(this.appRegister.value.email)  
    console.log(this.appRegister.value.password)
    console.log(this.appRegister.value.firstName)
    console.log(this.appRegister.value.lastName)
    console.log(this.getv)

}


toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };


    // TODO : validate form input first
    onRegister(): void {
        this.toggleLoading()

        console.log(this.appRegister.value.email)

        this.firebaseAuth.createUserWithEmailAndPassword(<string>this.appRegister.value.email?.trim(), <string>this.appRegister.value.password)
            .then((userCredential) => {
                let user = userCredential.user;

                this.apollo.mutate({
                    mutation: ADD_USER,
                    variables: {
                        id: user?.uid,
                        slug: this.appRegister.value.username,
                        email: this.appRegister.value.email?.trim(),
                        firstname: this.appRegister.value.firstName,
                        lastname: this.appRegister.value.lastName,
                        privileges: this.userRole,
                        createddate:  this.date_.toJSON(),
                        updateddate:  this.date_.toJSON()
                    },
                }).subscribe(({ data }) => {
                    console.log('got data', data);
                   // alert('enregistrement reussi')
                   
                },(error) => {
                    console.log('there was an error sending the query', error);
                });
               
                setTimeout(()=>this.router.navigate([this.returnUrl]),1000 )
                

            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(error);
                // ..
            });
    }

    ngOnDestroy(): void {
    }

}
