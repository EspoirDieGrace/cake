import { gql } from "apollo-angular";

const insertJob = gql`
mutation insertJobs(
    $attachments: String,
    $budget: Float!,
    $budgettype: String!
    $category: ID!,
    $clientid: ID!,
    $city: ID!,
    $employementType: ID!
    $jobdescription: String!,
    $jobskills: String!,
    $jobtitle: String!,
    $subcategory: ID!,
    $timeline: Int!,
    $expirydate: Date
  ){
  insertJobs(
    attachments: $attachments
    budget: $budget
    budgettype: $budgettype
    category: $category
    city: $city
    employementType: $employementType    
    clientid: $clientid
    jobdescription:$jobdescription
    jobskills: $jobskills
    jobtitle: $jobtitle
    subcategory: $subcategory
    timeline: $timeline
    expirydate: $expirydate
  ){
    
    success
    errors
    jobs{

      jobtitle
    	jobskills
    	clientid{
        id
        firstname 
      }

      category{
        id 
        name
      }

    }
  }
}
`



export {insertJob}