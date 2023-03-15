import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { SlowBuffer } from 'buffer';
import { of } from 'rxjs';
import { GET_CATNAME } from 'src/app/graphql/categories/categories.queries';
import { GET_CITIES } from 'src/app/graphql/cities/cities.queries';
import { GET_EMTYPE } from 'src/app/graphql/employementtype/etype.queries';
import { insertJob } from 'src/app/graphql/jobs/jobs.mutation';
import {UsersClass } from 'src/app/graphql/users/users.queries';

@Component({
  selector: 'app-client-post-job',
  templateUrl: './client-post-job.component.html',
  styleUrls: ['./client-post-job.component.scss']
})
export class ClientPostJobComponent implements OnInit {
  user : any
  categories : any
  catName : any
  catIndex:any
  catItem: any 

  scatName: any
  scatIndex:any
  

  cities: any
  employment_type: any


  jobtitle = new FormControl('',[
    Validators.required

  ])

  category = new FormControl('',[
  
  ]); 

  attachments = new FormControl('',[  
])

budget = new FormControl('',[])

expirydate = new FormControl('',[])

subcategory = new FormControl('',[])

jobdescription = new FormControl('',[
  
])


// jobskills = new FormControl('',
//  )


timeline = new FormControl('',[
  
])


budgettype = new FormControl('',[])

city = new FormControl('',[])

employementType = new FormControl('',[])



  constructor(
    private formBuilder: FormBuilder,
    public apollo: Apollo,
  ) { }


  //recuperer les categories 
  getCatName(){
    this.apollo.watchQuery({
                
      query: GET_CATNAME,
      // variables: {
      //     id: userId
      // }
      }).valueChanges.subscribe(({data, error}: any) => {
        console.log(data)

        let cat:any  = JSON.stringify(data.categories.edges)
        localStorage.setItem('cat', cat);   
         
      });
  }


  //get emptype

  getEmpType(){
    this.apollo.watchQuery({
                
      query: GET_EMTYPE,
      // variables: {
      //     id: userId
      // }
      }).valueChanges.subscribe(({data, error}: any) => {
        console.log(data)

        let amp = data.employementType.edges
         
        this.employment_type =[]
       for(let i in amp){
        this.employment_type.push({index:amp[i].node.id, 
                            name: amp[i].node.name })   
      }
    
      console.log(this.employment_type)
      });
  }




  // getFromGql(query:any,content:any){

  //   this.apollo.watchQuery({
  //     query: query,
  //   }).valueChanges.subscribe(({data, error}: any) => {
  //     // console.log(data)

  //     let getcontent:any  = data.x.edges
     
  //     // localStorage.setItem('cat', cat);   
  //     this.cities =[]
  //     for(let i in getcontent){
  //      this.cities.push({index:i, 
  //                          name: getcontent[i].node.name })   
  //    }
   
  //    console.log(this.cities)
        
  //    });


  // }

  //recuperer les cities 

  getCitiesName(){
    this.apollo.watchQuery({
                
      query: GET_CITIES,
      // variables: {
      //     id: userId
      // }
      }).valueChanges.subscribe(({data, error}: any) => {
       // console.log(data)

       let cities:any  = data.cities.edges
      
       // localStorage.setItem('cat', cat);   
       this.cities =[]
       for(let i in cities){
        this.cities.push({index:cities[i].node.id, 
                            name: cities[i].node.name })   
      }
    
      console.log(this.cities)
         
      });
  }


  


  ngOnInit(): void {
   
    let getuser = localStorage.getItem('user')!
    let tuser = JSON.parse(getuser)


    
    this.user = tuser
    console.log(this.user)
    console.log(this.user.id)

    console.log(typeof tuser)


    //console.log(this.user.uid)
    this.getCatName()

    this.getCitiesName()

    this.getEmpType()

    let cat  = localStorage.getItem('cat')!
        let allCatName = JSON.parse(cat)
    console.log('allcatName', allCatName)
    

      //  console.log(this.catName)
      this.catName =[]
      this.catIndex =[{}]
      
       for(let i in allCatName){
        //console.log(allCatName.i?.id)
        this.catIndex.push({index:allCatName[i].node.id, 
                            name: allCatName[i].node.name })
        
        //this.catName.push(allCatName[i].node.name)

         console.log(this.catIndex)
      }
  }


  job = this.formBuilder.group({
    jobtitle: this.jobtitle,
    attachments: '',
    budget: this.budget,
    budgettype: this.budgettype,
    city: this.city,
    employementType: this.employementType,
    category: this.category,
    jobdescription: this.jobdescription,
    jobskills: this.formBuilder.array(
      [
        this.formBuilder.control('')
      ]
    ),
    subcategory: this.subcategory,
    timeline: this.timeline,
    expirydate : this.expirydate,

});


get jobskills(){
  return this.job.get('jobskills') as FormArray
}

   
addJobSkill(){
  this.jobskills.push(this.formBuilder.control(''))
}

rmvJbsk(){
  this.jobskills.removeAt(this.jobskills.value)
}




getFormContent(){
  let obj = this.job.value
//  console.log(parseInt(this.job.value.category!))
  console.log(String(this.user!.id))

  console.log(obj)

}





sendJob(){
 
  this.getFormContent()
  this.apollo.mutate({
    mutation: insertJob,
    variables: {
      attachments: this.job.value.attachments,
      budget: this.job.value.budget,
      budgettype: this.job.value.budgettype,
      city: this.job.value.city,
      employementType: this.job.value.employementType,
      category: this.job.value.category,
      clientid: this.user.id,
      jobdescription: this.job.value.jobdescription,
      jobskills: (this.job.value.jobskills)?.toString(),
      jobtitle: this.job.value.jobtitle,
      subcategory: this.job.value.subcategory,
      timeline: parseFloat(this.job.value.timeline!),
      expirydate: this.job.value.expirydate
    },
}).subscribe(({ data }) => {
    console.log('got data', data);
    alert('enregistrement reussi')
},(error) => {
    console.log('there was an error sending the query', error);
});

}

  //charger les categories 



  // inserer le attachment dans firestore
  //inserer les donnees dans la bd gql
  

}
