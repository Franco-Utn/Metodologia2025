import { User } from "../interfaces/userInterfaces"

//Primer paso almacenar el link de la APi
const API_USERS ='https://jsonplaceholder.typicode.com/users'

export const getUsersData = async()=>{
    //Segundo paso hacer una petición GET a la API
    const data = await fetch(API_USERS)
    const users:User[] = await data.json()
    console.log(users)
    return users
}