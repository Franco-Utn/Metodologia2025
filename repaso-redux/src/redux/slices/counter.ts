import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//instanciamos el tipo de valor que usaremos en el estado
export interface CounterState {
  valor: number
}

//ESTADO INICIAL
const initialState: CounterState = {
  valor: 0,
}

//Declaramos la slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState, //compartir mi estado inical con toda mi api
  reducers: {
    //Aqui van las action, las que cambian el estado
    //Funciones modificadoras
    increment: (state) => { //el parametro state nos permite modificar el valor del numero
      state.valor += 1
    },
    decrement: (state) => {
      state.valor -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.valor += action.payload
    },
  },
})

//Las Exportamos para poder usarlas después
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer