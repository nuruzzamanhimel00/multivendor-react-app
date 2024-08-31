import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const allReducers = {
    increment(state) {
        state.value = state.value + 1
    },
    decrement(state){
        state.value = state.value - 1
    }
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: allReducers,
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer