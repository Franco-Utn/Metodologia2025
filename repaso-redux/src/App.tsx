import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { decrement, increment } from "./redux/slices/counter"

function App() {
//tomar el valor de redux
const numeroEnRedux = useAppSelector((state=> state.counter.valor))
//Usamos dispatch para poder ocupar las funcioones del reducer
const dispatch = useAppDispatch()

const incremento = ()=>{
  dispatch(increment())
}

const decremento = ()=>{
 dispatch(decrement())
}
console.log(numeroEnRedux)

  return (
    <>
     <h1>App con Redux</h1>
     <h3>{numeroEnRedux}</h3>
     <button onClick={incremento}> + </button>
     <button onClick={decremento}> - </button>

    </>
  )
}

export default App
