import { useEffect, useState } from "react"
import { User } from "../interfaces/userInterfaces"
import { getUsersData } from "../helpers/getuserData"

export const useFetch = ()=>{
    interface AppState {
        usersState: User[]
      }
    const [users, setUsers] = useState<AppState['usersState']>([])
    
    useEffect(() => {
    
      const data = async() =>{
        const users = await getUsersData()
        setUsers(users)
      }
    
      data()
    }, [])
    return users
}
