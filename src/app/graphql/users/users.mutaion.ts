import {gql} from "apollo-angular";

const ADD_USER = gql`
mutation InsertUsers($id: String!, $email: String!, $firstname: String!, $lastname: String!, $privileges: JSONString!, $slug: String!, $createdAt: DateTime, $updatedAt: DateTime){
   insertUsers(
       createdAt: $createdAt
       email: $email
       firstname: $firstname
       id: $id
       lastname: $lastname
       privileges: $privileges
       slug: $slug
       updatedAt: $updatedAt
      ){
        success,
        errors,
        users{
          firstname, lastname,
        }
      }
}
`


// mutation SaveUserId($id: String!, $email: String!, $firstname: String!, $lastname: String!, $privileges: String!, $slug: String!, $createdAt: DateTime, $updatedAt: DateTime) {
//   saveUserId(
//     id: $id
//     username: $username
//     email: $email
//     firstName: $first_name
//     lastName: $last_name
//     isAdmin: $is_admin
//     oldUserId: $old_user_id
//     createdDate: $created_date
//     updatedDate: $updated_date
//   ) {
//     success
//   }
// }

// insertUsers(
//   createdAt: $createdAt
//   email: $email
//   firstname: $firstname
//   id: $id
//   lastname: $lastname
//   privileges: $privileges
//   slug: $slug
//   updatedAt: $updateAt
//   )

const ADD_FREELANCE_DETAILS = gql`
  mutation insertUsersDetails(
      $address: String,
      $certificates: String,
      $cinetpayPhone: String,
      $city: String,
      $country: String,
      $countrycode: Int,
      $description: String,
      $education: String,
      $emailVerifiedAt: DateTime,
      $experience: String,
      $favoritefreelancer: String,
      $isOnline: Int,
      $isPro: Int,
      $languages: String,
      $lastActive: DateTime,
      $logo: String,
      $minimumbudget: Float,
      $phone: String,
      $profiletitle: String,
      $rateperhour: Float,
      $ratingAvg: String,
      $rccm: String,
      $savejobs: String,
      $saveservices: String,
      $skills: String,
      $socialId: String,
      $socialType: String,
      $socketId: String,
      $userid: String,
      $usertype: Int,
      $verificationcode: String,
      $website: String
  ){
    insertUsersDetails(
      address: $address
      certificates: $certificates
      cinetpayPhone: $cinetpayPhone
      city: $city
      country: $country
      countrycode: $countrycode
      description: $descriptio
      education: $education
      emailVerifiedAt: $emailVerifiedAt
      experience: $experience
      favoritefreelancer: $favoritefreelancer
      isOnline: $isOnline
      isPro: $isPro
      languages: $languages
      lastActive: $lastActive
      logo: $logo
      minimumbudget: $minimumbudget
      phone: $phone
      profiletitle: $profiletitle
      rateperhour: $rateperhour
      ratingAvg: $ratingAvg
      rccm: $rccm
      savejobs: $savefromjobs
      saveservices: $saveservices
      skills: $skills
      socialId: $socialId
      socialType: $socialType
      socketId: $socketId
      userid: $userid
      usertype: $usertype
      verificationcode: $verificationcode
      website: $website
    ){
      success
    }
  }
`



const DELETE_USER = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
  `



export {ADD_USER, DELETE_USER, ADD_FREELANCE_DETAILS}
