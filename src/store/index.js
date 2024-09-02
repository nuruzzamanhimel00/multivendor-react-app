import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counter-slice.js"
import toasterSlice from "./toaster-slice.js"
import authSlice from './backend/auth-slice.js'

 const store = configureStore({
  reducer: {
    counter: counterSlice,
    toaster: toasterSlice,
    auth: authSlice,
  },
})

export default store;