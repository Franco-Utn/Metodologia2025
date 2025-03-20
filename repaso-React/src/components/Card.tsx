import { useFetch } from "../hooks/useFetch"

export const Card = () => {

  const users = useFetch()

  return (
    <div>
        <h1>Fetching</h1>
       {
       users.slice(0,5).map ( user =>(
        <article key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
        </article>
        
       ))
      }
    </div>
  )
}
