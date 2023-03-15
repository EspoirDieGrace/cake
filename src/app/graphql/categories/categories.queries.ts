import { gql } from "apollo-angular";



const GET_CATNAME = gql`
{
    categories {
        edges{
            node{
                name
            }
        }
   }
 }
 `

 export {GET_CATNAME}

//  query categories($id:ID){
//     categories(id:$id){
//       edges{
//         node{
//           name
//         }
//       }
//     }
//   }
  