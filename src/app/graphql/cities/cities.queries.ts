import { gql } from "apollo-angular";


const GET_CITIES = gql`
{
 cities{
    edges{
        node{
            id
            name
           }
        }
     }
}

`

export{GET_CITIES}