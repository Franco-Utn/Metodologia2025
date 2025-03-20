import { useEffect, useState } from "react"
/*
Tienes un problema con la forma en que estás pasando la función handleChange a los botones. Actualmente, estás ejecutando handleChange(1) y handleChange(-1) directamente en la prop onClick, lo que significa que la función se ejecuta inmediatamente cuando el componente se renderiza en lugar de esperar a que el usuario haga clic en el botón.

Corrección
Debes envolver la llamada a handleChange en una función anónima para que solo se ejecute cuando el usuario haga clic:m
*/ 
export const Contador = () => {

  
    const [contador, setContador] = useState<number>(0)
    const handleChange = (numero:number)=>{
        setContador(contador+numero)
    }
    useEffect(() => {
     console.log(`el contador cambio ${contador}`  )
    }, [contador])
    
  return (
    <div>
        <h3>Counter</h3>
        <p>{contador}</p>
        <button onClick={()=>handleChange(1)}>+1</button>
        <button onClick={()=>handleChange(-1)}>-1</button>

    </div>
  )
}
