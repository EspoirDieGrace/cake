import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteName} from '../../../core/enums/route-name.enum';
import {Router} from "@angular/router";
import { Apollo } from 'apollo-angular';
import { GET_ALL_JOB } from 'src/app/graphql/jobs/jobs.queries';
import { threadId } from 'worker_threads';
import { FormControl } from '@angular/forms';

@Component({
    templateUrl: './search-projects.component.html',
    styleUrls: ['./search-projects.component.scss']
})
export class SearchProjectsComponent implements OnInit, OnDestroy {
    jobs : any
    catName: any
    catIndex: any
    redirectTo: RouteName | null = null;
    


    filtercat = new FormControl('',[])

    

    constructor(
        public apollo: Apollo,
    ) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    // getCatName(){
    //     this.apollo.watchQuery({
                    
    //       query: GET_CATNAME,
    //       // variables: {
    //       //     id: userId
    //       // }
    //       }).valueChanges.subscribe(({data, error}: any) => {
    //         console.log(data)
    
    //         let cat:any  = JSON.stringify(data.categories.edges)
    //         localStorage.setItem('cat', cat);   
             
    //       });
    //   }


    ngOnInit(): void {
      
            this.apollo.watchQuery({
                        
              query: GET_ALL_JOB,
              // variables: {
              //     id: userId
              // }
              }).valueChanges.subscribe(({data, error}: any) => {
               // console.log(data)
        
                 let job:any  = JSON.stringify(data.jobs.edges)

          // console.log(job)
                 localStorage.setItem('alljobs', job);   

                 
              });

            this.jobs= [{}]
            let getJob:any = JSON.parse(localStorage.getItem('alljobs')!)
          
            for(let i in getJob){
                this.jobs.push(getJob[i]['node'])
            }

            this.jobs.forEach((data : any )=> {
                console.log(data.category?.name)
            });

            console.log(this.jobs)

            let cat  = localStorage.getItem('cat')!
            let allCatName = JSON.parse(cat)
    
        
    
          //  console.log(this.catName)
          this.catName =[]
          this.catIndex =[{}]
          
           for(let i in allCatName){
            this.catIndex.push({index:i, 
                                name: allCatName[i].node.name })
            
            this.catName.push(allCatName[i].node.name)
    
             console.log(this.catIndex)
          }
    }

    filterByCategory(){
        Object.fromEntries(Object.entries(this.jobs.categories?.name).filter(([key]) => key.includes(this.filtercat.value!)));
    }


    ngOnDestroy(): void {
    }

}
