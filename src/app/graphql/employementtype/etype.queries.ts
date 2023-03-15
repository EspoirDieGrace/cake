import { gql } from "apollo-angular";


const GET_EMTYPE = gql`
{
    employementType{
     edges{
       node{
         id
         name
       }
     }
   }
   }

`

export{GET_EMTYPE}