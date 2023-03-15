import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { ADD_FREELANCE_DETAILS } from 'src/app/graphql/users/users.mutaion';

@Component({
    templateUrl: './freelancer-profile-setting.component.html',
    styleUrls: ['./freelancer-profile-setting.component.scss']
})
export class FreelancerProfileSettingComponent implements OnInit, OnDestroy {

   $profiletitle = new FormControl('',[])
   $rateperhour = new FormControl('',[])
   $phone = new FormControl('',[])
   $favoritefreelancer = new FormControl('',[])
   $languages = new FormControl('',[])
   $address = new FormControl('',[])
   $city = new FormControl('',[])
   $countrycode = new FormControl('',[])
   $country = new FormControl('',[])
   $description = new FormControl('',[])
   $skills = new FormControl('',[])


   freelanceProfile =  this.formBuilder.group({
    profiletitle: this.$profiletitle ,
    rateperhour: this.$rateperhour ,
    phone: this.$phone,
    favoritefreelancer: this.$favoritefreelancer,
    languages:this.$languages,
    address: this.$address,
    city :this.$city, 
    countrycode: this.$countrycode,
    country: this.$country,
    description: this.$description ,
    skills: this.$skills 
   })

    constructor(
        private formBuilder: FormBuilder,
        private apollo: Apollo,
    ) {
    }

    ngOnInit(): void {
    }

    sendFreelanceInfo(){
                this.apollo.mutate({
            mutation: ADD_FREELANCE_DETAILS,
            variables: {
                profiletitle:  this.freelanceProfile.value.profiletitle,
                rateperhour: this.freelanceProfile.value.rateperhour,
                phone: this.freelanceProfile.value.phone,
                favoritefreelancer:this.freelanceProfile.value.favoritefreelancer,
                languages:this.freelanceProfile.value.languages,
                address:this.freelanceProfile.value.address,
                city :this.freelanceProfile.value.city,
                countrycode:this.freelanceProfile.value.countrycode,
                country:this.freelanceProfile.value.country,
                description :this.freelanceProfile.value.description,
                skills:this.freelanceProfile.value.skills,
                certificates: '',
                experience: '',
                education: '',
                cinetpayPhone: '',
                emailVerifiedAt: '',
                isOnline: '',
                isPro: '',
                lastActive: '',
                logo: '',
                minimumbudget: '',
                ratingAvg: '',
                rccm: '',
                savejobs: '',
                saveservices: '',                   
                socialId: '',
                socialType: '',
                socketId: '',
                userid: '',
                usertype: '',
                verificationcode: '',
                website: ''
            },
        }).subscribe(({ data }) => {
            console.log('got data', data);
            alert('enregistrement reussi')
        },(error) => {
            console.log('there was an error sending the query', error);
        });
    


    }

    ngOnDestroy(): void {
    }

    
}
