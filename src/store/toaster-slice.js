import { createSlice } from '@reduxjs/toolkit'



const allReducers = {
    addToaster(state, action) {
        state.push(action.payload)
    },
    removeToaster(state, action) {
        
        return state.filter((toast) => toast.id !== action.payload);
    }
}

const toasterSlice = createSlice({
  name: 'toaster',
  initialState: [],
  reducers: allReducers,
})

export const { addToaster, removeToaster } = toasterSlice.actions
export default toasterSlice.reducer