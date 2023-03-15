import {gql} from 'apollo-angular'


const GET_USER_INFO = gql`
query users($id:ID){
  users(id:$id){
    edges{
      node{
        id
        slug
        firstname
        lastname
        email
        privileges
      }
    }
  }
}
 `


// uid: string;
// email: string;
// firstName: string;
// lastName: string;
// slug: string;
// privileges:string;




const GET_USERS = gql`
 {
   users {
    id,
    email,
    firstname,
    lastname,
    slug,
    privileges
  }
}
`

interface Users {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  slug: string;
  privileges:string;
}


class UsersClass{
  id!: string;
  email!: string;
  firstname!: string;
  lastname!: string;
  slug!: string;
  privileges!: string;
}


const GET_USER_ROLE = gql`
{
    usersRoles {
        edges{
            node{
                id
                name
            }
        }
   }
 }
 `


export {GET_USER_INFO, GET_USERS,UsersClass, GET_USER_ROLE}
