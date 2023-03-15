import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { RouteName } from 'src/app/core/enums/route-name.enum';
import { GET_CLIENT_JOB } from 'src/app/graphql/jobs/jobs.queries';

import { threadId } from 'worker_threads';

@Component({
    templateUrl: './client-all-projects.component.html',
    styleUrls: ['./client-all-projects.component.scss']
})
export class ClientAllProjectsComponent implements OnInit, OnDestroy {
    user:any
    jobs: any

    constructor(
        public apollo: Apollo,
        private router: Router
    ) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }


    // getJobByClient(){
    //     this.apollo.watchQuery({
    //         variables: this.user.id,
    //         query: GET_CLIENT_JOB
    //     }).valueChanges.subscribe(({data,error})=> 
    //     {
    //         console.log(data)
    //     })
    

    // }


    ngOnInit(): void {
        let getuser = localStorage.getItem('user')!
        this.user = JSON.parse(getuser)

        console.log('the use', this.user)
       
        this.apollo.watchQuery({
          
            query: GET_CLIENT_JOB,
            variables:{
                cilentid: this.user?.id
            }
        }).valueChanges.subscribe(({data,error}:any)=> 
        {
            //console.log(data)

           let jobs = data.jobs.edges
           console.log(jobs)
           this.jobs=[{}]
           for(let i in jobs){
            console.log(jobs[i].node)
            this.jobs.push(jobs[i].node)
           }

         
        })
    
    }



    passDataToB(){
        this.router.navigate(['/projects/details'],
        {
        state: {
        jobs: this.jobs
        }
        }
        );
        }




    getJoblocally(){
        let jb = JSON.stringify(this.jobs)
        localStorage.setItem('jobs', jb)
        let getjb = JSON.parse(localStorage.getItem('jobs')!)
        console.log(getjb)
    }
    ngOnDestroy(): void {
    }

}
