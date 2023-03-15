import { gql } from "apollo-angular";

const GET_ALL_JOB  = gql`
query jobs($isDeleted: Int){
    jobs(isDeleted :$isDeleted){
      edges{
        node{
          category{
            name
            isActive
          }
          subcategory{
            name
          }
            jobtitle
          jobskills
          jobdescription
          expirydate
          budgettype
          budget
          timeline
          attachments
          isDeleted
          }
      }
    }
  }
`



const GET_JOB_BY_ID = gql`
query jobs($id: ID){
  jobs(clientid :$clientid){
    edges{
      node{
        category{
          name
          isActive
        }
        subcategory{
          name
        }
        clientid{
          id
          firstname 
        }
        jobtitle
        jobskills
        jobdescription
        expirydate
        budgettype
        budget
        timeline
        attachments
        isDeleted
        }
    }
  }
}
`


const GET_CLIENT_JOB = gql`
query jobs($clientid: ID){
  jobs(clientid :$clientid){
    edges{
      node{
        category{
          name
          isActive
        }
        subcategory{
          name
        }
        clientid{
          id
          firstname 
        }
        jobtitle
        jobskills
        jobdescription
        expirydate
        budgettype
        budget
        timeline
        attachments
        isDeleted
        }
    }
  }
}
`


export {GET_ALL_JOB, GET_CLIENT_JOB, GET_JOB_BY_ID}